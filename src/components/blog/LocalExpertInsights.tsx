"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const experts = [
  {
    id: 1,
    name: "Suresh Bhatta",
    role: "Senior Electrical Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quote: "Most home fires are preventable. A simple annual inspection of your wiring can save your property and your family.",
    expertise: "Electrical Safety"
  },
  {
    id: 2,
    name: "Dipendra Joshi",
    role: "HVAC Specialist",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quote: "Running an unserviced AC doesn't just reduce cooling; it actively consumes up to 30% more electricity.",
    expertise: "AC Systems"
  },
  {
    id: 3,
    name: "Kamal Thapa",
    role: "Master Plumber",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quote: "A small leak today is a burst pipe tomorrow. Never ignore water damage signs, especially before the monsoon.",
    expertise: "Plumbing"
  }
];

export default function LocalExpertInsights() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mb-6">Meet Our Local Experts</h2>
          <p className="text-slate-600 text-lg">
            Insights straight from the professionals who serve homes and businesses across Sudurpashchim every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden mb-6 h-[350px]">
                <Image 
                  src={expert.image}
                  alt={expert.name}
                  fill
                  className="object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="inline-block px-3 py-1 bg-[#0057D9]/90 text-white text-xs font-bold rounded-md mb-2">
                    {expert.expertise}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">{expert.name}</h3>
                  <p className="text-slate-300 text-sm font-medium">{expert.role}</p>
                </div>
              </div>
              
              <div className="relative bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50 group-hover:bg-blue-50 transition-colors">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-blue-200/50 -z-0" />
                <p className="text-slate-700 italic relative z-10 pl-4 border-l-2 border-[#0057D9]">
                  "{expert.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
