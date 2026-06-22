"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedArticle() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-[#0F172A] tracking-tight">Featured Insight</h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative rounded-3xl overflow-hidden bg-[#F8FAFC] border border-slate-200 hover:shadow-2xl hover:shadow-[#0057D9]/10 transition-all duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image Side */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-full overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Electrical Safety Checks" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 bg-[#0057D9] text-white text-sm font-bold tracking-wide rounded-full shadow-lg">
                  Featured
                </span>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm font-medium text-slate-500 mb-6">
                <span className="text-[#0057D9] bg-blue-50 px-3 py-1 rounded-md">Electrical</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>Jun 15, 2026</span>
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-6 leading-tight group-hover:text-[#0057D9] transition-colors">
                10 Electrical Safety Checks Every Homeowner in Dhangadhi Should Perform Before Monsoon
              </h3>
              
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                The monsoon season brings heavy rains and unpredictable power fluctuations. Learn how to protect your home, appliances, and family with this comprehensive electrical safety checklist designed by our top experts in Sudurpashchim.
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Ramesh Sharma" 
                    width={48} 
                    height={48} 
                    className="rounded-full border-2 border-white shadow-sm"
                  />
                  <div>
                    <p className="text-sm font-bold text-[#0F172A]">Ramesh Sharma</p>
                    <p className="text-xs text-slate-500">Senior Electrician</p>
                  </div>
                </div>
                
                <Link 
                  href="/blog/electrical-safety-checks" 
                  className="inline-flex items-center gap-2 text-[#0057D9] font-bold hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
