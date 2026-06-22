"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FutureVisionCTA() {
  return (
    <section className="relative overflow-hidden bg-blue-50 py-24 md:py-32 border-t border-blue-100">
      {/* Light elegant background with abstract blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-gradient-to-r from-blue-300/30 to-green-300/30 blur-[100px] rounded-full mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-white p-12 md:p-20 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight"
          >
            Imagine a Nepal Where Skill <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-blue)] to-blue-500">Equals Success.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            We're building a future where young Nepalese don't have to look abroad for reliable, dignified blue-collar work. We're building a system where expertise is recognized, rated, and rewarded right here at home.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/services">
              <Button className="w-full sm:w-auto h-14 px-8 rounded-full bg-[var(--primary-blue)] hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-500/30 transition-transform hover:-translate-y-1">
                Book a Service Today
              </Button>
            </Link>
            
            <Link href="/join-as-pro">
              <Button variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold text-lg shadow-sm transition-transform hover:-translate-y-1">
                Join as a Professional <ArrowRight className="w-5 h-5 ml-2 text-slate-400" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
