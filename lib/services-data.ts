import {
  Briefcase,
  Building,
  Building2,
  FileCheck,
  FileText,
  Gavel,
  Heart,
  HeartHandshake,
  Scale,
  Shield,
  Users,
} from "lucide-react"

export const services = [
  {
    id: "due-diligence",
    icon: Scale,
    title: "Investigación Jurídica Inmobiliaria (Due Diligence)",
    subtitle: "Su Inversión Segura",
    description: `En la República Dominicana, invertir en bienes raíces sin una debida diligencia exhaustiva es impensable. Este es nuestro servicio estrella y su garantía de una inversión sólida. No importa si es un solar, una finca, una casa, un condominio, un proyecto en planos, o incluso acciones en una compañía o un vehículo, cada transacción significativa merece un escrutinio detallado.
                  Nuestra investigación jurídica inmobiliaria va más allá de lo evidente. Verificamos meticulosamente que el inmueble cuente con todos los permisos aprobados, que el terreno sea apto para la construcción, que no existan objeciones ni que se encuentre en zonas protegidas. Comprobamos que lo que el título describe se corresponda exactamente con la realidad física, y que el inmueble esté libre de deudas con instituciones bancarias, impuestos internos o cualquier otra entidad gubernamental. Además, revisamos cada cláusula del contrato para asegurar que no contenga términos abusivos, protegiendo así sus intereses de principio a fin. Incluso si la constructora es reconocida o el proyecto tiene años, la diligencia debida es indispensable.`,
    features: [
      "Verificación de Permisos y Títulos",
      "Análisis de Deudas Pendientes",
      "Revisión de Documentación Legal",
      "Evaluación de Riesgos Jurídicos",
      "Investigación de Gravámenes",
      "Validación de Propietarios",
    ],
    details:
      "No importa si es un solar, una finca, una casa, un condominio, un proyecto en planos, o incluso acciones en una compañía o un vehículo, cada transacción significativa merece un escrutinio detallado.",
    category: "Inmobiliario",
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
      "Orientación Cultural y Legal",
    ],
    details:
      "Nuestro servicio de reubicación está diseñado para asegurar una transición suave y sin contratiempos a su nueva vida en RD.",
    category: "Migración",
  },
  {
    id: "real-estate",
    icon: Building,
    title: "Asesoría y Gestión de Bienes Inmuebles",
    subtitle: "Compra, Venta y Renta",
    description:
      "Facilitamos su experiencia en el mercado inmobiliario y de bienes muebles. Le brindamos asesoría completa para que tome decisiones informadas.",
    features: [
      "Compra y Venta de Propiedades",
      "Contratos de Arrendamiento",
      "Asesoría Legal Especializada",
      "Protección de Intereses",
      "Negociación de Términos",
      "Gestión Documental Completa",
    ],
    details:
      "Nos aseguramos de que cada documento que firme sea comprendido a cabalidad, garantizando su representación legal y la protección de sus intereses.",
    category: "Inmobiliario",
  },
  {
    id: "rural-lands",
    icon: Heart,
    title: "Tierras Vírgenes del Norte",
    subtitle: "Su Retiro Soñado en el Campo",
    description:
      "Para aquellos que anhelan un nuevo comienzo en la serenidad del campo, ofrecemos la venta de terrenos rurales y fincas en la zona norte de la República Dominicana. Este servicio está diseñado especialmente para nuestra comunidad de jubilados y aquellos que buscan un estilo de vida más tranquilo y conectado con la naturaleza. Imagine despertar con el canto de los pájaros, disfrutar de amaneceres y atardeceres pintorescos, y respirar el aroma fresco de la hierba. Le brindamos la oportunidad de desarrollar sus proyectos personales y encontrar vitalidad en un entorno campestre idílico, donde el ritmo de vida invita a la calma y la reconexión.",
    features: [
      "Terrenos Rurales Vírgenes",
      "Fincas Productivas del Norte",
      "Proyectos Personales de Retiro",
      "Inversiones Agrícolas",
      "Desarrollo Sostenible",
      "Asesoría en Permisos Ambientales",
    ],
    details:
      "Espacios únicos donde puede crear su propio refugio personal o desarrollar proyectos de inversión a largo plazo.",
    category: "Inmobiliario",
  },
  {
    id: "immigration",
    icon: FileText,
    title: "Extranjería: Residencia y Ciudadanía",
    subtitle: "Establecimiento Legal en RD",
    description: `Nuestra experiencia en extranjería abarca diversos procesos esenciales para su vida legal en la República Dominicana.

Residencia Dominicana: Gestionamos el permiso de residencia para extranjeros que buscan establecerse legalmente en el país.

Ciudadanía Dominicana: Acompañamos a los residentes que desean obtener la ciudadanía dominicana.

Permiso de Salida de Menores: Tramitamos los permisos necesarios para menores de edad dominicanos que viajan al extranjero.`,
    features: ["Residencia Dominicana", "Ciudadanía Dominicana", "Permisos de Salida de Menores"],
    details:
      "Gestionamos todos los aspectos legales necesarios para su residencia permanente y eventual ciudadanía dominicana.",
    category: "Migración",
  },
  {
    id: "consular",
    icon: Shield,
    title: "Derecho Migratorio y Consular",
    subtitle: "Conectando Familias y Oportunidades",
    description:
      "Sabemos lo importante que es para usted que sus seres queridos puedan visitarle. Ofrecemos un acompañamiento meticuloso para la obtención de Visas de Turismo para Estados Unidos y Canadá. Nuestro proceso inicia con una evaluación de perfil exhaustiva que considera sus vínculos en el país, salud, motivo de viaje, finanzas, situación familiar y bienestar general. Esta evaluación nos permite determinar si cumple con los requisitos mínimos para un visado. Luego, le asistimos en el llenado de formularios, la recopilación de documentos y la preparación para su entrevista consular, brindándole un apoyo íntegro desde el inicio hasta la culminación del proceso. Es importante destacar que, si bien nuestra asesoría es de la más alta calidad, la decisión final sobre la aprobación del visado recae exclusivamente en el cónsul.",
    features: [
      "Visas de Turismo USA",
      "Visas de Turismo Canadá",
      "Evaluación de Perfil Migratorio",
      "Preparación de Documentos",
      "Entrenamiento para Entrevistas",
      "Seguimiento de Casos",
    ],
    details: "Conectamos familias y creamos oportunidades a través de un proceso de visa exitoso y bien estructurado.",
    category: "Migración",
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Derecho Societario",
    subtitle: "Fundamentando su Negocio",
    description: `En el ámbito del derecho societario, le brindamos asesoría experta en:

Creación, Modificación y Disolución de Sociedades Comerciales: Le guiamos a través de los procedimientos legales para establecer, adaptar o finalizar su empresa.

Compra y Venta de Acciones: Realizamos una debida diligencia exhaustiva para asegurar que cualquier inversión o desinversión en acciones de una empresa sea una decisión estratégica y bien fundamentada, verificando activos, pasivos y la salud financiera de la compañía.`,
    features: [
      "Creación de Sociedades",
      "Modificación Societaria",
      "Disolución de Empresas",
      "Compra y Venta de Acciones",
      "Due Diligence Empresarial",
      "Reestructuración Corporativa",
    ],
    details:
      "Le guiamos a través de todos los procedimientos legales para establecer, adaptar o finalizar su empresa con total seguridad jurídica.",
    category: "Corporativo",
  },
  {
    id: "family-law",
    icon: HeartHandshake,
    title: "Derecho de Familia",
    subtitle: "Protegiendo lo que Más Importa",
    description: `En los momentos personales que requieren asesoría legal, le ofrecemos apoyo en:

Divorcio por Mutuo Consentimiento: Gestionamos el proceso de manera eficiente y cordial.

Contrato de Partición Amigable: Gestionamos el proceso de manera eficiente y cordial.

Reconocimiento y Desconocimiento de Paternidad: Manejamos estos procesos con la sensibilidad y la discreción necesarias.

Matrimonio de Extranjeros en RD: Le asesoramos en la recopilación y formalización de los documentos necesarios de su país de origen para contraer matrimonio legalmente en la República Dominicana. También le ayudamos con la redacción y formalización de acuerdos prenupciales.

Testamentos y Planificación Sucesoral: Entendemos la importancia de dejar sus asuntos en orden. Le asistimos en la elaboración de testamentos y en la planificación sucesoral para asegurar que sus deseos sean respetados y que su patrimonio sea gestionado conforme a su voluntad, brindando tranquilidad para usted y sus seres queridos.`,
    features: [
      "Divorcio por Mutuo Consentimiento",
      "Contratos de Partición",
      "Reconocimiento de Paternidad",
      "Matrimonio de Extranjeros",
      "Acuerdos Prenupciales",
      "Testamentos y Planificación Sucesoral",
    ],
    details:
      "Manejamos estos procesos delicados con la sensibilidad, discreción y profesionalismo que su familia merece.",
    category: "Familiar",
  },
  {
    id: "vehicular-due-diligence",
    icon: FileCheck,
    title: "Debida Diligencia Vehicular",
    subtitle: "Conduciendo sin Preocupaciones",
    description: `Comprar un vehículo en la República Dominicana requiere una verificación cuidadosa para asegurar una inversión inteligente. Realizamos una debida diligencia vehicular exhaustiva:

Vehículos Nuevos: Verificamos el historial del vehículo (Carfax si viene de Canadá o EE. UU.) y nos aseguramos de que no existan problemas con el pago de impuestos para la primera matrícula. Protegemos su compra de cualquier engaño o cláusula abusiva.

Vehículos Usados: Comprobamos el funcionamiento óptimo del vehículo, confirmamos que esté libre de deudas con impuestos internos, verificamos la matrícula y el "Plan Piloto" de la Policía Nacional para garantizar una transferencia sin dolores de cabeza.`,
    features: [
      "Verificación de Historial (Carfax)",
      "Revisión de Impuestos y Matrícula",
      "Chequeo de Funcionamiento",
      "Validación en Plan Piloto",
      "Protección ante Cláusulas Abusivas",
      "Acompañamiento en Transferencia",
    ],
    details:
      "Aseguramos que su inversión vehicular esté libre de riesgos legales y financieros, tanto en vehículos nuevos como usados.",
    category: "Especializado",
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
      "Acompañamiento en Negociación",
    ],
    details: "Garantizamos que cada contrato que firme sea justo, transparente y seguro para usted.",
    category: "Especializado",
  },
  {
    id: "document-management",
    icon: FileText,
    title: "Gestión de Documentos",
    subtitle: "Eficiencia Sin Fronteras",
    description: `Simplificamos la burocracia para usted. Nuestro servicio de gestión de documentos abarca todo lo relacionado con la formalización de documentos: desde la notarización, legalización y apostilla, hasta la traducción oficial y homologación. Nos aseguramos de que sus documentos cumplan con todas las formalidades exigidas por las instituciones, ya sea para trámites dentro de la República Dominicana o para su uso en el extranjero, o viceversa.`,
    features: [
      "Notarización de Documentos",
      "Legalización y Apostilla",
      "Traducción Oficial",
      "Homologación de Documentos",
      "Gestión ante Instituciones",
      "Asesoría en Requisitos Internacionales",
    ],
    details:
      "Nos encargamos de que sus documentos sean válidos y aceptados tanto en la República Dominicana como en el extranjero, gestionando cada paso del proceso con eficiencia y precisión.",
    category: "Especializado",
  },
  {
    id: "legal-training",
    icon: Briefcase,
    title: "Capacitación Jurídica",
    subtitle: "Impulsando la Profesión",
    description: `En Evolution Legal, nuestra misión va más allá de la asesoría a clientes; nos apasiona nutrir el futuro del derecho. Sabemos que los inicios en esta noble profesión pueden ser desafiantes, por eso nos dedicamos a ser un pilar de apoyo para abogados recién graduados y estudiantes de derecho.

Ofrecemos un programa robusto de capacitaciones, talleres y charlas diseñados para equiparlos con las herramientas prácticas y el conocimiento esencial que no siempre se adquiere en las aulas. Desde la gestión de un expediente hasta el desarrollo de habilidades cruciales para el ejercicio profesional, nuestro objetivo es que se sientan seguros y preparados para enfrentar los retos del mundo legal. Además, proporcionamos recursos útiles que facilitan su aprendizaje continuo y les permiten construir una carrera exitosa y gratificante. Queremos que cada abogado y estudiante se enamore de su profesión y logre un impacto significativo en el ámbito jurídico.`,
    features: [
      "Capacitaciones Prácticas",
      "Talleres y Charlas Especializadas",
      "Gestión de Expedientes",
      "Desarrollo de Habilidades Profesionales",
      "Recursos para Aprendizaje Continuo",
      "Mentoría para Nuevos Abogados",
    ],
    details:
      "Apoyamos a abogados y estudiantes de derecho con formación práctica, recursos útiles y mentoría para impulsar su desarrollo profesional.",
    category: "Educativo",
  },
]

export const categories = [
  "Todos",
  "Inmobiliario",
  "Migración",
  "Corporativo",
  "Familiar",
  "Especializado",
  "Educativo",
]
