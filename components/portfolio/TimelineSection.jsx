'use client'

import { GraduationCap, Briefcase } from 'lucide-react'
import { timelineEvents, formatDate } from '@/data/timeline'

export default function TimelineSection() {
  // DESCENDING ORDER BY START DATE (LATEST → EARLIEST)
  const sortedEvents = [...timelineEvents].sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  )

  return (
    <section className="py-28 px-6 bg-gray-950 text-white">
      <h2 className="text-5xl font-extrabold text-center mb-24 tracking-tight">
        Timeline
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-transparent via-gray-600 to-transparent -translate-x-1/2" />

        <div className="space-y-24">
          {sortedEvents.map((event) => {
            const Icon = event.type === 'study' ? GraduationCap : Briefcase
            const isWork = event.type === 'work'

            return (
              <div
                key={`${event.title}-${event.startDate}`}
                className={`relative flex flex-col md:flex-row items-start gap-12 md:gap-16 ${
                  isWork ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Card */}
                <div
                  className={`w-full md:w-1/2 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-md p-7 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center ${
                    isWork ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  {/* Date */}
                  <p className="text-xs uppercase tracking-widest text-gray-400 text-center">
                    {formatDate(event.startDate)} — {formatDate(event.endDate)}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 text-2xl font-semibold text-white text-center">
                    {event.title}
                  </h3>

                  {/* Achievements */}
                  <ul className="mt-5 space-y-2 text-gray-300 list-disc list-inside text-left">
                    {event.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="mt-4 p-3 rounded-full bg-gray-900 border border-gray-700 shadow-md">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
