"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users } from "lucide-react"

const courses = [
  {
    title: "Basic Madani Qaida",
    description: "Foundation of Quranic reading",
    features: ["Letter recognition", "Basic pronunciation", "Introductory Tajweed"],
    duration: "3 months",
    level: "Beginner",
  },
  {
    title: "Tajweed Course",
    description: "Perfect your Quranic recitation",
    features: ["Advanced pronunciation", "Tajweed rules", "Practical application"],
    duration: "6 months",
    level: "Intermediate",
  },
  {
    title: "Hifz Program",
    description: "Memorization of the Holy Quran",
    features: ["Structured memorization", "Regular revision", "Certification"],
    duration: "2-3 years",
    level: "Advanced",
  },
]

export function Courses() {
  const handleEnrollClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=923171215124", "_blank")
  }

  return (
    <div className="container mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Our Courses</h2>
        <p className="text-cyan-100/80 max-w-2xl mx-auto">
          Choose from our carefully designed courses to begin your journey of Quranic learning
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-slate-800/50 border-cyan-500/20 backdrop-blur-sm hover:bg-slate-700/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-white">{course.title}</CardTitle>
                <p className="text-cyan-100/80">{course.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-cyan-100/80">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-cyan-100/80">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span>{course.level}</span>
                  </div>
                  <ul className="space-y-2">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-cyan-100/80">
                        <BookOpen className="w-4 h-4 text-cyan-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button onClick={handleEnrollClick} className="w-full bg-cyan-500 hover:bg-cyan-600 text-white mt-4">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

