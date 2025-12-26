'use client'
// who what how skiils 
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function AboutMeSection() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Hero Title */}
      <motion.h1 
        className="text-6xl sm:text-7xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Aashish Arun
      </motion.h1>

      {/* Hero Subtitle */}
      <motion.p 
        className="text-xl sm:text-2xl text-gray-400 max-w-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        I build modern web applications and love exploring new technologies.
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center gap-6 text-gray-400 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
          <Github size={28} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
          <Linkedin size={28} />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
          <Twitter size={28} />
        </a>
      </motion.div>
    </section>
  )
}
