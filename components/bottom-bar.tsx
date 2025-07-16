"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Calendar, BookOpen, Newspaper, MessageCircle, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"


export function BottomBar() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const navItems = [
    {
      href: "/exclusive-client-view/home",
      icon: Home,
      label: t("bottomBar.home") || "Inicio",
      isActive: pathname === "/exclusive-client-view/home" || pathname === "/exclusive-client-view/home",
    },
    {
      href: "/exclusive-client-view/schedule",
      icon: Calendar,
      label: t("bottomBar.appointment") || "Cita",
      isActive: pathname === "/exclusive-client-view/schedule",
    },
    {
      href: "/exclusive-client-view/blog",
      icon: BookOpen,
      label: t("bottomBar.blog") || "Blog",
      isActive: pathname === "/exclusive-client-view/blog" || pathname.startsWith("/exclusive-client-view/blog/"),
    },
    {
      href: "/exclusive-client-view/news",
      icon: Newspaper,
      label: t("bottomBar.news") || "Noticias",
      isActive: pathname === "/exclusive-client-view/news",
    },
    {
      href: "/exclusive-client-view/contact",
      icon: MessageCircle,
      label: t("bottomBar.contact") || "Contacto",
      isActive: pathname === "/exclusive-client-view/contact",
    },
  ]

  const whatsappNumber = "18092611453"
  const whatsappMessage = "Hola, me gustaría agendar una consulta legal"

  return (
    <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="fixed bottom-0 left-0 right-0 z-50 ">
      {/* Glass Background */}
      <div className="bg-primary/95 backdrop-blur-lg border-t border-white/20 px-4 py-2">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {navItems.map((item, index) => {
            const Icon = item.icon

            if (item.href === "/exclusive-client-view/schedule") {
              return (
                <Link
                  key={index}
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-all duration-300 hover:bg-white/10"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-full transition-colors ${
                      item.isActive ? "bg-accent text-primary" : "text-white hover:text-accent"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <span
                    className={`text-xs font-medium transition-colors ${
                      item.isActive ? "text-accent" : "text-white/80"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              )
            }

            return (
              <Link
                key={index}
                href={item.href}
                className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-all duration-300 hover:bg-white/10"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-full transition-colors ${
                    item.isActive ? "bg-accent text-primary" : "text-white hover:text-accent"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <span
                  className={`text-xs font-medium transition-colors ${item.isActive ? "text-accent" : "text-white/80"}`}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
