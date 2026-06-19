"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Clock, Tag, Award, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Choose Service",
      heading: "Choose Your Service",
      desc: "Browse our wide range of home services and choose the one you need.",
      features: ["Easy service categories", "Transparent pricing", "Quick & simple selection"],
      cta: "Choose a Service",
      image: "/images/step-one.png",
    },
    {
      id: 2,
      title: "Book Request",
      heading: "Book Your Request",
      desc: "Fill in your details, select your preferred time and submit your service request.",
      features: ["Easy booking process", "Choose date & time", "Real-time confirmation"],
      cta: "Book Request",
      image: "/images/step-2.png",
    },
    {
      id: 3,
      title: "Provider Assigned",
      heading: "Provider Assigned",
      desc: "We assign the best and nearest service professional for you.",
      features: ["Verified & skilled professionals", "Nearest provider assigned", "Live tracking & updates"],
      cta: "Track Provider",
      image: "/images/step-3.png",
    },
    {
      id: 4,
      title: "Service Completed",
      heading: "Service Completed",
      desc: "Service completed! Rate your experience and help us serve you better.",
      features: ["Quality service delivery", "Rate your experience", "100% satisfaction"],
      cta: "Submit Review",
      image: "/images/step-4.png",
    }
  ];

  const bottomFeatures = [
    { icon: ShieldCheck, title: "Verified Professionals", desc: "All professionals are verified and background checked.", iconColor: "text-blue-500", bgColor: "bg-blue-50" },
    { icon: Clock, title: "Fast Response", desc: "We connect you with experts within minutes.", iconColor: "text-green-500", bgColor: "bg-green-50" },
    { icon: Tag, title: "Transparent Pricing", desc: "Clear and upfront pricing with no hidden charges.", iconColor: "text-orange-500", bgColor: "bg-orange-50" },
    { icon: Award, title: "Satisfaction Guaranteed", desc: "We ensure quality service and your complete satisfaction.", iconColor: "text-blue-500", bgColor: "bg-blue-50" },
  ];

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-slate-50/50">
      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-[var(--primary-blue)] font-bold text-xs tracking-widest uppercase mb-4 shadow-sm">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Book Your Service in <span className="text-[var(--primary-blue)]">4 Simple</span> <span className="text-green-600">Steps</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
            Mero Sewa makes home services easy, fast and reliable.
          </p>
        </div>

        {/* Stepper Navigation */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="hidden md:block absolute top-6 left-[12%] right-[12%] border-t-2 border-dashed border-slate-200 z-0"></div>
          
          <div className="flex justify-between relative z-10">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;
              
              return (
                <button 
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center group relative w-1/4"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 shadow-sm z-10
                    ${isActive ? 'bg-[var(--primary-blue)] text-white scale-110 shadow-blue-200' : 
                      isPast ? 'bg-white border-2 border-[var(--primary-blue)] text-[var(--primary-blue)]' : 
                      'bg-white border-2 border-slate-200 text-slate-400 group-hover:border-slate-300'}`}
                  >
                    {step.id}
                  </div>
                  <span className={`mt-4 text-sm font-semibold transition-colors duration-300 text-center
                    ${isActive ? 'text-[var(--primary-blue)]' : 'text-slate-500'}`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-[2rem] lg:rounded-[3xl] p-6 lg:p-12 border border-slate-100 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] mb-12 relative">
          
          {/* Mobile Arrows inside the container */}
          <button onClick={prevStep} className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg border border-slate-100 text-slate-600 hover:text-[var(--primary-blue)] hover:scale-110 transition-all z-20">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 relative">
            
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] flex items-center justify-center bg-slate-50/50 rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 p-4"
                >
                  <Image 
                    src={steps[activeStep].image} 
                    alt={steps[activeStep].heading}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 lg:pl-4 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block py-1 px-3 rounded-md bg-blue-50 text-[var(--primary-blue)] font-bold text-xs tracking-wider uppercase mb-6">
                    STEP {activeStep + 1} OF 4
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {steps[activeStep].heading}
                  </h3>
                  
                  <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                    {steps[activeStep].desc}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {steps[activeStep].features.map((feature, i) => (
                      <li key={i} className="flex items-center text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="bg-[var(--primary-blue)] hover:bg-blue-700 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all flex items-center group">
                    {steps[activeStep].cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>

          {/* Right Arrow */}
          <button onClick={nextStep} className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg border border-slate-100 text-slate-600 hover:text-[var(--primary-blue)] hover:scale-110 transition-all z-20">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Trust/Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bottomFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className={`${feature.bgColor} p-3 rounded-xl ${feature.iconColor} flex-shrink-0`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
