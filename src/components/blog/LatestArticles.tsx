"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { useState } from "react";

const categories = [
  "All Topics",
  "AC Services",
  "Plumbing",
  "Generator",
  "Security",
  "Solar",
  "Cleaning",
  "Electrical"
];

const articles = [
  {
    id: 1,
    title: "How Often Should You Service Your AC in Nepal?",
    description: "Learn the ideal servicing frequency for your air conditioner to maximize cooling efficiency during the hot Dhangadhi summers.",
    category: "AC Services",
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Bikash Thapa",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    readTime: "4 min",
    date: "Jun 12, 2026",
    slug: "how-often-should-you-service-ac-nepal"
  },
  {
    id: 2,
    title: "Top Plumbing Problems During Monsoon and How to Fix Them",
    description: "Prevent water damage and costly repairs by addressing these common plumbing issues before the heavy rains start.",
    category: "Plumbing",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Sunil Joshi",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    readTime: "6 min",
    date: "Jun 10, 2026",
    slug: "plumbing-problems-monsoon"
  },
  {
    id: 3,
    title: "Generator Maintenance Guide for Businesses",
    description: "Ensure uninterrupted power supply for your business with our comprehensive generator maintenance checklist.",
    category: "Generator",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Prakash KC",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    readTime: "8 min",
    date: "Jun 08, 2026",
    slug: "generator-maintenance-guide"
  },
  {
    id: 4,
    title: "Why CCTV Systems Matter for Home Security in Attariya",
    description: "Discover how modern CCTV installations can deter crime and provide peace of mind for homeowners in Sudurpashchim.",
    category: "Security",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Hari Khadka",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    readTime: "5 min",
    date: "Jun 05, 2026",
    slug: "cctv-systems-home-security"
  },
  {
    id: 5,
    title: "Solar Panel Maintenance Tips for Maximum Efficiency",
    description: "Keep your solar panels running at peak performance year-round with these expert cleaning and inspection tips.",
    category: "Solar",
    image: "https://images.unsplash.com/photo-1509391366360-1e97f52cefd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Sita Sharma",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    readTime: "7 min",
    date: "Jun 01, 2026",
    slug: "solar-panel-maintenance-tips"
  },
  {
    id: 6,
    title: "Home Deep Cleaning Checklist Before Dashain",
    description: "Get your home ready for the festive season with our professional room-by-room deep cleaning guide.",
    category: "Cleaning",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Maya Gurung",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    readTime: "10 min",
    date: "May 28, 2026",
    slug: "home-deep-cleaning-dashain"
  }
];

export default function LatestArticles() {
  const [activeCategory, setActiveCategory] = useState("All Topics");

  const filteredArticles = activeCategory === "All Topics" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <section id="latest-articles" className="py-16 lg:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                    ${isActive 
                      ? "text-white bg-[#0057D9] shadow-lg shadow-[#0057D9]/20" 
                      : "text-slate-600 bg-white hover:bg-slate-50 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div className="w-full h-px bg-slate-200 mt-2" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-[#0F172A] tracking-tight mb-2">Latest Articles</h2>
            <p className="text-slate-600 text-lg">Fresh insights from our local service professionals.</p>
          </div>
          <Link href="/blog/all" className="text-[#0057D9] font-semibold hover:underline">
            View all articles
          </Link>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <motion.div
                  layout
                  key={article.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-[#0057D9]/10 transition-all duration-300 flex flex-col h-full"
                >
                  <Link href={`/blog/${article.slug}`} className="block relative h-60 overflow-hidden">
                    <Image 
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0F172A] text-xs font-bold rounded-md shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </Link>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <Link href={`/blog/${article.slug}`} className="block flex-grow">
                      <h3 className="text-xl font-bold text-[#0F172A] mb-3 leading-tight group-hover:text-[#0057D9] transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                        {article.description}
                      </p>
                    </Link>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                      <div className="flex items-center gap-2.5">
                        <Image 
                          src={article.author.avatar}
                          alt={article.author.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-[#0F172A]">{article.author.name}</span>
                          <span className="text-[10px] text-slate-500">{article.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="col-span-full py-12 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                  <Clock className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">No articles found</h3>
                <p className="text-slate-500">Check back later for new content in this category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
}
