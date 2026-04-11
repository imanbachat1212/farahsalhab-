import { ArrowRight } from 'lucide-react'
import { services } from '@/data/content'

export default function Services() {
  const handleContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="service"
      className="section-padding bg-white"
      aria-labelledby="services-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="section-tag mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary-600" />
            Expertise
          </div>
          <h2 id="services-heading" className="section-title">
            Areas of{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Comprehensive gender and inclusion consulting services tailored to organizations
            driving equity and social change.
          </p>
        </div>

        {/* AEO – "What services does a gender consultant provide?" */}
        <div
          className="sr-only"
          aria-hidden="false"
        >
          <h3>What services does a gender and inclusion consultant provide?</h3>
          <p>A gender and inclusion consultant like Farah Salhab offers: Workplace DEI advancement, Accessibility Assessments, Gender Strategy Development, Feminist M&amp;E, GEDI/GESI Analysis, Proposal Writing Support, Training &amp; Capacity Building, Social Work Plans, and Custom Toolkits.</p>
        </div>

        {/* Services grid – 3 cols on desktop */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {services.map((service, idx) => (
            <article
              key={service.id}
              className="card group overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={handleContact}
              onKeyDown={(e) => e.key === 'Enter' && handleContact()}
              tabIndex={0}
              role="button"
              aria-label={`Learn about ${service.title}`}
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={String(idx + 1)} />

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-primary-800/20 to-transparent" />

                {/* Icon */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl border border-white/30">
                  {service.icon}
                </div>

                {/* Number */}
                <div className="absolute top-4 right-4 font-display font-extrabold text-white/30 text-4xl leading-none">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3
                  className="font-display font-bold text-neutral-900 text-fluid-lg leading-snug group-hover:text-primary-700 transition-colors"
                  itemProp="name"
                >
                  {service.title}
                </h3>
                <p
                  className="text-neutral-500 text-sm leading-relaxed"
                  itemProp="description"
                >
                  {service.description}
                </p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {service.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2.5 py-0.5 rounded-full bg-primary-50 text-primary-700 text-xs font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                {/* Link indicator */}
                <div className="flex items-center gap-1.5 pt-2 text-primary-600 font-semibold text-sm opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  Inquire about this service
                  <ArrowRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 rounded-3xl bg-gradient-hero p-10 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh-purple opacity-50" />
          <div className="relative z-10 space-y-4">
            <h3 className="font-display font-bold text-fluid-3xl">
              Ready to advance gender equality in your organization?
            </h3>
            <p className="text-white/75 max-w-xl mx-auto text-fluid-base">
              Let's discuss how Farah's expertise can help your programs, policies, and teams
              become more equitable and inclusive.
            </p>
            <button
              onClick={handleContact}
              className="btn-gold mt-2 shadow-glow-gold"
            >
              Start the Conversation
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
