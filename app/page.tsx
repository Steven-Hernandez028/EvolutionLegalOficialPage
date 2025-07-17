import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LawyerSection } from "@/components/lawyer-section"
import { ServicesSection } from "@/components/services-section_old"
import { CTASection } from "@/components/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InstagramSection } from "@/components/instagram-section"
import { Footer } from "@/components/footer"
import { TopBar } from "@/components/TopBar"

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <TopBar />
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
