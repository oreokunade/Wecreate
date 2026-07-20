"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import Magnetic from "./Magnetic";
import SlantedButton from "./SlantedButton";

const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.3em] mb-[0.1em]">
      {children}
    </motion.span>
  );
};

export default function TextRevealScroll({ text, ctaText, ctaHref }: { text: string, ctaText?: string, ctaHref?: string }) {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 75%", "end 60%"]
  });

  const words = text.split(" ");

  return (
    <section className="bg-white py-10 sm:py-12 md:py-16 px-5 sm:px-6 md:px-12 lg:px-20 relative z-20">
      <div className="max-w-[900px] mx-auto flex flex-col items-center" ref={container}>
        <h2 className="text-[0.7rem] md:text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#141A23]/40 mb-8 md:mb-10 text-center">
          About
        </h2>
        <div className="flex flex-wrap justify-center text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.2] tracking-tight text-[#141A23]">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </div>
        
        {ctaText && ctaHref && (
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <SlantedButton href={ctaHref} text={ctaText} />
          </div>
        )}
      </div>
    </section>
  );
}
