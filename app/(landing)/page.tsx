"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { HeroBannerSection, FeaturesAndPlansSection } from "@/components/landing/home"
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth"
import Loader from "@/components/Loader"
import { useTranslations } from "next-intl"

export default function LandingHomePage() {
  const router = useRouter()
  const { user, loading } = useFirebaseAuth()
  const t = useTranslations("loader")

  useEffect(() => {
    if (loading) return
    if (user) {
      router.replace("/app")
      return
    }
  }, [user, loading, router])

  if (loading) return <Loader message={t("checkingAuth")} />
  if (user) return <Loader message={t("redirectingApp")} />

  return (
    <>
      <div className="flex flex-col items-start w-full pt-[86px]">
        <HeroBannerSection />
        <FeaturesAndPlansSection />
      </div>
    </>
  )
}
