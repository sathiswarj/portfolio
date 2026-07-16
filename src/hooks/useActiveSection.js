import { useEffect, useRef, useState } from 'react'

/**
 * Returns the id of the section currently most visible in the viewport.
 * @param {string[]} sectionIds - array of section element ids
 */
export function useActiveSection(sectionIds) {
  const [active, setActive] = useState('')
  const observerRef = useRef(null)

  useEffect(() => {
    const observers = []

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    }

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0,
    })

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observerRef.current.observe(el)
    })

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [sectionIds])

  return active
}
