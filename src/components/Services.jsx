import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { services } from '../data/services'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="orb orb-cyan" style={{ width: 350, height: 350, top: '10%', left: '-5%', opacity: 0.1 }} />
      <div className="container" style={{ position: 'relative' }}>
        <SectionHeading
          label="Services"
          title="What I Can Do For You"
          highlight="Can Do For You"
          subtitle="From concept to deployment — comprehensive web development services tailored to your needs."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="services-grid"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="glass-strong"
                style={{
                  borderRadius: '1.25rem',
                  padding: '2rem',
                  cursor: 'default',
                  transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 20px 60px ${service.color}22`
                  e.currentTarget.style.borderColor = `${service.color}44`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'var(--border-2)'
                }}
              >
                {/* Bg glow */}
                <div style={{
                  position: 'absolute', top: -40, right: -40,
                  width: 120, height: 120, borderRadius: '50%',
                  background: `radial-gradient(circle, ${service.color}20, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                {/* Icon */}
                <div style={{
                  width: 54, height: 54, borderRadius: '1rem',
                  background: `${service.color}18`,
                  border: `1px solid ${service.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                  color: service.color,
                }}>
                  <Icon size={24} />
                </div>

                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--heading)', marginBottom: '0.625rem' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {service.description}
                </p>

                {/* Features */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {service.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--subheading)' }}>
                      <CheckCircle2 size={14} color={service.color} style={{ flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
