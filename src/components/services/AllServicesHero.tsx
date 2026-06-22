"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Award, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AllServicesHero() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/services?q=${encodeURIComponent(searchQuery.trim())}`, { scroll: false });
    } else {
      router.push(`/services`, { scroll: false });
    }
  };
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-white dark:bg-slate-950">
      {/* Light, Clean Background with Animated Gradient Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-30 dark:opacity-5"></div>
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/60 dark:bg-blue-900/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 40, 0],
            y: [0, 60, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-green-50/60 dark:bg-green-900/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[var(--primary-blue)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] font-semibold text-sm mb-8"
          >
            <Award className="w-4 h-4 text-blue-500" />
            <span>Premium Home Services</span>
          </motion.div>

          <div className="overflow-hidden mb-6 py-2">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              All Home Services <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-blue)] to-blue-400">In One Place</span>
                <motion.span 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                  className="absolute bottom-1 left-0 h-3 bg-blue-100 dark:bg-blue-900/40 -z-10 rounded-full"
                />
              </span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-12"
          >
            From emergency repairs to regular maintenance, our verified professionals are ready to help. Discover top-rated services at your fingertips.
          </motion.p>

          {/* Interactive Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, type: "spring", bounce: 0.4 }}
            className="max-w-2xl mx-auto relative group"
          >
            {/* Glowing shadow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-green)] rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
            
            <form 
              onSubmit={handleSearch}
              className="relative flex items-center bg-white dark:bg-slate-900 rounded-[2rem] p-1.5 md:p-2 border border-slate-200 dark:border-slate-800 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:-translate-y-1"
            >
              <div className="pl-4 md:pl-6 pr-2 md:pr-3 text-slate-400">
                <Search className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What service do you need?" 
                className="flex-1 w-full bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 text-sm md:text-lg py-3 md:py-4 font-medium"
              />
              <Button type="submit" className="rounded-full bg-[var(--primary-blue)] hover:bg-blue-700 text-white font-bold px-4 md:px-8 py-5 md:py-6 h-auto transition-transform hover:scale-105 active:scale-95 group/btn">
                <span className="hidden sm:inline">Search</span> <ArrowRight className="w-4 h-4 sm:ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </form>
            
            {/* Quick Tags */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mt-6"
            >
              <span className="text-sm font-medium text-slate-500">Popular:</span>
              {['AC Repair', 'House Cleaning', 'Plumbing'].map((tag, i) => (
                <button 
                  key={i}
                  onClick={() => {
                    setSearchQuery(tag);
                    router.push(`/services?q=${encodeURIComponent(tag)}`, { scroll: false });
                  }}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[var(--primary-blue)] cursor-pointer transition-colors border-b border-transparent hover:border-[var(--primary-blue)] pb-0.5"
                >
                  {tag}
                </button>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
