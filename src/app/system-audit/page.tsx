'use client';

import { motion } from 'framer-motion';

const tools = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: 'Reconnaissance',
    items: ['subfinder — subdomain discovery', 'amass — attack surface mapping', 'assetfinder — related domains', 'httpx — probe verification'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    title: 'Document Analysis',
    items: ['pdf-parser — metadata extraction', 'exiftool — file forensics', 'OCR pipelines — scanned docs', 'grep/ripgrep — text search'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
        <path d="M21 3v5h-5"/>
      </svg>
    ),
    title: 'Network Mapping',
    items: ['nuclei — vulnerability scanning', 'theHarvester — OSINT aggregation', 'maltego — visual linking', 'shodan — internet-wide search'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Operational Security',
    items: ['Tor/proxy chains', 'VM isolation', 'compartmentalized identities', 'encrypted communications'],
  },
];

const processSteps = [
  { title: 'Define', desc: 'What are you trying to prove? Scope the question.' },
  { title: 'Collect', desc: 'Gather primary sources. Government docs, court filings, corporate records.' },
  { title: 'Verify', desc: 'Cross-reference. Never trust a single source.' },
  { title: 'Analyze', desc: 'Find the pattern. Connect the dots.' },
  { title: 'Publish', desc: 'Document everything. Make it reproducible.' },
];

const products = [
  {
    title: 'The Digital Audit Handbook',
    price: '£29',
    desc: 'Complete methodology for conducting system audits. Tools, process, legal considerations.',
    href: 'https://thomasterr.gumroad.com/l/zynwze',
  },
  {
    title: 'Privacy Playbook for the Paranoid',
    price: '£19',
    desc: 'Operational security for researchers, journalists, and activists.',
    href: 'https://thomasterr.gumroad.com/l/apsjch',
  },
];

export default function SystemAuditPage() {
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
              { "@type": "ListItem", "position": 2, "name": "Systems Audit", "item": "https://thom-aster.com/system-audit" }
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
          <h1 className="text-4xl md:text-5xl font-semibold mb-2">Systems Audit</h1>
          <p className="text-[var(--text-muted)] uppercase tracking-widest text-sm">OSINT Methodology & Tools</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          {/* Intro */}
          <motion.div
            className="max-w-3xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xl text-[var(--text-primary)] mb-4">
              You shouldn&apos;t have to be a hacker to understand how the system works.
            </p>
            <p className="text-[var(--text-secondary)]">
              These frameworks and tools represent my investigative process — open-source, reproducible, and accessible to anyone willing to dig.
            </p>
          </motion.div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                className="bg-[var(--bg-card)] border border-white/5 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-10 h-10 text-[var(--accent)] mb-4">{tool.icon}</div>
                <h3 className="text-lg font-semibold mb-4">{tool.title}</h3>
                <ul className="space-y-2">
                  {tool.items.map((item, j) => (
                    <li key={j} className="text-sm text-[var(--text-secondary)] font-mono">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Methodology */}
          <motion.div
            className="bg-[var(--bg-tertiary)] rounded-xl p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-6">The Process</h2>
            <ol className="space-y-4">
              {processSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-4 text-[var(--text-secondary)]">
                  <span className="flex-shrink-0 w-8 h-8 bg-[var(--accent)] text-[var(--bg-primary)] rounded-full flex items-center justify-center font-semibold text-sm">
                    {i + 1}
                  </span>
                  <span>
                    <strong className="text-[var(--text-primary)]">{step.title}</strong> — {step.desc}
                  </span>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Products */}
          <motion.div
            className="pt-12 border-t border-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-8">Available Products</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product, i) => (
                <div key={i} className="bg-[var(--bg-card)] border border-white/5 rounded-xl p-8">
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-2xl font-semibold text-[var(--accent)] mb-4">{product.price}</p>
                  <p className="text-[var(--text-secondary)] mb-6">{product.desc}</p>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-[var(--text-primary)] rounded-md font-medium no-underline transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    Get on Gumroad →
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}