"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  "All Topics",
  "Electrical",
  "Plumbing",
  "AC Services",
  "Cleaning",
  "CCTV & Security",
  "Computer Repair",
  "Generator Services",
  "Solar Services",
  "Home Maintenance",
];

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("All Topics");

  return (
    <section className="py-8 bg-white border-b border-slate-100 sticky top-16 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                  ${isActive 
                    ? "text-white bg-[#0057D9] shadow-md shadow-blue-500/20" 
                    : "text-slate-600 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60"
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
