"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles, Zap, TrendingUp, Target } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  } as any;

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white dark:bg-brand-charcoal"
    >
      {/* Background Slices/Gooey Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-charcoal/5 dark:bg-white/5 -z-10" />
      <div className="absolute top-0 right-0 w-full h-full -z-10 pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[60%] h-full bg-brand-orange/10 transform skew-x-[-12deg] origin-top translate-x-1/4"
        />
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[40%] w-64 h-64 bg-brand-orange/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-soft-light" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-black uppercase tracking-wider mb-8">
              <Sparkles className="w-3 h-3" />
              UAE&apos;s Premium Growth Agency
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-6xl md:text-8xl lg:text-[6.5rem] font-black mb-8 leading-[0.9] tracking-tighter text-brand-charcoal dark:text-white"
            >
              Digital <br />
              <span className="text-brand-orange">Marketing</span> <br />
              Solution
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-brand-text/60 dark:text-gray-400 mb-10 max-w-lg leading-relaxed font-medium">
              We design, build, and scale digital experiences that convert. Your end-to-end partner for SEO, AEO, and high-performance Web Solutions in the UAE.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mb-12">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-charcoal text-white text-lg px-12 py-7 h-auto rounded-full shadow-xl shadow-brand-orange/20 transition-all duration-300 transform hover:scale-105 active:scale-95 font-black uppercase tracking-widest">
                Get Started
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-8 border-t border-gray-100 dark:border-white/10 pt-10">
               {[
                 { label: "Clients", value: "500+" },
                 { label: "Success Rate", value: "99%" },
               ].map((stat) => (
                 <div key={stat.label} className="flex flex-col gap-0.5">
                    <div className="text-3xl font-black text-brand-charcoal dark:text-white leading-none">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40">{stat.label}</div>
                 </div>
               ))}
            </motion.div>
          </motion.div>

          {/* Right Image (Diamond Layout) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="relative flex justify-center"
          >
            {/* The Diamond Container */}
            <div className="relative w-full max-w-[500px] aspect-square">
               {/* Thick Orange Frame */}
               <div className="absolute inset-0 border-[16px] border-brand-orange rounded-[4rem] rotate-[8deg] -z-10 opacity-20" />
               <div className="absolute inset-0 border-[4px] border-brand-charcoal dark:border-white/20 rounded-[4rem] rotate-[-4deg] -z-10" />
               
               <div className="relative w-full h-full bg-brand-charcoal rounded-[4rem] overflow-hidden transform rotate-[-8deg] shadow-3xl border-[12px] border-white dark:border-brand-charcoal">
                  <div className="absolute inset-0 transform rotate-[8deg] scale-125">
                     <Image 
                       src="/about-dubai.png"
                       alt="Collaborative Team"
                       fill
                       className="object-cover brightness-90 contrast-110"
                       priority
                     />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 transform rotate-[8deg]" />
               </div>

               {/* Trusted Clients Badge */}
               <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 1, duration: 0.8 }}
                 className="absolute -bottom-6 -left-6 md:-left-12 bg-white dark:bg-brand-charcoal p-3 px-6 rounded-full shadow-2xl border-4 border-brand-orange flex items-center gap-4 z-20"
               >
                  <div className="flex -space-x-3">
                     {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                           <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" width={40} height={40} />
                        </div>
                     ))}
                  </div>
                  <div className="flex flex-col">
                     <div className="text-brand-charcoal dark:text-white font-black text-sm leading-tight">30K+ Trusted</div>
                     <div className="text-[10px] font-bold text-brand-orange uppercase tracking-tighter">Global Clients</div>
                  </div>
               </motion.div>

               {/* Floating Icon */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -top-10 -right-4 w-20 h-20 bg-brand-orange rounded-3xl flex items-center justify-center shadow-2xl z-20 transform rotate-12"
               >
                  <Zap className="w-10 h-10 text-white fill-white" />
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-10 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-charcoal/20 dark:text-white/20">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-12 rounded-full bg-gradient-to-b from-brand-orange to-transparent"
        />
      </motion.div>
    </section>
  );
}
