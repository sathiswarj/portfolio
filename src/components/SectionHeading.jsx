import { motion } from 'framer-motion'

/**
 * Reusable animated section heading.
 * @param {string} label     - small uppercase label above title
 * @param {string} title     - main heading text
 * @param {string} highlight - part of title to apply gradient to
 * @param {string} subtitle  - optional subtitle paragraph
 * @param {string} align     - 'center' | 'left'
 */
export default function SectionHeading({ label, title, highlight, subtitle, align = 'center' }) {
  const isCenter = align === 'center'

  const renderTitle = () => {
    if (!highlight) return title
    const parts = title.split(highlight)
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <motion.div
      className={`mb-14 ${isCenter ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <span
          className="section-label"
          style={{ justifyContent: isCenter ? 'center' : 'flex-start' }}
        >
          {label}
        </span>
      )}
      <h2
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          fontWeight: 800,
          color: 'var(--heading)',
          marginBottom: subtitle ? '1rem' : 0,
          letterSpacing: '-0.02em',
        }}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          style={{
            color: 'var(--subheading)',
            maxWidth: '42rem',
            fontSize: '1.0625rem',
            margin: isCenter ? '0 auto' : '0',
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
