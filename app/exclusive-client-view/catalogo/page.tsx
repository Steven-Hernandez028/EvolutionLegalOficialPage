"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import {
  X,
  Filter,
  MapPin,
  Calendar,
  Award,
  ArrowRight,
  Eye,
  Star,
  MessageCircle,
  Shield,
  ArrowLeft,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface CaseStudy {
  id: number
  title: string
  category: string
  client: string
  location: string
  image: string
  description: string
  services: string[]
  results: string[]
  date: string
  duration: string
  testimonial?: string
  rating?: number
}

const categories = [
  { id: "all", name: "Todos los Casos", color: "from-slate-600 to-slate-700" },
  { id: "inmobiliario", name: "Inmobiliario", color: "from-blue-600 to-blue-700" },
  { id: "migracion", name: "Migración", color: "from-green-600 to-green-700" },
  { id: "corporativo", name: "Corporativo", color: "from-purple-600 to-purple-700" },
  { id: "familia", name: "Familia", color: "from-pink-600 to-pink-700" },
]

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Adquisición de Resort de Lujo en Punta Cana",
    category: "inmobiliario",
    client: "Grupo Hotelero Internacional",
    location: "Punta Cana, República Dominicana",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Due diligence completa para la adquisición de un resort de 200 habitaciones en primera línea de playa. Verificación de títulos, permisos ambientales, licencias turísticas y resolución de gravámenes existentes.",
    services: ["Due Diligence Inmobiliaria", "Verificación de Títulos", "Permisos Ambientales", "Licencias Turísticas"],
    results: [
      "Transacción exitosa de $45M USD",
      "Resolución de 3 gravámenes",
      "Obtención de permisos pendientes",
      "Ahorro de $2M en contingencias",
    ],
    date: "Marzo 2024",
    duration: "4 meses",
    testimonial: "Evolution Legal nos brindó la seguridad jurídica necesaria para esta importante inversión.",
    rating: 5,
  },
  {
    id: 2,
    title: "Proceso de Residencia para Familia Canadiense",
    category: "migracion",
    client: "Familia Thompson",
    location: "Santiago, República Dominicana",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Gestión integral del proceso de residencia permanente para familia de 4 miembros, incluyendo apertura de cuentas bancarias, registro de vehículos, inscripción escolar y seguros médicos.",
    services: ["Residencia Permanente", "Reubicación Integral", "Gestión Bancaria", "Seguros Médicos"],
    results: [
      "Residencia aprobada en 6 meses",
      "Integración familiar completa",
      "Ahorro de 40% en costos",
      "Satisfacción del 100%",
    ],
    date: "Enero 2024",
    duration: "6 meses",
    testimonial: "Nos sentimos como en casa gracias al acompañamiento profesional de Evolution Legal.",
    rating: 5,
  },
  {
    id: 3,
    title: "Constitución de Holding Empresarial",
    category: "corporativo",
    client: "Grupo Empresarial del Caribe",
    location: "Santo Domingo, República Dominicana",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Estructuración legal de holding empresarial con 5 subsidiarias, optimización fiscal, due diligence de adquisiciones y reestructuración corporativa para expansión regional.",
    services: [
      "Constitución de Sociedades",
      "Reestructuración Corporativa",
      "Due Diligence Empresarial",
      "Optimización Fiscal",
    ],
    results: [
      "Holding constituido exitosamente",
      "Optimización fiscal del 25%",
      "5 subsidiarias integradas",
      "Expansión a 3 países",
    ],
    date: "Febrero 2024",
    duration: "8 meses",
    testimonial: "La estructura legal creada nos permitió expandirnos de manera eficiente y segura.",
    rating: 5,
  },
  {
    id: 4,
    title: "Divorcio Amigable y Planificación Sucesoral",
    category: "familia",
    client: "Familia Martínez-García",
    location: "La Romana, República Dominicana",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Proceso de divorcio por mutuo consentimiento con división equitativa de bienes, custodia compartida y elaboración de testamentos para ambas partes, priorizando el bienestar de los menores.",
    services: ["Divorcio por Mutuo Consentimiento", "División de Bienes", "Custodia Compartida", "Testamentos"],
    results: [
      "Divorcio finalizado en 3 meses",
      "Acuerdo satisfactorio para ambas partes",
      "Bienestar de menores protegido",
      "Planificación sucesoral completa",
    ],
    date: "Abril 2024",
    duration: "3 meses",
    testimonial: "Manejaron nuestro caso con sensibilidad y profesionalismo excepcional.",
    rating: 5,
  },
  {
    id: 5,
    title: "Compra de Terreno Rural para Proyecto Agrícola",
    category: "inmobiliario",
    client: "Inversionista Europeo",
    location: "Montecristi, República Dominicana",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Due diligence y adquisición de 500 hectáreas de terreno rural para proyecto agrícola sostenible, incluyendo verificación de uso de suelo, permisos ambientales y derechos de agua.",
    services: ["Due Diligence Rural", "Permisos Ambientales", "Derechos de Agua", "Uso de Suelo"],
    results: [
      "Adquisición exitosa de 500 hectáreas",
      "Permisos ambientales aprobados",
      "Derechos de agua asegurados",
      "Proyecto agrícola en marcha",
    ],
    date: "Mayo 2024",
    duration: "5 meses",
    testimonial: "Su conocimiento del sector rural fue fundamental para el éxito del proyecto.",
    rating: 5,
  },
  {
    id: 6,
    title: "Visa de Turismo USA para Empresario",
    category: "migracion",
    client: "Empresario Dominicano",
    location: "Santo Domingo, República Dominicana",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Preparación integral para solicitud de visa de turismo B1/B2 para Estados Unidos, incluyendo evaluación de perfil, preparación de documentos y entrenamiento para entrevista consular.",
    services: [
      "Evaluación de Perfil",
      "Preparación de Documentos",
      "Entrenamiento para Entrevista",
      "Seguimiento Consular",
    ],
    results: [
      "Visa aprobada en primera solicitud",
      "Entrevista exitosa",
      "Documentación perfecta",
      "Cliente satisfecho",
    ],
    date: "Junio 2024",
    duration: "2 meses",
    testimonial: "La preparación fue tan completa que la entrevista fue muy sencilla.",
    rating: 5,
  },
]

// Pre-defined positions to avoid hydration mismatch
const particlePositions = [
  { left: 15, top: 25, size: 3 },
  { left: 85, top: 20, size: 4 },
  { left: 30, top: 75, size: 2 },
  { left: 95, top: 65, size: 3 },
  { left: 20, top: 50, size: 4 },
  { left: 75, top: 85, size: 2 },
  { left: 50, top: 30, size: 3 },
  { left: 90, top: 40, size: 2 },
  { left: 35, top: 90, size: 4 },
  { left: 65, top: 15, size: 3 },
  { left: 10, top: 60, size: 2 },
  { left: 80, top: 70, size: 3 },
  { left: 45, top: 45, size: 4 },
  { left: 70, top: 55, size: 2 },
  { left: 25, top: 95, size: 3 },
  { left: 55, top: 10, size: 2 },
  { left: 5, top: 35, size: 3 },
  { left: 60, top: 80, size: 4 },
  { left: 40, top: 5, size: 2 },
  { left: 85, top: 90, size: 3 },
]

export default function ExclusiveCatalogoPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredCases =
    selectedCategory === "all"
      ? caseStudies
      : caseStudies.filter((caseStudy) => caseStudy.category === selectedCategory)

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Floating particles component with fixed positions
  const FloatingParticle = ({ delay = 0, size = 4, left = 0, top = 0 }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: [-20, -100],
        x: [0, 10, -10, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 3,
      }}
      className="absolute bg-[#cba258] rounded-full blur-sm"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: `${top}%`,
      }}
    />
  )

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles with fixed positions */}
        {particlePositions.map((particle, i) => (
          <FloatingParticle key={i} delay={i * 0.3} size={particle.size} left={particle.left} top={particle.top} />
        ))}

        {/* Parallax Orbs */}
        <motion.div
          animate={{
            x: mousePosition.x * 100,
            y: mousePosition.y * 50,
            rotate: 360,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#cba258]/20 to-[#d4b366]/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: mousePosition.x * -80,
            y: mousePosition.y * -60,
            rotate: -360,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 15 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#cba258]/15 to-[#d4b366]/8 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Back Button */}
        <div className="pt-8 px-4 sm:px-6 lg:px-8">
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
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="pt-16 pb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#cba258]/20 to-[#d4b366]/20 backdrop-blur-sm border border-[#cba258]/30 text-[#cba258] rounded-full text-sm font-semibold mb-6"
          >
            Acceso Exclusivo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-white via-[#cba258] to-white bg-clip-text text-transparent">
              Catálogo Privado
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Casos confidenciales y resultados excepcionales para nuestros clientes VIP
          </motion.p>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 flex items-center justify-center space-x-2 text-white/50 text-xs"
          >
            <Shield className="h-3 w-3" />
            <span>Estos casos y fotos son autorizados para ser publicados</span>
          </motion.div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16 px-4"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              <Filter className="inline-block w-4 h-4 mr-2" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Cases Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredCases.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 100,
                    rotateY: -45,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -100,
                    rotateY: 45,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{
                    y: -10,
                    rotateY: 5,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="group cursor-pointer perspective-1000"
                  onClick={() => setSelectedCase(caseStudy)}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(203,162,88,0.25)] transition-all duration-700 transform-gpu">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full"
                      >
                        <Image
                          src={caseStudy.image || "/placeholder.svg"}
                          alt={caseStudy.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${
                            categories.find((cat) => cat.id === caseStudy.category)?.color ||
                            "from-gray-600 to-gray-700"
                          }`}
                        >
                          {categories.find((cat) => cat.id === caseStudy.category)?.name}
                        </span>
                      </div>

                      {/* Rating */}
                      {caseStudy.rating && (
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                          <Star className="h-4 w-4 text-[#cba258] fill-current" />
                          <span className="text-sm font-semibold">{caseStudy.rating}</span>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-[#cba258]/80 via-transparent to-transparent flex items-end justify-center pb-4"
                      >
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2 text-white"
                        >
                          <Eye className="h-4 w-4" />
                          <span className="text-sm font-semibold">Ver Detalles</span>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{caseStudy.date}</span>
                        <span>•</span>
                        <MapPin className="h-4 w-4" />
                        <span>{caseStudy.location}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#cba258] transition-colors">
                        {caseStudy.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{caseStudy.description}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#cba258]">{caseStudy.client}</span>
                        <ArrowRight className="h-5 w-5 text-[#cba258] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="relative h-64 rounded-t-3xl overflow-hidden">
                  <Image
                    src={selectedCase.image || "/placeholder.svg"}
                    alt={selectedCase.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <button
                    onClick={() => setSelectedCase(null)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>

                  <div className="absolute bottom-4 left-6 text-white">
                    <h2 className="text-3xl font-bold mb-2">{selectedCase.title}</h2>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{selectedCase.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedCase.location}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Descripción del Caso</h3>
                        <p className="text-gray-600 leading-relaxed">{selectedCase.description}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Servicios Prestados</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedCase.services.map((service, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-[#cba258]/10 text-[#cba258] rounded-full text-sm font-semibold"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      {selectedCase.testimonial && (
                        <div className="bg-gray-50 rounded-2xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-3">Testimonio del Cliente</h3>
                          <p className="text-gray-600 italic">"{selectedCase.testimonial}"</p>
                          <div className="flex items-center mt-3">
                            <span className="text-sm font-semibold text-[#cba258]">- {selectedCase.client}</span>
                            {selectedCase.rating && (
                              <div className="flex items-center ml-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < selectedCase.rating! ? "text-[#cba258] fill-current" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Resultados Obtenidos</h3>
                        <ul className="space-y-2">
                          {selectedCase.results.map((result, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <Award className="h-5 w-5 text-[#cba258] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-[#cba258]/5 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Información del Proyecto</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Cliente:</span>
                            <span className="font-semibold text-gray-900">{selectedCase.client}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Duración:</span>
                            <span className="font-semibold text-gray-900">{selectedCase.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Ubicación:</span>
                            <span className="font-semibold text-gray-900">{selectedCase.location}</span>
                          </div>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-[#cba258] to-[#d4b366] text-white font-semibold py-4 px-6 rounded-2xl flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span>Consultar Caso Similar</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
