'use client'

import { motion } from 'framer-motion'

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl font-bold"
        >
          Hi, I’m <span className="text-blue-500">Your Name</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-xl text-gray-400 text-lg"
        >
          Software Engineer passionate about building scalable, elegant web
          experiences.
        </motion.p>
      </section>
    </main>
  )
}