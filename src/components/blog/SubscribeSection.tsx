"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function SubscribeSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#0F172A]">
      {/* Animated Particles & Glows */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0057D9]/20 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0057D9]/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#22C55E]/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Elements */}
      {[
        { left: '25%', top: '60%', duration: 6, delay: 0.5 },
        { left: '45%', top: '80%', duration: 8, delay: 1.2 },
        { left: '65%', top: '55%', duration: 5, delay: 0.2 },
        { left: '80%', top: '75%', duration: 7, delay: 1.8 },
        { left: '35%', top: '90%', duration: 9, delay: 0.8 },
      ].map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/20"
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-snug md:leading-[1.3]">
              Stay Updated With Home<br className="hidden sm:block" /> Maintenance Tips
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Join thousands of homeowners in Sudurpashchim. Get expert advice, seasonal checklists, and exclusive offers delivered straight to your inbox.
            </p>

            <form className="relative max-w-2xl mx-auto p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent text-white placeholder:text-slate-400 px-6 py-4 outline-none focus:ring-0"
                required
              />
              <div className="hidden sm:block w-px h-8 bg-white/20 self-center" />
              <select defaultValue="" className="w-full sm:w-48 bg-transparent text-white border-t sm:border-t-0 border-white/20 sm:border-none px-6 py-4 outline-none appearance-none cursor-pointer">
                <option value="" disabled className="text-slate-900">Select City</option>
                <option value="dhangadhi" className="text-slate-900">Dhangadhi</option>
                <option value="attariya" className="text-slate-900">Attariya</option>
                <option value="tikapur" className="text-slate-900">Tikapur</option>
                <option value="mahendranagar" className="text-slate-900">Mahendranagar</option>
              </select>
              <button 
                type="submit"
                className="bg-[#0057D9] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
            
            <p className="text-slate-400 text-xs mt-6">
              We respect your privacy. No spam, just valuable insights.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
