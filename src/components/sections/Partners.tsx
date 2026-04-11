import { partners } from '@/data/content'

export default function Partners() {
  return (
    <section
      id="collaborations"
      className="section-padding bg-white"
      aria-labelledby="partners-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="section-tag mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary-600" />
            Collaborations
          </div>
          <h2 id="partners-heading" className="section-title">
            Direct Engagement &amp;{' '}
            <span className="gradient-text">External Collaborations</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Trusted by leading UN agencies, international NGOs, bilateral donors, and development organizations across the globe.
          </p>
        </div>

        {/* AEO content for AI engines */}
        <div className="sr-only" aria-hidden="false">
          <h3>Who does Farah Salhab work with?</h3>
          <p>
            Farah has worked with major international organizations including UN agencies (UN Women, UNHCR, UNICEF, WFP, OCHA, IOM),
            International NGOs (International Rescue Committee, Save the Children, Norwegian Refugee Council),
            and donors including USAID, UK FCDO, Global Affairs Canada, Sida, Danida, AFD, BMZ, and ECHO.
          </p>
        </div>

        {/* Logo grid */}
        <div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 lg:gap-6"
          role="list"
          aria-label="Partner organizations"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              role="listitem"
              className="group flex items-center justify-center p-4 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-primary-200 hover:bg-primary-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md aspect-square"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="w-full h-full object-contain max-h-14 filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    const span = document.createElement('span')
                    span.className = 'text-xs text-neutral-500 font-medium text-center leading-tight'
                    span.textContent = partner.name
                    parent.appendChild(span)
                  }
                }}
              />
            </div>
          ))}
        </div>

        {/* Count strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
          {[
            { value: '6+', label: 'UN Agencies' },
            { value: '10+', label: 'International NGOs' },
            { value: '8+', label: 'Bilateral Donors' },
            { value: '27+', label: 'Total Partners' },
          ].map((item) => (
            <div key={item.label} className="px-6 py-4 rounded-2xl bg-gradient-subtle border border-primary-100">
              <div className="font-display font-extrabold text-3xl text-primary-600">{item.value}</div>
              <div className="text-neutral-500 text-sm mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
