"use client"

import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  const education = [
    {
      icon: GraduationCap,
      period: "2023 - running",
      title: "Bachelor of  Computer Application",
      institution: "Maharaja surajmal university bharatpur",
      description: "Focus on web development, data structures, and software engineering principles.",
      // achievements: ["CGPA: 8.5/10", "Dean's List", "Led tech club initiatives"],
    },
    {
      icon: Award,
      period: "2023 - 2024",
      title: "Full Stack Development Certification",
      institution: "Naresh it hydrabad",
      description: "Comprehensive full-stack web development course covering modern technologies.",
      // achievements: ["Certificate of Completion", "100+ hours of coursework"],
    },
  ]

  const certifications = [
    {
      title: "ReactJS Advanced Patterns",
      
    },
    {
      title: "Next.js Masterclass",
      
    },
    {
      title: "TypeScript for JavaScript Developers",
     
    },
    {
      title: "Node.js and Express",
      
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Education & Certifications</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => {
                const Icon = edu.icon
                return (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300 fade-in overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-12 gap-0">
                        <div className="md:col-span-1 bg-gradient-to-b from-primary to-accent p-6 flex items-center justify-center">
                          <Icon size={32} className="text-primary-foreground" />
                        </div>
                        <div className="md:col-span-11 p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <h3 className="text-2xl font-bold text-foreground">{edu.title}</h3>
                            <span className="text-sm font-medium text-primary">{edu.period}</span>
                          </div>
                          <p className="text-lg text-accent font-semibold mb-2">{edu.institution}</p>
                          <p className="text-muted-foreground mb-4">{edu.description}</p>
                          {/* <div className="flex flex-wrap gap-2">
                            {edu.achievements.map((achievement, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div> */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary"></h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300 hover:shadow-lg fade-in"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Award size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-foreground">{cert.title}</h4>
                        
                      </div>
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
