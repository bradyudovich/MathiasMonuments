'use client'

import { useRef, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const REVIEWS = [
  {
    quote:
      "Mathias Monuments provided a level of craftsmanship that is rare to find today. They took the time to understand our family\u2019s story and translated it into a beautiful, lasting tribute.",
    author: 'The Harrison Family',
  },
  {
    quote:
      'Being a Westminster local, I knew of their long history, but the personal guidance we received exceeded all expectations. They made a difficult process feel manageable and dignified.',
    author: 'Margaret S.',
  },
  {
    quote:
      'The attention to detail on the engraving was stunning. It is clear they take immense pride in their work, honoring the 1906 legacy with every stone they set.',
    author: 'The Miller Family',
  },
  {
    quote:
      'The team was incredibly patient as we designed my father\u2019s memorial. Their knowledge of local cemetery regulations saved us so much time and stress.',
    author: 'The Peterson Family',
  },
  {
    quote:
      'After seeing how well my grandparents\u2019 monument from 1950 has held up, I knew there was no one else to trust for my own husband\u2019s stone. Quality that truly lasts generations.',
    author: 'Linda R.',
  },
  {
    quote:
      'Mathias Monuments is a true Carroll County institution. They treated us like neighbors, not just customers, and the hand-etched detail was absolutely breathtaking.',
    author: 'The Barnes Family',
  },
  {
    quote:
      'We needed a custom restoration on an older family plot, and the results were stunning. They managed to match the original 1920s style perfectly.',
    author: 'David G.',
  },
  {
    quote:
      'Compassionate guidance from start to finish. They didn\u2019t rush us through the process, ensuring every hobby and detail was represented exactly how we envisioned.',
    author: 'The Sterling Family',
  },
  {
    quote:
      'Professional, transparent pricing and no sales pressure. It\u2019s clear why they\u2019ve been a cornerstone of Westminster since 1906.',
    author: "The O\u2019Malley Family",
  },
]

// Seamless infinite loop: clone last N items at start, first N items at end
const CLONE_COUNT = 3
const slides = [...REVIEWS.slice(-CLONE_COUNT), ...REVIEWS, ...REVIEWS.slice(0, CLONE_COUNT)]
const REVIEW_COUNT = REVIEWS.length

export default function CustomerReviews() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const currentIdxRef = useRef(CLONE_COUNT) // start at first real item
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Returns scrollLeft that centers item[idx] in the viewport
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
      if (el) el.scrollLeft = getScrollLeft(idx + REVIEW_COUNT)
      currentIdxRef.current = idx + REVIEW_COUNT
    } else if (idx >= CLONE_COUNT + REVIEW_COUNT) {
      // Landed on a trailing clone — jump to matching real item
      const el = viewportRef.current
      if (el) el.scrollLeft = getScrollLeft(idx - REVIEW_COUNT)
      currentIdxRef.current = idx - REVIEW_COUNT
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
    <section className="reviews-section">
      <div className="container">
        <motion.h2
          className="reviews-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Words from the Families We Serve
        </motion.h2>
      </div>

      <div className="reviews-carousel" aria-label="Customer reviews carousel">
        <button
          className="our-work-arrow our-work-arrow--prev reviews-arrow"
          onClick={prev}
          aria-label="Previous review"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        <div ref={viewportRef} className="reviews-viewport">
          {slides.map((review, i) => {
            const isReal = i >= CLONE_COUNT && i < CLONE_COUNT + REVIEW_COUNT
            return (
              <div
                key={i}
                className="review-card"
                aria-hidden={!isReal}
              >
                <p className="review-text">&ldquo;{review.quote}&rdquo;</p>
                <p className="review-author">&mdash; {review.author}</p>
              </div>
            )
          })}
        </div>

        <button
          className="our-work-arrow our-work-arrow--next reviews-arrow"
          onClick={next}
          aria-label="Next review"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
