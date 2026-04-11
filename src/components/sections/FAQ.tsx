import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/data/content'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="section-padding bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="section-tag mx-auto">
              <span className="w-2 h-2 rounded-full bg-primary-600" />
              FAQ
            </div>
            <h2 id="faq-heading" className="section-title">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="section-subtitle">
              Clear answers to common questions about gender mainstreaming, feminist M&amp;E, and inclusion consulting.
            </p>
          </div>

          {/* FAQ Items */}
          <div
            className="space-y-3"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-neutral-200 overflow-hidden transition-all duration-300 hover:border-primary-200"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-primary-50/50 transition-colors"
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <h3
                    className="font-display font-semibold text-neutral-900 text-base leading-snug"
                    itemProp="name"
                  >
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-primary-600 shrink-0 mt-0.5 transition-transform duration-300 ${
                      open === i ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? 'max-h-96' : 'max-h-0'
                  }`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p
                    className="px-6 pb-6 text-neutral-600 leading-relaxed"
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
