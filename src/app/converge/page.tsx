"use client";

import { ScrollReveal } from '@/components/Animations';
import Magnetic from '@/components/Magnetic';
import Link from 'next/link';
import PageIslandLayout from '@/components/PageIslandLayout';

export default function Converge() {
    <PageIslandLayout title="CONVERGE 2026">
      <div className="flex flex-col gap-12 md:gap-20">
        {/* Intro */}
        <section className="pt-8">
          <div className="container">
            <ScrollReveal delay={0.1}>
              <h2 className="max-w-4xl mb-8 text-4xl md:text-5xl font-medium tracking-tight">
                Abuja's premier startup expo.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
                14 November 2026. Bringing together over 1,500 founders, investors, and operators building the future of African technology from the capital.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Magnetic>
                <Link href="/contact" className="inline-block border-2 border-dark text-dark px-10 py-4 rounded-full font-semibold text-base hover:bg-dark hover:text-white transition-all">
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
                  <h3 className="mb-6">Why Abuja?</h3>
                  <p className="text-muted text-lg leading-relaxed">
                    Lagos is the commercial capital, but Abuja is the regulatory heartbeat. As startups scale, the intersection of technology and policy becomes unavoidable. We are convening the ecosystem where the rules are written.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div>
                  <h3 className="mb-6">What to expect</h3>
                  <ul className="space-y-0">
                    {[
                      'Investor matchmaking sessions',
                      'Regulatory roundtable discussions',
                      'Live pitch competitions',
                      'Ecosystem networking mixer',
                    ].map((item, i) => (
                      <li key={i} className="py-4 border-b border-border text-muted text-lg">
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
    </PageIslandLayout>
}
