"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Rocket, PieChart, Sparkles, Zap, Shield } from "lucide-react";

const solutions = [
  {
    title: "Maximum ROI",
    desc: "Our strategies are built around your bottom line, ensuring every dirham spent brings measurable value.",
    icon: TrendingUp,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10"
  },
  {
    title: "Targeted Audience",
    desc: "Reach the right people at the right time using our precision-targeted local data sets.",
    icon: Target,
    color: "text-brand-coral",
    bg: "bg-brand-coral/10"
  },
  {
    title: "Scalable Systems",
    desc: "From startups to enterprises, we build infrastructure that grows with your ambition.",
    icon: Rocket,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Brand Authority",
    desc: "We position you as a market leader in the UAE through calculated digital storytelling and SEO dominance.",
    icon: Shield,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-32 relative overflow-hidden bg-[#fafafa] dark:bg-black/40">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-[10px] font-black uppercase tracking-[0.3em] mb-6"
            >
              The Impact
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9]"
            >
              SOLUTIONS THAT <br /><span className="text-brand-orange">SCALE.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-brand-text/70 dark:text-gray-400 mb-12 font-medium leading-relaxed"
            >
              We don&apos;t just deliver services; we deploy growth systems. Each solution is a cog in a high-performance machine designed for the UAE ecosystem.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-8">
              {solutions.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-white dark:border-white/5 shadow-lg shadow-brand-orange/5`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-black mb-3 tracking-tight group-hover:text-brand-orange transition-colors">{item.title}</h4>
                  <p className="text-brand-text/60 dark:text-gray-500 text-sm font-bold leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-brand-orange/20 rounded-[3rem] blur-3xl scale-110" />
              <div className="relative z-10 w-full h-full glass-card rounded-[4rem] border-brand-orange/30 p-12 flex flex-col items-center justify-center text-center overflow-hidden">
                 <div className="absolute top-0 right-0 p-8">
                    <Sparkles className="w-12 h-12 text-brand-orange/20 animate-pulse" />
                 </div>
                 
                 <motion.div 
                   animate={{ scale: [1, 1.1, 1] }} 
                   transition={{ duration: 4, repeat: Infinity }}
                   className="relative mb-8"
                 >
                    <div className="absolute inset-0 bg-brand-orange/20 blur-2xl rounded-full" />
                    <TrendingUp className="w-32 h-32 text-brand-orange relative z-10" />
                 </motion.div>
                 
                 <div className="text-6xl font-black tracking-tighter text-brand-charcoal dark:text-white mb-2">+340%</div>
                 <div className="text-sm font-black uppercase tracking-[0.3em] text-brand-orange">Average Growth</div>
                 
                 <div className="mt-12 flex gap-4">
                    <div className="flex -space-x-4">
                       {[1,2,3,4].map(i => (
                         <div key={i} className={`w-12 h-12 rounded-full border-4 border-white dark:border-brand-charcoal overflow-hidden bg-gray-${100 * i}`}>
                            <div className="w-full h-full flex items-center justify-center text-[10px] font-black text-gray-500">U{i}</div>
                         </div>
                       ))}
                    </div>
                    <div className="text-left">
                       <div className="text-xs font-black uppercase tracking-widest text-brand-text">Joined Today</div>
                       <div className="text-[10px] font-bold text-green-500">+12 Local Businesses</div>
                    </div>
                 </div>
              </div>
              
              {/* Corner elements */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-12 -right-12 p-6 glass-card rounded-3xl border-brand-orange/30 z-20"
              >
                 <Zap className="w-8 h-8 text-brand-orange" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
