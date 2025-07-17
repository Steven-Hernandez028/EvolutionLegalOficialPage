"use client"

import { Footer } from "@/components/footer";
import { NavbarAndTopBar } from "@/components/TopBarAndNavbar";
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
import { useRouter } from "next/navigation";

const services = [
  {
    id: "due-diligence",
    icon: Scale,
    title: "Investigación Jurídica Inmobiliaria (Due Diligence)",
    subtitle: "Su Inversión Segura",
    description: `En la República Dominicana, invertir en bienes raíces sin una debida diligencia exhaustiva es impensable. Este es nuestro servicio estrella y su garantía de una inversión sólida. No importa si es un solar, una finca, una casa, un condominio, un proyecto en planos, o incluso acciones en una compañía o un vehículo, cada transacción significativa merece un escrutinio detallado.
                  Nuestra investigación jurídica inmobiliaria va más allá de lo evidente. Verificamos meticulosamente que el inmueble cuente con todos los permisos aprobados, que el terreno sea apto para la construcción, que no existan objeciones ni que se encuentre en zonas protegidas. Comprobamos que lo que el título describe se corresponda exactamente con la realidad física, y que el inmueble esté libre de deudas con instituciones bancarias, impuestos internos o cualquier otra entidad gubernamental. Además, revisamos cada cláusula del contrato para asegurar que no contenga términos abusivos, protegiendo así sus intereses de principio a fin. Incluso si la constructora es reconocida o el proyecto tiene años, la diligencia debida es indispensable.
`,
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
    description: `Le acompañamos en cada paso de su emocionante viaje hacia la República Dominicana, desde el momento en que surge la idea hasta su completo establecimiento legal. Nuestro servicio de reubicación está diseñado para asegurar una transición suave y sin contratiempos. Le brindamos asesoría y apoyo legal en cada aspecto que pueda necesitar: gestión de seguros (médicos, vehiculares, de vida), tramitación de licencias de conducir, asesoría sobre servicios de telefonía e internet, estudio de las mejores zonas para vivir, escolarización para sus hijos, y una introducción a las leyes básicas que todo extranjero debe conocer para vivir y prosperar en el país. Con Evolution Legal, usted tendrá un respaldo legal constante que le permitirá enfocarse en disfrutar de su nuevo hogar.`,
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
    description: "Para aquellos que anhelan un nuevo comienzo en la serenidad del campo, ofrecemos la venta de terrenos rurales y fincas en la zona norte de la República Dominicana. Este servicio está diseñado especialmente para nuestra comunidad de jubilados y aquellos que buscan un estilo de vida más tranquilo y conectado con la naturaleza. Imagine despertar con el canto de los pájaros, disfrutar de amaneceres y atardeceres pintorescos, y respirar el aroma fresco de la hierba. Le brindamos la oportunidad de desarrollar sus proyectos personales y encontrar vitalidad en un entorno campestre idílico, donde el ritmo de vida invita a la calma y la reconexión.",
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
    description: `<p>Nuestra experiencia en extranjería abarca diversos procesos esenciales para su vida legal en la República Dominicana.</p>
    <br/>
    <p><b>Residencia Dominicana:</b> Gestionamos el permiso de residencia para extranjeros que buscan establecerse legalmente en el país.</p>
    <p><b>Ciudadanía Dominicana: </b> Acompañamos a los residentes que desean obtener la ciudadanía dominicana. </p>
    <p><b>Permiso de Salida de Menores: </b>Tramitamos los permisos necesarios para menores de edad dominicanos que viajan al extranjero.</p>
    `,
    features: [
      "Residencia Dominicana",
      "Ciudadanía Dominicana",
      "Permisos de Salida de Menores",
    ],
    details: "Gestionamos todos los aspectos legales necesarios para su residencia permanente y eventual ciudadanía dominicana."
  },
  {
    id: "consular",
    icon: Shield,
    title: "Derecho Migratorio y Consular",
    subtitle: "Conectando Familias y Oportunidades",
    description: "Sabemos lo importante que es para usted que sus seres queridos puedan visitarle. Ofrecemos un acompañamiento meticuloso para la obtención de <b>Visas de Turismo para Estados Unidos y Canadá</b>. Nuestro proceso inicia con una <b>evaluación de perfil exhaustiva</b> que considera sus vínculos en el país, salud, motivo de viaje, finanzas, situación familiar y bienestar general. Esta evaluación nos permite determinar si cumple con los requisitos mínimos para un visado. Luego, le asistimos en el llenado de formularios, la recopilación de documentos y la preparación para su entrevista consular, brindándole un apoyo íntegro desde el inicio hasta la culminación del proceso. Es importante destacar que, si bien nuestra asesoría es de la más alta calidad, la decisión final sobre la aprobación del visado recae exclusivamente en el cónsul.",
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
    description: `<p>En el ámbito del derecho societario, le brindamos asesoría experta en:</p>
    <br/>
        <p><b>Creación, Modificación y Disolución de Sociedades Comerciales:</b> Le guiamos a través de los procedimientos legales para establecer, adaptar o finalizar su empresa.</p>
    <p><b>Compra y Venta de Acciones: </b>  Realizamos una <b> debida diligencia exhaustiva</b> para asegurar que cualquier inversión o desinversión en acciones de una empresa sea una decisión estratégica y bien fundamentada, verificando activos, pasivos y la salud financiera de la compañía. </p>

.`,
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
    description: `<p>En los momentos personales que requieren asesoría legal, le ofrecemos apoyo en:</p>
     <br/>
        <p><b>Divorcio por Mutuo Consentimiento:</b> Gestionamos el proceso de manera eficiente y cordial.</p>
        <p><b>Contrato de Partición Amigable:</b> Gestionamos el proceso de manera eficiente y cordial.</p>
        <p><b>Reconocimiento y Desconocimiento de Paternidad:</b> Manejamos estos procesos con la sensibilidad y la discreción necesarias.</p>
        <p><b>Matrimonio de Extranjeros en RD:</b> Le asesoramos en la recopilación y formalización de los documentos necesarios de su país de origen para contraer matrimonio legalmente en la República Dominicana. También le ayudamos con la redacción y formalización de acuerdos prenupciales.</p>
        <p><b>Testamentos y Planificación Sucesoral:</b> Entendemos la importancia de dejar sus asuntos en orden. Le asistimos en la elaboración de testamentos y en la planificación sucesoral para asegurar que sus deseos sean respetados y que su patrimonio sea gestionado conforme a su voluntad, brindando tranquilidad para usted y sus seres queridos.</p>
    
    `,
    features: [
      "Divorcio por Mutuo Consentimiento",
      "Contratos de Partición",
      "Reconocimiento de Paternidad",
      "Matrimonio de Extranjeros",
      "Acuerdos Prenupciales",
      "Testamentos y Planificación Sucesoral"
    ],
    details: "Manejamos estos procesos delicados con la sensibilidad, discreción y profesionalismo que su familia merece."
  },
  {
    id: "vehicular-due-diligence",
    icon: FileCheck,
    title: "Debida Diligencia Vehicular",
    subtitle: "Conduciendo sin Preocupaciones",
    description: `Comprar un vehículo en la República Dominicana requiere una verificación cuidadosa para asegurar una inversión inteligente. Realizamos una debida diligencia vehicular exhaustiva:<br/><br/>
    <b>Vehículos Nuevos:</b> Verificamos el historial del vehículo (Carfax si viene de Canadá o EE. UU.) y nos aseguramos de que no existan problemas con el pago de impuestos para la primera matrícula. Protegemos su compra de cualquier engaño o cláusula abusiva.<br/><br/>
    <b>Vehículos Usados:</b> Comprobamos el funcionamiento óptimo del vehículo, confirmamos que esté libre de deudas con impuestos internos, verificamos la matrícula y el "Plan Piloto" de la Policía Nacional para garantizar una transferencia sin dolores de cabeza.`,
    features: [
      "Verificación de Historial (Carfax)",
      "Revisión de Impuestos y Matrícula",
      "Chequeo de Funcionamiento",
      "Validación en Plan Piloto",
      "Protección ante Cláusulas Abusivas",
      "Acompañamiento en Transferencia"
    ],
    details: "Aseguramos que su inversión vehicular esté libre de riesgos legales y financieros, tanto en vehículos nuevos como usados."
  },
  {
    id: "contract-review",
    icon: Gavel,
    title: "Estudio y Revisión de Contratos",
    subtitle: "Su Seguridad Legal",
    description: `Antes de firmar cualquier acuerdo, permítanos ser sus ojos expertos. Analizamos minuciosamente sus contratos, identificando cláusulas abusivas y proponiendo modificaciones para asegurar que el acuerdo sea equitativo y que sus intereses estén plenamente protegidos. Le proporcionamos un informe completo y claro, garantizando que usted entienda cada término antes de comprometerse.`,
    features: [
      "Análisis de Cláusulas Abusivas",
      "Propuestas de Modificación",
      "Informe Legal Detallado",
      "Protección de Intereses",
      "Explicación Clara de Términos",
      "Acompañamiento en Negociación"
    ],
    details: "Garantizamos que cada contrato que firme sea justo, transparente y seguro para usted."
  },
  {
    id: "document-management",
    icon: FileText,
    title: "Gestión de Documentos",
    subtitle: "Eficiencia Sin Fronteras",
    description: `Simplificamos la burocracia para usted. Nuestro servicio de <b>gestión de documentos</b> abarca todo lo relacionado con la formalización de documentos: desde la <b>notarización, legalización y apostilla</b>, hasta la <b>traducción oficial y homologación</b>. Nos aseguramos de que sus documentos cumplan con todas las formalidades exigidas por las instituciones, ya sea para trámites dentro de la República Dominicana o para su uso en el extranjero, o viceversa.`,
    features: [
      "Notarización de Documentos",
      "Legalización y Apostilla",
      "Traducción Oficial",
      "Homologación de Documentos",
      "Gestión ante Instituciones",
      "Asesoría en Requisitos Internacionales"
    ],
    details: "Nos encargamos de que sus documentos sean válidos y aceptados tanto en la República Dominicana como en el extranjero, gestionando cada paso del proceso con eficiencia y precisión."
  },
  {
    id: "legal-training",
    icon: Briefcase,
    title: "Capacitación Jurídica",
    subtitle: "Impulsando la Profesión",
    description: `En Evolution Legal, nuestra misión va más allá de la asesoría a clientes; nos apasiona nutrir el futuro del derecho. Sabemos que los inicios en esta noble profesión pueden ser desafiantes, por eso nos dedicamos a ser un pilar de apoyo para abogados recién graduados y estudiantes de derecho.<br/><br/>
    Ofrecemos un programa robusto de capacitaciones, talleres y charlas diseñados para equiparlos con las herramientas prácticas y el conocimiento esencial que no siempre se adquiere en las aulas. Desde la gestión de un expediente hasta el desarrollo de habilidades cruciales para el ejercicio profesional, nuestro objetivo es que se sientan seguros y preparados para enfrentar los retos del mundo legal. Además, proporcionamos recursos útiles que facilitan su aprendizaje continuo y les permiten construir una carrera exitosa y gratificante. Queremos que cada abogado y estudiante se enamore de su profesión y logre un impacto significativo en el ámbito jurídico.`,
    features: [
      "Capacitaciones Prácticas",
      "Talleres y Charlas Especializadas",
      "Gestión de Expedientes",
      "Desarrollo de Habilidades Profesionales",
      "Recursos para Aprendizaje Continuo",
      "Mentoría para Nuevos Abogados"
    ],
    details: "Apoyamos a abogados y estudiantes de derecho con formación práctica, recursos útiles y mentoría para impulsar su desarrollo profesional."
  }
];

function RenderHtml(text: string) {
  return (
    <div
      className="prose prose-primary max-w-none"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

export default function Services() {

  const router = useRouter();
  const handleServiceRequest = (serviceId: string) => {
    const contactId = services.findIndex(s => s.id === serviceId) + 1;
    router.push(`/contact?contactId=${contactId}&service=${serviceId}`);
  };



  return (
    <div className="min-h-screen bg-secondary">
      <NavbarAndTopBar />

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
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      initial={{ scale: 0.8}}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all duration-200 transform group-hover:scale-100 group-hover:opacity-100 scale-95 opacity-0"
                      onClick={() => handleServiceRequest(service.id)}
                    >
                      Solicitar Servicio
                    </motion.button>
                  </div>
                  <div className="grid lg:grid-cols-1 gap-8 lg:gap-12 items-center">
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

                      <div className="text-primary/70 text-lg leading-relaxed">
                        {RenderHtml(service.description)}
                      </div>

                      <p className="text-primary/60 leading-relaxed">
                        {service.details}
                      </p>
                    </div>

                    {/* Features */}
                    {/* <div className="space-y-4">
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
                    </div> */}
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