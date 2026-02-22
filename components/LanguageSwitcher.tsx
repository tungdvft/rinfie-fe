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
    <div className="flex items-center gap-1 rounded-lg bg-[#f5f5f5] p-1 border border-[#e5e5e5]">
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => handleChange(code)}
          className={`rounded-md px-2.5 py-1 text-sm font-medium transition-colors ${
            locale === code
              ? "bg-[#ab2744] text-white"
              : "text-[#3e3d3f] hover:bg-[#e5e5e5]"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
