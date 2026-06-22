"use client";
import { motion } from "framer-motion";
import { Building2, Target, Eye, ShieldCheck } from "lucide-react";

export function MissionStory() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-slate-500 font-bold tracking-wider uppercase text-sm">
              <Building2 className="w-4 h-4" />
              Company Overview
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Organizing the Unorganized.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Mero Sewa is Sudurpashchim's premier home service platform, built to bridge the massive gap between skilled local professionals and households in need of reliable services. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Finding a reliable plumber, electrician, or cleaner in Nepal has always been unpredictable. We replace this uncertainty with a seamless, tech-driven platform that guarantees quality, transparent pricing, and absolute safety for every booking.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" alt="Professional service provider at work" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
              <p className="text-white text-xl font-medium italic">"Building a system of absolute trust."</p>
            </div>
          </motion.div>
        </div>

        {/* Our Mission */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-green)] opacity-80 mix-blend-multiply z-10"></div>
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069&auto=format&fit=crop" alt="Trust and professionalism" className="w-full h-full object-cover grayscale" />
            <div className="absolute inset-0 z-20 flex flex-col justify-center p-12">
              <ShieldCheck className="w-16 h-16 text-white mb-6 opacity-80" />
              <h3 className="text-3xl font-bold text-white mb-4">Our Core Protocol.</h3>
              <p className="text-blue-50 text-lg">We don't just want to build a directory. We want to build a trust protocol for local services.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 md:order-2"
          >
            <div className="inline-flex items-center gap-2 text-[var(--primary-blue)] font-bold tracking-wider uppercase text-sm">
              <Target className="w-4 h-4" />
              Our Mission
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Empowering Pros, Delighting Homes.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Mero Sewa exists to formalize the unorganized service sector. We are on a mission to elevate the dignity of labor in Nepal by providing skilled professionals with a predictable income, digital identity, and formal training.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              For households, our mission is simple: <strong>Zero friction.</strong> We deliver absolute certainty in quality, pricing, and safety, turning stressful home crises into seamless experiences.
            </p>
          </motion.div>
        </div>

        {/* Our Vision */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-[var(--primary-green)] font-bold tracking-wider uppercase text-sm">
              <Eye className="w-4 h-4" />
              Our Vision
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              A Nepal Where Skill Equals Success.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We envision a future where young Nepalese don't have to look abroad for reliable, dignified blue-collar work. We are building an ecosystem where local expertise is recognized, rated, and highly rewarded right here at home.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              By setting the gold standard for service delivery, we aim to become the definitive backbone of local commerce across the entire nation.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Bright future and success" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-green)]/90 via-transparent to-transparent flex items-end p-8">
              <p className="text-white text-xl font-medium italic">"Redefining the dignity of labor."</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
