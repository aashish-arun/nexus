'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import InteractiveTimeline from './InteractiveTimeline'

export default function TimelineSection() {
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.8, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.95, 0.9])

  return (
    <section id="timeline" className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <motion.div
        className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-500/10 to-transparent"
        style={{ opacity, scale }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-full h-96 bg-linear-to-t from-purple-500/10 to-transparent"
        style={{ opacity, scale }}
      />

      {/* Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 -right-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-16 flex flex-col items-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-center mb-16"
        >
          <motion.h2
            className="text-5xl sm:text-6xl font-bold relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-linear-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              My Professional Journey
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-full"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8 }}
            />
          </motion.h2>

          <motion.p
            className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Explore my professional path and key milestones that shaped my career in software development and technology.
          </motion.p>
        </motion.div>

        {/* Timeline Component */}
        <motion.div
          className="w-full max-w-6xl relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-blue-500/50 to-transparent" />
          <InteractiveTimeline />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/50 to-transparent pointer-events-none" />
    </section>
  )
}
