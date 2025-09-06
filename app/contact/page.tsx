import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"
import { ContactPage } from "@/components/contact-page"

export const metadata = {
  title: "Contact Us - The Renaissance Library",
  description: "Get in touch with The Renaissance Library. Find our location, hours, and contact information.",
  keywords: "library contact, library hours, library location, contact information",
}

export default function Contact() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Header />
      <ContactPage />
      <Footer />
    </main>
  )
}
