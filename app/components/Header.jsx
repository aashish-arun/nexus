'use client'

import { motion } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const isPortfolio = pathname.startsWith('/portfolio')

  const toggleMode = () => {
    router.push(isPortfolio ? '/website' : '/portfolio')
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/70 border-b border-white/10 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <span
          onClick={() => scrollToSection('hero')}
          className="font-bold text-lg tracking-wide cursor-pointer hover:text-blue-400 transition-colors"
        >
          MyPortfolio
        </span>

        {/* Navigation */}
        {isPortfolio && (
          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition">
              About Me
            </button>
            <button onClick={() => scrollToSection('techstack')} className="hover:text-white transition">
              Tech Stack
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-white transition">
              Projects
            </button>
            <button onClick={() => scrollToSection('timeline')} className="hover:text-white transition">
              Timeline
            </button>
          </nav>
        )}

        {/* Toggle Button */}
        <button
          onClick={toggleMode}
          className="relative w-40 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 flex items-center cursor-pointer shadow-lg hover:shadow-xl transition-all"
        >
          {/* Slider */}
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute top-1 bottom-1 w-1/2 rounded-full bg-black shadow-md"
            style={{
              left: isPortfolio ? '0%' : '50%', // stays inside bounds
            }}
          />

          {/* Labels */}
          <span
            className={`w-1/2 text-center z-10 text-white font-semibold text-sm select-none ${
              isPortfolio ? 'opacity-100' : 'opacity-70'
            }`}
          >
            Portfolio
          </span>
          <span
            className={`w-1/2 text-center z-10 text-white font-semibold text-sm select-none ${
              !isPortfolio ? 'opacity-100' : 'opacity-70'
            }`}
          >
            Website
          </span>
        </button>
      </div>
    </motion.header>
  )
}
