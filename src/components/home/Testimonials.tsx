"use client";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Bohara",
      location: "Dhangadhi",
      text: "धेरै छिटो र राम्रो सेवा पाएँ । इलेक्ट्रिसियन समयमै आइपुग्नुभयो र काम एकदम प्रोफेसनल तरिकाले गर्नुभयो ।",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Sita Chaudhary",
      location: "Attariya",
      text: "प्लम्बरले चुहावटको समस्या तुरुन्त समाधान गर्नुभयो। एकदमै राम्रो सेवा!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=44"
    },
    {
      name: "Bikash Rawat",
      location: "Tikapur",
      text: "AC मर्मत र सर्भिस एकदम उत्कृष्ट छ । म सबैलाई सिफारिस गर्न चाहन्छु ।",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=15"
    }
  ];

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px] relative">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="text-center md:text-left w-full md:w-auto">
            <p className="text-[var(--primary-blue)] font-bold text-sm tracking-wider uppercase mb-2">Customer Reviews</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-normal">What Our Customers Say</h2>
          </div>
          <a href="/reviews" className="hidden md:block text-[var(--primary-blue)] font-bold hover:underline">
            View All Reviews
          </a>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden md:block absolute top-1/2 -left-6 -translate-y-1/2 z-10">
            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 bg-white border-slate-200 shadow-sm text-slate-400 hover:text-[var(--primary-blue)]">
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 z-10">
            <Button variant="outline" size="icon" className="rounded-full w-10 h-10 bg-white border-slate-200 shadow-sm text-slate-400 hover:text-[var(--primary-blue)]">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between h-full relative group hover:border-slate-300 transition-colors">
                <Quote className="w-8 h-8 text-blue-100 mb-4" fill="currentColor" />
                <p className="text-slate-600 font-medium leading-relaxed mb-8 italic flex-grow">
                  "{item.text}"
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-slate-500">{item.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < item.rating ? 'fill-current' : 'text-slate-200'}`} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="/reviews" className="text-[var(--primary-blue)] font-bold hover:underline">
            View All Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
