'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { techCategories, allTech } from '@/data/techStack'

export default function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const techToShow =
    selectedCategory === 'All'
      ? allTech
      : techCategories[selectedCategory]

  const categories = ['All', ...Object.keys(techCategories)]

  return (
    <section
      id="techstack"
      className="py-24 px-6 text-center bg-gray-950 text-white"
    >
      {/* Section Title */}
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
            className={`px-5 py-2 rounded-full font-medium text-sm sm:text-base transition-colors duration-300 ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
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
            className="px-5 py-3 rounded-xl bg-gray-800/50 border border-gray-700 backdrop-blur-sm hover:scale-105 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
