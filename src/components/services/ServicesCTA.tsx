"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export function ServicesCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[var(--primary-blue)] to-blue-800 rounded-[3rem] p-10 md:p-16 text-center text-white shadow-[0_20px_50px_-12px_rgba(0,87,217,0.3)] relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Need Professional Assistance?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              Mero Sewa is building a trusted network of service professionals across Nepal's Far West Region. Book your service today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="h-14 px-8 rounded-full bg-white text-[var(--primary-blue)] hover:bg-slate-50 font-bold text-lg shadow-xl w-full sm:w-auto transition-transform hover:scale-105">
                Contact Us
              </Button>
              <Button variant="outline" className="h-14 px-8 rounded-full border-white/30 text-white hover:bg-white/10 font-bold text-lg w-full sm:w-auto transition-colors">
                <PhoneCall className="w-5 h-5 mr-2" />
                Call 01-5970234
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
