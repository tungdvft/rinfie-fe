"use client"

import { useEffect, useState, useCallback } from "react"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { UserProfile } from "@/hooks/use-onboarding"

interface UseUserProfileResult {
  profile: UserProfile | null
  loading: boolean
  error: string | null
  refresh: () => Promise<void>
}

export function useUserProfile(userId: string | undefined): UseUserProfileResult {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!userId) {
      setProfile(null)
      setLoading(false) // Set loading to false when no userId
      setError(null)
      return
    }

    setLoading(true)
    setError(null)

    const userRef = doc(db, "users", userId)
    
    const unsubscribe = onSnapshot(
      userRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const profileData = snapshot.data() as UserProfile
          
          // Only set profile if it's complete
          if (profileData.profileComplete) {
            const profileWithUid = {
              ...profileData,
              uid: userId
            }
            setProfile(profileWithUid)
            setError(null)
          } else {
            // Profile exists but not complete
            setProfile(null)
            setError(null)
          }
        } else {
          // No profile document exists
          setProfile(null)
          setError(null)
        }
        setLoading(false)
      },
      (err) => {
        console.error("Error loading profile:", err)
        setError(err.message)
        setProfile(null)
        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, [userId])

  const refresh = useCallback(async () => {
    // Real-time listener handles updates automatically
    // This is just for compatibility
  }, [])

  return { 
    profile, 
    loading, 
    error, 
    refresh 
  }
}

