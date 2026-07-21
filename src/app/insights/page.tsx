"use client";

import { ScrollReveal } from '@/components/Animations';
import Magnetic from '@/components/Magnetic';
import Link from 'next/link';
import PageIslandLayout from '@/components/PageIslandLayout';

export default function Insights() {
  const articles = [
    "What Nigerian investors actually read in your deck, and in what order",
    "Why your cap table is costing you more than your valuation is earning you",
    "The 61 startups building in Abuja right now",
    "Non-dilutive funding in Nigeria: what exists and who really qualifies",
    "The go-to-market plan that fits on one page",
  ];

  return (
    <PageIslandLayout title="Insights">
      <div className="flex flex-col gap-12 md:gap-20">
        {/* Intro */}
        <section className="pt-8">
          <div className="container">
            <ScrollReveal delay={0.1}>
              <h2 className="max-w-3xl mb-8 text-4xl md:text-5xl font-medium tracking-tight">
                What we are <span className="text-primary">seeing.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted text-lg md:text-xl max-w-xl leading-relaxed">
                Notes from inside the work. Written for founders, not for algorithms.
              </p>
            </ScrollReveal>
          </div>
        </section>

      {/* Articles List */}
      <section className="pb-24 md:pb-32">
        <div className="container max-w-4xl">
          {articles.map((title, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <Link
                href="#"
                className={`block py-8 border-b border-border group ${i === 0 ? 'border-t' : ''}`}
              >
                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                  {title}
                </h3>
              </Link>
            </ScrollReveal>
          ))}

          {/* Newsletter */}
          <ScrollReveal delay={0.2}>
            <div className="bg-surface p-10 md:p-14 rounded-2xl mt-16 text-center">
              <h3 className="text-2xl font-bold mb-3">New writing lands here regularly.</h3>
              <p className="text-muted mb-8">Join the list and we will send it to you directly.</p>
              <form className="flex gap-3 max-w-md mx-auto flex-wrap" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="flex-1 min-w-[200px] px-5 py-3 rounded-full border border-border text-base focus:border-primary focus:outline-none transition-colors"
                />
                <Magnetic>
                  <button type="submit" className="bg-primary text-white px-7 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors whitespace-nowrap">
                    Join the list
                  </button>
                </Magnetic>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
      </div>
    </PageIslandLayout>
  );
}
