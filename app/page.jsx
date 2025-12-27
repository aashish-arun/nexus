import AboutMeSection from '@/components/portfolio/AboutMeSection'
import TechStackSection from '@/components/portfolio/TechStackSection'
import ProjectsSection from '@/components/portfolio/ProjectsSection'
import TimelineSection from '@/components/portfolio/TimelineSection'
import ContactMeSection from '@/components/portfolio/ContactMeSection'

export default function Home() {
  return (
    <main>
      <AboutMeSection />
      <TechStackSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactMeSection />
    </main>
  )
}