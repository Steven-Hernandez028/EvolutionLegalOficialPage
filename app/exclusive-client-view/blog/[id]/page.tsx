"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, User, Heart, MessageCircle, Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { blogPosts } from "@/lib/blog-data"

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(Math.floor(Math.random() * 50) + 10)

  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Artículo no encontrado</h1>
          <Link href="/exclusive-client-view/blog" className="text-accent hover:underline">
            Volver al blog
          </Link>
        </div>
      </div>
    )
  }

  const handleLike = () => {
    setLiked(!liked)
    setLikes((prev) => (liked ? prev - 1 : prev + 1))
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = `${post.title} - ${post.excerpt}`

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="min-h-screen bg-primary"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-secondary/20 backdrop-blur-sm border-b border-white/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/exclusive-client-view/blog"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            Volver al blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap items-center gap-4 text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">{post.title}</h1>

            <p className="text-xl text-white/80 leading-relaxed">{post.excerpt}</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Featured Image */}
          <div className="aspect-video bg-secondary/30 rounded-2xl overflow-hidden border border-white/10">
            <img
              src={`/placeholder.svg?height=400&width=800&text=${encodeURIComponent(post.title)}`}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-secondary/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed mb-6">{post.content}</p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Aspectos Clave a Considerar</h2>
              <ul className="space-y-2 text-white/80">
                <li>• Importancia de la asesoría legal especializada</li>
                <li>• Documentación necesaria para el proceso</li>
                <li>• Plazos y procedimientos establecidos</li>
                <li>• Costos asociados y formas de pago</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusión</h2>
              <p className="text-white/90 leading-relaxed">
                En Evolution Legal Advantage, entendemos la complejidad de estos procesos legales y estamos
                comprometidos a brindar el mejor servicio a nuestros clientes. Nuestro equipo de expertos está
                disponible para asesorarle en cada paso del camino.
              </p>
            </div>
          </motion.div>

          {/* Interaction Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-between bg-secondary/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
                  liked
                    ? "bg-red-500/20 text-red-400 border border-red-500/30"
                    : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                }`}
              >
                <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
                <span>{likes}</span>
              </button>

              <div className="flex items-center gap-2 text-white/60">
                <MessageCircle className="h-5 w-5" />
                <span>12 comentarios</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-white/60 text-sm mr-2">Compartir:</span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-sky-600/20 text-sky-400 rounded-lg hover:bg-sky-600/30 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-700/20 text-blue-300 rounded-lg hover:bg-blue-700/30 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Comments Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-secondary/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Comentarios</h3>

            {/* Comment Form */}
            <div className="mb-8">
              <textarea
                placeholder="Escribe tu comentario..."
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/50 resize-none focus:outline-none focus:border-accent/50"
                rows={4}
              />
              <button className="mt-4 bg-accent hover:bg-accent/90 text-white font-semibold py-2 px-6 rounded-xl transition-colors">
                Publicar Comentario
              </button>
            </div>

            {/* Sample Comments */}
            <div className="space-y-6">
              {[
                {
                  name: "María González",
                  time: "hace 2 horas",
                  comment: "Excelente artículo, muy informativo y bien explicado.",
                },
                {
                  name: "Carlos Rodríguez",
                  time: "hace 1 día",
                  comment: "Gracias por compartir esta información tan valiosa.",
                },
              ].map((comment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="bg-white/5 rounded-xl p-4 border border-white/5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-accent font-semibold text-sm">{comment.name.charAt(0)}</span>
                    </div>
                    <div>
                      <span className="text-white font-medium">{comment.name}</span>
                      <span className="text-white/50 text-sm ml-2">{comment.time}</span>
                    </div>
                  </div>
                  <p className="text-white/80">{comment.comment}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="bg-secondary/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Artículos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Link href={`/exclusive-client-view/blog/${relatedPost.id}`}>
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300">
                        <h4 className="text-lg font-semibold text-white group-hover:text-accent transition-colors mb-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-white/70 text-sm line-clamp-2 mb-3">{relatedPost.excerpt}</p>
                        <div className="flex items-center gap-2 text-white/50 text-xs">
                          <Calendar className="h-3 w-3" />
                          <span>{relatedPost.date}</span>
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
