'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function CreditClaim() {
  const [visible, setVisible] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const show = (_event: Event) => {
      setVisible(true)
    }
    window.addEventListener('showCreditClaim', show)
    return () => window.removeEventListener('showCreditClaim', show)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 500)
  }

  if (!visible) return null

  return (
    <section id="claim-credit" className="credit-claim-section">
      <motion.div
        className="credit-claim-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2>$100 Credit Toward Your Monument</h2>
        <p>
          Claim your exclusive $100 design credit when you schedule a consultation with our team.
          Honor your loved one with a monument that truly reflects their life.
        </p>

        {!submitted ? (
          <>
            <button
              className="claim-credit-btn"
              onClick={() => setFormOpen((prev) => !prev)}
              aria-expanded={formOpen}
              aria-controls="credit-claim-form"
            >
              Claim Credit
            </button>

            <div className="scroll-hint" aria-hidden="true">
              <ChevronDown size={20} strokeWidth={2} />
            </div>

            <div
              id="credit-claim-form"
              className={`credit-form-wrapper${formOpen ? ' open' : ''}`}
            >
              <form className="credit-form" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="credit-name" className="sr-only">Your Name</label>
                  <input
                    id="credit-name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    disabled={submitting}
                  />
                </div>
                <div>
                  <label htmlFor="credit-email" className="sr-only">Your Email</label>
                  <input
                    id="credit-email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    disabled={submitting}
                  />
                </div>
                <button type="submit" disabled={submitting}>
                  {submitting ? 'Submitting…' : 'Submit & Claim Credit'}
                </button>
              </form>
            </div>
          </>
        ) : (
          <p className="credit-success-msg">
            Thank you! We&apos;ll be in touch to apply your $100 credit.
          </p>
        )}
      </motion.div>
    </section>
  )
}
