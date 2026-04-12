'use client';

import Link from 'next/link';
import Terminal from '@/components/Terminal';
import FadeIn from '@/components/FadeIn';

export default function HomeClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 pt-[calc(70px+2rem)] pb-16 relative z-[2]">
        <div className="text-center max-w-[700px] pt-8">
          <FadeIn delay={0}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
              <span className="block">Investigating</span>
              <span className="block text-[var(--accent)]">Hidden Systems</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.15}>
            <p className="text-sm uppercase tracking-widest text-[var(--text-secondary)] mb-8">
              Surveillance • Geopolitics • Intelligence • Accountability
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dim)] text-[var(--bg-primary)] rounded-md font-medium no-underline transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,212,255,0.3)]"
              >
                <span>Read Investigations</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a
                href="https://thomaster.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-[var(--text-primary)] rounded-md font-medium no-underline transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <span>Subscribe on Substack</span>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <FadeIn delay={0.5}>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)] text-xs uppercase tracking-widest">
            <div className="w-6 h-10 border-2 border-[var(--text-muted)] rounded-full relative">
              <div className="w-1 h-2 bg-[var(--accent)] rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce" />
            </div>
            <span>Scroll</span>
          </div>
        </FadeIn>
      </section>

      {/* Featured Section */}
      <section className="bg-[var(--bg-secondary)] py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <FadeIn>
            <h2 className="text-2xl font-semibold mb-10 relative inline-block">
              Featured Investigation
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[var(--accent)]" />
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <article className="bg-[var(--bg-card)] border border-white/5 rounded-xl p-8 transition-all duration-300 hover:border-[var(--accent)]/20 hover:-translate-y-1">
              <div className="flex gap-4 mb-4 text-sm">
                <time className="text-[var(--text-muted)]">November 2025</time>
                <span className="text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded">UK Government</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Britain's Hidden Plague Rehearsal</h3>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                The untold story of Exercise Pegasus and the £7.5 million morgue contract. How the UK government quietly prepared for mass casualties years before COVID.
              </p>
              <div className="flex gap-6 mb-6 text-sm text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  53 likes
                </span>
                <span className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4"/>
                  </svg>
                  22 restacks
                </span>
              </div>
              <Link href="/articles#pegasus" className="text-[var(--accent)] font-medium no-underline hover:opacity-80">
                Read article →
              </Link>
            </article>
          </FadeIn>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" delay={0.1}>
              <div>
                <h2 className="text-2xl font-semibold mb-6 relative inline-block">
                  The Systems Auditor
                  <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[var(--accent)]" />
                </h2>
                <p className="text-[var(--text-secondary)] mb-4">
                  Centrist-right. No party. No filter. Investigating the machinery most pretend isn&apos;t there — from Palantir networks to pandemic preparedness exercises.
                </p>
                <p className="text-[var(--text-secondary)] mb-4">
                  Available for consulting and ghost writing.{' '}
                  <a
                    href="https://buymeacoffee.com/thomaster"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] no-underline"
                  >
                    Support this work ☕
                  </a>
                </p>
                <Link href="/about" className="text-[var(--accent)] font-medium no-underline hover:opacity-80">
                  Learn more →
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="order-first md:order-last">
                <Terminal
                  title="thom-aster ~ audit-log"
                  lines={[
                    { prompt: '$', output: 'whois thom-aster' },
                    { output: 'Independent journalist' },
                    { prompt: '$', output: 'cat focus-areas.txt' },
                    { output: 'Surveillance tech\nIntel networks\nInstitutional capture' },
                    { prompt: '$', output: '_' },
                  ]}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="bg-[var(--bg-secondary)] py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <FadeIn>
            <h2 className="text-2xl font-semibold mb-10 relative inline-block">
              Connect
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[var(--accent)]" />
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Substack',
                handle: '@thomaster',
                href: 'https://thomaster.substack.com',
                icon: <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812h21.08v2.836H1.46v-2.836zm0 5.406h21.08v2.836H1.46v-2.836z"/>
              },
              {
                name: 'X / Twitter',
                handle: '@ThomAsterJourno',
                href: 'https://twitter.com/ThomAsterJourno',
                icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117"/>
              },
              {
                name: 'Bluesky',
                handle: '@thomaster',
                href: 'https://bsky.app/profile/thomaster.substack.com',
                icon: <path d="M12 2L2 22h20L12 2zm0 4l7 14H5l7-14z"/>
              },
            ].map((social, i) => (
              <FadeIn key={social.name} delay={0.1 + i * 0.1}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--bg-card)] border border-white/5 rounded-xl p-8 text-center no-underline transition-all duration-300 hover:border-[var(--accent)]/30 hover:-translate-y-1 block"
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-[var(--accent)]">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      {social.icon}
                    </svg>
                  </div>
                  <span className="block font-medium text-[var(--text-primary)] mb-1">{social.name}</span>
                  <span className="text-sm text-[var(--text-muted)]">{social.handle}</span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}