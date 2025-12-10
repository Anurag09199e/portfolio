"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, Github, Twitter, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Subject:* ${formData.subject}\n\n` +
      `*Message:*\n${formData.message}`
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // WhatsApp number: 8949636194
    const whatsappNumber = "8949636194"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Open WhatsApp Web/App with the pre-filled message
    window.open(whatsappUrl, "_blank")
    
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anuragparamr8888@gmail.com",
      href: "mailto:anurag@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8949636194",
      href: "tel:+919876543210",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "https://www.google.com/maps/place/Flight+Singh/@28.5688598,77.2377279,16z/data=!4m14!1m7!3m6!1s0x6bd99cacfc4e51e5:0x65320611b8f4e428!2sFlight+Singh!8m2!3d28.5691986!4d77.2438042!16s%2Fg%2F11zj50glkk!3m5!1s0x6bd99cacfc4e51e5:0x65320611b8f4e428!8m2!3d28.5691986!4d77.2438042!16s%2Fg%2F11zj50glkk?entry=ttu&g_ep=EgoyMDI1MTEzMC4wIKXMDSoASAFQAw%3D%3D",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.comhttps://github.com/Anurag09199e", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anurag-parmar-b585a6269/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:anurag@example.com", label: "Email" },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6">
              Have a project in mind? Let&apos;s discuss and create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <a key={index} href={info.href} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300 hover:shadow-lg h-30">
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-semibold text-foreground">{info.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                )
              })}

              {/* Social Links */}
              <Card className="bg-card/50 backdrop-blur border-border fade-in" style={{ animationDelay: "0.3s" }}>
                <CardHeader>
                  <CardTitle>Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center"
                          title={social.label}
                        >
                          <Icon size={20} />
                        </a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 fade-in" style={{ animationDelay: "0.1s" }}>
              <Card className="bg-card/50 backdrop-blur border-border">
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors placeholder-muted-foreground text-foreground"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors placeholder-muted-foreground text-foreground"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors placeholder-muted-foreground text-foreground"
                        placeholder="Project inquiry"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors placeholder-muted-foreground text-foreground resize-none"
                        placeholder="Your message here..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full gap-2" disabled={submitted}>
                      {submitted ? "Message Sent!" : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
