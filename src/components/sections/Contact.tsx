import { useState } from 'react'
import { Mail, MapPin, Linkedin, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, connect to a form service (Netlify Forms, Formspree, etc.)
    const subject = encodeURIComponent(`Inquiry from ${form.name} – ${form.service || 'General'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.org}\nService Interest: ${form.service}\n\n${form.message}`
    )
    window.location.href = `mailto:farah.salhab@outlook.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const serviceOptions = [
    'Workplace Diversity, Equity & Inclusion',
    'Accessibility Assessments',
    'Gender Strategy Development',
    'Feminist M&E / Proposal Guidance',
    'GEDI/GESI Analysis',
    'Individual Coaching',
    'Training & Courses',
    'Custom Toolkits',
    'Social Work Plans',
    'Other',
  ]

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-hero relative overflow-hidden"
      aria-labelledby="contact-heading"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh-purple opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary-400/15 blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left – Info */}
          <div className="lg:col-span-2 text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white/90 uppercase tracking-widest">
                Contact
              </div>
              <h2 id="contact-heading" className="section-title text-white text-balance">
                Let's Work Together
              </h2>
              <p className="text-white/75 text-fluid-base leading-relaxed">
                Ready to advance gender equality and inclusion in your organization?
                Reach out to explore how Farah can support your goals.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href="mailto:farah.salhab@outlook.com"
                className="flex items-center gap-4 group"
                aria-label="Email Farah Salhab"
                itemProp="email"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <Mail size={20} className="text-gold-300" />
                </div>
                <div>
                  <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Email</p>
                  <p className="text-white font-semibold group-hover:text-gold-300 transition-colors">
                    farah.salhab@outlook.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <MapPin size={20} className="text-gold-300" />
                </div>
                <div>
                  <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Location</p>
                  <p className="text-white font-semibold" itemProp="address">
                    Beirut, Lebanon · Available Globally
                  </p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/fs1992/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="Farah Salhab LinkedIn profile"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#0077B5]/30 transition-colors">
                  <Linkedin size={20} className="text-gold-300" />
                </div>
                <div>
                  <p className="text-white/60 text-xs font-medium uppercase tracking-wider">LinkedIn</p>
                  <p className="text-white font-semibold group-hover:text-gold-300 transition-colors">
                    linkedin.com/in/fs1992
                  </p>
                </div>
              </a>
            </div>

            {/* Response time */}
            <div className="glass rounded-2xl p-5 space-y-1">
              <p className="text-white font-semibold text-sm">Typical Response Time</p>
              <p className="text-white/70 text-sm">Within 24–48 business hours</p>
            </div>
          </div>

          {/* Right – Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-7 md:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} className="text-primary-600" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-neutral-900">Message Sent!</h3>
                  <p className="text-neutral-500">Thank you for reaching out. Farah will get back to you within 24–48 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h3 className="font-display font-bold text-xl text-neutral-900 mb-6">
                    Send a Message
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-sm font-semibold text-neutral-700">
                        Full Name <span className="text-primary-600" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-sm font-semibold text-neutral-700">
                        Email Address <span className="text-primary-600" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="org" className="block text-sm font-semibold text-neutral-700">
                      Organization
                    </label>
                    <input
                      id="org"
                      type="text"
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      placeholder="Your organization name"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="service" className="block text-sm font-semibold text-neutral-700">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all text-sm bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700">
                      Message <span className="text-primary-600" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project, goals, and how I can help..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center py-4 text-base"
                  >
                    <Send size={18} />
                    Send Message
                  </button>

                  <p className="text-neutral-400 text-xs text-center">
                    Your information is kept confidential and never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
