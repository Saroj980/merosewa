"use client";

import { motion } from "framer-motion";
import { Search, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#FAFAFA]">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#0057D9]/5 blur-[100px]" />
          <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#22C55E]/5 blur-[100px]" />
        </div>
        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#0057D9]"></span>
            <span className="text-sm font-semibold text-slate-800">Mero Sewa Resources</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] mb-6"
          >
            Expert Advice for your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057D9] to-blue-500">
              Home & Lifestyle
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Discover maintenance guides, seasonal tips, and trusted insights from local professionals in Sudurpashchim.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400 group-focus-within:text-[#0057D9] transition-colors" />
              </div>
              <input
                type="text"
                className="w-full pl-14 pr-32 py-5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-[#0057D9]/50 focus:ring-4 focus:ring-[#0057D9]/10 transition-all shadow-xl shadow-slate-200/50 text-lg placeholder:text-slate-400"
                placeholder="Search for guides, tips, or services..."
              />
              <div className="absolute inset-y-2 right-2">
                <button className="h-full px-6 bg-[#0057D9] hover:bg-blue-700 text-white font-medium rounded-xl transition-colors shadow-md">
                  Search
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-sm">
              <span className="text-slate-500 font-medium hidden sm:inline-block">Popular:</span>
              {['Home Cleaning', 'Plumbing Fixes', 'AC Maintenance', 'Pest Control'].map((tag) => (
                <Link 
                  key={tag} 
                  href={`#`}
                  className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-[#0057D9] hover:text-[#0057D9] transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Featured Images Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-5xl mx-auto mt-16 lg:mt-24 relative hidden md:block"
        >
          <div className="grid grid-cols-3 gap-6 items-center">
            {/* Left Image */}
            <Link href="#" className="group col-span-1 rounded-3xl overflow-hidden aspect-[4/5] shadow-lg translate-y-8 relative block">
              <Image 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Cleaning service" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white text-xs font-semibold mb-3 inline-block">Cleaning</span>
                <p className="text-white font-semibold text-lg line-clamp-2 leading-tight">Deep Cleaning Hacks for Monsoon</p>
              </div>
            </Link>

            {/* Center Image (Featured) */}
            <Link href="#" className="group col-span-1 rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl relative z-10 border-[6px] border-white block">
              <Image 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Home maintenance" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="px-3 py-1.5 bg-[#0057D9] rounded-lg text-white text-xs font-bold mb-4 inline-block shadow-lg">Featured Guide</span>
                <p className="text-white font-bold text-2xl leading-tight mb-2">The Ultimate Home Maintenance Checklist</p>
                <div className="flex items-center text-white/80 text-sm font-medium">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Right Image */}
            <Link href="#" className="group col-span-1 rounded-3xl overflow-hidden aspect-[4/5] shadow-lg translate-y-8 relative block">
              <Image 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Plumbing service" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white text-xs font-semibold mb-3 inline-block">Plumbing</span>
                <p className="text-white font-semibold text-lg line-clamp-2 leading-tight">Quick Fixes for Leaky Faucets</p>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

