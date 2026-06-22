"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

const relatedArticles = [
  {
    id: 1,
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
    id: 2,
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
  }
];

export default function RelatedArticles() {
  return (
    <section className="py-16 bg-[#F8FAFC] border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h3 className="text-2xl font-bold text-[#0F172A] mb-8">Related Reads</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-[#0057D9]/10 transition-all duration-300 flex flex-col h-full"
            >
              <Link href={`/blog/${article.slug}`} className="block relative h-48 overflow-hidden">
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
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3 leading-tight group-hover:text-[#0057D9] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                    {article.description}
                  </p>
                </Link>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <div className="flex items-center gap-2">
                    <Image 
                      src={article.author.avatar}
                      alt={article.author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-xs font-bold text-[#0F172A]">{article.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
