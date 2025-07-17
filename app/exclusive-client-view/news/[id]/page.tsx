"use client"

import { motion, Transition } from "framer-motion"
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

const newsData = [
  {
    id: "1",
    title: "Nuevas Regulaciones de Inversión Extranjera en República Dominicana",
    excerpt:
      "El gobierno dominicano ha anunciado importantes cambios en las regulaciones para inversionistas extranjeros que buscan establecerse en el país.",
    content: `
      <h2>Cambios Significativos en la Legislación</h2>
      <p>El Ministerio de Industria, Comercio y Mipymes ha publicado nuevas regulaciones que afectarán directamente a los inversionistas extranjeros interesados en establecer operaciones en República Dominicana.</p>
      
      <h3>Principales Modificaciones</h3>
      <ul>
        <li><strong>Simplificación de Procesos:</strong> Reducción del tiempo de aprobación de 45 a 30 días hábiles</li>
        <li><strong>Nuevos Incentivos Fiscales:</strong> Exenciones tributarias para sectores prioritarios</li>
        <li><strong>Requisitos de Capital:</strong> Ajustes en los montos mínimos de inversión</li>
        <li><strong>Documentación Digital:</strong> Implementación de plataformas digitales para trámites</li>
      </ul>
      
      <h3>Sectores Beneficiados</h3>
      <p>Las nuevas regulaciones priorizan inversiones en:</p>
      <ul>
        <li>Tecnología e innovación</li>
        <li>Energías renovables</li>
        <li>Turismo sostenible</li>
        <li>Manufactura avanzada</li>
        <li>Servicios financieros</li>
      </ul>
      
      <h3>Implicaciones para Inversionistas</h3>
      <p>Estos cambios representan una oportunidad única para inversionistas que buscan establecerse en el mercado dominicano. La simplificación de procesos y los nuevos incentivos hacen más atractiva la inversión extranjera.</p>
      
      <h3>Próximos Pasos</h3>
      <p>Las regulaciones entrarán en vigor el 1 de marzo de 2024. Se recomienda a los inversionistas interesados consultar con asesores legales especializados para aprovechar al máximo estas oportunidades.</p>
    `,
    date: "2024-01-15",
    category: "Regulaciones",
    readTime: "5 min",
    image: "/placeholder.svg?height=400&width=800",
    author: "Evolution Legal Advantage",
    location: "Santo Domingo, RD",
  },
  {
    id: "2",
    title: "Seminario: Aspectos Legales de la Compra de Propiedades",
    excerpt: "Evolution Legal Advantage presenta un seminario exclusivo sobre aspectos legales inmobiliarios.",
    content: `
      <h2>Evento Especializado en Derecho Inmobiliario</h2>
      <p>Evolution Legal Advantage se complace en anunciar nuestro próximo seminario especializado en los aspectos legales más importantes de la compra de propiedades en República Dominicana.</p>
      
      <h3>Agenda del Seminario</h3>
      <ul>
        <li><strong>9:00 AM - 9:30 AM:</strong> Registro y bienvenida</li>
        <li><strong>9:30 AM - 10:30 AM:</strong> Due Diligence Inmobiliaria: Fundamentos</li>
        <li><strong>10:45 AM - 11:45 AM:</strong> Aspectos Legales de la Titulación</li>
        <li><strong>12:00 PM - 1:00 PM:</strong> Financiamiento y Aspectos Fiscales</li>
        <li><strong>2:00 PM - 3:00 PM:</strong> Casos Prácticos y Experiencias</li>
        <li><strong>3:15 PM - 4:00 PM:</strong> Sesión de Preguntas y Respuestas</li>
      </ul>
      
      <h3>Dirigido a:</h3>
      <ul>
        <li>Inversionistas extranjeros</li>
        <li>Agentes inmobiliarios</li>
        <li>Desarrolladores</li>
        <li>Profesionales del derecho</li>
        <li>Personas interesadas en adquirir propiedades</li>
      </ul>
      
      <h3>Ponentes Expertos</h3>
      <p>El seminario será dirigido por la Dra. María González, fundadora de Evolution Legal Advantage, junto con especialistas invitados en derecho inmobiliario y fiscal.</p>
      
      <h3>Modalidad y Registro</h3>
      <p>El evento se realizará de forma híbrida: presencial en nuestras oficinas de Puerto Plata y virtual para participantes internacionales. El registro incluye material digital y certificado de participación.</p>
    `,
    date: "2024-01-10",
    category: "Eventos",
    readTime: "3 min",
    image: "/placeholder.svg?height=400&width=800",
    author: "Evolution Legal Advantage",
    location: "Puerto Plata, RD",
  },
]

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  },
}

const pageTransition : Transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
}

export default function ExclusiveNewsDetailPage() {
  const params = useParams()
  const newsId = params.id as string

  const news = newsData.find((n) => n.id === newsId)

  if (!news) {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen flex items-center justify-center py-8"
      >
        <div className="glass-section text-center max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-white mb-4">Noticia no encontrada</h1>
          <Button asChild className="bg-accent hover:bg-accent/90 text-primary">
            <Link href="/exclusive-client-view/news">Volver a Noticias</Link>
          </Button>
        </div>
      </motion.div>
    )
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen py-8"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <Button asChild variant="ghost" className="text-white hover:text-accent hover:bg-white/10">
            <Link href="/exclusive-client-view/news" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Volver a Noticias</span>
            </Link>
          </Button>
        </motion.div>

        {/* News Article */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-section"
        >
          {/* Featured Image */}
          <div className="relative h-64 md:h-96 overflow-hidden rounded-2xl mb-8">
            <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center space-x-4">
              <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
                {news.category}
              </span>
              <div className="flex items-center space-x-2 text-white">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{news.location}</span>
              </div>
            </div>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-6"
            >
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(news.date).toLocaleDateString("es-ES")}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{news.readTime} de lectura</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{news.author}</span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              {news.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-white/80 leading-relaxed mb-8"
            >
              {news.excerpt}
            </motion.p>

            {/* Share Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center space-x-4 pb-8 border-b border-white/10"
            >
              <div className="flex items-center space-x-2">
                <Share2 className="h-4 w-4 text-white/80" />
                <span className="text-white/80 font-medium">Compartir:</span>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="ghost" asChild className="text-white hover:text-accent hover:bg-white/10">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1"
                  >
                    <Facebook className="h-4 w-4" />
                    <span>Facebook</span>
                  </a>
                </Button>
                <Button size="sm" variant="ghost" asChild className="text-white hover:text-accent hover:bg-white/10">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(news.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1"
                  >
                    <Twitter className="h-4 w-4" />
                    <span>Twitter</span>
                  </a>
                </Button>
                <Button size="sm" variant="ghost" asChild className="text-white hover:text-accent hover:bg-white/10">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="prose prose-lg max-w-none text-white/80 prose-headings:text-white prose-strong:text-white prose-a:text-accent prose-ul:text-white/80 prose-li:text-white/80"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="bg-accent/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas Más Información?</h3>
              <p className="text-white/80 mb-6">
                Nuestro equipo de expertos está listo para ayudarte con cualquier consulta relacionada con esta noticia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90 text-primary">
                  <Link href="/exclusive-client-view/contact">Contactar Ahora</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-primary bg-transparent"
                >
                  <Link
                    href="https://wa.me/18092611453?text=Necesito%20información%20sobre%20las%20nuevas%20regulaciones"
                    target="_blank"
                  >
                    WhatsApp Directo
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </motion.div>
  )
}
