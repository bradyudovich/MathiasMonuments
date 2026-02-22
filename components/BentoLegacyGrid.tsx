'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, FileText, Heart, Users } from 'lucide-react'

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
        <Shield className="bento-tile-icon" aria-hidden="true" />
        <h3>Bespoke Design & Engraving</h3>
        <p>
          Thoughtful, custom memorial design with hobby icons, religious imagery, and clean, professional lettering—crafted to reflect the details that made them who they were.
        </p>
      </motion.div>

      <motion.div
        className="bento-tile"
        custom={1}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={tileVariants}
      >
        <Users className="bento-tile-icon" aria-hidden="true" />
        <h3>Heritage & Legacy</h3>
        <p>
          Serving local families with dignity since 1906. A Westminster cornerstone known for steady workmanship, respectful guidance, and memorials built to endure.
        </p>
      </motion.div>

      <motion.div
        className="bento-tile"
        custom={2}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={tileVariants}
      >
        <Heart className="bento-tile-icon" aria-hidden="true" />
        <h3>Transparent Value</h3>
        <p>
          Straightforward, direct-to-family pricing with no sales commissions—so you get clear options, honest guidance, and lasting quality without surprise markups.
        </p>
      </motion.div>

      <motion.div
        className="bento-tile"
        custom={3}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={tileVariants}
      >
        <FileText className="bento-tile-icon" aria-hidden="true" />
        <h3>Restoration & Guidance</h3>
        <p>
          Skilled monument cleaning and restoration, plus hands-on help navigating cemetery rules, sizing requirements, and installation details from start to finish.
        </p>
      </motion.div>
    </div>
  )
}
