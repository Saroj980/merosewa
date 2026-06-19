import { Star, Link as LinkIcon } from "lucide-react";

export function FeaturedProviders() {
  const providers = [
    { name: "Kailash AC Service", category: "AC Technician", rating: 4.8, reviews: 203, jobs: 183, avatar: "https://i.pravatar.cc/150?img=11" },
    { name: "Power Solutions", category: "Electrician", rating: 4.9, reviews: 112, jobs: 142, avatar: "https://i.pravatar.cc/150?img=33" },
    { name: "Quick Plumbers", category: "Plumber", rating: 4.6, reviews: 105, jobs: 106, avatar: "https://i.pravatar.cc/150?img=12" },
    { name: "Clean & Fresh", category: "Cleaning Service", rating: 4.8, reviews: 218, jobs: 96, avatar: "https://i.pravatar.cc/150?img=32" },
  ];

  return (
    <section className="py-10 md:py-20 bg-[#f8fafd]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="text-left">
            <p className="text-[var(--primary-blue)] font-bold text-sm tracking-wider uppercase mb-2">Top Professionals</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-normal">Our Featured Providers</h2>
          </div>
          <a href="/providers" className="text-[var(--primary-blue)] font-bold hover:underline flex items-center gap-1">
            View All Providers
          </a>
        </div>

        <div className="flex overflow-x-auto pb-6 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {providers.map((item, idx) => (
            <div key={idx} className="w-[85vw] max-w-[300px] sm:w-auto sm:max-w-none shrink-0 snap-center bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md mb-4 relative">
                <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <h4 className="font-bold text-lg text-slate-900">{item.name}</h4>
              <p className="text-sm text-slate-500 mb-3">{item.category}</p>
              
              <div className="flex justify-center items-center gap-1 text-sm font-bold text-slate-700 mb-2">
                <span className="text-yellow-500 flex items-center gap-1"><Star className="w-4 h-4 fill-current" /> {item.rating}</span>
                <span className="text-slate-400 font-normal">({item.reviews} reviews)</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">{item.jobs} Jobs Completed</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
