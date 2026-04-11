import { ArrowRight, Calendar, User, Tag } from 'lucide-react'
import { blogPosts } from '@/data/content'

export default function Blog() {
  return (
    <section
      id="blog"
      className="section-padding bg-gradient-subtle"
      aria-labelledby="blog-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="section-tag">
              <span className="w-2 h-2 rounded-full bg-primary-600" />
              Blog &amp; Insights
            </div>
            <h2 id="blog-heading" className="section-title">
              Latest Insights on{' '}
              <span className="gradient-text">Gender Equality</span>
            </h2>
          </div>
          <a
            href="blog.html"
            className="btn-outline shrink-0"
          >
            View All Posts
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Blog grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="card group overflow-hidden"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-600/90 text-white text-xs font-semibold backdrop-blur-sm">
                    <Tag size={10} />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                {/* Meta */}
                <div className="flex items-center gap-3 text-neutral-400 text-xs">
                  <span className="flex items-center gap-1">
                    <User size={11} />
                    <span itemProp="author">{post.author}</span>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-neutral-300" />
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    <time itemProp="datePublished">{post.date}</time>
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-neutral-900 leading-snug group-hover:text-primary-700 transition-colors" itemProp="headline">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3" itemProp="description">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <a
                  href={post.href}
                  className="inline-flex items-center gap-1.5 text-primary-600 font-semibold text-sm hover:gap-2.5 transition-all duration-200 pt-1"
                  itemProp="url"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
