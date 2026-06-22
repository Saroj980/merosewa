"use client";
import { motion } from "framer-motion";
import { Building2, Landmark, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ContactOptions() {
  const options = [
    { 
      icon: Building2, 
      title: "Business Inquiry", 
      desc: "For small to medium businesses looking for regular maintenance contracts.",
      link: "/contact/business",
      color: "blue"
    },
    { 
      icon: Landmark, 
      title: "Enterprise Solutions", 
      desc: "Custom service solutions for large offices, hospitals, and corporate campuses.",
      link: "/contact/enterprise",
      color: "emerald"
    },
    { 
      icon: Briefcase, 
      title: "Provider Registration", 
      desc: "Are you a skilled professional? Join our platform and grow your business.",
      link: "/join-as-pro",
      color: "indigo"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {options.map((opt, index) => (
            <motion.div 
              key={opt.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={opt.link} className="block group h-full">
                <div className={`bg-white rounded-3xl p-8 h-full border border-slate-200 hover:border-${opt.color}-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col`}>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-${opt.color}-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  
                  <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-slate-600 group-hover:bg-${opt.color}-50 group-hover:text-${opt.color}-600 transition-colors`}>
                    <opt.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{opt.title}</h3>
                  <p className="text-slate-500 font-medium text-sm flex-grow mb-6">{opt.desc}</p>
                  
                  <div className={`flex items-center text-sm font-bold text-${opt.color}-600 group-hover:text-${opt.color}-700`}>
                    Learn more <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
