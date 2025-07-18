"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/lib/translations"

const LinkMotion = motion.create(Link)

export function TopBar() {
  const { t, language, setLanguage } = useLanguage()

  const countries = [
    {
      name: "Republica Dominicana",
      flag: "DO",
      code: "es" as Language,
      image: "https://flagcdn.com/w80/do.png"
    },
    {
      name: "Estados Unidos",
      flag: "US",
      code: "en" as Language,
      image: "https://flagcdn.com/w80/us.png"
    },
    {
      name: "Francia",
      flag: "FR",
      code: "fr" as Language,
      image: "https://flagcdn.com/w80/fr.png"
    }
  ]

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-gradient-to-r from-primary/90 to-primary border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 relative">
          {/* Logo - Solo visible en desktop */}
          <div className="flex-1 z-10 hidden lg:block">
            <LinkMotion 
              href="/" 
              whileHover={{ scale: 1.02 }} 
              className="flex items-center space-x-3 group inline-flex"
            >
              <div className="relative">
                <Image
                  src="/logo.avif"
                  alt="Evolution Legal Advantage Logo"
                  width={36}
                  height={36}
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

          {/* Banderas - Centradas en móvil, a la derecha en desktop */}
          <div className="flex h-8 gap-2 lg:ml-4 lg:justify-end lg:flex-1 justify-center flex-1">
            {countries.map((country, index) => (
              <motion.button
                key={country.code}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLanguageChange(country.code)}
                className={`relative w-8 h-8 group cursor-pointer overflow-hidden rounded-full ring-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/50 ${
                  language === country.code 
                    ? 'ring-accent shadow-lg shadow-accent/25' 
                    : 'ring-white/20 hover:ring-accent/50'
                }`}
              >
                <img
                  src={country.image}
                  alt={`${country.name} flag`}
                  className="w-full h-full object-cover object-center rounded-full"
                />

                {/* Overlay con código del país */}
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center rounded-full ${
                  language === country.code 
                    ? 'opacity-0 group-hover:opacity-100' 
                    : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <span className="text-white text-xs font-bold">{country.flag.toUpperCase()}</span>
                </div>

                {/* Indicador de idioma activo */}
                {language === country.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-white"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}