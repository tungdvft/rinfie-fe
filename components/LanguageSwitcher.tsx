"use client"

import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "vi", label: "VI" },
] as const

function setLocaleCookie(locale: string) {
  if (typeof document === "undefined") return
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`
}

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()

  const handleChange = (newLocale: string) => {
    if (newLocale === locale) return
    setLocaleCookie(newLocale)
    router.refresh()
  }

  return (
    <div className="flex items-center gap-1 rounded-lg bg-white/10 p-1">
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => handleChange(code)}
          className={`rounded-md px-2.5 py-1 text-sm font-medium transition-colors ${
            locale === code
              ? "bg-white/25 text-white"
              : "text-white/80 hover:bg-white/15 hover:text-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
