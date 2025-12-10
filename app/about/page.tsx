"use client"

import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Me</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2 space-y-6">
              <div className="fade-in">
                <h2 className="text-2xl font-bold mb-4">Who am I?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m Anurag Parmar, a professional and enthusiastic programmer. I am a quick learner with a
                  self-learning attitude. I love to explore and learn new technologies, and I am passionate about
                  problem-solving. I love almost all the stacks of web application development and enjoy making the web
                  more open to the world.
                </p>
              </div>

              <div className="fade-in" style={{ animationDelay: "0.1s" }}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am
                  available for any kind of job opportunity that suits my skills and interests.
                </p>
              </div>

              <div className="fade-in" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-xl font-semibold mb-4 text-primary">What I Specialize In:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Building modern, scalable web applications with React and Next.js</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Full-stack development with Node.js, Express, and databases</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Creating responsive and accessible user interfaces</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Database design and optimization with MongoDB and PostgreSQL</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>RESTful API design and GraphQL implementation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Side Info */}
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur border-border hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">Current Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-lg text-bold">Flight singh pvt. ltd.</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Open to Work</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">2nd floor, I-2, Block I, Lajpat Nagar II, Lajpat Nagar, New Delhi, Delhi 110024</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>English</li>
                    <li>Hindi</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
