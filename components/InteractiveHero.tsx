'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function InteractiveHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 1000], [0, 200])

  return (
    <div ref={heroRef} className="hero-split">
      <motion.div 
        className="hero-split__left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.p
          className="hero-trust-badge"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Serving Families Since 1906
        </motion.p>
        
        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          A Legacy of Excellence
        </motion.h1>
        
        <motion.p
          className="hero-paragraph"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Four generations of craftsmanship serving Maryland, Pennsylvania, and Virginia. 
          From traditional marble to premium high-density granite, we create lasting monuments 
          that honor life's most cherished memories with unmatched expertise in design, 
          installation, and restoration.
        </motion.p>
        
        <motion.a
          href="#contact"
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Design Guide
        </motion.a>
      </motion.div>

      <div className="hero-split__right">
        <motion.div 
          className="hero-parallax"
          style={{ y: parallaxY }}
        >
        </motion.div>
      </div>
    </div>
  )
}
