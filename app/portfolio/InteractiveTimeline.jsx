'use client'

import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const timelineEvents = [
  {
    date: '2024-10',
    title: 'SDE I (L4) at Amazon',
    description:
      'Working as a Software Development Engineer at Amazon, building scalable applications impacting millions.',
    icon: '/timeline/',
  },
  {
    date: '2024-07',
    title: 'Software Engineer at ProgressSoft',
    description:
      'Associate Java Software Engineer working with Spring Boot web applications.',
    icon: '/journey_logo/progressoft.svg',
  },
  {
    date: '2024-03',
    title: 'Microsoft Certified',
    description: 'Microsoft Certified: Azure AI Fundamentals.',
    icon: '/journey_logo/azure-ai-fundamentals.svg',
  },
  {
    date: '2023-09',
    title: 'Internship at PwC',
    description:
      'Generative AI Engineer intern working on AI-powered web apps.',
    icon: '/journey_logo/pwc.svg',
  },
]

function TimelineEvent({ event, isActive, isLeft, index }) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <motion.div
      className={`mb-16 flex items-center ${
        isLeft ? 'flex-row-reverse' : 'flex-row'
      }`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: index * 0.2, duration: 1 }}
    >
      {/* Content */}
      <motion.div
        className={`w-1/2 ${isLeft ? 'text-right pr-12' : 'pl-12'}`}
        animate={{
          scale: isActive ? 1 : 0.98,
          opacity: isActive ? 1 : 0.7,
        }}
      >
        <span className="inline-block mb-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
          {event.date}
        </span>

        <h3 className="text-xl font-bold mb-2">{event.title}</h3>

        <motion.p className="text-gray-400 text-sm" style={{ y }}>
          {event.description}
        </motion.p>
      </motion.div>

      {/* Icon */}
      <div className="relative">
        <motion.div
          className="relative w-16 h-16 rounded-full bg-black border border-white/10 shadow-lg flex items-center justify-center"
          animate={{
            scale: isActive ? 1.2 : 1,
            rotate: isActive ? 360 : 0,
          }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={event.icon}
            width={36}
            height={36}
            alt={event.title}
            className="object-contain"
          />
        </motion.div>
      </div>

      <div className="w-1/2" />
    </motion.div>
  )
}

export default function InteractiveTimeline() {
  const [activeEvent, setActiveEvent] = useState(null)

  return (
    <div className="relative py-8">
      {timelineEvents.map((event, index) => (
        <div
          key={event.date}
          onMouseEnter={() => setActiveEvent(event.date)}
          onMouseLeave={() => setActiveEvent(null)}
        >
          <TimelineEvent
            event={event}
            isActive={activeEvent === event.date}
            isLeft={index % 2 === 0}
            index={index}
          />
        </div>
      ))}
    </div>
  )
}
