"use client";
import { motion } from "framer-motion";
import { Calendar, UserCheck, ShieldCheck, Clock, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 bg-[#f8fafd] overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-white/60 to-transparent pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8 relative z-20"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm md:text-base font-bold tracking-wide shadow-sm"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
                🚀 LAUNCHING SOON IN SUDURPASHCHIM
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-slate-800 leading-[1.2] tracking-normal mt-2">
                नेपालको भरपर्दो <br />
                <span className="text-[var(--primary-blue)] inline-block mt-2">होम सर्भिस प्लेटफर्म</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-lg mt-6">
                Verified professionals for electrical, plumbing, AC repair, CCTV, cleaning and more - at your doorstep.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
              <Link href="/book" className="w-full sm:w-auto bg-[var(--primary-blue)] hover:bg-blue-700 text-white h-12 sm:h-14 px-6 sm:px-8 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-blue-500/30 flex items-center justify-center">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> Book a Service
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-xl font-bold text-sm sm:text-base border-slate-200 text-slate-800 hover:bg-slate-50 bg-white shadow-sm">
                <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[var(--primary-green)]" /> Enroll as an Expert
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 pt-8">
              <div className="flex items-center gap-3 bg-white sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none shadow-sm sm:shadow-none border border-slate-100 sm:border-none">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[var(--primary-green)]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0b1b36] leading-tight">Verified Pros</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">100% KYC Checked</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none shadow-sm sm:shadow-none border border-slate-100 sm:border-none">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[var(--primary-blue)]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0b1b36] leading-tight">Fast Response</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">On-time Service</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none shadow-sm sm:shadow-none border border-slate-100 sm:border-none">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                  <ThumbsUp className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0b1b36] leading-tight">Guaranteed</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">Quality Assured</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[380px] sm:h-[500px] lg:h-[600px] xl:h-[700px] w-full mt-8 lg:mt-0"
          >
            {/* The Generated Image Blending In */}
            <div className="absolute inset-0 z-0 flex justify-end items-end">
               <img 
                 src="/hero_professionals.png" 
                 alt="Mero Sewa Professionals" 
                 className="w-[120%] sm:w-[140%] max-w-none h-[100%] sm:h-[105%] object-cover object-bottom"
                 style={{ maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)" }}
               />
            </div>

            {/* Trusted Badge floating above image bottom-left */}
            <div className="absolute bottom-16 sm:bottom-24 left-0 sm:left-4 lg:left-0 bg-white/95 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 sm:gap-4 z-20 transition-transform hover:-translate-y-1 duration-300">
               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 rounded-full flex items-center justify-center border-2 border-[var(--primary-green)] shrink-0">
                 <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary-green)]" />
               </div>
               <div>
                 <p className="text-xs sm:text-sm text-slate-500 font-medium">Trusted by</p>
                 <p className="text-xl sm:text-2xl font-black text-[var(--primary-green)] leading-tight">10,000+</p>
                 <p className="text-[10px] sm:text-xs text-slate-500 font-bold">Happy Customers</p>
               </div>
            </div>

            {/* App Mockup floating over image bottom-right */}
            <div className="hidden sm:block absolute bottom-6 right-0 lg:-right-6 xl:right-0 w-[210px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-[8px] border-[#1e293b] overflow-hidden z-30 transform hover:-translate-y-2 transition-transform duration-500 scale-[0.7] md:scale-[0.8] origin-bottom-right">
               {/* Phone Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#1e293b] rounded-b-lg z-50"></div>
               
               {/* App Header */}
               <div className="bg-[#f8fafd] pt-6 pb-2 px-3 border-b border-slate-100 flex items-center justify-between">
                 <img src="/mero-sewa-logo.png" alt="Mero Sewa Logo" className="h-4 w-auto object-contain" />
                 <div className="w-5 h-5 rounded-full bg-slate-200"></div>
               </div>

               {/* App Banner */}
               <div className="p-2">
                 <div className="w-full h-16 bg-gradient-to-r from-blue-500 to-[var(--primary-blue)] rounded-lg relative overflow-hidden flex items-center px-3">
                   <div className="text-white z-10">
                     <p className="font-bold text-[10px]">Need a Repair?</p>
                     <p className="text-[7px] opacity-90 mt-0.5">Book professionals instantly</p>
                   </div>
                 </div>
               </div>

               {/* Popular Services Grid */}
               <div className="px-2 pb-3 bg-white h-[200px]">
                 <h4 className="font-bold text-[10px] text-[#0b1b36] mb-2 ml-1">Popular Services</h4>
                 <div className="grid grid-cols-4 gap-y-2 gap-x-1.5">
                    {[
                      { icon: '🔌', label: 'Electric' },
                      { icon: '🚰', label: 'Plumb' },
                      { icon: '❄️', label: 'AC' },
                      { icon: '🧹', label: 'Clean' },
                      { icon: '📷', label: 'CCTV' },
                      { icon: '🚿', label: 'Geyser' },
                      { icon: '💻', label: 'Computer' },
                      { icon: '🔨', label: 'Carpentry' },
                    ].map((srv, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-1">
                        <div className="w-8 h-8 rounded-lg bg-[#f0f4f8] flex items-center justify-center text-sm shadow-sm border border-slate-50">
                          {srv.icon}
                        </div>
                        <span className="text-[7px] font-bold text-slate-600 text-center">{srv.label}</span>
                      </div>
                    ))}
                 </div>
               </div>
               
               {/* Bottom Nav */}
               <div className="h-10 border-t border-slate-100 bg-white flex justify-around items-center px-1">
                 <div className="w-6 h-6 flex flex-col items-center justify-center text-[var(--primary-blue)]">
                   <span className="text-sm leading-none mb-0.5">🏠</span>
                 </div>
                 <div className="w-6 h-6 flex flex-col items-center justify-center text-slate-400">
                   <span className="text-sm leading-none mb-0.5">📋</span>
                 </div>
                 <div className="w-6 h-6 flex flex-col items-center justify-center text-slate-400">
                   <span className="text-sm leading-none mb-0.5">👤</span>
                 </div>
               </div>
            </div>
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
