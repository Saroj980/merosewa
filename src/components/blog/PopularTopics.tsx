"use client";

import { motion } from "framer-motion";

const topics = [
  { name: "Electrical Safety", count: 24, size: "large" },
  { name: "Monsoon Preparation", count: 18, size: "medium" },
  { name: "Generator Maintenance", count: 15, size: "medium" },
  { name: "AC Servicing", count: 32, size: "large" },
  { name: "Solar Maintenance", count: 12, size: "small" },
  { name: "Home Cleaning", count: 45, size: "large" },
  { name: "Computer Protection", count: 9, size: "small" },
  { name: "Emergency Repairs", count: 28, size: "medium" },
  { name: "Plumbing Hacks", count: 14, size: "small" },
  { name: "CCTV Installation", count: 11, size: "small" },
];

export default function PopularTopics() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-[#0F172A] tracking-tight mb-4">Popular Topics</h2>
          <p className="text-slate-600 text-lg">Explore our most read categories and find exactly what you need for your home.</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
          {topics.map((topic, index) => {
            // Determine styling based on size to create a "cloud" effect
            const sizeClasses = {
              large: "text-xl sm:text-2xl py-3 px-6",
              medium: "text-lg sm:text-xl py-2.5 px-5",
              small: "text-base sm:text-lg py-2 px-4",
            };

            return (
              <motion.button
                key={topic.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  rounded-full font-semibold border border-slate-200 bg-white text-slate-700
                  hover:text-[#0057D9] hover:border-[#0057D9]/30 hover:bg-blue-50 hover:shadow-md transition-all
                  flex items-center gap-2 ${sizeClasses[topic.size as keyof typeof sizeClasses]}
                `}
              >
                {topic.name}
                <span className="text-sm font-normal text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  {topic.count}
                </span>
              </motion.button>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
