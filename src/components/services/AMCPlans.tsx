"use client";
import { motion } from "framer-motion";
import { Shield, Home, Wind, Monitor, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AMCPlans() {
  const plans = [
    { title: "Home AMC", desc: "Preventive Maintenance", icon: Home },
    { title: "AC AMC", desc: "Seasonal Servicing", icon: Wind },
    { title: "Computer AMC", desc: "IT Support Plans", icon: Monitor },
    { title: "Enterprise AMC", desc: "Office Maintenance", icon: Building2 }
  ];

  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>Annual Maintenance Contracts</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Year-Round Protection Plans
            </h2>
          </div>
          <Button className="hidden md:flex rounded-full bg-white text-[#0F172A] hover:bg-slate-100 font-bold px-8 h-12">
            View All Plans
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white/[0.03] border border-white/10 hover:border-blue-500/50 rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <plan.icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
              <p className="text-slate-400 font-medium mb-8">{plan.desc}</p>
              
              <div className="flex items-center text-sm font-bold text-blue-400 group-hover:text-blue-300">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <Button className="md:hidden mt-8 w-full rounded-full bg-white text-[#0F172A] hover:bg-slate-100 font-bold h-14">
          View All Plans
        </Button>
      </div>
    </section>
  );
}
