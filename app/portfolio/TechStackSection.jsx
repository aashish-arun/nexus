'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const techCategories = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'React Native', 'Tailwind CSS'],
  Backend: ['Java', 'C#', 'Python', 'Oracle APEX', 'Firebase', 'Node.js'],
  Database: ['MySQL', 'Oracle Database', 'SQL', 'PL/SQL'],
  DevOps: ['Git', 'GitHub', 'Docker'],
  Design: ['Figma', 'Software Ideas Modular'],
  OS: ['Windows', 'Windows Server', 'Linux', 'Linux Server'],
}

// Flatten all tech for "All" filter
const allTech = Object.values(techCategories).flat()

export default function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Determine which techs to show
  const techToShow =
    selectedCategory === 'All' ? allTech : techCategories[selectedCategory]

  const categories = ['All', ...Object.keys(techCategories)]

  return (
    <section id="techstack" className="py-24 px-6 text-center bg-black text-white">
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Tech Stack
      </motion.h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === cat
                ? 'bg-white text-gray-900'
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {techToShow.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur hover:scale-105 hover:bg-white/20 transition-all duration-300"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
