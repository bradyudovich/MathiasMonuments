import React from "react";

export function Navbar() {
  return (
    <header className="bg-slate-900 sticky top-0 z-50 shadow-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="font-serif text-white text-xl md:text-2xl lg:text-3xl leading-none">
          Mathias Monuments & Memorials
        </a>

        <div>
          <a
            href="#contact"
            className="contact-btn inline-block px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base bg-amber-400 text-slate-900 font-semibold rounded hover:bg-amber-500 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Contact Us - Go to contact form"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
