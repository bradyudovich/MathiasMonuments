import NavbarWrapper from '@/components/NavbarWrapper'
import InteractiveHero from '@/components/InteractiveHero'
import BentoLegacyGrid from '@/components/BentoLegacyGrid'
import DynamicInventory from '@/components/DynamicInventory'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <NavbarWrapper />
      <InteractiveHero />

      <BentoLegacyGrid />

      <DynamicInventory />

      <Footer />
    </main>
  )
}
