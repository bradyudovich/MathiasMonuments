import React from "react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        {/* Column 1: Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="tel:410-848-4600" className="text-amber-400 hover:underline" aria-label="Call Mathias Monuments">
                410-848-4600
              </a>
            </li>
            <li>
              <a href="mailto:info@mathiasmemorials.com" className="hover:underline">info@mathiasmemorials.com</a>
            </li>
          </ul>
        </div>

        {/* Column 2: Hours */}
        <div>
          <h3 className="text-lg font-semibold text-white">Hours</h3>
          <ul className="mt-4 space-y-1">
            <li>M: 9:00 AM – 5:00 PM</li>
            <li>Tu: 9:00 AM – 5:00 PM</li>
            <li>W: 9:00 AM – 5:00 PM</li>
            <li>Th: 9:00 AM – 5:00 PM</li>
            <li>Friday: 9:00 AM – 4:00 PM</li>
          </ul>
        </div>

        {/* Column 3: Map */}
        <div>
          <h3 className="text-lg font-semibold text-white">Map</h3>
          <div className="mt-4">
            <div className="w-full h-48 border border-slate-800 overflow-hidden rounded">
              <iframe
                title="Mathias Monuments Map"
                src="https://www.google.com/maps?q=175%20E.%20Main%20Street%2C%20Westminster%2C%20MD%2021157&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-6">
        <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-slate-400">© {new Date().getFullYear()} Mathias Monuments & Memorials. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
