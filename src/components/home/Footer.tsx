"use client";
import { Phone, Mail, MapPin, Globe, Send } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
  const SocialIcon = ({ path }: { path: string }) => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );

  return (
    <footer className="bg-white pt-10 md:pt-20 pb-0 border-t border-slate-200 overflow-hidden relative">
      <div className="container mx-auto px-8 md:px-12 max-w-[1400px] relative z-10">
        
        {/* Animated Newsletter Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-[2rem] p-6 md:p-10 mb-16 border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden group"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110 duration-700 pointer-events-none"></div>
          
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-[var(--primary-blue)] pointer-events-none"></div>
          
          <div className="lg:w-1/2 relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[var(--primary-blue)] font-bold text-xs tracking-wider uppercase mb-4"
            >
              Newsletter
            </motion.span>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">Stay updated with us</h3>
            <p className="text-slate-500 font-medium text-base leading-relaxed max-w-md">Get the latest news, service updates, and exclusive discount offers directly to your inbox. No spam, we promise.</p>
          </div>
          
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-lg group/input mt-2 lg:mt-0"
            >
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 relative">
                <div className="relative flex items-center w-full bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-sm border border-slate-200 focus-within:border-[var(--primary-blue)] focus-within:ring-4 focus-within:ring-blue-500/10 transition-all z-10">
                  <div className="pl-3 sm:pl-4 pr-2 shrink-0">
                    <Mail className="w-5 h-5 text-slate-400 group-focus-within/input:text-[var(--primary-blue)] transition-colors" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Enter email address" 
                    className="w-full h-12 bg-transparent outline-none font-medium text-slate-700 placeholder:text-slate-400 text-sm sm:text-base sm:pr-[140px]"
                  />
                </div>
                <button className="w-full sm:w-auto sm:absolute sm:right-2 sm:top-2 sm:bottom-2 h-12 sm:h-auto px-6 bg-[var(--primary-blue)] hover:bg-blue-700 text-white rounded-xl flex items-center justify-center font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-md sm:shadow-none z-20 shrink-0 group/btn">
                  <span className="mr-2">Subscribe</span>
                  <Send className="w-4 h-4 ml-0.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-6 lg:gap-12 mb-16">
          
          <div className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col gap-5 sm:gap-6">
            <div className="flex flex-row items-center sm:flex-col sm:items-start gap-4 sm:gap-6">
              <Image 
                src="/mero-sewa-logo.png" 
                alt="Mero Sewa Logo" 
                width={200} 
                height={60} 
                className="w-[140px] sm:w-[180px] md:w-[220px] h-auto object-contain object-left shrink-0"
              />
              <p className="text-slate-600 font-medium text-[12px] sm:text-sm leading-snug sm:leading-relaxed max-w-sm">
                Your trusted home service platform in Sudurpashchim. Quality service at your doorstep. Book expert professionals easily.
              </p>
            </div>
            
            <div className="flex justify-center sm:justify-start gap-3 mt-2 sm:mt-0">
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=100092199352894" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary-blue)] flex items-center justify-center hover:bg-[var(--primary-blue)] hover:text-white transition-colors cursor-pointer">
                <SocialIcon path="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </a>
              {/* Instagram */}
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary-blue)] flex items-center justify-center hover:bg-[var(--primary-blue)] hover:text-white transition-colors cursor-pointer">
                <SocialIcon path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </div>
              {/* Twitter/X */}
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary-blue)] flex items-center justify-center hover:bg-[var(--primary-blue)] hover:text-white transition-colors cursor-pointer">
                <SocialIcon path="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </div>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-slate-900 font-extrabold mb-4 text-[13px] tracking-wider uppercase">Services</h4>
            <ul className="space-y-3 text-[13px] font-semibold text-slate-500">
              <li><a href="#" className="hover:text-[var(--primary-blue)] transition-colors">Electrician</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)] transition-colors">Plumbing</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)] transition-colors">AC Repair</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)] transition-colors">CCTV</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)] transition-colors">Cleaning</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)] transition-colors">All Services</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-slate-900 font-extrabold mb-4 text-[13px] tracking-wider uppercase">Company</h4>
            <ul className="space-y-3 text-[13px] font-semibold text-slate-500">
              <li><a href="#" className="hover:text-[var(--primary-blue)]">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Careers</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Blog</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Press & Media</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="text-slate-900 font-extrabold mb-4 text-[13px] tracking-wider uppercase">For Providers</h4>
            <ul className="space-y-3 text-[13px] font-semibold text-slate-500">
              <li><a href="#" className="hover:text-[var(--primary-blue)] transition-colors">Become a Provider</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)] transition-colors">Provider Login</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)] transition-colors">Provider Guidelines</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)] transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="text-slate-900 font-extrabold mb-4 text-[13px] tracking-wider uppercase">Support</h4>
            <ul className="space-y-3 text-[13px] font-semibold text-slate-500 mb-6">
              <li><a href="#" className="hover:text-[var(--primary-blue)]">Contact Us</a></li>
              <li><a href="#" className="hover:text-[var(--primary-blue)]">FAQ</a></li>
            </ul>
            <div className="space-y-3 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> 01-5970234</div>
              <div className="flex items-center gap-2"><svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12.01 2C6.48 2 2 6.48 2 12c0 1.74.45 3.38 1.25 4.82L2 22l5.35-1.21A9.953 9.953 0 0012.01 22c5.53 0 10.01-4.48 10.01-10s-4.48-10-10.01-10zm0 18.25c-1.46 0-2.88-.38-4.13-1.08l-2.95.67.68-2.88c-.8-1.29-1.22-2.79-1.22-4.34 0-4.63 3.77-8.41 8.41-8.41s8.41 3.78 8.41 8.41-3.77 8.41-8.41 8.41zm4.41-6.13c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.55.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3s-.84.82-.84 2.01.86 2.33.98 2.49c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-.104.14-.114-.06-.02-.22-.04-.46-.16z"/></svg> 9800000000</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@merosewa.com</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Dhangadhi, Kailali, Nepal</div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar matching design */}
      <div className="bg-[#0b1b36] py-4 text-center md:flex md:justify-between px-4 md:px-12 items-center text-xs font-medium text-slate-300">
        <p>&copy; {new Date().getFullYear()} Mero Sewa. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Powered by Dig Nepal Technologies Pvt. Ltd.</p>
      </div>
    </footer>
  );
}
