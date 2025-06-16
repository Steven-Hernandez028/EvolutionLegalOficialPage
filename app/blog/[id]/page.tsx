"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, Tag, MessageSquare, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { blogPosts, blogComments, type BlogComment } from "@/lib/blog-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

export default function BlogPostPage() {
  const { t } = useLanguage()
  const params = useParams()
  const postId = params.id as string

  const [newComment, setNewComment] = useState({
    author: "",
    email: "",
    content: "",
  })
  const [comments, setComments] = useState<BlogComment[]>(blogComments)

  const post = blogPosts.find((p) => p.id === postId)
  const postComments = comments.filter((c) => c.postId === postId)
  const relatedPosts = blogPosts.filter((p) => p.id !== postId && p.category === post?.category).slice(0, 3)

  if (!post) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Artículo no encontrado</h1>
          <Button asChild>
            <Link href="/blog">Volver al Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.author && newComment.email && newComment.content) {
      const comment: BlogComment = {
        id: Date.now().toString(),
        postId: postId,
        author: newComment.author,
        email: newComment.email,
        content: newComment.content,
        date: new Date().toISOString().split("T")[0],
      }
      setComments([...comments, comment])
      setNewComment({ author: "", email: "", content: "" })
    }
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />

      {/* Header */}
      <section className="pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Button asChild variant="outline" className="mb-6">
              <Link href="/blog" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Volver al Blog</span>
              </Link>
            </Button>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              {/* Featured Image */}
              <div className="relative h-64 md:h-96 overflow-hidden">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-primary/60 mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString("es-ES")}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min de lectura</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">{post.title}</h1>

                {/* Share Buttons */}
                <div className="flex items-center space-x-4 mb-8 pb-8 border-b border-gray-200">
                  <span className="text-primary/80 font-medium">{t("blog.sharePost")}:</span>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
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
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1"
                      >
                        <Twitter className="h-4 w-4" />
                        <span>Twitter</span>
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
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
                </div>

                {/* Article Content */}
                <div
                  className="prose prose-lg max-w-none text-primary/80 mb-8"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="flex items-center space-x-2 mb-8">
                  <Tag className="h-4 w-4 text-accent" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="bg-accent/10 text-accent px-2 py-1 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center space-x-2">
              <MessageSquare className="h-6 w-6" />
              <span>
                {t("blog.comments")} ({postComments.length})
              </span>
            </h2>

            {/* Existing Comments */}
            <div className="space-y-6 mb-8">
              {postComments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-accent font-semibold text-sm">
                        {comment.author.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{comment.author}</div>
                      <div className="text-sm text-primary/60">
                        {new Date(comment.date).toLocaleDateString("es-ES")}
                      </div>
                    </div>
                  </div>
                  <p className="text-primary/80 leading-relaxed ml-13">{comment.content}</p>
                </div>
              ))}

              {postComments.length === 0 && (
                <p className="text-primary/60 text-center py-8">Sé el primero en comentar este artículo.</p>
              )}
            </div>

            {/* Comment Form */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-primary mb-4">{t("blog.leaveComment")}</h3>
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary/80 mb-2">{t("blog.name")} *</label>
                    <Input
                      required
                      value={newComment.author}
                      onChange={(e) => setNewComment((prev) => ({ ...prev, author: e.target.value }))}
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary/80 mb-2">{t("blog.email")} *</label>
                    <Input
                      type="email"
                      required
                      value={newComment.email}
                      onChange={(e) => setNewComment((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary/80 mb-2">{t("blog.comment")} *</label>
                  <Textarea
                    required
                    rows={4}
                    value={newComment.content}
                    onChange={(e) => setNewComment((prev) => ({ ...prev, content: e.target.value }))}
                    placeholder="Escribe tu comentario..."
                  />
                </div>
                <Button type="submit" className="bg-accent hover:bg-accent/90 text-primary">
                  {t("blog.submitComment")}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">{t("blog.relatedPosts")}</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Otros artículos que podrían interesarte sobre {post.category}.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-3 text-xs text-primary/60 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(relatedPost.date).toLocaleDateString("es-ES")}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{relatedPost.readTime} min</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      <Link href={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                    </h3>

                    <p className="text-primary/80 text-sm mb-4 line-clamp-3">{relatedPost.excerpt}</p>

                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={`/blog/${relatedPost.id}`}>{t("blog.readMore")}</Link>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
