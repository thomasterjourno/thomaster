'use client';

import { motion } from 'framer-motion';
import Terminal from '@/components/Terminal';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function AboutPage() {
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
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://thom-aster.com/about" }
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
          <h1 className="text-4xl md:text-5xl font-semibold mb-2">About</h1>
          <p className="text-[var(--text-muted)] uppercase tracking-widest text-sm">The Systems Auditor</p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeInUp}>
              <p className="text-xl text-[var(--text-primary)] mb-6">
                I investigate the machinery most pretend isn&apos;t there.
              </p>

              <p className="text-[var(--text-secondary)] mb-4">
                Thom Aster is an independent investigative journalist operating exclusively through Substack since July 2025. The focus: hidden power structures, surveillance infrastructure, and institutional accountability.
              </p>

              <p className="text-[var(--text-secondary)] mb-4">Work spans:</p>
              <ul className="list-none mb-6 space-y-2">
                {[
                  { title: 'Surveillance Technology', desc: 'Palantir, Clearview AI, neural weapons, CBDCs' },
                  { title: 'Geopolitics', desc: 'Intelligence networks, UK/US policy, Middle East, China' },
                  { title: 'Institutional Capture', desc: 'WEF-Reform networks, Blair influence operations' },
                  { title: 'Pandemic Preparedness', desc: 'Exercise Pegasus, government procurement' },
                ].map((item, i) => (
                  <li key={i} className="pl-6 relative text-[var(--text-secondary)]">
                    <span className="absolute left-0 text-[var(--accent)]">→</span>
                    <strong className="text-[var(--text-primary)]">{item.title}</strong> — {item.desc}
                  </li>
                ))}
              </ul>

              <p className="text-[var(--text-secondary)] mb-4">
                Self-described as &quot;Centrist-right Systems Auditor. No party. No filter.&quot;
              </p>

              <p className="text-[var(--text-secondary)] mb-6">
                Available for ghost writing, consulting, and investigative commissions.
              </p>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-lg font-semibold mb-4">Support Independent Journalism</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  If you find this work valuable, consider supporting it directly.
                </p>
                <a
                  href="https://buymeacoffee.com/thomaster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-[var(--text-primary)] rounded-md font-medium no-underline transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <span>☕ Buy Me a Coffee</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Terminal
                title="thom-aster ~ profile"
                lines={[
                  { prompt: '$', output: 'cat credentials.txt' },
                  { output: 'Independent journalist\nSubstack exclusive\n145+ subscribers' },
                  { prompt: '$', output: 'head -5 publications.log' },
                  { output: "Britain's Hidden Plague Rehearsal\nThe Palantir-BIS Control Grid\nThe Shadow State\nThe Blair Network\nThe Memo That Killed Americans" },
                  { prompt: '$', output: '_' },
                ]}
              />
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {[
              { num: '500+', label: 'Articles' },
              { num: '2025', label: 'Active Since' },
              { num: '20+', label: 'Viral Investigations' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-[var(--bg-card)] rounded-xl border border-white/5">
                <span className="block text-2xl font-semibold text-[var(--accent)] font-mono mb-1">{stat.num}</span>
                <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}