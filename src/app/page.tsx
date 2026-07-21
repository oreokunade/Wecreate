"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Sun, Hexagon, Network, FileSignature, Compass, Fingerprint, Crosshair, ArrowRight } from 'lucide-react';
import { 
  AnimatedCreditCard, 
  AnimatedSprout, 
  AnimatedHeartPulse, 
  AnimatedStore, 
  AnimatedGlobe, 
  AnimatedHandHeart, 
  AnimatedLandmark, 
  AnimatedMessageCircle 
} from '@/components/AnimatedIcons';
import Magnetic from '@/components/Magnetic';
import { ScrollReveal } from '@/components/Animations';
import WebGLBackground from '@/components/WebGLBackground';
import TextRevealScroll from '@/components/TextRevealScroll';
import FaqSection from '@/components/FaqSection';
import ServicesStack from '@/components/ServicesStack';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import CountUp from '@/components/CountUp';

export default function Home() {
  const { scrollY } = useScroll();
  const [activeProcess, setActiveProcess] = useState<number | null>(null);
  
  // Smoothly shrink the padding and border radius to 0 over the first 300px of scroll
  const heroPadding = useTransform(scrollY, [0, 300], ["0.5rem", "0rem"]);
  const heroRadius = useTransform(scrollY, [0, 300], ["2rem", "0rem"]);

  return (
    <main className="w-full">
      {/* ===== 1. HERO — Floating Island Style ===== */}
      <motion.div 
        className="bg-white flex flex-col justify-center w-full h-[100svh]"
        style={{ padding: heroPadding }}
      >
        <motion.section 
          className="relative flex flex-col overflow-hidden w-full flex-1"
          style={{ borderRadius: heroRadius }}
        >
          {/* WebGL Background */}
          <WebGLBackground />

          {/* Content overlay */}
          <div className="relative z-10 flex flex-col flex-1 w-full px-4 sm:px-6 md:px-[50px] pb-6 sm:pb-8 -translate-y-4 md:-translate-y-8 lg:-translate-y-12">
            
            {/* Headline — Very large, left-aligned, shifted downwards slightly */}
            <div className="flex flex-col justify-center flex-1 w-full pt-16 md:pt-32">
              <ScrollReveal delay={0.1}>
                <h1 className="text-white text-[clamp(2.05rem,5.81vw,5.13rem)] font-medium leading-[1.02] tracking-[-0.04em] max-w-6xl">
                  We make African startups fundable, and then we help them raise.
                </h1>
              </ScrollReveal>
            </div>

            {/* Bottom bar — description left, CTA right */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-10 md:gap-8 pt-6 sm:pt-10">
              <ScrollReveal>
                <p className="text-white text-[1rem] sm:text-[1.1rem] md:text-[1.35rem] lg:text-[1.35rem] max-w-2xl leading-relaxed font-normal">
                  Wecreate Consult builds the strategy, the numbers and the narrative that make investors say yes, funders commit and customers stay
                </p>
              </ScrollReveal>

              <div className="flex flex-col items-start gap-4">
                <ScrollReveal delay={0.3}>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0">
                    
                    {/* Primary Button */}
                    <Link href="/contact" className="group relative flex items-center justify-center h-12 sm:h-14 pl-6 sm:pl-8 pr-8 sm:pr-10">
                      {/* Background layers */}
                      <div className="absolute inset-0 flex">
                        <div className="flex-1 bg-white group-hover:bg-gray-100 transition-colors rounded-l-[28px] sm:rounded-l-full relative z-0"></div>
                        <div className="w-10 bg-white group-hover:bg-gray-100 transition-colors -skew-x-12 rounded-r-[10px] -ml-4 relative z-10"></div>
                      </div>
                      {/* Text */}
                      <span className="relative z-20 text-[#0A192F] text-[0.65rem] sm:text-[0.75rem] md:text-[0.8rem] font-bold tracking-widest uppercase">
                        Book a discovery call
                      </span>
                    </Link>
                    
                    {/* Secondary Button */}
                    <Link href="/services" className="group relative flex items-center justify-center h-12 sm:h-14 pl-8 sm:pl-10 pr-6 sm:pr-8 sm:ml-2">
                      {/* Background layers */}
                      <div className="absolute inset-0 flex">
                        <div className="w-10 bg-primary group-hover:bg-primary/90 transition-colors -skew-x-12 rounded-l-[10px] relative z-10"></div>
                        <div className="flex-1 bg-primary group-hover:bg-primary/90 transition-colors rounded-r-[28px] sm:rounded-r-full -ml-4 relative z-0"></div>
                      </div>
                      {/* Text & Icon */}
                      <div className="relative z-20 flex items-center gap-3">
                        <span className="text-white text-[0.65rem] sm:text-[0.75rem] md:text-[0.8rem] font-semibold tracking-widest uppercase">
                          See how we work
                        </span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Link>

                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Notch / Scroll Indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-end text-white">
            <svg width="140" height="40" viewBox="0 0 140 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="block text-white">
              <path d="M0,40 C35,40 45,0 70,0 C95,0 105,40 140,40 Z" />
            </svg>
            <div className="absolute bottom-3 text-[#141A23] animate-bounce">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </div>
          </div>
        </motion.section>
      </motion.div>

      {/* ===== 1.25 ABOUT REVEAL SECTION ===== */}
      <TextRevealScroll 
        text="Wecreate Consult is a strategy and marketing firm in Abuja working across investment readiness, fundraising, grant writing, growth, business advisory and business development, for startups, established businesses and NGOs alike."
        ctaText="Learn more"
        ctaHref="/about"
      />

      {/* ===== 1.5 PROOF SECTION ===== */}
      <section className="bg-white pt-8 pb-4 md:pt-10 md:pb-8 px-6 md:px-12 lg:px-20 relative z-20">
        <div className="max-w-[1400px] mx-auto">
               {/* Top Row: Headline */}
          <div className="flex flex-col items-center justify-center w-full mb-8 md:mb-12">
            <ScrollReveal>
              <h2 className="text-center text-sm md:text-base uppercase font-bold tracking-[0.2em] text-[#141A23]/40 max-w-2xl">
                Work that has already been through the fire
              </h2>
            </ScrollReveal>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-100 pt-6 sm:pt-10 gap-y-2">
            
            {/* Stat 1 */}
            <div className="relative pl-6 md:pl-8 h-full flex flex-col justify-start pt-2 pb-12">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ amount: "some" }}
                className="absolute left-0 bottom-0 w-[1px] bg-gray-200 origin-bottom"
              />
              <div className="absolute top-0 left-[-3px] w-[7px] h-[7px] rounded-full bg-primary z-10"></div>
              <ScrollReveal delay={0.1}>
                <div>
                  <h3 className="text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] font-bold mb-2 sm:mb-3 text-[#141A23] tracking-tighter leading-none">
                    <CountUp end={550} prefix="₦" suffix="M+" duration={2} />
                  </h3>
                  <h4 className="font-bold text-[0.95rem] mb-1 text-[#141A23]">Funding facilitated</h4>
                  <p className="text-gray-500 text-[0.85rem] leading-relaxed">
                    and counting.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Stat 2 */}
            <div className="relative pl-6 md:pl-8 h-full flex flex-col justify-start pt-2 pb-12">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ amount: "some" }}
                className="absolute left-0 bottom-0 w-[1px] bg-gray-200 origin-bottom"
              />
              <div className="absolute top-0 left-[-3px] w-[7px] h-[7px] rounded-full bg-primary z-10"></div>
              <ScrollReveal delay={0.2}>
                <div>
                  <h3 className="text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] font-bold mb-2 sm:mb-3 text-[#141A23] tracking-tighter leading-none">
                    <CountUp end={6} duration={2} />
                  </h3>
                  <h4 className="font-bold text-[0.95rem] mb-1 text-[#141A23]">Service lines</h4>
                  <p className="text-gray-500 text-[0.85rem] leading-relaxed">
                    from readiness to raise.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Stat 3 */}
            <div className="relative pl-6 md:pl-8 h-full flex flex-col justify-start pt-2 pb-12">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ amount: "some" }}
                className="absolute left-0 bottom-0 w-[1px] bg-gray-200 origin-bottom"
              />
              <div className="absolute top-0 left-[-3px] w-[7px] h-[7px] rounded-full bg-primary z-10"></div>
              <ScrollReveal delay={0.3}>
                <div>
                  <h3 className="text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] font-bold mb-2 sm:mb-3 text-[#141A23] tracking-tighter leading-none">
                    <CountUp end={61} duration={2} />
                  </h3>
                  <h4 className="font-bold text-[0.95rem] mb-1 text-[#141A23]">Abuja startups</h4>
                  <p className="text-gray-500 text-[0.85rem] leading-relaxed">
                    mapped and verified.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Stat 4 */}
            <div className="relative pl-6 md:pl-8 h-full flex flex-col justify-start pt-2 pb-12">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ amount: "some" }}
                className="absolute left-0 bottom-0 w-[1px] bg-gray-200 origin-bottom"
              />
              <div className="absolute top-0 left-[-3px] w-[7px] h-[7px] rounded-full bg-primary z-10"></div>
              <ScrollReveal delay={0.4}>
                <div>
                  <h3 className="text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] font-bold mb-2 sm:mb-3 text-[#141A23] tracking-tighter leading-none">
                    <CountUp end={1500} suffix="+" duration={2.5} />
                  </h3>
                  <h4 className="font-bold text-[0.95rem] mb-1 text-[#141A23]">Attendees expected</h4>
                  <p className="text-gray-500 text-[0.85rem] leading-relaxed">
                    at CONVERGE 2026.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </section>

      {/* ===== 1.75 EXPERIENCE SECTION ===== */}
      <section className="bg-white py-20 md:py-32 px-6 md:px-12 lg:px-20 relative z-20">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left: Image */}
          <div className="w-full lg:w-[45%]">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full aspect-[11/10] rounded-[2rem] overflow-hidden bg-gray-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=2070" 
                alt="Team collaborating" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
                }}
                className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[2.8rem] font-medium leading-[1.15] tracking-tight text-[#141A23] mb-8 lg:mb-12"
              >
                We have built cap tables and valuation models for seed stage technology companies raising in Nigeria and abroad.
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mb-10 lg:mb-12">
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
                  }}
                  className="text-[1rem] sm:text-[1.1rem] leading-[1.6] text-[#141A23]/75 text-justify"
                >
                  We have written go to market strategies and media plans for consumer platforms in Lagos. We have taken maternal health, agritech, fintech and diaspora community businesses from a rough idea of what they were worth to a defensible position they could present with a straight back.
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
                  }}
                  className="text-[1rem] sm:text-[1.1rem] leading-[1.6] text-[#141A23]/75 text-justify"
                >
                  We have also mapped the Abuja startup ecosystem company by company, because you cannot advise a market you have not counted.
                </motion.p>
              </div>

            </motion.div>
          </div>

        </div>
      </section>

      {/* ===== 1.85 THE PROBLEM SECTION ===== */}
      <section className="bg-[#f8f9fa] py-20 md:py-32 px-6 md:px-12 lg:px-20 relative z-20 border-t border-[#141A23]/5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24">
          
          {/* Left: Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:w-[25%] lg:w-[20%] flex-shrink-0"
          >
            <h3 className="text-[#141A23]/50 text-[0.75rem] font-bold uppercase tracking-[0.2em] pt-2">
              Problem
            </h3>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
            }}
            className="md:w-[75%] lg:w-[65%]"
          >
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] } }
              }}
              className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-medium leading-[1.1] tracking-tight text-[#141A23] mb-8 md:mb-12"
            >
              You have the business. What you may not have is the case for it.
            </motion.h2>
            <div className="text-[1.1rem] sm:text-[1.25rem] md:text-[1.5rem] leading-[1.6] text-[#141A23]/80 space-y-6 md:space-y-8 max-w-4xl">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] } }
                }}
              >
                Founders come to us at the point where instinct stops being enough. The traction is real but the model does not explain it. The market is there but the deck does not prove it. The round is open but the data room is a folder of half finished files.
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] } }
                }}
              >
                Capital does not reward the best idea in the room. It rewards the founder who can defend that idea with evidence, structure and clarity under pressure. That is the gap we close.
              </motion.p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ===== 2. SERVICES SECTION ===== */}
      <ServicesStack />

      {/* ===== 3. PROCESS STRIPS ===== */}
      <section className="bg-white py-12 md:py-16">
        <div className="container relative mb-12 md:mb-16">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-[1.8rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[3.8rem] font-bold leading-[1.05] tracking-tighter text-center text-[#141A23] mb-4 sm:mb-6 max-w-4xl">Process</h2>
              <p className="text-[#141A23]/70 text-base sm:text-lg md:text-xl max-w-xl">
                Let's dive into the process. From first idea to final launch, every step is clear and intentional.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="container px-4 md:px-6">
          <div className="w-full flex flex-col rounded-xl sm:rounded-[2rem] overflow-hidden shadow-sm">
            {[
              { 
                step: '01', 
                title: 'Diagnose', 
                color: 'bg-primary-100',
                titleColor: 'text-[#141A23]',
                descColor: 'text-[#141A23]/80',
                desc: 'A working session, not a sales call. We find out what you actually need, which is often not what you came in asking for.'
              },
              { 
                step: '02', 
                title: 'Scope', 
                color: 'bg-primary-300',
                titleColor: 'text-[#141A23]',
                descColor: 'text-[#141A23]/80',
                desc: 'A written scope of work with deliverables, timelines and pricing on the table before anything begins. No drift. No surprises.'
              },
              { 
                step: '03', 
                title: 'Build', 
                color: 'bg-primary-500',
                titleColor: 'text-white',
                descColor: 'text-white/80',
                desc: 'We produce. Models, decks, plans, documents. You review at fixed checkpoints, not at the end when it is too late to change direction.'
              },
              { 
                step: '04', 
                title: 'Deliver and defend', 
                color: 'bg-primary',
                titleColor: 'text-white',
                descColor: 'text-white/80',
                desc: 'You get client ready files you can send the same day, plus the preparation to defend every number in them.'
              },
            ].map((item, idx) => {
              const isActive = activeProcess === idx;
              return (
                <motion.div 
                  key={idx}
                  onClick={() => setActiveProcess(isActive ? null : idx)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className={`w-full ${item.color} relative group cursor-pointer py-4 md:py-5 px-6 md:px-12 overflow-hidden transition-colors`}
                >
                  <div className="relative z-10 flex flex-col justify-center w-full h-full">
                    <div className="flex justify-between items-center w-full">
                      <h3 className={`text-xl sm:text-3xl md:text-5xl lg:text-[4rem] font-medium tracking-tight ${item.titleColor}`}>{item.title}</h3>
                      <span className="text-[2.5rem] sm:text-[4.5rem] md:text-[7.5rem] lg:text-[8.5rem] font-bold font-sans leading-[0.75] text-white opacity-60 flex-shrink-0">
                        {item.step}
                      </span>
                    </div>
                    
                    <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]'}`}>
                      <div className="overflow-hidden">
                        <p className={`text-sm sm:text-lg md:text-xl mt-2 max-w-2xl relative z-10 font-medium pb-2 md:pb-4 ${item.descColor}`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 3.5 SECTORS SECTION ===== */}
      <section className="relative z-10 w-full bg-white pt-10">
        {/* Header outside the flush grid */}
        <div className="bg-white text-[#141A23] pt-8 sm:pt-12 pb-12 sm:pb-20 px-5 sm:px-6 md:px-12 lg:px-20 border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-center text-center gap-4">
            <ScrollReveal>
              <h2 className="text-[0.7rem] md:text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#141A23]/40 text-center">
                Sectors
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="text-[1.8rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[3.8rem] font-bold leading-[1.05] max-w-4xl tracking-tighter text-center text-[#141A23]">
                Where we spend most of our time
              </h3>
            </ScrollReveal>
          </div>
        </div>

        {/* Flush Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 w-full">
          {[
            {
              title: 'Fintech and payments',
              bg: 'bg-primary-50',
              text: 'text-[#141A23]',
              icon: <AnimatedCreditCard size={72} />
            },
            {
              title: 'Agritech and food systems',
              bg: 'bg-[#141A23]',
              text: 'text-white',
              icon: <AnimatedSprout size={72} />
            },
            {
              title: 'Health and maternal care',
              bg: 'bg-primary-100',
              text: 'text-[#141A23]',
              icon: <AnimatedHeartPulse size={72} />
            },
            {
              title: 'Consumer platforms and marketplaces',
              bg: 'bg-primary',
              text: 'text-white',
              icon: <AnimatedStore size={72} />
            },
            {
              title: 'Diaspora and community technology',
              bg: 'bg-white',
              text: 'text-[#141A23]',
              icon: <AnimatedGlobe size={72} />
            },
            {
              title: 'NGOs and social enterprises',
              bg: 'bg-[#0a0a0a]',
              text: 'text-white',
              icon: <AnimatedHandHeart size={72} />
            },
            {
              title: 'Public sector and development programmes',
              bg: 'bg-primary-200',
              text: 'text-[#141A23]',
              icon: <AnimatedLandmark size={72} />
            },
            {
              title: 'Not listed?',
              desc: 'If your sector is not listed, the discipline still travels. Ask us.',
              bg: 'bg-primary',
              text: 'text-white',
              mutedText: 'text-white/80',
              icon: <AnimatedMessageCircle size={64} />,
              isButton: true,
              href: '/contact'
            }
          ].map((sector: any, idx) => {
            if (sector.isButton) {
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="h-full"
                >
                  <Link href={sector.href} className={`${sector.bg} ${sector.text} p-6 sm:p-10 md:p-14 min-h-[250px] sm:min-h-[300px] md:min-h-[400px] flex flex-col items-center justify-center text-center group cursor-pointer border-[0.5px] border-[#141A23]/5 hover:bg-primary-600 transition-colors h-full`}>
                    <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 mb-6 sm:mb-8 scale-75 sm:scale-100">
                      {sector.icon}
                    </div>
                    <h4 className="text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] font-bold tracking-tight mb-3 sm:mb-4 leading-tight">
                      {sector.title}
                    </h4>
                    <p className={`${sector.mutedText} text-[0.8rem] sm:text-[0.95rem] md:text-[1.05rem] leading-relaxed max-w-sm mx-auto mb-6 sm:mb-10`}>
                      {sector.desc}
                    </p>
                    <div className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-white/30 font-bold uppercase tracking-widest text-[0.65rem] sm:text-[0.75rem] group-hover:bg-white group-hover:text-primary transition-colors">
                      Contact Us
                    </div>
                  </Link>
                </motion.div>
              );
            }

            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`${sector.bg} ${sector.text} p-6 sm:p-10 md:p-14 min-h-[250px] sm:min-h-[300px] md:min-h-[400px] flex flex-col justify-between group cursor-pointer border-[0.5px] border-[#141A23]/5 h-full`}
              >
                <div className="flex justify-between items-start w-full">
                  <div className={`transform group-hover:scale-110 transition-transform duration-500 ${sector.text} scale-75 sm:scale-100 origin-top-left`}>
                    {sector.icon}
                  </div>
                  <span className="text-[0.65rem] sm:text-[0.7rem] font-mono tracking-widest">
                    0{idx + 1}.
                  </span>
                </div>
                <h4 className="text-[1.2rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] font-bold tracking-tight max-w-[150px] sm:max-w-[200px] md:max-w-xs mt-6 sm:mt-8 leading-tight">
                  {sector.title}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===== 4. FAQ SECTION ===== */}
      <FaqSection />
    </main>
  );
}
