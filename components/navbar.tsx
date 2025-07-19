"use client"

import { useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { ChevronDown, Menu, X, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const LinkMotion = motion.create(Link)

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState<null | "about" | "resources">(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const { t } = useLanguage()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Animaciones para los elementos del navbar
  const navItemVariants : any= {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -2,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  }

  const logoVariants : any = {
    initial: { opacity: 0, x: -50, rotate: -180 },
    animate: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.2 },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  }

  const dropdownVariants : any = {
    initial: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      rotateX: -15,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      rotateX: -15,
      transition: { duration: 0.2 },
    },
  }

  const dropdownItemVariants : any= {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    hover: {
      x: 10,
      backgroundColor: "rgba(203, 162, 88, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  }

  const mobileMenuVariants : any= {
    initial: { opacity: 0, height: 0, y: -20 },
    animate: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  }

  const mobileItemVariants : any= {
    initial: { opacity: 0, x: -30 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  }

  const hamburgerVariants : any= {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`sticky top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl shadow-[#cba258]/20"
          : "bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95"
      } backdrop-blur-xl border-b border-[#cba258]/30`}
    >
      {/* Línea decorativa animada */}
      <motion.div
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-[#cba258] to-transparent"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Solo visible en móvil */}
          <div className="lg:hidden">
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
            >
              <LinkMotion href="/" className="flex items-center space-x-3 group">
                <motion.div className="relative" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <Image
                    src="/logo.avif"
                    alt="Evolution Legal Advantage Logo"
                    width={32}
                    height={32}
                    className="rounded-full ring-2 ring-white/20 group-hover:ring-[#cba258]/70 transition-all duration-300"
                  />
                  <motion.div
                    className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#cba258]/20 to-[#d4b366]/20 opacity-0 group-hover:opacity-100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                </motion.div>
                <motion.span
                  className="text-base font-bold text-white group-hover:text-[#cba258] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Evolution Legal
                </motion.span>
              </LinkMotion>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center space-x-8 flex-1"
            initial="initial"
            animate="animate"
            variants={{
              initial: {},
              animate: {
                transition: { staggerChildren: 0.1, delayChildren: 0.3 },
              },
            }}
          >
            {/* About Dropdown */}
            <motion.div
              className="relative"
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
              onMouseEnter={() => setIsDropdownOpen("about")}
              onMouseLeave={() => setIsDropdownOpen(null)}
              onHoverStart={() => setHoveredItem("about")}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <motion.button
                className="flex items-center space-x-1 text-white hover:text-[#cba258] transition-colors duration-300 relative"
                whileHover={{ y: -2 }}
              >
                <span className="relative">
                  {t("nav.about")}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#cba258] to-[#d4b366]"
                    initial={{ width: "0%" }}
                    animate={{ width: hoveredItem === "about" ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
                <motion.div animate={{ rotate: isDropdownOpen === "about" ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen === "about" && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute top-full left-0 mt-2 w-64 bg-slate-900/98 backdrop-blur-xl rounded-xl shadow-2xl border border-[#cba258]/20 overflow-hidden"
                    style={{ transformOrigin: "top center" }}
                  >
                    <motion.div className="absolute inset-0 bg-black" />
                    <motion.div variants={dropdownItemVariants} whileHover="hover">
                      <Link
                        href="/founder/abigail-santos-de-thibodeau"
                        className="block px-4 py-3 text-white hover:text-[#cba258] transition-all duration-300 relative group"
                      >
                        <motion.div className="absolute left-0 top-0 h-full w-1 bg-[#cba258] scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                        {t("nav.founder")}
                      </Link>
                    </motion.div>
                    <motion.div variants={dropdownItemVariants} whileHover="hover">
                      <Link
                        href="/founder/guy-thibodeau"
                        className="block px-4 py-3 text-white hover:text-[#cba258] transition-all duration-300 relative group"
                      >
                        <motion.div className="absolute left-0 top-0 h-full w-1 bg-[#cba258] scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                        {t("nav.cofounder")}
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Regular Navigation Items */}
            {[
              { href: "/services", label: t("nav.services") },
              { href: "/schedule", label: t("nav.schedule") },
              { href: "#testimonials", label: t("nav.testimonials") },
              { href: "/blog", label: t("nav.blog") },
              { href: "/news", label: t("nav.news") },
              { href: "/resources", label: t("nav.resources") },
              { href: "/links", label: t("nav.links") },
              { href: "/contact", label: t("nav.contact") },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
                onHoverStart={() => setHoveredItem(item.href)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-[#cba258] transition-colors duration-300 relative group"
                >
                  <motion.span className="relative">
                    {item.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#cba258] to-[#d4b366]"
                      initial={{ width: "0%" }}
                      animate={{ width: hoveredItem === item.href ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                  <motion.div
                    className="absolute -inset-2 rounded-lg bg-[#cba258]/10 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white relative p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              variants={hamburgerVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Efecto de ondas en el botón */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#cba258]/30"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isOpen ? [1, 1.2, 1] : 1,
                opacity: isOpen ? [0.5, 0, 0.5] : 0,
              }}
              transition={{ duration: 0.6, repeat: isOpen ? Number.POSITIVE_INFINITY : 0 }}
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="lg:hidden bg-slate-900/98 backdrop-blur-xl rounded-b-2xl border-t border-[#cba258]/20 overflow-hidden"
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-[#cba258]/5 to-transparent" />

              <div className="px-2 pt-2 pb-3 space-y-1 relative">
                {/* About Section */}
                <motion.details className="px-3 py-2 text-white group" variants={mobileItemVariants}>
                  <motion.summary
                    className="cursor-pointer hover:text-[#cba258] transition-colors duration-300 flex items-center justify-between"
                    whileHover={{ x: 5 }}
                  >
                    <span>{t("nav.about")}</span>
                    <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.summary>
                  <motion.div
                    className="ml-3 space-y-1 mt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div whileHover={{ x: 10 }}>
                      <Link
                        href="/founder/abigail-santos-de-thibodeau"
                        className="block px-2 py-1 text-white hover:text-[#cba258] transition-colors duration-300"
                      >
                        {t("nav.founder")}
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ x: 10 }}>
                      <Link
                        href="/founder/guy-thibodeau"
                        className="block px-2 py-1 text-white hover:text-[#cba258] transition-colors duration-300"
                      >
                        {t("nav.cofounder")}
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.details>

                {/* Regular Menu Items */}
                {[
                  { href: "/services", label: t("nav.services") },
                  { href: "/schedule", label: t("nav.schedule") },
                  { href: "#testimonials", label: t("nav.testimonials") },
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={mobileItemVariants}
                    whileHover={{ x: 10, backgroundColor: "rgba(203, 162, 88, 0.1)" }}
                    className="rounded-lg transition-colors duration-300"
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-white hover:text-[#cba258] transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Resources Section */}
                <motion.details className="px-3 py-2 text-white group" variants={mobileItemVariants}>
                  <motion.summary
                    className="cursor-pointer hover:text-[#cba258] transition-colors duration-300 flex items-center justify-between"
                    whileHover={{ x: 5 }}
                  >
                    <span>{t("nav.resources")}</span>
                    <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.summary>
                  <motion.div
                    className="ml-3 space-y-1 mt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ delay: 0.1 }}
                  >
                    {[
                      { href: "/blog", label: t("nav.blog") },
                      { href: "/news", label: t("nav.news") },
                      { href: "/resources", label: t("nav.resources") },
                      { href: "/links", label: t("nav.links") },
                    ].map((item) => (
                      <motion.div key={item.href} whileHover={{ x: 10 }}>
                        <Link
                          href={item.href}
                          className="block px-2 py-1 text-white hover:text-[#cba258] transition-colors duration-300"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.details>

                <motion.div
                  variants={mobileItemVariants}
                  whileHover={{ x: 10, backgroundColor: "rgba(203, 162, 88, 0.1)" }}
                  className="rounded-lg transition-colors duration-300"
                >
                  <Link
                    href="/contact"
                    className="block px-3 py-2 text-white hover:text-[#cba258] transition-colors duration-300"
                  >
                    {t("nav.contact")}
                  </Link>
                </motion.div>
              </div>

              {/* Decorative bottom line */}
              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-[#cba258] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sparkle effects */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                  y: Math.random() * 64,
                  scale: 0,
                  rotate: 0,
                }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: 360,
                  y: [null, -20],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
              >
                <Sparkles className="h-3 w-3 text-[#cba258]" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
