"use client";

import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { ScrollReveal } from '@/components/Animations';
import Magnetic from '@/components/Magnetic';
import Link from 'next/link';
import PageIslandLayout from '@/components/PageIslandLayout';
import { motion, AnimatePresence } from 'framer-motion';
import SlantedButton from '@/components/SlantedButton';

const servicesData = [
  {
    id: 'investment-readiness',
    title: 'Investment Readiness',
    headline: 'Be ready before you are asked.',
    intro: 'Investment readiness is the difference between a founder who answers a diligence question and a founder who anticipated it three weeks ago. We build the full evidence base behind your raise so that scrutiny becomes an advantage instead of an ambush.',
    whatYouGet: [
      'Valuation report using multiple methodologies, with the assumptions written out and defensible',
      'Cap table built as a working model, with ownership waterfall, vesting schedules and post round scenario planning',
      'Financial model covering revenue build, cost structure and runway across a realistic horizon',
      'Pitch deck that carries the argument, not just the aesthetics',
      'Executive summary and one page teaser for first contact',
      'Structured data room, organised the way investors actually read it'
    ],
    whoFor: 'Founders preparing a pre seed, seed or bridge round. Companies that have been asked for a data room and realised they do not have one. Teams whose numbers live in three different spreadsheets and one person\'s head.',
    btnLabel: 'Get investment ready'
  },
  {
    id: 'fundraising',
    title: 'Fundraising Execution',
    headline: 'The deck is the easy part.',
    intro: 'Raising is a process, not an event. It has a pipeline, a cadence, a conversion rate and a failure mode. We run it like the operational discipline it is, from first target list to final close.',
    whatYouGet: [
      'Investor mapping and a qualified target list matched to your stage, sector and cheque size',
      'Outreach sequencing and customised approach materials per investor category',
      'Pitch preparation and objection handling, run as live rehearsal',
      'Grant and non dilutive funding scouting where it applies',
      'Process management, follow through and pipeline reporting until the round closes',
      'Support through term sheet review conversations and diligence requests'
    ],
    whoFor: 'Founders who have the materials but not the process. Teams who have taken twenty meetings and closed nothing. Companies that need a raise run properly while they keep running the business.',
    btnLabel: 'Run my raise'
  },
  {
    id: 'gtm',
    title: 'Go to Market and Growth',
    headline: 'Strategy you can execute on Monday.',
    intro: 'Most growth strategy documents die in a shared drive. Ours are built backwards from the actions someone has to take, the money they have to spend and the number they have to hit.',
    whatYouGet: [
      'Positioning and messaging architecture grounded in real customer language',
      'Channel strategy with prioritisation logic, not a list of everything that exists',
      'Media plan with budget allocation, expected reach and measurement framework',
      'Launch sequencing and commercial milestones',
      'Budget model across your planning horizon',
      'Pricing, packaging and offer design where it is the actual bottleneck'
    ],
    whoFor: 'Companies entering a new market or category. Teams with a product and no distribution. Founders spending on marketing without knowing what it is returning.',
    btnLabel: 'Plan your go to market'
  },
  {
    id: 'grants',
    title: 'Grant Writing and Development Funding',
    headline: 'Money that does not cost you equity.',
    intro: 'There is more grant and development funding available to African organisations than most ever apply for, and most applications that are sent fail for reasons that were visible on page one. We write proposals that survive the first cut and the last one, and we find the funding calls you did not know existed.',
    whatYouGet: [
      'Grant scouting matched to your sector, stage and legal structure, covering local and international funders',
      'Concept notes and letters of enquiry that earn the invitation to apply in full',
      'Full grant proposals, budgets and logical frameworks written to the funder\'s own evaluation criteria',
      'Donor reporting templates and impact narratives for funding you have already won',
      'Application review and strengthening for proposals you have drafted in house',
      'Pipeline planning so you are applying on a schedule, not in a panic'
    ],
    whoFor: 'NGOs and social enterprises competing for donor funding. Startups pursuing non dilutive capital alongside or instead of a raise. Organisations that keep getting shortlisted and never selected.',
    btnLabel: 'Find your funding'
  },
  {
    id: 'advisory',
    title: 'Business Advisory',
    headline: 'A second brain for the decisions that keep you up.',
    intro: 'Not every problem fits a neat service line. Sometimes the question is whether to enter a market, how to price a product, why the numbers stopped adding up or what to do about a partner conversation going sideways. Business advisory is where we work through it with you.',
    whatYouGet: [
      'Business model review and redesign',
      'Pricing, packaging and revenue architecture',
      'Market entry and expansion assessment',
      'Operational and commercial process review',
      'Board, partner and stakeholder preparation',
      'Standing advisory retainers for organisations that want us in the room regularly'
    ],
    whoFor: 'Founders and executives facing a decision they cannot afford to get wrong. Established businesses whose growth has outpaced their structure. NGOs and social enterprises professionalising how they operate and earn.',
    btnLabel: 'Book an advisory session'
  },
  {
    id: 'media',
    title: 'Brand, Media and Business Development',
    headline: 'Visibility is a business asset. Build it like one.',
    intro: 'Through Wecreate Media, we build brand systems and revenue pipelines together, because the two problems are usually the same problem.',
    whatYouGet: [
      'Brand positioning, narrative and identity direction',
      'Content strategy and platform specific execution, including short form and social video',
      'Campaign planning and management',
      'Partnership and sponsorship proposals, decks and outreach',
      'Business development materials for corporate, government and development sector conversations',
      'Programme and event proposals'
    ],
    whoFor: 'Companies with a strong offer and a weak signal. Organisations pursuing sponsorship, partnership or public sector opportunities. Founders who need to be known in a market before they can sell into it.',
    btnLabel: 'Build your presence'
  }
];

function ServicesContent() {
  const searchParams = useSearchParams();
  const activeServiceParam = searchParams.get('service');
  
  const [activeSection, setActiveSection] = useState(servicesData[0].id);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // Handle the scroll-spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = servicesData.map(s => document.getElementById(s.id));
      
      // We want a section to become active when its top is near the top of the viewport
      // By using a small offset like 250px from the top of the screen, we ensure the user
      // has scrolled past the previous section completely.
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 250) {
            setActiveSection(servicesData[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle creative transition from URL param
  useEffect(() => {
    if (activeServiceParam) {
      const element = document.getElementById(activeServiceParam);
      if (element) {
        // Wait a bit for layout to settle, then scroll to it
        setTimeout(() => {
          const y = element.getBoundingClientRect().top + window.scrollY - 150;
          window.scrollTo({ top: y, behavior: 'smooth' });
          
          // Trigger the highlight glow animation
          setHighlightedId(activeServiceParam);
          setTimeout(() => setHighlightedId(null), 2000); // remove after 2s
        }, 300);
      }
    }
  }, [activeServiceParam]);

  return (
    <PageIslandLayout title="Services">
      <div className="flex flex-col gap-12 md:gap-20 relative">
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

        {/* Services Split Layout */}
        <section className="pb-24 md:pb-32 container relative">
          
          {/* Mobile Sticky Custom Dropdown Nav */}
          <div className="lg:hidden sticky top-[80px] z-40 bg-white/95 backdrop-blur-md -mx-4 px-4 sm:-mx-8 sm:px-8 py-3 border-b border-border shadow-sm mb-12">
            <div className="relative">
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="w-full flex items-center justify-between bg-surface text-dark font-semibold py-3 sm:py-4 px-4 sm:px-5 rounded-xl border border-border focus:outline-none focus:border-primary shadow-sm text-sm sm:text-base"
              >
                <span className="truncate pr-2">
                  {servicesData.find(s => s.id === activeSection)?.title || 'Select a service'}
                </span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`text-primary transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              
              <AnimatePresence>
                {isMobileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-border overflow-hidden flex flex-col z-50 max-h-[60vh] overflow-y-auto"
                  >
                    {servicesData.map((service, idx) => (
                      <button
                        key={`custom-${service.id}`}
                        onClick={() => {
                          setIsMobileDropdownOpen(false);
                          const element = document.getElementById(service.id);
                          if (element) {
                            const y = element.getBoundingClientRect().top + window.scrollY - 150;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                          }
                        }}
                        className={`text-left px-5 py-4 text-sm sm:text-base transition-colors flex items-center justify-between group ${
                          activeSection === service.id 
                            ? 'bg-primary/5 text-primary font-bold' 
                            : 'text-dark hover:bg-surface'
                        } ${idx !== servicesData.length - 1 ? 'border-b border-border/50' : ''}`}
                      >
                        <span className="truncate pr-4">{service.title}</span>
                        {activeSection === service.id && (
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Overlay to close when clicking outside */}
            {isMobileDropdownOpen && (
              <div 
                className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[1px] -mt-[80px]"
                style={{ top: '80px', height: '100vh' }}
                onClick={() => setIsMobileDropdownOpen(false)}
              />
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Sticky Sidebar Index */}
            <div className="hidden lg:block lg:col-span-4 relative">
              <div className="sticky top-40 flex flex-col gap-2">
                {servicesData.map((service, idx) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      const element = document.getElementById(service.id);
                      if (element) {
                        const y = element.getBoundingClientRect().top + window.scrollY - 150;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                    className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 font-semibold text-lg flex items-center justify-between group ${
                      activeSection === service.id 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105 ml-4 -mr-4' 
                        : 'text-muted hover:bg-surface hover:text-dark'
                    }`}
                  >
                    <span className="truncate pr-4">{service.title}</span>
                    {activeSection === service.id && (
                      <motion.div layoutId="active-indicator" className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Scrolling Content */}
            <div className="col-span-1 lg:col-span-8 flex flex-col gap-24">
              {servicesData.map((service, idx) => (
                <div 
                  key={service.id} 
                  id={service.id} 
                  className={`scroll-mt-40 transition-colors duration-1000 rounded-3xl p-2 sm:p-6 md:p-8 -mx-2 sm:-mx-6 md:-mx-8 ${
                    highlightedId === service.id ? 'bg-primary-50 ring-2 ring-primary ring-opacity-50' : 'bg-transparent ring-0'
                  }`}
                >
                  <ScrollReveal delay={0.1}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-primary font-bold text-xl bg-primary-50 w-12 h-12 flex items-center justify-center rounded-xl">
                        0{idx + 1}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-bold">{service.title}</h3>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.15}>
                    <h4 className="text-2xl font-medium text-dark mb-4">{service.headline}</h4>
                    <p className="text-lg text-muted leading-relaxed mb-10 max-w-3xl">
                      {service.intro}
                    </p>
                  </ScrollReveal>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    <ScrollReveal delay={0.2} className="md:col-span-2">
                      <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-border">
                        <h5 className="font-bold text-lg mb-6 flex items-center gap-2">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          What you get
                        </h5>
                        <ul className="space-y-4">
                          {service.whatYouGet.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-dark/80 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.25} className="md:col-span-2">
                      <div className="bg-[#1B2326] rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <h5 className="font-bold text-lg mb-4 text-primary-200">Who this is for</h5>
                        <p className="text-white/90 text-lg leading-relaxed relative z-10 font-medium">
                          {service.whoFor}
                        </p>
                      </div>
                    </ScrollReveal>
                  </div>

                  <ScrollReveal delay={0.3}>
                    <SlantedButton 
                      href="/contact" 
                      text={service.btnLabel} 
                      variant="light" 
                    />
                  </ScrollReveal>

                  {idx !== servicesData.length - 1 && (
                    <div className="w-full h-px bg-border mt-24 mb-4" />
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>
    </PageIslandLayout>
  );
}

import { Suspense } from 'react';
export default function Services() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading services...</div>}>
      <ServicesContent />
    </Suspense>
  );
}
