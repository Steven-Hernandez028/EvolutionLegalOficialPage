"use client"

import { motion } from "framer-motion"
import { Download, Video, FileText, Archive } from "lucide-react"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import { useEffect, useState } from "react"
import { NavbarAndTopBar } from "@/components/TopBarAndNavbar"
interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
  downloadUrl: string;
}

export default function ResourcesPage() {
  const { t } = useLanguage()


  const [resources, setResources] = useState < Resource[] > ();

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
  const DownloadAndLink = async (resource: Resource) => {
    fetch('/api/resources/view', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: resource.id }),
    })
      .then((res) => {
        if (res.ok) {
          window.open(resource.downloadUrl, '_blank');
        } else {
          console.error('Error al registrar la vista del recurso.');
        }
      })
      .catch((error) => {
        console.error('Error al conectar con el servidor:', error);
      });
  }


  return (
    <div className="min-h-screen bg-secondary">
      <NavbarAndTopBar />

      {/* Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
            <div className="flex justify-center mb-6">
              <Image
                src="/logo.avif"
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

                <Button onClick={() => DownloadAndLink(resource)} asChild size="sm" variant="outline" className="w-full">
                  <div className="flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Descargar</span>
                  </div>
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
