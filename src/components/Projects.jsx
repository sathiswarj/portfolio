import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import SectionHeading from './SectionHeading'
import { projects, projectCategories } from '../data/projects'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.25 } },
}

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={cardVariants}
      layout
      className="card"
      style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', height: 200 }}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        {/* Category badge */}
        <span style={{
          position: 'absolute', top: '0.875rem', left: '0.875rem',
          fontSize: '0.7rem', fontWeight: 600,
          padding: '0.25rem 0.625rem',
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '999px',
          color: '#fff',
          fontFamily: 'var(--font-mono)',
        }}>
          {project.category}
        </span>
        {/* Hover overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
          opacity: 0,
          transition: 'opacity 0.3s',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '0.75rem',
          paddingBottom: '1rem',
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = '1'}
          onMouseLeave={e => e.currentTarget.style.opacity = '0'}
        >
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}>
            <ExternalLink size={14} /> Live Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}>
            <SiGithub size={14} /> GitHub
          </a>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--heading)', lineHeight: 1.3 }}>{project.title}</h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65, flex: 1 }}>{project.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: 'auto' }}>
          {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>

        {/* Bottom links */}
        <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.875rem', borderTop: '1px solid var(--border)' }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: 'var(--accent-light)', fontWeight: 600, textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--accent-light)'}
          >
            <ExternalLink size={14} /> Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: 'var(--subheading)', fontWeight: 600, textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--heading)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--subheading)'}
          >
            <SiGithub size={14} /> Source
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg)' }}>
      <div className="orb orb-blue" style={{ width: 400, height: 400, top: '20%', right: '-10%', opacity: 0.08 }} />
      <div className="container" style={{ position: 'relative' }}>
        <SectionHeading
          label="Projects"
          title="Work I'm Proud Of"
          highlight="Proud Of"
          subtitle="A selection of projects that showcase my skills across the full-stack spectrum."
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', justifyContent: 'center', marginBottom: '3rem' }}
        >
          {projectCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                border: '1px solid',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                transition: 'all 0.2s ease',
                background: activeCategory === cat ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 'var(--surface)',
                borderColor: activeCategory === cat ? 'transparent' : 'var(--border)',
                color: activeCategory === cat ? '#fff' : 'var(--subheading)',
                boxShadow: activeCategory === cat ? '0 4px 16px rgba(59,130,246,0.3)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
