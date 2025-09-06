"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-primary/10 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
                Welcome to <span className="text-primary">The Renaissance</span>{" "}
                <span className="text-secondary">Library</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light italic">The Learner's Garden</p>
            </div>

            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Discover a world of knowledge and wisdom in our carefully curated collection. From ancient texts to modern
              masterpieces, embark on your learning journey with us.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-secondary text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                Explore Our Collection
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Get Membership
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="font-bold text-2xl text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Books</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mx-auto mb-2">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div className="font-bold text-2xl text-secondary">10K+</div>
                <div className="text-sm text-muted-foreground">Members</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mx-auto mb-2">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div className="font-bold text-2xl text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Access</div>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/elegant-library-interior-with-books-and-reading-ar.png"
                alt="Renaissance Library Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">New Arrivals</div>
                  <div className="text-sm text-muted-foreground">Updated daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
