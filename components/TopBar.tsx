"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const LinkMotion = motion.create(Link)

export function TopBar() {
  const { t } = useLanguage()

  const countries = [
    {
      name: "Canada",
      flag: "🇨🇦",
      code: "CA",
      image: "https://flagcdn.com/w80/ca.png"
    },
    {
      name: "República Dominicana",
      flag: "🇩🇴",
      code: "DO",
      image: "https://flagcdn.com/w80/do.png"
    },
    {
      name: "Estados Unidos",
      flag: "🇺🇸",
      code: "US",
      image: "https://flagcdn.com/w80/us.png"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-gradient-to-r from-primary/90 to-primary border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 relative">
          <div className="flex-1 z-10">
            <LinkMotion 
              href="/" 
              whileHover={{ scale: 1.02 }} 
              className="flex items-center space-x-3 group inline-flex"
            >
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Evolution Legal Advantage Logo"
                  width={36}
                  height={36}
                  className="rounded-full ring-2 ring-white/20 group-hover:ring-accent/50 transition-all duration-300"
                />
              </div>
              <span className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300 hidden sm:block">
                {t("company.name")}
              </span>
              <span className="text-sm font-bold text-white group-hover:text-accent transition-colors duration-300 sm:hidden">
                Evolution Legal
              </span>
            </LinkMotion>
          </div>

          <div className="flex h-8 ml-4 gap-2">
            {countries.map((country, index) => (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative w-8 h-8 group cursor-pointer overflow-hidden rounded-full ring-2 ring-white/20 hover:ring-accent/50 transition-all duration-300"
              >
                <img
                  src={country.image}
                  alt={`${country.name} flag`}
                  className="w-full h-full object-cover object-center rounded-full"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full">
                  <span className="text-white text-xs font-bold">{country.code}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}