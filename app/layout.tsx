import type { Metadata } from 'next'
import '../styles/globals.css'

// Google Fonts will be loaded via CSS @import in globals.css
// This approach ensures build succeeds even without network access

export const metadata: Metadata = {
  title: 'Mathias Monuments | Custom Memorials in Westminster, MD',
  description: 'Family-owned monument craftsmanship serving Maryland, Pennsylvania, and Virginia since 1906. Expert custom granite memorials, cemetery bylaw expertise, and restoration services. Located in Westminster, MD.',
  keywords: 'monuments, memorials, granite, cemetery, Westminster MD, Joseph L. Mathias',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Mathias Monuments & Memorials',
    telephone: '443-244-2077',
    email: 'bradyudovich@icloud.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '175 E. Main Street',
      addressLocality: 'Westminster',
      addressRegion: 'MD',
      postalCode: '21157',
      addressCountry: 'US'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '09:00',
        closes: '16:00'
      }
    ],
    url: 'https://mathiasmemorials.com'
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
