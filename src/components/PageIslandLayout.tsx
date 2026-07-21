"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import WebGLBackground from "@/components/WebGLBackground";

interface PageIslandLayoutProps {
  title: string;
  children: ReactNode;
}

export default function PageIslandLayout({ title, children }: PageIslandLayoutProps) {
  return (
    <main className="w-full relative min-h-screen bg-black">
      {/* 1. Background Shader */}
      <div className="fixed inset-0 z-0">
        <WebGLBackground />
      </div>

      {/* 2. Outer Island Wrapper with padding to show shader around edges */}
      <div className="relative z-10 w-full min-h-screen p-2 sm:p-4 md:p-6 lg:p-8 pt-[120px] md:pt-[140px] flex flex-col gap-2 sm:gap-4 mx-auto max-w-[1800px]">
        
        {/* 3. Floating Hero Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full bg-[#141A23]/80 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] h-[40vh] min-h-[300px] md:min-h-[450px] flex items-center justify-center sticky top-[120px] md:top-[140px] z-0 overflow-hidden"
        >
          {/* Subtle noise or gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent z-0"></div>
          
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-bold z-10 text-center tracking-tight px-4 sm:px-8">
            {title}
          </h1>
        </motion.div>

        {/* 4. Content Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full bg-[#f8f9fa] flex-1 rounded-[2rem] md:rounded-[3rem] p-4 sm:p-8 md:p-16 lg:p-24 shadow-2xl relative z-10 overflow-hidden"
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
}
