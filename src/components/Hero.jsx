import { motion } from 'framer-motion'
import { ArrowRight, Download, ChevronDown, Sparkles } from 'lucide-react'
import { SiGithub, SiInstagram } from 'react-icons/si'
import { useEffect, useRef, useState } from 'react'
import { useCountUp } from '../hooks/useCountUp'
import avatar from '../assets/avatar.png'

const ROLES = ['Full-Stack Developer', 'React Specialist', 'Node.js Engineer', 'UI/UX Enthusiast']

// const stats = [
//   { value: 50, suffix: '+', label: 'Projects Done' },
//   { value: 30, suffix: '+', label: 'Happy Clients' },
//   { value: 4,  suffix: '+', label: 'Years Exp.' },
// ]

function StatItem({ value, suffix, label }) {
  const count = useCountUp(value, 2000, true)
  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--heading)', lineHeight: 1 }}>
        <span className="gradient-text">{count}</span>
        <span className="gradient-text">{suffix}</span>
      </p>
      <p style={{ color: 'var(--muted)', fontSize: '0.8125rem', marginTop: '0.25rem' }}>{label}</p>
    </div>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = ROLES[roleIndex]
    let i = typing ? displayed.length : displayed.length
    let timeout

    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 65)
      } else {
        timeout = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex(i => (i + 1) % ROLES.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="section mesh-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* Orbs */}
      <div className="orb orb-blue" style={{ width: 500, height: 500, top: '-10%', right: '-5%' }} />
      <div className="orb orb-purple" style={{ width: 400, height: 400, bottom: '10%', left: '-8%' }} />
      <div className="orb orb-cyan" style={{ width: 250, height: 250, top: '60%', right: '20%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) auto',
          gap: '4rem',
          alignItems: 'center',
        }}
          className="hero-grid"
        >
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.375rem 1rem',
                borderRadius: '999px',
                background: 'rgba(59,130,246,0.08)',
                border: '1px solid rgba(59,130,246,0.2)',
                marginBottom: '1.5rem',
              }}
            >
              <Sparkles size={14} color="#3b82f6" />
              <span style={{ fontSize: '0.8125rem', color: 'var(--accent-light)', fontWeight: 500 }}>
                Available for Freelance
              </span>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.08, marginBottom: '0.5rem' }}
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Sathiswar</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ marginBottom: '1.5rem', height: '2.5rem', display: 'flex', alignItems: 'center' }}
            >
              <span style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', color: 'var(--subheading)', fontWeight: 500 }}>
                {displayed}
                <span style={{
                  display: 'inline-block', width: 2, height: '1.2em',
                  background: '#3b82f6', marginLeft: 3, verticalAlign: 'middle',
                  animation: 'blink 1s step-end infinite',
                }} />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                fontSize: '1.0625rem',
                color: 'var(--body)',
                maxWidth: '38rem',
                marginBottom: '2.5rem',
                lineHeight: 1.8,
              }}
            >
              I craft <strong style={{ color: 'var(--heading)' }}>beautiful, fast, and scalable</strong> web applications
              that users love. From pixel-perfect frontends to robust backends — I&apos;ve got you covered.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}
            >
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}
              >
                View Projects <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="/resume.pdf"
                className="btn-secondary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}
                download
              >
                <Download size={18} /> Download CV
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem' }}
            >
              {[
                { href: 'https://github.com/sathiswarj', icon: <SiGithub size={18} />, label: 'GitHub' },
                { href: 'https://linkedin.com', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>, label: 'LinkedIn' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 42, height: 42, borderRadius: '0.625rem',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--subheading)',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.color = '#60a5fa' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--subheading)' }}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{
                display: 'flex',
                gap: '2.5rem',
                padding: '1.5rem 2rem',
                borderRadius: '1rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                width: 'fit-content',
              }}
            >
              {stats.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: i > 0 ? '2.5rem' : 0 }}>
                  {i > 0 && <div style={{ width: 1, height: 40, background: 'var(--border)', marginRight: 0 }} />}
                  <StatItem {...s} />
                </div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Avatar */}
          <motion.div
            className="hero-avatar"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            style={{ position: 'relative', flexShrink: 0 }}
          >
            {/* Glow ring */}
            <div style={{
              position: 'absolute', inset: -16,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3))',
              filter: 'blur(24px)',
            }} />
            {/* Rotating border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', inset: -4,
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)',
                padding: 3,
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))',
              }}
            />
            <img
              src={avatar}
              alt="Sathiswar — Full-Stack Developer"
              style={{
                width: 340,
                height: 340,
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                position: 'relative',
                zIndex: 1,
                border: '4px solid var(--surface)',
              }}
            />
            {/* Floating badges */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: '5%', right: '-20%',
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '0.75rem', padding: '0.5rem 0.875rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ fontSize: '0.8125rem', color: 'var(--heading)', fontWeight: 600, whiteSpace: 'nowrap' }}>Open to Work</span>
            </motion.div>
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', bottom: '10%', left: '-22%',
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '0.75rem', padding: '0.5rem 0.875rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Experience</p>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--heading)' }}>2.5+ Years</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem',
            color: 'var(--muted)', fontSize: '0.75rem',
          }}
        >
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-avatar { display: none; }
        }
        @media (max-width: 480px) {
          .hero-grid p { text-align: left !important; }
        }
      `}</style>
    </section>
  )
}
