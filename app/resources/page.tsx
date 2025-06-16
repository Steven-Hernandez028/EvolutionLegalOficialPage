"use client"

import { motion } from "framer-motion"
import { BookOpen, Download, Video, FileText, Users, Award } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function ResourcesPage() {
  const { t } = useLanguage()

  const resources = [
    {
      id: 1,
      title: "Guía Completa de Due Diligence Inmobiliaria",
      description: "Manual detallado para realizar investigaciones jurídicas inmobiliarias efectivas.",
      type: "PDF",
      icon: FileText,
      downloadUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Checklist para Reubicación de Extranjeros",
      description: "Lista completa de documentos y trámites necesarios para establecerse en RD.",
      type: "PDF",
      icon: FileText,
      downloadUrl: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Webinar: Derecho Societario en República Dominicana",
      description: "Grabación del seminario sobre constitución y gestión de empresas.",
      type: "Video",
      icon: Video,
      downloadUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Formularios Legales Básicos",
      description: "Plantillas de contratos y documentos legales más utilizados.",
      type: "ZIP",
      icon: Download,
      downloadUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Manual de Ética Profesional",
      description: "Guía sobre principios éticos en la práctica legal moderna.",
      type: "PDF",
      icon: BookOpen,
      downloadUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Curso: Redacción de Contratos Efectivos",
      description: "Serie de videos sobre técnicas avanzadas de redacción legal.",
      type: "Video",
      icon: Video,
      downloadUrl: "#",
      featured: true,
    },
  ]

  const workshops = [
    {
      id: 1,
      title: "Taller de Investigación Jurídica",
      description: "Técnicas modernas para investigación legal efectiva.",
      duration: "4 horas",
      level: "Intermedio",
      participants: 25,
    },
    {
      id: 2,
      title: "Seminario de Derecho Digital",
      description: "Aspectos legales de la era digital y tecnología.",
      duration: "6 horas",
      level: "Avanzado",
      participants: 20,
    },
    {
      id: 3,
      title: "Workshop de Negociación Legal",
      description: "Estrategias de negociación para abogados.",
      duration: "8 horas",
      level: "Intermedio",
      participants: 30,
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
              <Image
                src="/logo.png"
                alt="Evolution Legal Advantage Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">{t("nav.resources")}</h1>
            <div className="text-2xl text-accent font-semibold">Impulsando la Profesión</div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Recursos valiosos, talleres y herramientas para empoderar a los profesionales del derecho.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Recursos Destacados</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Herramientas esenciales para el desarrollo profesional de abogados y estudiantes de derecho.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {resources
              .filter((resource) => resource.featured)
              .map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <resource.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                          {resource.title}
                        </h3>
                        <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-semibold">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-primary/80 mb-4">{resource.description}</p>
                      <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-primary">
                        <Link href={resource.downloadUrl} className="flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>Descargar</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Biblioteca de Recursos</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Accede a nuestra colección completa de materiales educativos y herramientas profesionales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <resource.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-semibold">
                    {resource.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {resource.title}
                </h3>
                <p className="text-primary/80 text-sm mb-4">{resource.description}</p>

                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href={resource.downloadUrl} className="flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Descargar</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Talleres y Capacitaciones</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Programas de formación diseñados para fortalecer las habilidades profesionales de abogados.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      workshop.level === "Básico"
                        ? "bg-green-100 text-green-600"
                        : workshop.level === "Intermedio"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                    }`}
                  >
                    {workshop.level}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">{workshop.title}</h3>
                <p className="text-primary/80 mb-4">{workshop.description}</p>

                <div className="space-y-2 text-sm text-primary/70 mb-4">
                  <div className="flex justify-between">
                    <span>Duración:</span>
                    <span className="font-medium">{workshop.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Participantes:</span>
                    <span className="font-medium">{workshop.participants} máx.</span>
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-primary">Inscribirse</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-accent/10 via-secondary to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
              <Award className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary">¿Eres Abogado Recién Graduado?</h2>
            <p className="text-xl text-primary/80 max-w-2xl mx-auto">
              Únete a nuestro programa de mentoría y accede a recursos exclusivos para impulsar tu carrera profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                <Link href="/contact">Solicitar Mentoría</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/schedule">Agendar Consulta</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
