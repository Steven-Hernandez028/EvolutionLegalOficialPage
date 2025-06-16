"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { t } = useLanguage()

  // Actualizar el número de WhatsApp
  const whatsappNumber = "18092611453" // Reemplazar con el número real
  const whatsappMessage = "Hola, me gustaría agendar una consulta legal"

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* Actualizar el logo y nombre de la empresa */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Evolution Legal Advantage Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-white">{t("company.name")}</span>
          </motion.div>

          {/* Desktop Navigation */}
          {/* Actualizar la navegación del desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="flex items-center space-x-1 text-white hover:text-accent transition-colors"
              >
                <span>{t("nav.about")}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-secondary rounded-lg shadow-xl border border-white/10 overflow-hidden"
                  >
                    <Link href="/about" className="block px-4 py-3 text-primary hover:bg-accent/10 transition-colors">
                      {t("nav.about")}
                    </Link>
                    <Link href="/founder" className="block px-4 py-3 text-primary hover:bg-accent/10 transition-colors">
                      {t("nav.founder")}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="#services" className="text-white hover:text-accent transition-colors">
              {t("nav.services")}
            </Link>
            <Link href="/schedule" className="text-white hover:text-accent transition-colors">
              {t("nav.schedule")}
            </Link>
            <Link href="#testimonials" className="text-white hover:text-accent transition-colors">
              {t("nav.testimonials")}
            </Link>
            <Link href="/blog" className="text-white hover:text-accent transition-colors">
              {t("nav.blog")}
            </Link>
            <Link href="/news" className="text-white hover:text-accent transition-colors">
              {t("nav.news")}
            </Link>
            <Link href="/resources" className="text-white hover:text-accent transition-colors">
              {t("nav.resources")}
            </Link>
            <Link href="/contact" className="text-white hover:text-accent transition-colors">
              {t("nav.contact")}
            </Link>
            <Link href="/links" className="text-white hover:text-accent transition-colors">
              {t("nav.links")}
            </Link>
          </div>

          {/* CTA Button */}
          {/* Actualizar el botón CTA */}
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          <div className="hidden lg:block">
            <Button asChild className="bg-accent hover:bg-accent/90 text-primary font-semibold">
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                className="flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>{t("common.contact")}</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-primary/95 backdrop-blur-md"
            >
              {/* Actualizar la navegación móvil */}
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/about" className="block px-3 py-2 text-white hover:text-accent">
                  {t("nav.about")}
                </Link>
                <Link href="/founder" className="block px-3 py-2 text-white hover:text-accent">
                  {t("nav.founder")}
                </Link>
                <Link href="#services" className="block px-3 py-2 text-white hover:text-accent">
                  {t("nav.services")}
                </Link>
                <Link href="/schedule" className="block px-3 py-2 text-white hover:text-accent">
                  {t("nav.schedule")}
                </Link>
                <Link href="#testimonials" className="block px-3 py-2 text-white hover:text-accent">
                  {t("nav.testimonials")}
                </Link>
                <Link href="/blog" className="block px-3 py-2 text-white hover:text-accent">
                  {t("nav.blog")}
                </Link>
                <Link href="/news" className="block px-3 py-2 text-white hover:text-accent">
                  {t("nav.news")}
                </Link>
                <Link href="/resources" className="block px-3 py-2 text-white hover:text-accent">
                  {t("nav.resources")}
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-white hover:text-accent">
                  {t("nav.contact")}
                </Link>
                <Link href="/links" className="block px-3 py-2 text-white hover:text-accent">
                  {t("nav.links")}
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
