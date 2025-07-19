"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X, Calendar, MapPin, Scale, Users, Building, FileText, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NavbarAndTopBar } from "@/components/TopBarAndNavbar"
import { Footer } from "@/components/footer"

// Datos de casos legales de ejemplo
const legalCases = [
  {
    id: 1,
    title: "Adquisición Inmobiliaria Internacional",
    category: "Inmobiliario",
    image: "/placeholder.svg?height=400&width=600",
    date: "2024",
    location: "Santo Domingo, RD",
    client: "Inversionista Canadiense",
    description:
      "Due diligence completa para la adquisición de un complejo residencial de lujo en la zona colonial de Santo Domingo.",
    details:
      "Realizamos una investigación jurídica exhaustiva que incluyó verificación de títulos, permisos de construcción, análisis de zonificación y revisión de todas las obligaciones fiscales. El proceso duró 45 días y resultó en una transacción exitosa libre de riesgos legales.",
    services: ["Due Diligence Inmobiliario", "Revisión de Contratos", "Gestión Documental"],
    result: "Transacción completada exitosamente con ahorro del 15% en costos legales proyectados.",
    icon: Building,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Reubicación Empresarial Completa",
    category: "Migración",
    image: "/placeholder.svg?height=400&width=600",
    date: "2024",
    location: "Santiago, RD",
    client: "Familia Empresarial Europea",
    description:
      "Proceso integral de reubicación para una familia de empresarios europeos incluyendo residencia, establecimiento de negocio y educación.",
    details:
      "Gestionamos todos los aspectos legales de la reubicación: obtención de residencia permanente, establecimiento de sociedad comercial, inscripción escolar de menores, apertura de cuentas bancarias y gestión de seguros médicos. Proceso completado en 90 días.",
    services: ["Residencia Permanente", "Constitución Societaria", "Gestión Educativa"],
    result: "Familia establecida exitosamente con todos los permisos y documentación en regla.",
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Fusión Corporativa Transnacional",
    category: "Corporativo",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023",
    location: "Zona Franca, RD",
    client: "Corporación Multinacional",
    description:
      "Asesoría legal completa para la fusión de dos empresas tecnológicas con operaciones en República Dominicana y Estados Unidos.",
    details:
      "Coordinamos la due diligence corporativa, restructuración de acciones, cumplimiento regulatorio en ambas jurisdicciones y la documentación legal completa. El proceso involucró la revisión de más de 200 contratos y acuerdos comerciales.",
    services: ["Due Diligence Corporativa", "Restructuración Societaria", "Cumplimiento Regulatorio"],
    result: "Fusión completada con optimización fiscal del 25% y estructura corporativa eficiente.",
    icon: Scale,
    color: "from-purple-500 to-violet-500",
  },
  {
    id: 4,
    title: "Planificación Sucesoral Internacional",
    category: "Familia",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023",
    location: "La Romana, RD",
    client: "Familia de Jubilados",
    description:
      "Estructuración completa de planificación sucesoral para familia con activos en múltiples jurisdicciones.",
    details:
      "Desarrollamos una estrategia integral que incluyó la creación de testamentos válidos en múltiples países, estructuración de fideicomisos, planificación fiscal internacional y documentación para la transferencia ordenada de activos inmobiliarios y financieros.",
    services: ["Testamentos Internacionales", "Estructuración de Fideicomisos", "Planificación Fiscal"],
    result: "Patrimonio familiar protegido con reducción del 40% en impuestos sucesorales.",
    icon: FileText,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Desarrollo Turístico Sostenible",
    category: "Inmobiliario",
    image: "/placeholder.svg?height=400&width=600",
    date: "2024",
    location: "Samaná, RD",
    client: "Grupo Inversor Internacional",
    description: "Asesoría legal para el desarrollo de un complejo eco-turístico en la península de Samaná.",
    details:
      "Gestionamos todos los permisos ambientales, licencias de construcción, acuerdos con comunidades locales y estructuración legal del proyecto. Incluimos análisis de impacto ambiental y social, cumplimiento de regulaciones turísticas y coordinación con autoridades locales.",
    services: ["Permisos Ambientales", "Licencias Turísticas", "Acuerdos Comunitarios"],
    result: "Proyecto aprobado con certificación de sostenibilidad y apoyo comunitario del 95%.",
    icon: Building,
    color: "from-teal-500 to-green-500",
  },
  {
    id: 6,
    title: "Visa de Inversionista EB-5",
    category: "Migración",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023",
    location: "Miami, FL - Santo Domingo, RD",
    client: "Empresario Dominicano",
    description: "Proceso completo de obtención de visa de inversionista EB-5 para empresario dominicano.",
    details:
      "Estructuramos la inversión calificada de $800,000 USD en proyecto aprobado por USCIS, preparamos toda la documentación requerida, coordinamos con centro regional y representamos al cliente durante todo el proceso de adjudicación. Incluimos planificación para residencia condicional y posterior residencia permanente.",
    services: ["Estructuración de Inversión", "Documentación USCIS", "Representación Legal"],
    result: "Visa EB-5 aprobada en 18 meses, familia obtuvo residencia permanente en EE.UU.",
    icon: Users,
    color: "from-indigo-500 to-blue-500",
  },
]

const categories = ["Todos", "Inmobiliario", "Migración", "Corporativo", "Familia"]

export default function CatalogoPage() {
  const [selectedCase, setSelectedCase] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredCases =
    selectedCategory === "Todos" ? legalCases : legalCases.filter((case_) => case_.category === selectedCategory)

  // GSAP-style animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateX: 15,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const filterVariants = {
    inactive: { scale: 1, opacity: 0.7 },
    active: {
      scale: 1.05,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <>
    <NavbarAndTopBar/>
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <motion.div
    
        className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#cba258]/20 to-[#d4b366]/20 rounded-full border border-[#cba258]/30 mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-[#cba258] font-semibold">Catálogo de Casos</span>
          </motion.div>

          <motion.h1
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Casos de <span className="text-[#cba258]">Éxito</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos legales con soluciones innovadoras
            y resultados excepcionales.
          </motion.p>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#cba258]/20 rounded-full"
              animate={{
                y: [0, -30, 0],
                x: [0, 15, -15, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 20}%`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#cba258] to-[#d4b366] text-slate-900 shadow-lg shadow-[#cba258]/25"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
                variants={filterVariants}
                animate={selectedCategory === category ? "active" : "inactive"}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Cases Grid */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={selectedCategory} // Re-animate when category changes
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((case_, index) => {
              const IconComponent = case_.icon
              return (
                <motion.div
                  key={case_.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group cursor-pointer"
                  onClick={() => setSelectedCase(case_)}
                  style={{ perspective: "1000px" }}
                >
                  <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-[#cba258]/30 transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={case_.image}
                        alt={case_.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${case_.color} opacity-60`} />

                      {/* Category Badge */}
                      <motion.div
                        className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="text-white text-sm font-medium">{case_.category}</span>
                      </motion.div>

                      {/* Icon */}
                      <motion.div
                        className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="h-5 w-5 text-white" />
                      </motion.div>

                      {/* View Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      >
                        <div className="flex items-center space-x-2 text-white">
                          <Eye className="h-5 w-5" />
                          <span className="font-semibold">Ver Detalles</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <motion.h3
                        className="text-xl font-bold text-white mb-2 group-hover:text-[#cba258] transition-colors duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        {case_.title}
                      </motion.h3>

                      <motion.p
                        className="text-white/70 text-sm mb-4 line-clamp-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {case_.description}
                      </motion.p>

                      <motion.div
                        className="flex items-center justify-between text-sm text-white/60"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{case_.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{case_.location}</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute -inset-0.5 bg-gradient-to-r from-[#cba258]/20 to-[#d4b366]/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm -z-10"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Case Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCase(null)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="relative bg-slate-900/95 backdrop-blur-xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#cba258]/20"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              style={{ perspective: "1000px" }}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#cba258]/20 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Header Image */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedCase.image || "/placeholder.svg"}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedCase.color} opacity-70`} />

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-16">
                  <motion.div
                    className="inline-block px-4 py-2 bg-black/50 backdrop-blur-md rounded-full mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-[#cba258] font-semibold">{selectedCase.category}</span>
                  </motion.div>
                  <motion.h2
                    className="text-3xl font-bold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selectedCase.title}
                  </motion.h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Meta Info */}
                <motion.div
                  className="grid md:grid-cols-3 gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center space-x-2 text-white/70">
                    <Calendar className="h-5 w-5 text-[#cba258]" />
                    <span>{selectedCase.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/70">
                    <MapPin className="h-5 w-5 text-[#cba258]" />
                    <span>{selectedCase.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/70">
                    <Users className="h-5 w-5 text-[#cba258]" />
                    <span>{selectedCase.client}</span>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">Descripción del Caso</h3>
                  <p className="text-white/80 leading-relaxed mb-4">{selectedCase.description}</p>
                  <p className="text-white/70 leading-relaxed">{selectedCase.details}</p>
                </motion.div>

                {/* Services */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">Servicios Prestados</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.services.map((service, index) => (
                      <motion.span
                        key={service}
                        className="px-4 py-2 bg-[#cba258]/20 text-[#cba258] rounded-full text-sm font-medium border border-[#cba258]/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {service}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Result */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">Resultado</h3>
                  <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                    <p className="text-white/90 leading-relaxed">{selectedCase.result}</p>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <p className="text-white/70 mb-6">
                    ¿Tienes un caso similar? Contáctanos para una consulta personalizada.
                  </p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[#cba258] to-[#d4b366] hover:from-[#d4b366] hover:to-[#cba258] text-slate-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="/contact">Solicitar Consulta</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    <Footer/>
    </>
  )
}
