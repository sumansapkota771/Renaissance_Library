"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, Clock } from "lucide-react"

const milestones = [
  { year: "1995", event: "Library Founded", description: "Established with a vision to create a learning sanctuary" },
  { year: "2005", event: "Digital Expansion", description: "Introduced digital catalog and online resources" },
  { year: "2015", event: "Community Programs", description: "Launched educational workshops and reading clubs" },
  { year: "2023", event: "Modern Renaissance", description: "Renovated facilities with state-of-the-art technology" },
]

const features = [
  {
    icon: BookOpen,
    title: "Vast Collection",
    description: "Over 50,000 books spanning literature, science, history, and more",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "A welcoming space for learners, researchers, and book enthusiasts",
  },
  {
    icon: Award,
    title: "Expert Curation",
    description: "Carefully selected books by our team of librarians and scholars",
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description: "Open 24/7 with digital access and flexible borrowing options",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-on-scroll">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-balance mb-6">
                About <span className="text-primary">The Renaissance</span> Library
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded on the principle that knowledge should be accessible to all, The Renaissance Library has been a
                beacon of learning and intellectual growth for nearly three decades. Our mission is to cultivate a love
                for reading, research, and lifelong learning in our community.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that every book holds the power to transform minds and inspire greatness. Our carefully
                curated collection spans centuries of human knowledge, from ancient wisdom to cutting-edge discoveries,
                creating truly "The Learner's Garden" where ideas flourish.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="animate-on-scroll">
            <h3 className="font-playfair text-2xl font-bold text-center mb-8">Our Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                      {milestone.year.slice(-2)}
                    </div>

                    {/* Content */}
                    <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{milestone.event}</h4>
                          <span className="text-sm text-muted-foreground">{milestone.year}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
