"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/renaissance-library-logo.png"
                  alt="The Renaissance Library Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-playfair text-lg font-bold text-primary">The Renaissance Library</h3>
                <p className="text-sm text-muted-foreground italic">The Learner's Garden</p>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              A sanctuary of knowledge where minds flourish and wisdom grows. Join our community of learners and
              discover the joy of reading.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Home
              </Link>
              <Link href="#books" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Books Collection
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                About Us
              </Link>
              <Link
                href="#services"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/membership"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Membership
              </Link>
              <Link href="/events" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Events
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>Sindhuli, Bhiman</p>
                
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">9847777465</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@renaissancelibrary.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>Mon-Fri: 8:00 AM - 10:00 PM</p>
                  <p>Sat-Sun: 9:00 AM - 8:00 PM</p>
                  <p className="text-primary font-medium">Digital Access: 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for book recommendations, events, and library updates.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background border-border focus:border-primary"
              />
              <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">© 2024 The Renaissance Library. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
