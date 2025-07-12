"use client"

import { motion } from "framer-motion"
import { BookOpen, Download, Video, FileText, Users, Award, Archive } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
  downloadUrl: string;
}

export default function ResourcesPage() {
  const { t } = useLanguage()


  const [resources, setResources] = useState<Resource[]>();

  const fetchData = async () => {
    try {
      const res = await fetch('/api/resources', { method: 'GET' })
      if (res.ok) {
        const data = await res.json();

        setResources(data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const GetIcon = (icon: string) => {
    switch (icon) {
      case 'DOCUMENT':
        return <FileText />
      case 'ZIP':
        return <Archive />
      case 'VIDEO':
        return <Video />
      default:
        return <FileText />;
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />

      {/* Header */}
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
            <h1 className="text-4xl lg:text-5xl font-bold text-white">{t("nav.resources")}</h1>
            <div className="text-2xl text-accent font-semibold">Impulsando la Profesión</div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Recursos valiosos, talleres y herramientas para empoderar a los profesionales del derecho.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Biblioteca de Recursos</h2>
            <p className="text-primary/80 max-w-2xl mx-auto">
              Accede a nuestra colección completa de materiales educativos y herramientas profesionales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources?.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    {GetIcon(resource.type)}
                  </div>
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-semibold">
                    {resource.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {resource.title}
                </h3>
                <p className="text-primary/80 text-sm mb-4">{resource.description}</p>

                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href={resource.downloadUrl} className="flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Descargar</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
