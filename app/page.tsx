"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="fade-in space-y-6">
              <div className="space-y-2">
                <p className="text-lg text-primary font-semibold">Hello, this is</p>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Anurag</span>
                  <span className="mx-3 text-primary">,</span>
                  <br />
                  <span className="text-foreground">I&apos;m a Professional</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    Full Stack Developer
                  </span>
                </h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                I build accessible, high-performance web applications using modern technologies like React, Next.js, and
                Node.js. Passionate about creating beautiful and functional user experiences.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:anurag@example.com"
                  className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <Mail size={24} />
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-8">
                <Link href="/contact">
                  <Button size="lg" className="gap-2">
                    Contact Me <Mail size={18} />
                  </Button>
                </Link>
                <a href="https://drive.google.com/file/d/1J8514YnI85UpjrPphmGWd-iD6fcQoJDU/view?usp=sharing">
                  <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                    Get Resume <ExternalLink size={18} />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Code Block */}
            <div className="fade-in animation-delay-200">
              <div className="code-block">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-sm font-mono text-accent overflow-x-auto">
                  {`const coder = {
  name: 'Anurag Parmar',
  skills: ['React', 'Next.js', 'TypeScript',
           'Express', 'Node.js', 'MongoDB'],
  
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length > 5
    )
  }
};`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-muted/30 border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "5+", label: "Projects Completed" },
                { number: "6+", label: "Months Experience" },
                // { number: "30+", label: "Happy Clients" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="text-center py-10">
                  <p className="text-4xl font-bold text-primary">{stat.number}</p>
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </div>
              ))}
              <div className="flex justify-center items-center">
                <Image 
                  src="/anuu.jpeg" 
                  alt="Anurag Parmar" 
                  width={150} 
                  height={150}
                  className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
