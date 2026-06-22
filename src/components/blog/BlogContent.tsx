"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, AlertTriangle, Lightbulb, Share2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function BlogContent() {
  const [activeSection, setActiveSection] = useState("golden-rule");

  // Simple scroll spy for TOC
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["golden-rule", "signs-needed", "what-included", "conclusion"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <article className="py-12 lg:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Table of Contents - Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 pr-8 border-r border-slate-100">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">In this article</h4>
              <nav className="space-y-4">
                {[
                  { id: "golden-rule", label: "The Golden Rule: Twice a Year" },
                  { id: "signs-needed", label: "Signs Your AC Needs Servicing" },
                  { id: "what-included", label: "What Does Service Include?" },
                  { id: "conclusion", label: "Conclusion" }
                ].map((item) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-sm transition-colors duration-300 ${
                      activeSection === item.id 
                        ? "text-[#0057D9] font-bold" 
                        : "text-slate-500 hover:text-slate-800 font-medium"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              
              <div className="mt-12 pt-8 border-t border-slate-100">
                <div className="bg-slate-50 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Share2 className="w-5 h-5 text-[#0057D9]" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mb-2">Find this helpful?</p>
                  <p className="text-xs text-slate-500 mb-4">Share this guide with your neighbors in Sudurpashchim.</p>
                  <button className="w-full py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-[#0057D9] hover:bg-slate-50 transition-colors shadow-sm">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 max-w-3xl">
            <div className="text-lg md:text-[21px] text-slate-600 leading-[1.8] space-y-8 font-serif sm:font-sans">
              
              <p className="text-2xl md:text-3xl text-slate-800 leading-relaxed font-light first-letter:text-8xl first-letter:font-black first-letter:text-[#0057D9] first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8] first-line:tracking-wide">
                In cities like Dhangadhi, Attariya, and Mahendranagar, air conditioners aren't just a luxury—they are an absolute necessity during the sweltering summer months. However, running your AC constantly without proper maintenance is a recipe for high electricity bills, poor cooling, and eventually, a total system breakdown.
              </p>

              <p>
                Many homeowners in Sudurpashchim wait until their AC stops blowing cold air before calling a technician. This reactive approach is not only expensive but also dramatically shortens the lifespan of the appliance. So, what is the ideal servicing frequency for your AC in Nepal?
              </p>

              <h2 id="golden-rule" className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-20 mb-8 tracking-tight">The Golden Rule: Twice a Year</h2>
              
              <p>
                For the climate in the Terai region of Nepal, industry experts (including our top technicians at Mero Sewa) highly recommend servicing your AC <strong className="font-semibold text-slate-900 bg-blue-50 px-1 rounded">at least twice a year</strong>. 
              </p>

              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-8 sm:p-10 my-12 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-8 mt-0 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                  </div>
                  The Best Times to Service Your AC
                </h3>
                <ul className="space-y-6 mb-0">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#22C55E] shrink-0 mt-1" />
                    <span className="text-slate-700 text-lg"><strong className="font-bold text-slate-900 block mb-1">Pre-Summer (March/April)</strong> Before you start using it heavily. This ensures it's clean, fully charged with gas, and ready for continuous operation.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#22C55E] shrink-0 mt-1" />
                    <span className="text-slate-700 text-lg"><strong className="font-bold text-slate-900 block mb-1">Post-Summer/Pre-Winter (October/November)</strong> To clean out the dust accumulated during the summer and monsoon months before it sits idle.</span>
                  </li>
                </ul>
              </div>

              <h2 id="signs-needed" className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-20 mb-8 tracking-tight">Signs Your AC Needs Immediate Servicing</h2>

              <p>
                Even with a biannual servicing schedule, your AC might encounter issues depending on usage and local conditions (like heavy dust or voltage fluctuations). Watch out for these warning signs:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-12">
                {[
                  { title: "Weak Airflow", desc: "If the air isn't pushing through strongly, you likely have a blocked filter or failing motor." },
                  { title: "Warm Air", desc: "Blowing room-temperature air indicates a compressor issue or low refrigerant levels." },
                  { title: "Unusual Noises", desc: "Grinding, squealing, or rattling sounds are serious red flags for internal component failure." },
                  { title: "Bad Odors", desc: "A musty smell indicates mold inside the unit, while a burning smell means an electrical issue." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 p-8 rounded-[2rem] hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                    </div>
                    <h4 className="font-bold text-[#0F172A] text-xl mb-3">{item.title}</h4>
                    <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <figure className="my-16 relative">
                <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] -z-10" />
                <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
                  <Image 
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="AC Technician working" 
                    width={1200} 
                    height={600} 
                    className="w-full object-cover h-[350px] sm:h-[450px] hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <figcaption className="text-center text-sm font-medium text-slate-500 mt-6 italic">
                  A Mero Sewa technician performing an intensive indoor unit cleaning.
                </figcaption>
              </figure>

              <h2 id="what-included" className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-20 mb-8 tracking-tight">What Does a Professional AC Service Include?</h2>

              <p>
                A standard filter wash by the homeowner is good for monthly maintenance, but a professional service covers much more:
              </p>

              <ol className="list-decimal pl-6 space-y-6 my-10 text-slate-700 marker:text-[#0057D9] marker:font-bold">
                <li className="pl-2"><strong className="font-bold text-slate-900">Intensive Cleaning:</strong> Deep cleaning of cooling coils, condenser coils, and blower wheels.</li>
                <li className="pl-2"><strong className="font-bold text-slate-900">Gas Pressure Check:</strong> Ensuring refrigerant levels are optimal to prevent compressor burnout.</li>
                <li className="pl-2"><strong className="font-bold text-slate-900">Electrical Inspection:</strong> Checking capacitors, wiring, and thermostat calibration.</li>
                <li className="pl-2"><strong className="font-bold text-slate-900">Drainage Clearing:</strong> Flushing the drain line to prevent indoor water leaks.</li>
              </ol>

              <blockquote className="relative bg-blue-50/50 p-8 sm:p-12 rounded-[2.5rem] my-20 border border-blue-100">
                <div className="absolute -top-6 -left-6 text-8xl text-[#0057D9] opacity-20 font-serif leading-none">"</div>
                <p className="italic text-2xl sm:text-3xl text-[#0F172A] mb-8 leading-tight font-medium relative z-10">
                  We frequently see AC compressors failing prematurely in Dhangadhi simply because the outdoor unit condenser coils were choked with dust and couldn't dissipate heat.
                </p>
                <footer className="text-base text-slate-600 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative shadow-md">
                    <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Bikash" fill className="object-cover" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0F172A] block">Bikash Thapa</span>
                    <span className="text-sm">Senior HVAC Specialist</span>
                  </div>
                </footer>
              </blockquote>

              <h2 id="conclusion" className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-20 mb-8 tracking-tight">Conclusion</h2>

              <p>
                Skipping an AC service to save a few rupees usually results in spending thousands on repairs later. Regular maintenance keeps your electricity bills low, your indoor air quality high, and your summers perfectly cool.
              </p>

              <p>
                If your AC hasn't been serviced in the last 6 months, it's time to act.
              </p>

            </div>

            {/* Article CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24 bg-[#0F172A] rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#0057D9]/40 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-[#22C55E]/20 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 max-w-lg text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Ready to Service Your AC?</h3>
                <p className="text-slate-300 text-lg">
                  Book a verified Mero Sewa technician today. We offer transparent pricing, 30-day service warranties, and genuine spare parts across Sudurpashchim.
                </p>
              </div>
              <div className="relative z-10 w-full md:w-auto shrink-0 mt-6 md:mt-0">
                <button className="w-full md:w-auto bg-[#0057D9] text-white px-8 py-4 md:py-5 rounded-2xl text-lg font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 whitespace-nowrap">
                  Book Service Now
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </article>
  );
}
