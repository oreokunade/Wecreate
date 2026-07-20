"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What service do you offer?",
    answer: "We ensure you are fully prepared for investor scrutiny. This includes building comprehensive valuation reports, cap tables, financial models, executive summaries, pitch decks, and an investor-grade data room."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing structure varies based on the engagement timeline and specific needs. A focused pitch deck rebuild has a fixed cost, while a full fundraising execution is typically retainer-based."
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes, we work across the spectrum. While we excel in helping startups raise capital and scale, we also have extensive experience crafting custom solutions for established businesses and NGOs."
  },
  {
    question: "Do you offer consultation?",
    answer: "Absolutely. We spend a lot of our time offering strategic consultation to help founders clarify their market position and refine their go-to-market strategies."
  },
  {
    question: "Does it integrate with other tools?",
    answer: "Our processes and deliverables are designed to seamlessly integrate into your existing workflow, ensuring that your data room and documentation are perfectly aligned with standard industry tools."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f8f9fa] py-16 md:py-24 px-5 sm:px-6 md:px-12 lg:px-20 relative z-10 border-t border-[#141A23]/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 md:mb-16 text-center flex flex-col items-center">
          <h2 className="text-[0.7rem] md:text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#141A23]/40 mb-4">
            FAQ
          </h2>
          <h3 className="text-[1.8rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-[1.05] tracking-tighter text-[#141A23] max-w-2xl">
            Frequently asked questions
          </h3>
        </div>

        <div className="bg-white rounded-[2rem] p-6 sm:p-10 md:p-14 lg:p-16 shadow-sm border border-[#141A23]/5">
          <div className="flex flex-col">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const isLast = idx === faqs.length - 1;
              
              return (
                <div key={idx} className={`overflow-hidden ${!isLast ? 'border-b border-[#141A23]/10' : ''}`}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full py-8 sm:py-10 flex items-center justify-between gap-4 sm:gap-6 text-left focus:outline-none group"
                  >
                    <span className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.6rem] font-bold tracking-tight text-[#141A23]">
                      {idx + 1}. {faq.question}
                    </span>
                    
                    {/* Icon Container */}
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary text-white transition-transform duration-300"
                    >
                      {isOpen ? <Minus size={24} strokeWidth={2.5} /> : <Plus size={24} strokeWidth={2.5} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                      >
                        <p className="pb-8 sm:pb-10 pt-0 text-[0.95rem] sm:text-[1.05rem] md:text-lg text-[#141A23]/60 leading-relaxed max-w-4xl font-medium pr-16">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
