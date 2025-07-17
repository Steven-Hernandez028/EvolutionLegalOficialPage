"use client"

import { useState } from "react"
import { motion, AnimatePresence, Variant, Variants } from "framer-motion"
import {
  Scale,
  Users,
  Building,
  Heart,
  FileText,
  Shield,
  ArrowLeft,
  CheckCircle,
  Star,
  MessageCircle,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: "due-diligence",
    icon: Scale,
    title: "Due Diligence Inmobiliaria",
    shortDescription: "Investigación jurídica completa para inversiones seguras",
    fullDescription:
      "Nuestro servicio estrella de Due Diligence Inmobiliaria es su garantía de una inversión sólida y segura. Realizamos una investigación jurídica exhaustiva que incluye verificación de títulos, análisis de permisos, revisión de deudas y evaluación de riesgos legales.",
    features: [
      "Verificación completa de títulos de propiedad",
      "Análisis de permisos y licencias",
      "Revisión de deudas y gravámenes",
      "Evaluación de riesgos legales",
      "Informe detallado con recomendaciones",
      "Seguimiento post-compra",
    ],
    benefits: [
      "Inversión 100% segura y respaldada legalmente",
      "Evita sorpresas y costos ocultos",
      "Acelera el proceso de compra",
      "Protege su patrimonio a largo plazo",
    ],
    process: [
      "Solicitud inicial y documentación",
      "Investigación en registros públicos",
      "Verificación de títulos y permisos",
      "Análisis de riesgos y deudas",
      "Elaboración de informe detallado",
      "Presentación de resultados y recomendaciones",
    ],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-blue-500 to-blue-600",
    price: "Desde $500 USD",
    duration: "5-7 días hábiles",
  },
  {
    id: "relocation",
    icon: Users,
    title: "Reubicación Integral",
    shortDescription: "Acompañamiento completo para extranjeros en RD",
    fullDescription:
      "Le acompañamos en cada paso de su emocionante viaje hacia la República Dominicana. Nuestro servicio de reubicación integral incluye gestión de seguros, obtención de licencias de conducir, asesoría bancaria y todo lo necesario para su nueva vida.",
    features: [
      "Gestión de seguros médicos y vehiculares",
      "Obtención de licencia de conducir dominicana",
      "Asesoría para apertura de cuentas bancarias",
      "Registro en servicios públicos",
      "Orientación sobre sistema educativo",
      "Conexión con comunidades de expatriados",
    ],
    benefits: [
      "Transición suave y sin estrés",
      "Ahorro de tiempo y recursos",
      "Evita errores costosos",
      "Integración rápida a la sociedad dominicana",
    ],
    process: [
      "Evaluación de necesidades específicas",
      "Planificación personalizada de reubicación",
      "Gestión de documentación requerida",
      "Acompañamiento en trámites presenciales",
      "Seguimiento durante los primeros meses",
      "Soporte continuo según necesidades",
    ],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-green-500 to-green-600",
    price: "Desde $800 USD",
    duration: "2-4 semanas",
  },
  {
    id: "real-estate",
    icon: Building,
    title: "Asesoría Inmobiliaria",
    shortDescription: "Facilitamos su experiencia en el mercado inmobiliario",
    fullDescription:
      "Facilitamos su experiencia en el mercado inmobiliario dominicano con asesoría especializada en compra, venta y gestión de propiedades. Protegemos sus intereses en cada transacción inmobiliaria.",
    features: [
      "Asesoría en compra y venta de propiedades",
      "Negociación de contratos inmobiliarios",
      "Gestión de financiamiento",
      "Supervisión de procesos de construcción",
      "Administración de propiedades",
      "Resolución de conflictos inmobiliarios",
    ],
    benefits: [
      "Transacciones seguras y transparentes",
      "Maximización del valor de inversión",
      "Protección legal completa",
      "Acceso a las mejores oportunidades",
    ],
    process: [
      "Consulta inicial sobre objetivos",
      "Análisis del mercado inmobiliario",
      "Identificación de oportunidades",
      "Negociación y estructuración legal",
      "Supervisión del proceso de cierre",
      "Seguimiento post-transacción",
    ],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-purple-500 to-purple-600",
    price: "Desde $600 USD",
    duration: "Variable según proyecto",
  },
  {
    id: "immigration",
    icon: FileText,
    title: "Derecho Migratorio",
    shortDescription: "Residencia, ciudadanía y permisos especiales",
    fullDescription:
      "Nuestra experiencia en extranjería abarca diversos procesos esenciales para su vida en la República Dominicana, incluyendo residencia temporal y permanente, ciudadanía dominicana y permisos especiales para menores.",
    features: [
      "Residencia temporal y permanente",
      "Proceso de ciudadanía dominicana",
      "Permisos de trabajo para extranjeros",
      "Documentación para menores",
      "Renovaciones y actualizaciones",
      "Asesoría en deportación y apelaciones",
    ],
    benefits: [
      "Status legal seguro en RD",
      "Acceso a derechos y beneficios",
      "Proceso eficiente y sin complicaciones",
      "Cumplimiento total con la ley migratoria",
    ],
    process: [
      "Evaluación de elegibilidad",
      "Preparación de documentación",
      "Presentación ante autoridades",
      "Seguimiento del proceso",
      "Obtención de documentos finales",
      "Asesoría para renovaciones futuras",
    ],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-amber-500 to-amber-600",
    price: "Desde $400 USD",
    duration: "1-3 meses",
  },
  {
    id: "corporate",
    icon: Shield,
    title: "Derecho Societario",
    shortDescription: "Creación y gestión de empresas",
    fullDescription:
      "En el ámbito del derecho societario, le brindamos asesoría experta en creación, modificación y disolución de sociedades comerciales, así como cumplimiento corporativo y estructuración empresarial.",
    features: [
      "Constitución de sociedades comerciales",
      "Modificaciones societarias",
      "Cumplimiento corporativo",
      "Contratos comerciales",
      "Fusiones y adquisiciones",
      "Disolución y liquidación",
    ],
    benefits: [
      "Estructura empresarial óptima",
      "Cumplimiento legal garantizado",
      "Protección de activos",
      "Optimización fiscal",
    ],
    process: [
      "Consulta sobre estructura empresarial",
      "Preparación de documentos constitutivos",
      "Registro ante autoridades competentes",
      "Obtención de permisos operativos",
      "Implementación de gobierno corporativo",
      "Soporte legal continuo",
    ],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-red-500 to-red-600",
    price: "Desde $350 USD",
    duration: "2-3 semanas",
  },
  {
    id: "family",
    icon: Heart,
    title: "Derecho Familiar",
    shortDescription: "Apoyo especializado en momentos personales",
    fullDescription:
      "En los momentos personales que requieren asesoría legal, le ofrecemos apoyo especializado en derecho familiar, incluyendo divorcios, custodia, adopciones y mediación familiar.",
    features: [
      "Procesos de divorcio y separación",
      "Custodia y régimen de visitas",
      "Pensión alimentaria",
      "Adopciones nacionales e internacionales",
      "Mediación familiar",
      "Violencia doméstica",
    ],
    benefits: [
      "Resolución pacífica de conflictos",
      "Protección de derechos familiares",
      "Bienestar de menores garantizado",
      "Proceso menos traumático",
    ],
    process: [
      "Consulta confidencial inicial",
      "Análisis de la situación familiar",
      "Estrategia legal personalizada",
      "Mediación o representación judicial",
      "Seguimiento de acuerdos",
      "Soporte emocional y legal continuo",
    ],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-pink-500 to-pink-600",
    price: "Desde $300 USD",
    duration: "Variable según caso",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { y: -5, scale: 1.02 },
}

const detailVariants : Variants = {
  hidden: { opacity: 0, x: 300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    x: -300,
    transition: {
      duration: 0.3,
    },
  },
}

export default function ExclusiveServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const service = selectedService ? services.find((s) => s.id === selectedService) : null

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  Soluciones legales especializadas diseñadas para proteger sus intereses y garantizar su éxito
                </p>
              </motion.div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedService(service.id)}
                    className="cursor-pointer"
                  >
                    <div
                      className={`glass-card p-8 h-full bg-gradient-to-br ${service.color} relative overflow-hidden group`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full" />
                        <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full" />
                      </div>

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <service.icon className="h-8 w-8 text-white" />
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-white/90 mb-6 leading-relaxed">{service.shortDescription}</p>

                        {/* Price and Duration */}
                        <div className="flex justify-between items-center mb-6">
                          <div className="text-white/80">
                            <div className="text-sm">Desde</div>
                            <div className="font-bold">{service.price}</div>
                          </div>
                          <div className="text-white/80 text-right">
                            <div className="text-sm">Duración</div>
                            <div className="font-bold text-sm">{service.duration}</div>
                          </div>
                        </div>

                        {/* CTA */}
                        <Button
                          className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                          variant="outline"
                        >
                          Ver Detalles
                        </Button>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="service-detail" variants={detailVariants} initial="hidden" animate="visible" exit="exit">
              {/* Back Button */}
              <div className="mb-8">
                <Button
                  onClick={() => setSelectedService(null)}
                  variant="ghost"
                  className="text-white hover:text-accent hover:bg-white/10"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver a Servicios
                </Button>
              </div>

              {service && (
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Service Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    <div className="relative h-96 rounded-2xl overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4`}
                        >
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                      </div>
                    </div>
                  </motion.div>

                  {/* Service Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-8"
                  >
                    {/* Description */}
                    <div className="glass-section">
                      <h3 className="text-2xl font-bold text-white mb-4">Descripción del Servicio</h3>
                      <p className="text-white/80 leading-relaxed mb-6">{service.fullDescription}</p>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-accent/10 rounded-xl">
                          <div className="text-2xl font-bold text-accent">{service.price}</div>
                          <div className="text-white/70 text-sm">Precio inicial</div>
                        </div>
                        <div className="text-center p-4 bg-accent/10 rounded-xl">
                          <div className="text-lg font-bold text-accent">{service.duration}</div>
                          <div className="text-white/70 text-sm">Tiempo estimado</div>
                        </div>
                      </div>
                    </div>

                    {/* Request Service CTA */}
                    <div className="glass-section text-center">
                      <h3 className="text-xl font-bold text-white mb-4">¿Interesado en este servicio?</h3>
                      <p className="text-white/80 mb-6">
                        Contáctanos para una consulta personalizada y cotización detallada
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                          <Link
                            href={`https://wa.me/18092611453?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
                            target="_blank"
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Solicitar Servicio
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="border-accent text-accent hover:bg-accent hover:text-primary bg-transparent"
                        >
                          <Link href="/exclusive-client-view/contact">
                            <Phone className="h-4 w-4 mr-2" />
                            Consulta Gratuita
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {service && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-12 grid md:grid-cols-3 gap-8"
                >
                  {/* Features */}
                  <div className="glass-card p-6">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-2" />
                      Características
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-white/80">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="glass-card p-6">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Star className="h-5 w-5 text-accent mr-2" />
                      Beneficios
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2 text-white/80">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div className="glass-card p-6">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                      <FileText className="h-5 w-5 text-accent mr-2" />
                      Proceso
                    </h4>
                    <ol className="space-y-2">
                      {service.process.map((step, index) => (
                        <li key={index} className="flex items-start space-x-3 text-white/80">
                          <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-accent text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
