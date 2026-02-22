"use client"
import { useEffect } from "react"
import { useOnboarding } from "@/hooks/use-onboarding"
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth"
import MainLayout from "@/components/MainLayout"
import DiscoveryPage from "@/app/discovery/page"
import MatchesPage from "@/app/matches/page"
import { useUserProfile } from "@/hooks/useUserProfile"
import Loader from "@/components/Loader"
import { UserProfile } from "@/hooks/use-onboarding"
import MessagesPage from "@/app/message/page"
import { useActiveTab } from "@/hooks/useActiveTab"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import ProfilePage from "@/app/profile/page"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"

export default function AppPage() {
  const t = useTranslations("loader")
  const { user, loading: userLoading } = useFirebaseAuth()
  const { profile, loading: profileLoading } = useUserProfile(user?.uid)
  const [activeTab, setActiveTab] = useActiveTab("activeTab", "discovery")
  const { updateProfile: updateLocalProfile } = useOnboarding()
  const router = useRouter()

  useEffect(() => {
    if (userLoading || profileLoading) return
    if (!user) {
      router.push("/login")
      return
    }
    if (user && !profile) {
      router.push("/user-onboarding")
      return
    }
  }, [user, userLoading, profile, profileLoading, router])

  const handleProfileUpdate = async (updates: Partial<UserProfile>) => {
    if (!user?.uid) return
    updateLocalProfile(updates)
    const userRef = doc(db, "users", user.uid)
    try {
      await updateDoc(userRef, updates)
    } catch (error) {
      console.error("Error updating profile in Firestore:", error)
    }
  }

  const handleSelectMatch = () => setActiveTab("messages")

  if (userLoading) return <Loader message={t("checkingAuth")} />
  if (profileLoading) return <Loader message={t("loadingProfile")} />
  if (!user) return <Loader message={t("redirectingLogin")} />
  if (!profile) return <Loader message={t("redirectingOnboarding")} />

  return (
    <MainLayout user={user} activeTab={activeTab} onTabChange={setActiveTab} profile={profile}>
      {activeTab === "messages" ? (
        <MessagesPage user={user} />
      ) : activeTab === "discovery" ? (
        <DiscoveryPage user={user} onSelectMatch={handleSelectMatch} />
      ) : activeTab === "matches" ? (
        <MatchesPage user={user} onSelectMatch={handleSelectMatch} />
      ) : activeTab === "profile" ? (
        <ProfilePage profile={profile} onUpdate={handleProfileUpdate} isOwnProfile={true} />
      ) : null}
    </MainLayout>
  )
}
