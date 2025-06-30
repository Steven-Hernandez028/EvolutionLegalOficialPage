"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Scale, Shield, FileText, Users, Building, Heart, HeartHandshake, FileCheck, Briefcase, Building2, Gavel } from "lucide-react"
const services = [
  {
    id: "due-diligence",
    icon: Scale,
    title: "Investigación Jurídica Inmobiliaria",
    subtitle: "Su Inversión Segura",
    description:
      "Verificamos títulos, permisos, ubicación, deudas y cláusulas contractuales para asegurar que su inversión inmobiliaria sea sólida y libre de riesgos.",
    features: [
      "Verificación de Permisos y Títulos",
      "Evaluación de Riesgos Jurídicos",
      "Revisión de Documentación Legal",
    ],
  },
  {
    id: "relocation",
    icon: Users,
    title: "Reubicación Integral para Extranjeros",
    subtitle: "Su Nuevo Comienzo en RD",
    description:
      "Le asistimos en cada aspecto de su transición a RD: seguros, licencias, vivienda, educación, servicios y legalidad. Una reubicación sin contratiempos.",
    features: [
      "Gestión de Seguros de Salud",
      "Licencias de Conducir",
      "Asesoría de Zonificación",
    ],
  },
  {
    id: "real-estate",
    icon: Building,
    title: "Asesoría y Gestión de Bienes Inmuebles",
    subtitle: "Compra, Venta y Renta",
    description:
      "Asesoría legal completa en transacciones inmobiliarias para asegurar decisiones informadas y proteger sus intereses en todo momento.",
    features: [
      "Compra y Venta de Propiedades",
      "Contratos de Arrendamiento",
      "Protección de Intereses",
    ],
  },
  {
    id: "rural-lands",
    icon: Heart,
    title: "Tierras Vírgenes del Norte",
    subtitle: "Su Retiro Soñado en el Campo",
    description:
      "Ofrecemos terrenos y fincas en el norte del país, ideales para proyectos personales, retiro o inversión sostenible en contacto con la naturaleza.",
    features: [
      "Terrenos Rurales Vírgenes",
      "Fincas Productivas del Norte",
      "Proyectos de Retiro",
    ],
  },
  {
    id: "immigration",
    icon: FileText,
    title: "Extranjería: Residencia y Ciudadanía",
    subtitle: "Establecimiento Legal en RD",
    description:
      "Asistencia legal para obtener residencia dominicana, ciudadanía y permisos especiales, facilitando su integración formal en el país.",
    features: [
      "Residencia Dominicana",
      "Ciudadanía Dominicana",
      "Permisos de Salida de Menores",
    ],
  },
  {
    id: "consular",
    icon: Shield,
    title: "Derecho Migratorio y Consular",
    subtitle: "Conectando Familias y Oportunidades",
    description:
      "Preparación integral para solicitar visas de turismo a EE. UU. y Canadá, incluyendo evaluación de perfil, documentación y entrevistas.",
    features: [
      "Visas de Turismo USA",
      "Visas de Turismo Canadá",
      "Evaluación de Perfil",
    ],
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Derecho Societario",
    subtitle: "Fundamentando su Negocio",
    description:
      "Le asesoramos en la creación, modificación y disolución de empresas, así como en compra de acciones y debida diligencia corporativa.",
    features: [
      "Creación de Sociedades",
      "Compra y Venta de Acciones",
      "Due Diligence Empresarial",
    ],
  },
  {
    id: "family-law",
    icon: HeartHandshake,
    title: "Derecho de Familia",
    subtitle: "Protegiendo lo que Más Importa",
    description:
      "Le apoyamos legalmente en procesos familiares delicados como divorcios, paternidad, matrimonios y planificación sucesoral.",
    features: [
      "Divorcio por Mutuo Consentimiento",
      "Matrimonio de Extranjeros",
      "Testamentos y Planificación Sucesoral",
    ],
  },
  {
    id: "vehicular-due-diligence",
    icon: FileCheck,
    title: "Debida Diligencia Vehicular",
    subtitle: "Conduciendo sin Preocupaciones",
    description:
      "Verificamos historial, impuestos, matrícula y estado legal de vehículos nuevos y usados, asegurando una compra sin sorpresas.",
    features: [
      "Verificación de Historial (Carfax)",
      "Revisión de Impuestos y Matrícula",
      "Validación en Plan Piloto",
    ],
  },
  {
    id: "contract-review",
    icon: Gavel,
    title: "Estudio y Revisión de Contratos",
    subtitle: "Su Seguridad Legal",
    description:
      "Analizamos sus contratos, detectamos cláusulas abusivas y proponemos ajustes para proteger sus intereses antes de firmar.",
    features: [
      "Análisis de Cláusulas Abusivas",
      "Informe Legal Detallado",
      "Acompañamiento en Negociación",
    ],
  },
  {
    id: "document-management",
    icon: FileText,
    title: "Gestión de Documentos",
    subtitle: "Eficiencia Sin Fronteras",
    description:
      "Nos encargamos de todo: notarización, legalización, apostilla, traducción y homologación de documentos para uso local o internacional.",
    features: [
      "Legalización y Apostilla",
      "Traducción Oficial",
      "Homologación de Documentos",
    ],
  },
  {
    id: "legal-training",
    icon: Briefcase,
    title: "Capacitación Jurídica",
    subtitle: "Impulsando la Profesión",
    description:
      "Formamos a nuevos abogados y estudiantes con talleres, recursos prácticos y mentoría para un inicio sólido en la carrera jurídica.",
    features: [
      "Talleres y Charlas Especializadas",
      "Desarrollo de Habilidades Profesionales",
      "Mentoría para Nuevos Abogados",
    ],
  },
];

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
