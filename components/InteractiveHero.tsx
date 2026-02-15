'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ 
            color: 'var(--burnished-gold)', 
            fontSize: '1rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}
        >
          Since 1906
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ marginBottom: '1.5rem' }}
        >
          Preserving Legacy Through Stone
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ 
            fontSize: '1.125rem', 
            lineHeight: 1.8,
            marginBottom: '1rem',
            color: 'rgba(248, 250, 252, 0.9)'
          }}
        >
          Four generations of craftsmanship serving Maryland, Pennsylvania, and Virginia. 
          From marble to high-density granite, we create monuments that honor life's most 
          cherished memories.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ 
            fontSize: '1rem', 
            lineHeight: 1.8,
            marginBottom: '2rem',
            color: 'rgba(248, 250, 252, 0.8)'
          }}
        >
          Trusted cemetery bylaw experts with unmatched expertise in design, installation, 
          and restoration.
        </motion.p>
        
        <motion.a
          href="#contact"
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
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
          <Image
            src="/images/monument-hero.jpg"
            alt="Premium granite monument showcasing our craftsmanship"
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="50vw"
          />
        </motion.div>
      </div>
    </div>
  )
}
