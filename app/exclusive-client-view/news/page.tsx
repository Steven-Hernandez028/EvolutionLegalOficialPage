"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Newspaper, Users, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const newsData = [
  {
    id: 1,
    title: "Nuevas Regulaciones de Inversión Extranjera en República Dominicana",
    excerpt:
      "El gobierno dominicano ha anunciado importantes cambios en las regulaciones para inversionistas extranjeros.",
    date: "2024-01-15",
    category: "Regulaciones",
    readTime: "5 min",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 2,
    title: "Seminario: Aspectos Legales de la Compra de Propiedades",
    excerpt: "Evolution Legal Advantage presenta un seminario exclusivo sobre aspectos legales inmobiliarios.",
    date: "2024-01-10",
    category: "Eventos",
    readTime: "3 min",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    id: 3,
    title: "Cambios en el Proceso de Residencia Dominicana",
    excerpt: "Nuevos requisitos y procedimientos simplificados para obtener la residencia en República Dominicana.",
    date: "2024-01-08",
    category: "Inmigración",
    readTime: "4 min",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Taller: Due Diligence Inmobiliaria",
    date: "2024-02-15",
    time: "10:00 AM",
    location: "Virtual",
  },
  {
    id: 2,
    title: "Conferencia: Inversión Segura en RD",
    date: "2024-02-20",
    time: "2:00 PM",
    location: "Puerto Plata",
  },
]

export default function ExclusiveNewsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Newspaper className="h-8 w-8 text-accent" />
            <h1 className="text-4xl font-bold text-white">Noticias y Eventos</h1>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Mantente informado sobre las últimas noticias legales y eventos de Evolution Legal Advantage
          </p>
        </motion.div>

        {/* Featured News */}
        {newsData
          .filter((news) => news.featured)
          .map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-section mb-8"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      Destacado
                    </span>
                    <span className="text-white/60 text-sm">{news.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{news.title}</h2>
                  <p className="text-white/80 text-lg mb-6">{news.excerpt}</p>
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-2 text-white/60">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(news.date).toLocaleDateString("es-ES")}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/60">
                      <Clock className="h-4 w-4" />
                      <span>{news.readTime} lectura</span>
                    </div>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90 text-primary">
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="relative">
                  <img
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          ))}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Grid */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">Últimas Noticias</h2>
            <div className="space-y-6">
              {newsData
                .filter((news) => !news.featured)
                .map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6"
                  >
                    <div className="flex gap-6">
                      <img
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="bg-accent/20 text-accent px-2 py-1 rounded text-xs font-semibold">
                            {news.category}
                          </span>
                          <span className="text-white/60 text-sm">
                            {new Date(news.date).toLocaleDateString("es-ES")}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{news.title}</h3>
                        <p className="text-white/70 text-sm mb-3 line-clamp-2">{news.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-white/60 text-xs">
                            <Clock className="h-3 w-3" />
                            <span>{news.readTime} lectura</span>
                          </div>
                          <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80">
                            Leer más
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Calendar className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold text-white">Próximos Eventos</h3>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={event.id} className="border-l-2 border-accent pl-4">
                    <h4 className="font-semibold text-white mb-1">{event.title}</h4>
                    <div className="text-sm text-white/60 mb-2">
                      <div>{new Date(event.date).toLocaleDateString("es-ES")}</div>
                      <div>
                        {event.time} - {event.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold text-white">Newsletter</h3>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Recibe las últimas noticias legales directamente en tu correo.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent"
                />
                <Button className="w-full bg-accent hover:bg-accent/90 text-primary">Suscribirse</Button>
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6 text-center"
            >
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">¿Necesitas Asesoría?</h3>
              <p className="text-white/70 text-sm mb-4">
                Nuestro equipo está listo para ayudarte con cualquier consulta legal.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-primary">
                <Link href="/exclusive-client-view/contact">Contactar Ahora</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
