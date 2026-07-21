"use client";

import Link from 'next/link';
import Magnetic from './Magnetic';
import WebGLBackground from './WebGLBackground';
import SlantedButton from './SlantedButton';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#141A23] text-white pt-24 pb-8 relative overflow-hidden flex flex-col justify-between rounded-t-3xl mt-[-2rem] z-30">
      {/* 2D Shader Background */}
      <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none">
        <WebGLBackground />
      </div>

      <div className="container px-6 md:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 mb-24 md:mb-32">
          
          {/* Left Column: CTA */}
          <div className="flex flex-col gap-8 max-w-2xl lg:w-[55%]">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] tracking-tight max-w-xl">
              The round will not wait for you to be ready.
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-lg">
              Tell us where you are in the process. We will tell you honestly what it will take to get you to the next stage, and whether we are the right people to take you there.
            </p>
            <div className="mt-2">
              <SlantedButton href="/contact" text="Start a conversation" variant="dark" />
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="flex flex-row gap-12 md:gap-16 lg:w-[40%] lg:justify-end">
            <div>
              <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40 mb-5 md:mb-6">Navigate</h4>
              <ul className="space-y-3 md:space-y-4">
                <li><Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">About</Link></li>
                <li><Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">Services</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40 mb-5 md:mb-6">Connect</h4>
              <ul className="space-y-3 md:space-y-4">
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">X (Twitter)</a></li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* Massive Brand Name Marquee */}
        <div className="w-[100vw] relative left-1/2 -translate-x-1/2 flex items-center overflow-hidden mb-4 md:mb-8">
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 160, repeat: Infinity }}
          >
            <h1 className="text-[17vw] leading-[0.8] font-bold tracking-tighter text-white opacity-90 select-none uppercase flex items-center pr-0">
              WECREATE <span className="mx-8 md:mx-16 font-light">—</span> WECREATE <span className="mx-8 md:mx-16 font-light">—</span>
            </h1>
            <h1 className="text-[17vw] leading-[0.8] font-bold tracking-tighter text-white opacity-90 select-none uppercase flex items-center pr-0">
              WECREATE <span className="mx-8 md:mx-16 font-light">—</span> WECREATE <span className="mx-8 md:mx-16 font-light">—</span>
            </h1>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[0.65rem] font-mono tracking-widest text-white/40 uppercase">
          <p>© {new Date().getFullYear()} Wecreate Consult. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
