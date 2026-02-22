"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"

export default function LandingCta() {
  const t = useTranslations("landing")

  return (
    <section id="pricing" className="max-w-2xl mx-auto px-4 py-16 text-center">
      <p className="text-[#3e3d3f] mb-6">{t("heroSubtitle")}</p>
      <Link
        href="/login"
        className="inline-flex min-w-[168px] px-8 py-3 rounded-full bg-[linear-gradient(90deg,#f13760_0%,#c81430_100%)] text-[#fdfdfd] font-semibold hover:opacity-90 transition-opacity"
      >
        {t("heroCta")}
      </Link>
    </section>
  )
}
