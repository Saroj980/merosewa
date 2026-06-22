"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wrench, PhoneCall, Briefcase } from "lucide-react";

export default function BlogCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2.5rem] border border-slate-200 p-10 lg:p-16 max-w-5xl mx-auto shadow-2xl shadow-slate-200/50 relative overflow-hidden text-center"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight mb-6">
              Need Professional Assistance?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-12">
              Don't let minor issues become major repairs. Book a verified professional today and experience hassle-free home maintenance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link 
                href="/services" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0057D9] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 group"
              >
                <Wrench className="w-5 h-5" />
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0F172A] border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-[#0F172A] hover:bg-slate-50 transition-all"
              >
                <PhoneCall className="w-5 h-5" />
                Contact Us
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col items-center">
              <p className="text-slate-500 mb-4">Are you a skilled professional?</p>
              <Link 
                href="/become-provider" 
                className="inline-flex items-center gap-2 text-[#22C55E] font-bold hover:text-green-600 transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                Become a Provider
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
