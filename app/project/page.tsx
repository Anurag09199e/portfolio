"use client"

import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function project() {
  const projects = [
    {
      title: "Elefanjoy",
      description: "An ethical elephant sanctuary website in Jaipur, India. Built a comprehensive platform showcasing elephant experiences, tours, and sanctuary information. The website features booking functionality, gallery displays, and detailed information about ethical elephant interactions.",
      url: "https://elefanjoy.com/",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      features: [
        "Tour booking system",
        "Gallery showcase",
        "Responsive design",
        "SEO optimized",
        "TripAdvisor integration"
      ]
    },
    {
      title: "FlightSingh",
      description: "A comprehensive flight booking and travel services platform. Developed a full-featured website for flight reservations, travel packages, and related services with modern UI/UX and seamless user experience.",
      url: "https://www.flightsingh.com/",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      features: [
        "Flight booking interface",
        "Travel packages",
        "User-friendly navigation",
        "Responsive design",
        "Modern UI/UX"
      ]
    },
    {
      title: "Anurag Makeup Artist",
      description: "A professional makeup artist portfolio website for Anurag Chanda, showcasing services across Gurgaon, Delhi, and NCR. Built a beautiful, modern website featuring service packages, portfolio gallery, client testimonials, and appointment booking functionality.",
      url: "https://annu-makeup.netlify.app/",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      features: [
        "Service showcase (Bridal, Party, Photoshoot)",
        "Portfolio gallery",
        "Client testimonials",
        "Contact form",
        "Responsive design",
        "Appointment booking"
      ]
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-16 fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">My Projects</h1>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
                Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge and learning experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary hover:border-l-accent"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" />
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-foreground">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button className="w-full gap-2 group-hover:bg-accent transition-colors">
                          Visit Website <ExternalLink size={16} />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
