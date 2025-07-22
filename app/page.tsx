import { HeroSection } from "@/components/hero-section"
import { LawyerSection } from "@/components/lawyer-section"
import { CTASection } from "@/components/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InstagramSection } from "@/components/instagram-section"
import { Footer } from "@/components/footer"
import { NavbarAndTopBar } from "@/components/TopBarAndNavbar"
import { ServicesSection } from "@/components/services-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <NavbarAndTopBar/>
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
