"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Droplet, Wind, Video, Paintbrush, Monitor, Sparkles, Wrench, ArrowRight } from "lucide-react";

export function ServicesGrid() {
  const services = [
    { name: 'Electrician', desc: 'Wiring, repair, installation', icon: Zap },
    { name: 'Plumbing', desc: 'Pipe repair, installation, leakage fix', icon: Droplet },
    { name: 'AC Repair', desc: 'Installation, cleaning, gas refill', icon: Wind },
    { name: 'CCTV', desc: 'Installation, repair, maintenance', icon: Video },
    { name: 'Cleaning', desc: 'Home, office, deep cleaning', icon: Sparkles },
    { name: 'Carpenter', desc: 'Furniture, door, window, custom work', icon: Wrench },
    { name: 'Painter', desc: 'Interior, exterior painting', icon: Paintbrush },
    { name: 'Computer Repair', desc: 'Repair, setup, virus removal', icon: Monitor },
  ];

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-12">
          <p className="text-[var(--primary-blue)] font-bold text-sm tracking-wider uppercase mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-normal">Popular Services at Your Doorstep</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, boxShadow: "0px 10px 30px rgba(0,0,0,0.08)" }}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer transition-all hover:border-[var(--primary-blue)] group"
            >
              <service.icon className="w-10 h-10 text-[var(--primary-blue)] mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="font-bold text-slate-900 mb-1">{service.name}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" className="rounded-full px-8 border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold shadow-sm">
            View All Services <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
