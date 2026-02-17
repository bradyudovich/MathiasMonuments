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
          For over a century, Mathias Monuments has been a pillar of craftsmanship and 
          compassion in the monument industry. Founded in Westminster, Maryland, our 
          family-owned business has passed down the art of memorial creation through four 
          generations across Maryland, Pennsylvania, and Virginia.
        </motion.p>

        <motion.p
          className="hero-paragraph"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          We combine time-honored techniques with modern innovation, pioneering the transition 
          from traditional marble to premium high-density granite. Trusted cemetery bylaw experts 
          with unmatched expertise in design, installation, and restoration.
        </motion.p>
        
        <motion.a
          href="#contact"
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
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
