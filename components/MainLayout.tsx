"use client"
import type { User } from "firebase/auth"
import ResponsiveNavigation from "@/components/responsive-navigation"
import { UserProfile } from "@/hooks/use-onboarding"
import { useEffect } from "react"
import { doc, updateDoc, serverTimestamp } from "firebase/firestore"
import { db, app } from "@/lib/firebase"
import {
  getDatabase,
  ref,
  onDisconnect,
  onValue,
  serverTimestamp as rtdbServerTimestamp,
  set,
  update,
} from "firebase/database"

interface MainLayoutProps {
  user: User
  activeTab: string
  onTabChange: (tab: string) => void
  children: React.ReactNode
  profile: UserProfile
}

export default function MainLayout({
  user,
  activeTab,
  onTabChange,
  children,
  profile,
}: MainLayoutProps) {
  useEffect(() => {
    if (!user?.uid) return

    const firestoreUserRef = doc(db, "users", user.uid)
    const rtdb = getDatabase(app)
    const userStatusRef = ref(rtdb, `/status/${user.uid}`)

    // Status values for Realtime Database
    const isOfflineForRTDB = {
      isOnline: false,
      lastSeen: Date.now(),
    }

    const isOnlineForRTDB = {
      isOnline: true,
      lastSeen: Date.now(),
    }

    // When connected to Firebase Realtime DB, set up onDisconnect
    const connectedRef = ref(rtdb, ".info/connected")

    const unsubscribe = onValue(connectedRef, async (snap) => {
      if (snap.val() === false) {
        return
      }

      // When client disconnects, mark as offline automatically
      await onDisconnect(userStatusRef).set(isOfflineForRTDB)

      // When connected, mark as online in RTDB
      await set(userStatusRef, isOnlineForRTDB)

      // Also update Firestore for visibility
      await updateDoc(firestoreUserRef, {
        isOnline: true,
        lastSeen: serverTimestamp(),
      })
    })

    const handleVisibilityChange = async () => {
      if (document.visibilityState === "hidden") {
        await update(userStatusRef, isOfflineForRTDB)
        await updateDoc(firestoreUserRef, {
          isOnline: false,
          lastSeen: serverTimestamp(),
        })
      } else {
        await update(userStatusRef, isOnlineForRTDB)
        await updateDoc(firestoreUserRef, {
          isOnline: true,
          lastSeen: serverTimestamp(),
        })
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    // Cleanup
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      unsubscribe()
      update(userStatusRef, isOfflineForRTDB)
    }
  }, [user?.uid])

  return (
    <div className="min-h-screen bg-black flex relative pb-20 md:pb-0">
      {/* Desktop sidebar */}
      <div className="hidden lg:block fixed top-0 left-0 h-screen">
        <ResponsiveNavigation
          activeTab={activeTab}
          onTabChange={onTabChange}
          user={user}
          profile={profile}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 lg:ml-80 pb-16 lg:pb-0">{children}</div>

      {/* Mobile nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0">
        <ResponsiveNavigation
          activeTab={activeTab}
          onTabChange={onTabChange}
          user={user}
          profile={profile}
        />
      </div>
    </div>
  )
}
