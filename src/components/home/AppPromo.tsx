import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Home, Grid, User, Bell, Wallet, Clock, Star, ClipboardList } from "lucide-react";

export function AppPromo() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2 flex justify-center md:justify-start relative">
             {/* Mockup of two phones from the wireframe */}
             <div className="relative w-[300px] h-[400px]">
                {/* Mero Sewa User App */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-[180px] h-[380px] bg-white rounded-[2rem] border-[4px] border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden z-10 rotate-[-5deg] flex flex-col"
                >
                   <div className="bg-[var(--primary-blue)] pt-5 pb-3 px-3 w-full flex flex-col gap-3 rounded-b-xl shadow-sm z-10 relative">
                     <div className="flex justify-between items-center text-white">
                        <Image src="/mero-sewa-logo-removebg-preview.png" alt="Mero Sewa Logo" width={120} height={40} className="h-8 w-auto object-contain brightness-0 invert drop-shadow-sm" />
                        <Bell className="w-4 h-4" />
                     </div>
                     <div className="w-full bg-white/20 rounded-md h-6 flex items-center px-2 gap-1.5">
                       <Search className="w-3 h-3 text-white/70" />
                       <span className="text-[9px] text-white/60">Search services...</span>
                     </div>
                   </div>
                   <div className="p-3 space-y-3 bg-slate-50 flex-1 relative overflow-hidden">
                     {/* Categories */}
                     <div className="flex justify-between mt-1">
                       {[
                         { name: 'Cleaning', icon: '🧹' },
                         { name: 'Plumbing', icon: '🔧' },
                         { name: 'AC Repair', icon: '❄️' },
                         { name: 'Salon', icon: '✂️' }
                       ].map((cat, i) => (
                         <div key={i} className="flex flex-col items-center gap-1">
                           <div className="w-8 h-8 bg-white border border-blue-100 rounded-full flex items-center justify-center shadow-sm text-sm">
                             {cat.icon}
                           </div>
                           <span className="text-[7px] text-slate-600 font-semibold">{cat.name}</span>
                         </div>
                       ))}
                     </div>
                     {/* Promo Card */}
                     <div className="h-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-3 relative overflow-hidden flex flex-col justify-center">
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider relative z-10">50% OFF</span>
                        <span className="text-[8px] text-blue-100 relative z-10">On your first booking</span>
                        <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-white/20 rounded-full blur-md"></div>
                     </div>
                     {/* Popular Service */}
                     <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm flex gap-2 items-center">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-lg">🧽</div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[9px] font-bold text-slate-800">Deep Home Cleaning</span>
                          <span className="text-[7px] text-slate-500">Starting from Rs. 999</span>
                          <div className="flex gap-0.5 mt-0.5"><Star className="w-2 h-2 text-yellow-400 fill-yellow-400"/><Star className="w-2 h-2 text-yellow-400 fill-yellow-400"/><Star className="w-2 h-2 text-yellow-400 fill-yellow-400"/></div>
                        </div>
                     </div>
                   </div>
                   {/* Bottom Nav */}
                   <div className="h-10 bg-white border-t border-slate-100 flex justify-around items-center text-slate-300 pb-1">
                     <div className="flex flex-col items-center gap-0.5 text-[var(--primary-blue)]"><Home className="w-4 h-4" /><span className="text-[6px]">Home</span></div>
                     <div className="flex flex-col items-center gap-0.5"><Grid className="w-4 h-4" /><span className="text-[6px]">Bookings</span></div>
                     <div className="flex flex-col items-center gap-0.5"><User className="w-4 h-4" /><span className="text-[6px]">Profile</span></div>
                   </div>
                </motion.div>

                {/* Provider App */}
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-8 right-0 w-[180px] h-[380px] bg-white rounded-[2rem] border-[4px] border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden z-20 rotate-[5deg] flex flex-col"
                >
                   <div className="bg-green-600 pt-6 pb-2 px-3 w-full flex justify-between items-center rounded-b-xl shadow-sm z-10">
                     <div className="flex items-center gap-1">
                       <Image src="/mero-sewa-logo-removebg-preview.png" alt="Mero Sewa Logo" width={100} height={32} className="h-6 w-auto object-contain brightness-0 invert drop-shadow-sm" />
                       <span className="text-[8px] text-green-100 font-bold bg-white/20 px-1 py-0.5 rounded">PRO</span>
                     </div>
                     <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border border-green-400">
                        <User className="w-3 h-3 text-white" />
                     </div>
                   </div>
                   <div className="p-3 space-y-3 bg-slate-50 flex-1 relative overflow-hidden">
                     {/* Earning Card */}
                     <div className="h-16 bg-white rounded-xl border border-slate-100 shadow-sm p-2 flex flex-col justify-center items-center">
                       <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Today's Earnings</span>
                       <span className="text-lg font-bold text-slate-800">Rs. 4,500</span>
                     </div>
                     {/* Stats */}
                     <div className="grid grid-cols-2 gap-2">
                       <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center">
                          <Clock className="w-4 h-4 text-orange-500 mb-1" />
                          <div className="text-[10px] text-slate-500 font-medium">Pending</div>
                          <div className="text-sm font-bold text-slate-800">3</div>
                       </div>
                       <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center">
                          <Wallet className="w-4 h-4 text-green-500 mb-1" />
                          <div className="text-[10px] text-slate-500 font-medium">Wallet</div>
                          <div className="text-sm font-bold text-slate-800">2.5k</div>
                       </div>
                     </div>
                     {/* New Request */}
                     <div className="bg-white p-2.5 rounded-xl border-l-4 border-l-green-500 border-y border-r border-y-slate-100 border-r-slate-100 shadow-sm">
                       <div className="flex justify-between items-center mb-1.5">
                         <div className="w-16 h-1.5 bg-slate-800 rounded-full"></div>
                         <div className="text-[8px] font-bold text-green-600 bg-green-100 px-1 rounded">NEW</div>
                       </div>
                       <div className="w-20 h-1 bg-slate-300 rounded-full mb-1"></div>
                       <div className="w-12 h-1 bg-slate-200 rounded-full mb-2"></div>
                       <div className="flex justify-between mt-2 pt-2 border-t border-slate-50">
                         <div className="w-12 h-4 bg-slate-100 rounded-md"></div>
                         <div className="w-12 h-4 bg-green-500 rounded-md"></div>
                       </div>
                     </div>
                   </div>
                   {/* Bottom Nav */}
                   <div className="h-10 bg-white border-t border-slate-100 flex justify-around items-center text-slate-300 pb-1">
                     <div className="flex flex-col items-center gap-0.5 text-green-600"><Home className="w-4 h-4" /><span className="text-[6px]">Home</span></div>
                     <div className="flex flex-col items-center gap-0.5"><ClipboardList className="w-4 h-4" /><span className="text-[6px]">Jobs</span></div>
                     <div className="flex flex-col items-center gap-0.5"><Wallet className="w-4 h-4" /><span className="text-[6px]">Wallet</span></div>
                   </div>
                </motion.div>
             </div>
          </div>

          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <div>
              <p className="text-[var(--primary-blue)] font-bold text-sm tracking-wider uppercase mb-2">Mero Sewa App</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-normal leading-tight">
                Coming Soon!
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 font-medium">
              Book services on the go with our mobile app. <br/> Easy, fast and reliable.
            </p>
            
            <div className="flex flex-row justify-center md:justify-start gap-4 pt-4">
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5ZM14.81 10.88L17.26 9.46C18.25 8.89 18.25 7.97 17.26 7.4L4.84 0.229996C4.46 0.00999641 4.04 -0.0400036 3.66 0.0499964L14.81 10.88ZM15.93 12L4.04 23.89C4.38 23.95 4.75 23.89 5.08 23.7L17.26 16.6C18.25 16.03 18.25 15.11 17.26 14.54L15.93 12Z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight">GET IT ON</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </button>
              
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M16.36 14.08C16.38 10.71 19.12 9.09 19.25 9.01C17.58 6.57 14.93 6.18 14.04 6.07C11.93 5.86 9.87 7.32 8.79 7.32C7.71 7.32 6.03 6.09 4.3 6.12C2.07 6.15 0.06 7.42 -1.08 9.38C-3.4 13.41 -1.48 19.34 0.77 22.58C1.86 24.16 3.12 25.93 4.8 25.87C6.42 25.81 7.05 24.83 8.98 24.83C10.91 24.83 11.48 25.87 13.16 25.84C14.88 25.81 15.98 24.23 17.06 22.64C18.33 20.78 18.85 18.96 18.88 18.86C18.82 18.84 16.34 17.9 16.36 14.08ZM12.01 4.02C12.91 2.94 13.51 1.48 13.34 0C12.06 0.05 10.5 0.85 9.58 1.91C8.75 2.85 8.03 4.35 8.23 5.8C9.65 5.91 11.11 5.11 12.01 4.02Z" transform="translate(2 0)"/></svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight">Download on the</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </button>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
