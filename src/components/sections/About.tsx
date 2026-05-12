import { CheckCircle2, ExternalLink } from 'lucide-react'
import { about } from '@/data/content'

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left – Image */}
          <div className="relative order-2 lg:order-1">
            {/* Background decoration */}
            <div className="absolute -top-6 -left-6 w-64 h-64 rounded-3xl bg-primary-100 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl bg-gold-300/30 -z-10" />

            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src={about.image}
                alt={about.imageAlt}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent" />

            </div>

            {/* Stats cards */}
            <div className="absolute top-6 -right-4 lg:-right-8 grid grid-cols-1 gap-3">
              {about.stats.slice(0, 2).map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl shadow-card px-5 py-3.5 min-w-[120px] text-center border border-neutral-100"
                >
                  <div className="font-display font-extrabold text-2xl text-primary-600">{stat.value}</div>
                  <div className="text-neutral-500 text-xs font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Content */}
          <div className="order-1 lg:order-2 space-y-7">
            {/* Tag */}
            <div className="section-tag">
              <span className="w-2 h-2 rounded-full bg-primary-600" />
              About Farah
            </div>

            {/* Heading */}
            <h2
              id="about-heading"
              className="section-title text-balance"
            >
              Intersectional Feminist &amp;{' '}
              <span className="gradient-text">Inclusion Expert</span>
            </h2>

            {/* Semantic bio for GEO/SEO */}
            <div
              itemScope
              itemType="https://schema.org/Person"
              className="space-y-4 text-neutral-600 leading-relaxed"
            >
              <meta itemProp="name" content="Farah Salhab" />
              <meta itemProp="jobTitle" content="Gender and Inclusion Expert" />
              <meta itemProp="workLocation" content="Beirut, Lebanon" />

              <p className="text-fluid-base">
                I am{' '}
                <span itemProp="name" className="font-semibold text-neutral-900">Farah Salhab</span>,
                an{' '}
                <span itemProp="jobTitle">Intersectional Feminist and Inclusion strategist</span>{' '}
                with{' '}
                <strong className="text-neutral-800">15 years of experience</strong>{' '}
                navigating the space between theory and lived realities across{' '}
                <span itemProp="workLocation">MENA and beyond</span>.
              </p>

              <p className="text-fluid-base">
                My work focuses on turning feminist thinking into practice through gender-transformative
                strategies, feminist M&amp;E, capacity building, and GEDI/GESI analysis. Since 2018,
                I've led gender equality components within multi-million-dollar consortia, shaping
                evidence-based approaches that challenge norms while staying grounded in context and care.
              </p>
            </div>

            {/* Expertise list */}
            <div>
              <p className="font-semibold text-neutral-800 mb-3">Core Areas of Expertise</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" role="list">
                {about.expertise.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-neutral-700 text-sm"
                  >
                    <CheckCircle2 size={16} className="text-primary-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
              >
                Work With Farah
                <ExternalLink size={16} />
              </a>
              <a
                href="#service"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#service')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-outline"
              >
                View Expertise
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
