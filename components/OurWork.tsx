'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
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

// Infinite loop: clone last item at start, first item at end
const slides = [IMAGES[IMAGES.length - 1], ...IMAGES, IMAGES[0]]
const IMAGE_COUNT = IMAGES.length
const DRAG_THRESHOLD = 50 // px: minimum drag distance to trigger slide change
const WHEEL_THROTTLE_MS = 450 // ms between wheel-triggered slide advances
const WHEEL_DELTA_THRESHOLD = 30 // minimum wheel delta to trigger a slide advance
const VERTICAL_SCROLL_RATIO = 2 // deltaY must exceed deltaX * this to be treated as vertical
const MIN_VERTICAL_DELTA = 10 // minimum deltaY to apply the vertical scroll check

export default function OurWork() {
  const trackRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(1) // Start at first real item
  const [animate, setAnimate] = useState(false)
  const [itemWidth, setItemWidth] = useState(0)

  const isDraggingRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragDeltaRef = useRef(0)

  // Measure item width (item width + gap) from DOM
  useEffect(() => {
    const update = () => {
      const track = trackRef.current
      if (!track || track.children.length < 2) return
      const r0 = track.children[0].getBoundingClientRect()
      const r1 = track.children[1].getBoundingClientRect()
      setItemWidth(r1.left - r0.left)
    }
    update()
    const ro = new ResizeObserver(update)
    if (trackRef.current) ro.observe(trackRef.current)
    return () => ro.disconnect()
  }, [])

  // Enable animation after first paint
  useEffect(() => {
    setAnimate(true)
  }, [])

  const jumpTo = useCallback((i: number) => {
    setAnimate(false)
    setIndex(i)
  }, [])

  const goTo = useCallback((i: number) => {
    setAnimate(true)
    setIndex(i)
  }, [])

  const prev = useCallback(() => goTo(index - 1), [goTo, index])
  const next = useCallback(() => goTo(index + 1), [goTo, index])

  // After transition ends, silently jump when on clone slides
  const handleTransitionEnd = useCallback(() => {
    if (index === 0) {
      jumpTo(IMAGE_COUNT)
    } else if (index === slides.length - 1) {
      jumpTo(1)
    }
  }, [index, jumpTo])

  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDraggingRef.current = true
    dragStartXRef.current = e.clientX
    dragDeltaRef.current = 0
    // Prevent text selection and default drag behavior during carousel interaction
    e.preventDefault()
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDraggingRef.current) return
    dragDeltaRef.current = e.clientX - dragStartXRef.current
  }, [])

  const handleMouseUp = useCallback(() => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    if (dragDeltaRef.current < -DRAG_THRESHOLD) next()
    else if (dragDeltaRef.current > DRAG_THRESHOLD) prev()
  }, [next, prev])

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    dragStartXRef.current = e.touches[0].clientX
    dragDeltaRef.current = 0
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    dragDeltaRef.current = e.touches[0].clientX - dragStartXRef.current
  }, [])

  const handleTouchEnd = useCallback(() => {
    if (dragDeltaRef.current < -DRAG_THRESHOLD) next()
    else if (dragDeltaRef.current > DRAG_THRESHOLD) prev()
  }, [next, prev])

  // Wheel / trackpad scroll support
  const nextRef = useRef(next)
  const prevRef = useRef(prev)
  nextRef.current = next
  prevRef.current = prev
  const wheelLastRef = useRef(0)

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    const onWheel = (e: WheelEvent) => {
      const absDx = Math.abs(e.deltaX)
      const absDy = Math.abs(e.deltaY)
      // Pure vertical scroll — let the page handle it
      if (absDy > absDx * VERTICAL_SCROLL_RATIO && absDy > MIN_VERTICAL_DELTA) return
      e.preventDefault()
      const now = Date.now()
      if (now - wheelLastRef.current < WHEEL_THROTTLE_MS) return
      const delta = absDx >= absDy ? e.deltaX : e.deltaY
      if (delta > WHEEL_DELTA_THRESHOLD) {
        nextRef.current()
        wheelLastRef.current = now
      } else if (delta < -WHEEL_DELTA_THRESHOLD) {
        prevRef.current()
        wheelLastRef.current = now
      }
    }
    viewport.addEventListener('wheel', onWheel, { passive: false })
    return () => viewport.removeEventListener('wheel', onWheel)
  }, [])

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

        <div
          ref={viewportRef}
          className="our-work-viewport"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            className="our-work-track"
            style={{
              transform: itemWidth > 0 ? `translateX(${-index * itemWidth}px)` : undefined,
              transition: animate ? 'transform 0.4s ease' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((image, i) => (
              <div
                key={i}
                className="our-work-item"
                aria-hidden={i === 0 || i === slides.length - 1}
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
