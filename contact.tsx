"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <div className="container mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-cyan-100/80">Begin your journey of Quranic learning today</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-medium">Phone</h3>
                <p className="text-cyan-100/80">+92 317 1215124</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <p className="text-cyan-100/80">razamuneeb173@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-medium">Skype</h3>
                <p className="text-cyan-100/80">Schedule a free consultation</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" className="bg-slate-800/50 border-cyan-500/20" />
            <Input type="email" placeholder="Your Email" className="bg-slate-800/50 border-cyan-500/20" />
            <Textarea placeholder="Your Message" className="bg-slate-800/50 border-cyan-500/20 min-h-[120px]" />
            <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">Send Message</Button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

