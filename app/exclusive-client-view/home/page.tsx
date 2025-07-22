"use client"

import { motion } from "framer-motion"
import { Calendar, MessageCircle, Shield, Settings, ArrowRight, Sparkles, Scale } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { services } from "@/lib/services-data"

const quickAccessCards = [
  {
    title: "Agendar Cita",
    description: "Reserva tu consulta legal",
    icon: Calendar,
    href: "/exclusive-client-view/schedule",
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
    delay: 0.1,
  },
  {
    title: "WhatsApp Urgente",
    description: "Contacto inmediato",
    icon: MessageCircle,
    href: "https://wa.me/18092611453?text=Necesito%20consulta%20urgente",
    color: "from-green-500/20 to-green-600/10",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
    delay: 0.2,
    external: true,
  },
  {
    title: "Catálogo Privado",
    description: "Casos exclusivos",
    icon: Shield,
    href: "/exclusive-client-view/catalogo",
    color: "from-purple-500/20 to-purple-600/10",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
    delay: 0.3,
  },
  {
    title: "Soporte Premium",
    description: "Asistencia especializada",
    icon: Settings,
    href: "/exclusive-client-view/contact",
    color: "from-amber-500/20 to-amber-600/10",
    borderColor: "border-amber-500/30",
    iconColor: "text-amber-400",
    delay: 0.4,
  },
]

export default function ExclusiveHomePage() {
  return (
    <div className="min-h-screen pt-8 pb-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#cba258]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#cba258]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#cba258]/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/logo.png"
                alt="Evolution Legal Advantage"
                width={120}
                height={120}
                className="rounded-full border-4 border-[#cba258]/30 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#cba258]/20 to-transparent"></div>
              <motion.div
                className="absolute -inset-2 rounded-full border border-[#cba258]/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </motion.div>
          </div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Panel de Cliente
            <span className="block bg-gradient-to-r from-[#cba258] to-[#d4b366] bg-clip-text text-transparent">
              Exclusivo
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Accede a todos nuestros servicios legales especializados con atención premium
          </motion.p>
        </motion.div>

        {/* Quick Access Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#cba258]/10 to-[#cba258]/5 text-[#cba258] rounded-full text-sm font-semibold border border-[#cba258]/20 mb-4">
              <Sparkles className="w-4 h-4" />
              Acceso Rápido
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Acciones Inmediatas</h2>
            <p className="text-white/70">Herramientas esenciales para nuestros clientes VIP</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccessCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: card.delay, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={card.href} className="block group" {...(card.external && { target: "_blank" })}>
                  <div
                    className={`glass-card p-6 h-full bg-gradient-to-br ${card.color} border ${card.borderColor} backdrop-blur-xl relative overflow-hidden`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-2 right-2 w-20 h-20 border border-white/20 rounded-full" />
                      <div className="absolute bottom-2 left-2 w-16 h-16 border border-white/20 rounded-full" />
                    </div>

                    <div className="relative z-10 text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform border border-white/20`}
                      >
                        <card.icon className={`h-8 w-8 ${card.iconColor}`} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#cba258] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-white/70 text-sm">{card.description}</p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Section - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#cba258]/10 to-[#cba258]/5 text-[#cba258] rounded-full text-sm font-semibold border border-[#cba258]/20 mb-4">
              <Scale className="w-4 h-4" />
              Servicios Legales
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Nuestros Servicios
              <span className="block text-2xl bg-gradient-to-r from-[#cba258] to-[#d4b366] bg-clip-text text-transparent">
                Especializados
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Haz clic en cualquier servicio para obtener más información o solicitarlo
            </p>
          </div>

          {/* Simplified Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.7 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer"
              >
                <Link href={`/exclusive-client-view/services#${service.id}`}>
                  <div className="glass-card p-8 bg-gradient-to-br from-slate-900/30 via-slate-800/20 to-slate-900/30 backdrop-blur-xl border border-slate-700/30 hover:border-[#cba258]/40 transition-all duration-500 hover:bg-slate-900/50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-4 right-4 w-24 h-24 border border-[#cba258]/20 rounded-full" />
                      <div className="absolute bottom-4 left-4 w-16 h-16 border border-[#cba258]/20 rounded-full" />
                    </div>

                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#cba258]/20 to-[#cba258]/10 rounded-3xl flex items-center justify-center group-hover:from-[#cba258]/30 group-hover:to-[#cba258]/20 transition-all duration-300 border border-[#cba258]/30 group-hover:scale-110">
                        <service.icon className="h-10 w-10 text-[#cba258] group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#cba258] transition-colors duration-300 mb-4">
                        {service.title}
                      </h3>

                      {/* Category Badge */}
                      <span className="inline-block px-4 py-2 bg-[#cba258]/20 text-[#cba258] text-sm font-semibold rounded-full border border-[#cba258]/30 mb-6">
                        {service.category}
                      </span>

                      {/* Action Indicator */}
                      <div className="flex items-center justify-center gap-2 text-white/60 group-hover:text-[#cba258] transition-colors duration-300">
                        <span className="text-sm font-medium">Solicitar servicio</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>

                      {/* Animated underline */}
                      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#cba258] to-[#d4b366] transition-all duration-500 mt-4 mx-auto" />
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#cba258]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/exclusive-client-view/services"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#cba258] to-[#d4b366] hover:from-[#d4b366] hover:to-[#cba258] text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg shadow-[#cba258]/25 hover:shadow-[#cba258]/40 hover:scale-105"
            >
              Ver Todos los Servicios
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
