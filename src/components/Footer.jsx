import { motion } from 'framer-motion'
import { Code2, Heart, ArrowUp } from 'lucide-react'
import { SiGithub, SiInstagram } from 'react-icons/si'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#techstack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { icon: <SiGithub size={18} />, label: 'GitHub', href: 'https://github.com/sathiswarj' },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sathiswar-j/' },
  { icon: <SiInstagram size={18} />, label: 'Instagram', href: 'https://instagram.com' },
]

const SERVICES = [
  'Website Development',
  'Landing Pages',
  'E-Commerce Stores',
  'Portfolio Websites',
  'API Development',
  'Website Maintenance',
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle glow */}
      <div className="orb orb-blue" style={{ width: 300, height: 300, bottom: 0, left: '50%', transform: 'translateX(-50%)', opacity: 0.05 }} />

      <div className="container" style={{ position: 'relative', padding: '4rem 1.5rem 2rem' }}>
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
              <div style={{
                width: 36, height: 36, borderRadius: '0.625rem',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 16px rgba(59,130,246,0.3)',
              }}>
                <Code2 size={18} color="#fff" strokeWidth={2.5} />
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--heading)', letterSpacing: '-0.02em' }}>
                Sathiswar<span className="gradient-text">.</span>
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, maxWidth: '22rem', marginBottom: '1.5rem' }}>
              Crafting exceptional digital experiences with clean code and modern design. Let's build something great together.
            </p>
            <div style={{ display: 'flex', gap: '0.625rem' }}>
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 36, height: 36, borderRadius: '0.625rem',
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--muted)', textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent-light)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--heading)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                    style={{ fontSize: '0.875rem', color: 'var(--body)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-light)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--body)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--heading)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {SERVICES.map(s => (
                <li key={s} style={{ fontSize: '0.875rem', color: 'var(--body)' }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--heading)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Let's Talk
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Ready to start your project? I'm just one message away.
            </p>
            <a
              href="mailto:sathiswarj17@gmail.com"
              className="btn-primary"
              style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}
            >
              Hire Me
            </a>
          </div>
        </div>

        <hr className="divider" style={{ marginBottom: '1.75rem' }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.375rem', flexWrap: 'wrap' }}>
            © {new Date().getFullYear()} Sathiswar. Made with <Heart size={14} fill="#ef4444" color="#ef4444" /> using React & Framer Motion.
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.375rem',
              fontSize: '0.8125rem', color: 'var(--muted)',
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--heading)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            <ArrowUp size={14} /> Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
