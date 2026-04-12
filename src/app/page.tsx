import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Thom Aster — Investigative Journalist | Systems Audit',
  description: 'Thom Aster covers surveillance, geopolitics, intelligence, and institutional accountability. Independent investigative journalism with a focus on hidden power structures.',
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://thom-aster.com/#person",
            "name": "Thom Aster",
            "jobTitle": "Independent Investigative Journalist",
            "url": "https://thom-aster.com",
            "sameAs": [
              "https://twitter.com/ThomAsterJourno",
              "https://bsky.app/profile/thomaster.substack.com",
              "https://thomaster.substack.com",
              "https://github.com/thomasterjourno"
            ],
            "knowsAbout": [
              "Investigative Journalism",
              "Surveillance Technology",
              "Geopolitics",
              "Intelligence",
              "Institutional Accountability",
              "OSINT"
            ],
            "description": "Thom Aster investigates power structures, surveillance systems, and institutional accountability.",
            "nationality": "British",
            "worksFor": { "@type": "Organization", "name": "Independent" }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://thom-aster.com/#website",
            "url": "https://thom-aster.com",
            "name": "Thom Aster — Investigative Journalist",
            "description": "Independent investigative journalism on surveillance, geopolitics, intelligence, and institutional accountability.",
            "publisher": { "@id": "https://thom-aster.com/#person" },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://thom-aster.com/articles?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <HomeClient />
    </>
  );
}
