"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Star, Heart, BookOpen, Search, Filter } from "lucide-react"

const allBooks = [
  {
    id: 1,
    title: "The Art of Renaissance",
    author: "Leonardo da Vinci",
    category: "Art & History",
    rating: 4.9,
    image: "/renaissance-art-book-cover.png",
    description:
      "Explore the masterpieces and techniques of Renaissance art through the eyes of the masters. This comprehensive guide delves into the revolutionary artistic movements that shaped European culture.",
    fullDescription:
      "A masterful exploration of Renaissance art, covering the techniques, innovations, and cultural impact of the period's greatest artists. From Leonardo's scientific approach to Michelangelo's sculptural mastery, this book provides deep insights into the artistic revolution that transformed European culture forever.",
    available: true,
    isbn: "978-0-123456-78-9",
    pages: 456,
    publisher: "Renaissance Press",
    year: 2023,
  },
  {
    id: 2,
    title: "Modern Philosophy",
    author: "Immanuel Kant",
    category: "Philosophy",
    rating: 4.8,
    image: "/philosophy-book-cover-modern-design.png",
    description: "A comprehensive guide to understanding modern philosophical thought and reasoning.",
    fullDescription:
      "Dive deep into the foundations of modern philosophical thought with this comprehensive analysis of critical reasoning, ethics, and metaphysics. Kant's revolutionary ideas continue to influence contemporary philosophical discourse.",
    available: true,
    isbn: "978-0-234567-89-0",
    pages: 623,
    publisher: "Philosophy Today",
    year: 2022,
  },
  {
    id: 3,
    title: "Digital Innovation",
    author: "Steve Jobs",
    category: "Technology",
    rating: 4.7,
    image: "/technology-innovation-book-cover.png",
    description: "Insights into the digital revolution and its impact on modern society.",
    fullDescription:
      "An inspiring look at how digital innovation has transformed our world, featuring case studies from Apple, Google, and other tech giants that have shaped the modern digital landscape.",
    available: false,
    isbn: "978-0-345678-90-1",
    pages: 389,
    publisher: "Tech Insights",
    year: 2023,
  },
  {
    id: 4,
    title: "Classical Literature",
    author: "William Shakespeare",
    category: "Literature",
    rating: 4.9,
    image: "/classical-literature-book-cover-elegant.png",
    description: "Timeless works that have shaped literature and continue to inspire readers.",
    fullDescription:
      "A collection of Shakespeare's most influential works with modern commentary and analysis. Discover the enduring themes and literary techniques that make these plays and sonnets timeless masterpieces.",
    available: true,
    isbn: "978-0-456789-01-2",
    pages: 892,
    publisher: "Classic Works",
    year: 2021,
  },
  {
    id: 5,
    title: "Scientific Discoveries",
    author: "Marie Curie",
    category: "Science",
    rating: 4.8,
    image: "/science-discovery-book-cover.png",
    description: "Groundbreaking scientific discoveries that changed our understanding of the world.",
    fullDescription:
      "Follow the journey of scientific breakthroughs that revolutionized our understanding of physics, chemistry, and medicine. From radioactivity to modern quantum theory, explore the discoveries that shaped modern science.",
    available: true,
    isbn: "978-0-567890-12-3",
    pages: 534,
    publisher: "Scientific American",
    year: 2023,
  },
  {
    id: 6,
    title: "World History",
    author: "Yuval Noah Harari",
    category: "History",
    rating: 4.6,
    image: "/world-history-book-cover.png",
    description: "A fascinating journey through human civilization and historical milestones.",
    fullDescription:
      "An engaging narrative of human history from the Stone Age to the Information Age. Harari weaves together anthropology, biology, and economics to tell the story of how Homo sapiens came to dominate the world.",
    available: true,
    isbn: "978-0-678901-23-4",
    pages: 743,
    publisher: "History Press",
    year: 2022,
  },
]

export function BooksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBook, setSelectedBook] = useState<(typeof allBooks)[0] | null>(null)

  const categories = ["all", ...Array.from(new Set(allBooks.map((book) => book.category)))]

  const filteredBooks = allBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || book.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-balance mb-4">
            Our <span className="text-primary">Book Collection</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover thousands of books across various genres and disciplines
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 animate-on-scroll">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search books or authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBooks.map((book, index) => (
            <Card
              key={book.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-on-scroll cursor-pointer"
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

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{book.description}</p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{book.rating}</span>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-secondary text-primary-foreground transition-all duration-200 hover:scale-105"
                          onClick={() => setSelectedBook(book)}
                        >
                          <BookOpen className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="font-playfair text-2xl">{selectedBook?.title}</DialogTitle>
                        </DialogHeader>
                        {selectedBook && (
                          <div className="space-y-6">
                            <div className="flex gap-6">
                              <img
                                src={selectedBook.image || "/placeholder.svg"}
                                alt={selectedBook.title}
                                className="w-32 h-48 object-cover rounded-lg"
                              />
                              <div className="flex-1 space-y-3">
                                <div>
                                  <p className="text-lg font-semibold">by {selectedBook.author}</p>
                                  <Badge variant="outline" className="mt-1">
                                    {selectedBook.category}
                                  </Badge>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  <span className="font-medium">{selectedBook.rating}</span>
                                </div>
                                <div className="text-sm text-muted-foreground space-y-1">
                                  <p>ISBN: {selectedBook.isbn}</p>
                                  <p>Pages: {selectedBook.pages}</p>
                                  <p>Publisher: {selectedBook.publisher}</p>
                                  <p>Year: {selectedBook.year}</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Description</h4>
                              <p className="text-muted-foreground leading-relaxed">{selectedBook.fullDescription}</p>
                            </div>
                            <div className="flex gap-3">
                              <Button
                                className="flex-1 bg-primary hover:bg-secondary text-primary-foreground"
                                disabled={!selectedBook.available}
                              >
                                <BookOpen className="h-4 w-4 mr-2" />
                                {selectedBook.available ? "Borrow Book" : "Currently Reserved"}
                              </Button>
                              <Button variant="outline" size="icon">
                                <Heart className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No books found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
