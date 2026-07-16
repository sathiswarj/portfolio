import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setVisible(false)
            onComplete?.()
          }, 400)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 80)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg)',
            gap: '2rem',
          }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            style={{
              width: 72,
              height: 72,
              borderRadius: '1.25rem',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 40px rgba(59,130,246,0.4)',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }}
          >
            <span style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 800 }}>A</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            style={{ textAlign: 'center' }}
          >
            <p style={{ color: 'var(--heading)', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
              Sathiswar
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '0.8125rem', marginTop: '0.25rem', fontFamily: 'var(--font-mono)' }}>
              Full-Stack Developer
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ width: 200 }}
          >
            <div className="skill-bar-track">
              <div
                className="skill-bar-fill"
                style={{ width: `${Math.min(progress, 100)}%`, transition: 'width 0.1s ease' }}
              />
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.75rem', textAlign: 'center', marginTop: '0.5rem', fontFamily: 'var(--font-mono)' }}>
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
