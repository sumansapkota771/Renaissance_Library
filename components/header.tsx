"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, BookOpen, Info, Home, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-2 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/renaissance-library-logo.png"
                alt="The Renaissance Library Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-playfair text-xl font-bold text-primary">The Renaissance Library</h1>
              <p className="text-sm text-muted-foreground italic">The Learner's Garden</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200"
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link
              href="/books"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200"
            >
              <BookOpen size={18} />
              <span>Books</span>
            </Link>
            <Link
              href="/about"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200"
            >
              <Info size={18} />
              <span>About</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200"
            >
              <Phone size={18} />
              <span>Contact</span>
            </Link>
          </nav>

          {/* Get Membership Button */}
          <div className="hidden md:block">
            <Link href="/membership">
              <Button className="bg-primary hover:bg-secondary text-primary-foreground font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Get Membership
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-6 px-4 border-t border-border animate-fade-in-up bg-card/95 backdrop-blur-md rounded-lg shadow-lg mx-2">
            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home size={20} />
                <span className="font-medium">Home</span>
              </Link>
              <Link
                href="/books"
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen size={20} />
                <span className="font-medium">Books</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMenuOpen(false)}
              >
                <Info size={20} />
                <span className="font-medium">About</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={20} />
                <span className="font-medium">Contact</span>
              </Link>
              <Link href="/membership" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-primary hover:bg-secondary text-primary-foreground font-semibold mt-4 w-full py-3 text-base">
                  Get Membership
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
