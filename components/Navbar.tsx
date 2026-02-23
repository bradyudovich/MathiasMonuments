'use client'

import React from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function Navbar() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-md border-b border-slate-200 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-2 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_PATH}/Logo 1 Words Only Trasnparent.png`}
          alt="Mathias Monuments &amp; Memorials"
          width={1227}
          height={288}
          className="h-36 w-auto"
        />
      </div>
    </header>
  );
}

export default Navbar;
