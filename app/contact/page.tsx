"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Actualizar las variables
  const whatsappNumber = "18092611453"
  const whatsappMessage = "Hola, me gustaría obtener más información sobre sus servicios legales"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-secondary">
        <Navbar />
        <div className="pt-20 pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-primary mb-4">¡Mensaje Enviado!</h1>
              <p className="text-primary/80 mb-6">
                Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo dentro de las
                próximas 24 horas.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-primary">
                <a href="/">Volver al Inicio</a>
              </Button>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />

      {/* Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
            <div className="flex justify-center mb-6">
              <Image src="/logo.png" alt="LegalStudio Logo" width={80} height={80} className="rounded-full" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">{t("contact.title")}</h1>
            <div className="text-2xl text-accent font-semibold">{t("contact.subtitle")}</div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">{t("contact.description")}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20   ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">Envíanos un Mensaje</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary/80 mb-2">{t("contact.form.name")} *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary/80 mb-2">
                      {t("contact.form.email")} *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary/80 mb-2">{t("contact.form.phone")}</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary/80 mb-2">
                      {t("contact.form.subject")} *
                    </label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar tema" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consulta">Consulta General</SelectItem>
                        <SelectItem value="civil">Derecho Civil</SelectItem>
                        <SelectItem value="penal">Derecho Penal</SelectItem>
                        <SelectItem value="laboral">Derecho Laboral</SelectItem>
                        <SelectItem value="familiar">Derecho Familiar</SelectItem>
                        <SelectItem value="corporativo">Derecho Corporativo</SelectItem>
                        <SelectItem value="mediacion">Mediación</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary/80 mb-2">
                    {t("contact.form.message")} *
                  </label>
                  <Textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Describe tu consulta o situación legal..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold py-3 flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>{t("contact.form.send")}</span>
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{t("contact.info.address")}</h4>
                      {/* Actualizar la información de contacto */}
                      <div className="text-primary/80">{t("company.location")}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{t("contact.info.phone")}</h4>
                      {/* Actualizar teléfonos */}
                      <Link
                        href={`tel:${whatsappNumber}`}
                        className="text-primary/80 hover:text-accent transition-colors"
                      >
                        +1 {whatsappNumber}
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{t("contact.info.email")}</h4>
                      {/* Actualizar email */}
                      <Link
                        href={`mailto:${t("company.email")}`}
                        className="text-primary/80 hover:text-accent transition-colors"
                      >
                        {t("company.email")}
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{t("contact.info.hours")}</h4>
                      {/* Actualizar horarios */}
                      <div className="text-primary/80">
                        <div>{t("company.hours")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


         
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
