"use client"

import { motion } from "framer-motion"
import { ArrowLeft, MessageCircle, CheckCircle, Star, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { services, categories } from "@/lib/services-data"
import { NavbarAndTopBar } from "@/components/TopBarAndNavbar"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "")
      if (hash && services.find((s) => s.id === hash)) {
        setSelectedService(hash)
      }
    }
  }, [])

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId)
    window.history.pushState(null, "", `#${serviceId}`)
  }

  const filteredServices =
    selectedCategory === "Todos" ? services : services.filter((service: any) => service.category === selectedCategory)

  const selectedServiceData = services.find((s) => s.id === selectedService)

  if (selectedService && selectedServiceData) {
    return (
      <>
      <NavbarAndTopBar/>
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {/* Animated Background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#cba258]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#cba258]/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          {/* Header */}
          <div className="relative bg-slate-900/80 backdrop-blur-xl border-b border-[#cba258]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedService(null)}
                className="group flex items-center gap-3 text-slate-300 hover:text-[#cba258] transition-all duration-300 mb-6"
              >
                <div className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center group-hover:bg-[#cba258]/10 transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                </div>
                <span className="font-medium">Volver a servicios</span>
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-6"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#cba258]/20 to-[#cba258]/10 rounded-2xl flex items-center justify-center border border-[#cba258]/30">
                  <selectedServiceData.icon className="h-10 w-10 text-[#cba258]" />
                </div>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-[#cba258]/10 text-[#cba258] rounded-full text-sm font-medium mb-3 border border-[#cba258]/20">
                    {selectedServiceData.category}
                  </div>
                  <h1 className="text-4xl font-bold text-white mb-2">{selectedServiceData.title}</h1>
                  <p className="text-[#cba258] text-xl font-medium">{selectedServiceData.subtitle}</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Service Details */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-[#cba258]/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-8 bg-gradient-to-b from-[#cba258] to-[#d4b366] rounded-full" />
                    <h2 className="text-2xl font-bold text-white">Descripción del Servicio</h2>
                  </div>
                  <div
                    className="text-slate-300 text-lg leading-relaxed prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedServiceData.description.replace(/\n/g, "<br/>") }}
                  />
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-[#cba258]/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-8 bg-gradient-to-b from-[#cba258] to-[#d4b366] rounded-full" />
                    <h2 className="text-2xl font-bold text-white">¿Qué Incluye?</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedServiceData.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="group flex items-center gap-4 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/30 hover:border-[#cba258]/40 hover:bg-slate-800/50 transition-all duration-300"
                      >
                        <div className="w-8 h-8 bg-[#cba258]/10 rounded-xl flex items-center justify-center group-hover:bg-[#cba258]/20 transition-colors">
                          <CheckCircle className="w-4 h-4 text-[#cba258]" />
                        </div>
                        <span className="text-slate-200 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Details */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-[#cba258]/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-8 bg-gradient-to-b from-[#cba258] to-[#d4b366] rounded-full" />
                    <h2 className="text-2xl font-bold text-white">Detalles Adicionales</h2>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">{selectedServiceData.details}</p>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Service Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 hover:border-[#cba258]/30 transition-colors"
                >
                  <h3 className="text-xl font-bold text-white mb-6">Información del Servicio</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-2xl">
                      <div className="w-12 h-12 bg-[#cba258]/10 rounded-xl flex items-center justify-center">
                        <selectedServiceData.icon className="w-6 h-6 text-[#cba258]" />
                      </div>
                      <div>
                        <span className="text-slate-400 text-sm block">Categoría</span>
                        <p className="text-white font-semibold">{selectedServiceData.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-gradient-to-br from-[#cba258]/10 via-[#cba258]/5 to-transparent backdrop-blur-xl rounded-3xl p-6 border border-[#cba258]/30"
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#cba258]/20 to-[#cba258]/10 rounded-2xl flex items-center justify-center mx-auto">
                      <Star className="w-8 h-8 text-[#cba258]" />
                    </div>
                    <h3 className="text-xl font-bold text-white">¿Listo para comenzar?</h3>
                    <p className="text-slate-300">Contáctanos para una consulta personalizada sobre este servicio.</p>
                    <a
                      href={`https://wa.me/18095551234?text=Hola, me interesa el servicio de ${selectedServiceData.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full bg-gradient-to-r from-[#cba258] to-[#d4b366] hover:from-[#d4b366] hover:to-[#cba258] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#cba258]/25 hover:shadow-[#cba258]/40 hover:scale-105"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Solicitar Servicio
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </>
        )


  }

  return (
    <>
    <NavbarAndTopBar/>
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#cba258]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#cba258]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#cba258]/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Header */}
      <div className="relative bg-slate-900/80 backdrop-blur-xl border-b border-[#cba258]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#cba258]/10 to-[#cba258]/5 text-[#cba258] rounded-full text-sm font-semibold border border-[#cba258]/20">
              Nuestros Servicios Legales
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Servicios
              <span className="block bg-gradient-to-r from-[#cba258] to-[#d4b366] bg-clip-text text-transparent">
                Especializados
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Selecciona el servicio que necesitas para obtener información detallada y comenzar tu proceso legal
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${selectedCategory === category
                  ? "bg-gradient-to-r from-[#cba258] to-[#d4b366] text-white shadow-lg shadow-[#cba258]/25"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-800/70 hover:text-white border border-slate-700/50 hover:border-[#cba258]/30"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="h-full bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-[#cba258]/40 transition-all duration-500 hover:bg-slate-900/70 hover:scale-105 hover:shadow-2xl hover:shadow-[#cba258]/10">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-[#cba258]/10 text-[#cba258] rounded-full text-xs font-medium mb-4 border border-[#cba258]/20">
                  {service.category}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#cba258]/20 to-[#cba258]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#cba258]/30 group-hover:to-[#cba258]/20 transition-all duration-300 border border-[#cba258]/30">
                  <service.icon className="h-8 w-8 text-[#cba258] group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#cba258] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#cba258]/80 font-medium">{service.subtitle}</p>
                  <p className="text-slate-300 leading-relaxed line-clamp-3 group-hover:text-slate-200 transition-colors">
                    {service.description.substring(0, 150)}...
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-full h-1 bg-gradient-to-r from-[#cba258] to-[#d4b366] rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative bg-slate-900/50 backdrop-blur-xl border-t border-[#cba258]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">¿No encuentras el servicio que necesitas?</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Contáctanos para una consulta personalizada. Nuestro equipo está listo para ayudarte con cualquier
              necesidad legal.
            </p>
            <a
              href="https://wa.me/18095551234?text=Hola, necesito información sobre servicios legales personalizados"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#cba258] to-[#d4b366] hover:from-[#d4b366] hover:to-[#cba258] text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg shadow-[#cba258]/25 hover:shadow-[#cba258]/40 hover:scale-105"
            >
              <MessageCircle className="h-6 w-6" />
              Consulta Personalizada
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
    <Footer/>
        </>
  )
}
