"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Shield, Award, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function ExclusiveAboutPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Heart,
      title: "Integridad",
      description: "Actuamos con honestidad y transparencia en cada caso, manteniendo los más altos estándares éticos.",
    },
    {
      icon: Award,
      title: "Excelencia",
      description:
        "Buscamos la excelencia en cada aspecto de nuestro trabajo, desde la investigación hasta la representación.",
    },
    {
      icon: Shield,
      title: "Compromiso",
      description: "Nos comprometemos completamente con cada cliente, dedicando el tiempo y recursos necesarios.",
    },
    {
      icon: CheckCircle,
      title: "Transparencia",
      description: "Mantenemos comunicación clara y honesta sobre el progreso y expectativas de cada caso.",
    },
  ]

  const stats = [
    { number: "10+", label: "Años de Experiencia" },
    { number: "7+", label: "Países de Operación" },
    { number: "98%", label: "Satisfacción del Cliente" },
    { number: "24/7", label: "Disponibilidad" },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="Evolution Legal Advantage Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Evolution Legal Advantage - Tu socio confiable en soluciones legales integrales
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-section"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-white">Nuestra Misión</h2>
            </div>
            <p className="text-white/80 leading-relaxed">
              Brindar servicios legales de excelencia, adaptados a las necesidades específicas de cada cliente,
              garantizando soluciones eficaces y el más alto nivel de profesionalismo en cada caso.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-section"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-white">Nuestra Visión</h2>
            </div>
            <p className="text-white/80 leading-relaxed">
              Ser reconocidos como el estudio legal líder en servicios especializados, estableciendo nuevos estándares
              de calidad y confianza en la práctica jurídica moderna.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Nuestros Valores</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra identidad profesional.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-section text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Nuestros Resultados</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
