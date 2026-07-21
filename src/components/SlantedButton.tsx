"use client";
import Link from 'next/link';
import Magnetic from './Magnetic';

export default function SlantedButton({ 
  href, 
  text, 
  variant = 'light',
  target,
  rel
}: { 
  href: string, 
  text: string, 
  variant?: 'light' | 'dark',
  target?: string,
  rel?: string
}) {
  const isDark = variant === 'dark';

  return (
    <Magnetic>
      <Link href={href} target={target} rel={rel} className="group flex items-center justify-center w-fit">
        
        {/* Left Block (Text) */}
        <div className="relative flex items-center justify-center px-5 sm:px-8 h-11 sm:h-14">
           {/* Background Left (Straight left edge, rounded) */}
           <div className={`absolute inset-y-0 left-0 right-3 group-hover:bg-primary transition-colors duration-500 rounded-l-[14px] z-0 ${isDark ? 'bg-white' : 'bg-[#141A23]'}`}></div>
           {/* Background Right (Slanted right edge, rounded) */}
           <div className={`absolute inset-y-0 right-0 w-8 group-hover:bg-primary transition-colors duration-500 -skew-x-[15deg] rounded-r-[4px] z-0 ${isDark ? 'bg-white' : 'bg-[#141A23]'}`}></div>
           
           <span className={`relative z-10 group-hover:text-white transition-colors duration-500 text-[0.6rem] sm:text-[0.75rem] md:text-[0.8rem] font-bold tracking-widest uppercase ${isDark ? 'text-[#141A23]' : 'text-white'}`}>
             {text}
           </span>
        </div>

        {/* Gap between blocks */}
        <div className="w-1 sm:w-1.5 h-11 sm:h-14 relative z-0"></div>

        {/* Right Block (Arrow) */}
        <div className="relative flex items-center justify-center px-4 sm:px-6 h-11 sm:h-14">
           {/* Background Left (Slanted left edge) */}
           <div className={`absolute inset-y-0 left-0 w-8 bg-primary transition-colors duration-500 -skew-x-[15deg] rounded-l-[4px] z-0 ${isDark ? 'group-hover:bg-white' : 'group-hover:bg-[#141A23]'}`}></div>
           {/* Background Right (Straight right edge, rounded) */}
           <div className={`absolute inset-y-0 left-3 right-0 bg-primary transition-colors duration-500 rounded-r-[14px] z-0 ${isDark ? 'group-hover:bg-white' : 'group-hover:bg-[#141A23]'}`}></div>
           
           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`relative z-10 transition-all duration-500 transform group-hover:translate-x-1 ${isDark ? 'text-white group-hover:text-[#141A23]' : 'text-white group-hover:text-white'}`}>
             <path d="M5 12h14M12 5l7 7-7 7"/>
           </svg>
        </div>

      </Link>
    </Magnetic>
  );
}
