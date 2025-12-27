'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="border-t border-white/10 mt-32"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span>© {new Date().getFullYear()} Your Name. All rights reserved.</span>

        <div className="flex gap-6">
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-white transition">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-white transition">LinkedIn</a>
          <a href="mailto:you@email.com" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </motion.footer>
  )
}

