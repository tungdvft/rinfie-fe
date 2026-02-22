"use client"

import { useTranslations } from "next-intl"
import LandingNav from "@/components/landing/LandingNav"
import { Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const t = useTranslations("landing")

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-950/30 to-gray-900 text-white">
      <LandingNav />

      <main className="pt-24 pb-20 px-4 container mx-auto max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-6">{t("contactTitle")}</h1>
        <p className="text-white/80 text-center mb-10">{t("contactIntro")}</p>
        <div className="flex flex-col items-center gap-6 p-8 rounded-2xl bg-white/5 border border-white/10">
          <Mail className="h-12 w-12 text-pink-400" />
          <a
            href="mailto:support@example.com"
            className="text-pink-400 hover:text-pink-300 font-medium"
          >
            {t("contactEmail")}: support@example.com
          </a>
        </div>
        <div className="mt-10 text-center">
          <Link href="/">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full">
              {t("backToHome")}
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
