'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import InteractiveTimeline from './InteractiveTimeline'

export default function TimelineSection() {
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [1, 1, 0.85, 0]
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [1, 1, 0.96, 0.92]
  )

  return (
    <section
      id="timeline"
      className="py-24 relative overflow-hidden bg-black"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Gradient Overlays */}
      <motion.div
        className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-500/10 to-transparent"
        style={{ opacity, scale }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-full h-96 bg-linear-to-t from-purple-500/10 to-transparent"
        style={{ opacity, scale }}
      />

      {/* Floating Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-24 -left-24 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 120, 0], y: [0, 60, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 -right-28 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -140, 0], y: [0, -80, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container mx-auto px-6 sm:px-10 md:px-20 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold inline-block relative">
            <span className="bg-linear-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              My Timeline
            </span>
            <motion.div
              className="absolute -bottom-3 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-full"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8 }}
            />
          </h2>

          <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg">
            A chronological view of my academic background and professional
            experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-blue-500/50 to-transparent" />

          <InteractiveTimeline />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
    </section>
  )
}
