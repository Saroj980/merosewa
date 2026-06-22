"use client";
import { motion } from "framer-motion";
import { Zap, Sun, Droplets, Tractor } from "lucide-react";

export function SpecializedServices() {
  const specialized = [
    {
      title: "Generator Services",
      desc: "AMC & Emergency Support",
      icon: Zap,
    },
    {
      title: "Solar Panel Services",
      desc: "Installation & Maintenance",
      icon: Sun,
    },
    {
      title: "Water Pump & Borewell",
      desc: "Repair & Maintenance",
      icon: Droplets,
    },
    {
      title: "Agricultural Equipment",
      desc: "Unique Service in Nepal",
      icon: Tractor,
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background aesthetic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary-blue)]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--primary-green)]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
          >
            Specialized Services for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Sudurpashchim Province</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mt-8"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialized.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-[2rem] hover:bg-white/10 transition-colors group cursor-pointer"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--primary-blue)] transition-colors duration-300">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
