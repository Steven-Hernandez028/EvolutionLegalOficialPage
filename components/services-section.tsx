"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Scale, Shield, FileText, Users, Building, Heart } from "lucide-react"

const services = [
  {
    id: "due-diligence",
    icon: Scale,
    title: "Investigación Jurídica Inmobiliaria",
    subtitle: "Su Inversión Segura",
    description: "Verificamos meticulosamente que el inmueble cuente con todos los permisos, que esté libre de deudas y que el título corresponda con la realidad física. Protegemos su inversión desde el primer día.",
    features: ["Verificación de Permisos y Títulos", "Análisis de Deudas Pendientes", "Evaluación de Riesgos Jurídicos"],
  },
  {
    id: "relocation",
    icon: Users,
    title: "Reubicación Integral para Extranjeros",
    subtitle: "Su Nuevo Comienzo en RD",
    description: "Le acompañamos en cada paso de su transición a la República Dominicana. Desde seguros hasta licencias, aseguramos que su establecimiento sea suave y sin contratiempos.",
    features: ["Gestión de Seguros de Salud", "Licencias de Conducir", "Asesoría de Zonificación"],
  },
  {
    id: "real-estate",
    icon: Building,
    title: "Asesoría y Gestión de Bienes Inmuebles",
    subtitle: "Compra, Venta y Renta",
    description: "Facilitamos su experiencia en el mercado inmobiliario con asesoría completa para decisiones informadas y protección total de sus intereses.",
    features: ["Compra y Venta de Propiedades", "Contratos de Arrendamiento", "Protección de Intereses"],
  },
  {
    id: "rural-lands",
    icon: Heart,
    title: "Tierras Vírgenes del Norte",
    subtitle: "Su Retiro Soñado en el Campo",
    description: "Para quienes buscan tranquilidad en el campo, ofrecemos terrenos rurales y fincas en el norte de RD. El lugar perfecto para su retiro o proyectos personales.",
    features: ["Terrenos Rurales Vírgenes", "Fincas Productivas del Norte", "Proyectos de Retiro"],
  },
  {
    id: "immigration",
    icon: FileText,
    title: "Extranjería: Residencia y Ciudadanía",
    subtitle: "Establecimiento Legal en RD",
    description: "Gestionamos todos los aspectos legales para su residencia permanente y eventual ciudadanía dominicana, incluyendo permisos especiales.",
    features: ["Residencia Dominicana", "Ciudadanía Dominicana", "Permisos de Salida de Menores"],
  },
  {
    id: "consular",
    icon: Shield,
    title: "Derecho Migratorio y Consular",
    subtitle: "Conectando Familias y Oportunidades",
    description: "Acompañamiento meticuloso para obtener visas de turismo a Estados Unidos y Canadá. Evaluamos su perfil y le preparamos para un proceso exitoso.",
    features: ["Visas de Turismo USA", "Visas de Turismo Canadá", "Evaluación de Perfil"],
  },
]
export function ServicesSection() {
  const { t } = useLanguage()


  return (
    <section id="services" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
            Nuestros Servicios
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            {t("services.title")}
            <span className="block text-accent">{t("services.subtitle")}</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">{t("services.description")}</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-secondary rounded-2xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    {t(service.title)}
                  </h3>
                  <p className="text-primary/70 leading-relaxed">{t(service.description)}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-primary/60">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/80 text-lg mb-6">¿No encuentras el servicio que necesitas?</p>
          <div className="inline-block px-6 py-3 bg-accent/10 text-accent rounded-full border border-accent/30">
            Contáctanos para una consulta personalizada
          </div>
        </motion.div>
      </div>
    </section>
  )
}
