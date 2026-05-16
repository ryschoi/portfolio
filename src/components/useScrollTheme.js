import { useEffect } from 'react'

export function useScrollTheme({ ref, className = 'dark', offsetRem = 6 }) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
    const triggerPx = offsetRem * rootFontSize

    let rafId = null
    let active = false

    const update = () => {
      rafId = null
      const rect = el.getBoundingClientRect()
      const inside = rect.top < triggerPx && rect.bottom > triggerPx

      if (inside && !active) {
        document.body.classList.add(className)
        active = true
      } else if (!inside && active) {
        document.body.classList.remove(className)
        active = false
      }
    }

    const onScroll = () => {
      if (rafId == null) rafId = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafId != null) cancelAnimationFrame(rafId)
      if (active) document.body.classList.remove(className)
    }
  }, [ref, className, offsetRem])
}
