"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, PhoneCall, Zap, Droplet, Wind, Video, Paintbrush, Monitor, Sparkles, Wrench } from "lucide-react";

const serviceLinks = [
  { name: 'Electrician', slug: 'electrician', icon: Zap, desc: 'Expert wiring & repairs' },
  { name: 'Plumbing', slug: 'plumbing', icon: Droplet, desc: 'Pipes, leaks & fixtures' },
  { name: 'AC Repair', slug: 'ac-repair', icon: Wind, desc: 'Cooling & maintenance' },
  { name: 'CCTV', slug: 'cctv', icon: Video, desc: 'Security installation' },
  { name: 'Cleaning', slug: 'cleaning', icon: Sparkles, desc: 'Deep home cleaning' },
  { name: 'Carpenter', slug: 'carpenter', icon: Wrench, desc: 'Furniture & woodwork' },
  { name: 'Painter', slug: 'painter', icon: Paintbrush, desc: 'Interior & exterior' },
  { name: 'Computer Repair', slug: 'computer-repair', icon: Monitor, desc: 'Hardware & software' },
];

export default function Navbar() {
  const pathname = usePathname() || "";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b ${
        isScrolled ? "border-slate-200 shadow-sm py-3" : "border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <div className="flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/mero-sewa-logo-removebg-preview.png" 
              alt="Mero Sewa Logo" 
              width={220} 
              height={64} 
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8 h-full">
            <Link href="/" className={`${isActive('/') ? 'text-[var(--primary-blue)] font-bold border-b-2 border-[var(--primary-blue)]' : 'text-slate-700 font-semibold hover:text-[var(--primary-blue)]'} transition-colors pb-1`}>Home</Link>
            
            <div className="relative group h-full py-2">
              <Link href="/services" className={`flex items-center gap-1 ${isActive('/services') ? 'text-[var(--primary-blue)] font-bold border-b-2 border-[var(--primary-blue)] pb-1' : 'text-slate-700 font-semibold hover:text-[var(--primary-blue)] pb-1'} transition-colors`}>
                Services <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute top-[100%] left-[-40px] w-[800px] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex overflow-hidden mt-2 before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
                
                {/* Featured Section */}
                <div className="w-[30%] bg-slate-50 p-6 flex flex-col justify-between border-r border-slate-100">
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-blue-100 text-[var(--primary-blue)] text-xs font-bold px-2.5 py-1 rounded-md mb-4">
                      <Sparkles className="w-3.5 h-3.5" /> Featured
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">Premium Home Cleaning</h3>
                    <p className="text-sm text-slate-500 mb-6">Get your home deeply cleaned by our verified professionals.</p>
                  </div>
                  <Link href="/book" className="flex items-center justify-center gap-2 w-full bg-[var(--primary-blue)] hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl transition-all shadow-sm">
                    Book Now
                  </Link>
                </div>

                {/* Categories */}
                <div className="w-[70%] p-6 grid grid-cols-2 gap-x-8">
                  {/* Category 1 */}
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 mb-4 flex items-center gap-2 uppercase tracking-wider">
                      <Wrench className="w-4 h-4 text-blue-500" /> Home Maintenance
                    </h4>
                    <div className="flex flex-col gap-1">
                      {serviceLinks.filter(s => ['electrician', 'plumbing', 'carpenter', 'painter'].includes(s.slug)).map((service) => (
                        <Link 
                          key={service.name} 
                          href={`/services/${service.slug}`}
                          className="group/item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200 -ml-2.5"
                        >
                          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-50/50 flex items-center justify-center text-[var(--primary-blue)] group-hover/item:bg-[var(--primary-blue)] group-hover/item:text-white transition-all duration-300">
                            <service.icon className="w-4 h-4" strokeWidth={2} />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-700 text-sm group-hover/item:text-[var(--primary-blue)] transition-colors leading-none">{service.name}</span>
                            <span className="text-[11px] text-slate-400 font-medium mt-1">{service.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 mb-4 flex items-center gap-2 uppercase tracking-wider">
                      <Wind className="w-4 h-4 text-blue-500" /> Appliances & More
                    </h4>
                    <div className="flex flex-col gap-1">
                      {serviceLinks.filter(s => ['ac-repair', 'cctv', 'cleaning', 'computer-repair'].includes(s.slug)).map((service) => (
                        <Link 
                          key={service.name} 
                          href={`/services/${service.slug}`}
                          className="group/item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-200 -ml-2.5"
                        >
                          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-50/50 flex items-center justify-center text-[var(--primary-blue)] group-hover/item:bg-[var(--primary-blue)] group-hover/item:text-white transition-all duration-300">
                            <service.icon className="w-4 h-4" strokeWidth={2} />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-700 text-sm group-hover/item:text-[var(--primary-blue)] transition-colors leading-none">{service.name}</span>
                            <span className="text-[11px] text-slate-400 font-medium mt-1">{service.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Explore All */}
                  <div className="col-span-2 mt-4 pt-4 border-t border-slate-100">
                    <Link href="/services" className="group/btn flex items-center justify-between p-3 rounded-xl hover:bg-[var(--primary-blue)] hover:text-white transition-all duration-300 bg-slate-50 border border-slate-100 hover:border-transparent">
                       <div className="flex flex-col">
                         <span className="text-sm font-bold text-slate-900 group-hover/btn:text-white transition-colors">Explore All Services</span>
                         <span className="text-xs text-slate-500 group-hover/btn:text-blue-100 transition-colors mt-0.5">View our complete catalogue</span>
                       </div>
                       <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover/btn:bg-white/20 transition-colors text-slate-400 group-hover/btn:text-white">
                         <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                       </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/provider" className={`${isActive('/provider') ? 'text-[var(--primary-blue)] font-bold border-b-2 border-[var(--primary-blue)]' : 'text-slate-700 font-semibold hover:text-[var(--primary-blue)]'} transition-colors pb-1`}>Become Provider</Link>
            <Link href="/about" className={`${isActive('/about') ? 'text-[var(--primary-blue)] font-bold border-b-2 border-[var(--primary-blue)]' : 'text-slate-700 font-semibold hover:text-[var(--primary-blue)]'} transition-colors pb-1`}>About Us</Link>
            <Link href="/blog" className={`${isActive('/blog') ? 'text-[var(--primary-blue)] font-bold border-b-2 border-[var(--primary-blue)]' : 'text-slate-700 font-semibold hover:text-[var(--primary-blue)]'} transition-colors pb-1`}>Blog</Link>
            <Link href="/contact" className={`${isActive('/contact') ? 'text-[var(--primary-blue)] font-bold border-b-2 border-[var(--primary-blue)]' : 'text-slate-700 font-semibold hover:text-[var(--primary-blue)]'} transition-colors pb-1`}>Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                <PhoneCall className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-sm leading-tight">01-5970234</span>
                <span className="text-slate-500 text-xs font-medium">Call Us Anytime</span>
              </div>
            </div>
            <Link href="/book" className="bg-[var(--primary-blue)] hover:bg-blue-700 text-white rounded-md font-bold px-6 h-11 flex items-center justify-center transition-colors">
              Book Service
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-slate-200 absolute w-full top-full left-0 shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-[var(--primary-blue)]">Home</Link>
              
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between text-lg font-bold text-slate-800"
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-4 pl-4 border-l-2 border-slate-100 ml-2 overflow-hidden"
                    >
                      {serviceLinks.map((service) => (
                        <Link 
                          key={service.name} 
                          href={`/services/${service.slug}`} 
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 text-slate-600 font-medium py-1"
                        >
                          <service.icon className="w-5 h-5 text-[var(--primary-blue)]" />
                          {service.name}
                        </Link>
                      ))}
                      <Link 
                        href="/services" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm font-bold text-[var(--primary-blue)] py-2"
                      >
                        View All Services →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/provider" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-800">Become Provider</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-800">About Us</Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-800">Blog</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-800">Contact</Link>
              
              <div className="flex flex-col gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <PhoneCall className="w-5 h-5 text-green-600" />
                  <span className="text-slate-900 font-bold">01-5970234 (Call Us)</span>
                </div>
                <Link href="/book" onClick={() => setMobileMenuOpen(false)} className="w-full bg-[var(--primary-blue)] hover:bg-blue-700 text-white font-bold h-12 rounded-md flex items-center justify-center transition-colors text-lg shadow-sm">Book Service</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
