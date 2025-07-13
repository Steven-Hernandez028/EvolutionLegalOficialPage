"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ExternalLink, Bell, Tag, Link } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { EventRegistrationModal } from "@/components/EventRegistrationModal"
import NewsEvents, { EventDTO } from "@/components/Events"

interface BlogResponse {
  id: string
  slug: string;
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  status: string
  views: number
  comments: number,
  image?: string | null;
  readTime: number
  featured: boolean
}
export default function NewsPage() {
  const router = useRouter();
  const [news, setNews] = useState<BlogResponse[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventDTO | null>(null)



  async function FetchData() {
    try {
      const res = await fetch('/api/news', { method: 'GET' })
      if (res.ok) {
        const data = await res.json();
        setNews(data.data)
      }

    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    FetchData();
  }, [])


  function GoToPage(id: string) {
    console.log(id)
    router.push(`news/${id}`)
  }
  const { t } = useLanguage()




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

      {news?.filter((item) => item.featured).length > 0 && <section className="py-16">
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
            {news?.filter((item) => item.featured)

              .map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => GoToPage(item.slug)}

                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
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
      }
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
                onClick={() => GoToPage(item.slug)}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
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


      <NewsEvents setSelectedEvent={setSelectedEvent} selectedEvent={selectedEvent} />
      <Footer />
      {selectedEvent?.title && selectedEvent?.date && selectedEvent?.id && (
        <EventRegistrationModal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          eventTitle={String(selectedEvent.title)}
          eventDate={String(selectedEvent.date)}
          eventId={String(selectedEvent.id)}
        />
      )}

    </div>
  )
}
