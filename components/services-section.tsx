"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import {
  Scale,
  Shield,
  FileText,
  Users,
  Building,
  Heart,
  HeartHandshake,
  FileCheck,
  Briefcase,
  Building2,
  Gavel,
  ArrowRight,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "due-diligence",
    icon: Scale,
    title: "Investigación Jurídica Inmobiliaria",
    link: "/services#due-diligence",
  },
  {
    id: "relocation",
    icon: Users,
    title: "Reubicación Integral para Extranjeros",
    link: "/services#relocation",
  },
  {
    id: "real-estate",
    icon: Building,
    title: "Asesoría y Gestión de Bienes Inmuebles",
    link: "/services#real-estate",
  },
  {
    id: "rural-lands",
    icon: Heart,
    title: "Tierras Vírgenes del Norte",
    link: "/services#rural-lands",
  },
  {
    id: "immigration",
    icon: FileText,
    title: "Extranjería: Residencia y Ciudadanía",
    link: "/services#immigration",
  },
  {
    id: "consular",
    icon: Shield,
    title: "Derecho Migratorio y Consular",
    link: "/services#consular",
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Derecho Societario",
    link: "/services#corporate",
  },
  {
    id: "family-law",
    icon: HeartHandshake,
    title: "Derecho de Familia",
    link: "/services#family-law",
  },
  {
    id: "vehicular-due-diligence",
    icon: FileCheck,
    title: "Debida Diligencia Vehicular",
    link: "/services#vehicular-due-diligence",
  },
  {
    id: "contract-review",
    icon: Gavel,
    title: "Estudio y Revisión de Contratos",
    link: "/services#contract-review",
  },
  {
    id: "document-management",
    icon: FileText,
    title: "Gestión de Documentos",
    link: "/services#document-management",
  },
  {
    id: "legal-training",
    icon: Briefcase,
    title: "Capacitación Jurídica",
    link: "/services#legal-training",
  },
]

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="px-6 py-3 bg-gradient-to-r from-[#cba258]/20 to-[#d4b366]/20 backdrop-blur-sm border border-[#cba258]/30 text-[#cba258] rounded-full text-sm font-semibold shadow-lg">
              Nuestros Servicios Legales
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-white leading-tight"
          >
            Servicios Legales
            <span className="block bg-gradient-to-r from-[#cba258] to-[#d4b366] bg-clip-text text-transparent">
              Especializados
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Ofrecemos asesoría legal integral con un enfoque personalizado para cada cliente
          </motion.p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <Link href={service.link} className="block">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative bg-gradient-to-r from-slate-800/50 to-slate-700/30 backdrop-blur-sm rounded-2xl border border-slate-600/30 hover:border-[#cba258]/40 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:shadow-[#cba258]/10"
                >
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#cba258]/5 to-[#d4b366]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content Container */}
                  <div className="relative flex items-center justify-between p-6">
                    {/* Left Side - Icon and Title */}
                    <div className="flex items-center gap-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl flex items-center justify-center border border-slate-500/30 group-hover:border-[#cba258]/50 transition-all duration-300"
                      >
                        <service.icon className="h-7 w-7 text-slate-300 group-hover:text-[#cba258] transition-colors duration-300" />
                      </motion.div>

                      {/* Title */}
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-[#cba258] transition-colors duration-300 leading-tight">
                          {service.title}
                        </h3>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                          className="h-0.5 bg-gradient-to-r from-[#cba258] to-[#d4b366] mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>

                    {/* Right Side - Action Button */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3"
                    >
                      <span className="hidden sm:block text-slate-400 group-hover:text-[#cba258] transition-colors duration-300 font-medium">
                        Ver detalles
                      </span>
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center border border-slate-500/30 group-hover:border-[#cba258]/50 group-hover:bg-gradient-to-br group-hover:from-[#cba258]/20 group-hover:to-[#d4b366]/20 transition-all duration-300">
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#cba258] transition-colors duration-300" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom Glow Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#cba258]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">¿No encuentras el servicio que necesitas?</p>
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#cba258] to-[#d4b366] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-[#cba258]/25 transition-all duration-300 cursor-pointer"
            >
              <span>Contáctanos para una consulta personalizada</span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
