'use client';

import { motion } from 'framer-motion';
import Terminal from '@/components/Terminal';

const contactMethods = [
  { label: 'Email', value: 'thomaster.journo@gmail.com', href: 'mailto:thomaster.journo@gmail.com' },
  { label: 'Substack', value: '@thomaster', href: 'https://thomaster.substack.com' },
  { label: 'X / Twitter', value: '@ThomAsterJourno', href: 'https://twitter.com/ThomAsterJourno' },
  { label: 'Bluesky', value: '@thomaster', href: 'https://bsky.app/profile/thomaster.substack.com' },
];

const services = [
  'Investigative research & reporting',
  'Ghost writing (long-form, technical)',
  'OSINT methodology consulting',
  'Digital audit frameworks',
];

export default function ContactPage() {
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
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://thom-aster.com/contact" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Thom Aster",
            "description": "Contact Thom Aster for investigative commissions, ghost writing, and confidential tips.",
            "url": "https://thom-aster.com/contact",
            "mainEntity": {
              "@type": "Person",
              "name": "Thom Aster",
              "email": "mailto:thomaster.journo@gmail.com",
              "sameAs": [
                "https://twitter.com/ThomAsterJourno",
                "https://thomaster.substack.com"
              ]
            }
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
          <h1 className="text-4xl md:text-5xl font-semibold mb-2">Contact</h1>
          <p className="text-[var(--text-muted)] uppercase tracking-widest text-sm">Get in Touch</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-16 pb-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-[var(--text-primary)] mb-8">
                Available for investigative commissions, ghost writing, and consulting.
              </p>

              <div className="space-y-6 mb-8">
                {contactMethods.map((method, i) => (
                  <div key={i}>
                    <h3 className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-1">{method.label}</h3>
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[var(--accent)] no-underline hover:underline"
                    >
                      {method.value}
                    </a>
                  </div>
                ))}

                <div className="pt-4 border-t border-white/10">
                  <h3 className="text-sm font-medium mb-2">🔒 Anonymous Tip</h3>
                  <a href="/submit-tip" className="text-[var(--accent)] no-underline hover:underline">
                    Submit confidential information
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  {services.map((service, i) => (
                    <li key={i} className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <span className="text-[var(--accent)]">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Terminal
                title="thom-aster ~ contact"
                lines={[
                  { prompt: '$', output: 'ping thom-aster' },
                  { output: '64 bytes from thom-aster.com: ttl=64 time=0.042 ms' },
                  { prompt: '$', output: 'echo "Let\'s collaborate"' },
                  { output: "Let's collaborate" },
                  { prompt: '$', output: 'mail -s "Inquiry" thomaster.journo@gmail.com' },
                  { prompt: '$', output: '_' },
                ]}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}