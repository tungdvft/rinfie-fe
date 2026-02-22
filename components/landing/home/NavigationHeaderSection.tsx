"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { useState } from "react"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth"

export default function NavigationHeaderSection() {
  const t = useTranslations("landing")
  const { user } = useFirebaseAuth()
  const [open, setOpen] = useState(false)

  return (
    <header className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-6 absolute top-0 left-0 w-full z-50 bg-[#fdfdfd]/80 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-2">
        <img
          className="relative w-10 h-10 aspect-[1]"
          alt="Rinfie Logo"
          src="https://c.animaapp.com/wDnFaDjy/img/logo.svg"
        />
        <span className="font-bold text-[#ab2744] text-2xl tracking-[0] leading-[normal]">
          {t("navBrand")}
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="#features" className="font-medium text-[#3e3d3f] text-base hover:text-[#ab2744]">
          {t("navFeatures")}
        </Link>
        <Link href="#pricing" className="font-medium text-[#3e3d3f] text-base hover:text-[#ab2744]">
          {t("navPricing")}
        </Link>
        <Link href="/about" className="font-medium text-[#3e3d3f] text-base hover:text-[#ab2744]">
          {t("navAbout")}
        </Link>
        <Link href="/contact" className="font-medium text-[#3e3d3f] text-base hover:text-[#ab2744]">
          {t("navContact")}
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        {user ? (
          <Link
            href="/app"
            className="hidden md:inline-flex px-4 py-2 rounded-[99px] bg-[linear-gradient(90deg,rgba(241,55,96,1)_0%,rgba(200,20,48,1)_100%)] text-[#fdfdfd] font-semibold text-sm hover:opacity-90"
          >
            {t("openApp")}
          </Link>
        ) : (
          <>
            <Link
              href="/login"
              className="hidden md:inline-flex px-4 py-2 rounded-[99px] text-[#3e3d3f] font-medium text-sm hover:bg-[#f5f5f5]"
            >
              {t("signIn")}
            </Link>
            <Link
              href="/login"
              className="hidden md:inline-flex px-4 py-2 rounded-[99px] bg-[linear-gradient(90deg,rgba(241,55,96,1)_0%,rgba(200,20,48,1)_100%)] text-[#fdfdfd] font-semibold text-sm hover:opacity-90"
            >
              {t("signUp")}
            </Link>
          </>
        )}
        <button
          type="button"
          className="md:hidden p-2 text-[#3e3d3f]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#fdfdfd] border-b border-[#f2f2f2] py-4 px-4 flex flex-col gap-3 shadow-lg z-50">
          <Link href="#features" className="font-medium text-[#3e3d3f] py-2 hover:text-[#ab2744]" onClick={() => setOpen(false)}>{t("navFeatures")}</Link>
          <Link href="#pricing" className="font-medium text-[#3e3d3f] py-2 hover:text-[#ab2744]" onClick={() => setOpen(false)}>{t("navPricing")}</Link>
          <Link href="/about" className="font-medium text-[#3e3d3f] py-2 hover:text-[#ab2744]" onClick={() => setOpen(false)}>{t("navAbout")}</Link>
          <Link href="/contact" className="font-medium text-[#3e3d3f] py-2 hover:text-[#ab2744]" onClick={() => setOpen(false)}>{t("navContact")}</Link>
          {!user && (
            <div className="flex gap-2 pt-2">
              <Link href="/login" className="flex-1 py-2 text-center rounded-full border border-[#ab2744] text-[#ab2744] font-medium" onClick={() => setOpen(false)}>{t("signIn")}</Link>
              <Link href="/login" className="flex-1 py-2 text-center rounded-full bg-[#ab2744] text-white font-semibold" onClick={() => setOpen(false)}>{t("signUp")}</Link>
            </div>
          )}
        </div>
      )}
    </header>
  )
}
