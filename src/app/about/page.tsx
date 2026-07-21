"use client";

import { ScrollReveal } from '@/components/Animations';
import Magnetic from '@/components/Magnetic';
import Link from 'next/link';
import PageIslandLayout from '@/components/PageIslandLayout';
import { motion } from 'framer-motion';
import { FilledShield, FilledDocument, FilledSparkles, FilledGlobe } from '@/components/FilledIcons';
import SlantedButton from '@/components/SlantedButton';

export default function About() {
  return (
    <PageIslandLayout title="About Us">
      <div className="flex flex-col gap-16 md:gap-24">
        {/* Intro */}
        <section className="pt-8">
          <div className="container">
            <ScrollReveal delay={0.1}>
              <h2 className="max-w-4xl mb-8 text-4xl md:text-5xl font-medium tracking-tight">
                We are the firm founders call before the meeting that matters.
              </h2>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Story */}
        <section>
          <div className="container">
            <ScrollReveal>
              <h3 className="text-3xl font-bold mb-6">Our story</h3>
              <div className="space-y-6 text-muted text-lg leading-relaxed max-w-4xl">
                <p>There is a moment in every startup where the story outgrows the founder's ability to tell it. The business is doing more than the pitch can explain. The numbers are moving faster than the model can track. Someone asks a simple question about unit economics and the room goes quiet.</p>
                <p>Wecreate Consult was built for that moment.</p>
                <p>We started because too many good African companies were losing rounds they should have won, not for lack of substance but for lack of preparation. Investors were saying no to businesses that deserved a yes, because nobody had done the unglamorous work of turning conviction into evidence.</p>
                <p>So we do that work. Every day. Across sectors, across cities, across stages.</p>
                <p>And the same discipline that wins a funding round wins a grant, lands a partnership and fixes a business model. Which is why our clients today are not only startups. They are established businesses making hard decisions, NGOs competing for donor funding and organisations that simply need clear thinking applied to a specific problem.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What we believe */}
        <section className="bg-surface py-16 px-4 md:px-8 rounded-3xl -mx-4 md:-mx-8">
          <div className="container">
            <ScrollReveal>
              <h3 className="text-3xl font-bold mb-12">What we believe</h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { 
                  title: 'Preparation is a competitive advantage.', 
                  text: 'Most founders in this market are underprepared, not underqualified. Being the exception is easier than it sounds and worth more than it looks.',
                  icon: <FilledShield size={48} className="fill-current" />,
                  bg: 'bg-primary-50',
                  textCol: 'text-dark',
                  mutedText: 'text-dark/70',
                },
                { 
                  title: 'A document is an argument.', 
                  text: 'A deck is not a formality. A cap table is not admin. Each one is a claim about the future that somebody will test. We build them to survive that test.',
                  icon: <FilledDocument size={48} className="fill-current" />,
                  bg: 'bg-dark',
                  textCol: 'text-white',
                  mutedText: 'text-white/70',
                },
                { 
                  title: 'Clarity beats polish.', 
                  text: "A beautiful deck that hides a weak model wastes everyone's time. We would rather fix the model.",
                  icon: <FilledSparkles size={48} className="fill-current" />,
                  bg: 'bg-primary',
                  textCol: 'text-white',
                  mutedText: 'text-white/80',
                },
                { 
                  title: 'Local knowledge is not optional.', 
                  text: 'Nigeria is not a footnote in a global template. Pricing, distribution, regulation and capital all behave differently here. We build from the ground we are standing on.',
                  icon: <FilledGlobe size={48} className="fill-current" />,
                  bg: 'bg-white',
                  textCol: 'text-dark',
                  mutedText: 'text-dark/70',
                }
              ].map((value, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className={`${value.bg} ${value.textCol} p-8 sm:p-10 md:p-12 min-h-[350px] flex flex-col group border-[0.5px] border-[#141A23]/5 rounded-3xl h-full`}
                >
                  <div className="flex justify-between items-start w-full">
                    <div className={`transform group-hover:scale-110 transition-transform duration-500 ${value.textCol} origin-top-left`}>
                      {value.icon}
                    </div>
                    <span className="text-[0.65rem] sm:text-[0.7rem] font-mono tracking-widest opacity-50">
                      0{i + 1}.
                    </span>
                  </div>
                  <div className="mt-8 flex-1 flex flex-col justify-end">
                    <h4 className="text-[1.5rem] md:text-[1.8rem] font-bold tracking-tight mb-4 leading-tight max-w-[300px]">
                      {value.title}
                    </h4>
                    <p className={`${value.mutedText} text-[0.95rem] leading-relaxed max-w-sm`}>
                      {value.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How we are different */}
        <section>
          <div className="container">
            <ScrollReveal>
              <h3 className="text-3xl font-bold mb-6">How we are different</h3>
              <div className="space-y-6 text-muted text-lg leading-relaxed max-w-4xl">
                <p>We are not a design shop that learned finance. We are not a finance shop that outsourced the story. We build both, in the same room, from the same set of facts, which is why our decks and our models never contradict each other.</p>
                <p>We also say no. If a raise is premature, we will tell you before you spend six months learning it the expensive way.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Meet our founder */}
        <section className="pb-8">
          <div className="container">
            <ScrollReveal>
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-12">The man behind the vision</h3>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
              <div className="lg:sticky lg:top-32">
                <ScrollReveal>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="/samuel.jpg"
                      alt="Samuel Ngoka"
                      className="w-full h-auto grayscale-[20%]"
                    />
                    <div className="mt-6">
                      <h4 className="text-2xl font-bold">Samuel Ngoka</h4>
                      <p className="text-primary font-medium mt-1">Venture Capital Consultant. Ecosystem Builder.</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.2}>
                <div className="space-y-12">
                  <div className="space-y-6 text-muted text-lg leading-relaxed">
                    <p>Samuel has spent close to a decade inside the African startup ecosystem, and he has occupied every seat in the room. He has been the founder pitching for his life. He has been the staff member watching a good company lose a round it deserved to win. He has been the observer studying, quietly, why some businesses attract capital while better ones go home empty handed.</p>
                    <p>That triple perspective is rare, and it is the foundation Wecreate Consult is built on. Samuel does not advise from theory. He advises from scar tissue.</p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold mb-6">Why I started Wecreate <span className="text-muted/50 font-normal">(in Samuel's words)</span></h4>
                    <div className="space-y-6 text-muted text-lg leading-relaxed border-l-2 border-primary/20 pl-6 italic">
                      <p>"I have watched brilliant founders lose funding for reasons that had nothing to do with their business and everything to do with their preparation. A cap table nobody could explain. A valuation pulled from the air. A deck that buried the one number an investor was actually looking for.</p>
                      <p>I sat through enough of those rooms, on every side of the table, to notice the pattern. The founders who won were not always the smartest people in the market. They were the best prepared. And preparation is not a talent. It is a service someone can provide.</p>
                      <p>So I built the firm I kept wishing existed. The one that treats a founder's documents the way an investor will treat them, before the investor ever does. The one that tells you the truth about your numbers while there is still time to fix them.</p>
                      <p>Almost a decade in this ecosystem has taught me one thing above everything else. African businesses do not lack ambition, talent or markets. They lack the machinery of readiness. Wecreate Consult is that machinery."</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <div className="inline-block">
                      <SlantedButton 
                        href="https://linkedin.com/in/samuel-ngoka" 
                        text="Connect with Samuel on LinkedIn" 
                        variant="dark"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </PageIslandLayout>
  );
}
