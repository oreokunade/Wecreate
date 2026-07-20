"use client";

import { ScrollReveal } from '@/components/Animations';
import Magnetic from '@/components/Magnetic';
import Link from 'next/link';

export default function Converge() {
  return (
    <div className="bg-dark text-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/images/converge_expo.png)' }}
        />
        <div className="container relative z-10">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-6">CONVERGE 2026</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="max-w-4xl mb-8 text-white">
              Abuja's premier startup expo.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              14 November 2026. Bringing together over 1,500 founders, investors, and operators building the future of African technology from the capital.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Magnetic>
              <Link href="/contact" className="inline-block bg-white text-dark px-10 py-4 rounded-full font-semibold text-base hover:bg-primary hover:text-white transition-all">
                Reserve your ticket
              </Link>
            </Magnetic>
          </ScrollReveal>
        </div>
      </section>

      {/* Details */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <div>
                <h2 className="text-white mb-6">Why Abuja?</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Lagos is the commercial capital, but Abuja is the regulatory heartbeat. As startups scale, the intersection of technology and policy becomes unavoidable. We are convening the ecosystem where the rules are written.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div>
                <h2 className="text-white mb-6">What to expect</h2>
                <ul className="space-y-0">
                  {[
                    'Investor matchmaking sessions',
                    'Regulatory roundtable discussions',
                    'Live pitch competitions',
                    'Ecosystem networking mixer',
                  ].map((item, i) => (
                    <li key={i} className="py-4 border-b border-white/10 text-white/70 text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
