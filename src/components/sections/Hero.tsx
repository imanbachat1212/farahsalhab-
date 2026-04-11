import { ArrowRight, Download, MapPin, Award, Users } from 'lucide-react'
import { hero } from '@/data/content'

export default function Hero() {
  const handleCTA = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero – Farah Salhab Gender and Inclusion Expert"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-mesh-purple opacity-60" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary-400/20 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-600/10 blur-3xl" />

      <div className="container-custom relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left – Content */}
          <div className="text-white space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-semibold text-white/90">
              <MapPin size={14} className="text-gold-300" />
              <span>Beirut, Lebanon · MENA Region</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-fluid-5xl leading-[1.05] tracking-tight">
              Gender &amp; Inclusion
              <span className="block gradient-text-gold mt-1">Expert</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl text-white/75 font-medium tracking-wide uppercase font-display">
              Intersectional Feminist · MENA Region
            </p>

            {/* Description */}
            <p className="text-fluid-lg text-white/80 leading-relaxed max-w-lg">
              Turning feminist thinking into practice for{' '}
              <strong className="text-white font-semibold">15+ years</strong> across the Middle East
              and North Africa. Specializing in gender-transformative strategies, feminist M&amp;E,
              and GEDI/GESI analysis for UN agencies and international organizations.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { icon: Award,  value: '15+', label: 'Years Experience' },
                { icon: Users,  value: '27+', label: 'Partner Orgs' },
                { icon: MapPin, value: 'MENA', label: 'Focus Region' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-white/15">
                    <stat.icon size={16} className="text-gold-300" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-lg leading-tight">{stat.value}</div>
                    <div className="text-white/60 text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => handleCTA(hero.cta1.href)}
                className="btn-gold text-base py-4 px-7 shadow-glow-gold"
                aria-label="Contact Farah Salhab to explore possibilities"
              >
                {hero.cta1.label}
                <ArrowRight size={18} />
              </button>

              <a
                href={hero.cta2.href}
                download
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 active:scale-[0.98] transition-all duration-200 backdrop-blur-sm"
                aria-label="Download Farah Salhab Resume PDF"
              >
                <Download size={18} />
                {hero.cta2.label}
              </a>
            </div>

            {/* Expertise keywords (GEO signal) */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Feminist M&E', 'GEDI/GESI Analysis', 'Gender Mainstreaming', 'GBV Programming', 'Intersectional Feminism'].map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium border border-white/15"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Right – Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-primary-400/25 blur-2xl animate-pulse-slow" />
            </div>

            {/* Image frame */}
            <div className="relative z-10 animate-float">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-primary-900/50">
                <img
                  src={hero.image}
                  alt={hero.imageAlt}
                  className="w-full h-full object-cover object-top"
                  fetchPriority="high"
                />
              </div>

              {/* Floating badge – Education */}
              <div className="absolute -bottom-4 -left-6 glass rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-white text-xs font-semibold">MA Gender Studies</p>
                <p className="text-white/60 text-xs">SOAS, University of London</p>
              </div>

              {/* Floating badge – UN Work */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-white text-xs font-semibold">UN Agency Partner</p>
                <p className="text-white/60 text-xs">UNHCR · UNICEF · UN Women</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  )
}
