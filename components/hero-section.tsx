"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"

export function HeroSection() {
  const { t } = useLanguage()

  const backgroundImages = [
    "https://images.unsplash.com/photo-1619771766980-368d32e44b82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1417733403748-83bbc7c05140?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1568092806323-8ec13dfa9b92?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]

  const logotipo = [
    { key: "logo1", image: "https://colegiodeabogados.org.do/wp-content/uploads/2024/05/log.fw-removebg-preview.png" },
    { key: "logo2", image: "https://www.aeuropea.com/wp-content/uploads/2022/01/AEA-logo@2x.png" },
    { key: "logo3", image: "/aei.png" }
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`,
              zIndex: index === currentImageIndex ? 1 : 0
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/90 z-10" />

        {/* Animated circles */}
        <div className="absolute inset-0 z-20">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
          />
        </div>
      </div>

      {/* Image slider dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
              ? 'bg-accent shadow-lg'
              : 'bg-white/30 hover:bg-white/50'
              }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative z-30">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg"
              >
                {t("hero.title")}
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent drop-shadow-lg"
              >
                {t("hero.subtitle")}
              </motion.h2>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl sm:text-2xl lg:text-3xl font-normal text-white/90 drop-shadow-md"
              >
                {t("hero.description")}
              </motion.h3>
            </motion.div>

            {/* Content Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            >
              {t("hero.content")}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-4 rounded-full group shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link
                  href="/schedule"
                  className="flex items-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>{t("hero.buttons.schedule")}</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-accent/80 bg-white/10 backdrop-blur-sm text-accent hover:bg-accent hover:text-primary text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="#services">{t("hero.buttons.services")}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Logo Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-30 bg-white/10 backdrop-blur-md border-t border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
          
          {/* Logo Carousel */}
          <div className="flex items-center justify-center">
            <div className="flex space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20">
              {logotipo.map((logo, index) => (
                <motion.div
                  key={logo.key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  className="group relative"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center bg-white/10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <img
                      src={logo.image}
                      alt={logo.key}
                      className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}