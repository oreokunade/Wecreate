"use client";

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Hexagon, Network, FileSignature, Compass, Fingerprint } from 'lucide-react';
import SlantedButton from './SlantedButton';

const services = [
  {
    id: 'investment-readiness',
    title: 'Investment Readiness',
    desc: 'We get you ready to be examined. Valuation reports, cap tables, financial models, executive summaries, pitch decks and a data room that holds up to real diligence. By the time an investor asks the hard question, you have already answered it.',
    icon: Sun
  },
  {
    id: 'fundraising',
    title: 'Fundraising Execution',
    desc: 'We do not stop at the deck. We build the target list, shape the outreach, prepare you for the room and manage the process until the round closes. You stay focused on the business. We run the raise.',
    icon: Hexagon
  },
  {
    id: 'gtm',
    title: 'Go to Market',
    desc: 'Strategy that reaches the market, not just the boardroom. Positioning, channel planning, media budgeting, launch sequencing and the commercial logic underneath it all. Written to be executed, not admired.',
    icon: Network
  },
  {
    id: 'grants',
    title: 'Grant Writing',
    desc: 'Grants are won on paper long before they are won in person. We write proposals, concept notes and full applications for startups, social enterprises and NGOs, and we scout the non dilutive funding you may not know you qualify for.',
    icon: FileSignature
  },
  {
    id: 'advisory',
    title: 'Business Advisory',
    desc: 'Not every problem is a raise or a launch. We advise on pricing, business models, operations, market entry and the decisions in between. When you need a second brain in the room before a big call, this is where we sit.',
    icon: Compass
  },
  {
    id: 'media',
    title: 'Brand, Media & Dev',
    desc: 'Through Wecreate Media, we build the brand and the pipeline together. Content strategy, campaign planning, partnership development and sponsorship materials that open doors and hold them open.',
    icon: Fingerprint
  }
];

// Individual card — uses native CSS sticky (proven Phocus pattern)
const ServiceCard = ({ card, index }: { card: typeof services[0]; index: number }) => {
  // Top offset = header height + stacking offset (index * 20px) - increased to give space
  const topOffset = 260 + (index * 20);
  const isLast = index === services.length - 1;
  const Icon = card.icon;

  return (
    <div
      className={`${isLast ? 'relative' : 'sticky'} origin-top cursor-pointer group`}
      style={{
        top: isLast ? undefined : `${topOffset}px`,
        zIndex: index
      }}
    >
      <Link href={`/services?service=${card.id}`} className="block">
        <div className="w-[94vw] sm:w-[92vw] md:w-[90vw] max-w-[1200px] mx-auto min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] relative bg-primary flex items-center border border-white/15 transition-transform duration-500 ease-[0.21,0.47,0.32,0.98] group-hover:scale-[0.98]">
          
          {/* Decorative watermark icon */}
          <div className="absolute -right-8 sm:-right-12 -bottom-8 sm:-bottom-12 opacity-[0.08] transform rotate-12 transition-transform duration-700 ease-[0.21,0.47,0.32,0.98] group-hover:rotate-6 group-hover:scale-110 pointer-events-none">
            <Icon size={300} strokeWidth={1.5} className="text-white hidden sm:block" />
            <Icon size={180} strokeWidth={1.5} className="text-white sm:hidden" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 md:p-14 lg:p-20 w-full flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 md:gap-16">
            
            {/* Left: Icon + Title */}
            <div className="flex flex-col items-start gap-4 sm:gap-6 md:w-[42%]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/10 transition-colors duration-500 group-hover:bg-white/25">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.5} />
              </div>
              <h4 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold tracking-tight text-white leading-[1.1]">
                {card.title}
              </h4>
            </div>

            {/* Right: Paragraph */}
            <div className="md:w-[55%] flex flex-col items-start">
              <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.15rem] lg:text-[1.25rem] leading-[1.6] md:leading-[1.75] text-white/85 font-medium mb-6">
                {card.desc}
              </p>
              
              {/* Fake button for visual cue */}
              <div className="inline-flex items-center gap-2 text-white/70 font-semibold tracking-wide uppercase text-sm border-b border-white/20 pb-1 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:border-white/60">
                Explore this service
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:translate-x-1"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default function ServicesStack() {
  const lastCardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lastCardRef,
    offset: ["start 320px", "start -100px"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section className="bg-[#0a0a0a] relative pb-16 sm:pb-24 md:pb-32 rounded-t-[2rem] md:rounded-t-[3rem]">
      {/* Sticky Header — scrolls away as last card reaches it */}
      <motion.div
        style={{ y: headerY, opacity: headerOpacity }}
        className="sticky top-0 z-50 pt-10 sm:pt-14 md:pt-16 pb-6 sm:pb-8 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent backdrop-blur-sm rounded-t-[2rem] md:rounded-t-[3rem]"
      >
        <div className="text-center px-6 max-w-4xl mx-auto">
          <h2 className="text-[0.65rem] sm:text-[0.7rem] md:text-[0.8rem] font-bold uppercase tracking-[0.2em] text-white/40 mb-3 sm:mb-4">
            Services
          </h2>
          <h3 className="text-[1.8rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[3.8rem] font-bold tracking-tight text-white leading-[1.1] max-w-4xl">
            Six ways we work with you
          </h3>
        </div>
      </motion.div>

      {/* Cards Stack */}
      <div className="relative pb-12 sm:pb-16 md:pb-24">
        {services.map((card, i) => {
          // Attach ref to last card for header scroll-away effect
          if (i === services.length - 1) {
            return (
              <div key={i} ref={lastCardRef}>
                <ServiceCard card={card} index={i} />
              </div>
            );
          }
          return <ServiceCard key={i} card={card} index={i} />;
        })}
      </div>

      {/* CTA at the end */}
      <div className="flex justify-center pt-4 sm:pt-8">
        <SlantedButton href="/services" text="Explore our services" />
      </div>
    </section>
  );
}
