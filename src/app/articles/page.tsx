'use client';

import { motion } from 'framer-motion';

const articles = [
  {
    featured: true,
    date: 'November 14, 2025',
    tag: 'UK Government',
    title: "Britain's Hidden Plague Rehearsal",
    excerpt: 'The untold story of Exercise Pegasus and the £7.5 million morgue contract. How the UK government quietly prepared for mass casualties years before COVID.',
    likes: 63,
    restacks: 29,
    href: 'https://thomaster.substack.com/p/britains-hidden-plague-rehearsal',
  },
  {
    date: 'May 4, 2026',
    tag: 'Pharma',
    title: 'The Immunotherapy "1-Minute Jab": Breakthrough or Pharmaceutical Marketing?',
    excerpt: 'What they didn\'t mention: it was approved based on drug exposure levels, not survival benefit. And the company behind it has paid over half a billion in settlements.',
    href: 'https://thomaster.substack.com/p/the-immunotherapy-1-minute-jab-breakthrough',
  },
  {
    date: 'May 4, 2026',
    tag: 'Genocide',
    title: 'Sudan: The Most Documented Genocide the World Ignored',
    excerpt: '12 million displaced. 60,000 killed in a single massacre. Famine confirmed. The most documented genocide of our time — and the world is doing nothing.',
    href: 'https://thomaster.substack.com/p/sudan-the-most-documented-genocide',
  },
  {
    date: 'April 28, 2026',
    tag: 'Business',
    title: 'How to Build a Business That Survives What\'s Coming',
    excerpt: 'Rigorous, actionable, sourced. The field manual for the decade ahead.',
    href: 'https://thomaster.substack.com/p/how-to-build-a-business-that-survives',
  },
  {
    date: 'April 28, 2026',
    tag: 'UK Intelligence',
    title: 'How GCHQ Built a Secret Pipeline to Jail Journalists — and Got Away With It',
    excerpt: 'Internal emails reveal how a former BBC journalist fed intelligence to GCHQ\'s domestic arm, which passed it to counter-terror police — who then detained journalists.',
    href: 'https://thomaster.substack.com/p/how-gchq-built-a-secret-pipeline',
  },
  {
    date: 'April 26, 2026',
    tag: 'USA',
    title: '12 Major Newsrooms Published Proof of Russian Microwave Attacks on Americans. Then They Deleted It.',
    excerpt: 'The Washington Post, AP, Reuters, CNN, and eight others covered a congressional hearing on directed-energy weapons targeting American diplomats. Every story was later removed.',
    likes: 5,
    restacks: 1,
    href: 'https://thomaster.substack.com/p/12-major-newsrooms-published-proof',
  },
  {
    date: 'April 23, 2026',
    tag: 'WEF',
    title: 'The Industrial Revolution Fraud',
    excerpt: 'What the WEF Doesn\'t Want You to Know About the 4IR.',
    likes: 15,
    restacks: 10,
    href: 'https://thomaster.substack.com/p/the-industrial-revolution-fraud',
  },
  {
    date: 'April 19, 2026',
    tag: 'Geopolitics',
    title: 'The Perfect Iran War Bets: How $1 Billion Was Made Trading On Information That Should Have Been Secret',
    excerpt: 'On Polymarket and oil futures, someone knew the exact timing of US military operations before they happened. The trades were legal. The system that enabled it is broken.',
    likes: 1,
    restacks: 1,
    href: 'https://thomaster.substack.com/p/the-perfect-iran-war-bets-how-1-billion',
  },
  {
    date: 'January 7, 2026',
    tag: 'Geopolitics',
    title: 'The Frozen Endgame: Trump\'s Greenland Gambit Exposes the Arctic Power Struggle Nobody Dared Admit',
    excerpt: 'The Arctic contains 30% of the world\'s undiscovered gas and 15% of oil. The race is already underway.',
    likes: 3,
    href: 'https://thomaster.substack.com/p/the-frozen-endgame-trumps-greenland',
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