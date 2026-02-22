"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth"

export default function HeroBannerSection() {
  const t = useTranslations("landing")
  const { user } = useFirebaseAuth()

  return (
    <section className="flex flex-col items-center justify-center gap-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 pt-28 relative self-stretch w-full">
      <div className="flex flex-col items-center gap-6 relative w-full">
        <h1 className="font-bold text-[#ab2744] text-4xl sm:text-5xl md:text-6xl text-center tracking-[0] leading-[1.2]">
          {t("heroTitle")}
        </h1>
        <p className="max-w-[800px] text-[#3e3d3f] font-normal text-lg sm:text-xl text-center leading-8">
          {t("heroSubtitle")}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        {user ? (
          <Link
            href="/app"
            className="min-w-[168px] px-6 py-3 rounded-[99px] bg-[linear-gradient(90deg,rgba(241,55,96,1)_0%,rgba(200,20,48,1)_100%)] text-[#fdfdfd] font-semibold text-base text-center hover:opacity-90"
          >
            {t("openApp")}
          </Link>
        ) : (
          <Link
            href="/login"
            className="min-w-[168px] px-6 py-3 rounded-[99px] bg-[linear-gradient(90deg,rgba(241,55,96,1)_0%,rgba(200,20,48,1)_100%)] text-[#fdfdfd] font-semibold text-base text-center hover:opacity-90"
          >
            {t("heroCta")}
          </Link>
        )}
        <Link
          href="/about"
          className="min-w-[168px] px-6 py-3 rounded-[99px] bg-[#fdfdfd] border border-solid border-[#ab2744] text-[#ab2744] font-semibold text-base text-center hover:bg-[#fef5f7]"
        >
          {t("heroSecondary")}
        </Link>
      </div>

      <div className="relative w-full max-w-[1200px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-8 rounded-3xl overflow-hidden">
        <img
          className="absolute w-full h-full object-cover"
          alt="Hero Banner"
          src="/landing/hero-banner-placeholder.png"
        />
      </div>
    </section>
  )
}
