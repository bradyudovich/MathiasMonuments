'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const tileVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
}

export default function BentoLegacyGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="bento-grid">
      <motion.div
        className="bento-tile"
        custom={0}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={tileVariants}
      >
        <h3>Bespoke Design & Engraving</h3>
        <p>Tailored artistry featuring custom hobby icons, religious symbols, and professional engraving.</p>
      </motion.div>

      <motion.div
        className="bento-tile"
        custom={1}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={tileVariants}
      >
        <h3>Heritage & Legacy</h3>
        <p>Serving families with dignity since 1906. A Westminster fixture built on craftsmanship.</p>
      </motion.div>

      <motion.div
        className="bento-tile"
        custom={2}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={tileVariants}
      >
        <h3>Transparent Value</h3>
        <p>Direct-to-family pricing with no sales commissions, ensuring the highest quality at the best value.</p>
      </motion.div>

      <motion.div
        className="bento-tile"
        custom={3}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={tileVariants}
      >
        <h3>Restoration & Guidance</h3>
        <p>Expert monument restoration and full navigation of cemetery size and installation regulations.</p>
      </motion.div>
    </div>
  )
}
