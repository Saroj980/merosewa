"use client";
import { motion } from "framer-motion";
import { CheckCircle, Zap, ShieldCheck } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Verified Professionals",
      desc: "All providers undergo a strict background check and verification process.",
      icon: CheckCircle,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      title: "Fast Response",
      desc: "Quick service support across all our designated service areas.",
      icon: Zap,
      color: "text-yellow-500",
      bg: "bg-yellow-50",
    },
    {
      title: "Quality Assurance",
      desc: "Trusted and accountable service delivery with guaranteed satisfaction.",
      icon: ShieldCheck,
      color: "text-[var(--primary-green)]",
      bg: "bg-green-50",
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Mero Sewa
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-14 h-14 ${reason.bg} rounded-2xl flex items-center justify-center mb-6`}>
                <reason.icon className={`w-7 h-7 ${reason.color}`} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
