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

export default function App() {
  return (
    <>
      <SEOHead />
      <Header />

      <main id="main-content">
        {/* Skip-to-content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>

        {/* 1. Hero – above fold */}
        <Hero />

        {/* 2. About – who is Farah */}
        <About />

        {/* 3. Featured Media – video talks */}
        <FeaturedMedia />

        {/* 4. Services / Areas of Expertise */}
        <Services />

        {/* 5. FAQ – AEO featured snippets */}
        <FAQ />

        {/* 6. Testimonials – social proof + review schema */}
        <Testimonials />

        {/* 7. Partner logos – credibility + entity recognition */}
        <Partners />

        {/* 8. Blog – content authority */}
        <Blog />

        {/* 9. Contact – conversion */}
        <Contact />
      </main>

      <Footer />
    </>
  )
}
