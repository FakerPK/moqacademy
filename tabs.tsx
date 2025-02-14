"use client"

import { motion } from "framer-motion"
import { Book, Home, Users, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "courses", label: "Courses", icon: Book },
  { id: "features", label: "Features", icon: Users },
  { id: "contact", label: "Contact", icon: Phone },
]

export function Tabs({ activeSection }: { activeSection: string }) {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="relative bg-slate-800/40 backdrop-blur-md rounded-full p-2 border border-cyan-500/20
                 shadow-[0_0_15px_rgba(0,255,242,0.15)] hover:shadow-[0_0_20px_rgba(0,255,242,0.25)]
                 transition-shadow duration-300"
    >
      <div className="flex items-center gap-1">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
              "hover:text-cyan-400",
              activeSection === tab.id ? "text-cyan-400" : "text-white/70",
            )}
          >
            <span className="relative z-10 flex items-center gap-2">
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </span>
            {activeSection === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-cyan-950/50 rounded-full border border-cyan-500/50
                         shadow-[0_0_10px_rgba(0,255,242,0.2)]"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
          </a>
        ))}
      </div>
    </motion.div>
  )
}

