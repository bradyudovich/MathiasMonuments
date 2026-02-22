'use client'

import { motion } from 'framer-motion'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

const images = [
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

        <div className="our-work-scroll" aria-label="Gallery of our monument work">
          <div className="our-work-track">
            {images.map((image, index) => (
              <div key={index} className="our-work-item">
                <div className="our-work-img-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="our-work-img"
                  />
                  <div className="our-work-img-overlay" aria-hidden="true" />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop – hidden from assistive technology */}
            {images.map((image, index) => (
              <div key={`dup-${index}`} className="our-work-item our-work-item--dup" aria-hidden="true">
                <div className="our-work-img-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt=""
                    loading="lazy"
                    className="our-work-img"
                  />
                  <div className="our-work-img-overlay" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
