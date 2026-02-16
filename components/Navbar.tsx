'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="navbar-slogan"
        >
          Preserving Legacy Through Stone
        </motion.div>
        
        <motion.a
          href="tel:410-848-4600"
          className="navbar-phone"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          aria-label="Call us at 410-848-4600"
        >
          410-848-4600
        </motion.a>
      </div>
    </nav>
  )
}

export default Navbar
