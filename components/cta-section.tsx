"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  
  const whatsappNumber = "+1 (809) 261-1453"
  const whatsappMessage = "Hola, me gustaría agendar una consulta legal"

  const benefits = [
    "Respuesta en menos de 24 horas",
    "Asesoría personalizada",

  ]

  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 via-secondary to-accent/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold"
              >
                Agenda tu Consulta
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-primary"
              >
                ¿Necesitas
                <span className="block text-accent">Asesoría Legal?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-xl text-primary/80 leading-relaxed"
              >
                No esperes más. Obtén la representación legal que mereces. Agenda tu cita y descubre cómo
                podemos ayudarte.
              </motion.p>
            </div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-primary/80">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-4 rounded-full group"
              >
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  className="flex items-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-accent text-accent hover:bg-accent hover:text-primary text-lg px-8 py-4 rounded-full"
              >
                <Link href={`tel:${whatsappNumber}`} className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Llamar Ahora</span>
                </Link>
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-primary/60"
            >
              <Clock className="h-5 w-5" />
              <span>Horario: Lunes a Viernes 9:00 AM - 6:00 PM</span>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[400px] bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl backdrop-blur-sm border border-accent/20 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Contacto Directo</h3>
                <p className="text-primary/80 max-w-sm">
                  Comunícate con nosotros de forma inmediata y obtén respuestas a tus consultas legales
                </p>
                <div className="space-y-2">
                  <div className="text-accent font-semibold">{whatsappNumber}</div>
                  <div className="text-primary/60">contact@evolutionlegaladvantage.com</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
