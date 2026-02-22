"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"

export default function ContactPage() {
  const t = useTranslations("landing")

  return (
    <main className="pt-28 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#ab2744]">{t("contactTitle")}</h1>
      <p className="text-[#3e3d3f] text-center mb-10">{t("contactIntro")}</p>
      <div className="flex flex-col items-center gap-6 p-8 rounded-2xl bg-white/90 border border-[#f2f2f2] shadow-sm">
        <span className="text-4xl" aria-hidden>✉️</span>
        <a
          href="mailto:support@example.com"
          className="text-[#ab2744] hover:underline font-medium"
        >
          {t("contactEmail")}: support@example.com
        </a>
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/"
          className="inline-flex px-6 py-3 rounded-full border-2 border-[#ab2744] text-[#ab2744] font-semibold hover:bg-[#fef5f7] transition-colors"
        >
          {t("backToHome")}
        </Link>
      </div>
    </main>
  )
}
