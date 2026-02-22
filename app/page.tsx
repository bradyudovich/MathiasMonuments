import NavbarWrapper from '@/components/NavbarWrapper'
import BentoLegacyGrid from '@/components/BentoLegacyGrid'
import OurWork from '@/components/OurWork'
import CreditClaim from '@/components/CreditClaim'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <NavbarWrapper />

      <BentoLegacyGrid />

      <CreditClaim />

      <OurWork />

      <Footer />
    </main>
  )
}
