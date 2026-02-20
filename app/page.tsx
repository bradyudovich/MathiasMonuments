import NavbarWrapper from '@/components/NavbarWrapper'
import InteractiveHero from '@/components/InteractiveHero'
import BentoLegacyGrid from '@/components/BentoLegacyGrid'
import OurWork from '@/components/OurWork'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <NavbarWrapper />
      <InteractiveHero />

      <BentoLegacyGrid />

      <OurWork />

      <Footer />
    </main>
  )
}
