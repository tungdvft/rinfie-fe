"use client"

import { useTranslations } from "next-intl"
import LandingNav from "@/components/landing/LandingNav"
import { Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const t = useTranslations("landing")

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-950/30 to-gray-900 text-white">
      <LandingNav />

      <main className="pt-24 pb-20 px-4 container mx-auto max-w-2xl">
        <div className="flex justify-center mb-8">
          <Heart className="h-16 w-16 fill-pink-500 text-pink-500" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-6">{t("aboutTitle")}</h1>
        <p className="text-white/80 text-lg mb-6 leading-relaxed">
          {t("aboutIntro")}
        </p>
        <p className="text-white/70 leading-relaxed">
          {t("aboutMission")}
        </p>
        <div className="mt-10 text-center">
          <Link href="/login">
            <Button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full px-8">
              {t("navGetStarted")}
            </Button>
          </Link>
        </div>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-white/60 text-sm">
        {t("footerCopy")}
      </footer>
    </div>
  )
}
