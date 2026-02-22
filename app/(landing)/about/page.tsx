"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"

export default function AboutPage() {
  const t = useTranslations("landing")

  return (
    <main className="pt-28 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-2xl mx-auto">
      <div className="flex justify-center mb-8">
        <span className="text-6xl" aria-hidden>💝</span>
      </div>
      <h1 className="text-3xl font-bold text-center mb-6 text-[#ab2744]">{t("aboutTitle")}</h1>
      <p className="text-[#3e3d3f] text-lg mb-6 leading-relaxed">{t("aboutIntro")}</p>
      <p className="text-[#3e3d3f]/90 leading-relaxed">{t("aboutMission")}</p>
      <div className="mt-10 text-center">
        <Link
          href="/login"
          className="inline-flex min-w-[168px] px-8 py-3 rounded-full bg-[linear-gradient(90deg,#f13760_0%,#c81430_100%)] text-[#fdfdfd] font-semibold hover:opacity-90"
        >
          {t("navGetStarted")}
        </Link>
      </div>
    </main>
  )
}
