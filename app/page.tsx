import Navbar from '@/components/Navbar'
import InteractiveHero from '@/components/InteractiveHero'
import BentoLegacyGrid from '@/components/BentoLegacyGrid'
import DynamicInventory from '@/components/DynamicInventory'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <InteractiveHero />
      
      <section className="lead-intro">
        <div className="container">
          <h2>Since 1906: A Legacy of Excellence</h2>
          <p>
            For over <span className="highlight">120 years</span>, Mathias Monuments has been the 
            trusted name in memorial craftsmanship. Founded in Westminster, Maryland, our family 
            business pioneered the transition from traditional marble to premium high-density granite, 
            setting new industry standards for durability and artistry.
          </p>
          <p>
            Under the visionary leadership of <span className="highlight">Joseph L. Mathias</span>, 
            who served as Mayor of Westminster from 1942 to 1963, we expanded our reach across 
            Maryland, Pennsylvania, and Virginia—becoming the region's foremost experts in cemetery 
            bylaws and custom monument design.
          </p>
          <p>
            Today, we continue this proud tradition from our home at{' '}
            <span className="highlight">175 E. Main Street, Westminster, MD</span>, serving families 
            with the same dedication, integrity, and exceptional craftsmanship that defined our founders.
          </p>
        </div>
      </section>

      <BentoLegacyGrid />

      <DynamicInventory />

      <Footer />
    </main>
  )
}
