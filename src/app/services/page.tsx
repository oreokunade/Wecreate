"use client";

import { ScrollReveal } from '@/components/Animations';
import Magnetic from '@/components/Magnetic';
import Link from 'next/link';
import PageIslandLayout from '@/components/PageIslandLayout';

export default function Services() {
  const services = [
    {
      id: 'investment-readiness',
      title: 'Investment Readiness',
      desc: 'You have the traction. We build the proof.',
      items: ['Pitch Deck Creation & Restructuring', 'Financial Modeling & Forecasting', 'Cap Table Structuring', 'Company Valuation Reports', 'Data Room Preparation']
    },
    {
      id: 'fundraising',
      title: 'Fundraising Execution',
      desc: 'Closing the round requires a process, not just a pitch.',
      items: ['Investor Targeting & List Building', 'Outreach Strategy', 'Term Sheet Advisory', 'Pitch Practice & Defense Prep']
    },
    {
      id: 'gtm',
      title: 'Go-to-Market & Growth',
      desc: 'Launching is easy. Defensible market share is hard.',
      items: ['Market Entry Strategy', 'Pricing & Revenue Models', 'Customer Acquisition Planning', 'Marketing Budget Allocation']
    },
    {
      id: 'grants',
      title: 'Grant Writing',
      desc: 'Non-dilutive capital for impact-driven models.',
      items: ['Grant Opportunity Sourcing', 'Concept Note Drafting', 'Full Proposal Development', 'Budget Justification']
    },
    {
      id: 'advisory',
      title: 'Business Advisory',
      desc: 'Clarity for the operational blind spots.',
      items: ['Business Model Canvas', 'Operational Structuring', 'Strategic Pivot Planning']
    },
    {
      id: 'media',
      title: 'Brand & Media',
      desc: 'Building the narrative that drives pipeline.',
      items: ['Corporate Identity', 'Content Strategy', 'Campaign Execution']
    }
  ];

  return (
    <PageIslandLayout title="Services">
      <div className="flex flex-col gap-12 md:gap-20">
        {/* Intro */}
        <section className="pt-8">
          <div className="container">
            <ScrollReveal delay={0.1}>
              <h2 className="max-w-3xl mb-8 text-4xl md:text-5xl font-medium tracking-tight">
                We build the structures that <span className="text-primary">capital</span> requires.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted text-lg md:text-xl max-w-xl leading-relaxed">
                Six practice areas. One unified goal: getting your business funded, launched, and scaled.
              </p>
            </ScrollReveal>
          </div>
        </section>

      {/* Services List */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          {services.map((service, idx) => (
            <ScrollReveal key={service.id} delay={0.05}>
              <div
                id={service.id}
                className="py-12 border-t border-border grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16"
              >
                <div>
                  <span className="text-4xl font-bold text-primary/30 block mb-3">0{idx + 1}</span>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted">{service.desc}</p>
                </div>
                <div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        className="bg-surface px-5 py-4 rounded-lg font-semibold text-sm text-dark"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Magnetic>
                    <Link
                      href="/contact"
                      className="inline-block border-2 border-primary text-primary px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-all"
                    >
                      Request this service
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </section>
      </div>
    </PageIslandLayout>
  );
}
