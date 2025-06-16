export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  tags: string[]
  image: string
  featured: boolean
  readTime: number
}

export interface BlogComment {
  id: string
  postId: string
  author: string
  email: string
  content: string
  date: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Nuevas Reformas en el Código Civil Colombiano 2024",
    excerpt:
      "Análisis detallado de los cambios más importantes en la legislación civil que afectan a contratos, propiedad y responsabilidad civil.",
    content: `
      <h2>Introducción a las Reformas</h2>
      <p>El año 2024 ha traído consigo importantes modificaciones al Código Civil colombiano que todo ciudadano debe conocer. Estas reformas buscan modernizar el marco legal y adaptarlo a las realidades contemporáneas.</p>
      
      <h2>Principales Cambios</h2>
      <h3>1. Contratos Digitales</h3>
      <p>Se reconoce oficialmente la validez de los contratos firmados digitalmente, estableciendo nuevos requisitos para su validez y ejecución.</p>
      
      <h3>2. Propiedad Intelectual</h3>
      <p>Nuevas disposiciones sobre derechos de autor en el entorno digital, incluyendo protecciones para contenido en redes sociales y plataformas digitales.</p>
      
      <h3>3. Responsabilidad Civil</h3>
      <p>Actualizaciones en los criterios de responsabilidad civil, especialmente en casos relacionados con tecnología y daños ambientales.</p>
      
      <h2>Impacto en la Práctica Legal</h2>
      <p>Estas reformas requieren que tanto abogados como ciudadanos se actualicen sobre los nuevos procedimientos y requisitos legales.</p>
      
      <h2>Recomendaciones</h2>
      <ul>
        <li>Revisar contratos existentes para asegurar cumplimiento</li>
        <li>Actualizar políticas de privacidad y términos de servicio</li>
        <li>Consultar con un abogado especializado para casos específicos</li>
      </ul>
    `,
    author: "Dra. María González",
    date: "2024-01-15",
    category: "Derecho Civil",
    tags: ["Código Civil", "Reformas", "Contratos", "Legislación"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    readTime: 8,
  },
  {
    id: "2",
    title: "Derechos Laborales: Guía Completa para Trabajadores",
    excerpt:
      "Todo lo que necesitas saber sobre tus derechos como trabajador en Colombia, incluyendo despidos, acoso laboral y prestaciones sociales.",
    content: `
      <h2>Derechos Fundamentales del Trabajador</h2>
      <p>En Colombia, los trabajadores gozan de una serie de derechos fundamentales protegidos por la Constitución y el Código Sustantivo del Trabajo.</p>
      
      <h2>Tipos de Contratos Laborales</h2>
      <h3>Contrato a Término Fijo</h3>
      <p>Características, duración y condiciones de renovación.</p>
      
      <h3>Contrato a Término Indefinido</h3>
      <p>Ventajas y protecciones especiales para el trabajador.</p>
      
      <h2>Prestaciones Sociales</h2>
      <ul>
        <li>Prima de servicios</li>
        <li>Cesantías</li>
        <li>Vacaciones</li>
        <li>Intereses sobre cesantías</li>
      </ul>
      
      <h2>¿Qué hacer en caso de despido injustificado?</h2>
      <p>Pasos a seguir y derechos del trabajador ante un despido sin justa causa.</p>
    `,
    author: "Dra. María González",
    date: "2024-01-10",
    category: "Derecho Laboral",
    tags: ["Derechos Laborales", "Contratos", "Despido", "Prestaciones"],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    readTime: 12,
  },
  {
    id: "3",
    title: "Mediación Familiar: Alternativa Pacífica para Resolver Conflictos",
    excerpt:
      "La mediación como herramienta efectiva para resolver disputas familiares sin llegar a juicio, beneficios y proceso paso a paso.",
    content: `
      <h2>¿Qué es la Mediación Familiar?</h2>
      <p>La mediación familiar es un proceso voluntario donde un mediador neutral ayuda a las partes a encontrar soluciones mutuamente aceptables.</p>
      
      <h2>Ventajas de la Mediación</h2>
      <ul>
        <li>Menor costo que un proceso judicial</li>
        <li>Mayor rapidez en la resolución</li>
        <li>Preserva las relaciones familiares</li>
        <li>Confidencialidad del proceso</li>
      </ul>
      
      <h2>Casos Apropiados para Mediación</h2>
      <h3>Divorcios</h3>
      <p>Separación de bienes, custodia de menores, alimentos.</p>
      
      <h3>Herencias</h3>
      <p>Distribución de bienes, conflictos entre herederos.</p>
      
      <h2>El Proceso de Mediación</h2>
      <p>Descripción detallada de cada etapa del proceso de mediación familiar.</p>
    `,
    author: "Dra. María González",
    date: "2024-01-05",
    category: "Derecho Familiar",
    tags: ["Mediación", "Familia", "Conflictos", "Divorcio"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    readTime: 6,
  },
  {
    id: "4",
    title: "Constitución de Empresas: Pasos Legales Esenciales",
    excerpt:
      "Guía completa para constituir una empresa en Colombia, desde la elección del tipo societario hasta los trámites ante la Cámara de Comercio.",
    content: `
      <h2>Tipos de Sociedades en Colombia</h2>
      <p>Análisis de las diferentes formas societarias disponibles y sus características principales.</p>
      
      <h2>Sociedad por Acciones Simplificada (SAS)</h2>
      <p>La forma societaria más popular por su flexibilidad y beneficios.</p>
      
      <h2>Proceso de Constitución</h2>
      <ol>
        <li>Verificación de nombre</li>
        <li>Elaboración de estatutos</li>
        <li>Registro ante Cámara de Comercio</li>
        <li>Obtención del RUT</li>
        <li>Apertura de cuenta bancaria</li>
      </ol>
      
      <h2>Consideraciones Fiscales</h2>
      <p>Obligaciones tributarias desde el momento de la constitución.</p>
    `,
    author: "Dra. María González",
    date: "2023-12-28",
    category: "Derecho Corporativo",
    tags: ["Empresas", "SAS", "Constitución", "Trámites"],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    readTime: 10,
  },
  {
    id: "5",
    title: "Defensa Penal: Tus Derechos Durante un Proceso Judicial",
    excerpt:
      "Conoce tus derechos fundamentales durante un proceso penal, desde la captura hasta el juicio, y la importancia de contar con representación legal.",
    content: `
      <h2>Derechos del Procesado</h2>
      <p>Todo ciudadano tiene derechos fundamentales que deben ser respetados durante un proceso penal.</p>
      
      <h2>Derecho a la Defensa</h2>
      <p>Importancia de contar con representación legal desde el primer momento.</p>
      
      <h2>Etapas del Proceso Penal</h2>
      <h3>Investigación</h3>
      <p>Derechos durante la etapa de investigación preliminar.</p>
      
      <h3>Juicio</h3>
      <p>Garantías procesales durante el juicio oral.</p>
      
      <h2>Principios Fundamentales</h2>
      <ul>
        <li>Presunción de inocencia</li>
        <li>Derecho al debido proceso</li>
        <li>Derecho a guardar silencio</li>
        <li>Derecho a la defensa técnica</li>
      </ul>
    `,
    author: "Dra. María González",
    date: "2023-12-20",
    category: "Derecho Penal",
    tags: ["Defensa Penal", "Derechos", "Proceso Judicial", "Garantías"],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    readTime: 9,
  },
  {
    id: "6",
    title: "Protección de Datos Personales: Nueva Ley de Privacidad",
    excerpt:
      "Análisis de la nueva legislación sobre protección de datos personales y su impacto en empresas y ciudadanos.",
    content: `
      <h2>Marco Legal de Protección de Datos</h2>
      <p>La Ley 1581 de 2012 y sus desarrollos reglamentarios establecen el marco para la protección de datos personales en Colombia.</p>
      
      <h2>Principios de Protección de Datos</h2>
      <ul>
        <li>Legalidad</li>
        <li>Finalidad</li>
        <li>Libertad</li>
        <li>Veracidad</li>
        <li>Transparencia</li>
        <li>Acceso y circulación restringida</li>
        <li>Seguridad</li>
        <li>Confidencialidad</li>
      </ul>
      
      <h2>Obligaciones para Empresas</h2>
      <p>Requisitos que deben cumplir las empresas que manejan datos personales.</p>
      
      <h2>Derechos de los Titulares</h2>
      <p>Derechos que tienen las personas sobre sus datos personales.</p>
    `,
    author: "Dra. María González",
    date: "2023-12-15",
    category: "Derecho Digital",
    tags: ["Datos Personales", "Privacidad", "HABEAS DATA", "Empresas"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    readTime: 7,
  },
]

export const blogComments: BlogComment[] = [
  {
    id: "1",
    postId: "1",
    author: "Carlos Mendoza",
    email: "carlos@email.com",
    content:
      "Excelente artículo, muy claro y útil para entender las nuevas reformas. ¿Cuándo entran en vigencia estos cambios?",
    date: "2024-01-16",
  },
  {
    id: "2",
    postId: "1",
    author: "Ana Rodríguez",
    email: "ana@email.com",
    content:
      "Gracias por la información. Me gustaría saber más sobre los contratos digitales y su implementación práctica.",
    date: "2024-01-17",
  },
  {
    id: "3",
    postId: "2",
    author: "Miguel Torres",
    email: "miguel@email.com",
    content: "Muy útil la información sobre derechos laborales. ¿Podrían hacer un artículo sobre teletrabajo?",
    date: "2024-01-12",
  },
]

export const blogCategories = [
  "Derecho Civil",
  "Derecho Penal",
  "Derecho Laboral",
  "Derecho Familiar",
  "Derecho Corporativo",
  "Derecho Digital",
]

export const blogTags = [
  "Código Civil",
  "Reformas",
  "Contratos",
  "Legislación",
  "Derechos Laborales",
  "Despido",
  "Prestaciones",
  "Mediación",
  "Familia",
  "Conflictos",
  "Divorcio",
  "Empresas",
  "SAS",
  "Constitución",
  "Trámites",
  "Defensa Penal",
  "Derechos",
  "Proceso Judicial",
  "Garantías",
  "Datos Personales",
  "Privacidad",
  "HABEAS DATA",
]
