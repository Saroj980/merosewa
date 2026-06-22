import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Footer } from "@/components/home/Footer";
import { AllServicesHero } from "@/components/services/AllServicesHero";
import { CoreServices } from "@/components/services/CoreServices";
import { SpecializedServices } from "@/components/services/SpecializedServices";
import { WhyChooseUs } from "@/components/services/WhyChooseUs";
import { Coverage } from "@/components/home/Coverage";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { AMCPlans } from "@/components/services/AMCPlans";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { Suspense } from "react";

export default function GeneralServicesPage() {
  return (
    <main className="flex-1 bg-white dark:bg-slate-950 min-h-screen">
      <AllServicesHero />
      <CoreServices />
      
      <div className="py-20 bg-slate-50">
        <Suspense fallback={<div className="py-20 text-center text-slate-500">Loading services...</div>}>
          <ServicesGrid />
        </Suspense>
      </div>

      <SpecializedServices />
      <WhyChooseUs />
      <Coverage />
      <ServiceProcess />
      <AMCPlans />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
