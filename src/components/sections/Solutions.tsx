"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  MapPin, 
  MousePointer2, 
  PieChart, 
  Zap, 
  Layers,
  Sparkles
} from "lucide-react";

const solutions = [
  { title: "Boost Online Visibility", icon: MousePointer2 },
  { title: "Drive Leads & Sales", icon: Zap },
  { title: "Brand Awareness Campaigns", icon: Target },
  { title: "Tailored Digital Strategies", icon: Layers },
  { title: "Insights & Growth Reports", icon: PieChart },
  { title: "Transparent Reporting", icon: BarChart3 },
  { title: "UAE Market Experts", icon: MapPin },
  { title: "A/B Testing & Optimization", icon: TrendingUp }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white dark:bg-brand-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Why Choose Our <br />
              <span className="text-gradient">Solutions?</span>
            </h2>
            <p className="text-lg text-brand-text mb-12">
              We understand the challenges UAE businesses face in the digital world. To help you grow, we provide end-to-end digital solutions designed for performance and ROI.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-brand-light-grey dark:bg-white/5 border border-transparent hover:border-brand-orange/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-brand-orange" />
                  </div>
                  <span className="font-bold text-sm leading-tight">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square glass-card rounded-[3rem] p-12 flex items-center justify-center">
               <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-brand-orange/20 rounded-full animate-pulse blur-3xl" />
                  <div className="z-10 text-center">
                    <div className="text-7xl font-black text-brand-charcoal dark:text-white mb-2 tracking-tighter">ROI</div>
                    <div className="text-brand-orange font-black text-2xl tracking-widest uppercase">Focused</div>
                  </div>
                  
                  {/* Rotating elements */}
                  {[0, 72, 144, 216, 288].map((angle, i) => (
                    <motion.div
                      key={angle}
                      className="absolute w-12 h-12 bg-white dark:bg-brand-charcoal shadow-xl rounded-2xl flex items-center justify-center border border-brand-orange/20"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: -i * 4
                      }}
                      style={{
                        transformOrigin: "center 180px",
                        top: "10%",
                      }}
                    >
                      <Sparkles className="w-6 h-6 text-brand-orange" />
                    </motion.div>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
