"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Calendar, MapPin, Wrench, User, Phone, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  "Electrician",
  "Plumbing",
  "AC Repair & Maintenance",
  "CCTV Installation & Repair",
  "Deep Home Cleaning",
  "Carpenter Services",
  "Painter Services",
  "Computer & Laptop Repair",
];

const cities = [
  "Dhangadhi",
  "Attariya",
  "Mahendranagar",
  "Tikapur",
];

const timeSlots = [
  "Morning (8:00 AM - 12:00 PM)",
  "Afternoon (12:00 PM - 4:00 PM)",
  "Evening (4:00 PM - 8:00 PM)",
  "Urgent (Within 2 Hours)",
];

export default function BookServicePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, API call goes here
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-20 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl text-center border border-slate-100 mx-4"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Booking Confirmed!</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Thank you for choosing Mero Sewa. Your service request has been successfully placed. Our team will contact you shortly to confirm the details.
          </p>
          <div className="flex flex-col gap-3">
            <Link 
              href="/"
              className="w-full bg-[var(--primary-blue)] hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all"
            >
              Back to Home
            </Link>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold py-4 rounded-xl transition-all"
            >
              Book Another Service
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-28 lg:pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
        
        {/* Header */}
        <div className="mb-10 text-center lg:text-left">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[var(--primary-blue)] mb-4 transition-colors">
            Home <ChevronRight className="w-4 h-4 mx-1" /> Book Service
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Book a Service</h1>
          <p className="text-slate-600 text-lg max-w-2xl">Fill out the form below and we'll connect you with a verified professional in your area.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Form Section */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-6 sm:p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. Service Selection */}
                <section>
                  <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-[var(--primary-blue)] text-sm">1</span>
                    Service Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-sm font-bold text-slate-700">What service do you need?</label>
                      <div className="relative">
                        <Wrench className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <select required className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none appearance-none font-medium text-slate-700 transition-all cursor-pointer">
                          <option value="" disabled selected>Select a Service</option>
                          {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-sm font-bold text-slate-700">Describe the issue (Optional)</label>
                      <textarea 
                        rows={3}
                        placeholder="E.g. The AC is not cooling properly..."
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none font-medium text-slate-700 transition-all resize-none"
                      />
                    </div>
                  </div>
                </section>

                {/* 2. Schedule */}
                <section>
                  <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-[var(--primary-blue)] text-sm">2</span>
                    When do you need it?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                          type="date" 
                          required
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none font-medium text-slate-700 transition-all cursor-pointer"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Preferred Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <select required className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none appearance-none font-medium text-slate-700 transition-all cursor-pointer">
                          <option value="" disabled selected>Select Time Slot</option>
                          {timeSlots.map(slot => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 3. Location & Contact */}
                <section>
                  <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-[var(--primary-blue)] text-sm">3</span>
                    Contact & Location
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                          type="text" 
                          required
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none font-medium text-slate-700 transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                          type="tel" 
                          required
                          placeholder="98XXXXXXXX"
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none font-medium text-slate-700 transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">City/Region</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <select required className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none appearance-none font-medium text-slate-700 transition-all cursor-pointer">
                          <option value="" disabled selected>Select your city</option>
                          {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-sm font-bold text-slate-700">Detailed Address / Landmark</label>
                      <input 
                        type="text" 
                        required
                        placeholder="E.g. Near Traffic Chowk, House No. 12"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none font-medium text-slate-700 transition-all"
                      />
                    </div>
                  </div>
                </section>

                <div className="pt-6 border-t border-slate-100">
                  <button 
                    type="submit"
                    className="w-full bg-[var(--primary-blue)] hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group text-lg shadow-md hover:shadow-xl"
                  >
                    Confirm Booking <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-4">
                    By confirming, you agree to our Terms of Service and Privacy Policy. Pay only after the service is completed.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="lg:w-[350px] xl:w-[400px] flex flex-col gap-6">
            <div className="bg-gradient-to-br from-[#0057D9] to-blue-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-20 -mt-20"></div>
              
              <h3 className="text-2xl font-bold mb-6 relative z-10">Why choose Mero Sewa?</h3>
              
              <ul className="space-y-5 relative z-10">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="block text-sm">Verified Professionals</strong>
                    <span className="text-blue-100 text-xs">Background checked and skilled experts.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="block text-sm">Transparent Pricing</strong>
                    <span className="text-blue-100 text-xs">No hidden charges. Pay after the job is done.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="block text-sm">Service Warranty</strong>
                    <span className="text-blue-100 text-xs">Get up to 30 days warranty on our services.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/20 relative z-10">
                <p className="text-sm text-blue-100 mb-2">Need immediate help?</p>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-xl font-bold text-white tracking-wide">01-5970234</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 p-6 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <strong className="block text-slate-900 text-sm">Secure Booking</strong>
                <span className="text-slate-500 text-xs">Your data is safe and encrypted.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
