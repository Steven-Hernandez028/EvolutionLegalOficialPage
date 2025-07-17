"use client"

import { motion } from "framer-motion"
import { Scale, Shield, FileText, Users, Building, Heart, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Scale,
    title: "services.dueDiligence.title",
    description: "services.dueDiligence.description",
    features: ["Verificación de Permisos", "Análisis de Títulos", "Revisión de Deudas"],
    color: "from-blue-500 to-blue-600",
    href: "/exclusive-client-view/services#due-diligence",
  },
  {
    icon: Users,
    title: "services.relocation.title",
    description: "services.relocation.description",
    features: ["Gestión de Seguros", "Licencias de Conducir", "Asesoría Integral"],
    color: "from-green-500 to-green-600",
    href: "/exclusive-client-view/services#relocation",
  },
  {
    icon: Building,
    title: "services.realEstate.title",
    description: "services.realEstate.description",
    features: ["Compra y Venta", "Asesoría Legal", "Protección de Intereses"],
    color: "from-purple-500 to-purple-600",
    href: "/exclusive-client-view/services#real-estate",
  },
  {
    icon: Heart,
    title: "services.ruralLands.title",
    description: "services.ruralLands.description",
    features: ["Terrenos Rurales", "Fincas del Norte", "Proyectos Personales"],
    color: "from-pink-500 to-pink-600",
    href: "/exclusive-client-view/services#family",
  },
  {
    icon: FileText,
    title: "services.immigration.title",
    description: "services.immigration.description",
    features: ["Residencia", "Ciudadanía", "Permisos de Menores"],
    color: "from-amber-500 to-amber-600",
    href: "/exclusive-client-view/services#immigration",
  },
  {
    icon: Shield,
    title: "services.consular.title",
    description: "services.consular.description",
    features: ["Visas USA", "Visas Canadá", "Evaluación de Perfil"],
    color: "from-red-500 to-red-600",
    href: "/exclusive-client-view/services#corporate",
  },
]

export function ServicesSection() {
  const t = useTranslations("Index")

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
              <Link href={service.href}>
                <div className="h-full bg-secondary rounded-2xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors relative z-10">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4 relative z-10">
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

                    {/* CTA */}
                    <div className="pt-4">
                      <div className="flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform">
                        <span>Ver detalles</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </Link>
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
          <Button asChild className="bg-accent hover:bg-accent/90 text-primary font-semibold">
            <Link href="/exclusive-client-view/services">
              Ver Todos los Servicios
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
