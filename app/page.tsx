import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LawyerSection } from "@/components/lawyer-section"
import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InstagramSection } from "@/components/instagram-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <HeroSection />
      <LawyerSection />
      <ServicesSection />
      <CTASection />
      <TestimonialsSection />
      <InstagramSection />
      <Footer />
    </main>
  )
}
