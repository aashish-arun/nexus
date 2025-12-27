import Image from 'next/image'
import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }) {
  const { slug } = await params

  const project = projects.find(
    (p) => p.slug === slug
  )

  if (!project) notFound()

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="relative h-72 rounded-xl overflow-hidden mb-12">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6">
        {project.title}
      </h1>

      <p className="text-gray-400 mb-8">
        {project.details.overview}
      </p>
    </section>
  )
}