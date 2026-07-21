"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDarkPage = pathname === '/' || pathname === '/converge';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  // The IntegratedBio layout has the logo on the left (white) and a pill menu on the right.
  const logoColor = scrolled ? 'text-dark' : (isDarkPage ? 'text-white' : 'text-dark');
  const pillBg = scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border border-border' : (isDarkPage ? 'bg-[#E5E6DF]' : 'bg-[#E5E6DF]');
  const pillTextColor = 'text-[#1B2326]'; // Dark text for the pill links
  const btnBg = 'bg-primary text-white hover:bg-primary/90'; // Primary light blue button inside the pill

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? 'py-4' : 'pt-6 pb-4 md:pt-8 lg:pt-10'
        }`}
      >
        <div className="w-full px-6 md:px-[50px] flex justify-between items-center">
          {/* Mobile Floating Pill (wraps Logo and Menu Button) */}
          <div className="lg:hidden w-full flex items-center justify-between bg-white/95 backdrop-blur-md rounded-2xl p-2 pl-4 shadow-sm border border-white/20">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Wecreate Logo" 
                className="h-8 sm:h-9 w-auto object-contain" 
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-primary w-10 h-10 rounded-xl flex flex-col justify-center items-center gap-[5px] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <span className="text-white text-lg leading-none">✕</span>
              ) : (
                <>
                  <span className="w-[18px] h-[1.5px] bg-white block rounded-full"></span>
                  <span className="w-[18px] h-[1.5px] bg-white block rounded-full"></span>
                </>
              )}
            </button>
          </div>

          {/* Desktop Logo (Far Left) */}
          <Link href="/" className="hidden lg:flex items-center">
            <img 
              src="/logo.png" 
              alt="Wecreate Logo" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Nav (Pill on the Right) */}
          <div className={`hidden lg:flex items-center rounded-2xl pl-8 p-1.5 ${pillBg}`}>
            <ul className="flex items-center gap-8 mr-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className={`text-[0.75rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 hover:text-primary ${pillTextColor} ${
                        isActive ? 'text-primary' : 'opacity-90'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA inside the pill */}
            <Magnetic>
              <Link
                href="/contact"
                className={`inline-block px-6 py-2.5 rounded-xl text-[0.75rem] font-semibold uppercase tracking-[0.08em] transition-all duration-200 flex items-center justify-center ${btnBg}`}
              >
                Book a call
              </Link>
            </Magnetic>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}
            animate={{ opacity: 1, y: 0, borderBottomLeftRadius: '0%', borderBottomRightRadius: '0%' }}
            exit={{ opacity: 0, y: '-100%', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-white z-[99] flex flex-col justify-center px-8 sm:px-12"
          >
            <motion.ul 
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
              }}
              className="flex flex-col gap-6 sm:gap-8 mt-12"
            >
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  variants={{
                    initial: { opacity: 0, y: 40, rotateX: -20 },
                    animate: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
                    exit: { opacity: 0, transition: { duration: 0.3 } }
                  }}
                  className="perspective-1000"
                >
                  <Link
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-[2rem] sm:text-[3rem] leading-[1.1] font-bold tracking-tighter transition-colors ${
                      pathname === link.path ? 'text-primary' : 'text-[#141A23] hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  initial: { opacity: 0, y: 40 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
                  exit: { opacity: 0, transition: { duration: 0.3 } }
                }}
                className="pt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center bg-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-[0.875rem] sm:text-[1rem] font-semibold uppercase tracking-[0.08em] shadow-lg shadow-primary/25 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Book a call
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
