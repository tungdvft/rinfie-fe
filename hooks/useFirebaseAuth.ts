"use client"

import { useEffect, useState, useCallback } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { STORAGE_KEYS, localStorageUtils } from "@/lib/common-utils"

export function useFirebaseAuth() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  // Clean logout function
  const logout = useCallback(async () => {
    try {
      await signOut(auth)
      setUser(null)
      // Clear any stored data
      localStorageUtils.remove(STORAGE_KEYS.ONBOARDING_STEP)
      localStorageUtils.remove(STORAGE_KEYS.ONBOARDING_PROFILE)
      localStorageUtils.remove("last_onboarding_user_id")
      // Reset active tab to discovery
      localStorageUtils.set(STORAGE_KEYS.ACTIVE_TAB, "discovery")
    } catch (error) {
      console.error("Error during logout:", error)
    }
  }, [])

  useEffect(() => {
    // Set loading to false immediately if auth is already initialized
    const currentUser = auth.currentUser
    if (currentUser) {
      setUser(currentUser)
      setLoading(false)
    }

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return { 
    user, 
    loading,
    logout,
  }
}
