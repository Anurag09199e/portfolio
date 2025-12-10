"use client"

import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
  const skills = {
    Frontend: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 95 },
    ],
    Backend: [
      { name: "Node.js", level: 90 },
      // { name: "Express.js", level: 85 },
      // { name: "Python", level: 75 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 80 },
      { name: "Authentication", level: 85 },
    ],
    Databases: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "Firebase", level: 80 },
      // { name: "Prisma ORM", level: 85 },
      // { name: "Redis", level: 75 },
    ],
    "Tools & Platforms": [
      { name: "Git/GitHub", level: 92 },
      { name: "Docker", level: 75 },
      { name: "Vercel", level: 90 },
      { name: "AWS", level: 70 },
      { name: "VS Code", level: 95 },
      { name: "Cursor", level: 95 },
    ],
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Skills & Expertise</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6">Here are the technologies and tools I specialize in</p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <Card
                key={category}
                className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300 hover:shadow-lg fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skillList.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <Card className="bg-card/50 backdrop-blur border-border fade-in" style={{ animationDelay: "0.4s" }}>
            <CardHeader>
              <CardTitle>Additional Competencies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Responsive Design",
                  "Performance Optimization",
                  "Web Accessibility",
                  "SEO Optimization",
                  "Testing (Jest, Vitest)",
                 
                  "Code Review",
                  "System Design",
                  "Problem Solving",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-3 rounded-lg bg-muted border border-border hover:border-primary hover:bg-primary/5 transition-all cursor-default text-center"
                  >
                    <span className="font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  )
}
