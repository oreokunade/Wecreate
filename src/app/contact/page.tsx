"use client";

import { ScrollReveal } from '@/components/Animations';
import Magnetic from '@/components/Magnetic';
import PageIslandLayout from '@/components/PageIslandLayout';
import SlantedButton from '@/components/SlantedButton';

export default function Contact() {
  const inputClasses = "w-full bg-transparent border-b border-border py-3 text-lg text-dark placeholder:text-muted/50 focus:border-primary focus:outline-none transition-colors";

  return (
    <PageIslandLayout title="Contact Us">
      <div className="flex flex-col gap-12 md:gap-20">
        {/* Intro */}
        <section className="pt-8">
          <div className="container">
            <ScrollReveal delay={0.1}>
              <h2 className="max-w-3xl mb-8 text-4xl md:text-5xl font-medium tracking-tight">
                Tell us where you <span className="text-primary">are.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted text-lg md:text-xl max-w-xl leading-relaxed">
                The more specific you are, the more useful our first reply will be.
              </p>
            </ScrollReveal>
          </div>
        </section>

      {/* Info Section */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="max-w-2xl">
            <ScrollReveal delay={0.1}>
              <div className="bg-surface p-8 sm:p-12 rounded-3xl space-y-10 border border-border">
                
                {/* Office */}
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted font-semibold mb-3 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Office
                  </p>
                  <p className="font-medium text-xl text-dark">Abuja</p>
                </div>
                
                {/* Email */}
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted font-semibold mb-3 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    Email
                  </p>
                  <a href="mailto:Office@wecreateconsult.com" className="font-medium text-[1.1rem] sm:text-xl text-dark hover:text-primary transition-colors">
                    Office@wecreateconsult.com
                  </a>
                </div>
                
                {/* Phone */}
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted font-semibold mb-3 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Phone
                  </p>
                  <a href="tel:09161294273" className="font-medium text-xl text-dark hover:text-primary transition-colors">
                    09161294273
                  </a>
                </div>
                
                {/* Social */}
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted font-semibold mb-3 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    Social
                  </p>
                  <a href="https://linkedin.com/company/wecreateconsult" target="_blank" rel="noopener noreferrer" className="font-medium text-xl text-dark hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </div>

                <div className="pt-8 mt-8 border-t border-border">
                  <SlantedButton 
                    href="mailto:Office@wecreateconsult.com" 
                    text="Write to us" 
                    variant="dark" 
                  />
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
