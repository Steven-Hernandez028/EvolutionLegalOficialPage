"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const LinkMotion = motion.create(Link)

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState<null | "about" | "resources">(null)

  const { t } = useLanguage()


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <LinkMotion href="/" whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Evolution Legal Advantage Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-white">{t("company.name")}</span>
          </LinkMotion>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Nosotros Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen("about")}
              onMouseLeave={() => setIsDropdownOpen(null)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-accent transition-colors">
                <span>{t("nav.about")}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {isDropdownOpen === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-secondary rounded-lg shadow-xl border border-white/10 overflow-hidden"
                  >
                    {/* <Link href="/about" className="block px-4 py-3 text-primary hover:bg-accent/10 transition-colors">
                      {t("nav.about")}
                    </Link> */}
                    <Link href="/founder" className="block px-4 py-3 text-primary hover:bg-accent/10 transition-colors">
                      {t("nav.founder")}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/services" className="text-white hover:text-accent transition-colors">
              {t("nav.services")}
            </Link>
            <Link href="/schedule" className="text-white hover:text-accent transition-colors">
              {t("nav.schedule")}
            </Link>
            <Link href="#testimonials" className="text-white hover:text-accent transition-colors">
              {t("nav.testimonials")}
            </Link>

            {/* Recursos Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen("resources")}
              onMouseLeave={() => setIsDropdownOpen(null)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-accent transition-colors">
                <span>{t("nav.resources")}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {isDropdownOpen === "resources" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-secondary rounded-lg shadow-xl border border-white/10 overflow-hidden"
                  >
                    <Link href="/blog" className="block px-4 py-3 text-primary hover:bg-accent/10 transition-colors">
                      {t("nav.blog")}
                    </Link>
                    <Link href="/news" className="block px-4 py-3 text-primary hover:bg-accent/10 transition-colors">
                      {t("nav.news")}
                    </Link>
                    <Link href="/resources" className="block px-4 py-3 text-primary hover:bg-accent/10 transition-colors">
                      {t("nav.resources")}
                    </Link>
                    <Link href="/links" className="block px-4 py-3 text-primary hover:bg-accent/10 transition-colors">
                      {t("nav.links")}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className="text-white hover:text-accent transition-colors">
              {t("nav.contact")}
            </Link>
          </div>

          <div className= "hidden lg:block">
            <LanguageSwitcher />
          </div>
         
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-primary/95 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* <Link href="/about" className="block px-3 py-2 text-white hover:text-accent">
                  {t("nav.about")}
                </Link> */}
                <Link href="/founder" className="block px-3 py-2 text-white hover:text-accent">
                  {t("nav.founder")}
                </Link>
                <Link href="/services" className="block px-3 py-2 text-white hover:text-accent">
                  {t("nav.services")}
                </Link>
                <Link href="/schedule" className="block px-3 py-2 text-white hover:text-accent">
                  {t("nav.schedule")}
                </Link>
                <Link href="#testimonials" className="block px-3 py-2 text-white hover:text-accent">
                  {t("nav.testimonials")}
                </Link>

                {/* Recursos agrupados */}
                <details className="px-3 py-2 text-white">
                  <summary className="cursor-pointer hover:text-accent">{t("nav.resources")}</summary>
                  <div className="ml-3 space-y-1 mt-2">
                    <Link href="/blog" className="block px-2 py-1 text-white hover:text-accent">{t("nav.blog")}</Link>
                    <Link href="/news" className="block px-2 py-1 text-white hover:text-accent">{t("nav.news")}</Link>
                    <Link href="/resources" className="block px-2 py-1 text-white hover:text-accent">{t("nav.resources")}</Link>
                    <Link href="/links" className="block px-2 py-1 text-white hover:text-accent">{t("nav.links")}</Link>
                  </div>
                </details>

                <Link href="/contact" className="block px-3 py-2 text-white hover:text-accent">
                  {t("nav.contact")}
                </Link>
                <div className="px-3 py-2">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
