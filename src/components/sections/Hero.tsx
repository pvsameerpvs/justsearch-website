"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-brand-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] bg-brand-coral/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
              UAE&apos;s Trusted Growth Partner
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1]">
              DIGITAL MARKETING <br />
              <span className="text-gradient">SOLUTIONS</span>
            </h1>
            
            <p className="text-xl text-brand-text mb-8 max-w-lg leading-relaxed">
              Your Complete Digital Growth Partner. We combine technology, strategy, and market expertise to deliver measurable results for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="bg-gradient-brand text-lg px-8 py-7 h-auto">
                Start Your Growth <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-7 h-auto border-2 hover:bg-brand-light-grey">
                View Pricing
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["Measurable Results", "Transparent Reporting", "UAE Market Experts", "ROI Focused"].map((text) => (
                <div key={text} className="flex items-center gap-2 text-sm font-medium text-brand-charcoal/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-brand-charcoal">
               {/* Mockup or Visual - I'll use a gradient placeholder for now or generate an image */}
               <div className="aspect-square bg-gradient-to-br from-brand-orange/20 to-brand-charcoal/30 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center mix-blend-overlay opacity-50" />
                  <div className="z-10 text-center p-8 glass-card rounded-2xl animate-float">
                    <div className="text-4xl font-black text-brand-orange mb-2">+150%</div>
                    <div className="text-sm font-bold uppercase tracking-widest">Lead Growth</div>
                  </div>
                  
                  {/* Decorative blobs */}
                  <div className="absolute top-10 right-10 w-32 h-32 bg-brand-orange/30 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute bottom-10 left-10 w-24 h-24 bg-brand-coral/40 rounded-full blur-2xl animate-pulse delay-700" />
               </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 p-4 glass-card rounded-xl shadow-lg z-20">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase font-bold">New Leads</div>
                    <div className="text-lg font-bold">Dubai, UAE</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
