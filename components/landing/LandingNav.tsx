"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { useState } from "react"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth"

export default function LandingNav() {
  const t = useTranslations("landing")
  const { user } = useFirebaseAuth()
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: "/#features", label: t("navFeatures") },
    { href: "/#pricing", label: t("navPricing") },
    { href: "/about", label: t("navAbout") },
    { href: "/contact", label: t("navContact") },
  ]

  return (
    <header className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-6 absolute top-0 left-0 w-full z-50 bg-[#fdfdfd]/80 backdrop-blur-md border-b border-[#f2f2f2]/50">
      <Link
        href="/"
        className="flex items-center gap-2 text-[#ab2744] font-bold text-2xl tracking-tight hover:opacity-90"
      >
        <img
          className="w-10 h-10 aspect-square object-contain"
          alt="Rinfie"
          src="/landing/logo.svg"
        />
        <span>{t("navBrand")}</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-[#3e3d3f] font-medium text-base hover:text-[#ab2744] transition-colors"
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        {user ? (
          <Link
            href="/app"
            className="hidden md:inline-flex px-4 py-2 rounded-full bg-[linear-gradient(90deg,#f13760_0%,#c81430_100%)] text-[#fdfdfd] font-semibold text-sm hover:opacity-90"
          >
            {t("openApp")}
          </Link>
        ) : (
          <>
            <Link
              href="/login"
              className="hidden md:inline-flex px-4 py-2 rounded-full text-[#3e3d3f] font-medium text-sm hover:bg-[#f5f5f5] transition-colors"
            >
              {t("signIn")}
            </Link>
            <Link
              href="/login"
              className="hidden md:inline-flex px-4 py-2 rounded-full bg-[linear-gradient(90deg,#f13760_0%,#c81430_100%)] text-[#fdfdfd] font-semibold text-sm hover:opacity-90"
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#fdfdfd] border-b border-[#f2f2f2] py-4 px-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[#3e3d3f] font-medium py-2 hover:text-[#ab2744]"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          {!user && (
            <div className="flex gap-2 pt-2">
              <Link href="/login" className="flex-1 py-2 text-center rounded-full border border-[#ab2744] text-[#ab2744] font-medium" onClick={() => setOpen(false)}>
                {t("signIn")}
              </Link>
              <Link href="/login" className="flex-1 py-2 text-center rounded-full bg-[#ab2744] text-white font-semibold" onClick={() => setOpen(false)}>
                {t("signUp")}
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  )
}
