"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Search, Calendar, Clock, User, Tag } from "lucide-react"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"
import { NavbarAndTopBar } from "@/components/TopBarAndNavbar"
export interface Blog {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  status: string
  views: number
  comments: number
  featured: boolean
  slug: string;
  readTime: number
  image: string;
}

export default function BlogPage() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTag, setSelectedTag] = useState("all")
  const [blogs, setBlogs] = useState<Blog[]>([])
  const featuredPosts = blogs?.filter((post) => post.featured)
  const [limit, setLimit] = useState(10);
  const [blogTags, setBlogTags] = useState<string[]>([])
  const [blogCategories, setBlogCategories] = useState<{ name: string, slug: string }[]>([]);


  const fetchData = async () => {
    try {
      const params = new URLSearchParams({
        limit: limit.toString(),
        search: searchTerm,
        tag: selectedTag,
        category: selectedCategory
      })
      const res = await fetch(`/api/blogs?${params.toString()}`)
      const data = await res.json();
      setBlogs(data.data)


    } catch (error) {
    }
  }
  useEffect(() => {
    fetchData();


  }, [selectedCategory, searchTerm, selectedTag])


  const fetchBlogCategories = async () => {
    try {
      const res = await fetch('/api/blogs/category', { method: 'GET' })
      if (res.ok) {
        const data = await res.json();
        setBlogCategories(data)

      }

    } catch (error) {
      console.log(error)
    }
  }

  const fetchDataTags = async () => {
    try {
      const res = await fetch('/api/blogs/tags', { method: 'GET' })
      if (res.ok) {
        const data = await res.json();
        setBlogTags(data)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
    fetchDataTags();
    fetchBlogCategories();
  },
    [])

  return (
    <div className="min-h-screen bg-secondary">
    <NavbarAndTopBar />
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
            <div className="flex justify-center mb-6">
              <Image src="/logo.avif" alt="LegalStudio Logo" width={80} height={80} className="rounded-full" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">{t("blog.title")}</h1>
            <div className="text-2xl text-accent font-semibold">{t("blog.subtitle")}</div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">{t("blog.description")}</p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary/40" />
              <Input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Todas las categorías" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  {blogCategories.map((category) => (
                    <SelectItem key={category.slug} value={category.slug}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTag} onValueChange={setSelectedTag}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Todas las etiquetas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las etiquetas</SelectItem>
                  {blogTags.map((tag, i) => (
                    <SelectItem key={i} value={tag}>
                      {tag}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Artículos Destacados</h2>
              <p className="text-primary/80 max-w-2xl mx-auto">
                Los artículos más importantes y actuales sobre temas legales relevantes.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        Destacado
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-primary/60 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString("es-ES")}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime} min</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-primary/80 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Tag className="h-4 w-4 text-accent" />
                        <span className="text-sm text-accent font-medium">{post.category}</span>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/blog/${post.slug}`}>{t("blog.readMore")}</Link>
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Todos los Artículos</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Explora nuestra biblioteca completa de contenido legal educativo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
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
                  <div className="flex items-center space-x-3 text-xs text-primary/60 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString("es-ES")}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime} min</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-primary/80 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/blog/${post.slug}`}>{t("blog.readMore")}</Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {blogs?.filter(a => a.featured).length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/80 text-lg">No se encontraron artículos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </section>

      {/* Sidebar Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{t("blog.categories")}</h3>
              <div className="space-y-2">
                {blogCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === category.name
                      ? "bg-accent text-primary font-semibold"
                      : "text-primary/80 hover:bg-accent/10"
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Recent Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{t("blog.recentPosts")}</h3>
              <div className="space-y-4">
                {blogs.slice(0, 5).map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                    <h4 className="text-sm font-medium text-primary group-hover:text-accent transition-colors line-clamp-2 mb-1">
                      {post.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-xs text-primary/60">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString("es-ES")}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{t("blog.tags")}</h3>
              <div className="flex flex-wrap gap-2">
                {blogTags.map((tag, i) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${selectedTag === tag
                      ? "bg-accent text-primary font-semibold"
                      : "bg-accent/10 text-primary/80 hover:bg-accent/20"
                      }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
