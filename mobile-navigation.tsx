"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Book, Home, Users, Phone } from "lucide-react"

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "courses", icon: Book, label: "Courses" },
  { id: "features", icon: Users, label: "Features" },
  { id: "contact", icon: Phone, label: "Contact" },
]

export function MobileNavigation({ activeSection }: { activeSection: string }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  const ActiveIcon = navItems.find((item) => item.id === activeSection)?.icon || Home

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        className="bg-slate-800/90 backdrop-blur-md rounded-full border border-cyan-500/20
                   shadow-[0_0_15px_rgba(0,255,242,0.15)] overflow-hidden"
        animate={{
          width: isExpanded ? 280 : 64,
          height: isExpanded ? 64 : 64,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <button onClick={toggleExpand} className="w-full h-full flex items-center justify-center text-cyan-400">
          {isExpanded ? (
            <div className="flex w-full justify-around">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`p-2 rounded-full ${activeSection === item.id ? "bg-cyan-500/20" : ""}`}
                  onClick={() => setIsExpanded(false)}
                >
                  <item.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          ) : (
            <ActiveIcon className="w-6 h-6" />
          )}
        </button>
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-800/90 backdrop-blur-md
                       rounded-lg border border-cyan-500/20 shadow-lg p-2 w-64"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block px-4 py-2 rounded-md ${
                  activeSection === item.id ? "bg-cyan-500/20 text-cyan-400" : "text-white hover:bg-cyan-500/10"
                }`}
                onClick={() => setIsExpanded(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

