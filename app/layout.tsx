import type { Metadata } from 'next'
import '../styles/globals.css'

// Google Fonts will be loaded via CSS @import in globals.css
// This approach ensures build succeeds even without network access

export const metadata: Metadata = {
  title: 'Mathias Monuments - Heritage Luxury Since 1906',
  description: 'Premier monument craftsmanship serving MD, PA, and VA. Specializing in custom granite monuments, cemetery bylaw expertise, and restoration services since 1906.',
  keywords: 'monuments, memorials, granite, cemetery, Westminster MD, Joseph L. Mathias',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
