'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CreditClaimProps {
  open: boolean
  onClose: () => void
}

export default function CreditClaim({ open, onClose }: CreditClaimProps) {
  const [formState, setFormState] = useState({ name: '', email: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  const handleClose = useCallback(() => {
    setSubmitted(false)
    setFormState({ name: '', email: '' })
    onClose()
  }, [onClose, setSubmitted, setFormState])

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, handleClose])

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

  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) handleClose()
  }, [handleClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="credit-modal-backdrop"
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            ref={dialogRef}
            className="credit-modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="credit-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <button
              className="credit-modal-close"
              onClick={handleClose}
              aria-label="Close credit claim dialog"
            >
              ×
            </button>

            <h2 id="credit-modal-title">$100 Credit Toward Your Monument</h2>
            <p>
              Claim your exclusive $100 design credit when you schedule a consultation with our team.
              Honor your loved one with a monument that truly reflects their life.
            </p>

            {!submitted ? (
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
            ) : (
              <p className="credit-success-msg">
                Thank you! We&apos;ll be in touch to apply your $100 credit.
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
