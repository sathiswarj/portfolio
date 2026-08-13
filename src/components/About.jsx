import { motion } from 'framer-motion'
import { Download, Briefcase, GraduationCap, User, Code2, Rocket, Heart } from 'lucide-react'
import SectionHeading from './SectionHeading'

const highlights = [
  { icon: <Code2 size={22} />, title: 'Clean Code', desc: 'Writing maintainable, scalable, and well-documented code.' },
  { icon: <Rocket size={22} />, title: 'Performance', desc: 'Optimized for speed, Core Web Vitals, and great UX.' },
  { icon: <Heart size={22} />, title: 'Passion', desc: 'Genuinely passionate about building products people love.' },
]

const experiences = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'TechVision Labs',
    period: '2023 – Present',
    desc: 'Lead development of a SaaS platform serving 10k+ users. Architected microservices backend, implemented CI/CD, and mentored junior developers.',
    tags: ['React', 'Node.js', 'AWS', 'MongoDB'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Digital Spark Agency',
    period: '2021 – 2023',
    desc: 'Built 20+ client projects ranging from e-commerce stores to custom web apps. Collaborated with designers to deliver pixel-perfect UIs.',
    tags: ['Next.js', 'Express', 'PostgreSQL', 'Figma'],
  },
  {
    role: 'Frontend Developer',
    company: 'StartupHub',
    period: '2020 – 2021',
    desc: 'Developed responsive web interfaces and implemented complex UI components. Improved page load speeds by 60% through code splitting and optimization.',
    tags: ['React', 'Tailwind CSS', 'REST APIs'],
  },
]

const education = [
  {
    degree: 'B.Sc. Computer Science',
    school: 'State University of Technology',
    period: '2016 – 2020',
    desc: 'Graduated with honors. Major in Software Engineering with a focus on web technologies and distributed systems.',
  },
  {
    degree: 'Full-Stack Web Development Bootcamp',
    school: 'The Odin Project + freeCodeCamp',
    period: '2019',
    desc: 'Completed 1200+ hours of intensive full-stack training, including capstone projects deployed to production.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="orb orb-blue" style={{ width: 400, height: 400, top: 0, left: '-10%', opacity: 0.1 }} />
      <div className="container" style={{ position: 'relative' }}>
        <SectionHeading
          label="About Me"
          title="Crafting Digital Experiences"
          highlight="Digital Experiences"
          subtitle="I'm a freelance full-stack developer with 2.5+ years of experience building web applications, mobile apps, and intelligent AI automations. I specialize in delivering high-quality, scalable solutions tailored for my clients' unique needs."
        />

        {/* Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '1.25rem',
            marginBottom: '4rem',
          }}
        >
          {highlights.map(h => (
            <motion.div
              key={h.title}
              variants={itemVariants}
              className="card"
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: '0.875rem',
                background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)',
              }}>
                {h.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--heading)', marginBottom: '0.375rem' }}>{h.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.6 }}>{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Work Experience section — commented out
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Work Experience</h3>
            ... experience timeline ...
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Education</h3>
            ... education cards ...
          </motion.div>
        </div>
        End commented out section */}
      </div>
    </section>
  )
}
