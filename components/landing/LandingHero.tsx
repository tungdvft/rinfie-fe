"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth"

export default function LandingHero() {
  const t = useTranslations("landing")
  const { user } = useFirebaseAuth()

  return (
    <section className="flex flex-col items-center justify-center gap-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 pt-28 relative w-full max-w-6xl mx-auto">
      <div className="flex flex-col items-center gap-6 w-full">
        <h1 className="font-bold text-[#ab2744] text-4xl sm:text-5xl md:text-6xl text-center tracking-tight leading-[1.2]">
          {t("heroTitle")}
        </h1>
        <p className="text-[#3e3d3f] font-normal text-lg sm:text-xl text-center max-w-[800px] leading-8">
          {t("heroSubtitle")}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        {user ? (
          <Link
            href="/app"
            className="min-w-[168px] px-6 py-3 rounded-full bg-[linear-gradient(90deg,#f13760_0%,#c81430_100%)] text-[#fdfdfd] font-semibold text-base text-center hover:opacity-90 transition-opacity"
          >
            {t("openApp")}
          </Link>
        ) : (
          <Link
            href="/login"
            className="min-w-[168px] px-6 py-3 rounded-full bg-[linear-gradient(90deg,#f13760_0%,#c81430_100%)] text-[#fdfdfd] font-semibold text-base text-center hover:opacity-90 transition-opacity"
          >
            {t("heroCta")}
          </Link>
        )}
        <Link
          href="/about"
          className="min-w-[168px] px-6 py-3 rounded-full bg-[#fdfdfd] border-2 border-[#ab2744] text-[#ab2744] font-semibold text-base text-center hover:bg-[#fef5f7] transition-colors"
        >
          {t("heroSecondary")}
        </Link>
      </div>

      <div className="relative w-full max-w-[1200px] aspect-[2/1] mt-8 rounded-3xl overflow-hidden bg-[#f2f2f2]">
        <img
          className="w-full h-full object-cover"
          alt="Hero"
          src="/landing/hero-banner-placeholder.png"
        />
      </div>
    </section>
  )
}
