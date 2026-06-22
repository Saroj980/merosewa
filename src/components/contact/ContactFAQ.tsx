"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do I cancel or reschedule a booking?",
      a: "You can easily cancel or reschedule your booking by logging into your account, navigating to 'My Bookings', and selecting the relevant option. Cancellations made at least 4 hours before the scheduled time are free of charge."
    },
    {
      q: "When do I pay for the service?",
      a: "You only pay after the service has been successfully completed. We accept online payments through eSewa, Khalti, bank transfers, or cash directly to the professional."
    },
    {
      q: "Are the service professionals verified?",
      a: "Yes. Every professional on our platform undergoes a strict background check, identity verification, and skill assessment before they are allowed to accept jobs."
    },
    {
      q: "Do you offer warranties on your services?",
      a: "Absolutely. We offer a 30-day service warranty on repairs. If an issue arises related to the work done, we will send a professional to fix it at no extra cost."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 font-medium text-lg">Can't find the answer you're looking for? Reach out to our support team.</p>
        </div>

        <div className="w-full space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-slate-50 border border-slate-100 rounded-2xl px-6 overflow-hidden transition-colors hover:border-blue-100">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left font-bold text-lg text-slate-900 py-6 flex justify-between items-center focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="text-slate-600 font-medium text-base leading-relaxed pb-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
