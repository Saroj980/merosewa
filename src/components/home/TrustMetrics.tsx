"use client";
import { motion } from "framer-motion";

export function TrustMetrics() {
  const stats = [
    { label: 'Verified Experts', value: '500+' },
    { label: 'Jobs Completed', value: '10,000+' },
    { label: 'Average Rating', value: '4.8/5' },
    { label: 'Support Available', value: '24/7' },
  ];

  return (
    <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0a0a] relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-slate-100 border-y border-slate-100">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center py-8 md:py-10 px-4 group bg-white hover:bg-slate-50 transition-colors"
            >
              <h3 className="text-3xl md:text-5xl font-bold tracking-normal text-slate-800 mb-2 group-hover:scale-105 transition-transform">{stat.value}</h3>
              <p className="text-[10px] sm:text-sm font-bold text-slate-500 tracking-wider uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
