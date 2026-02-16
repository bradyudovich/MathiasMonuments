'use client'

import { useEffect } from 'react'
import { Navbar } from './Navbar'

export function NavbarWrapper() {
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

  return <Navbar />
}

export default NavbarWrapper
