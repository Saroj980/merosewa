"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <nav className="hidden xl:flex items-center gap-8">
            <Link href="/" className="text-[var(--primary-blue)] font-bold border-b-2 border-[var(--primary-blue)] pb-1">Home</Link>
            <div className="relative group cursor-pointer">
              <Link href="/services" className="flex items-center gap-1 text-slate-700 font-semibold hover:text-[var(--primary-blue)] transition-colors pb-1">
                Services <ChevronDown className="w-4 h-4" />
              </Link>
            </div>
            <Link href="/provider" className="text-slate-700 font-semibold hover:text-[var(--primary-blue)] transition-colors pb-1">Become Provider</Link>
            <Link href="/coverage" className="text-slate-700 font-semibold hover:text-[var(--primary-blue)] transition-colors pb-1">Coverage Areas</Link>
            <Link href="/about" className="text-slate-700 font-semibold hover:text-[var(--primary-blue)] transition-colors pb-1">About Us</Link>
            <Link href="/blog" className="text-slate-700 font-semibold hover:text-[var(--primary-blue)] transition-colors pb-1">Blog</Link>
            <Link href="/contact" className="text-slate-700 font-semibold hover:text-[var(--primary-blue)] transition-colors pb-1">Contact</Link>
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
            <Button className="bg-[var(--primary-blue)] hover:bg-blue-700 text-white rounded-md font-bold px-6 h-11">
              Book Service
            </Button>
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
            className="xl:hidden bg-white border-t border-slate-200 absolute w-full top-full left-0 shadow-2xl"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              <Link href="/" className="text-lg font-bold text-[var(--primary-blue)]">Home</Link>
              <Link href="/services" className="text-lg font-bold text-slate-800">All Services</Link>
              <Link href="/provider" className="text-lg font-bold text-slate-800">Become Provider</Link>
              <Link href="/coverage" className="text-lg font-bold text-slate-800">Coverage Areas</Link>
              <Link href="/about" className="text-lg font-bold text-slate-800">About Us</Link>
              <Link href="/blog" className="text-lg font-bold text-slate-800">Blog</Link>
              <Link href="/contact" className="text-lg font-bold text-slate-800">Contact</Link>
              
              <div className="flex flex-col gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <PhoneCall className="w-5 h-5 text-green-600" />
                  <span className="text-slate-900 font-bold">01-5970234 (Call Us)</span>
                </div>
                <Button size="lg" className="w-full bg-[var(--primary-blue)] text-white">Book Service</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
