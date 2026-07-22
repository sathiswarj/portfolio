import { motion } from 'framer-motion'
import { ArrowRight, Download, ChevronDown, Sparkles } from 'lucide-react'
import { SiGithub, SiInstagram } from 'react-icons/si'
import { useEffect, useRef, useState } from 'react'
import { animate, stagger } from 'animejs'
import { useCountUp } from '../hooks/useCountUp'
import avatar from '../assets/avatar.png'
const ROLES = ['Full-Stack Developer', 'Web & Mobile Developer', 'Node.js Engineer', 'Freelancer', '']
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

  // Anime.js animation for floating orbs
  useEffect(() => {
    animate('.hero-orb', {
      translateY: [
        { value: -30, duration: 2500, easing: 'easeInOutSine' },
        { value: 30, duration: 3000, easing: 'easeInOutSine' },
        { value: 0, duration: 2500, easing: 'easeInOutSine' }
      ],
      translateX: [
        { value: 20, duration: 3000, easing: 'easeInOutSine' },
        { value: -20, duration: 2500, easing: 'easeInOutSine' },
        { value: 0, duration: 3000, easing: 'easeInOutSine' }
      ],
      scale: [
        { value: 1.1, duration: 2500, easing: 'easeInOutSine' },
        { value: 0.9, duration: 3000, easing: 'easeInOutSine' },
        { value: 1, duration: 2500, easing: 'easeInOutSine' }
      ],
      loop: true,
      delay: stagger(200) // Stagger the animation of each orb slightly
    });
  }, []);

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
      className="section mesh-bg hero-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* Orbs */}
      <div className="orb orb-blue hero-orb" style={{ width: 500, height: 500, top: '-10%', right: '-5%' }} />
      <div className="orb orb-purple hero-orb" style={{ width: 400, height: 400, bottom: '10%', left: '-8%' }} />
      <div className="orb orb-cyan hero-orb" style={{ width: 250, height: 250, top: '60%', right: '20%' }} />

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
              className="avatar-img"
              style={{
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
              className="badge-open-work"
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: '5%', right: '-20%',
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '0.75rem', padding: '0.5rem 0.875rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                zIndex: 10,
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ fontSize: '0.8125rem', color: 'var(--heading)', fontWeight: 600, whiteSpace: 'nowrap' }}>Open to Work</span>
            </motion.div>
            <motion.div
              className="badge-experience"
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', bottom: '10%', left: '-22%',
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '0.75rem', padding: '0.5rem 0.875rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                zIndex: 10,
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
          className="scroll-indicator"
          style={{
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
        .avatar-img { width: 340px; height: 340px; }
        
        @media (max-width: 900px) {
          .hero-grid { 
            display: flex !important;
            flex-direction: column-reverse;
            text-align: center; 
            gap: 2rem !important;
          }
          .hero-avatar { margin: 6rem auto 1rem; }
          .avatar-img { width: 240px; height: 240px; }
          
          /* Adjust badge positions for mobile to prevent cut-off */
          .badge-open-work { right: -10% !important; top: 0% !important; transform: scale(0.9); }
          .badge-experience { left: -10% !important; bottom: 5% !important; transform: scale(0.9); }
        }
        @media (max-width: 480px) {
          .hero-grid p { text-align: left !important; }
        }
      `}</style>
    </section>
  )
}
