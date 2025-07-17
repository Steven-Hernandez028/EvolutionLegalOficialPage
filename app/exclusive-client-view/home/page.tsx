"use client"

import { motion } from "framer-motion"
import {
  Calendar,
  BookOpen,
  Newspaper,
  MessageCircle,
  Users,
  FileText,
  Phone,
  MapPin,
  Settings,
  User,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const menuCards = [
  {
    title: "Agendar Cita",
    description: "Reserva tu consulta legal",
    icon: Calendar,
    href: "/exclusive-client-view/schedule",
    color: "from-blue-500 to-blue-600",
    delay: 0.1,
  },
  {
    title: "Sobre Nosotros",
    description: "Conoce nuestro equipo",
    icon: Users,
    href: "/exclusive-client-view/about",
    color: "from-purple-500 to-purple-600",
    delay: 0.2,
  },
  {
    title: "Abogada Fundadora",
    description: "Nuestra líder legal",
    icon: User,
    href: "/exclusive-client-view/founder",
    color: "from-amber-500 to-amber-600",
    delay: 0.3,
  },
  {
    title: "Blog Legal",
    description: "Artículos y consejos",
    icon: BookOpen,
    href: "/exclusive-client-view/blog",
    color: "from-green-500 to-green-600",
    delay: 0.4,
  },
  {
    title: "Noticias",
    description: "Últimas actualizaciones",
    icon: Newspaper,
    href: "/exclusive-client-view/news",
    color: "from-red-500 to-red-600",
    delay: 0.5,
  },
  {
    title: "Recursos",
    description: "Herramientas y guías",
    icon: FileText,
    href: "/exclusive-client-view/resources",
    color: "from-indigo-500 to-indigo-600",
    delay: 0.6,
  },
  {
    title: "Contacto",
    description: "Habla con nosotros",
    icon: MessageCircle,
    href: "/exclusive-client-view/contact",
    color: "from-teal-500 to-teal-600",
    delay: 0.7,
  },
  {
    title: "Enlaces",
    description: "Nuestras redes sociales",
    icon: MapPin,
    href: "/exclusive-client-view/links",
    color: "from-pink-500 to-pink-600",
    delay: 0.8,
  },
  {
    title: "Políticas",
    description: "Términos y privacidad",
    icon: Shield,
    href: "/exclusive-client-view/privacy",
    color: "from-gray-500 to-gray-600",
    delay: 0.9,
  },
]

export default function ExclusiveHomePage() {
  const { t } = useLanguage()

  return (
    // <>
    //   <div id="lad" className="min-h-screen bg-black">

    //   </div>
    // </>
    <div className="min-h-screen pt-8 pb-24">
      {/* Header */}
      {/* <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Image
              src="/logo.avif"
              alt="Evolution Legal Advantage"
              width={100}
              height={100}
              className="rounded-full border-4 border-white/20 shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-accent/20 to-transparent"></div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Panel de Cliente Exclusivo</h1>
        <p className="text-white/80">Accede a todos nuestros servicios legales especializados</p>
      </motion.div> */}

      {/* Menu Cards Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {menuCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: card.delay }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={card.href} className="block">
                <div
                  className={`glass-card p-6 rounded-2xl bg-gradient-to-br ${card.color} min-h-[140px] flex flex-col justify-center items-center text-center space-y-3 shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <card.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{card.title}</h3>
                    <p className="text-white/80 text-sm">{card.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
      >
        <div className="glass-section text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Acciones Rápidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="https://wa.me/18092611453?text=Necesito%20consulta%20urgente" target="_blank">
              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 hover:bg-green-500/30 transition-colors">
                <Phone className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <p className="text-white font-medium">WhatsApp Urgente</p>
              </div>
            </Link>
            <Link href="/exclusive-client-view/schedule">
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4 hover:bg-blue-500/30 transition-colors">
                <Calendar className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-medium">Cita Inmediata</p>
              </div>
            </Link>
            <Link href="/exclusive-client-view/contact">
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-4 hover:bg-purple-500/30 transition-colors">
                <Settings className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-medium">Soporte</p>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
