'use client'

import { motion } from 'framer-motion'

const projects = [
  { title: 'Gym Management App', description: 'Full-stack app using Blazor and MySQL.', link: '#' },
  { title: 'Portfolio Website', description: 'Next.js portfolio with Framer Motion.', link: '#' },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 text-center">
      <motion.h2 className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project, i) => (
          <motion.div key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
