"use client"

import { motion } from "framer-motion"
import { FileSearch, Home, Building, Scale, Users, FileText, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Due Diligence Inmobiliaria",
      description: "Investigación jurídica exhaustiva para inversiones seguras en bienes raíces.",
      icon: FileSearch,
      features: [
        "Verificación de títulos de propiedad",
        "Análisis de permisos y licencias",
        "Revisión de deudas y gravámenes",
        "Evaluación de riesgos legales",
      ],
      color: "from-blue-500 to-blue-600",
      featured: true,
    },
    {
      id: 2,
      title: "Reubicación para Extranjeros",
      description: "Acompañamiento integral para establecerse legalmente en República Dominicana.",
      icon: Home,
      features: [
        "Gestión de residencia y ciudadanía",
        "Tramitación de documentos",
        "Asesoría en seguros y servicios",
        "Orientación sobre zonas residenciales",
      ],
      color: "from-green-500 to-green-600",
      featured: true,
    },
    {
      id: 3,
      title: "Derecho Societario",
      description: "Constitución y gestión legal de empresas y sociedades comerciales.",
      icon: Building,
      features: [
        "Constitución de sociedades",
        "Modificaciones societarias",
        "Due diligence empresarial",
        "Compra-venta de acciones",
      ],
      color: "from-purple-500 to-purple-600",
      featured: false,
    },
    {
      id: 4,
      title: "Derecho de Familia",
      description: "Asesoría legal en asuntos familiares y matrimoniales.",
      icon: Users,
      features: [
        "Divorcios por mutuo consentimiento",
        "Matrimonios de extranjeros",
        "Reconocimiento de paternidad",
        "Testamentos y sucesiones",
      ],
      color: "from-pink-500 to-pink-600",
      featured: false,
    },
    {
      id: 5,
      title: "Gestión de Documentos",
      description: "Formalización y legalización de documentos oficiales.",
      icon: FileText,
      features: [
        "Notarización y legalización",
        "Apostilla de documentos",
        "Traducción oficial",
        "Homologación internacional",
      ],
      color: "from-orange-500 to-orange-600",
      featured: false,
    },
    {
      id: 6,
      title: "Derecho Migratorio",
      description: "Visas, permisos y procesos consulares para Estados Unidos y Canadá.",
      icon: Scale,
      features: [
        "Evaluación de perfil migratorio",
        "Preparación de documentos",
        "Asesoría para entrevistas",
        "Seguimiento de procesos",
      ],
      color: "from-teal-500 to-teal-600",
      featured: false,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <Scale className="h-12 w-12 text-accent mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2">Nuestros Servicios</h1>
        <p className="text-white/80">Soluciones legales integrales para tus necesidades</p>
      </motion.div>

      {/* Featured Services */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Servicios Destacados</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services
            .filter((service) => service.featured)
            .map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-section"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`bg-gradient-to-r ${service.color} p-3 rounded-xl`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-primary">
                  <Link href="/exclusive-client-view/schedule">
                    Solicitar Servicio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
        </div>
      </div>

      {/* All Services Grid */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Todos los Servicios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-r ${service.color} p-3 rounded-xl w-fit mb-4`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">{service.description}</p>

              <div className="space-y-1 mb-4">
                {service.features.slice(0, 2).map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                    <span className="text-white/60 text-xs">{feature}</span>
                  </div>
                ))}
                {service.features.length > 2 && (
                  <span className="text-accent text-xs">+{service.features.length - 2} más...</span>
                )}
              </div>

              <Button
                asChild
                size="sm"
                variant="outline"
                className="w-full border-accent/20 text-accent hover:bg-accent hover:text-primary bg-transparent"
              >
                <Link href="/exclusive-client-view/schedule">Más Información</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 glass-section text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-4">¿No encuentras lo que buscas?</h2>
        <p className="text-white/80 mb-6">Contáctanos para una consulta personalizada sobre tu caso específico.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-accent hover:bg-accent/90 text-primary">
            <Link href="/exclusive-client-view/schedule">Agendar Consulta</Link>
          </Button>
          <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
            <a
              href="https://wa.me/18092611453?text=Necesito%20información%20sobre%20servicios%20legales"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Directo
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
