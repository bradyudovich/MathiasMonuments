'use client'

import React from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2">
        {/* Column 1: Hours of Operation + Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Hours of Operation</h3>
          <ul className="space-y-1 mb-6">
            <li>M – Th: 9:00 AM – 5:00 PM</li>
            <li>F: 9:00 AM – 4:00 PM</li>
            <li>Sat – Sun: Closed (By Appointment)</li>
          </ul>

          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <address className="not-italic space-y-2">
            <p>
              <a href="tel:+14432442077" className="text-amber-400 hover:underline" aria-label="Call us">
                443-244-2077
              </a>
            </p>
            <p>
              <a href="mailto:bradyudovich@icloud.com" className="hover:underline">
                bradyudovich@icloud.com
              </a>
            </p>
          </address>
        </div>

        {/* Column 2: Map with address */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Location</h3>
          <a
            href="https://www.google.com/maps?q=175+E.+Main+Street,+Westminster,+MD+21157"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-amber-400 hover:underline mb-3"
            aria-label="View Mathias Monuments on Google Maps"
          >
            175 E. Main Street<br />
            Westminster, MD 21157
          </a>
          <a
            href="https://www.google.com/maps?q=175+E.+Main+Street,+Westminster,+MD+21157"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Mathias Monuments location in Google Maps"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE_PATH}/images/map-static.svg`}
              alt="Map showing Mathias Monuments at 175 E. Main Street, Westminster, MD 21157"
              className="block w-full h-48 border border-slate-800 overflow-hidden rounded"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-6">
        <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-slate-400">
          © {new Date().getFullYear()} Mathias Monuments & Memorials. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
