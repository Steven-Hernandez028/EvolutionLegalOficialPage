"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Award, Scale, ArrowRight, Star, Sparkles, Eye } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useRef, useEffect } from "react"

export function LawyerSection() {
  const { t } = useLanguage()
  const router = useRouter()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)
  const [random, setRandom] = useState<number>(1);

  useEffect(() => {
    setRandom(Math.random());
  }, []);
  
  const lawyers = [
    {
      id: 1,
      name: t("ceo[0].name"),
      title: t("ceo[0].lawyerTitle"),
      image: t("ceo[0].image"),
      description: t("ceo[0].lawyerDescription"),
      link: "founder/abigail-santos-de-thibodeau",
      specialty: "Derecho Civil y Penal",
      experience: "15+ años",
      cases: "500+",
      rating: 4.9,
    },
    {
      id: 2,
      name: t("ceo[1].name"),
      title: t("ceo[1].lawyerTitle"),
      image: t("ceo[1].image"),
      description: t("ceo[1].lawyerDescription"),
      link: "founder/guy-thibodeau",
      specialty: "Derecho Corporativo",
      experience: "12+ años",
      cases: "300+",
      rating: 4.8,
    },
  ]

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener("mousemove", handleMouseMove)
      return () => section.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Floating particles animation
  const FloatingParticle = ({ delay = 0, size = 4 }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: [-20, -100],
        x: [0, random * 40 - 20],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: random * 2,
      }}
      className={`absolute w-${size} h-${size} bg-[#cba258] rounded-full blur-sm`}
      style={{
        left: `${random * 100}%`,
        top: `${random * 100}%`,
      }}
    />
  )

  return (
    <section ref={sectionRef} id="lawyer" className="py-20 bg-secondary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} size={random * 3 + 2} />
        ))}

        {/* Parallax Orbs */}
        <motion.div
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 30,
            rotate: 360,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#cba258]/10 to-[#d4b366]/5 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -40,
            rotate: -360,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 15 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#cba258]/8 to-[#d4b366]/3 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with GSAP-style entrance */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: -90 }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.2,
            },
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{
              scale: 1,
              rotate: 0,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.3,
              },
            }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#cba258]/20 to-[#d4b366]/20 backdrop-blur-sm border border-[#cba258]/30 text-[#cba258] rounded-full text-sm font-semibold mb-6 relative"
          >
            <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-[#cba258] animate-pulse" />
            {t("lawyer.section.title")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
            className="text-4xl lg:text-6xl font-bold text-primary mb-6 relative"
          >
            <span className="bg-gradient-to-r from-primary via-[#cba258] to-primary bg-clip-text text-transparent">
              {t("lawyer.section.subtitle")}
            </span>

            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#cba258] to-[#d4b366] rounded-full"
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.8 },
            }}
            className="text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed"
          >
            {t("lawyer.section.description")}
          </motion.p>
        </motion.div>

        {/* Cards Grid with Advanced GSAP Animations */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {lawyers.map((lawyer, index) => (
            <motion.div
              key={lawyer.id}
              initial={{
                opacity: 0,
                y: 100,
                rotateY: index % 2 === 0 ? -45 : 45,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateY: 0,
                scale: 1,
                transition: {
                  duration: 1,
                  delay: index * 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              }}
              whileHover={{
                y: -20,
                rotateY: index % 2 === 0 ? 5 : -5,
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(lawyer.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group perspective-1000"
            >
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(203,162,88,0.25)] transition-all duration-700 transform-gpu">
                {/* Animated Border - CORREGIDO */}
                <motion.div
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ delay: index * 0.3 + 0.5, duration: 2 }}
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    // Reemplazado 'background' con propiedades específicas
                    backgroundImage: hoveredCard === lawyer.id 
                      ? "linear-gradient(45deg, #cba258, #d4b366, #cba258)" 
                      : "none",
                    backgroundColor: hoveredCard === lawyer.id ? undefined : "transparent",
                    padding: "2px",
                    backgroundSize: "200% 200%",
                    animation: hoveredCard === lawyer.id ? "gradient-shift 3s ease infinite" : "none",
                  }}
                >
                  <div className="w-full h-full bg-white rounded-3xl" />
                </motion.div>

                {/* Image Section with 3D Effects */}
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotateZ: index % 2 === 0 ? 2 : -2,
                      transition: { duration: 0.6, ease: "easeOut" },
                    }}
                    className="relative w-full h-full"
                  >
                    <Image src={lawyer.image || "/placeholder.svg"} alt={lawyer.name} fill className="object-cover" />

                    {/* Animated Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#cba258]/60 via-transparent to-transparent"
                    />
                  </motion.div>

                  {/* Experience Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: 50, rotateY: 90 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      rotateY: 0,
                      transition: { delay: index * 0.3 + 1, duration: 0.8 },
                    }}
                    className="absolute top-4 right-4 bg-[#cba258]/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg"
                  >
                    <div className="text-white text-center">
                      <div className="text-lg font-bold">{lawyer.experience}</div>
                      <div className="text-xs">Experiencia</div>
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-8 relative">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#cba258] to-transparent" />
                  </div>

                  <div className="space-y-6 relative z-10">
                    {/* Name and Title */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.3 + 0.6, duration: 0.6 },
                      }}
                    >
                      <motion.h3
                        whileHover={{
                          scale: 1.05,
                          color: "#cba258",
                          transition: { duration: 0.3 },
                        }}
                        className="text-3xl font-bold text-primary cursor-pointer"
                      >
                        {lawyer.name}
                      </motion.h3>
                      <p className="text-[#cba258] font-semibold text-lg mt-1">{lawyer.title}</p>
                      <p className="text-primary/60 text-sm">{lawyer.specialty}</p>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.3 + 0.8, duration: 0.6 },
                      }}
                      className="text-primary/70 leading-relaxed"
                    >
                      {lawyer.description}
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.3 + 1, duration: 0.6 },
                      }}
                      className="flex items-center justify-between py-4 border-t border-primary/10"
                    >
                      <div className="flex items-center space-x-2">
                        <Scale className="h-5 w-5 text-[#cba258]" />
                        <span className="text-sm text-primary/60">Casos: {lawyer.cases}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="h-5 w-5 text-[#cba258]" />
                        <span className="text-sm text-primary/60">Certificado</span>
                      </div>
                    </motion.div>

                    {/* Animated Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { delay: index * 0.3 + 1.2, duration: 0.6 },
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(203, 162, 88, 0.3)",
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => router.push(lawyer.link)}
                      className="w-full bg-gradient-to-r from-[#cba258] to-[#d4b366] hover:from-[#d4b366] hover:to-[#cba258] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-500 flex items-center justify-center space-x-3 group/btn relative overflow-hidden"
                    >
                      {/* Button Background Animation */}
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />

                      <Eye className="h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="relative z-10">{t("common.showMore")}</span>
                      <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}