import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Research Services — Thom Aster',
  description: 'Professional OSINT research services. Corporate due diligence, digital footprint analysis, and public records investigation.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-[calc(70px+4rem)] px-8 pb-16">
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <h1 className="text-4xl font-semibold mb-6">
            Research Services
          </h1>
          <p className="text-[var(--text-secondary)] text-lg mb-12 max-w-[700px]">
            Professional open-source intelligence research for journalists, researchers, and organisations. 
            All work is conducted using publicly available information only.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <section className="mb-16">
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-semibold mb-6 relative inline-block">
              What I Research
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[var(--accent)]" />
            </h2>
          </FadeIn>

          <div className="grid gap-6">
            {[
              {
                title: 'Corporate Due Diligence',
                description: 'Company structures, beneficial ownership, director networks, financial histories, and regulatory filings. UK and international entities.',
              },
              {
                title: 'Public Records Research',
                description: 'Court records, regulatory filings, property registers, electoral data, and official publications. All from public sources.',
              },
              {
                title: 'Digital Footprint Analysis',
                description: 'Domain histories, infrastructure mapping, social media presence, content archives, and online reputation landscapes.',
              },
              {
                title: 'Source Verification',
                description: 'Fact-checking claims, verifying documents, cross-referencing public statements against official records.',
              },
              {
                title: 'Timeline Reconstruction',
                description: 'Building chronological narratives from public records, news archives, and official documentation.',
              },
            ].map((service, i) => (
              <FadeIn key={service.title} delay={0.15 + i * 0.05}>
                <div className="bg-[var(--bg-card)] border border-white/5 rounded-xl p-6 hover:border-[var(--accent)]/20 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* What I Don't Research */}
        <section className="mb-16">
          <FadeIn delay={0.3}>
            <h2 className="text-2xl font-semibold mb-6 relative inline-block">
              What I Don&apos;t Research
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[var(--accent)]" />
            </h2>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="bg-[var(--bg-secondary)] border border-white/10 rounded-xl p-6">
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">✕</span>
                  <span>Private individuals for personal disputes, domestic conflicts, or relationship matters</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">✕</span>
                  <span>Surveillance, physical tracking, or real-time monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">✕</span>
                  <span>Access to private communications, databases, or non-public records</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">✕</span>
                  <span>Harassment, stalking, or enabling targeting of individuals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">✕</span>
                  <span>Anything that would violate UK GDPR, Data Protection Act 2018, or PACE guidelines</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </section>

        {/* Terms */}
        <section className="mb-16">
          <FadeIn delay={0.4}>
            <h2 className="text-2xl font-semibold mb-6 relative inline-block">
              Terms of Engagement
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[var(--accent)]" />
            </h2>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="bg-[var(--bg-card)] border border-white/5 rounded-xl p-6 space-y-4 text-[var(--text-secondary)]">
              <p>
                <strong className="text-[var(--text-primary)]">Scope:</strong> All research is limited to publicly available information. 
                I do not access private databases, conduct surveillance, or use deceptive practices.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Right to Refuse:</strong> I reserve the right to decline any engagement 
                without explanation. If a request conflicts with my ethical guidelines or legal obligations, 
                I will not proceed.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Deliverables:</strong> Research is delivered as written reports with 
                source citations. I do not provide raw data dumps or unverified findings.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Confidentiality:</strong> Client identity and engagement details are kept 
                confidential. Research subjects are not notified.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent-dim)]/10 border border-[var(--accent)]/20 rounded-xl p-8 text-center">
          <FadeIn delay={0.5}>
            <h2 className="text-2xl font-semibold mb-4">Discuss Your Research Needs</h2>
            <p className="text-[var(--text-secondary)] mb-6 max-w-[500px] mx-auto">
              Reach out to discuss scope, timeline, and deliverables. 
              All enquiries are confidential.
            </p>
            <a
              href="mailto:thomaster.journo@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dim)] text-[var(--bg-primary)] rounded-md font-medium no-underline transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,212,255,0.3)]"
            >
              <span>Get in Touch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </FadeIn>
        </section>

        {/* Back Link */}
        <FadeIn delay={0.6}>
          <div className="mt-12">
            <Link href="/" className="text-[var(--accent)] no-underline hover:opacity-80">
              ← Back to home
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}