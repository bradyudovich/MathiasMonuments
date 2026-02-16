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
        <h3>120 Years of History</h3>
        <p>
          Since 1906, the Mathias family has been crafting monuments that stand the test of time. 
          Under the leadership of Joseph L. Mathias, who served as Mayor of Westminster from 1942 to 1963, 
          we pioneered the transition from traditional marble to premium high-density granite—setting 
          new standards in durability and design excellence.
        </p>
      </motion.div>

      <motion.div 
        className="bento-tile"
        custom={1}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={tileVariants}
      >
        <h3>Cemetery Bylaw Experts</h3>
        <p>
          Navigating cemetery regulations can be complex. Our team possesses deep expertise in 
          local and regional cemetery bylaws across Maryland, Pennsylvania, and Virginia—ensuring 
          every installation meets specifications and honors your wishes without complications.
        </p>
      </motion.div>
    </div>
  )
}
