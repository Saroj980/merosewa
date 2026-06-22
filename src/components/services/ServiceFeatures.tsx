import { CheckCircle2, XCircle } from "lucide-react";

interface ServiceFeaturesProps {
  includes: string[];
  excludes: string[];
}

export function ServiceFeatures({ includes, excludes }: ServiceFeaturesProps) {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What's Included in the Service?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Transparent service details so you know exactly what to expect. No hidden surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Included */}
          <div className="bg-green-50 dark:bg-green-900/10 rounded-3xl p-8 border border-green-100 dark:border-green-900/30">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              What's Included
            </h3>
            <ul className="space-y-4">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded */}
          <div className="bg-red-50 dark:bg-red-900/10 rounded-3xl p-8 border border-red-100 dark:border-red-900/30">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0">
                <XCircle className="w-5 h-5" />
              </span>
              What's Excluded
            </h3>
            <ul className="space-y-4">
              {excludes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
