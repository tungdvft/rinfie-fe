"use client"

import { useState, useEffect, useCallback } from "react"
import { collection, query, where, getDocs, doc, getDoc, addDoc, updateDoc, limit, Timestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import type { User } from "firebase/auth"
import type { UserProfile } from "./use-onboarding"
import { calculateDistance, GENDER_FILTERS, CHAT_ACTIONS, DAILY_LIKE_LIMIT } from "@/lib/common-utils"

export const useDiscovery = (user: User) => {
  const [profiles, setProfiles] = useState<UserProfile[]>([])
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [matchedUser, setMatchedUser] = useState<UserProfile | null>(null)
  const [myMatches, setMyMatches] = useState<UserProfile[]>([])
  const [whoLikesMe, setWhoLikesMe] = useState<UserProfile[]>([])
  const [likesUsedToday, setLikesUsedToday] = useState(0)

  // Load current user profile
  const loadCurrentUser = useCallback(async () => {
    try {
      const userDoc = await getDoc(doc(db, "users", user?.uid))
      if (userDoc.exists()) {
        setCurrentUser(userDoc.data() as UserProfile)
      }
    } catch (error) {
      console.error("Error loading current user:", error)
    }
  }, [user?.uid])

  // Get IDs of users current user already interacted with
  const getInteractedUserIds = async (userId: string): Promise<string[]> => {
    try {
      const interactionsQuery = query(collection(db, "interactions"), where("userId", "==", userId))
      const snapshot = await getDocs(interactionsQuery)
      return snapshot.docs.map((doc) => doc.data().targetUserId)
    } catch (error) {
      console.error("Error getting interacted users:", error)
      return []
    }
  }

  // Count likes (like + superlike) used today — for daily limit
  const loadTodayLikeCount = useCallback(async () => {
    if (!user?.uid) return
    try {
      const startOfDay = new Date()
      startOfDay.setHours(0, 0, 0, 0)
      const startTimestamp = Timestamp.fromDate(startOfDay)
      const q = query(
        collection(db, "interactions"),
        where("userId", "==", user.uid),
        where("createdAt", ">=", startTimestamp),
        limit(100)
      )
      const snapshot = await getDocs(q)
      const count = snapshot.docs.filter(
        (d) => d.data().action === "like" || d.data().action === "superlike"
      ).length
      setLikesUsedToday(count)
    } catch (error) {
      console.error("Error loading today like count:", error)
    }
  }, [user?.uid])

  // Load profiles for discovery
  const loadProfiles = useCallback(async () => {
    console.log("loadProfiles")
    if (!currentUser) return

    setLoading(true)
    try {
      const interactedUserIds = await getInteractedUserIds(user.uid)
      const excludedUsers = [...interactedUserIds, user.uid]

      const genderFilter = [...(GENDER_FILTERS[currentUser.gender as keyof typeof GENDER_FILTERS] || GENDER_FILTERS.default)]

      const usersQuery = query(
        collection(db, "users"),
        where("profileComplete", "==", true),
        where("gender", "in", genderFilter),
        where("age", ">=", currentUser.ageRange[0]),
        where("age", "<=", currentUser.ageRange[1]),
        limit(50),
      )

      const snapshot = await getDocs(usersQuery)
      const currentLookingFor = currentUser.lookingFor || []
      const potentialProfiles = snapshot.docs
        .map((doc) => ({ ...doc.data(), uid: doc.id }) as UserProfile)
        .filter((profile) => !excludedUsers.includes(profile.uid))
        // Serious dating: only show people with at least one matching intention
        .filter((profile) => {
          const theirLookingFor = profile.lookingFor || []
          if (currentLookingFor.length === 0 || theirLookingFor.length === 0) return true
          const hasOverlap = currentLookingFor.some((intent) => theirLookingFor.includes(intent))
          return hasOverlap
        })
        .map((profile) => {
          const distance = calculateDistance(
            currentUser.location.latitude,
            currentUser.location.longitude,
            profile.location.latitude,
            profile.location.longitude
          )
          return { ...profile, distance }
        })
        .sort((a, b) => (a.distance || 0) - (b.distance || 0))
        .slice(0, 50)

      setProfiles(potentialProfiles)
    } catch (error) {
      console.error("Error loading profiles:", error)
    } finally {
      setLoading(false)
    }
  }, [currentUser, user?.uid])

  const handleSwipeAction = async (
    profile: UserProfile,
    action: "like" | "dislike" | "superlike",
  ): Promise<boolean> => {
    try {
      // Daily like limit — encourage thoughtful choices
      if (
        (action === "like" || action === "superlike") &&
        likesUsedToday >= DAILY_LIKE_LIMIT
      ) {
        return false
      }

      // 1️⃣ Save interaction
      await addDoc(collection(db, "interactions"), {
        userId: user.uid,
        targetUserId: profile.uid,
        action,
        status: action === "dislike" ? "rejected" : "pending",
        createdAt: Timestamp.now(),
      })

      console.log(`✅ Interaction saved: ${user.uid} -> ${profile.uid} (${action})`)

      // Remove from local list
      setProfiles((prev) => prev.filter((p) => p.uid !== profile.uid))

      // 2️⃣ Only check for match if positive swipe
      if (action === "like" || action === "superlike") {
        console.log("🔍 Checking if other user already liked back...")

        const otherUserLikesQuery = query(
          collection(db, "interactions"),
          where("userId", "==", profile.uid),
          where("targetUserId", "==", user.uid),
          where("action", "in", CHAT_ACTIONS),
          where("status", "==", "pending"),
        )

        const likesSnapshot = await getDocs(otherUserLikesQuery)

        // 3️⃣ If they liked back → update both to matched status
        if (!likesSnapshot.empty) {
          console.log("💖 Match found! Updating interaction statuses...")

          // Update other user's interaction to matched
          const otherUserDoc = likesSnapshot.docs[0]
          await updateDoc(otherUserDoc.ref, { status: "matched" })

          // Update current user's interaction to matched
          const currentUserQuery = query(
            collection(db, "interactions"),
            where("userId", "==", user.uid),
            where("targetUserId", "==", profile.uid),
            where("action", "in", CHAT_ACTIONS),
          )
          const currentUserSnapshot = await getDocs(currentUserQuery)
          if (!currentUserSnapshot.empty) {
            await updateDoc(currentUserSnapshot.docs[0].ref, { status: "matched" })
          }

          console.log("🎉 Match created between:", user.uid, "and", profile.uid)
          setMatchedUser(profile)

          // Refresh data
          loadWhoLikesMe()
          loadMyMatches()
        } else {
          console.log(" No match yet — waiting for other user to like back.")
        }
      }

      if (action === "like" || action === "superlike") {
        setLikesUsedToday((prev) => prev + 1)
      }
      return true
    } catch (error) {
      console.error("Error handling swipe action:", error)
      return false
    }
  }

  const loadWhoLikesMe = useCallback(async () => {
    try {
      const likedMeQuery = query(
        collection(db, "interactions"),
        where("targetUserId", "==", user.uid),
        where("action", "in", ["like", "superlike"]),
        where("status", "==", "pending"),
      )
      const snapshot = await getDocs(likedMeQuery)

      const userIds = snapshot.docs.map((doc) => doc.data().userId)

      const profiles = await Promise.all(
        userIds.map(async (likerId) => {
          const likerDoc = await getDoc(doc(db, "users", likerId))
          if (!likerDoc.exists()) return null
          return { ...likerDoc.data(), uid: likerDoc.id } as UserProfile
        }),
      )

      setWhoLikesMe(profiles.filter(Boolean) as UserProfile[])
    } catch (error) {
      console.error("Error loading who likes me:", error)
    }
  }, [user?.uid])

  const loadMyMatches = useCallback(async () => {
    try {
      const matchesQuery = query(
        collection(db, "interactions"),
        where("userId", "==", user.uid),
        where("status", "==", "matched"),
      )
      const snapshot = await getDocs(matchesQuery)

      const userIds = snapshot.docs.map((doc) => doc.data().targetUserId)

      const profiles = await Promise.all(
        userIds.map(async (matchId) => {
          const matchDoc = await getDoc(doc(db, "users", matchId))
          if (!matchDoc.exists()) return null
          return { ...matchDoc.data(), uid: matchDoc.id } as UserProfile
        }),
      )

      setMyMatches(profiles.filter(Boolean) as UserProfile[])
    } catch (error) {
      console.error("Error loading my matches:", error)
    }
  }, [user?.uid])

  // Load data on init
  useEffect(() => {
    loadCurrentUser()
  }, [loadCurrentUser])

  useEffect(() => {
    if (currentUser) {
      loadProfiles()
      loadMyMatches()
      loadWhoLikesMe()
      loadTodayLikeCount()
    }
  }, [currentUser, loadProfiles, loadMyMatches, loadWhoLikesMe, loadTodayLikeCount])

  return {
    profiles,
    currentUser,
    loading,
    matchedUser,
    setMatchedUser,
    handleSwipeAction,
    loadProfiles,
    myMatches,
    whoLikesMe,
    loadWhoLikesMe,
    loadMyMatches,
    likesUsedToday,
    dailyLikeLimit: DAILY_LIKE_LIMIT,
  }
}
