import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"
import { BooksPage } from "@/components/books-page"

export const metadata = {
  title: "Books Collection - The Renaissance Library",
  description:
    "Explore our extensive collection of books across various genres and disciplines at The Renaissance Library.",
  keywords: "library books, book collection, literature, academic books, fiction, non-fiction",
}

export default function Books() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Header />
      <BooksPage />
      <Footer />
    </main>
  )
}
