'use client'

import { motion } from 'framer-motion'

const REVIEWS = [
  {
    quote:
      "Mathias Monuments provided a level of craftsmanship that is rare to find today. They took the time to understand our family\u2019s story and translated it into a beautiful, lasting tribute.",
    author: 'The Harrison Family',
  },
  {
    quote:
      'Being a Westminster local, I knew of their long history, but the personal guidance we received exceeded all expectations. They made a difficult process feel manageable and dignified.',
    author: 'Margaret S.',
  },
  {
    quote:
      'The attention to detail on the engraving was stunning. It is clear they take immense pride in their work, honoring the 1906 legacy with every stone they set.',
    author: 'The Miller Family',
  },
]

export default function CustomerReviews() {
  return (
    <section className="reviews-section">
      <div className="container">
        <motion.h2
          className="reviews-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Words from the Families We Serve.
        </motion.h2>
        <div className="reviews-grid">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              className="review-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <p className="review-text">&ldquo;{review.quote}&rdquo;</p>
              <p className="review-author">&mdash; {review.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
