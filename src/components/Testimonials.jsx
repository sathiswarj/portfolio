import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent(c => (c + 1) % testimonials.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, next])

  const t = testimonials[current]

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--bg)' }}>
      <div className="orb orb-purple" style={{ width: 400, height: 400, top: 0, right: '10%', opacity: 0.08 }} />
      <div className="container" style={{ position: 'relative' }}>
        <SectionHeading
          label="Testimonials"
          title="What Clients Say"
          highlight="Clients Say"
          subtitle="Don't just take my word for it — here's what my clients have to say about working with me."
        />

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ position: 'relative', maxWidth: '52rem', margin: '0 auto' }}
        >
          {/* Main card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="glass-strong"
              style={{ borderRadius: '1.5rem', padding: 'clamp(1.5rem, 4vw, 2.5rem)', position: 'relative' }}
            >
              {/* Quote icon */}
              <div style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem',
                color: 'rgba(59,130,246,0.15)',
              }}>
                <Quote size={56} />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              {/* Review text */}
              <p style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                color: 'var(--body)',
                lineHeight: 1.8,
                fontStyle: 'italic',
                marginBottom: '2rem',
              }}>
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${t.avatarColor}, ${t.avatarColor}88)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', fontWeight: 700, color: '#fff',
                  flexShrink: 0,
                  boxShadow: `0 4px 16px ${t.avatarColor}44`,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: 'var(--heading)', fontSize: '0.9375rem' }}>{t.name}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>
                    {t.role} at <span style={{ color: 'var(--accent-light)' }}>{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2rem' }}>
            {/* Dots */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    borderRadius: '999px',
                    background: i === current ? 'var(--accent)' : 'var(--border-2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div style={{ display: 'flex', gap: '0.625rem' }}>
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
                style={{
                  width: 42, height: 42, borderRadius: '0.75rem',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--subheading)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent-light)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--subheading)' }}
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
                style={{
                  width: 42, height: 42, borderRadius: '0.75rem',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  border: 'none',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff',
                  boxShadow: '0 4px 16px rgba(59,130,246,0.3)',
                }}
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>

          {/* All reviewers preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', justifyContent: 'center', gap: '-0.5rem', marginTop: '2.5rem' }}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                onClick={() => setCurrent(i)}
                style={{
                  width: 36, height: 36,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${t.avatarColor}, ${t.avatarColor}88)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem', fontWeight: 700, color: '#fff',
                  border: `3px solid ${i === current ? 'var(--accent)' : 'var(--bg)'}`,
                  marginLeft: i > 0 ? '-8px' : 0,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  zIndex: i === current ? 5 : 1,
                  position: 'relative',
                  transform: i === current ? 'scale(1.15)' : 'scale(1)',
                  boxShadow: i === current ? `0 0 12px ${t.avatarColor}66` : 'none',
                }}
              >
                {t.avatar}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
