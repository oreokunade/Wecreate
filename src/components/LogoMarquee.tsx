import React from 'react';

const logos = [
  { src: '/logos/Afrileap.png', alt: 'Afrileap' },
  { src: '/logos/Chalant.png', alt: 'Chalant' },
  { src: '/logos/Foodie Banc.png', alt: 'Foodie Banc' },
  { src: '/logos/Indigo.png', alt: 'Indigo' },
  { src: '/logos/Odoezi.png', alt: 'Odoezi' },
  { src: '/logos/Sandwich.png', alt: 'Sandwich' },
];

export default function LogoMarquee() {
  return (
    <section className="bg-white py-10 md:py-14 border-t border-[#141A23]/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mb-6">
        <h2 className="text-center text-xs md:text-sm uppercase font-bold tracking-[0.2em] text-[#141A23]/40">
          Trusted by bold founders
        </h2>
      </div>
      
      <div className="flex overflow-hidden group">
        <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16 flex items-center justify-center">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300 transform hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
          {logos.map((logo, idx) => (
            <div key={`copy-${idx}`} className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16 flex items-center justify-center">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300 transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
