"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Users, BookOpen, Calendar, Wifi, Award } from "lucide-react"

const membershipPlans = [
  {
    name: "Basic Membership",
    price: "Free",
    period: "",
    description: "Perfect for casual readers and students",
    features: [
      "Borrow up to 5 books at a time",
      "Access to main collection",
      "Free WiFi access",
      "Basic computer access (2 hours/day)",
      "Access to reading rooms",
      "Community events",
    ],
    popular: false,
    color: "border-border",
  },
  {
    name: "Premium Membership",
    price: "$15",
    period: "/month",
    description: "Ideal for avid readers and researchers",
    features: [
      "Borrow up to 15 books at a time",
      "Access to premium collection",
      "Priority book reservations",
      "Extended computer access (6 hours/day)",
      "Access to study rooms",
      "Free printing (50 pages/month)",
      "Workshop discounts",
      "Digital resource access",
    ],
    popular: true,
    color: "border-primary",
  },
  {
    name: "Scholar Membership",
    price: "$35",
    period: "/month",
    description: "For serious researchers and academics",
    features: [
      "Unlimited book borrowing",
      "Access to rare books collection",
      "Private study room access",
      "Unlimited computer access",
      "Research assistance",
      "Free printing (200 pages/month)",
      "Priority workshop enrollment",
      "Inter-library loan services",
      "24/7 digital access",
      "Personal librarian consultation",
    ],
    popular: false,
    color: "border-secondary",
  },
]

const benefits = [
  {
    icon: BookOpen,
    title: "Extensive Collection",
    description: "Access to over 50,000 books, journals, and digital resources",
  },
  {
    icon: Wifi,
    title: "Modern Facilities",
    description: "High-speed internet, comfortable seating, and quiet study spaces",
  },
  {
    icon: Calendar,
    title: "Events & Workshops",
    description: "Regular educational programs, book clubs, and cultural events",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with fellow learners and participate in discussion groups",
  },
]

export function MembershipPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-balance mb-4">
            Join <span className="text-primary">The Renaissance Library</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Become part of our learning community and unlock access to knowledge, resources, and experiences that will
            enrich your intellectual journey
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Membership Plans */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12 animate-on-scroll">
            Choose Your Membership Plan
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll ${plan.color} ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="font-playfair text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary hover:bg-secondary text-primary-foreground"
                        : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    {plan.price === "Free" ? "Sign Up Free" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="font-playfair text-2xl font-bold mb-4">Ready to Join?</h2>
                <p className="text-muted-foreground">
                  Fill out the form below to get started with your membership application
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <Input placeholder="Your first name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <Input placeholder="Your last name" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input type="email" placeholder="your.email@example.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Address</label>
                  <Input placeholder="Street address" />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">City</label>
                    <Input placeholder="City" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">State</label>
                    <Input placeholder="State" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">ZIP Code</label>
                    <Input placeholder="12345" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Membership Plan</label>
                  <select className="w-full p-3 border border-border rounded-lg bg-background">
                    <option value="">Select a plan</option>
                    <option value="basic">Basic Membership (Free)</option>
                    <option value="premium">Premium Membership ($15/month)</option>
                    <option value="scholar">Scholar Membership ($35/month)</option>
                  </select>
                </div>

                <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground text-lg py-6">
                  <Award className="h-5 w-5 mr-2" />
                  Submit Application
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>
                  By submitting this form, you agree to our terms of service and privacy policy. We'll contact you
                  within 24 hours to complete your membership setup.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
