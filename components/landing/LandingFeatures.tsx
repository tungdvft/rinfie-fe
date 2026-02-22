"use client"

import { useTranslations } from "next-intl"

export default function LandingFeatures() {
  const t = useTranslations("landing")

  return (
    <section
      id="features"
      className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 md:py-24"
    >
      <h2 className="font-bold text-[#ab2744] text-3xl md:text-4xl text-center tracking-tight mb-12">
        {t("featuresTitle")}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl bg-white/90 border border-[#f2f2f2] shadow-sm text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[linear-gradient(180deg,#fcefef_0%,#feebef_100%)] flex items-center justify-center">
            <span className="text-2xl" aria-hidden>💝</span>
          </div>
          <h3 className="font-semibold text-lg text-[#242325] mb-2">{t("feature1Title")}</h3>
          <p className="text-[#3e3d3f]/90 text-sm leading-relaxed">{t("feature1Desc")}</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/90 border border-[#f2f2f2] shadow-sm text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[linear-gradient(180deg,#fcefef_0%,#feebef_100%)] flex items-center justify-center">
            <span className="text-2xl" aria-hidden>🛡️</span>
          </div>
          <h3 className="font-semibold text-lg text-[#242325] mb-2">{t("feature2Title")}</h3>
          <p className="text-[#3e3d3f]/90 text-sm leading-relaxed">{t("feature2Desc")}</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/90 border border-[#f2f2f2] shadow-sm text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[linear-gradient(180deg,#fcefef_0%,#feebef_100%)] flex items-center justify-center">
            <span className="text-2xl" aria-hidden>💬</span>
          </div>
          <h3 className="font-semibold text-lg text-[#242325] mb-2">{t("feature3Title")}</h3>
          <p className="text-[#3e3d3f]/90 text-sm leading-relaxed">{t("feature3Desc")}</p>
        </div>
      </div>
    </section>
  )
}
