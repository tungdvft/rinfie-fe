"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"

export default function LandingFooter() {
  const t = useTranslations("landing")

  return (
    <footer className="flex flex-col items-center bg-[#1a202c] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 w-full">
      <div className="flex flex-col items-center gap-8 w-full max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 w-full">
          <div className="flex flex-col gap-4">
            <div className="font-bold text-[#fdfdfd] text-2xl">{t("navBrand")}</div>
            <p className="text-[#9c9c9d] text-sm max-w-[300px]">{t("footerTagline")}</p>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-16">
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-[#fdfdfd] text-base">{t("footerCompany")}</div>
              <div className="flex flex-col gap-2">
                <Link href="/about" className="text-[#9c9c9d] text-sm hover:text-[#fdfdfd] transition-colors">
                  {t("footerAbout")}
                </Link>
                <a href="#" className="text-[#9c9c9d] text-sm hover:text-[#fdfdfd] transition-colors">
                  {t("footerCareers")}
                </a>
                <Link href="/contact" className="text-[#9c9c9d] text-sm hover:text-[#fdfdfd] transition-colors">
                  {t("footerContact")}
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="font-semibold text-[#fdfdfd] text-base">{t("footerSupport")}</div>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-[#9c9c9d] text-sm hover:text-[#fdfdfd] transition-colors">
                  {t("footerHelp")}
                </a>
                <a href="#" className="text-[#9c9c9d] text-sm hover:text-[#fdfdfd] transition-colors">
                  {t("footerSafety")}
                </a>
                <a href="#" className="text-[#9c9c9d] text-sm hover:text-[#fdfdfd] transition-colors">
                  {t("footerTerms")}
                </a>
                <a href="#" className="text-[#9c9c9d] text-sm hover:text-[#fdfdfd] transition-colors">
                  {t("footerPrivacy")}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="font-semibold text-[#fdfdfd] text-base">{t("footerFollow")}</div>
              <div className="flex items-center gap-4">
                <a href="#" className="w-6 h-6 hover:opacity-80" aria-label="Facebook">
                  <img src="https://c.animaapp.com/wDnFaDjy/img/social-icon-facebook.svg" alt="" className="w-full h-full" />
                </a>
                <a href="#" className="w-6 h-6 hover:opacity-80" aria-label="Twitter">
                  <img src="https://c.animaapp.com/wDnFaDjy/img/social-icon-twitter.svg" alt="" className="w-full h-full" />
                </a>
                <a href="#" className="w-6 h-6 hover:opacity-80" aria-label="Instagram">
                  <img src="https://c.animaapp.com/wDnFaDjy/img/social-icon-instagram.svg" alt="" className="w-full h-full" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pt-8 border-t border-[#3e3d3f] w-full">
          <p className="text-[#9c9c9d] text-sm">{t("footerCopy")}</p>
        </div>
      </div>
    </footer>
  )
}
