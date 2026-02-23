'use client'

import React from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

interface NavbarProps {
  onClaimClick: () => void;
}

export function Navbar({ onClaimClick }: NavbarProps) {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-md border-b border-slate-200 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_PATH}/Logo.png`}
          alt="Mathias Monuments &amp; Memorials"
          width={1227}
          height={288}
          className="h-24 w-auto"
        />

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
