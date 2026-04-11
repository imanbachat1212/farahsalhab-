import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '@/data/content'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((p) => (p + 1) % testimonials.length)

  const featured = testimonials[active]

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-subtle"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="section-tag mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary-600" />
            Testimonials
          </div>
          <h2 id="testimonials-heading" className="section-title">
            Trusted by{' '}
            <span className="gradient-text">Leading Organizations</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Hear what colleagues and clients from top international organizations say about working with Farah.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Featured testimonial */}
          <div
            className="relative bg-white rounded-3xl shadow-card-hover p-8 md:p-12 mb-8"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Large quote mark */}
            <Quote
              className="absolute top-6 right-8 text-primary-100"
              size={80}
              strokeWidth={1}
              aria-hidden="true"
            />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-gold-500 fill-gold-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote
              className="relative z-10 text-neutral-700 text-fluid-lg leading-relaxed italic mb-8"
              itemScope
              itemType="https://schema.org/Review"
            >
              <p itemProp="reviewBody">"{featured.quote}"</p>
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary-100 shadow-sm"
                loading="lazy"
              />
              <div>
                <p className="font-display font-bold text-neutral-900">{featured.name}</p>
                <p className="text-primary-600 text-sm font-medium">{featured.role}</p>
                {featured.org && (
                  <p className="text-neutral-500 text-xs mt-0.5">{featured.org}</p>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial from ${testimonials[i].name}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === active
                      ? 'w-8 h-2 bg-primary-600'
                      : 'w-2 h-2 bg-neutral-300 hover:bg-primary-300'
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="p-3 rounded-full border-2 border-neutral-200 hover:border-primary-400 hover:text-primary-700 text-neutral-500 transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white transition-all duration-200 shadow-md"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* All testimonials grid (visible on larger screens for SEO) */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`text-left rounded-2xl p-5 transition-all duration-300 cursor-pointer ${
                  i === active
                    ? 'bg-primary-600 text-white shadow-glow-purple'
                    : 'bg-white shadow-card hover:shadow-card-hover hover:-translate-y-0.5'
                }`}
                aria-pressed={i === active}
                aria-label={`View testimonial from ${t.name}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={t.image}
                    alt={t.imageAlt}
                    className={`w-10 h-10 rounded-full object-cover border-2 ${
                      i === active ? 'border-white/30' : 'border-primary-100'
                    }`}
                    loading="lazy"
                  />
                  <div>
                    <p className={`font-bold text-sm ${i === active ? 'text-white' : 'text-neutral-900'}`}>
                      {t.name}
                    </p>
                    <p className={`text-xs ${i === active ? 'text-white/70' : 'text-primary-600'}`}>
                      {t.org || t.role}
                    </p>
                  </div>
                </div>
                <p className={`text-xs leading-relaxed line-clamp-3 ${
                  i === active ? 'text-white/85' : 'text-neutral-500'
                }`}>
                  "{t.quote}"
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
