import { CheckCircle, Clock, FileText, ShieldCheck } from "lucide-react";

export function WhyUs() {
  const reasons = [
    {
      title: "Verified Professionals",
      desc: "All providers are KYC verified and background checked.",
      icon: ShieldCheck,
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "Quick Response",
      desc: "We connect you with nearby experts within minutes.",
      icon: Clock,
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "Transparent Pricing",
      desc: "Clear and upfront pricing. No hidden charges.",
      icon: FileText,
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Service Warranty",
      desc: "We ensure quality service with satisfaction guarantee.",
      icon: CheckCircle,
      color: "text-[var(--primary-blue)]",
      bg: "bg-blue-50"
    }
  ];

  return (
    <section className="py-10 md:py-20 bg-[#f8fafd]">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="text-center mb-12">
          <p className="text-[var(--primary-blue)] font-bold text-sm tracking-wider uppercase mb-2">Why Choose Mero Sewa</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-normal">Your Trust is Our Priority</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${reason.bg}`}>
                <reason.icon className={`w-6 h-6 ${reason.color}`} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{reason.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
