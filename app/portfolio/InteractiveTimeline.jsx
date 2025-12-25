'use client'

import React, { useState, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const timelineEvents = [
  {
    startDate: '2019',
    endDate: '2020',
    type: 'study',
    title: 'All India Secondary School Examination (AISSE) @ St. Thomas Central School',
    description: '',
    icon: '/timeline/10th.svg',
  },
  {
    startDate: '2021-01',
    endDate: '2022-01',
    type: 'study',
    title: 'All India Senior School Certificate Examination (AISSCE) @ St. Thomas Central School',
    description: '',
    icon: '/timeline/12th.svg',
  },
  {
    startDate: '2022-08',
    endDate: '2023-10',
    type: 'work',
    title: 'Cashier @ Kairali Fresh',
    description: '',
    icon: '/timeline/kairalifresh.svg',
  },
  {
    startDate: '2023-11',
    endDate: '2024-07',
    type: 'work',
    title: 'Cashier @ 1000 Lights Food Court',
    description: '',
    icon: '/timeline/1000lighsfoodcourt.svg',
  },
  {
    startDate: '2024-09',
    endDate: '2026-04',
    type: 'study',
    title: 'Diploma in Software Development @ SAIT',
    description: '',
    icon: '/timeline/diploma.svg',
  },
  {
    startDate: '2024-11',
    endDate: 'Current',
    type: 'work',
    title: 'Gas Bar Clerk Cashier @ Calgary Co-op',
    description: '',
    icon: '/timeline/calgarycoop.svg',
  },
]

function TimelineEvent({ event, isActive, isLeft, index }) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <motion.div
      className={`mb-28 flex items-center ${
        isLeft ? 'flex-row-reverse' : 'flex-row'
      }`}
      initial={{ opacity: 0, x: isLeft ? -80 : 80, y: 40 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.12, duration: 0.8, ease: 'easeOut' }}
    >
      {/* Content */}
      <motion.div
        className={`w-1/2 ${
          isLeft ? 'text-right pr-16' : 'pl-16'
        }`}
        animate={{
          scale: isActive ? 1 : 0.96,
          opacity: isActive ? 1 : 0.65,
        }}
        transition={{ duration: 0.3 }}
      >
        <span className="inline-block mb-3 px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm tracking-wide">
          {event.startDate} – {event.endDate}
        </span>

        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          {event.title}
        </h3>

        <motion.p
          className="text-gray-400 text-sm leading-relaxed"
          style={{ y }}
        >
          {event.description}
        </motion.p>
      </motion.div>

      {/* Icon */}
      <div className="relative z-10">
        <motion.div
          className="w-18 h-18 rounded-full bg-black border border-white/10 shadow-xl flex items-center justify-center"
          animate={{
            scale: isActive ? 1.25 : 1,
            rotate: isActive ? 360 : 0,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <Image
            src={event.icon}
            width={38}
            height={38}
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

  // ✅ SORT BY START DATE (OLD → NEW)
  const sortedEvents = useMemo(() => {
    return [...timelineEvents].sort(
      (a, b) => new Date(a.startDate) - new Date(b.startDate)
    )
  }, [])

  return (
    <div className="relative py-12">
      {sortedEvents.map((event, index) => {
        const eventKey = `${event.startDate}-${event.title}`

        return (
          <div
            key={eventKey}
            onMouseEnter={() => setActiveEvent(eventKey)}
            onMouseLeave={() => setActiveEvent(null)}
          >
            <TimelineEvent
              event={event}
              isActive={activeEvent === eventKey}
              isLeft={event.type === 'work'}
              index={index}
            />
          </div>
        )
      })}
    </div>
  )
}

