"use client";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { LaunchPopup } from "@/components/home/LaunchPopup";
import { TrustMetrics } from "@/components/home/TrustMetrics";
import { ServicesGrid } from "@/components/home/ServicesGrid";

import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedProviders } from "@/components/home/FeaturedProviders";
import { Testimonials } from "@/components/home/Testimonials";
import { Coverage } from "@/components/home/Coverage";
import { ProviderCTA } from "@/components/home/ProviderCTA";
import { AppPromo } from "@/components/home/AppPromo";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="flex-1 bg-[var(--background)] relative">
      <LaunchPopup />
      <Hero />
      <TrustMetrics />
      <ServicesGrid />

      <HowItWorks />
      <FeaturedProviders />
      <Testimonials />
      <Coverage />
      <ProviderCTA />
      <AppPromo />
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 md:hidden flex gap-3 z-50">
        <Button className="flex-[2] bg-[var(--primary-blue)] text-white hover:bg-blue-700 rounded-full font-bold transition-all active:scale-95" size="lg">
          Book Service
        </Button>
        <Button variant="outline" className="flex-1 rounded-full border-[var(--primary-green)] text-[var(--primary-green)] hover:bg-green-50 dark:hover:bg-green-900/20 font-bold bg-white dark:bg-slate-900" size="lg">
          <MessageCircle className="w-5 h-5 mr-1" /> WA
        </Button>
        <Button variant="outline" className="w-12 h-12 p-0 rounded-full border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 shrink-0 bg-white dark:bg-slate-900" size="icon">
          <Phone className="w-5 h-5" />
        </Button>
      </div>
    </main>
  );
}

