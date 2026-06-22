"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

export function ContactHero() {
  const quickMethods = [
    { icon: Phone, title: "Call Us", value: "+977 980-0000000", desc: "Mon-Fri from 8am to 6pm.", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: MessageCircle, title: "WhatsApp", value: "Chat with Support", desc: "Instant replies during business hours.", color: "text-green-600", bg: "bg-green-50" },
    { icon: Mail, title: "Email", value: "support@merosewa.com", desc: "We'll respond within 24 hours.", color: "text-indigo-600", bg: "bg-indigo-50" }
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-bold mb-6"
          >
            Support Center
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
          >
            How can we help?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed"
          >
            Whether you have a question about booking, need technical support, or want to partner with us, our team is ready to assist you.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quickMethods.map((method, index) => (
            <motion.div 
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-14 h-14 rounded-2xl ${method.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className={`w-7 h-7 ${method.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
              <p className="text-[var(--primary-blue)] font-semibold mb-2">{method.value}</p>
              <p className="text-slate-500 text-sm font-medium">{method.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
