"use client";

import { ScrollReveal } from '@/components/Animations';
import Magnetic from '@/components/Magnetic';
import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pb-28">
        <div className="container">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-6">About Us</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="max-w-4xl mb-8">
              We do not just understand the math. We understand the <span className="text-primary">market.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted text-lg md:text-xl max-w-2xl leading-relaxed">
              Wecreate Consult was built on a simple premise: brilliant businesses in Africa are failing to raise capital because they cannot translate their operational reality into investor language.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/samuel_portrait.png"
                  alt="Samuel Ngoka, Founder of Wecreate Consult"
                  className="w-full h-auto grayscale-[20%]"
                />
              </div>
              <p className="mt-3 font-bold text-sm">Samuel Ngoka, Founder & Principal</p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="mb-8">The firm that bridges the gap.</h2>
                <div className="space-y-5 text-muted text-lg leading-relaxed">
                  <p>Samuel Ngoka founded Wecreate Consult after seeing a repeated pattern across the African startup ecosystem: founders with genuine traction, solid unit economics, and massive total addressable markets who were still failing to close rounds.</p>
                  <p>The problem was rarely the business. The problem was the translation. Investors look for specific structures, specific models, and a specific narrative cadence that operators often lack the time or context to build.</p>
                  <p>We built a team to fix that. Today, we are a collective of financial analysts, strategists, and storytellers based in Abuja. We don't just dress up bad ideas; we take good ideas and make them undeniable.</p>
                </div>
                <div className="mt-10">
                  <Magnetic>
                    <Link href="/services" className="inline-block border-2 border-dark text-dark px-8 py-3 rounded-full font-semibold hover:bg-dark hover:text-white transition-all">
                      See our services
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container">
          <ScrollReveal>
            <h2 className="mb-16">How we operate</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { title: 'Data over dogma', text: 'We do not build models on wishes. We build them on verifiable assumptions and stress-tested logic.' },
              { title: 'Absolute candor', text: 'If your valuation expectation is absurd, we will tell you. If your GTM is flawed, we will flag it. We are not here to agree with you; we are here to get you funded.' },
              { title: 'The African context', text: 'We understand that African markets do not always behave like Silicon Valley textbooks. We build narratives that reflect that reality.' },
              { title: 'Confidentiality as default', text: 'We deal with cap tables, unreleased numbers, and sensitive pivots. Our lips are sealed. Always.' }
            ].map((value, i) => (
              <ScrollReveal key={i} delay={0.1 * i}>
                <div className="border-t border-border pt-6">
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-muted leading-relaxed">{value.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
