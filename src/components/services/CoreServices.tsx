"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CoreServices() {
  const coreServices = [
    {
      title: "Electrical Services",
      subtitle: "Safe and reliable electrical solutions",
      features: [
        "Wiring Installation",
        "Switch & Socket Repair",
        "Lighting Setup",
        "Emergency Electrical Support"
      ],
      slug: "electrician",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Plumbing Services",
      subtitle: "Reliable plumbing solutions for your home",
      features: [
        "Pipe Repair",
        "Leakage Detection",
        "Toilet Installation",
        "Drainage Solutions"
      ],
      slug: "plumbing",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional maintenance and repair services trusted by households across Sudurpashchim.
          </p>
        </div>

        <div className="space-y-24">
          {coreServices.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={service.title} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                
                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] group aspect-[4/3]">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-1/2 space-y-6"
                >
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-xl text-slate-500">{service.subtitle}</p>
                  </div>

                  <ul className="space-y-4 py-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-[var(--primary-blue)]" />
                        </div>
                        <span className="text-lg text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/services/${service.slug}`} className="inline-block">
                    <Button className="h-14 px-8 rounded-full bg-[var(--primary-blue)] hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 group">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
