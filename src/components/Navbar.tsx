import React from "react";

export function Navbar() {
  return (
    <header className="bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="font-serif text-white text-lg leading-none">
          Mathias Monuments & Memorials
        </a>

        <div>
          <a
            href="tel:410-848-4600"
            className="text-amber-400 hover:underline font-medium"
            aria-label="Call Mathias Monuments at 410-848-4600"
          >
            410-848-4600
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
