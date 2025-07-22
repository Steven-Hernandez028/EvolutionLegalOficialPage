"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Filter, Eye, Star, Shield, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Disclaimer from "@/components/disclaimer"

interface MiniCaseStudy {
  id: number
  title: string
  category: string
  image: string
  description: string
  rating: number
}

const categories = [
  { id: "all", name: "Todos", color: "from-slate-600 to-slate-700" },
  { id: "inmobiliario", name: "Inmobiliario", color: "from-blue-600 to-blue-700" },
  { id: "migracion", name: "Migración", color: "from-green-600 to-green-700" },
  { id: "corporativo", name: "Corporativo", color: "from-purple-600 to-purple-700" },
]

const miniCases: MiniCaseStudy[] = [
  {
    id: 1,
    title: "Resort de Lujo Punta Cana",
    category: "inmobiliario",
    image: "/placeholder.svg?height=300&width=400",
    description: "Due diligence completa para adquisición de resort de 200 habitaciones.",
    rating: 5,
  },
  {
    id: 2,
    title: "Residencia Familia Canadiense",
    category: "migracion",
    image: "/placeholder.svg?height=300&width=400",
    description: "Proceso integral de residencia permanente para familia de 4 miembros.",
    rating: 5,
  },
  {
    id: 3,
    title: "Holding Empresarial",
    category: "corporativo",
    image: "/placeholder.svg?height=300&width=400",
    description: "Estructuración legal de holding con 5 subsidiarias.",
    rating: 5,
  },
  {
    id: 4,
    title: "Terreno Rural Agrícola",
    category: "inmobiliario",
    image: "/placeholder.svg?height=300&width=400",
    description: "Adquisición de 500 hectáreas para proyecto sostenible.",
    rating: 5,
  },
  {
    id: 5,
    title: "Visa Turismo USA",
    category: "migracion",
    image: "/placeholder.svg?height=300&width=400",
    description: "Preparación integral para visa B1/B2 Estados Unidos.",
    rating: 5,
  },
  {
    id: 6,
    title: "Fusión Corporativa",
    category: "corporativo",
    image: "/placeholder.svg?height=300&width=400",
    description: "Asesoría para fusión de empresas tecnológicas.",
    rating: 5,
  },
]

export default function ExclusiveCatalogoPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredCases =
    selectedCategory === "all" ? miniCases : miniCases.filter((case_) => case_.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#cba258]/10 to-[#d4b366]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#cba258]/8 to-[#d4b366]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <Link
            href="/exclusive-client-view/home"
            className="inline-flex items-center space-x-2 text-white/70 hover:text-[#cba258] transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Inicio</span>
          </Link>

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-[#cba258]/20 to-[#d4b366]/20 backdrop-blur-sm border border-[#cba258]/30 text-[#cba258] rounded-full text-sm font-semibold mb-4"
          >
            Vista Exclusiva
          </motion.div>

          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white via-[#cba258] to-white bg-clip-text text-transparent">
              Catálogo de Casos
            </span>
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto mb-4">Casos destacados de nuestro portafolio legal</p>

          <Disclaimer />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur-sm"
                }`}
            >
              <Filter className="inline-block w-3 h-3 mr-2" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Cases Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredCases.map((case_, index) => (
              <motion.div
                key={case_.id}
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
                  y: -5,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="group cursor-pointer"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_20px_40px_-12px_rgba(203,162,88,0.25)] transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="w-full h-full">
                      <Image src={case_.image || "/placeholder.svg"} alt={case_.title} fill className="object-cover" />
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${categories.find((cat) => cat.id === case_.category)?.color || "from-gray-600 to-gray-700"
                          }`}
                      >
                        {categories.find((cat) => cat.id === case_.category)?.name}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="h-3 w-3 text-[#cba258] fill-current" />
                      <span className="text-xs font-semibold">{case_.rating}</span>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#cba258]/80 via-transparent to-transparent flex items-end justify-center pb-3"
                    >
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2 text-white"
                      >
                        <Eye className="h-3 w-3" />
                        <span className="text-xs font-semibold">Ver Caso</span>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#cba258] transition-colors">
                      {case_.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{case_.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < case_.rating ? "text-[#cba258] fill-current" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-[#cba258] font-semibold">Caso Exitoso</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-[#cba258]/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">¿Tienes un caso similar?</h3>
            <p className="text-white/70 mb-4">
              Contáctanos para una consulta personalizada y descubre cómo podemos ayudarte.
            </p>
            <Link
              href="/exclusive-client-view/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#cba258] to-[#d4b366] text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <span>Solicitar Consulta</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
