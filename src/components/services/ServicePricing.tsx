import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function ServicePricing() {
  const plans = [
    {
      name: "Basic Cleaning",
      price: "Rs. 1,500",
      description: "Perfect for regular maintenance",
      features: [
        "1 Cleaner",
        "Up to 2 Hours",
        "Basic Dusting & Vacuuming",
        "Bathroom Cleaning",
      ],
      popular: false,
    },
    {
      name: "Deep Cleaning",
      price: "Rs. 3,000",
      description: "Thorough cleaning for every corner",
      features: [
        "2 Cleaners",
        "Up to 4 Hours",
        "Everything in Basic",
        "Kitchen Deep Cleaning",
        "Window Cleaning",
      ],
      popular: true,
    },
    {
      name: "Premium Cleaning",
      price: "Rs. 5,500",
      description: "Move-in / Move-out comprehensive service",
      features: [
        "3 Cleaners",
        "Up to 6 Hours",
        "Everything in Deep",
        "Inside Cabinets & Appliances",
        "Balcony Washing",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Transparent Pricing Packages
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Choose the package that best fits your needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white dark:bg-slate-950 rounded-3xl p-8 border ${plan.popular ? 'border-[var(--primary-blue)] shadow-xl shadow-blue-500/10' : 'border-slate-200 dark:border-slate-800 shadow-lg'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--primary-blue)] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 h-12">{plan.description}</p>
                <div className="text-4xl font-bold text-[var(--primary-blue)]">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Check className="w-5 h-5 text-[var(--primary-green)] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full h-12 rounded-full font-bold text-lg ${plan.popular ? 'bg-[var(--primary-blue)] hover:bg-blue-700 text-white' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white'}`}
              >
                Select Package
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
