"use client";

import { ScrollReveal } from '@/components/Animations';
import PageIslandLayout from '@/components/PageIslandLayout';

export default function Work() {
  const works = [
    { client: "Afritech Health", sector: "Healthtech", service: "Financial Model & Valuation", outcome: "Closed $1.2M Pre-Seed round.", year: "2025" },
    { client: "Lagos Consumer App", sector: "E-Commerce", service: "Go-To-Market Strategy", outcome: "100k active users in 4 months.", year: "2025" },
    { client: "Diaspora Real Estate", sector: "PropTech", service: "Pitch Deck & Pitch Prep", outcome: "Syndicated $2M bridge round.", year: "2024" },
    { client: "Abuja Agritech Cooperative", sector: "AgriTech", service: "Grant Writing", outcome: "$250k non-dilutive grant.", year: "2024" },
  ];

  return (
    <PageIslandLayout title="Selected Work">
      <div className="flex flex-col gap-12 md:gap-20">
        {/* Intro */}
        <section className="pt-8">
          <div className="container">
            <ScrollReveal delay={0.1}>
              <h2 className="max-w-3xl mb-8 text-4xl md:text-5xl font-medium tracking-tight">
                Work that stands up to <span className="text-primary">diligence.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted text-lg md:text-xl max-w-xl leading-relaxed">
                Confidentiality is our default. Here is a curated selection of recent outcomes.
              </p>
            </ScrollReveal>
          </div>
        </section>

      {/* Work Table */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-[2fr_1.5fr_2fr_0.5fr] gap-4 pb-4 border-b-2 border-dark text-xs uppercase tracking-[0.15em] text-muted font-semibold">
            <span>Client</span>
            <span>Service</span>
            <span>Outcome</span>
            <span className="text-right">Year</span>
          </div>

          {works.map((work, idx) => (
            <ScrollReveal key={idx} delay={0.05}>
              <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr_2fr_0.5fr] gap-2 md:gap-4 py-6 md:py-8 border-b border-border group hover:bg-surface transition-colors cursor-default px-2 -mx-2 rounded-lg">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{work.client}</h3>
                  <span className="text-xs uppercase tracking-widest text-muted">{work.sector}</span>
                </div>
                <div className="flex items-center">
                  <p className="font-medium text-dark">{work.service}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-primary font-medium">{work.outcome}</p>
                </div>
                <div className="flex items-center md:justify-end">
                  <span className="font-bold text-muted">{work.year}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      </div>
    </PageIslandLayout>
  );
}
