import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Portfolio from '@/components/sections/Portfolio'
import Footer from '@/components/layout/Footer'

export default function PortfolioPage() {
  const navigate = useNavigate()

  return (
    <>
      {/* Page header bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo / back to home */}
            <a href="/" className="flex items-center gap-3 group">
              <img
                src="/assets/images/seo/farah.png"
                alt="Farah Salhab – Gender and Inclusion Expert"
                className="h-10 w-auto object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
            </a>

            {/* Back button */}
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary-200 text-primary-700 font-semibold text-sm hover:bg-primary-50 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* Hero banner */}
      <section className="bg-gradient-hero relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-mesh-purple opacity-60" />
        <div className="container-custom relative z-10 text-center text-white space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-gold-300" />
            Farah Salhab · Portfolio
          </div>
          <h1 className="font-display font-extrabold text-fluid-4xl leading-tight">
            A Decade of{' '}
            <span className="gradient-text-gold">Hands-On Impact</span>
          </h1>
          <p className="text-white/75 text-fluid-lg max-w-2xl mx-auto leading-relaxed">
            Reports, trainings, media appearances, and curriculum contributions spanning
            gender analysis, feminist M&amp;E, capacity building, and humanitarian advocacy
            across MENA and beyond.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <main>
        <Portfolio />
      </main>

      <Footer />
    </>
  )
}
