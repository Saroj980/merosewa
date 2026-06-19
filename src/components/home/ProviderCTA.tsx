import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProviderCTA() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="bg-[#0f6b49] rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 shadow-xl">
          
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5 md:gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-[var(--primary-blue)]" />
            </div>
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Are you an Expert in your Field?</h2>
              <p className="text-green-50 font-medium max-w-lg mx-auto md:mx-0">
                Whether you're a plumber, electrician, or other skilled professional, enroll today and get steady job requests directly from customers.
              </p>
            </div>
          </div>

          <div className="text-center shrink-0 w-full lg:w-auto mt-2 lg:mt-0">
            <Button size="lg" className="w-full sm:w-auto bg-white text-green-700 hover:bg-slate-100 rounded-xl font-bold h-14 px-8 text-lg mb-3 shadow-lg">
              Enroll as an Expert <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-white font-bold text-sm">It's Free & Easy!</p>
          </div>

        </div>
      </div>
    </section>
  );
}
