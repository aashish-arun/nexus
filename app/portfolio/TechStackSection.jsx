'use client'

import { motion } from 'framer-motion'

const tech = [
  'Next.js',
  'React',
  'JavaScript',
  'Tailwind CSS',
  'Node.js',
  'MySQL',
  'Git',
]

export default function TechStackSection() {
  return (
    <section id="techstack" className="py-24 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Tech Stack
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {tech.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  )
}