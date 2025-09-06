"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Laptop, Coffee, Calendar, Headphones } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Book Lending",
    description: "Borrow from our extensive collection with flexible return policies and digital renewals.",
    features: ["30-day lending period", "Online renewals", "Hold requests", "Late fee forgiveness"],
  },
  {
    icon: Laptop,
    title: "Digital Resources",
    description: "Access e-books, audiobooks, databases, and online journals from anywhere, anytime.",
    features: ["E-book collection", "Academic databases", "Online journals", "Digital archives"],
  },
  {
    icon: Users,
    title: "Study Spaces",
    description: "Quiet study areas, group rooms, and collaborative spaces designed for focused learning.",
    features: ["Silent study zones", "Group study rooms", "Collaborative spaces", "Private booths"],
  },
  {
    icon: Calendar,
    title: "Events & Workshops",
    description: "Regular book clubs, author talks, writing workshops, and educational seminars.",
    features: ["Book clubs", "Author events", "Writing workshops", "Educational seminars"],
  },
  {
    icon: Coffee,
    title: "Reading Café",
    description: "Enjoy your favorite books with premium coffee and light refreshments in our cozy café.",
    features: ["Premium coffee", "Light snacks", "Comfortable seating", "Free WiFi"],
  },
  {
    icon: Headphones,
    title: "Audiobook Corner",
    description: "Dedicated listening stations with high-quality audio equipment for audiobook enthusiasts.",
    features: ["Premium headphones", "Comfortable seating", "Vast audiobook library", "Quiet environment"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-balance mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive library services designed to support your learning journey and research needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-center">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <h3 className="font-playfair text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Become a member today and unlock access to our full range of services, exclusive events, and a world of
              knowledge at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-4">
                Get Membership
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 bg-transparent"
              >
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
