import { Mail, MapPin, Linkedin, ArrowUp, Heart } from "lucide-react";
import { navLinks, about } from "@/data/content";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="bg-neutral-950 text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              aria-label="Farah Salhab – home"
            >
              <img
                src="/assets/images/seo/Gender&InclusionExpert.png"
                alt="Farah Salhab official logo – Gender and Inclusion Expert"
                className="h-12 w-auto object-contain brightness-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </a>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Intersectional feminist and inclusion expert with 12 years of
              experience advancing gender equality, diversity, and inclusion
              across MENA and beyond.
            </p>

            {/* Expertise pills */}
            <div className="flex flex-wrap gap-2">
              {about.expertise.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 text-xs font-medium border border-neutral-700"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="mailto:farah.salhab@outlook.com"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-700 flex items-center justify-center transition-colors"
                aria-label="Email Farah Salhab"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/fs1992/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-[#0077B5] flex items-center justify-center transition-colors"
                aria-label="Farah Salhab LinkedIn profile"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="font-display font-bold text-sm uppercase tracking-widest text-neutral-400 mb-5">
              Navigation
            </p>
            <ul className="space-y-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-neutral-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-600 opacity-0 group-hover:opacity-100" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="font-display font-bold text-sm uppercase tracking-widest text-neutral-400 mb-5">
              Get in Touch
            </p>
            <div className="space-y-4">
              <a
                href="mailto:farah.salhab@outlook.com"
                className="flex items-start gap-3 group"
              >
                <Mail size={16} className="text-primary-400 mt-0.5 shrink-0" />
                <span className="text-neutral-400 group-hover:text-white text-sm transition-colors break-all">
                  farah.salhab@outlook.com
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-primary-400 mt-0.5 shrink-0"
                />
                <span className="text-neutral-400 text-sm">
                  Lebanon, Beirut
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs text-center sm:text-left">
            Copyright © 2024 Farah Salhab · Gender &amp; Inclusion Expert · All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-neutral-500 text-xs flex items-center gap-1">
              Made with{" "}
              <Heart size={12} className="text-primary-500 fill-primary-500" />{" "}
              in Beirut
            </p>
            <a
              href="https://imandev.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-300 text-xs transition-colors"
            >
              Designed &amp; Developed
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-glow-purple flex items-center justify-center transition-all duration-200 hover:-translate-y-1 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
