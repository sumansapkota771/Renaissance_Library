import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"
import { AboutPage } from "@/components/about-page"

export const metadata = {
  title: "About Us - The Renaissance Library",
  description:
    "Learn about The Renaissance Library's mission, history, and commitment to fostering learning and knowledge sharing.",
  keywords: "library about, library mission, learning center, education, community library",
}

export default function About() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Header />
      <AboutPage />
      <Footer />
    </main>
  )
}
