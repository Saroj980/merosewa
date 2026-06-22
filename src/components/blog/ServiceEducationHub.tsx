"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Wrench, Settings } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "How Mero Sewa Verifies Providers",
    description: "Every professional undergoes strict background checks, skill assessments, and continuous customer rating evaluations to ensure top quality.",
    icon: ShieldCheck,
  },
  {
    title: "How Service Requests Work",
    description: "From booking to completion, our transparent process ensures you know exactly who is coming, when, and how much it will cost.",
    icon: Settings,
  },
  {
    title: "Benefits of Preventive Maintenance",
    description: "Regular check-ups extend the lifespan of your appliances and home systems, saving you from expensive emergency repairs.",
    icon: Wrench,
  },
];

export default function ServiceEducationHub() {
  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content: Educational */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
              Understanding Professional Home Maintenance
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We don&apos;t just provide services; we educate our customers. Understanding how your home works is the first step to maintaining its value.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:border-[#0057D9] group-hover:bg-blue-50 transition-colors">
                        <Icon className="w-6 h-6 text-[#0057D9]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#0057D9] transition-colors">{feature.title}</h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content: 3D Illustration/Premium Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Home Maintenance Concept"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0057D9]/10 mix-blend-multiply" />
            
            {/* Animated UI Overlays to simulate 3D/App feel */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Verified Pro</p>
                <p className="text-xs text-slate-500">ID: #MS-4921</p>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-10 bg-white p-4 rounded-2xl shadow-xl max-w-[200px]"
            >
              <div className="h-2 w-full bg-slate-100 rounded-full mb-3 overflow-hidden">
                <div className="h-full bg-[#0057D9] w-3/4 rounded-full" />
              </div>
              <p className="text-xs font-bold text-slate-800">System Health: 75%</p>
              <p className="text-[10px] text-slate-500 mt-1">Maintenance recommended soon.</p>
            </motion.div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
