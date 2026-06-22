"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const seoBlocks = [
  {
    title: "Electrical Services in Dhangadhi",
    content: "Mero Sewa provides certified electricians in Dhangadhi for all residential and commercial needs. From fixing short circuits and installing new wiring to setting up home automation, our verified experts ensure complete safety. We cover all major areas including Hasanpur, LN Chowk, and Chauraha."
  },
  {
    title: "Plumbing Services in Dhangadhi",
    content: "Our professional plumbers in Sudurpashchim handle everything from minor leaks to complete bathroom renovations. We offer emergency plumbing repair, water tank cleaning, motor installation, and pipe unclogging with guaranteed workmanship and transparent pricing."
  },
  {
    title: "AC Repair & Maintenance in Dhangadhi",
    content: "Beat the summer heat with our expert AC servicing. We offer comprehensive air conditioning repair, gas refilling, installation, and routine maintenance for all major brands (Samsung, LG, Daikin, Hisense) across Dhangadhi and Attariya."
  },
  {
    title: "Generator & Inverter Repair in Sudurpashchim",
    content: "Ensure uninterrupted power supply for your home or business. Our technicians specialize in repairing and maintaining all types of generators, inverters, and battery setups to keep your life running smoothly during load shedding."
  },
  {
    title: "Solar Panel Installation & Servicing",
    content: "Embrace renewable energy with our solar services. We provide solar panel installation, regular cleaning to maximize efficiency, and battery maintenance services across major cities in Sudurpashchim province."
  },
  {
    title: "Computer & Laptop Repair in Dhangadhi",
    content: "Expert IT support at your doorstep. We offer hardware repair, software installation, virus removal, data recovery, and network setup for homes, students, and small businesses in the region."
  }
];

export default function SEOContentBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleBlock = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">
            Comprehensive Home Services Across Sudurpashchim
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {seoBlocks.map((block, index) => (
              <div 
                key={index} 
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 transition-colors hover:border-[#0057D9]/30"
              >
                <button
                  onClick={() => toggleBlock(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-slate-800 text-sm">{block.title}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-[#0057D9]" : ""
                    }`} 
                  />
                </button>
                
                {/* Collapsible Content */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {block.content}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
