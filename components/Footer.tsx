'use client'

import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer id="contact">
      {/* Contact Us Section */}
      <div className="contact-section">
        <div className="container">
          <h2 className="contact-title">Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <h3>Phone</h3>
              <a 
                href="tel:410-848-4600" 
                className="contact-phone"
                aria-label="Call us at 410-848-4600"
              >
                410-848-4600
              </a>
            </div>
            
            <div className="contact-item">
              <h3>Email</h3>
              <a 
                href="mailto:info@mathiasmemorials.com"
                className="contact-email"
                aria-label="Email us at info@mathiasmemorials.com"
              >
                info@mathiasmemorials.com
              </a>
            </div>
            
            <div className="contact-item">
              <h3>Address</h3>
              <address className="contact-address">
                175 E. Main Street<br />
                Westminster, MD 21157
              </address>
            </div>
          </div>
          
          {/* Operating Hours */}
          <div className="hours-section">
            <h3>Operating Hours</h3>
            <div className="hours-grid">
              <div className="hours-row">
                <span className="hours-days">M, Tu, W, Th</span>
                <span className="hours-times">9:00 AM – 5:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="hours-days">Friday</span>
                <span className="hours-times">9:00 AM – 4:00 PM</span>
              </div>
            </div>
          </div>
          
          {/* Google Maps Embed */}
          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?q=175%20E.%20Main%20Street%2C%20Westminster%2C%20MD%2021157&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mathias Monuments location at 175 E. Main Street, Westminster, MD 21157"
            />
          </div>
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mathias Monuments</h3>
          <p>
            Preserving history through stone since 1906. Four generations of craftsmanship 
            serving Maryland, Pennsylvania, and Virginia.
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Visit Us</h3>
          <address>
            175 E. Main Street<br />
            Westminster, MD 21157<br />
            <br />
            Serving MD, PA & VA
          </address>
        </div>
        
        <div className="footer-section">
          <h3>Our Expertise</h3>
          <p>
            • Custom Monument Design<br />
            • Cemetery Bylaw Consultation<br />
            • Monument Restoration<br />
            • High-Density Granite Specialists
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Mathias Monuments. All rights reserved. | Since 1906</p>
      </div>
    </footer>
  )
}

export default Footer
