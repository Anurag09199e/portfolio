"use client"

import Image from "next/image"

import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function project() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">  
           <div className="mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Me</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="text-center border-l-4 border-l-sky-500">
                <CardHeader className="flex items-center justify-center gap-3 text-xl">
                 
                  Passion
                </CardHeader>
              
              <CardContent>
              <Image
                    src="/anuu.jpeg"
                    alt="Passion icon"
                    width={32}
                    height={32}
                    className=" object-cover"
                  />
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-l-sky-500">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  
                </div>
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-l-sky-500">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  
                </div>
                <CardTitle className="text-xl">Trust</CardTitle>
              </CardHeader>
              <CardContent>
               
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-l-sky-500">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  
                </div>
                <CardTitle className="text-xl">Adventure</CardTitle>
              </CardHeader>
              <CardContent>
                
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </main>
    </>
  )
}
