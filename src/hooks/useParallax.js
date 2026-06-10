import { useEffect, useRef, useState } from 'react'

export const useParallax = (speed = 0.5, direction = 'up') => {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed
      
      // Calculate parallax offset based on direction
      let newOffset = rate
      if (direction === 'down') {
        newOffset = Math.abs(rate)
      } else if (direction === 'left') {
        newOffset = rate
      } else if (direction === 'right') {
        newOffset = Math.abs(rate)
      }
      
      setOffset(newOffset)
    }

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [speed, direction])

  return { ref, offset }
}

export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px 0px -50px 0px') => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin])

  return { ref, isVisible }
}

export const useParallaxRotate = (speed = 0.2) => {
  const ref = useRef(null)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      
      const scrolled = window.pageYOffset
      const newRotation = scrolled * speed
      setRotation(newRotation)
    }

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [speed])

  return { ref, rotation }
}

export const useParallaxScale = (minScale = 0.8, maxScale = 1.2, speed = 0.001) => {
  const ref = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const elementCenter = rect.top + rect.height / 2
      const windowCenter = window.innerHeight / 2
      const distance = Math.abs(elementCenter - windowCenter)
      
      // Scale based on distance from center
      const maxDistance = window.innerHeight
      const normalizedDistance = Math.min(distance / maxDistance, 1)
      const newScale = maxScale - (normalizedDistance * (maxScale - minScale))
      
      setScale(newScale)
    }

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [minScale, maxScale, speed])

  return { ref, scale }
}
