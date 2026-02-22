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

  return (
    <>
      <div className="announcement-bar">
        Serving Westminster, Carroll County, and Central Maryland Since 1906.
      </div>
      <Navbar onClaimClick={() => setIsModalOpen(true)} />
      <CreditClaim open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default NavbarWrapper
