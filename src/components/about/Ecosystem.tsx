"use client";
import { motion } from "framer-motion";
import { Users, Home, Smartphone, Briefcase, Zap } from "lucide-react";

export function Ecosystem() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-slate-100 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border-[1px] border-slate-50 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            The Mero Sewa Ecosystem
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A self-sustaining loop of value creation. We connect technology, skilled labor, and consumer demand into one flawless network.
          </p>
        </div>

        {/* Ecosystem Diagram / Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          
          {/* Customer Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center relative overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full bg-white shadow-sm text-[var(--primary-blue)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Home className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Households</h3>
            <p className="text-slate-500 font-medium">Access to verified, trained professionals. Instant booking, transparent pricing, and 100% service guarantee.</p>
          </motion.div>

          {/* Core Tech Platform */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_-12px_rgba(15,113,242,0.2)] flex flex-col items-center text-center relative transform scale-105 z-10 border-2 border-blue-100"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-[var(--primary-green)] rounded-[2rem] blur opacity-10"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[var(--primary-blue)] to-blue-400 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                <Smartphone className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">The Platform</h3>
              <p className="text-slate-600 font-medium">Intelligent matchmaking, automated dispatch, secure payments, and real-time tracking architecture.</p>
              
              <div className="mt-8 flex gap-4">
                <Zap className="w-6 h-6 text-[var(--primary-blue)]" />
                <ShieldCheck className="w-6 h-6 text-[var(--primary-green)]" />
              </div>
            </div>
          </motion.div>

          {/* Provider Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center relative overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full bg-white shadow-sm text-[var(--primary-green)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Briefcase className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Service Partners</h3>
            <p className="text-slate-500 font-medium">Consistent workflow, digital reputation, skill development, and increased earning potential.</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.92 0 5.08 1 7 2a1 1 0 0 1 1 1v7z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
