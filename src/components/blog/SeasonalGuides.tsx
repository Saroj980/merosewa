"use client";

import { motion } from "framer-motion";
import { ArrowRight, CloudRain, Sun, Snowflake, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const guides = [
  {
    id: 1,
    title: "Preparing Your Home For Monsoon",
    description: "Essential waterproofing, electrical safety, and drainage checks before the heavy rains hit Sudurpashchim.",
    icon: CloudRain,
    color: "from-blue-500 to-blue-700",
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/blog/monsoon-preparation"
  },
  {
    id: 2,
    title: "Summer AC Maintenance Checklist",
    description: "Beat the Dhangadhi heat by ensuring your air conditioning units are running at maximum efficiency.",
    icon: Sun,
    color: "from-orange-400 to-red-500",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/blog/summer-ac-maintenance"
  },
  {
    id: 3,
    title: "Generator Prep Before Power Cuts",
    description: "Keep your business running during unexpected outages with our generator readiness guide.",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/blog/generator-preparation"
  }
];

export default function SeasonalGuides() {
  return (
    <section className="py-16 lg:py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0057D9]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22C55E]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Seasonal Guides</h2>
            <p className="text-slate-400 text-lg">Comprehensive checklists tailored for Nepal&apos;s distinct seasons and local weather challenges.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative rounded-3xl overflow-hidden bg-slate-800/50 border border-slate-700 backdrop-blur-sm flex flex-col"
              >
                {/* Image Background */}
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-6 left-6 w-12 h-12 rounded-xl bg-gradient-to-br ${guide.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow bg-slate-900/40">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-slate-400 mb-8 flex-grow">
                    {guide.description}
                  </p>
                  
                  <Link 
                    href={guide.link}
                    className="inline-flex items-center text-sm font-bold text-white gap-2 group/link w-fit"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover/link:-translate-y-full">Read Guide</span>
                      <span className="inline-block absolute left-0 top-full transition-transform duration-300 group-hover/link:-translate-y-full text-[#0057D9]">Read Guide</span>
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 text-[#0057D9]" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
