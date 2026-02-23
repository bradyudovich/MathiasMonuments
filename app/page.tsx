import NavbarWrapper from '@/components/NavbarWrapper'
import BentoLegacyGrid from '@/components/BentoLegacyGrid'
import OurWork from '@/components/OurWork'
import CustomerReviews from '@/components/CustomerReviews'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <NavbarWrapper />

      <BentoLegacyGrid />

      <OurWork />

      <CustomerReviews />

      <Footer />
    </main>
  )
}
