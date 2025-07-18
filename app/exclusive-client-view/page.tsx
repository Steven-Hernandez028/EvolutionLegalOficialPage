"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { HeroSection } from "@/components/hero-section"
import { LawyerSection } from "@/components/lawyer-section"
import { ServicesSection } from "@/components/services-section_old"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InstagramSection } from "@/components/instagram-section"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { BottomBar } from "@/components/bottom-bar"
import { useRef } from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { NavbarAndTopBar } from "@/components/TopBarAndNavbar"

export default function ExclusiveClientView() {
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const FixedBackground = () => {
    return (<motion.div style={{ y: backgroundY }} className="fixed inset-0 w-full h-[120vh] z-0">
      <div
        className="w-full h-full bg-gradient-to-br from-primary via-primary/90 to-secondary"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/20" />
    </motion.div>
    )
  }
  useEffect(() => {
    router.replace("/exclusive-client-view/home")
  }, [router])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-x-hidden">
      {/* Fixed Background with Parallax */}
    
      {/* Navbar */}
      <div className="relative z-40">
        <NavbarAndTopBar/>
      </div>

      {/* Main Content with Glass Effect */}
      <motion.div style={{ y: textY }} className="relative z-10 pt-16 pb-20">
        {/* Hero Section with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-section mb-8"
        >
          <HeroSection />
        </motion.div>

        {/* Lawyer Section with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-section mb-8"
        >
          <LawyerSection />
        </motion.div>

        {/* Services Section with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-section mb-8"
        >
          <ServicesSection />
        </motion.div>

        {/* Testimonials Section with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-section mb-8"
        >
          <TestimonialsSection />
        </motion.div>

        {/* Instagram Section with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-section mb-8"
        >
          <InstagramSection />
        </motion.div>

        {/* CTA Section with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="glass-section"
        >
          <CTASection />
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="relative z-50">
        <BottomBar />
      </div>
    </div>
  )
}
