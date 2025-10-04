import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import GrupoBMC from '@/components/GrupoBMC'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Toaster } from '@/components/ui/toaster'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Helmet>
        <title>BMC Pro Services - Consultoria Empresarial de Excelência</title>
        <meta
          name="description"
          content="BMC Pro Services - Business Management Consultants. Consultoria multidisciplinar com impacto positivo e sustentável em gestão empresarial, ambiental e capital humano."
        />
      </Helmet>

      <div className="min-h-screen bg-slate-950">
        <Header scrolled={scrolled} />
        <main>
          <Hero />
          <About />
          <Services />
          <GrupoBMC />
          <Portfolio />
          <Testimonials />
          <CTA />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton phoneNumber=" +258 87 850 9146" />
        <Toaster />
      </div>
    </>
  )
}

export default App
