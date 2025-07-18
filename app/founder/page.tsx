"use client"

import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { MainProfile } from "@/components/MainProfile"
import { Education } from "@/components/Education"
import { Specializations } from "@/components/Specializations"
import { NavbarAndTopBar } from "@/components/TopBarAndNavbar"

export default function FounderPage() {
  const { t } = useLanguage()

  
  return (
    <div className="min-h-screen bg-secondary">
     <NavbarAndTopBar />


      <section className="pt-20 pb-12 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
            <div className="flex justify-center mb-6">
              <Image src="/logo.avif" alt="LegalStudio Logo" width={80} height={80} className="rounded-full" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">{t("ceo.title")}</h1>
            <div className="text-2xl text-accent font-semibold">{t("ceo.name")}</div>
            <p className="text-xl text-white/80">{t("ceo.subtitle")}</p>
          </motion.div>
        </div>
      </section>


      <MainProfile />
      <Education />
      <Specializations />
      <Footer />

    </div>
  )
}
