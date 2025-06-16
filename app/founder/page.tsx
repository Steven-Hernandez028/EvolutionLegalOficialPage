"use client"

import { motion } from "framer-motion"
import { GraduationCap, Trophy, Quote } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function FounderPage() {
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

  const specializations = [
    "Derecho Inmobiliario y Due Diligence",
    "Derecho Migratorio y Consular",
    "Derecho Societario y Corporativo",
    "Derecho de Familia Internacional",
    "Gestión de Documentos Legales",
    "Capacitación Jurídica",
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
    {
      year: "2020",
      title: "Expansión Internacional",
      organization: "Presencia en Canadá y Estados Unidos",
    },
  ]

  const timeline = [
    {
      year: "2010",
      event: "Graduación en Derecho",
      description: "Inicio de la carrera profesional en derecho",
    },
    {
      year: "2015",
      event: "Especialización Inmobiliaria",
      description: "Enfoque en derecho inmobiliario y due diligence",
    },
    {
      year: "2018",
      event: "Fundación de Evolution Legal",
      description: "Establecimiento del estudio legal especializado",
    },
    {
      year: "2020",
      event: "Expansión Internacional",
      description: "Presencia en Canadá y Estados Unidos",
    },
    {
      year: "2023",
      event: "Reconocimiento Profesional",
      description: "Membresías en asociaciones internacionales",
    },
  ]

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />

      {/* Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
            <div className="flex justify-center mb-6">
              <Image src="/logo.png" alt="LegalStudio Logo" width={80} height={80} className="rounded-full" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">{t("ceo.title")}</h1>
            <div className="text-2xl text-accent font-semibold">{t("ceo.name")}</div>
            <p className="text-xl text-white/80">{t("ceo.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Profile */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Dra. María González"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-accent/20"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-primary/70">Casos Exitosos</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-primary">{t("ceo.name")}</h2>
                <p className="text-xl text-primary/80 leading-relaxed">
                  Abogada fundadora y CEO de Evolution Legal Advantage. Mi camino en el mundo del derecho se inició con
                  una profunda pasión por el estudio y un inquebrantable deseo de servir. He tenido el privilegio de
                  trabajar en diversos sectores económicos, lo que me ha proporcionado una visión integral y una base
                  sólida como profesional.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-accent/10 rounded-xl">
                  <div className="text-2xl font-bold text-accent">10+</div>
                  <div className="text-primary/70">{t("ceo.experience")}</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-xl">
                  <div className="text-2xl font-bold text-accent">7+</div>
                  <div className="text-primary/70">{t("ceo.countries")}</div>
                </div>
              </div>

              {/* Philosophy Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative bg-accent/5 rounded-2xl p-6 border-l-4 border-accent"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/30" />
                <p className="text-primary/80 italic text-lg leading-relaxed">{t("ceo.philosophyText")}</p>
                <footer className="mt-4 text-primary/60 font-medium">— {t("ceo.name")}</footer>
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">{t("founder.education")}</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Formación académica sólida respaldada por las mejores instituciones educativas del país.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{edu.degree}</h3>
                <p className="text-primary/80 mb-2">{edu.institution}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-semibold">{edu.year}</span>
                  <span className="text-sm text-primary/60 bg-accent/10 px-2 py-1 rounded">{edu.honor}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-8">{t("founder.specializations")}</h2>
              <div className="grid gap-4">
                {specializations.map((spec, index) => (
                  <motion.div
                    key={spec}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-primary/80 font-medium">{spec}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-8">{t("founder.achievements")}</h2>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Trophy className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-accent font-bold">{achievement.year}</span>
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-1">{achievement.title}</h3>
                        <p className="text-primary/70 text-sm">{achievement.organization}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-secondary to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Trayectoria Profesional</h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              Un recorrido de dedicación, crecimiento y logros en el ámbito legal.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20 rounded-full" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-accent mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-primary mb-2">{item.event}</h3>
                      <p className="text-primary/70">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg" />

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
