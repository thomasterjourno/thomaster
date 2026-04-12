'use client';

import { motion } from 'framer-motion';

const articles = [
  {
    featured: true,
    date: 'November 14, 2025',
    tag: 'UK Government',
    title: "Britain's Hidden Plague Rehearsal",
    excerpt: 'The untold story of Exercise Pegasus and the £7.5 million morgue contract. How the UK government quietly prepared for mass casualties years before COVID.',
    likes: 53,
    restacks: 22,
    href: 'https://thomaster.substack.com/p/britains-hidden-plague-rehearsal',
  },
  {
    date: 'April 2026',
    tag: 'Intelligence',
    title: 'The Shadow State',
    excerpt: "How Europe's intelligence network enabled assassinations, then rebranded as counter-terrorism.",
    href: 'https://thomaster.substack.com',
  },
  {
    date: 'April 2026',
    tag: 'Surveillance',
    title: 'The Full Stack',
    excerpt: "How Palantir, Clearview AI, and a $5M data broker built ICE's American surveillance network.",
    href: 'https://thomaster.substack.com',
  },
  {
    date: 'April 2026',
    tag: 'UK Politics',
    title: 'The Blair Network',
    excerpt: 'How a former Prime Minister built a £500 million influence operation.',
    href: 'https://thomaster.substack.com',
  },
  {
    date: 'April 2026',
    tag: 'Geopolitics',
    title: 'The Memo That Killed Americans',
    excerpt: 'Analysis of the Balaji autopsy report and institutional dysfunction.',
    href: 'https://thomaster.substack.com',
  },
];

export default function ArticlesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thom-aster.com/" },
              { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://thom-aster.com/articles" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "url": "https://thomaster.substack.com/p/britains-hidden-plague-rehearsal",
                "name": "Britain's Hidden Plague Rehearsal"
              }
            ]
          })
        }}
      />

      {/* Page Header */}
      <section className="pt-[calc(70px+4rem)] pb-8 text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-2">Articles</h1>
          <p className="text-[var(--text-muted)] uppercase tracking-widest text-sm">Investigations & Analysis</p>
        </motion.div>
      </section>

      {/* Articles List */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="space-y-6">
            {articles.map((article, i) => (
              <motion.article
                key={i}
                className={`bg-[var(--bg-card)] border rounded-xl p-6 transition-all duration-300 hover:-translate-x-1 ${
                  article.featured
                    ? 'border-[var(--accent)] bg-gradient-to-br from-[var(--accent)]/5 to-transparent'
                    : 'border-white/5 hover:border-[var(--accent)]/20'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex gap-4 mb-3 text-sm">
                  <time className="text-[var(--text-muted)]">{article.date}</time>
                  <span className="text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded">{article.tag}</span>
                </div>
                <h2 className="text-xl font-semibold mb-3">{article.title}</h2>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{article.excerpt}</p>
                {article.likes && (
                  <div className="flex gap-6 mb-4 text-sm text-[var(--text-muted)]">
                    <span>{article.likes} likes</span>
                    <span>{article.restacks} restacks</span>
                  </div>
                )}
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] font-medium no-underline hover:opacity-80"
                >
                  {article.featured ? 'Read on Substack →' : 'Read →'}
                </a>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://thomaster.substack.com/archive"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dim)] text-[var(--bg-primary)] rounded-md font-medium no-underline transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,212,255,0.3)]"
            >
              <span>View Full Archive</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}