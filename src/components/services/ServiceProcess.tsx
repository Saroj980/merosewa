"use client";
import { motion } from "framer-motion";
import { ClipboardList, Search, UserCheck, Wrench, ThumbsUp } from "lucide-react";

export function ServiceProcess() {
  const steps = [
    { 
      icon: ClipboardList, 
      title: "Share Needs", 
      desc: "Tell us exactly what you need through our simple platform.",
      color: "text-blue-600",
      bgLight: "bg-blue-50"
    },
    { 
      icon: Search, 
      title: "Assessment", 
      desc: "We evaluate the task to assign the perfect tools and pro.",
      color: "text-indigo-600",
      bgLight: "bg-indigo-50"
    },
    { 
      icon: UserCheck, 
      title: "Pro Assigned", 
      desc: "A background-checked professional is dispatched to you.",
      color: "text-purple-600",
      bgLight: "bg-purple-50"
    },
    { 
      icon: Wrench, 
      title: "Service Done", 
      desc: "The job is executed flawlessly to industry standards.",
      color: "text-emerald-600",
      bgLight: "bg-emerald-50"
    },
    { 
      icon: ThumbsUp, 
      title: "Quality Check", 
      desc: "We ensure you are 100% satisfied with the result.",
      color: "text-teal-600",
      bgLight: "bg-teal-50"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Our Service Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            A seamless, transparent five-step workflow designed for your peace of mind.
          </motion.p>
        </div>

        <div className="relative">
          {/* Animated Dashed Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0 border-t-2 border-dashed border-slate-200 -translate-y-1/2 z-0">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-0 border-t-2 border-solid border-blue-500 -mt-[2px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              // Creating a wave pattern for desktop: up, down, up, down, up
              const isEven = index % 2 === 0;
              const yOffset = isEven ? "-translate-y-8" : "translate-y-8";

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                  className={`relative group h-full flex flex-col lg:transform ${yOffset} transition-transform duration-500`}
                >
                  <div className="bg-white rounded-3xl p-6 md:p-8 h-full flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-300 border border-slate-100 hover:-translate-y-2 hover:border-blue-100 overflow-hidden relative">
                    
                    {/* Large Background Number */}
                    <div className="absolute -top-6 -right-6 text-[10rem] font-black text-slate-50/60 pointer-events-none group-hover:text-blue-50/50 transition-colors duration-500 z-0 leading-none select-none">
                      {index + 1}
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl ${step.bgLight} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                          <step.icon className={`w-7 h-7 ${step.color}`} strokeWidth={1.5} />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 font-bold text-sm group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-colors duration-300 shadow-sm">
                          {index + 1}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                      <p className="text-slate-500 leading-relaxed text-sm flex-grow font-medium group-hover:text-slate-600 transition-colors duration-300">{step.desc}</p>
                    </div>
                  </div>

                  {/* Mobile Connecting Line */}
                  {index !== steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-6 left-1/2 w-0 h-6 border-l-2 border-dashed border-slate-200 -translate-x-1/2 z-20"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
