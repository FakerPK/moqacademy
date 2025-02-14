"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const [message, setMessage] = useState("")

  const handleWhatsAppMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message)
      window.open(`https://api.whatsapp.com/send/?phone=923171215124&text=${encodedMessage}`, "_blank")
    }
  }

  return (
    <footer className="bg-slate-900/90 border-t border-cyan-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Quick Message */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Send a Quick Message</h3>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="bg-slate-800/50 border-cyan-500/20 min-h-[120px]"
            />
            <Button onClick={handleWhatsAppMessage} className="w-full bg-green-500 hover:bg-green-600 text-white">
              Send via WhatsApp
            </Button>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center
                         hover:bg-cyan-500/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center
                         hover:bg-cyan-500/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center
                         hover:bg-cyan-500/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center
                         hover:bg-cyan-500/20 transition-colors"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

