"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, User, Mail, Phone, Building, MessageSquare, Calendar, CheckCircle, AlertCircle } from "lucide-react"

export interface EventRegistrationDTO {
  attendeeName: string
  attendeeEmail: string
  attendeePhone: string
  company: string
  notes: string
}

interface EventRegistrationModalProps {
  isOpen: boolean
  onClose: () => void
  eventTitle: string
  eventDate: string
  eventId: string
}

export function EventRegistrationModal({ 
  isOpen, 
  onClose, 
  eventTitle, 
  eventDate, 
  eventId 
}: EventRegistrationModalProps) {
  const [formData, setFormData] = useState<EventRegistrationDTO>({
    attendeeName: "",
    attendeeEmail: "",
    attendeePhone: "",
    company: "",
    notes: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.attendeeName.trim()) {
      newErrors.attendeeName = "El nombre es requerido"
    }
    
    if (!formData.attendeeEmail.trim()) {
      newErrors.attendeeEmail = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.attendeeEmail)) {
      newErrors.attendeeEmail = "Formato de email inválido"
    }
    
    if (!formData.attendeePhone.trim()) {
      newErrors.attendeePhone = "El teléfono es requerido"
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "La empresa es requerida"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          eventId
        })
      })

      if (response.ok) {
        setShowSuccessModal(true)
        setFormData({
          attendeeName: "",
          attendeeEmail: "",
          attendeePhone: "",
          company: "",
          notes: ""
        })
      } else {
        const errorData = await response.json()
        
       setErrors({ general: errorData.message??"Error al registrar. Intenta nuevamente." })
      }
    } catch (error) {
      setErrors({ general: "Error de conexión. Intenta nuevamente." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        attendeeName: "",
        attendeeEmail: "",
        attendeePhone: "",
        company: "",
        notes: ""
      })
      setErrors({})
      onClose()
    }
  }

  const handleSuccessClose = () => {
    setShowSuccessModal(false)
    onClose()
  }

  return (
    <>
      {/* Main Registration Modal */}
      <AnimatePresence>
        {isOpen && !showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[95vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                      Registro de Evento
                    </h2>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-primary/60 hover:text-primary transition-colors p-1 hover:bg-gray-100 rounded-lg"
                    disabled={isSubmitting}
                  >
                    <X className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </div>

                {/* Event Info */}
                <div className="mb-6 p-4 sm:p-5 bg-primary/5 rounded-xl">
                  <h3 className="font-semibold text-primary mb-1 text-sm sm:text-base lg:text-lg">
                    {eventTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary/60">
                    {new Date(eventDate).toLocaleDateString("es-ES")}
                  </p>
                </div>

                {/* General Error */}
                {errors.general && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-2">
                    <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-red-600">{errors.general}</span>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      <User className="h-4 w-4 inline mr-2" />
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="attendeeName"
                      value={formData.attendeeName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 sm:py-4 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors text-sm sm:text-base ${
                        errors.attendeeName ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-accent'
                      }`}
                      placeholder="Ingresa tu nombre completo"
                      disabled={isSubmitting}
                    />
                    {errors.attendeeName && (
                      <p className="mt-1 text-sm text-red-600">{errors.attendeeName}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      <Mail className="h-4 w-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="attendeeEmail"
                      value={formData.attendeeEmail}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 sm:py-4 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors text-sm sm:text-base ${
                        errors.attendeeEmail ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-accent'
                      }`}
                      placeholder="tu@email.com"
                      disabled={isSubmitting}
                    />
                    {errors.attendeeEmail && (
                      <p className="mt-1 text-sm text-red-600">{errors.attendeeEmail}</p>
                    )}
                  </div>

                  {/* Phone and Company - Responsive Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Phone Field */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        <Phone className="h-4 w-4 inline mr-2" />
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="attendeePhone"
                        value={formData.attendeePhone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 sm:py-4 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors text-sm sm:text-base ${
                          errors.attendeePhone ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-accent'
                        }`}
                        placeholder="(000) 000-0000"
                        disabled={isSubmitting}
                      />
                      {errors.attendeePhone && (
                        <p className="mt-1 text-sm text-red-600">{errors.attendeePhone}</p>
                      )}
                    </div>

                    {/* Company Field */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        <Building className="h-4 w-4 inline mr-2" />
                        Empresa *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 sm:py-4 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors text-sm sm:text-base ${
                          errors.company ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-accent'
                        }`}
                        placeholder="Nombre de tu empresa"
                        disabled={isSubmitting}
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                      )}
                    </div>
                  </div>

                  {/* Notes Field */}
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      <MessageSquare className="h-4 w-4 inline mr-2" />
                      Notas (Opcional)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors resize-none text-sm sm:text-base"
                      placeholder="Comentarios adicionales..."
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="w-full sm:flex-1 px-6 py-3 sm:py-4 border-2 border-gray-200 text-primary rounded-xl hover:bg-gray-50 transition-colors text-sm sm:text-base font-medium"
                      disabled={isSubmitting}
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="w-full sm:flex-1 px-6 py-3 sm:py-4 bg-accent text-primary rounded-xl hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Registrando..." : "Registrarme"}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6"
            onClick={handleSuccessClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl w-full max-w-md sm:max-w-lg p-6 sm:p-8 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-green-500" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
                ¡Registro Exitoso!
              </h3>
              <p className="text-primary/80 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                Tu registro ha sido procesado correctamente. Serás notificado por correo electrónico cuando esté confirmado.
              </p>
              
              <button
                onClick={handleSuccessClose}
                className="w-full px-6 py-3 sm:py-4 bg-accent text-primary rounded-xl hover:bg-accent/90 transition-colors text-sm sm:text-base font-medium"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}