"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Heart, Menu, X } from "lucide-react"
import { useState } from "react"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import { Button } from "@/components/ui/button"

export default function LandingNav() {
  const t = useTranslations("landing")
  const [open, setOpen] = useState(false)

  const links = [
    { href: "/", label: t("navHome") },
    { href: "/about", label: t("navAbout") },
    { href: "/contact", label: t("navContact") },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl hover:opacity-90">
          <Heart className="h-7 w-7 fill-pink-500 text-pink-500" />
          <span className="hidden sm:inline">{t("navBrand")}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link href="/login" className="hidden md:block">
            <Button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full px-5">
              {t("navGetStarted")}
            </Button>
          </Link>
          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur border-b border-white/10 py-4 px-4 flex flex-col gap-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white/90 hover:text-white py-2 font-medium"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link href="/login" className="pt-2" onClick={() => setOpen(false)}>
            <Button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full">
              {t("navGetStarted")}
            </Button>
          </Link>
        </div>
      )}
    </header>
  )
}
