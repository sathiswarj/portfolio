import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `target` when `trigger` becomes true.
 * @param {number} target - the final number
 * @param {number} duration - animation duration in ms
 * @param {boolean} trigger - start counting when true
 */
export function useCountUp(target, duration = 2000, trigger = true) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!trigger) return

    const startTime = performance.now()

    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, duration, trigger])

  return count
}
