"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, BookOpen } from "lucide-react"

const featuredBooks = [
  {
    id: 1,
    title: "The Art of Renaissance",
    author: "Leonardo da Vinci",
    category: "Art & History",
    rating: 4.9,
    image: "/renaissance-art-book-cover.png",
    description: "Explore the masterpieces and techniques of Renaissance art through the eyes of the masters.",
    available: true,
  },
  {
    id: 2,
    title: "Modern Philosophy",
    author: "Immanuel Kant",
    category: "Philosophy",
    rating: 4.8,
    image: "/philosophy-book-cover-modern-design.png",
    description: "A comprehensive guide to understanding modern philosophical thought and reasoning.",
    available: true,
  },
  {
    id: 3,
    title: "Digital Innovation",
    author: "Steve Jobs",
    category: "Technology",
    rating: 4.7,
    image: "/technology-innovation-book-cover.png",
    description: "Insights into the digital revolution and its impact on modern society.",
    available: false,
  },
  {
    id: 4,
    title: "Classical Literature",
    author: "William Shakespeare",
    category: "Literature",
    rating: 4.9,
    image: "/classical-literature-book-cover-elegant.png",
    description: "Timeless works that have shaped literature and continue to inspire readers.",
    available: true,
  },
  {
    id: 5,
    title: "Scientific Discoveries",
    author: "Marie Curie",
    category: "Science",
    rating: 4.8,
    image: "/science-discovery-book-cover.png",
    description: "Groundbreaking scientific discoveries that changed our understanding of the world.",
    available: true,
  },
  {
    id: 6,
    title: "World History",
    author: "Yuval Noah Harari",
    category: "History",
    rating: 4.6,
    image: "/world-history-book-cover.png",
    description: "A fascinating journey through human civilization and historical milestones.",
    available: true,
  },
]

export function FeaturedBooks() {
  return (
    <section id="books" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-balance mb-4">
            Featured <span className="text-primary">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selection of books spanning various genres and disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book, index) => (
            <Card
              key={book.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={book.available ? "default" : "secondary"}
                      className="bg-primary/90 text-primary-foreground"
                    >
                      {book.available ? "Available" : "Reserved"}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0 bg-card/80 hover:bg-card">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <Badge variant="outline" className="text-xs mb-2">
                      {book.category}
                    </Badge>
                    <h3 className="font-playfair text-xl font-bold text-balance group-hover:text-primary transition-colors duration-200">
                      {book.title}
                    </h3>
                    <p className="text-muted-foreground">by {book.author}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{book.description}</p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{book.rating}</span>
                    </div>

                    <Button
                      size="sm"
                      className="bg-primary hover:bg-secondary text-primary-foreground transition-all duration-200 hover:scale-105"
                      disabled={!book.available}
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      {book.available ? "Borrow" : "Reserved"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 bg-transparent"
          >
            View All Books
          </Button>
        </div>
      </div>
    </section>
  )
}
