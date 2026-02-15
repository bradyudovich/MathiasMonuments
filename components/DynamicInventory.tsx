'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

type MonumentType = 'Upright' | 'Slant' | 'Flush Marker' | 'Bench'

interface InventoryItem {
  id: number
  name: string
  type: MonumentType
  description: string
  image: string
}

const INVENTORY: InventoryItem[] = [
  {
    id: 1,
    name: 'Classic Upright Monument',
    type: 'Upright',
    description: 'Traditional upright design in premium granite with custom engraving options.',
    image: '/images/upright-1.jpg'
  },
  {
    id: 2,
    name: 'Heritage Slant Marker',
    type: 'Slant',
    description: 'Elegant slant design offering excellent visibility and timeless appeal.',
    image: '/images/slant-1.jpg'
  },
  {
    id: 3,
    name: 'Garden Flush Marker',
    type: 'Flush Marker',
    description: 'Low-profile bronze or granite marker for lawn-level memorials.',
    image: '/images/flush-1.jpg'
  },
  {
    id: 4,
    name: 'Memorial Bench',
    type: 'Bench',
    description: 'Functional and beautiful granite bench for reflection and remembrance.',
    image: '/images/bench-1.jpg'
  },
  {
    id: 5,
    name: 'Grand Upright Monument',
    type: 'Upright',
    description: 'Substantial family monument with intricate detailing and lasting presence.',
    image: '/images/upright-2.jpg'
  },
  {
    id: 6,
    name: 'Contemporary Slant',
    type: 'Slant',
    description: 'Modern slant design with clean lines and polished finish.',
    image: '/images/slant-2.jpg'
  },
]

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
}

export default function DynamicInventory() {
  const [activeFilter, setActiveFilter] = useState<MonumentType | 'All'>('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const filteredInventory = activeFilter === 'All' 
    ? INVENTORY 
    : INVENTORY.filter(item => item.type === activeFilter)

  const filters: Array<MonumentType | 'All'> = ['All', 'Upright', 'Slant', 'Flush Marker', 'Bench']

  return (
    <section className="inventory-section" id="inventory">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          Explore Our Collection
        </motion.h2>

        <div className="inventory-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div ref={ref} className="inventory-grid">
          {filteredInventory.map((item, index) => (
            <motion.div
              key={item.id}
              className="inventory-card"
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={300}
                className="inventory-card__image"
                loading="lazy"
              />
              <div className="inventory-card__content">
                <h3 className="inventory-card__title">{item.name}</h3>
                <span className="inventory-card__type">{item.type}</span>
                <p className="inventory-card__description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
