"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Calendar, Clock, BookOpen } from "lucide-react"
import { blogPosts, blogCategories } from "@/lib/blog-data"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"

export default function ExclusiveBlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-8 w-8 text-accent" />
            <h1 className="text-4xl font-bold text-white">Blog Legal</h1>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Artículos especializados, análisis legal y consejos prácticos para mantenerte informado
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-section mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
              <Input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/50"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Categorías" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                {blogCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-section mb-8"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={filteredPosts[0].image || "/placeholder.svg"}
                  alt={filteredPosts[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">Destacado</span>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-accent font-medium">{filteredPosts[0].category}</span>
                  <div className="flex items-center space-x-2 text-white/60 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(filteredPosts[0].date).toLocaleDateString("es-ES")}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{filteredPosts[0].title}</h2>
                <p className="text-white/80 mb-4">{filteredPosts[0].excerpt}</p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-primary">
                  <Link href={`/exclusive-client-view/blog/${filteredPosts[0].id}`}>Leer Artículo</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {post.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-primary px-2 py-1 rounded-full text-xs font-semibold">
                      Destacado
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-3 text-xs text-white/60 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString("es-ES")}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime} min</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  <Link href={`/exclusive-client-view/blog/${post.id}`}>{post.title}</Link>
                </h3>

                <p className="text-white/80 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <Button asChild variant="ghost" size="sm" className="text-accent hover:text-accent/80">
                    <Link href={`/exclusive-client-view/blog/${post.id}`}>Leer más</Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/80 text-lg">No se encontraron artículos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  )
}
