"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect, useRef } from "react"

export function HeroSection() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const backgroundImages = [
    "https://images.unsplash.com/photo-1619771766980-368d32e44b82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1417733403748-83bbc7c05140?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1568092806323-8ec13dfa9b92?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]

  const logotipo = [
    { key: "logo1", image: "https://colegiodeabogados.org.do/wp-content/uploads/2024/05/log.fw-removebg-preview.png" },
    { key: "logo2", image: "https://www.aeuropea.com/wp-content/uploads/2022/01/AEA-logo@2x.png" },
    { key: "logo3", image: "/aei.png" },
  ]

  // Función para cambiar imagen con animación
  const changeImage = (newIndex: number) => {
    if (newIndex === currentImageIndex || isTransitioning) return

    setIsTransitioning(true)
    setCurrentImageIndex(newIndex)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 1200)
  }

  // Auto-play con pausa durante transiciones
  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        if (!isTransitioning) {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
        }
      }, 6000)
    }

    startInterval()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [backgroundImages.length, isTransitioning])

  // Reiniciar interval después de transición manual
  useEffect(() => {
    if (isTransitioning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    } else {
      const timer = setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
        }, 6000)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isTransitioning, backgroundImages.length])

  // Variantes de animación estilo GSAP
  const imageVariants : any = {
    enter: (direction: number) => ({
      scale: 1.2,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      x: direction > 0 ? "100%" : "-100%",
      filter: "blur(10px)",
    }),
    center: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      x: "0%",
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        scale: { duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] },
        opacity: { duration: 0.8 },
        rotateY: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
        x: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
        filter: { duration: 0.8, delay: 0.2 },
      },
    },
    exit: (direction: number) => ({
      scale: 0.8,
      opacity: 0,
      rotateY: direction > 0 ? -45 : 45,
      x: direction > 0 ? "-100%" : "100%",
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: [0.55, 0.085, 0.68, 0.53],
      },
    }),
  }

  const overlayVariants : any = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }

  const contentVariants  : any= {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants  : any= {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const logoVariants  : any= {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  }

  const logoItemVariants : any = {
    hidden: { opacity: 0, scale: 0.5, rotateY: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  }

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Images with GSAP-style transitions */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={1}>
          <motion.div
            key={currentImageIndex}
            custom={1}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              transformOrigin: "center center",
            }}
          />
        </AnimatePresence>

        {/* Animated Overlay */}
        <motion.div
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/90 z-10"
        />

        {/* Floating Elements */}
        <div className="absolute inset-0 z-20">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#cba258]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.3, 0.15],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#cba258]/15 rounded-full blur-3xl"
          />

          {/* Particle Effects */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#cba258]/40 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Image Navigation Dots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3"
      >
        {backgroundImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => changeImage(index)}
            className={`relative overflow-hidden transition-all duration-500 ${
              index === currentImageIndex
                ? "w-8 h-3 bg-[#cba258] shadow-lg shadow-[#cba258]/50"
                : "w-3 h-3 bg-white/30 hover:bg-white/50"
            } rounded-full`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Ir a imagen ${index + 1}`}
          >
            {index === currentImageIndex && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#cba258] to-[#d4b366]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 6, ease: "linear" }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative z-30">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={contentVariants} initial="hidden" animate="visible" className="text-center space-y-8">
            {/* Main Title */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl"
              >
                {t("hero.title")}
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#cba258] drop-shadow-2xl"
              >
                {t("hero.subtitle")}
              </motion.h2>

              <motion.h3
                variants={itemVariants}
                className="text-xl sm:text-2xl lg:text-3xl font-normal text-white/90 drop-shadow-lg"
              >
                {t("hero.description")}
              </motion.h3>
            </motion.div>

            {/* Content Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
            >
              {t("hero.content")}
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-[#cba258] hover:bg-[#d4b366] text-primary font-semibold text-lg px-8 py-4 rounded-full group shadow-2xl hover:shadow-[#cba258]/25 transition-all duration-300"
                >
                  <Link href="/schedule" className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>{t("hero.buttons.schedule")}</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-[#cba258]/80 bg-white/10 backdrop-blur-sm text-[#cba258] hover:bg-[#cba258] hover:text-primary text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="#services">{t("hero.buttons.services")}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Logo Banner */}
      <motion.div
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 bg-white/10 backdrop-blur-md border-t border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Logo Carousel */}
          <div className="flex items-center justify-center">
            <div className="flex space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20">
              {logotipo.map((logo, index) => (
                <motion.div
                  key={logo.key}
                  variants={logoItemVariants}
                  whileHover={{
                    scale: 1.15,
                    rotateY: 15,
                    z: 50,
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                  }}
                  className="group relative perspective-1000"
                >
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center bg-white/10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu"
                    whileHover={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 20px 40px rgba(203, 162, 88, 0.3)",
                    }}
                  >
                    <img
                      src={logo.image || "/placeholder.svg"}
                      alt={logo.key}
                      className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </motion.div>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#cba258]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  />

                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-[#cba258]/20 to-[#d4b366]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
