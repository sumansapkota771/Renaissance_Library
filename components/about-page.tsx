"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Heart, Lightbulb, Globe } from "lucide-react"

const milestones = [
  {
    year: "1985",
    title: "Foundation",
    description: "The Renaissance Library was established with a vision to create a modern learning sanctuary.",
  },
  {
    year: "1992",
    title: "Digital Integration",
    description: "Became one of the first libraries to integrate digital cataloging and computer access.",
  },
  {
    year: "2005",
    title: "Community Expansion",
    description: "Expanded services to include community programs, workshops, and cultural events.",
  },
  {
    year: "2015",
    title: "Modern Renovation",
    description: "Complete renovation with state-of-the-art facilities and collaborative learning spaces.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched comprehensive digital services and virtual learning programs.",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Transformed into a modern innovation hub with maker spaces and technology labs.",
  },
]

const values = [
  {
    icon: BookOpen,
    title: "Knowledge Access",
    description: "Providing unrestricted access to information and learning resources for all community members.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Building a vibrant community of learners, researchers, and knowledge seekers.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing new technologies and methods to enhance the learning experience.",
  },
  {
    icon: Globe,
    title: "Inclusivity",
    description: "Creating an inclusive environment that welcomes diverse perspectives and backgrounds.",
  },
]

const stats = [
  { number: "50,000+", label: "Books & Resources" },
  { number: "15,000+", label: "Active Members" },
  { number: "500+", label: "Weekly Visitors" },
  { number: "100+", label: "Programs Annually" },
]

export function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-balance mb-4">
            About <span className="text-primary">The Renaissance Library</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For nearly four decades, we've been nurturing minds and fostering a love for learning in our community.
            Welcome to "The Learner's Garden" where knowledge blooms.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-16 animate-on-scroll">
          <div className="text-center">
            <h2 className="font-playfair text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              To cultivate a thriving community of learners by providing exceptional access to knowledge, fostering
              intellectual curiosity, and creating spaces where ideas flourish. We believe that every individual
              deserves the opportunity to grow, discover, and contribute to the collective wisdom of humanity.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12 animate-on-scroll">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12 animate-on-scroll">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <Badge variant="outline" className="text-lg px-4 py-2 bg-primary/10 text-primary border-primary">
                    {milestone.year}
                  </Badge>
                </div>
                <Card className="flex-1 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center animate-on-scroll">
          <h2 className="font-playfair text-3xl font-bold mb-6">Our Commitment</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Every day, our dedicated team of librarians, educators, and support staff work tirelessly to ensure that The
            Renaissance Library remains a beacon of learning and discovery. We're not just custodians of books—we're
            facilitators of dreams, enablers of research, and champions of intellectual freedom.
          </p>
          <div className="flex justify-center items-center space-x-2 text-primary">
            <Heart className="h-5 w-5 fill-current" />
            <span className="font-semibold">Serving our community with passion since 1985</span>
            <Heart className="h-5 w-5 fill-current" />
          </div>
        </div>
      </div>
    </div>
  )
}
