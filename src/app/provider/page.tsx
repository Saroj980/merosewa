"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, CalendarCheck, Wallet, ShieldCheck, ArrowRight, Wrench, Zap, Sparkles, Droplet, Wind, Monitor } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Consistent Income",
    description: "Get a steady stream of verified customers every day. Earn more without spending time looking for work."
  },
  {
    icon: CalendarCheck,
    title: "Flexible Schedule",
    description: "You are your own boss. Choose your working hours and accept jobs only when you are available."
  },
  {
    icon: Wallet,
    title: "Weekly Payouts",
    description: "No more waiting for your money. Receive reliable, hassle-free payments directly to your bank account."
  },
  {
    icon: ShieldCheck,
    title: "Professional Support",
    description: "Access our dedicated partner support team, continuous training, and high-quality equipment."
  }
];

const steps = [
  {
    step: "01",
    title: "Apply Online",
    description: "Fill out the simple form on this page with your basic details and expertise."
  },
  {
    step: "02",
    title: "Verification (KYC)",
    description: "Our team will contact you to verify your identity, citizenship, and past experience."
  },
  {
    step: "03",
    title: "Quick Training",
    description: "Attend a short orientation session to learn how to use the Mero Sewa Partner App and customer service standards."
  },
  {
    step: "04",
    title: "Start Earning",
    description: "Your profile goes live! Start accepting bookings and growing your business."
  }
];

const categories = [
  { name: "Electricians", icon: Zap },
  { name: "Plumbers", icon: Droplet },
  { name: "AC Technicians", icon: Wind },
  { name: "Cleaning Experts", icon: Sparkles },
  { name: "Carpenters", icon: Wrench },
  { name: "IT & Repair Pros", icon: Monitor },
];

export default function BecomeProviderPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white pt-24 pb-0">
      
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-20 pb-20 lg:pb-32 overflow-hidden bg-[#f8fafd]">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#0057D9]/5 to-transparent pointer-events-none z-0"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0057D9]/10 rounded-full blur-[100px] z-0"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-[100px] z-0"></div>

        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left text-slate-900"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0057D9] font-bold text-sm tracking-wide mb-6">
                PARTNER WITH MERO SEWA
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6">
                Turn Your Skills Into A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057D9] to-blue-500">Thriving Business</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 font-medium mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Join the fastest-growing network of home service professionals in Sudurpashchim. Earn more, work on your own terms, and build your digital reputation.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 w-max mx-auto lg:mx-0">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-black text-[#0057D9]">500+</span>
                  <span className="text-sm text-slate-500 font-bold">Active Partners</span>
                </div>
                <div className="w-px h-12 bg-slate-200 hidden sm:block"></div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-black text-[#0057D9]">10K+</span>
                  <span className="text-sm text-slate-500 font-bold">Monthly Jobs</span>
                </div>
                <div className="w-px h-12 bg-slate-200 hidden sm:block"></div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-black text-[#22C55E]">Weekly</span>
                  <span className="text-sm text-slate-500 font-bold">Guaranteed Payouts</span>
                </div>
              </div>
            </motion.div>

            {/* Application Form Widget */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md mx-auto"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl relative">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Received!</h3>
                    <p className="text-slate-600 mb-8">Thank you for your interest. Our onboarding team will call you within 24 hours.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-[#0057D9] font-bold hover:underline"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Start Earning Today</h3>
                    <p className="text-slate-500 text-sm mb-6 font-medium">Fill out this quick form to get a call back from our onboarding team.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 block">Full Name</label>
                        <input type="text" required placeholder="Enter your name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0057D9] focus:border-transparent outline-none transition-all" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 block">Mobile Number</label>
                        <input type="tel" required placeholder="98XXXXXXXX" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0057D9] focus:border-transparent outline-none transition-all" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 block">Your Primary Skill/Trade</label>
                        <select required defaultValue="" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0057D9] focus:border-transparent outline-none appearance-none transition-all text-slate-700">
                          <option value="" disabled>Select your expertise</option>
                          <option value="electrician">Electrician</option>
                          <option value="plumber">Plumber</option>
                          <option value="ac-technician">AC Technician</option>
                          <option value="cleaner">Cleaning Expert</option>
                          <option value="carpenter">Carpenter</option>
                          <option value="other">Other / Multi-skilled</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 block">City</label>
                        <select required defaultValue="" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0057D9] focus:border-transparent outline-none appearance-none transition-all text-slate-700">
                          <option value="" disabled>Select your city</option>
                          <option value="dhangadhi">Dhangadhi</option>
                          <option value="attariya">Attariya</option>
                          <option value="mahendranagar">Mahendranagar</option>
                        </select>
                      </div>
                      
                      <button type="submit" className="w-full bg-[#0057D9] hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group mt-2 shadow-lg shadow-blue-500/20">
                        Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-slate-600">We provide the tools, customers, and support you need to succeed. You provide the expertise.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-[#0057D9]">
                  <benefit.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories We Are Hiring For */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Who Are We Looking For?</h2>
              <p className="text-lg text-slate-600">We are constantly expanding our team of verified experts across multiple trades.</p>
            </div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hidden md:flex items-center gap-2 font-bold text-[#0057D9] hover:bg-blue-50 px-6 py-3 rounded-xl transition-colors">
              Apply For Category <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {categories.map((category, idx) => (
              <div key={idx} className="group border border-slate-200 hover:border-[#0057D9] rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-colors cursor-pointer bg-slate-50 hover:bg-blue-50/30">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:bg-[#0057D9] group-hover:text-white transition-colors text-slate-500">
                  <category.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <span className="font-bold text-slate-900 group-hover:text-[#0057D9] transition-colors">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#f8fafd] text-slate-900 relative overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0057D9]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#0b1b36]">How To Get Started</h2>
            <p className="text-lg text-slate-600 font-medium">Join the Mero Sewa partner network in 4 simple steps.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-blue-100 -z-10"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-50 flex items-center justify-center text-2xl font-black text-[#0057D9] mb-6 group-hover:bg-[#0057D9] group-hover:text-white transition-colors duration-500 shadow-md">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0b1b36]">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-[#22C55E] hover:bg-green-600 text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all shadow-lg shadow-green-500/20 hover:-translate-y-1"
            >
              Fill The Application Now
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
