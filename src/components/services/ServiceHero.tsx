import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Clock, CheckCircle2, MapPin, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ServiceHeroProps {
  title?: string;
}

export function ServiceHero({ title = "Professional Service" }: ServiceHeroProps) {
  return (
    <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background styling for a premium light feel */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid pattern and gradients */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-50 dark:bg-green-900/10 rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium">
          <Link href="/" className="hover:text-[var(--primary-blue)] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/services" className="hover:text-[var(--primary-blue)] transition-colors">Services</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 dark:text-slate-200">{title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-[var(--primary-blue)] font-semibold text-sm shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span>Top Rated in Sudurpashchim</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-blue)] to-blue-500">{title}</span>
              <br />At Your Doorstep
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-light leading-relaxed">
              Trusted professionals, upfront pricing, and guaranteed satisfaction. Book your service in seconds with Nepal's best platform.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center">
                  <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-slate-900 dark:text-white leading-none">4.8</span>
                  <span className="text-sm text-slate-500 font-medium">Rating</span>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-10 bg-slate-200 dark:bg-slate-800"></div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[var(--primary-green)]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-slate-900 dark:text-white leading-none">100%</span>
                  <span className="text-sm text-slate-500 font-medium">Verified</span>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-10 bg-slate-200 dark:bg-slate-800"></div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[var(--primary-blue)]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-slate-900 dark:text-white leading-none">60 min</span>
                  <span className="text-sm text-slate-500 font-medium">Response</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Content - Booking Card */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-none border border-slate-200 dark:border-slate-800 relative">
              {/* Card Header decoration */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-green)] rounded-t-3xl"></div>
              
              <div className="mb-6 mt-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Book a Service</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Select your preferences below to get started.</p>
              </div>

              <div className="space-y-5">
                {/* Location selector fake */}
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center gap-3 cursor-pointer hover:border-[var(--primary-blue)] hover:bg-white dark:hover:bg-slate-800 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-slate-700 flex items-center justify-center shrink-0 group-hover:bg-[var(--primary-blue)] transition-colors">
                    <MapPin className="w-5 h-5 text-[var(--primary-blue)] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Location</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white truncate">Dhangadhi, Kailali</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[var(--primary-blue)] transition-colors" />
                </div>

                {/* Service Request Info */}
                <ul className="space-y-3 py-2">
                  <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[var(--primary-green)] shrink-0" />
                    <span>Instant booking confirmation</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[var(--primary-green)] shrink-0" />
                    <span>Pay only after service is completed</span>
                  </li>
                </ul>

                <Button className="w-full h-14 text-lg font-bold bg-[var(--primary-blue)] hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
                  Book Service Now
                </Button>
                
                <p className="text-center text-xs font-medium text-slate-500 dark:text-slate-400 mt-4">
                  Free cancellation up to 4 hours before service
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
