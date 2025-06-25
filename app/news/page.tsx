"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ExternalLink, Bell } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function NewsPage() {
  const { t } = useLanguage()

  const news = [
    {
      id: 1,
      title: "Nuevas Regulaciones Inmobiliarias en República Dominicana 2024",
      excerpt: "Cambios importantes en la legislación que afectan a inversionistas extranjeros.",
      date: "2024-01-15",
      category: "Legislación",
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
    },
    {
      id: 2,
      title: "Evolution Legal se Expande a Estados Unidos",
      excerpt: "Apertura de nueva oficina para mejor servicio a clientes internacionales.",
      date: "2024-01-10",
      category: "Empresa",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      id: 3,
      title: "Seminario: Inversión Inmobiliaria Segura en RD",
      excerpt: "Evento educativo para inversionistas extranjeros el próximo mes.",
      date: "2024-01-05",
      category: "Eventos",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
  ]

  const events = [
    {
      id: 1,
      title: "Taller: Due Diligence Inmobiliaria",
      date: "2024-02-15",
      time: "10:00 AM",
      location: "Puerto Plata, RD",
      type: "Presencial",
    },
    {
      id: 2,
      title: "Webinar: Residencia en República Dominicana",
      date: "2024-02-20",
      time: "3:00 PM",
      location: "Virtual",
      type: "Online",
    },
    {
      id: 3,
      title: "Conferencia: Derecho Migratorio",
      date: "2024-03-01",
      time: "9:00 AM",
      location: "Santo Domingo, RD",
      type: "Presencial",
    },
  ]

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />


      <section className="pt-20 pb-12 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
            <div className="flex justify-center mb-6">
              <Image
                src="/logo.png"
                alt="Evolution Legal Advantage Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">{t("nav.news")}</h1>
            <div className="text-2xl text-accent font-semibold">Actualidad Legal</div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Mantente informado sobre las últimas noticias legales y eventos de Evolution Legal Advantage.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Noticias Destacadas</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {news
              .filter((item) => item.featured)
              .map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
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
                        <span>{new Date(item.date).toLocaleDateString("es-ES")}</span>
                      </div>
                      <span className="text-accent font-medium">{item.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-primary/80 mb-4">{item.excerpt}</p>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Todas las Noticias</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 text-xs text-primary/60 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(item.date).toLocaleDateString("es-ES")}</span>
                    </div>
                    <span className="text-accent font-medium bg-accent/10 px-2 py-1 rounded">{item.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-primary/80 text-sm mb-4">{item.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Próximos Eventos</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Únete a nuestros eventos educativos y talleres especializados.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Bell className="h-6 w-6 text-accent" />
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      event.type === "Online" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                    }`}
                  >
                    {event.type}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-primary mb-3">{event.title}</h3>

                <div className="space-y-2 text-sm text-primary/70">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(event.date).toLocaleDateString("es-ES")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
