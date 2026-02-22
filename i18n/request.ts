import { getRequestConfig } from "next-intl/server"
import { cookies } from "next/headers"

const locales = ["en", "vi"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value
  const locale = isValidLocale(localeCookie || "") ? localeCookie : defaultLocale

  const mainMessages = (await import(`../messages/${locale}.json`)).default
  const landingMessages = (await import(`../messages/landing/${locale}.json`)).default
  const messages = { ...mainMessages, landing: landingMessages }

  return {
    locale: locale || defaultLocale,
    messages,
    timeZone: "Asia/Ho_Chi_Minh",
  }
})
