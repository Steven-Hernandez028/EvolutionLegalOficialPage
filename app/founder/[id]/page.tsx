"use client"

import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { MainProfile } from "@/components/MainProfile"
import { Education } from "@/components/Education"
import { Specializations } from "@/components/Specializations"
import { NavbarAndTopBar } from "@/components/TopBarAndNavbar"
import { useEffect, useState } from "react"
import { redirect, useParams } from "next/navigation"



export default function FounderDetailPage() {
  const params = useParams();
  const founderId = params.id as string

  const { t } = useLanguage()
  const [url, setUrl] = useState<string>("ceo[0]");

  useEffect(() => {
    console.log(founderId)
    const id = founderId === "abigail-santos-de-thibodeau"? 0 : 1;
    console.log(id)
    setUrl(`ceo[${id}]`);

  }, []);

  return (
    <div className="min-h-screen bg-secondary">
      <NavbarAndTopBar />


      <section className="pt-20 pb-12 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
            <div className="flex justify-center mb-6">
              <Image src="/logo.avif" alt="LegalStudio Logo" width={80} height={80} className="rounded-full" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">{t(`${url}.title`)}</h1>
            <div className="text-2xl text-accent font-semibold">{t(`${url}.name`)}</div>
            <p className="text-xl text-white/80">{t(`${url}.subtitle`)}</p>
          </motion.div>
        </div>
      </section>


      <MainProfile url={url} />
      <Education url={url} />
      <Specializations url={url} />
      <Footer />

    </div>
  )
}
