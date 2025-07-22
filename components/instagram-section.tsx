"use client"

import { motion } from "framer-motion"
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const instagramPosts = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Conoce tus derechos laborales. Hoy hablamos sobre...",
    likes: 245,
    comments: 18,
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Consejos legales para emprendedores. ¿Sabías que...?",
    likes: 189,
    comments: 12,
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Caso de éxito: Ayudamos a una familia a...",
    likes: 312,
    comments: 24,
  },
  {
    id: 4,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Derecho familiar: Todo lo que necesitas saber sobre...",
    likes: 156,
    comments: 9,
  },
  {
    id: 5,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Mediación legal: Una alternativa efectiva para...",
    likes: 203,
    comments: 15,
  },
  {
    id: 6,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Protege tu patrimonio con estos consejos legales...",
    likes: 278,
    comments: 21,
  },
]

export function InstagramSection() {
  const instagramHandle = "@legalstudio_oficial"
  const instagramUrl = "https://instagram.com/legalstudio_oficial"

  return (
    <section id="instagram" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-600 rounded-full text-sm font-semibold">
            <Instagram className="h-4 w-4" />
            <span>Síguenos en Instagram</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            Contenido Legal
            <span className="block text-accent">Educativo</span>
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Mantente informado con consejos legales, casos de éxito y contenido educativo que te ayudará a conocer mejor
            tus derechos.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              href={instagramUrl}
              target="_blank"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 group"
            >
              <Instagram className="h-5 w-5" />
              <span>Seguir {instagramHandle}</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Instagram Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={`Instagram post ${post.id}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-6 text-white">
                      <div className="flex items-center space-x-2">
                        <Heart className="h-6 w-6" />
                        <span className="font-semibold">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="h-6 w-6" />
                        <span className="font-semibold">{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-primary/80 text-sm leading-relaxed line-clamp-3">{post.caption}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-primary/60">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <Instagram className="h-5 w-5 text-pink-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
