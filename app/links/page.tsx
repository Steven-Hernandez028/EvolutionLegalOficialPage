"use client"

import { motion } from "framer-motion"
import {
  MessageSquare,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Calendar,
  FileText,
  Users,
  Scale,
  ExternalLink,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { NavbarAndTopBar } from "@/components/TopBarAndNavbar"

export default function LinksPage() {
  const { t } = useLanguage()

  const links = [
    {
      title: t("links.items[0].title"),
      description: t("links.items[0].description"),
      icon: Calendar,
      href: "/schedule",
      color: "bg-accent",
      external: false,
    },
    {
      title: t("common.whatsapp"),
      description: t("links.items[1].description"),
      icon: MessageSquare,
      href: `https://wa.me/${t("company.phone")}?text=Hola,%20necesito%20asesoría%20legal`,
      color: "bg-green-500",
      external: true,
    },
    {
      title: t("links.items[2].title"),
      description: t("links.items[2].description"),
      icon: Phone,
      href: `tel:+1${t("company.phone")}`,
      color: "bg-blue-500",
      external: true,
    },
    {
      title: t("links.items[3].title"),
      description: t("links.items[3].description"),
      icon: Mail,
      href: `mailto:${t("company.email")}`,
      color: "bg-red-500",
      external: true,
    },
    {
      title: "Instagram",
      description: t("links.items[4].description"),
      icon: Instagram,
      href: "https://instagram.com/legalstudio_oficial",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      external: true,
    },
    {
      title: "Facebook",
      description: t("links.items[5].description"),
      icon: Facebook,
      href: "https://facebook.com/legalstudio",
      color: "bg-blue-600",
      external: true,
    },
  
    {
      title: "Blog Legal",
      description: t("links.items[7].description"),
      icon: FileText,
      href: "/blog",
      color: "bg-indigo-500",
      external: false,
    },
    {
      title: t("links.items[8].description"),
      description: t("links.items[8].description"),
      icon: Users,
      href: "/about",
      color: "bg-purple-500",
      external: false,
    },
    {
      title: t("links.items[9].description"),
      description: t("links.items[9].description"),
      icon: Scale,
      href: "/founder",
      color: "bg-amber-500",
      external: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-primary/90">
      <NavbarAndTopBar />
      <div className="pt-20 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            {/* <div className="flex justify-center mb-6">
              <div className="relative">
                <Image
                  src="/logo.avif"
                  alt="LegalStudio Logo"
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-white shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-accent/20 to-transparent"></div>
              </div>
            </div> */}

            <h1 className="text-4xl font-bold text-white mb-4">{t("links.title")}</h1>
            <p className="text-xl text-white/80 mb-2">{t("links.subtitle")}</p>
            <p className="text-white/70">{t("links.description")}</p>
          </motion.div>

          {/* Links */}
          <div className="space-y-4">
            {links.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.external ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-14 h-14 ${link.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                        >
                          <link.icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                            {link.title}
                          </h3>
                          <p className="text-primary/70 text-sm">{link.description}</p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-primary/40 group-hover:text-accent transition-colors" />
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link href={link.href} className="block w-full">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-14 h-14 ${link.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                        >
                          <link.icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                            {link.title}
                          </h3>
                          <p className="text-primary/70 text-sm">{link.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: links.length * 0.1 }}
            className="mt-12 text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">{t("company.name")}</h3>
              <p className="text-white/80 mb-4">{t("company.slogan")}</p>
              <div className="text-white/70 space-y-1">
                <p>📍 {t("company.location")}</p>
                <p>📞 +1 {t("company.phone")}</p>
                <p>✉️ {t("company.email")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
