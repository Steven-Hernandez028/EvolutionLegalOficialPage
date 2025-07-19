"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, MapPin, Share2, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react"
import Link from "next/link"

// Sample news data - in a real app, this would come from your data source
const newsData = [
  {
    id: "1",
    title: "Nuevas Regulaciones Migratorias en República Dominicana 2024",
    excerpt:
      "El gobierno dominicano anuncia cambios importantes en las políticas de inmigración que afectarán a extranjeros residentes.",
    content:
      "Las nuevas regulaciones migratorias implementadas por el gobierno dominicano representan un cambio significativo en la política de inmigración del país. Estas medidas, que entrarán en vigor el próximo mes, buscan modernizar y agilizar los procesos de residencia para extranjeros. Entre los cambios más importantes se incluyen la digitalización de trámites, reducción de tiempos de espera, y nuevos requisitos de documentación. Los extranjeros que actualmente residen en el país deberán actualizar su documentación según los nuevos estándares establecidos.",
    date: "15 de Enero, 2024",
    readTime: "5 min lectura",
    author: "Redacción Legal",
    location: "Santo Domingo, RD",
    tags: ["Inmigración", "Regulaciones", "Gobierno"],
    source: "Ministerio de Interior y Policía",
  },
  {
    id: "2",
    title: "Cambios en la Ley de Bienes Raíces para Extranjeros",
    excerpt:
      "Modificaciones importantes en la legislación que regula la compra de propiedades por parte de ciudadanos extranjeros.",
    content:
      "La reciente modificación a la Ley de Bienes Raíces introduce cambios sustanciales en el proceso de adquisición de propiedades por parte de extranjeros en República Dominicana. Estas modificaciones buscan facilitar la inversión extranjera mientras mantienen la seguridad jurídica. Los nuevos procedimientos incluyen la simplificación de trámites notariales, la creación de un registro digital de propiedades, y la implementación de nuevos mecanismos de protección para inversionistas extranjeros.",
    date: "10 de Enero, 2024",
    readTime: "4 min lectura",
    author: "Equipo Legal",
    location: "Santiago, RD",
    tags: ["Bienes Raíces", "Inversión", "Legislación"],
    source: "Colegio de Abogados de la República Dominicana",
  },
]

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const news = newsData.find((n) => n.id === params.id)

  if (!news) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Noticia no encontrada</h1>
          <Link href="/exclusive-client-view/news" className="text-accent hover:underline">
            Volver a noticias
          </Link>
        </div>
      </div>
    )
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = `${news.title} - ${news.excerpt}`

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "anticipate" }}
      className="min-h-screen bg-primary"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="bg-secondary/20 backdrop-blur-sm border-b border-white/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/exclusive-client-view/news"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            Volver a noticias
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {news.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Meta Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-white/60"
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{news.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{news.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{news.location}</span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl lg:text-4xl font-bold text-white leading-tight"
            >
              {news.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-white/80 leading-relaxed"
            >
              {news.excerpt}
            </motion.p>

            {/* Source */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-2 text-white/50 text-sm"
            >
              <span>Fuente:</span>
              <span className="font-medium">{news.source}</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-8"
        >
          {/* Featured Image */}
          <div className="aspect-video bg-secondary/30 rounded-2xl overflow-hidden border border-white/10">
            <img
              src={`/placeholder.svg?height=400&width=800&text=${encodeURIComponent("Noticias Legales")}`}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-secondary/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed text-lg mb-8">{news.content}</p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <h2 className="text-2xl font-bold text-white mt-8 mb-6">Implicaciones para los Ciudadanos</h2>
                <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mb-8">
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Los extranjeros residentes deberán actualizar su documentación</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Se implementarán nuevos plazos para los trámites migratorios</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>La asesoría legal será fundamental durante la transición</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Recomendaciones de Nuestros Expertos</h2>
                <p className="text-white/90 leading-relaxed">
                  En Evolution Legal Advantage, recomendamos a nuestros clientes mantenerse informados sobre estos
                  cambios y buscar asesoría legal especializada para navegar exitosamente por las nuevas regulaciones.
                  Nuestro equipo está preparado para asistir en todos los aspectos de estos procesos.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Share and Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Share */}
            <div className="bg-secondary/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Share2 className="h-5 w-5" />
                Compartir esta noticia
              </h3>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600/20 text-blue-400 rounded-xl p-3 text-center hover:bg-blue-600/30 transition-colors flex items-center justify-center gap-2"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-sky-600/20 text-sky-400 rounded-xl p-3 text-center hover:bg-sky-600/30 transition-colors flex items-center justify-center gap-2"
                >
                  <Twitter className="h-4 w-4" />
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-700/20 text-blue-300 rounded-xl p-3 text-center hover:bg-blue-700/30 transition-colors flex items-center justify-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm rounded-2xl p-6 border border-accent/30">
              <h3 className="text-lg font-bold text-white mb-4">¿Necesitas Asesoría?</h3>
              <p className="text-white/80 mb-4 text-sm">
                Si estos cambios te afectan, nuestro equipo está listo para ayudarte.
              </p>
              <a
                href="https://wa.me/18095551234?text=Hola, necesito información sobre las nuevas regulaciones migratorias"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Consultar Ahora
              </a>
            </div>
          </motion.div>

          {/* Related News */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="bg-secondary/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Noticias Relacionadas</h3>
            <div className="space-y-4">
              {newsData
                .filter((n) => n.id !== news.id)
                .map((relatedNews, index) => (
                  <motion.div
                    key={relatedNews.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <Link href={`/exclusive-client-view/news/${relatedNews.id}`}>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-accent/30 transition-all duration-300 flex items-center gap-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white group-hover:text-accent transition-colors mb-1">
                            {relatedNews.title}
                          </h4>
                          <div className="flex items-center gap-4 text-white/50 text-sm">
                            <span>{relatedNews.date}</span>
                            <span>{relatedNews.readTime}</span>
                          </div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
