"use client";

import { ScrollReveal } from '@/components/Animations';
import Magnetic from '@/components/Magnetic';

export default function Contact() {
  const inputClasses = "w-full bg-transparent border-b border-border py-3 text-lg text-dark placeholder:text-muted/50 focus:border-primary focus:outline-none transition-colors";

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pb-28">
        <div className="container">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-muted font-semibold mb-6">Contact</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="max-w-3xl mb-8">
              Tell us where you <span className="text-primary">are.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted text-lg md:text-xl max-w-xl leading-relaxed">
              The more specific you are, the more useful our first reply will be.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 lg:gap-24">
            {/* Form */}
            <ScrollReveal delay={0.1}>
              <form
                className="space-y-10"
                onSubmit={(e) => { e.preventDefault(); alert('Received. We will reply within two working days.'); }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] text-muted font-semibold mb-3">Full name</label>
                    <input type="text" id="name" required className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] text-muted font-semibold mb-3">Email address</label>
                    <input type="email" id="email" required className={inputClasses} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="company" className="block text-xs uppercase tracking-[0.15em] text-muted font-semibold mb-3">Company name</label>
                    <input type="text" id="company" required className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-xs uppercase tracking-[0.15em] text-muted font-semibold mb-3">Website or deck link</label>
                    <input type="url" id="website" className={inputClasses} />
                  </div>
                </div>

                <div>
                  <label htmlFor="help" className="block text-xs uppercase tracking-[0.15em] text-muted font-semibold mb-3">What do you need help with?</label>
                  <select id="help" required className={inputClasses} defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option value="investment">Investment readiness</option>
                    <option value="fundraising">Fundraising</option>
                    <option value="grants">Grant writing</option>
                    <option value="gtm">Go-to-market and growth</option>
                    <option value="advisory">Business advisory</option>
                    <option value="brand">Brand and media</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="details" className="block text-xs uppercase tracking-[0.15em] text-muted font-semibold mb-3">Tell us about it</label>
                  <textarea id="details" required className={`${inputClasses} min-h-[120px] resize-y`} />
                </div>

                <Magnetic>
                  <button
                    type="submit"
                    className="bg-primary text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-primary-600 transition-colors"
                  >
                    Send it through
                  </button>
                </Magnetic>
              </form>
            </ScrollReveal>

            {/* Info Sidebar */}
            <ScrollReveal delay={0.3}>
              <div className="bg-surface p-8 rounded-2xl space-y-8 h-fit sticky top-32">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted font-semibold mb-2">Office</p>
                  <p className="font-semibold">Abuja, Nigeria</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted font-semibold mb-2">Email</p>
                  <a href="mailto:hello@wecreateconsult.com" className="font-semibold hover:text-primary transition-colors">
                    hello@wecreateconsult.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted font-semibold mb-2">Social</p>
                  <a href="#" className="font-semibold hover:text-primary transition-colors">LinkedIn</a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
