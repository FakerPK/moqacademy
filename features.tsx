"use client"

import { motion } from "framer-motion"
import { Book, Users, Clock, GraduationCap, MessageCircle, WebcamIcon as Skype } from "lucide-react"

const features = [
  {
    icon: Book,
    title: "Quran Recitation",
    description: "Learn proper Tajweed and pronunciation",
  },
  {
    icon: Skype,
    title: "Online Sessions",
    description: "30-minute Skype sessions",
  },
  {
    icon: Users,
    title: "All Age Groups",
    description: "Courses tailored for every age",
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    description: "5 days a week availability",
  },
  {
    icon: GraduationCap,
    title: "Certified Teachers",
    description: "Learn from verified Qari & Qariya",
  },
  {
    icon: MessageCircle,
    title: "One-to-One Classes",
    description: "Personalized attention and feedback",
  },
]

export function Features() {
  return (
    <div className="container mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-6 rounded-2xl bg-slate-800/50 border border-cyan-500/20 backdrop-blur-sm hover:bg-slate-700/50 transition-all hover:scale-105"
          >
            <feature.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-cyan-100/80">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

