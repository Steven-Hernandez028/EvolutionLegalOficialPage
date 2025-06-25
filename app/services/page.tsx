"use client"

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { 
  Scale, 
  Shield, 
  FileText, 
  Users, 
  Building, 
  Heart,
  MapPin,
  UserCheck,
  Briefcase,
  Home,
  Mountain,
  Plane,
  Building2,
  HeartHandshake,
  FileCheck,
  Gavel
} from "lucide-react";

const services = [
  {
    id: "due-diligence",
    icon: Scale,
    title: "Investigación Jurídica Inmobiliaria (Due Diligence)",
    subtitle: "Su Inversión Segura",
    description: "En la República Dominicana, invertir en bienes raíces sin una debida diligencia exhaustiva es impensable. Este es nuestro servicio estrella y su garantía de una inversión sólida.",
    features: [
      "Verificación de Permisos y Títulos",
      "Análisis de Deudas Pendientes",
      "Revisión de Documentación Legal",
      "Evaluación de Riesgos Jurídicos",
      "Investigación de Gravámenes",
      "Validación de Propietarios"
    ],
    details: "No importa si es un solar, una finca, una casa, un condominio, un proyecto en planos, o incluso acciones en una compañía o un vehículo, cada transacción significativa merece un escrutinio detallado."
  },
  {
    id: "relocation",
    icon: Users,
    title: "Reubicación Integral para Extranjeros",
    subtitle: "Su Nuevo Comienzo en RD",
    description: "Le acompañamos en cada paso de su emocionante viaje hacia la República Dominicana, desde el momento en que surge la idea hasta su completo establecimiento legal.",
    features: [
      "Gestión de Seguros de Salud",
      "Licencias de Conducir",
      "Apertura de Cuentas Bancarias",
      "Registro de Vehículos",
      "Asesoría de Zonificación",
      "Orientación Cultural y Legal"
    ],
    details: "Nuestro servicio de reubicación está diseñado para asegurar una transición suave y sin contratiempos a su nueva vida en RD."
  },
  {
    id: "real-estate",
    icon: Building,
    title: "Asesoría y Gestión de Bienes Inmuebles",
    subtitle: "Compra, Venta y Renta",
    description: "Facilitamos su experiencia en el mercado inmobiliario y de bienes muebles. Le brindamos asesoría completa para que tome decisiones informadas.",
    features: [
      "Compra y Venta de Propiedades",
      "Contratos de Arrendamiento",
      "Asesoría Legal Especializada",
      "Protección de Intereses",
      "Negociación de Términos",
      "Gestión Documental Completa"
    ],
    details: "Nos aseguramos de que cada documento que firme sea comprendido a cabalidad, garantizando su representación legal y la protección de sus intereses."
  },
  {
    id: "rural-lands",
    icon: Heart,
    title: "Tierras Vírgenes del Norte",
    subtitle: "Su Retiro Soñado en el Campo",
    description: "Para aquellos que anhelan un nuevo comienzo en la serenidad del campo, ofrecemos la venta de terrenos rurales y fincas en la zona norte de la República Dominicana.",
    features: [
      "Terrenos Rurales Vírgenes",
      "Fincas Productivas del Norte",
      "Proyectos Personales de Retiro",
      "Inversiones Agrícolas",
      "Desarrollo Sostenible",
      "Asesoría en Permisos Ambientales"
    ],
    details: "Espacios únicos donde puede crear su propio refugio personal o desarrollar proyectos de inversión a largo plazo."
  },
  {
    id: "immigration",
    icon: FileText,
    title: "Extranjería: Residencia y Ciudadanía",
    subtitle: "Establecimiento Legal en RD",
    description: "Nuestra experiencia en extranjería abarca diversos procesos esenciales para su vida legal en la República Dominicana.",
    features: [
      "Residencia Dominicana",
      "Ciudadanía Dominicana",
      "Permisos de Salida de Menores",
      "Renovación de Documentos",
      "Asesoría Migratoria",
      "Trámites Consulares"
    ],
    details: "Gestionamos todos los aspectos legales necesarios para su residencia permanente y eventual ciudadanía dominicana."
  },
  {
    id: "consular",
    icon: Shield,
    title: "Derecho Migratorio y Consular",
    subtitle: "Conectando Familias y Oportunidades",
    description: "Sabemos lo importante que es para usted que sus seres queridos puedan visitarle. Ofrecemos acompañamiento meticuloso para la obtención de visas.",
    features: [
      "Visas de Turismo USA",
      "Visas de Turismo Canadá",
      "Evaluación de Perfil Migratorio",
      "Preparación de Documentos",
      "Entrenamiento para Entrevistas",
      "Seguimiento de Casos"
    ],
    details: "Conectamos familias y creamos oportunidades a través de un proceso de visa exitoso y bien estructurado."
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Derecho Societario",
    subtitle: "Fundamentando su Negocio",
    description: "En el ámbito del derecho societario, le brindamos asesoría experta para establecer y gestionar su empresa de manera efectiva.",
    features: [
      "Creación de Sociedades",
      "Modificación Societaria",
      "Disolución de Empresas",
      "Compra y Venta de Acciones",
      "Due Diligence Empresarial",
      "Reestructuración Corporativa"
    ],
    details: "Le guiamos a través de todos los procedimientos legales para establecer, adaptar o finalizar su empresa con total seguridad jurídica."
  },
  {
    id: "family-law",
    icon: HeartHandshake,
    title: "Derecho de Familia",
    subtitle: "Protegiendo lo que Más Importa",
    description: "En los momentos personales que requieren asesoría legal, le ofrecemos apoyo sensible y profesional.",
    features: [
      "Divorcio por Mutuo Consentimiento",
      "Contratos de Partición",
      "Reconocimiento de Paternidad",
      "Matrimonio de Extranjeros",
      "Acuerdos Prenupciales",
      "Testamentos y Planificación Sucesoral"
    ],
    details: "Manejamos estos procesos delicados con la sensibilidad, discreción y profesionalismo que su familia merece."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              Servicios Especializados
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Nuestros Servicios
              <span className="block text-accent">Su Tranquilidad, Nuestra Prioridad</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              En Evolution Legal, nuestra dedicación es brindarle soluciones legales integrales y personalizadas 
              que se adapten a sus necesidades específicas, tanto si es un inversionista internacional como si 
              busca asesoría experta en su vida diaria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <service.icon className="h-8 w-8 text-accent" />
                        </div>
                        <div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-primary group-hover:text-accent transition-colors">
                            {service.title}
                          </h2>
                          <p className="text-accent font-semibold">{service.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-primary/70 text-lg leading-relaxed">
                        {service.description}
                      </p>
                      
                      <p className="text-primary/60 leading-relaxed">
                        {service.details}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary mb-4">Servicios Incluidos:</h3>
                      <div className="grid gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 p-3 bg-accent/5 rounded-xl hover:bg-accent/10 transition-colors"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                            <span className="text-primary/80 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              ¿No encuentras el servicio que necesitas?
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Cada caso es único y merece una atención personalizada. Contáctanos para una consulta 
              especializada donde evaluaremos tu situación específica y te brindaremos la mejor solución legal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors"
              >
                Consulta Personalizada
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-accent border-2 border-accent rounded-full hover:bg-accent hover:text-white transition-all"
              >
                Ver Todos los Servicios
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}