"use client";

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function BlogDetailHero() {
  const [scrolled, setScrolled] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const title = "How Often Should You Service Your AC in Nepal?";
  const words = title.split(" ");

  const SocialIcon = ({ path }: { path: string }) => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );

  return (
    <>
      {/* Sticky Header for Reading */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: scrolled ? 0 : -100 }}
        className="fixed top-[72px] lg:top-[80px] left-0 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200 z-50 hidden md:block shadow-sm transition-all duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4 max-w-2xl">
            <Link href="/blog" className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors shrink-0">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Link>
            <div className="flex flex-col">
              <p className="font-bold text-[#0F172A] truncate text-sm">How Often Should You Service Your AC...</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold text-slate-500 flex items-center gap-2">
              <Clock className="w-4 h-4" /> 4 min read
            </span>
            <button className="bg-[#0F172A] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#0057D9] transition-all shadow-md">
              Book Service
            </button>
          </div>
        </div>
      </motion.div>

      <section className="pt-24 pb-8 lg:pt-32 lg:pb-12 bg-white relative overflow-hidden">
        
        {/* Background Gradients for Modern Feel */}
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          
          <div className="flex flex-col items-center text-center mt-8">
            <Link href="/blog" className="group mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-600 hover:text-[#0057D9] hover:border-blue-200 hover:shadow-md transition-all"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Knowledge Center
              </motion.div>
            </Link>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-8"
            >
              <span className="px-4 py-1 bg-blue-50 text-[#0057D9] text-sm font-bold tracking-widest uppercase rounded-full">
                AC Services
              </span>
              <div className="flex items-center gap-4 text-slate-500 font-medium text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> Jun 12, 2026
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> 4 min read
                </span>
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#0F172A] tracking-tight mb-12 max-w-4xl text-balance leading-[1.1]">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 mb-16"
            >
              <div className="relative">
                <Image 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Bikash Thapa" 
                  width={56} 
                  height={56} 
                  className="rounded-full shadow-md border-2 border-white ring-1 ring-slate-100"
                />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-[#22C55E]" fill="currentColor" />
                </div>
              </div>
              <div className="text-left">
                <p className="font-bold text-[#0F172A] text-lg leading-tight">Bikash Thapa</p>
                <p className="text-sm font-medium text-slate-500">Senior HVAC Specialist</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Featured Parallax Image */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10" ref={imageContainerRef}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 ring-1 ring-slate-200/50"
          >
            <motion.div style={{ y: imageY }} className="absolute inset-[-10%] w-[120%] h-[120%]">
              <Image 
                src="https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="AC Maintenance Nepal" 
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            
            {/* Elegant inner shadow gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-[2rem] sm:rounded-[3rem] pointer-events-none" />

            {/* Floating Share Widget over the image */}
            <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-2 sm:p-3 rounded-2xl flex items-center gap-2 shadow-2xl">
              <button className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white text-white hover:text-blue-600 flex items-center justify-center transition-all">
                <SocialIcon path="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </button>
              <button className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white text-white hover:text-sky-500 flex items-center justify-center transition-all">
                <SocialIcon path="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </button>
            </div>
          </motion.div>
        </div>

      </section>
    </>
  );
}
