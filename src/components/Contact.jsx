import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react'
import { SiGithub, SiInstagram } from 'react-icons/si'
import SectionHeading from './SectionHeading'

const CONTACT_INFO = [
  { icon: <Mail size={20} />, label: 'Email', value: 'sathiswarj17@gmail.com', href: 'mailto:sathiswarj17@gmail.com' },
  { icon: <Phone size={20} />, label: 'Phone', value: '7708128946', href: 'tel:+15551234567' },
  { icon: <MapPin size={20} />, label: 'Location', value: 'Madurai, tamilnadu', href: null },
]

const SOCIALS = [
  { icon: <SiGithub size={20} />, label: 'GitHub', href: 'https://github.com/sathiswarj', color: '#ffffff' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sathiswar-j/', color: '#0a66c2' },
  { icon: <SiInstagram size={20} />, label: 'Instagram', href: 'https://instagram.com', color: '#e1306c' },
]

function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'Name is required'
  if (!fields.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Enter a valid email'
  if (!fields.subject.trim()) errors.subject = 'Subject is required'
  if (!fields.message.trim()) errors.message = 'Message is required'
  else if (fields.message.trim().length < 20) errors.message = 'Message must be at least 20 characters'
  return errors
}

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
    if (touched[name]) {
      setErrors(validate({ ...fields, [name]: value }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(t => ({ ...t, [name]: true }))
    setErrors(validate(fields))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const allTouched = { name: true, email: true, subject: true, message: true }
    setTouched(allTouched)
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setStatus('loading')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: fields.name,
          to_name: 'Sathiswar', // Or your name
          from_email: fields.email,
          subject: fields.subject,
          message: fields.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setFields({ name: '', email: '', subject: '', message: '' })
      setTouched({})
    } catch (error) {
      console.error('FAILED...', error)
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="orb orb-blue" style={{ width: 350, height: 350, bottom: '5%', left: '-5%', opacity: 0.1 }} />
      <div className="container" style={{ position: 'relative' }}>
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          highlight="Work Together"
          subtitle="Have a project in mind? I'd love to hear about it. Send me a message and let's build something amazing."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--heading)', marginBottom: '0.75rem' }}>
              Get in Touch
            </h3>
            <p style={{ color: 'var(--body)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              I'm currently available for freelance work and full-time opportunities.
              Response time is usually within 24 hours.
            </p>

            {/* Contact items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {CONTACT_INFO.map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: '0.875rem',
                    background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent)', flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.125rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: '0.9375rem', color: 'var(--heading)', fontWeight: 500, textDecoration: 'none' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-light)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--heading)'}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: '0.9375rem', color: 'var(--heading)', fontWeight: 500 }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.875rem' }}>
                Follow Me
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {SOCIALS.map(s => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: 44, height: 44, borderRadius: '0.75rem',
                      background: 'var(--surface)', border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--subheading)', textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.color = s.color }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--subheading)' }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-row">
                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--subheading)', marginBottom: '0.4rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    value={fields.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Sathiswar"
                    className={`form-input${errors.name && touched.name ? ' error' : ''}`}
                  />
                  {errors.name && touched.name && (
                    <p style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--subheading)', marginBottom: '0.4rem' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    value={fields.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@example.com"
                    className={`form-input${errors.email && touched.email ? ' error' : ''}`}
                  />
                  {errors.email && touched.email && (
                    <p style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--subheading)', marginBottom: '0.4rem' }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  id="contact-subject"
                  value={fields.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Project Inquiry"
                  className={`form-input${errors.subject && touched.subject ? ' error' : ''}`}
                />
                {errors.subject && touched.subject && (
                  <p style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <AlertCircle size={12} /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--subheading)', marginBottom: '0.4rem' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  id="contact-message"
                  rows={5}
                  value={fields.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me about your project..."
                  className={`form-input${errors.message && touched.message ? ' error' : ''}`}
                  style={{ resize: 'vertical', minHeight: 120 }}
                />
                {errors.message && touched.message && (
                  <p style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="btn-primary"
                disabled={status === 'loading' || status === 'success'}
                whileHover={status === 'idle' ? { scale: 1.03 } : {}}
                whileTap={status === 'idle' ? { scale: 0.97 } : {}}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  padding: '0.875rem',
                  opacity: status === 'loading' ? 0.7 : 1,
                  background: status === 'success' ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                }}
              >
                {status === 'idle' && <><Send size={18} /> Send Message</>}
                {status === 'loading' && (
                  <>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', animation: 'spin 0.7s linear infinite' }} />
                    Sending...
                  </>
                )}
                {status === 'success' && <><CheckCircle2 size={18} /> Message Sent!</>}
                {status === 'error' && <><AlertCircle size={18} /> Try Again</>}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ textAlign: 'center', marginTop: '0.875rem', fontSize: '0.875rem', color: '#22c55e' }}
                >
                  ✅ Thanks! I'll get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 520px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
