"use client";
import { motion } from "framer-motion";
import { MapPin, Heart, Sparkles, TrendingUp, Handshake } from "lucide-react";

export function RoadmapAndValues() {
  const values = [
    { icon: Heart, title: "Dignity in Labor", desc: "We believe every professional deserves respect, fair wages, and safe working conditions." },
    { icon: Handshake, title: "Absolute Trust", desc: "Trust isn't given, it's engineered. We background-check, verify, and guarantee every job." },
    { icon: Sparkles, title: "Obsessive Quality", desc: "Good isn't enough. We strive for a 'wow' experience from booking to completion." },
    { icon: TrendingUp, title: "Local Empowerment", desc: "When local professionals grow, communities thrive. We exist to build local economies." }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Coverage Expansion Roadmap */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Journey Forward</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Starting strong in Sudurpashchim, scaling across the nation.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* The line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 rounded-full hidden md:block">
              <div className="w-1/3 h-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-green)] rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {/* Phase 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-xl border-t-4 border-[var(--primary-blue)] relative"
              >
                <div className="hidden md:flex absolute -top-10 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-[var(--primary-blue)] shadow-md"></div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phase 1 (Current)</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Sudurpashchim</h3>
                <p className="text-slate-500 text-sm">Establishing dominance and building the ultimate provider network in Dhangadhi, Attariya, and Mahendranagar.</p>
              </motion.div>

              {/* Phase 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-slate-200 relative opacity-70"
              >
                <div className="hidden md:flex absolute -top-10 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-slate-200 shadow-md"></div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phase 2 (2027)</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Major Hubs</h3>
                <p className="text-slate-500 text-sm">Expanding our footprint to Nepalgunj, Pokhara, and Butwal, adapting to regional service needs.</p>
              </motion.div>

              {/* Phase 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-slate-200 relative opacity-70"
              >
                <div className="hidden md:flex absolute -top-10 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-slate-200 shadow-md"></div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phase 3 (2028+)</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Pan-Nepal</h3>
                <p className="text-slate-500 text-sm">Bringing the Mero Sewa standard of trust and quality to every household across the nation.</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our DNA</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We don't just hang these on a wall. We hire, fire, and build products based on these core principles.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-200 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-[var(--primary-blue)]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
