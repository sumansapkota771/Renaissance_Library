import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"
import { MembershipPage } from "@/components/membership-page"

export const metadata = {
  title: "Get Membership - The Renaissance Library",
  description:
    "Join The Renaissance Library and unlock access to our extensive collection, exclusive events, and premium services.",
  keywords: "library membership, library card, join library, library benefits, premium access",
}

export default function Membership() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Header />
      <MembershipPage />
      <Footer />
    </main>
  )
}
