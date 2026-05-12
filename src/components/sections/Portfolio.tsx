import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { portfolio, type PortfolioCategory } from '@/data/content'

const CATEGORIES: { key: 'all' | PortfolioCategory; label: string }[] = [
  { key: 'all',           label: 'All Work' },
  { key: 'hands-on',     label: 'Hands-On Work' },
  { key: 'spotlight',    label: 'In the Spotlight' },
  { key: 'voice',        label: 'Voice & Vision' },
  { key: 'contributions',label: 'Contributions' },
]

const CATEGORY_META: Record<PortfolioCategory, { label: string; color: string; dot: string }> = {
  'hands-on':      { label: 'Hands-On Work',      color: 'bg-primary-600 text-white',         dot: 'bg-primary-600' },
  'spotlight':     { label: 'In the Spotlight',   color: 'bg-gold-500 text-neutral-900',      dot: 'bg-gold-500' },
  'voice':         { label: 'Voice & Vision',     color: 'bg-primary-400 text-white',         dot: 'bg-primary-400' },
  'contributions': { label: 'Contributions',      color: 'bg-primary-800 text-white',         dot: 'bg-primary-800' },
}

const PAGE_SIZE = 9

export default function Portfolio() {
  const [active, setActive]   = useState<'all' | PortfolioCategory>('all')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const filtered = active === 'all' ? portfolio : portfolio.filter(p => p.category === active)
  const shown    = filtered.slice(0, visible)
  const hasMore  = visible < filtered.length

  const handleFilter = (key: typeof active) => {
    setActive(key)
    setVisible(PAGE_SIZE)
  }

  return (
    <section
      id="portfolio"
      className="section-padding bg-gradient-subtle"
      aria-labelledby="portfolio-heading"
    >
      <div className="container-custom">

        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="section-tag mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary-600" />
            Portfolio
          </div>
          <h2 id="portfolio-heading" className="section-title">
            A Decade of{' '}
            <span className="gradient-text">Hands-On Impact</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Reports, trainings, media appearances, and curriculum contributions spanning gender analysis,
            feminist M&amp;E, capacity building, and humanitarian advocacy across MENA and beyond.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Portfolio categories">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => handleFilter(cat.key)}
              role="tab"
              aria-selected={active === cat.key}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                active === cat.key
                  ? 'bg-primary-600 text-white border-primary-600 shadow-glow-purple'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-primary-300 hover:text-primary-600'
              }`}
            >
              {cat.label}
              <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                active === cat.key ? 'bg-white/20' : 'bg-neutral-100'
              }`}>
                {cat.key === 'all' ? portfolio.length : portfolio.filter(p => p.category === cat.key).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((item) => {
            const meta = CATEGORY_META[item.category]
            return (
              <article
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    itemProp="image"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-2 rounded-full bg-white/20 border border-white/40">
                      <ExternalLink size={22} className="text-white" />
                    </div>
                  </div>
                  {/* Year badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-bold">
                    {item.year}
                  </div>
                  {/* Category badge */}
                  <div className={`absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${meta.color}`}>
                    {meta.label}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start gap-2">
                    <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${meta.dot}`} />
                    <h3
                      className="font-display font-bold text-neutral-900 text-sm leading-snug group-hover:text-primary-700 transition-colors"
                      itemProp="name"
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible(v => v + PAGE_SIZE)}
              className="btn-outline"
            >
              Load More
              <span className="text-xs text-neutral-400 ml-1">
                ({filtered.length - visible} remaining)
              </span>
            </button>
          </div>
        )}

        {/* Summary strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CATEGORIES.slice(1).map(cat => {
            const count = portfolio.filter(p => p.category === cat.key).length
            const meta  = CATEGORY_META[cat.key as PortfolioCategory]
            return (
              <button
                key={cat.key}
                onClick={() => handleFilter(cat.key as PortfolioCategory)}
                className="rounded-2xl p-5 text-center bg-white border border-neutral-100 hover:border-primary-200 hover:shadow-md transition-all duration-200 group"
              >
                <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${meta.dot}`} />
                <div className="font-display font-extrabold text-2xl text-primary-600 group-hover:text-primary-700">{count}</div>
                <div className="text-neutral-500 text-xs mt-0.5 leading-tight">{meta.label}</div>
              </button>
            )
          })}
        </div>

      </div>
    </section>
  )
}
