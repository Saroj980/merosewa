"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Zap, Droplet, Wind, Video, Paintbrush, Monitor, Sparkles, Wrench, ArrowRight } from "lucide-react";

export function ServicesGrid() {
  const services = [
    { name: 'Electrician', slug: 'electrician', desc: 'Wiring, repair, installation', icon: Zap },
    { name: 'Plumbing', slug: 'plumbing', desc: 'Pipe repair, installation, leakage fix', icon: Droplet },
    { name: 'AC Repair', slug: 'ac-repair', desc: 'Installation, cleaning, gas refill', icon: Wind },
    { name: 'CCTV', slug: 'cctv', desc: 'Installation, repair, maintenance', icon: Video },
    { name: 'Cleaning', slug: 'cleaning', desc: 'Home, office, deep cleaning', icon: Sparkles },
    { name: 'Carpenter', slug: 'carpenter', desc: 'Furniture, door, window, custom work', icon: Wrench },
    { name: 'Painter', slug: 'painter', desc: 'Interior, exterior painting', icon: Paintbrush },
    { name: 'Computer Repair', slug: 'computer-repair', desc: 'Repair, setup, virus removal', icon: Monitor },
  ];

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isServicesPage = pathname === '/services';
  const query = searchParams.get('q')?.toLowerCase() || '';

  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    if (query) {
      setFilteredServices(services.filter(s => 
        s.name.toLowerCase().includes(query) || 
        s.desc.toLowerCase().includes(query)
      ));
    } else {
      setFilteredServices(services);
    }
  }, [query]);

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-12">
          <p className="text-[var(--primary-blue)] font-bold text-sm tracking-wider uppercase mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">Popular Services at Your Doorstep</h2>
          {query && (
            <p className="mt-4 text-slate-500 font-medium">
              Showing results for <span className="text-[var(--primary-blue)]">"{query}"</span>
            </p>
          )}
        </div>
        
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12"
        >
          <AnimatePresence>
            {filteredServices.length > 0 ? (
              filteredServices.map((service, i) => (
                <motion.div
                  layout
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.05, type: "spring", bounce: 0.4 }}
                  className="h-full"
                >
                  <Link href={`/services/${service.slug}`} className="block h-full outline-none">
                    <div className="bg-white border border-slate-200 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:border-[var(--primary-blue)] hover:shadow-[0_20px_40px_-15px_rgba(15,113,242,0.15)] group h-full relative overflow-hidden">
                      
                      {/* Background hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[var(--primary-blue)] transition-all duration-300">
                        <service.icon className="w-8 h-8 text-[var(--primary-blue)] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                      
                      <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-[var(--primary-blue)] transition-colors relative z-10">{service.name}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed relative z-10">{service.desc}</p>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No services found</h3>
                <p className="text-slate-500">We couldn't find any services matching "{query}".</p>
                <Button 
                  variant="link" 
                  className="mt-4 text-[var(--primary-blue)] font-bold"
                  onClick={() => window.location.href = '/services'}
                >
                  Clear search
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {!isServicesPage && (
          <div className="flex justify-center">
            <Link href="/services">
              <Button variant="outline" className="rounded-full px-8 border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold shadow-sm">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
