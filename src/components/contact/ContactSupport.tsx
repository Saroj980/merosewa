"use client";
import { motion } from "framer-motion";
import { MapPin, Building, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSupport() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Info & Coverage */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">Let's connect.</h2>
              <p className="text-lg text-slate-600 font-medium mb-8">
                Drop us a message, and our support team will get back to you within a few hours.
              </p>
            </div>

            <div className="space-y-8">
              {/* Office Info */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Corporate Office</h4>
                  <p className="text-slate-600 font-medium text-sm">Hasanpur-5, Dhangadhi<br/>Kailali, Sudurpashchim 10900</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Operating Hours</h4>
                  <p className="text-slate-600 font-medium text-sm">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>

              {/* Coverage Areas */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Coverage Areas</h4>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">
                    Dhangadhi • Attariya • Mahendranagar<br/>
                    <span className="text-blue-600 font-semibold cursor-pointer hover:underline">View full service map &rarr;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)] border border-slate-100"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900" 
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900" 
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900" 
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Topic</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-700 appearance-none">
                    <option>General Inquiry</option>
                    <option>Booking Issue</option>
                    <option>Payment & Billing</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <Button className="w-full h-14 text-lg font-bold rounded-xl bg-[var(--primary-blue)] hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 transition-transform hover:-translate-y-0.5">
                  Send Message
                </Button>
                <p className="text-xs text-center text-slate-500 font-medium">By submitting this form, you agree to our Privacy Policy.</p>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
