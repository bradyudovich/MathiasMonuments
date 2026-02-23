'use client'

import { useRef, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

const IMAGES = [
  {
    src: `${BASE_PATH}/project-images/our-work/murphy.jpg`,
    alt: 'Murphy monument',
  },
  {
    src: `${BASE_PATH}/project-images/our-work/bluegray-1.jpg`,
    alt: 'Blue-gray monument 1',
  },
  {
    src: `${BASE_PATH}/project-images/our-work/bluegray2.jpg`,
    alt: 'Blue-gray monument 2',
  },
  {
    src: `${BASE_PATH}/project-images/our-work/laurentianrose2-1.jpg`,
    alt: 'Laurentian rose monument',
  },
  {
    src: `${BASE_PATH}/project-images/our-work/slant.jpg`,
    alt: 'Slant monument',
  },
  {
    src: `${BASE_PATH}/project-images/our-work/bevel.jpg`,
    alt: 'Bevel marker',
  },
]

// Seamless infinite loop: clone last N items at start, first N items at end
const CLONE_COUNT = 3
const slides = [...IMAGES.slice(-CLONE_COUNT), ...IMAGES, ...IMAGES.slice(0, CLONE_COUNT)]
const IMAGE_COUNT = IMAGES.length

export default function OurWork() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const currentIdxRef = useRef(CLONE_COUNT) // start at first real item
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Returns the scrollLeft that centers item[idx] in the viewport
  const getScrollLeft = useCallback((idx: number): number => {
    const el = viewportRef.current
    if (!el || idx < 0 || idx >= el.children.length) return 0
    const item = el.children[idx] as HTMLElement
    return item.offsetLeft - (el.offsetWidth - item.offsetWidth) / 2
  }, [])

  // Initialize scroll position to first real item (instant, no animation)
  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    requestAnimationFrame(() => {
      el.scrollLeft = getScrollLeft(CLONE_COUNT)
    })
  }, [getScrollLeft])

  // Scroll to index with optional smooth animation
  const scrollToIndex = useCallback((idx: number, behavior: 'smooth' | 'auto' = 'smooth') => {
    const el = viewportRef.current
    if (!el || idx < 0 || idx >= el.children.length) return
    const left = getScrollLeft(idx)
    if (behavior === 'auto') {
      el.scrollLeft = left
    } else {
      el.scrollTo({ left, behavior: 'smooth' })
    }
    currentIdxRef.current = idx
  }, [getScrollLeft])

  // Find the index of the item closest to the viewport center
  const findNearestIndex = useCallback((): number => {
    const el = viewportRef.current
    if (!el) return CLONE_COUNT
    const viewCenter = el.scrollLeft + el.offsetWidth / 2
    let best = CLONE_COUNT
    let bestDist = Infinity
    for (let i = 0; i < el.children.length; i++) {
      const item = el.children[i] as HTMLElement
      const center = item.offsetLeft + item.offsetWidth / 2
      const dist = Math.abs(center - viewCenter)
      if (dist < bestDist) {
        bestDist = dist
        best = i
      }
    }
    return best
  }, [])

  // After scrolling ends: update index and silently wrap from clone zones to real items
  const handleScrollEnd = useCallback(() => {
    const idx = findNearestIndex()
    currentIdxRef.current = idx
    if (idx < CLONE_COUNT) {
      // Landed on a leading clone — jump to matching real item
      const el = viewportRef.current
      if (el) el.scrollLeft = getScrollLeft(idx + IMAGE_COUNT)
      currentIdxRef.current = idx + IMAGE_COUNT
    } else if (idx >= CLONE_COUNT + IMAGE_COUNT) {
      // Landed on a trailing clone — jump to matching real item
      const el = viewportRef.current
      if (el) el.scrollLeft = getScrollLeft(idx - IMAGE_COUNT)
      currentIdxRef.current = idx - IMAGE_COUNT
    }
  }, [findNearestIndex, getScrollLeft])

  // Attach scroll-end listener (native scrollend or setTimeout fallback)
  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    if ('onscrollend' in window) {
      el.addEventListener('scrollend', handleScrollEnd)
      return () => el.removeEventListener('scrollend', handleScrollEnd)
    }
    const onScroll = () => {
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current)
      scrollEndTimerRef.current = setTimeout(handleScrollEnd, 150)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [handleScrollEnd])

  const prev = useCallback(() => scrollToIndex(currentIdxRef.current - 1), [scrollToIndex])
  const next = useCallback(() => scrollToIndex(currentIdxRef.current + 1), [scrollToIndex])

  return (
    <section className="our-work-section" id="our-work">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="our-work-heading"
        >
          Our Work
        </motion.h2>
      </div>

      <div className="our-work-carousel" aria-label="Our Work photo carousel">
        <button
          className="our-work-arrow our-work-arrow--prev"
          onClick={prev}
          aria-label="Previous image"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        <div ref={viewportRef} className="our-work-viewport">
          {slides.map((image, i) => (
            <div
              key={i}
              className="our-work-item"
              aria-hidden={i < CLONE_COUNT || i >= CLONE_COUNT + IMAGE_COUNT}
            >
              <div className="our-work-img-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="our-work-img"
                  draggable={false}
                />
                <div className="our-work-img-overlay" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>

        <button
          className="our-work-arrow our-work-arrow--next"
          onClick={next}
          aria-label="Next image"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
