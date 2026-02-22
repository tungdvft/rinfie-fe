import { Poppins } from "next/font/google"
import { NavigationHeaderSection, FooterSection } from "@/components/landing/home"

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
})

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${poppins.className} min-h-screen bg-[#fdfdfd] relative`}>
      <img
        className="h-full top-0 left-0 object-cover absolute w-full pointer-events-none"
        alt=""
        aria-hidden
        src="https://c.animaapp.com/wDnFaDjy/img/bg.svg"
      />
      <div className="relative z-0 flex flex-col min-h-screen">
        <NavigationHeaderSection />
        <main className="flex-1">{children}</main>
        <FooterSection />
      </div>
    </div>
  )
}
