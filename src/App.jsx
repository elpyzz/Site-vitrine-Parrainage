import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import HowItWorks from './components/HowItWorks'
import DiscoverApp from './components/DiscoverApp'
import WhyArtisanLoves from './components/WhyArtisanLoves'
import Benefits from './components/Benefits'
import Simulation from './components/Simulation'
import Testimonials from './components/Testimonials'
import HowToTalk from './components/HowToTalk'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <DiscoverApp />
      <WhyArtisanLoves />
      <Benefits />
      <Simulation />
      <Testimonials />
      <HowToTalk />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
