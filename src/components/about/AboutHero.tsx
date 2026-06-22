"use client";
import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      {/* Premium Light Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--primary-blue)]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--primary-green)]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 text-[var(--primary-blue)] shadow-sm text-sm font-bold mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--primary-green)] animate-pulse"></span>
            Building the Future of Local Commerce
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8"
          >
            Organizing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-blue)] to-blue-500">Unorganized.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            We're not just an app. We're an economic bridge empowering skilled professionals and bringing absolute peace of mind to every household in Nepal.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
