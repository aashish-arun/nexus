'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useMemo } from 'react'

const timelineEvents = [
  {
    startDate: '2019',
    endDate: '2020',
    type: 'study',
    title: 'All India Secondary School Examination (AISSE) @ St. Thomas Central School',
    icon: '/timeline/10th.svg',
  },
  {
    startDate: '2021-01',
    endDate: '2022-01',
    type: 'study',
    title: 'All India Senior School Certificate Examination (AISSCE) @ St. Thomas Central School',
    icon: '/timeline/12th.svg',
  },
  {
    startDate: '2022-08',
    endDate: '2023-10',
    type: 'work',
    title: 'Cashier @ Kairali Fresh',
    icon: '/timeline/kairalifresh.svg',
  },
  {
    startDate: '2023-11',
    endDate: '2024-07',
    type: 'work',
    title: 'Cashier @ 1000 Lights Food Court',
    icon: '/timeline/1000lighsfoodcourt.svg',
  },
  {
    startDate: '2024-09',
    endDate: '2026-04',
    type: 'study',
    title: 'Diploma in Software Development @ SAIT',
    icon: '/timeline/diploma.svg',
  },
  {
    startDate: '2024-11',
    endDate: 'Current',
    type: 'work',
    title: 'Gas Bar Clerk Cashier @ Calgary Co-op',
    icon: '/timeline/calgarycoop.svg',
  },
]

/* YYYY or YYYY-MM → month index */
const toMonthIndex = (date) => {
  if (date === 'Current') {
    const now = new Date()
    return now.getFullYear() * 12 + now.getMonth()
  }
  const [y, m = '01'] = date.split('-')
  return parseInt(y) * 12 + (parseInt(m) - 1)
}

export default function TimeBasedTimeline() {
  const events = useMemo(() => {
    const months = timelineEvents.flatMap(e => [
      toMonthIndex(e.startDate),
      toMonthIndex(e.endDate),
    ])

    const min = Math.min(...months)
    const max = Math.max(...months)
    const span = max - min || 1

    return timelineEvents.map(e => {
      const start = ((toMonthIndex(e.startDate) - min) / span) * 100
      const end = ((toMonthIndex(e.endDate) - min) / span) * 100

      return {
        ...e,
        start,
        end,
        height: end - start,
        isWork: e.type === 'work',
      }
    })
  }, [])

  return (
    <section className="py-24 bg-black">
      <div className="relative max-w-6xl mx-auto px-6 h-[900px]">

        {/* CENTER TIMELINE */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />

        {events.map((event, i) => (
          <motion.div
            key={event.title}
            className="absolute inset-x-0"
            style={{ top: `${event.start}%` }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* DATE BUBBLE (start date) */}
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="px-4 py-1.5 rounded-full bg-black border border-blue-500/40 text-sm text-blue-300">
                {event.startDate}
              </div>
            </div>

            {/* CURLY BRACE (duration) */}
            <div
              className={`absolute top-0 ${
                event.isWork
                  ? 'left-1/2 ml-4'
                  : 'right-1/2 mr-4'
              }`}
              style={{ height: `${event.height}%` }}
            >
              <div
                className={`text-blue-400 text-4xl leading-none ${
                  event.isWork ? 'rotate-0' : 'rotate-180'
                }`}
                style={{
                  height: '100%',
                  writingMode: 'vertical-rl',
                }}
              >
                {event.isWork ? '{' : '}'}
              </div>
            </div>

            {/* CARD */}
            <motion.div
              initial={{ x: event.isWork ? -50 : 50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.45 }}
              className={`mt-8 flex ${
                event.isWork
                  ? 'justify-start pr-24'
                  : 'justify-end pl-24'
              }`}
            >
              <div className="w-[42%] bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <Image src={event.icon} width={22} height={22} alt="" />
                  <h3 className="text-base font-semibold">
                    {event.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  {event.startDate} – {event.endDate}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
