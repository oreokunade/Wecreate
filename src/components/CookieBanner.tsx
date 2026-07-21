"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay so it doesn't pop up instantly on load
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto z-50 max-w-sm"
        >
          <div className="bg-white border border-border shadow-2xl p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-[#141A23] text-lg">We use cookies</h4>
              <p className="text-sm text-muted">
                We use cookies to improve your experience on our site and analyze traffic. 
                By clicking "Accept", you consent to our use of cookies.
              </p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={acceptCookies}
                className="flex-1 bg-[#141A23] text-white py-2.5 rounded-full text-sm font-semibold hover:bg-primary transition-colors"
              >
                Accept
              </button>
              <button 
                onClick={() => setShowBanner(false)}
                className="px-4 py-2.5 text-[#141A23] text-sm font-semibold hover:bg-gray-100 rounded-full transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
