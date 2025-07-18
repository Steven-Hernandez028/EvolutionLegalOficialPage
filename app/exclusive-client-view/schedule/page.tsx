"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Clock, Phone, Mail, MessageSquare, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
]

const legalAreas = [
  "Due Diligence Inmobiliaria",
  "Derecho Migratorio",
  "Derecho Societario",
  "Derecho Familiar",
  "Reubicación Integral",
  "Consulta General",
]

export default function ExclusiveSchedulePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    legalArea: "",
    description: "",
    consultationType: "virtual",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-section">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">¡Cita Agendada!</h1>
            <p className="text-white/80 mb-6">
              Hemos recibido su solicitud. Nos contactaremos dentro de las próximas 24 horas.
            </p>
            <div className="bg-accent/10 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-white mb-2">Detalles de su cita:</h3>
              <div className="text-sm text-white/80 space-y-1">
                <p>
                  <strong>Fecha:</strong> {formData.date}
                </p>
                <p>
                  <strong>Hora:</strong> {formData.time}
                </p>
                <p>
                  <strong>Área Legal:</strong> {formData.legalArea}
                </p>
                <p>
                  <strong>Tipo:</strong> {formData.consultationType === "virtual" ? "Virtual" : "Presencial"}
                </p>
              </div>
            </div>
            <Button asChild className="bg-accent hover:bg-accent/90 text-primary">
              <Link href="/exclusive-client-view/home">Volver al Inicio</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image src="/logo.avif" alt="Logo" width={60} height={60} className="rounded-full" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Agendar Consulta</h1>
          <p className="text-white/80">Reserva tu cita personalizada con nuestros expertos legales</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-section"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Información de la Cita</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Nombre Completo *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Tu nombre completo"
                  className="bg-white/10 border-white/20 text-white placeholder-white/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="tu@email.com"
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Teléfono *</label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+1 809 123 4567"
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Fecha *</label>
                  <Input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Hora *</label>
                  <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Seleccionar hora" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Área Legal *</label>
                <Select value={formData.legalArea} onValueChange={(value) => handleInputChange("legalArea", value)}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Seleccionar área" />
                  </SelectTrigger>
                  <SelectContent>
                    {legalAreas.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Tipo de Consulta *</label>
                <Select
                  value={formData.consultationType}
                  onValueChange={(value) => handleInputChange("consultationType", value)}
                >
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="virtual">Virtual (Videollamada)</SelectItem>
                    <SelectItem value="presencial">Presencial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Descripción</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Describe tu consulta legal..."
                  rows={3}
                  className="bg-white/10 border-white/20 text-white placeholder-white/50"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold py-3"
              >
                {isLoading ? "Procesando..." : "Agendar Cita"}
              </Button>
            </form>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-white/80">+1 809 261 1453</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-white/80">evolutionlegala@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-accent mt-1" />
                  <div className="text-white/80">
                    <div>24/7 con cita previa</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-2">¿Necesitas Ayuda Inmediata?</h3>
              <p className="text-white/70 text-sm mb-4">Contáctanos por WhatsApp para una respuesta rápida.</p>
              <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
                <Link href="https://wa.me/18092611453?text=Necesito%20consulta%20urgente" target="_blank">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  WhatsApp Urgente
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
