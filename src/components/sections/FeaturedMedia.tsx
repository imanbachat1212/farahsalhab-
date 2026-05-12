import { useState } from 'react'
import { Play, X, Instagram } from 'lucide-react'
import { media } from '@/data/content'

function VideoModal({ embedId, title, onClose }: { embedId: string; title: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Video: ${title}`}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
          aria-label="Close video"
        >
          <X size={20} />
        </button>
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default function FeaturedMedia() {
  const [activeVideo, setActiveVideo] = useState<(typeof media)[0] | null>(null)

  return (
    <section
      id="media"
      className="section-padding bg-gradient-subtle"
      aria-labelledby="media-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="section-tag mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary-600" />
            Featured Media
          </div>
          <h2 id="media-heading" className="section-title">
            Talks &amp; Highlights on{' '}
            <span className="gradient-text">Gender Equity</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Conversations, panels, and expert features on gender equity, inclusion, and humanitarian work.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {media.map((item) => {
            const isInstagram = item.type === 'instagram'
            return (
            <article
              key={item.id}
              className="card overflow-hidden group cursor-pointer"
              onClick={() => isInstagram ? window.open(item.url, '_blank', 'noopener') : setActiveVideo(item)}
              onKeyDown={(e) => e.key === 'Enter' && (isInstagram ? window.open(item.url, '_blank', 'noopener') : setActiveVideo(item))}
              tabIndex={0}
              role="button"
              aria-label={isInstagram ? `View on Instagram: ${item.title}` : `Play video: ${item.title}`}
              itemScope
              itemType="https://schema.org/VideoObject"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={`Thumbnail for: ${item.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  itemProp="thumbnailUrl"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary-900/40 group-hover:bg-primary-900/30 transition-colors duration-300" />

                {/* Play / Instagram button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {isInstagram
                      ? <Instagram size={26} className="text-primary-700" />
                      : <Play size={24} className="text-primary-700 ml-1" fill="currentColor" />
                    }
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-2">
                <h3
                  className="font-display font-bold text-neutral-900 text-fluid-lg leading-snug group-hover:text-primary-700 transition-colors"
                  itemProp="name"
                >
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed" itemProp="description">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 pt-1 text-primary-600 font-semibold text-sm">
                  {isInstagram
                    ? <><Instagram size={14} /> View on Instagram</>
                    : <><Play size={14} fill="currentColor" /> Watch Video</>
                  }
                </div>
              </div>
            </article>
            )
          })}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal
          embedId={activeVideo.embedId}
          title={activeVideo.title}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  )
}
