"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs } from "./tabs"
import { BackgroundEffects } from "./background-effects"
import { Features } from "./features"
import { Contact } from "./contact"
import { Courses } from "./courses"
import { Footer } from "./footer"

const sections = ["home", "courses", "features", "contact"]

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      const windowHeight = window.innerHeight
      const sectionIndex = Math.floor(position / windowHeight)
      setActiveSection(sections[sectionIndex] || sections[sections.length - 1])
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToCourses = () => {
    const coursesSection = document.getElementById("courses")
    coursesSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <BackgroundEffects />

      {/* Logo in top left */}
      <div className="fixed top-4 left-4 z-50 w-48">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitlesd-lp36uaSLsIUWA0rrqN99Gn3kMcibNq.png"
          alt="MOQ Academy Logo"
          width={200}
          height={60}
          className="hover:scale-105 transition-transform"
        />
      </div>

      {/* Fixed Navigation - Centered */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <Tabs activeSection={activeSection} />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {/* Arabic Calligraphy */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mylogo-J3Nuuf45hR2rDqkjpQCiXqX6o51I20.png"
                alt="Arabic Calligraphy"
                width={600}
                height={120}
                className="mx-auto mb-12"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <p className="text-2xl md:text-3xl text-cyan-100 font-light">
                Embark on a Journey of Quranic Learning with Modern Technology
              </p>
              <Button
                size="lg"
                onClick={scrollToCourses}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-12 py-6 text-lg rounded-full 
                          shadow-[0_0_15px_rgba(0,255,242,0.5)] hover:shadow-[0_0_25px_rgba(0,255,242,0.7)]
                          transition-all duration-300 -mt-4"
              >
                Begin Your Journey
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <section id="courses" className="min-h-screen">
        <Courses />
      </section>

      <section id="features" className="min-h-screen">
        <Features />
      </section>

      <section id="contact" className="min-h-screen">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}

