import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const techStack = [
  { name: 'HTML5', icon: '🌐', color: '#e34f26', category: 'Frontend' },
  { name: 'CSS3', icon: '🎨', color: '#1572b6', category: 'Frontend' },
  { name: 'JavaScript', icon: '⚡', color: '#f7df1e', category: 'Frontend' },
  { name: 'TypeScript', icon: '🔷', color: '#3178c6', category: 'Frontend' },
  { name: 'React', icon: '⚛️', color: '#61dafb', category: 'Frontend' },
  { name: 'Next.js', icon: '▲', color: '#ffffff', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '🌊', color: '#06b6d4', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', color: '#5fa04e', category: 'Backend' },
  { name: 'Express', icon: '🚀', color: '#ffffff', category: 'Backend' },
  { name: 'MongoDB', icon: '🍃', color: '#47a248', category: 'Backend' },
  { name: 'PostgreSQL', icon: '🐘', color: '#4169e1', category: 'Backend' },
  { name: 'React Native', icon: '📱', color: '#61dafb', category: 'Mobile' },
  { name: 'Git & GitHub', icon: '🐙', color: '#f14e32', category: 'Tools' },
  { name: 'Docker', icon: '🐳', color: '#2496ed', category: 'Tools' },
  { name: 'Figma', icon: '🎭', color: '#f24e1e', category: 'Tools' },
  { name: 'Framer Motion', icon: '🎬', color: '#bb4b96', category: 'Tools' },
  { name: 'OpenAI', icon: '🧠', color: '#00a67e', category: 'AI & Automation' },
  { name: 'n8n', icon: '⚙️', color: '#ff6d5a', category: 'AI & Automation' },
  { name: 'Make.com', icon: '🔗', color: '#6622ff', category: 'AI & Automation' },
  { name: 'LangChain', icon: '🦜', color: '#f3c428', category: 'AI & Automation' },
  { name: 'Chatbots', icon: '🤖', color: '#ec4899', category: 'AI & Automation' },
]

const categories = ['Frontend', 'Backend', 'AI & Automation', 'Mobile', 'Tools']

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}
const itemVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 15 } },
}

export default function TechStack() {
  return (
    <section id="techstack" className="section" style={{ background: 'var(--bg)' }}>
      <div className="orb orb-purple" style={{ width: 350, height: 350, bottom: '5%', right: '-5%', opacity: 0.12 }} />
      <div className="container" style={{ position: 'relative' }}>
        <SectionHeading
          label="Tech Stack"
          title="Technologies I Work With"
          highlight="Technologies"
          subtitle="My carefully curated toolkit for building modern, performant, and scalable applications."
          style={{ marginTop: '3rem' }}

        />

        {categories.map(cat => (
          <div key={cat} style={{ marginBottom: '3rem' }}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: '1rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              — {cat}
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}
            >
              {techStack.filter(t => t.category === cat).map(tech => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{
                    y: -6,
                    boxShadow: `0 16px 40px ${tech.color}22`,
                    borderColor: `${tech.color}44`,
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    padding: '0.625rem 1.125rem',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '0.75rem',
                    cursor: 'default',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>{tech.icon}</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--heading)', whiteSpace: 'nowrap' }}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
