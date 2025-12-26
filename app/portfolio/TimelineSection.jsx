"use client";

import { GraduationCap, Briefcase } from "lucide-react";

const timelineEvents = [
  {
    startDate: "2019-03-15",
    endDate: "2020-03-20",
    type: "study",
    title: "AISSE @ St. Thomas Central School",
    achievements: [
      "High marks in Science and Mathematics",
      "Certificate of Merit",
      "2nd place in school science fair",
    ],
  },
  {
    startDate: "2021-01-10",
    endDate: "2022-01-18",
    type: "study",
    title: "AISSCE @ St. Thomas Central School",
    achievements: [
      "Distinction in Computer Science",
      "Top 10% of the class",
      "Research project on emerging technologies",
    ],
  },
  {
    startDate: "2022-08-01",
    endDate: "2023-10-15",
    type: "work",
    title: "Billing Clerk @ Kairali Fresh",
    achievements: [
      "Zero-error cash handling",
      "Excellent customer feedback",
      "Trained new staff members",
    ],
  },
  {
    startDate: "2023-11-05",
    endDate: "2024-07-01",
    type: "work",
    title: "Cashier @ 1000 Lights Food Court",
    achievements: [
      "Handled high-volume transactions",
      "Inventory assistance",
      "Employee of the Month",
    ],
  },
  {
    startDate: "2024-09-01",
    endDate: "Present",
    type: "study",
    title: "Diploma in Software Development @ SAIT",
    achievements: [
      "Full-stack development projects",
      "Web & mobile applications",
      "Databases, APIs, and frameworks",
    ],
  },
  {
    startDate: "2024-11-20",
    endDate: "Present",
    type: "work",
    title: "Gas Bar Clerk @ Calgary Co-op",
    achievements: [
      "Daily sales & cash management",
      "Customer service excellence",
      "Stock and safety operations",
    ],
  },
];

const formatDate = (date) =>
  date === "Present"
    ? "Present"
    : new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      });

export default function TimelineSection() {
  // DESCENDING ORDER BY START DATE (LATEST → EARLIEST)
  const sortedEvents = [...timelineEvents].sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  );

  return (
    <section className="py-28 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-extrabold text-center mb-24 tracking-tight">
        Timeline
      </h2>

      <div className="relative">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-linear-to-b from-transparent via-gray-700 to-transparent -translate-x-1/2" />

        <div className="space-y-24">
          {sortedEvents.map((event) => {
            const Icon =
              event.type === "study" ? GraduationCap : Briefcase;
            const isWork = event.type === "work";

            return (
              <div
                key={`${event.title}-${event.startDate}`}
                className={`relative flex items-start gap-12 ${
                  isWork ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-1/2 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-md p-7 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl flex flex-col items-center ${
                    isWork ? "pr-12" : "pl-12"
                  }`}
                >
                  {/* Date */}
                  <p className="text-xs uppercase tracking-widest text-gray-400 text-center">
                    {formatDate(event.startDate)} —{" "}
                    {formatDate(event.endDate)}
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
                  <div className="mt-4 p-2.5 rounded-full bg-gray-900 border border-gray-700 shadow-md">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
