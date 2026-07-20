"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const iconVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      duration: 2, 
      ease: "easeInOut",
      delay: 0.2
    } 
  }
};

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "0.75",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const AnimatedCreditCard = ({ size = 72, className = "" }: { size?: number, className?: string }) => (
  <motion.svg width={size} height={size} {...svgProps} className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
    <motion.rect variants={iconVariants} width="20" height="14" x="2" y="5" rx="2" />
    <motion.line variants={iconVariants} x1="2" x2="22" y1="10" y2="10" />
  </motion.svg>
);

export const AnimatedSprout = ({ size = 72, className = "" }: { size?: number, className?: string }) => (
  <motion.svg width={size} height={size} {...svgProps} className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
    <motion.path variants={iconVariants} d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" />
    <motion.path variants={iconVariants} d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" />
    <motion.path variants={iconVariants} d="M5 21h14" />
  </motion.svg>
);

export const AnimatedHeartPulse = ({ size = 72, className = "" }: { size?: number, className?: string }) => (
  <motion.svg width={size} height={size} {...svgProps} className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
    <motion.path variants={iconVariants} d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    <motion.path variants={iconVariants} d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
  </motion.svg>
);

export const AnimatedStore = ({ size = 72, className = "" }: { size?: number, className?: string }) => (
  <motion.svg width={size} height={size} {...svgProps} className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
    <motion.path variants={iconVariants} d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" />
    <motion.path variants={iconVariants} d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" />
    <motion.path variants={iconVariants} d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
  </motion.svg>
);

export const AnimatedGlobe = ({ size = 72, className = "" }: { size?: number, className?: string }) => (
  <motion.svg width={size} height={size} {...svgProps} className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
    <motion.circle variants={iconVariants} cx="12" cy="12" r="10" />
    <motion.path variants={iconVariants} d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <motion.path variants={iconVariants} d="M2 12h20" />
  </motion.svg>
);

export const AnimatedHandHeart = ({ size = 72, className = "" }: { size?: number, className?: string }) => (
  <motion.svg width={size} height={size} {...svgProps} className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
    <motion.path variants={iconVariants} d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
    <motion.path variants={iconVariants} d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95" />
    <motion.path variants={iconVariants} d="m2 15 6 6" />
    <motion.path variants={iconVariants} d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" />
  </motion.svg>
);

export const AnimatedLandmark = ({ size = 72, className = "" }: { size?: number, className?: string }) => (
  <motion.svg width={size} height={size} {...svgProps} className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
    <motion.path variants={iconVariants} d="M10 18v-7" />
    <motion.path variants={iconVariants} d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" />
    <motion.path variants={iconVariants} d="M14 18v-7" />
    <motion.path variants={iconVariants} d="M18 18v-7" />
    <motion.path variants={iconVariants} d="M3 22h18" />
    <motion.path variants={iconVariants} d="M6 18v-7" />
  </motion.svg>
);

export const AnimatedMessageCircle = ({ size = 72, className = "" }: { size?: number, className?: string }) => (
  <motion.svg width={size} height={size} {...svgProps} strokeWidth="1" className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
    <motion.path variants={iconVariants} d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
  </motion.svg>
);
