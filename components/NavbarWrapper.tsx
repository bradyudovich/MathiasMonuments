'use client'

import { useState, useEffect } from 'react'
import { Navbar } from './Navbar'
import CreditClaim from './CreditClaim'

export function NavbarWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header')
      if (header) {
        if (window.scrollY > 80) {
          header.classList.add('header--scrolled')
        } else {
          header.classList.remove('header--scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-open the modal once per session after 5 seconds
  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('memorialModalShown')) return
    const timer = setTimeout(() => {
      setIsModalOpen(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    sessionStorage.setItem('memorialModalShown', '1')
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="announcement-bar">
        Serving Families in Westminster, Carroll County, and Surrounding Regions Since 1906.
      </div>
      <Navbar />
      <CreditClaim open={isModalOpen} onClose={handleClose} />
    </>
  )
}

export default NavbarWrapper
