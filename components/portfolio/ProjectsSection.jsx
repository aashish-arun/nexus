'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-950 text-white">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl overflow-hidden bg-gray-900 border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Project Image */}
            <div className="relative h-56 sm:h-48 lg:h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Info */}
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View More Link */}
              <Link 
                href={`/projects/${project.slug}`}
                className="mt-auto text-blue-400 hover:text-blue-500 font-medium transition-colors"
              >
                View More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
