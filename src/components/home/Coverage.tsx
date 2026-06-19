"use client";

import { MapPin, Plus } from "lucide-react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const MapComponent = dynamic(() => import("./SudurpashchimMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-[600px] h-full min-h-[400px] aspect-[4/3] bg-[#eef4ff] rounded-3xl relative overflow-hidden flex items-center justify-center shadow-xl border border-blue-100">
       <MapPin className="w-12 h-12 text-blue-300 animate-bounce" />
    </div>
  )
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

export function Coverage() {
  const locations = [
    { name: "Dhangadhi", desc: "Our Main Hub" },
    { name: "Tikapur", desc: "Kailali District" },
    { name: "Attariya", desc: "Kailali District" },
    { name: "Mahendranagar", desc: "Kanchanpur District" },
    { name: "Godawari", desc: "Kailali District" }
  ];

  return (
    <section className="py-20 bg-[#f8fafd] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            className="space-y-8 pr-0 lg:pr-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <p className="text-[var(--primary-blue)] font-bold text-sm tracking-wider uppercase mb-2">We Cover</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-normal leading-tight">
                Serving Across Sudurpashchim
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {locations.map((loc) => (
                <motion.div 
                  key={loc.name} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-start gap-3 p-2 rounded-xl hover:bg-white hover:shadow-sm transition-all cursor-default"
                >
                  <div className="mt-1 bg-blue-100 p-1.5 rounded-full shrink-0">
                    <MapPin className="w-4 h-4 text-[var(--primary-blue)]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{loc.name}</h4>
                    <p className="text-xs text-slate-500">{loc.desc}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-3 mt-2 p-2"
              >
                <div className="bg-slate-200 p-1.5 rounded-full shrink-0">
                  <Plus className="w-4 h-4 text-slate-500" strokeWidth={3} />
                </div>
                <h4 className="font-bold text-slate-500 text-sm italic">And More Coming Soon...</h4>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="relative flex justify-center w-full max-w-[600px] h-[400px] mx-auto"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <MapComponent />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
