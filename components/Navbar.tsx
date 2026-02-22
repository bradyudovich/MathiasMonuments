'use client'

import React from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function Navbar() {
  const handleClaimCredit = () => {
    window.dispatchEvent(new CustomEvent('toggleCreditClaim'));
  };

  return (
    <header className="bg-slate-900 sticky top-0 z-50 shadow-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" aria-label="Mathias Monuments &amp; Memorials – Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE_PATH}/logo.svg`}
            alt="Mathias Monuments &amp; Memorials"
            width={240}
            height={45}
            className="h-9 md:h-11 w-auto"
          />
        </a>

        <div>
          <button
            onClick={handleClaimCredit}
            className="contact-btn whitespace-nowrap inline-block px-3 py-1.5 text-xs md:px-6 md:py-2.5 md:text-base bg-amber-400 text-slate-900 font-semibold rounded hover:bg-amber-500 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Claim $100 Credit – jump to credit claim section"
          >
            <span className="md:hidden">Claim $100</span>
            <span className="hidden md:inline">Claim $100 Credit</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
