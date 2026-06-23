"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BellRing } from "lucide-react";
import Image from "next/image";

export function LaunchPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup within the last 2 minutes
    const lastSeenStr = localStorage.getItem("meroSewaLaunchPopupTimestamp");
    let shouldShow = true;

    if (lastSeenStr) {
      const lastSeen = parseInt(lastSeenStr, 10);
      const now = Date.now();
      // 2 minutes = 2 * 60 * 1000 = 120,000 milliseconds
      if (now - lastSeen < 120000) {
        shouldShow = false;
      }
    }
    
    if (shouldShow) {
      // Show popup after 1.5 seconds of page load
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("meroSewaLaunchPopupTimestamp", Date.now().toString());
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      closePopup();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Top Graphic Section */}
            <div className="relative h-56 sm:h-64 w-full bg-slate-100 overflow-hidden">
              <Image 
                src="/launch-popup.png" 
                alt="Mero Sewa Launching Soon" 
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-8 text-center">
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-bold text-[11px] tracking-widest uppercase rounded-full mb-4">
                Coming Soon
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
                Get Ready For <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057D9] to-blue-500">Mero Sewa</span>
              </h3>
              
              <p className="text-slate-600 mb-8 font-medium text-sm sm:text-base leading-relaxed">
                We are launching the ultimate home service platform in Sudurpashchim very soon. Be the first to get exclusive early-bird discounts!
              </p>

              {isSubscribed ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center justify-center gap-3 text-green-700 font-bold"
                >
                  <BellRing className="w-5 h-5" />
                  You're on the list! We'll notify you.
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    required 
                    placeholder="Enter your email address" 
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 sm:py-0 focus:outline-none focus:ring-2 focus:ring-[#0057D9]/50 transition-all text-sm font-medium"
                  />
                  <button 
                    type="submit" 
                    className="bg-[#0057D9] hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/30 shrink-0"
                  >
                    Notify Me
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
