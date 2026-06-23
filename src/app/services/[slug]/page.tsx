import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/home/Footer";
import { servicesData } from "@/data/services";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export function generateStaticParams() {
  return [
    { slug: 'electrician' },
    { slug: 'plumbing' },
    { slug: 'ac-repair' },
    { slug: 'cctv' },
    { slug: 'cleaning' },
    { slug: 'carpenter' },
    { slug: 'painter' },
    { slug: 'computer-repair' }
  ];
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || 'service';
  
  // Format the slug to a readable title (e.g., 'ac-repair' -> 'AC Repair')
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Fetch the data for the specific service slug
  // Fallback to a generic service if not found
  const serviceData = servicesData[slug] || {
    description: "Trusted professionals, upfront pricing, and guaranteed satisfaction. Book your service in seconds with Nepal's best platform.",
    includes: ["Professional service execution", "Post-service cleanup", "Background verified expert"],
    excludes: ["Cost of spare parts", "Major civil work"],
    faqs: [
      { question: "Are your professionals verified?", answer: "Yes, all our professionals undergo strict background checks." },
      { question: "Is there a warranty?", answer: "We provide a 30-day service warranty on our repairs." }
    ]
  };

  return (
    <main className="flex-1 bg-[var(--background)]">
      <ServiceHero title={title} description={serviceData.description} />
      <ServiceFeatures includes={serviceData.includes} excludes={serviceData.excludes} />
      <Testimonials />
      <ServiceFAQ faqs={serviceData.faqs} />
      <Footer />
      
      {/* Sticky Mobile CTA - Same as Home for consistent conversion flow */}
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
