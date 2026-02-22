"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Heart, ArrowRight, Shield, MessageCircle } from "lucide-react"
import LandingNav from "@/components/landing/LandingNav"
import { Button } from "@/components/ui/button"
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth"

export default function LandingHomePage() {
  const t = useTranslations("landing")
  const { user } = useFirebaseAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-950/30 to-gray-900 text-white">
      <LandingNav />

      <main className="pt-24 pb-20 px-4 container mx-auto">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-white/80 mb-10">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link href="/app">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full px-8 py-6 text-lg"
                >
                  {t("openApp")}
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full px-8 py-6 text-lg"
                >
                  {t("heroCta")}
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Button>
              </Link>
            )}
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
              >
                {t("heroSecondary")}
              </Button>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-2xl font-semibold text-center mb-12 text-white/90">
            {t("featuresTitle")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-pink-400" />
              <h3 className="font-semibold text-lg mb-2">{t("feature1Title")}</h3>
              <p className="text-white/70 text-sm">{t("feature1Desc")}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-pink-400" />
              <h3 className="font-semibold text-lg mb-2">{t("feature2Title")}</h3>
              <p className="text-white/70 text-sm">{t("feature2Desc")}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 text-pink-400" />
              <h3 className="font-semibold text-lg mb-2">{t("feature3Title")}</h3>
              <p className="text-white/70 text-sm">{t("feature3Desc")}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center max-w-2xl mx-auto">
          <p className="text-white/80 mb-6">{t("heroSubtitle")}</p>
          <Link href="/login">
            <Button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full px-8">
              {t("heroCta")}
            </Button>
          </Link>
        </section>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-white/60 text-sm">
        {t("footerCopy")}
      </footer>
    </div>
  )
}
