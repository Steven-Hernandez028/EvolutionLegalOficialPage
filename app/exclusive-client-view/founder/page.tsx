"use client"

import { motion } from "framer-motion"
import { GraduationCap, Trophy, Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function ExclusiveFounderPage() {
  const { t } = useLanguage()

  const education = [
    {
      degree: "Derecho",
      institution: "Universidad Autónoma de Santo Domingo",
      year: "2010",
      honor: "Magna Cum Laude",
    },
    {
      degree: "Especialización en Derecho Inmobiliario",
      institution: "Instituto de Formación Jurídica",
      year: "2015",
      honor: "Distinción Académica",
    },
    {
      degree: "Certificación Internacional",
      institution: "Asociación Europea de Abogados",
      year: "2020",
      honor: "Certificación Profesional",
    },
  ]

  const achievements = [
    {
      year: "2023",
      title: "Reconocimiento AEI",
      organization: "Asociación de Empresas Inmobiliarias",
    },
    {
      year: "2022",
      title: "Certificación AEA",
      organization: "Asociación Europea de Abogados",
    },
    {
      year: "2021",
      title: "Miembro Destacado",
      organization: "Colegio de Abogados de RD",
    },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="LegalStudio Logo" width={80} height={80} className="rounded-full" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Abogada Fundadora</h1>
          <div className="text-2xl text-accent font-semibold">Dra. María González</div>
          <p className="text-xl text-white/80">CEO y Fundadora de Evolution Legal Advantage</p>
        </motion.div>

        {/* Main Profile */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Dra. María González"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass-section">
              <h2 className="text-3xl font-bold text-white mb-4">Experiencia Profesional</h2>
              <p className="text-xl text-white/80 leading-relaxed mb-6">
                Con más de 10 años de experiencia en el ámbito legal, me especializo en brindar soluciones jurídicas
                integrales que trascienden las barreras del idioma y las fronteras geográficas.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-accent/10 rounded-xl">
                  <div className="text-2xl font-bold text-accent">10+</div>
                  <div className="text-white/70">Años de Experiencia</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-xl">
                  <div className="text-2xl font-bold text-accent">7+</div>
                  <div className="text-white/70">Países</div>
                </div>
              </div>

              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative bg-accent/5 rounded-2xl p-6 border-l-4 border-accent"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/30" />
                <p className="text-white/80 italic text-lg leading-relaxed">
                  "Mi compromiso es transformar la complejidad legal en soluciones claras y efectivas, siempre
                  priorizando los intereses y objetivos de mis clientes."
                </p>
                <footer className="mt-4 text-white/60 font-medium">— Dra. María González</footer>
              </motion.blockquote>
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Formación Académica</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-white/80 mb-2">{edu.institution}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-semibold">{edu.year}</span>
                  <span className="text-sm text-white/60 bg-accent/10 px-2 py-1 rounded">{edu.honor}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-section"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Reconocimientos</h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-accent font-bold">{achievement.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{achievement.title}</h3>
                  <p className="text-white/70 text-sm">{achievement.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
