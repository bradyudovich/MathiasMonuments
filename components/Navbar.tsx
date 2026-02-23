'use client'

import React from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

interface NavbarProps {
  onClaimClick: () => void;
}

export function Navbar({ onClaimClick }: NavbarProps) {
  return (
    <header className="bg-[#F8F9FA] sticky top-0 z-50 shadow-sm border-b border-slate-200 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" aria-label="Mathias Monuments &amp; Memorials – Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE_PATH}/Logo.png`}
            alt="Mathias Monuments &amp; Memorials"
            width={1227}
            height={288}
            className="h-16 md:h-24 w-auto"
          />
        </a>

        <div>
          <button
            onClick={onClaimClick}
            className="plaque-btn"
            aria-label="$100 Memorial Credit – open credit claim offer"
          >
            $100 Memorial Credit
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
