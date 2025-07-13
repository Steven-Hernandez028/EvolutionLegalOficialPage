"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Clock, Phone, Mail, MessageSquare, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

// Representa la información del formulario de agendamiento
export interface AppointmentFormData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  legalArea: string
  description: string
  consultationType: 'presencial' | 'virtual'
}

export type TimeSlot =
  | "09:00" | "09:30" | "10:00" | "10:30"
  | "11:00" | "11:30" | "14:00" | "14:30"
  | "15:00" | "15:30" | "16:00" | "16:30"
  | "17:00"

export type LegalArea =
  | "Derecho Civil"
  | "Derecho Penal"
  | "Derecho Corporativo"
  | "Derecho Familiar"
  | "Derecho Laboral"
  | "Mediación"
  | "Consulta General"

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
  { key: "due-diligence", value: "Investigación Jurídica Inmobiliaria (Due Diligence)" },
  { key: "relocation", value: "Reubicación Integral para Extranjeros" },
  { key: "real-estate", value: "Asesoría y Gestión de Bienes Inmuebles" },
  { key: "rural-lands", value: "Tierras Vírgenes del Norte" },
  { key: "immigration", value: "Extranjería: Residencia y Ciudadanía" },
  { key: "consular", value: "Derecho Migratorio y Consular" },
  { key: "corporate", value: "Derecho Societario" },
  { key: "family-law", value: "Derecho de Familia" },
  { key: "vehicular-due-diligence", value: "Debida Diligencia Vehicular" },
  { key: "contract-review", value: "Estudio y Revisión de Contratos" },
  { key: "document-management", value: "Gestión de Documentos" },
  { key: "legal-training", value: "Capacitación Jurídica" }
]


export default function SchedulePage() {
  const whatsappNumberToShow = "+1 (809) 261-1453"
  const whatsappNumber = "18092611453"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    legalArea: "",
    description: "",
    consultationType: "presencial",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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
              <h1 className="text-3xl font-bold text-primary mb-4">¡Cita Agendada Exitosamente!</h1>
              <p className="text-primary/80 mb-6">
                Hemos recibido su solicitud de cita. Nos pondremos en contacto con usted dentro de las próximas 24 horas
                para confirmar los detalles de su consulta.
              </p>
              <div className="bg-accent/10 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-primary mb-2">Detalles de su cita:</h3>
                <div className="text-sm text-primary/80 space-y-1">
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
                    <strong>Tipo:</strong> {formData.consultationType === "presencial" ? "Presencial" : "Virtual"}
                  </p>
                </div>
              </div>
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
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Agenda tu
              <span className="block text-accent">Consulta Legal</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Reserva una cita con nuestra abogada experta. Ofrecemos consultas presenciales y virtuales para tu
              comodidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">Información de la Cita</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Información Personal</h3>

                  <div>
                    <label className="block text-sm font-medium text-primary/80 mb-2">Nombre Completo *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Ingrese su nombre completo"
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary/80 mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="su@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary/80 mb-2">Teléfono *</label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 809 123 4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Detalles de la Cita</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary/80 mb-2">Fecha Preferida *</label>
                      <Input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div>

                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary/80 mb-2">Área Legal *</label>
                    <Select value={formData.legalArea} onValueChange={(value) => handleInputChange("legalArea", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar área legal" />
                      </SelectTrigger>
                      <SelectContent>
                        {legalAreas.map((area) => (
                          <SelectItem key={area.key} value={area.key}>
                            {area.value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary/80 mb-2">Tipo de Consulta *</label>
                    <Select
                      value={formData.consultationType}
                      onValueChange={(value) => handleInputChange("consultationType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="presencial">Presencial</SelectItem>
                        <SelectItem value="virtual">Virtual (Videollamada)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary/80 mb-2">Descripción del Caso</label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Describa brevemente su situación legal..."
                      rows={4}
                    />
                  </div>
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
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="text-primary/80">+1 809 123 4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <span className="text-primary/80">contact@evolut9ionlegaladvantage.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-accent mt-1" />
                    <div className="text-primary/80">
                      <div>Lunes - Viernes</div>
                      <div>9:00 AM - 6:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Qué Esperar</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <span className="text-primary/80 text-sm">Consulta inicial gratuita de 30 minutos</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <span className="text-primary/80 text-sm">Evaluación profesional de su caso</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <span className="text-primary/80 text-sm">Estrategia legal personalizada</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <span className="text-primary/80 text-sm">Presupuesto transparente</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">¿Necesita Ayuda Urgente?</h3>
                <p className="text-primary/80 text-sm mb-4">
                  Para casos de emergencia legal, contáctenos directamente por WhatsApp.
                </p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-primary">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Necesito ayuda legal")}`}
                    target="_blank"
                    className="flex items-center justify-center space-x-2"
                    rel="noreferrer"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>WhatsApp Urgente</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
 <Footer />  
    </div>
  )
}
