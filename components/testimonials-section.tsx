"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Empresario",
    content:
      "La Dra. González me ayudó a resolver un caso complejo de derecho corporativo. Su profesionalismo y dedicación fueron excepcionales. Recomiendo sus servicios sin dudarlo.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Ana Rodríguez",
    role: "Madre de Familia",
    content:
      "En un momento muy difícil de mi vida, encontré en la Dra. González no solo una excelente abogada, sino también una persona comprensiva que luchó por mis derechos.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Miguel Torres",
    role: "Comerciante",
    content:
      "Gracias a su asesoría legal, pude resolver exitosamente un conflicto laboral que parecía imposible. Su experiencia y estrategia fueron clave para el resultado positivo.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Laura Jiménez",
    role: "Profesional",
    content:
      "La atención personalizada y el seguimiento constante de mi caso me dieron la tranquilidad que necesitaba. Una abogada comprometida con sus clientes.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Roberto Silva",
    role: "Pensionado",
    content:
      "Después de años de lucha legal, finalmente encontré la representación que necesitaba. La Dra. González logró lo que otros no pudieron.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section id="testimonials" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
            Testimonios
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Lo que dicen
            <span className="block text-accent">Nuestros Clientes</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor logro. Conoce sus experiencias trabajando con
            nosotros.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-secondary rounded-2xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6 pt-4">
                  {/* Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="text-primary/80 leading-relaxed italic">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-primary/10">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-accent font-semibold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-primary/60">{testimonial.role}</div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-white/80">Satisfacción del Cliente</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-white/80">Casos Exitosos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">4.9</div>
            <div className="text-white/80">Calificación Promedio</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
