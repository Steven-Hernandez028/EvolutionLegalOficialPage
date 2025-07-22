"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, MessageCircle, Phone, CheckCircle, Star, Clock, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { services } from "@/lib/services-data"

export default function ExclusiveServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const service = selectedService ? services.find((s) => s.id === selectedService) : null

  return (
    <div className="min-h-screen py-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#cba258]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#cba258]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatePresence mode="wait">
          {!selectedService ? (
            <motion.div
              key="services-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Servicios</h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Soluciones legales especializadas con atención personalizada
                </p>
              </motion.div>

              {/* Services Grid */}
              <div className="space-y-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    onClick={() => setSelectedService(service.id)}
                    className="cursor-pointer group"
                  >
                    <div className="glass-card p-8 bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40 backdrop-blur-xl border border-slate-700/40 hover:border-[#cba258]/50 transition-all duration-500 hover:bg-slate-900/60 relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-6 right-6 w-32 h-32 border border-[#cba258]/30 rounded-full" />
                        <div className="absolute bottom-6 left-6 w-24 h-24 border border-[#cba258]/30 rounded-full" />
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-start gap-8">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-24 h-24 bg-gradient-to-br from-[#cba258]/30 to-[#cba258]/20 rounded-3xl flex items-center justify-center border border-[#cba258]/40 flex-shrink-0"
                          >
                            <service.icon className="h-12 w-12 text-[#cba258]" />
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-3xl font-bold text-white group-hover:text-[#cba258] transition-colors duration-300 mb-2">
                                  {service.title}
                                </h3>
                                <p className="text-xl text-[#cba258] font-medium mb-4">{service.subtitle}</p>
                                <span className="inline-block px-4 py-2 bg-[#cba258]/20 text-[#cba258] text-sm font-semibold rounded-full border border-[#cba258]/30">
                                  {service.category}
                                </span>
                              </div>

                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-12 h-12 bg-[#cba258]/20 rounded-2xl flex items-center justify-center border border-[#cba258]/30"
                              >
                                <ArrowRight className="h-6 w-6 text-[#cba258] group-hover:translate-x-1 transition-transform" />
                              </motion.div>
                            </div>

                            {/* Description Preview */}
                            <p className="text-white/80 leading-relaxed mb-6 line-clamp-3">
                              {service.description.substring(0, 300)}...
                            </p>

                            {/* Features Preview */}
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <CheckCircle className="h-5 w-5 text-[#cba258] flex-shrink-0" />
                                  <span className="text-white/70 text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>

                            {/* Service Stats */}
                            <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                              <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 text-white/60">
                                  <Star className="h-4 w-4 text-[#cba258]" />
                                  <span className="text-sm">Servicio Premium</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/60">
                                  <Clock className="h-4 w-4 text-[#cba258]" />
                                  <span className="text-sm">Respuesta 24h</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/60">
                                  <Users className="h-4 w-4 text-[#cba258]" />
                                  <span className="text-sm">Atención Personalizada</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-[#cba258] font-bold text-lg">Consulta Gratuita</div>
                                <div className="text-white/60 text-sm">Evaluación inicial sin costo</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Animated Progress Bar */}
                        <motion.div
                          className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#cba258] to-[#d4b366] transition-all duration-700 mt-6 rounded-full"
                          animate={{
                            width: hoveredService === service.id ? "100%" : "0%",
                          }}
                        />
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#cba258]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="service-detail"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Back Button */}
              <div className="mb-8">
                <Button
                  onClick={() => setSelectedService(null)}
                  variant="ghost"
                  className="text-white hover:text-[#cba258] hover:bg-white/10"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver a Servicios
                </Button>
              </div>

              {service && (
                <div className="space-y-8">
                  {/* Service Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-[#cba258]/30"
                  >
                    <div className="flex items-start gap-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#cba258]/30 to-[#cba258]/20 rounded-3xl flex items-center justify-center border border-[#cba258]/40">
                        <service.icon className="h-12 w-12 text-[#cba258]" />
                      </div>
                      <div className="flex-1">
                        <h1 className="text-4xl font-bold text-white mb-2">{service.title}</h1>
                        <p className="text-2xl text-[#cba258] font-medium mb-4">{service.subtitle}</p>
                        <span className="inline-block px-4 py-2 bg-[#cba258]/20 text-[#cba258] text-sm font-semibold rounded-full border border-[#cba258]/30">
                          {service.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Service Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-card p-8 bg-gradient-to-br from-slate-900/40 to-slate-800/20 backdrop-blur-xl border border-slate-700/40"
                  >
                    <h2 className="text-2xl font-bold text-white mb-6">Descripción del Servicio</h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-white/80 leading-relaxed text-lg">{service.description}</p>
                    </div>
                  </motion.div>

                  {/* Features and Details */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="glass-card p-8 bg-gradient-to-br from-slate-900/40 to-slate-800/20 backdrop-blur-xl border border-slate-700/40"
                    >
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                        <CheckCircle className="h-6 w-6 text-[#cba258] mr-3" />
                        Características Incluidas
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#cba258] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-white/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="glass-card p-8 bg-gradient-to-br from-slate-900/40 to-slate-800/20 backdrop-blur-xl border border-slate-700/40"
                    >
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                        <Star className="h-6 w-6 text-[#cba258] mr-3" />
                        Detalles del Servicio
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-[#cba258]/10 rounded-xl border border-[#cba258]/20">
                          <p className="text-white/80">{service.details}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-slate-800/30 rounded-xl">
                            <div className="text-[#cba258] font-bold text-lg">Premium</div>
                            <div className="text-white/70 text-sm">Servicio</div>
                          </div>
                          <div className="text-center p-4 bg-slate-800/30 rounded-xl">
                            <div className="text-[#cba258] font-bold text-lg">24h</div>
                            <div className="text-white/70 text-sm">Respuesta</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* CTA Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="glass-card p-8 bg-gradient-to-br from-[#cba258]/10 to-[#cba258]/5 backdrop-blur-xl border border-[#cba258]/30 text-center"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">¿Listo para comenzar?</h3>
                    <p className="text-white/80 mb-8 text-lg">
                      Contáctanos para una consulta personalizada y cotización detallada
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        asChild
                        className="bg-[#cba258] hover:bg-[#cba258]/90 text-white font-semibold py-6 px-8 text-lg"
                      >
                        <Link
                          href={`https://wa.me/18092611453?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
                          target="_blank"
                        >
                          <MessageCircle className="h-5 w-5 mr-2" />
                          Solicitar Servicio
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-[#cba258] text-[#cba258] hover:bg-[#cba258] hover:text-white bg-transparent py-6 px-8 text-lg"
                      >
                        <Link href="/exclusive-client-view/contact">
                          <Phone className="h-5 w-5 mr-2" />
                          Consulta Gratuita
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
