'use client'

import React, { useState } from "react";

export function Footer() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('sending');
    setStatusMessage('');

    // No external service — log data locally and show success
    console.log('Form submission:', formState);
    setTimeout(() => {
      setSubmissionStatus('success');
      setStatusMessage('Thank you! Your message has been received.');
      setFormState({ name: '', email: '', message: '' });
    }, 500);
  };

  return (
    <footer id="contact" className="bg-slate-950 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

        {/* Column 3: Contact Form */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="footer-name" className="sr-only">Name</label>
              <input
                type="text"
                id="footer-name"
                name="name"
                placeholder="Your Name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label htmlFor="footer-email" className="sr-only">Email</label>
              <input
                type="email"
                id="footer-email"
                name="email"
                placeholder="Your Email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div>
              <label htmlFor="footer-message" className="sr-only">Message</label>
              <textarea
                id="footer-message"
                name="message"
                placeholder="Your Message"
                required
                rows={3}
                value={formState.message}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <button
              type="submit"
              disabled={submissionStatus === 'sending'}
              className="w-full px-4 py-2 bg-amber-400 text-slate-900 font-semibold rounded hover:bg-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submissionStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {statusMessage && (
              <div 
                role="status" 
                className={`text-sm ${submissionStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}
              >
                {statusMessage}
              </div>
            )}
          </form>
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
