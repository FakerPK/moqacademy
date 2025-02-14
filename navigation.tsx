"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, BookOpen, Users, Phone, Menu } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <motion.div animate={isOpen ? "open" : "closed"} className="relative">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-cyan-500 border-cyan-400 text-white hover:bg-cyan-600"
        >
          <Menu />
        </Button>

        {isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute top-16 -left-20 bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 w-[200px] border border-cyan-500/20"
          >
            <div className="flex flex-col space-y-2">
              {[
                { icon: Home, label: "Home" },
                { icon: BookOpen, label: "Courses" },
                { icon: Users, label: "Teachers" },
                { icon: Phone, label: "Contact" },
              ].map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="flex items-center justify-start space-x-2 text-white hover:text-cyan-400 hover:bg-slate-700/50"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  )
}

