"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Star, Quote, Filter, ArrowLeft, MessageCircle, Award, Calendar, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  location: string
  image: string
  rating: number
  text: string
  service: string
  category: string
  date: string
  results: string[]
  confidential?: boolean
}

const categories = [
  { id: "all", name: "Todos", color: "from-slate-600 to-slate-700" },
  { id: "inmobiliario", name: "Inmobiliario", color: "from-blue-600 to-blue-700" },
  { id: "migracion", name: "Migración", color: "from-green-600 to-green-700" },
  { id: "corporativo", name: "Corporativo", color: "from-purple-600 to-purple-700" },
  { id: "familia", name: "Familia", color: "from-pink-600 to-pink-700" },
]

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    role: "CEO",
    company: "Grupo Hotelero Internacional",
    location: "Punta Cana, RD",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    text: "Evolution Legal me ayudó a adquirir mi resort de manera completamente segura. Su proceso de due diligence fue impecable y me ahorró millones en riesgos ocultos. La atención al detalle y el profesionalismo del equipo superaron todas mis expectativas.",
    service: "Due Diligence Inmobiliaria",
    category: "inmobiliario",
    date: "2024",
    results: ["Transacción exitosa de $45M", "Ahorro de $2M en riesgos", "Proceso sin complicaciones"],
  },
  {
    id: 2,
    name: "John Thompson",
    role: "Empresario",
    company: "Thompson Industries",
    location: "Santiago, RD",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    text: "El proceso de reubicación fue perfecto desde el primer día. Nos acompañaron en cada paso, desde la residencia hasta la integración completa de nuestra familia. Ahora nos sentimos completamente en casa en República Dominicana.",
    service: "Reubicación Integral",
    category: "migracion",
    date: "2024",
    results: ["Residencia aprobada en 6 meses", "Familia completamente integrada", "Ahorro del 40% en costos"],
  },
  {
    id: 3,
    name: "Carlos Mendoza",
    role: "Director Ejecutivo",
    company: "Grupo Empresarial del Caribe",
    location: "Santo Domingo, RD",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    text: "La estructuración de nuestro holding empresarial fue excepcional. Evolution Legal logró optimizar nuestra operación fiscal y nos permitió expandirnos exitosamente a nivel regional. Su expertise en derecho societario es incomparable.",
    service: "Derecho Societario",
    category: "corporativo",
    date: "2024",
    results: ["Optimización fiscal del 25%", "Expansión a 3 países", "Estructura legal sólida"],
  },
  {
    id: 4,
    name: "Ana Martínez",
    role: "Inversionista",
    company: "Martínez Real Estate",
    location: "La Romana, RD",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    text: "Mi proceso de divorcio fue manejado con una sensibilidad y profesionalismo excepcional. Lograron un acuerdo justo para ambas partes y protegieron completamente el bienestar de nuestros hijos. Estoy eternamente agradecida.",
    service: "Derecho Familiar",
    category: "familia",
    date: "2024",
    results: ["Proceso finalizado en 3 meses", "Acuerdo satisfactorio", "Bienestar de menores protegido"],
  },
  {
    id: 5,
    name: "Robert Wilson",
    role: "Inversionista",
    company: "Wilson Investments",
    location: "Montecristi, RD",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    text: "La compra de mi terreno rural para el proyecto agrícola fue un éxito total gracias a Evolution Legal. Su conocimiento del sector rural y los permisos ambientales fue fundamental para el desarrollo del proyecto.",
    service: "Due Diligence Rural",
    category: "inmobiliario",
    date: "2024",
    results: ["500 hectáreas adquiridas", "Permisos ambientales aprobados", "Proyecto en marcha"],
  },
  {
    id: 6,
    name: "Luis Rodríguez",
    role: "Empresario",
    company: "Rodríguez Corp",
    location: "Santo Domingo, RD",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    text: "La preparación para mi visa de turismo a Estados Unidos fue tan completa que la entrevista consular fue muy sencilla. Su metodología de preparación y atención al detalle hicieron la diferencia.",
    service: "Visas de Turismo",
    category: "migracion",
    date: "2024",
    results: ["Visa aprobada en primera solicitud", "Entrevista exitosa", "Proceso sin complicaciones"],
  },
  // Testimonios exclusivos adicionales
  {
    id: 7,
    name: "Cliente Confidencial A",
    role: "Inversionista Internacional",
    company: "Holding Privado",
    location: "Cap Cana, RD",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    text: "La estructuración de mi inversión de $100M en el sector turístico fue manejada con absoluta discreción y profesionalismo. Evolution Legal protegió mis intereses y optimizó la estructura fiscal de manera excepcional.",
    service: "Inversión Privada de Alto Valor",
    category: "corporativo",
    date: "2024",
    results: ["Inversión de $100M estructurada", "Optimización fiscal del 30%", "Máxima confidencialidad"],
    confidential: true,
  },
  {
    id: 8,
    name: "Familia VIP Internacional",
    role: "Familia de Alto Patrimonio",
    company: "Patrimonio Familiar",
    location: "Casa de Campo, RD",
    image: "/placeholder.svg?height=150&width=150",
    rating: 5,
    text: "El proceso de planificación sucesoral y trust familiar fue ejecutado de manera impecable. Evolution Legal nos brindó la tranquilidad de saber que nuestro patrimonio está completamente protegido para las futuras generaciones.",
    service: "Planificación Sucesoral VIP",
    category: "familia",
    date: "2024",
    results: ["Trust familiar establecido", "Patrimonio protegido", "Planificación generacional completa"],
    confidential: true,
  },
]

export default function ExclusiveTestimoniosPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null)

  const filteredTestimonials =
    selectedCategory === "all"
      ? testimonials
      : testimonials.filter((testimonial) => testimonial.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#cba258]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#cba258]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/exclusive-client-view/home"
              className="inline-flex items-center space-x-2 text-white/70 hover:text-[#cba258] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Volver al Panel</span>
            </Link>
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#cba258]/20 to-[#d4b366]/20 backdrop-blur-sm border border-[#cba258]/30 text-[#cba258] rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Acceso Exclusivo
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Testimonios
              <span className="block bg-gradient-to-r from-[#cba258] to-[#d4b366] bg-clip-text text-transparent">
                Confidenciales
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Casos de alto perfil y resultados excepcionales para nuestros clientes VIP más exigentes
            </p>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex items-center justify-center space-x-2 text-white/50 text-xs"
            >
              <Shield className="h-3 w-3" />
              <span>Estos casos y fotos son autorizados para ser publicados</span>
            </motion.div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur-sm border border-white/20"
                }`}
              >
                <Filter className="inline-block w-4 h-4 mr-2" />
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -50,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedTestimonial(testimonial)}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-[#cba258]/40 relative overflow-hidden h-full">
                    {/* Confidential Badge */}
                    {testimonial.confidential && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-gradient-to-r from-[#cba258] to-[#d4b366] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Shield className="h-3 w-3" />
                          VIP
                        </div>
                      </div>
                    )}

                    {/* Background Pattern */}
                    <div className="absolute top-4 left-4 opacity-5">
                      <Quote className="w-16 h-16 text-[#cba258]" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating ? "text-[#cba258] fill-current" : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-slate-700 mb-6 leading-relaxed relative z-10 line-clamp-4">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Service Badge */}
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-[#cba258]/10 text-[#cba258] text-sm font-semibold rounded-full">
                        {testimonial.service}
                      </span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full border-2 border-[#cba258]/20"
                        />
                        {testimonial.confidential && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#cba258] rounded-full flex items-center justify-center">
                            <Shield className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                        <p className="text-slate-600 text-sm">{testimonial.role}</p>
                        <p className="text-slate-500 text-xs">{testimonial.company}</p>
                        <p className="text-slate-500 text-xs">
                          {testimonial.location} • {testimonial.date}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#cba258]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-16"
          >
            <div className="glass-card p-12 bg-gradient-to-r from-[#cba258]/10 to-[#cba258]/5 backdrop-blur-xl border border-[#cba258]/30">
              <h3 className="text-3xl font-bold text-white mb-4">¿Necesitas atención VIP?</h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Únete a nuestros clientes de alto perfil y experimenta el más alto nivel de servicio legal
              </p>
              <Link
                href="/exclusive-client-view/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#cba258] to-[#d4b366] hover:from-[#d4b366] hover:to-[#cba258] text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg shadow-[#cba258]/25 hover:shadow-[#cba258]/40 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Atención VIP
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="relative">
                    <Image
                      src={selectedTestimonial.image || "/placeholder.svg"}
                      alt={selectedTestimonial.name}
                      width={100}
                      height={100}
                      className="rounded-full border-4 border-[#cba258]/20"
                    />
                    {selectedTestimonial.confidential && (
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#cba258] rounded-full flex items-center justify-center">
                        <Shield className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="text-2xl font-bold text-slate-900">{selectedTestimonial.name}</h2>
                      {selectedTestimonial.confidential && (
                        <div className="bg-gradient-to-r from-[#cba258] to-[#d4b366] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Shield className="h-3 w-3" />
                          Cliente VIP
                        </div>
                      )}
                    </div>
                    <p className="text-lg text-slate-600 mb-1">{selectedTestimonial.role}</p>
                    <p className="text-slate-500 mb-2">{selectedTestimonial.company}</p>
                    <p className="text-slate-500 text-sm mb-4">{selectedTestimonial.location}</p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < selectedTestimonial.rating ? "text-[#cba258] fill-current" : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Service Badge */}
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-[#cba258]/10 text-[#cba258] text-sm font-semibold rounded-full">
                    {selectedTestimonial.service}
                  </span>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-slate-700 text-lg leading-relaxed mb-8 relative">
                  <Quote className="absolute -top-4 -left-4 w-8 h-8 text-[#cba258]/20" />
                  <span className="relative z-10">"{selectedTestimonial.text}"</span>
                </blockquote>

                {/* Results */}
                <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <Award className="h-5 w-5 text-[#cba258] mr-2" />
                    Resultados Obtenidos
                  </h3>
                  <ul className="space-y-2">
                    {selectedTestimonial.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#cba258] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                  <Calendar className="h-4 w-4" />
                  <span>Caso completado en {selectedTestimonial.date}</span>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Link
                    href="/exclusive-client-view/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#cba258] to-[#d4b366] text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Solicitar Atención VIP
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
