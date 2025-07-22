"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight, FolderOpen, ArrowRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Empresario",
    content:
      "La Dra. González me ayudó a resolver un caso complejo de derecho corporativo. Su profesionalismo y dedicación fueron excepcionales. Recomiendo sus servicios sin dudarlo.",
    rating: 5,
    image: "/placeholder.svg?height=120&width=120",
    location: "Santo Domingo",
    service: "Derecho Societario",
  },
  {
    name: "Ana Rodríguez",
    role: "Madre de Familia",
    content:
      "En un momento muy difícil de mi vida, encontré en la Dra. González no solo una excelente abogada, sino también una persona comprensiva que luchó por mis derechos.",
    rating: 5,
    image: "/placeholder.svg?height=120&width=120",
    location: "Santiago",
    service: "Derecho de Familia",
  },
  {
    name: "Miguel Torres",
    role: "Comerciante",
    content:
      "Gracias a su asesoría legal, pude resolver exitosamente un conflicto laboral que parecía imposible. Su experiencia y estrategia fueron clave para el resultado positivo.",
    rating: 5,
    image: "/placeholder.svg?height=120&width=120",
    location: "La Romana",
    service: "Asesoría Legal",
  },
  {
    name: "Laura Jiménez",
    role: "Profesional",
    content:
      "La atención personalizada y el seguimiento constante de mi caso me dieron la tranquilidad que necesitaba. Una abogada comprometida con sus clientes.",
    rating: 5,
    image: "/placeholder.svg?height=120&width=120",
    location: "Puerto Plata",
    service: "Extranjería",
  },
  {
    name: "Roberto Silva",
    role: "Pensionado",
    content:
      "Después de años de lucha legal, finalmente encontré la representación que necesitaba. La Dra. González logró lo que otros no pudieron.",
    rating: 5,
    image: "/placeholder.svg?height=120&width=120",
    location: "Punta Cana",
    service: "Due Diligence",
  },
  {
    name: "Isabella Martinez",
    role: "Inversionista",
    content:
      "Su servicio de due diligence inmobiliario me salvó de una inversión riesgosa. Detectaron problemas que otros pasaron por alto. Profesionalismo excepcional.",
    rating: 5,
    image: "/placeholder.svg?height=120&width=120",
    location: "Cap Cana",
    service: "Investigación Inmobiliaria",
  },
]

const stats = [
  { value: 98, label: "Satisfacción del Cliente", suffix: "%" },
  { value: 500, label: "Casos Exitosos", suffix: "+" },
  { value: 4.9, label: "Calificación Promedio", suffix: "", decimals: 1 },
  { value: 15, label: "Años de Experiencia", suffix: "+" },
]

function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
  duration = 2000,
}: {
  value: number
  suffix?: string
  decimals?: number
  duration?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(latest)
    })
  }, [springValue])

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold text-[#cba258] mb-2">
      {decimals > 0 ? displayValue.toFixed(decimals) : Math.floor(displayValue)}
      {suffix}
    </div>
  )
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" })
  const router = useRouter()

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#cba258]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#cba258]/3 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#cba258]/5 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-center space-y-6 mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.6 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#cba258]/20 to-[#d4b366]/20 text-[#cba258] rounded-full text-sm font-semibold border border-[#cba258]/30 backdrop-blur-sm"
          >
            ✨ Testimonios de Clientes
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl lg:text-6xl font-bold text-white leading-tight"
          >
            Lo que dicen
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block bg-gradient-to-r from-[#cba258] to-[#d4b366] bg-clip-text text-transparent"
            >
              Nuestros Clientes
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            La satisfacción de nuestros clientes es nuestro mayor logro. Conoce sus experiencias trabajando con
            nosotros.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl">
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.6 }}
                className="absolute -top-6 left-8"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#cba258] to-[#d4b366] rounded-full flex items-center justify-center shadow-lg shadow-[#cba258]/25">
                  <Quote className="h-6 w-6 text-slate-900" />
                </div>
              </motion.div>

              {/* Testimonial Content */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                className="space-y-8 pt-6"
              >
                {/* Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star className="h-6 w-6 text-[#cba258] fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-white/90 leading-relaxed text-center italic font-light">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring", bounce: 0.4 }}
                    className="relative"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#cba258]/30 shadow-lg shadow-[#cba258]/20">
                      <img
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#cba258] to-[#d4b366] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </motion.div>

                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{testimonials[currentIndex].name}</div>
                    <div className="text-[#cba258] font-medium">{testimonials[currentIndex].role}</div>
                    <div className="text-white/60 text-sm">{testimonials[currentIndex].location}</div>
                    <div className="text-white/50 text-xs mt-1 px-3 py-1 bg-[#cba258]/10 rounded-full inline-block">
                      {testimonials[currentIndex].service}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-gradient-to-br from-[#cba258] to-[#d4b366] rounded-full flex items-center justify-center shadow-lg shadow-[#cba258]/25 hover:shadow-[#cba258]/40 transition-all pointer-events-auto"
                >
                  <ChevronLeft className="h-6 w-6 text-slate-900" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-gradient-to-br from-[#cba258] to-[#d4b366] rounded-full flex items-center justify-center shadow-lg shadow-[#cba258]/25 hover:shadow-[#cba258]/40 transition-all pointer-events-auto"
                >
                  <ChevronRight className="h-6 w-6 text-slate-900" />
                </motion.button>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-[#cba258] to-[#d4b366] shadow-lg shadow-[#cba258]/50"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Animated Statistics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.3 }}
          className="relative mb-16"
        >
          <div className="bg-gradient-to-r from-slate-800/80 via-slate-700/80 to-slate-800/80 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border border-[#cba258]/20 shadow-2xl shadow-[#cba258]/10">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#cba258]/5 via-transparent to-[#cba258]/5 rounded-2xl" />

            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  className="text-center group"
                >
                  <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      duration={2000 + index * 200}
                    />
                    <div className="text-white/80 text-sm lg:text-base font-medium leading-tight">{stat.label}</div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : { width: 0 }}
                      transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                      className="h-1 bg-gradient-to-r from-[#cba258] to-[#d4b366] rounded-full mx-auto"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Catalog CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(203, 162, 88, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/catalogo")}
            className="bg-gradient-to-r from-[#cba258] to-[#d4b366] hover:from-[#d4b366] hover:to-[#cba258] text-white font-bold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 flex items-center space-x-3 mx-auto group relative overflow-hidden"
          >
            {/* Button Background Animation */}
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}  
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />

            <FolderOpen className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Ver Catálogo de Casos</span>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <ArrowRight className="h-6 w-6" />
            </motion.div>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-white/60 text-sm mt-4"
          >
            Descubre casos reales y resultados exitosos de nuestros clientes
          </motion.p>
        </motion.div>

  

   
      </div>
    </section>
  )
}
