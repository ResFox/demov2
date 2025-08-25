import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Tournament from '@/components/Tournament'
import Gallery from '@/components/Gallery'
import Team from '@/components/Team'
import Gears from '@/components/Gears'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import GoTop from '@/components/GoTop'

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-eerie-black">
        <Hero />
        <div className="bg-section-wrapper bg-cover bg-center">
          <About />
          <Tournament />
          <Gallery />
          <Team />
          <Gears />
          <Newsletter />
        </div>
      </main>
      <Footer />
      <GoTop />
    </>
  )
}
