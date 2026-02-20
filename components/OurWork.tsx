'use client'

import { motion } from 'framer-motion'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

const images = [
  {
    src: `${BASE_PATH}/project-images/our-work/gravestone-1.jpg`,
    alt: 'Custom granite monument with engraved design',
  },
  {
    src: `${BASE_PATH}/project-images/our-work/gravestone-2.jpg`,
    alt: 'Traditional upright monument with detailed inscription',
  },
  {
    src: `${BASE_PATH}/project-images/our-work/gravestone-3.jpg`,
    alt: 'Heritage gravestone crafted with precision stonework',
  },
  {
    src: `${BASE_PATH}/project-images/our-work/gravestone-4.jpg`,
    alt: 'Premium granite memorial with custom engraving',
  },
]

export default function OurWork() {
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

        <div className="our-work-grid">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="our-work-item"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5, ease: 'easeOut' }}
            >
              <div className="our-work-img-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="our-work-img"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
