"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, AlertTriangle, Lightbulb, Share2 } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function BlogContent({ data }: { data: any }) {
  const [activeSection, setActiveSection] = useState("content");

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
                  { id: "content", label: "Article Content" },
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
              <p id="content" className="text-2xl md:text-3xl text-slate-800 leading-relaxed font-light first-letter:text-8xl first-letter:font-black first-letter:text-[#0057D9] first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8] first-line:tracking-wide">
                {data.paragraphs[0]}
              </p>

              {data.paragraphs.slice(1, 2).map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <figure className="my-16 relative">
                <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] -z-10" />
                <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
                  <Image 
                    src={data.contentImage || data.image} 
                    alt={data.title} 
                    width={1200} 
                    height={600} 
                    className="w-full object-cover h-[350px] sm:h-[450px] hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <figcaption className="text-center text-sm font-medium text-slate-500 mt-6 italic">
                  {data.imageCaption || `Illustration for ${data.category} Services`}
                </figcaption>
              </figure>

              {data.paragraphs.slice(2).map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <blockquote className="relative bg-blue-50/50 p-8 sm:p-12 rounded-[2.5rem] my-20 border border-blue-100">
                <div className="absolute -top-6 -left-6 text-8xl text-[#0057D9] opacity-20 font-serif leading-none">"</div>
                <p className="italic text-2xl sm:text-3xl text-[#0F172A] mb-8 leading-tight font-medium relative z-10">
                  We constantly see appliances failing prematurely simply because they lack basic seasonal maintenance.
                </p>
                <footer className="text-base text-slate-600 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative shadow-md">
                    <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Author" fill className="object-cover" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0F172A] block">{data.author}</span>
                    <span className="text-sm">{data.authorRole}</span>
                  </div>
                </footer>
              </blockquote>

              <h2 id="conclusion" className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-20 mb-8 tracking-tight">Conclusion</h2>

              <p>
                Skipping regular maintenance to save a few rupees usually results in spending thousands on repairs later. Keep your home safe and efficient by booking verified professionals.
              </p>

              <p>
                If your appliances haven't been checked recently, it's time to act.
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
                <Link href="/book" className="w-full md:w-auto flex items-center justify-center bg-[#0057D9] text-white px-8 py-4 md:py-5 rounded-2xl text-lg font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 whitespace-nowrap">
                  Book Service Now
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </article>
  );
}
