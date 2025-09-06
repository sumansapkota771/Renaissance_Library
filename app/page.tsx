import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedBooks } from "@/components/featured-books"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Header />
      <HeroSection />
      <FeaturedBooks />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </main>
  )
}
