import { Routes, Route } from 'react-router-dom'
import SEOHead from '@/components/layout/SEOHead'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import FeaturedMedia from '@/components/sections/FeaturedMedia'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import Partners from '@/components/sections/Partners'
import Blog from '@/components/sections/Blog'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import PortfolioPage from '@/pages/PortfolioPage'

export default function App() {
  return (
    <Routes>
      {/* ── Portfolio standalone page ── */}
      <Route path="/portfolio" element={<PortfolioPage />} />

      {/* ── Main single-page site ── */}
      <Route path="*" element={
        <>
          <SEOHead />
          <Header />
          <main id="main-content">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:font-semibold"
            >
              Skip to main content
            </a>
            <Hero />
            <About />
            <FeaturedMedia />
            <Services />
            <FAQ />
            <Testimonials />
            <Partners />
            <Blog />
            <Contact />
          </main>
          <Footer />
        </>
      } />
    </Routes>
  )
}
