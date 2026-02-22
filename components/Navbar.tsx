'use client'

import React from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

interface NavbarProps {
  onClaimClick: () => void;
}

export function Navbar({ onClaimClick }: NavbarProps) {
  return (
    <header className="bg-slate-900 sticky top-0 z-50 shadow-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" aria-label="Mathias Monuments &amp; Memorials – Home">
          <div className="flex flex-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE_PATH}/logo.svg`}
              alt="Mathias Monuments &amp; Memorials"
              width={240}
              height={45}
              className="h-9 md:h-11 w-auto"
            />
            <span className="navbar-geo-anchor">
              Serving Carroll County &amp; Central Maryland Since 1906.
            </span>
          </div>
        </a>

        <div>
          <button
            onClick={onClaimClick}
            className="coupon-btn"
            aria-label="Claim $100 Credit – open credit claim offer"
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
