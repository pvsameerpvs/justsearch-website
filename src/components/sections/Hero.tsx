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
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#fafafa] dark:bg-brand-charcoal">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-orange/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-soft-light" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-coral/15 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-soft-light" 
        />
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-brand-orange/40 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-brand-coral/40 rounded-full animate-ping delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 shadow-sm border border-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider mb-8">
              <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
              <Sparkles className="w-3 h-3" />
              UAE&apos;s Premium Growth Agency
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
              SCALE YOUR <br />
              <span className="text-gradient drop-shadow-sm">BUSINESS</span> <br />
              TO NEW HEIGHTS
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-brand-text/80 dark:text-gray-400 mb-10 max-w-xl leading-relaxed font-medium">
              We design, build, and scale digital experiences that convert. Your end-to-end partner for SEO, AEO, and high-performance Web Solutions in the UAE.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mb-12">
              <Button size="lg" className="bg-gradient-brand text-white text-lg px-10 py-8 h-auto rounded-2xl shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/40 transition-all duration-300 hover:scale-105 active:scale-95 group">
                Launch Your Project <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-8 h-auto border-2 rounded-2xl bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300">
                View Solutions
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               <div className="flex flex-col gap-1">
                  <div className="text-2xl font-black text-brand-charcoal dark:text-white">500+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-text">Clients</div>
               </div>
               <div className="flex flex-col gap-1">
                  <div className="text-2xl font-black text-brand-charcoal dark:text-white">99%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-text">Retention</div>
               </div>
               <div className="flex flex-col gap-1">
                  <div className="text-2xl font-black text-brand-charcoal dark:text-white">10M+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-text">Revenue Generated</div>
               </div>
               <div className="flex flex-col gap-1">
                  <div className="text-2xl font-black text-brand-charcoal dark:text-white">24/7</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-text">Expert Support</div>
               </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="relative"
          >
            <div className="relative z-10 p-4 bg-white dark:bg-black/40 rounded-[2.5rem] shadow-2xl border border-white/20 backdrop-blur-sm group hover:scale-[1.02] transition-transform duration-700">
               <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-[600px]">
                  <Image 
                    src="/hero-analytics.png"
                    alt="Data Analytics"
                    fill
                    className="object-cover brightness-90 group-hover:scale-110 transition-transform duration-1000"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent" />
                  
                  {/* Overlay Stats Card */}
                  <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="glass-card p-4 rounded-2xl bg-white/10 dark:bg-black/20"
                    >
                      <TrendingUp className="w-5 h-5 text-brand-orange mb-2" />
                      <div className="text-xl font-bold text-white">+240%</div>
                      <div className="text-[10px] uppercase text-white/60 font-bold">SEO Growth</div>
                    </motion.div>
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                      className="glass-card p-4 rounded-2xl bg-white/10 dark:bg-black/20"
                    >
                      <Target className="w-5 h-5 text-brand-coral mb-2" />
                      <div className="text-xl font-bold text-white">12.5%</div>
                      <div className="text-[10px] uppercase text-white/60 font-bold">Conv. Rate</div>
                    </motion.div>
                  </div>
               </div>
            </div>
            
            {/* Absolute floating elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/50 rounded-full blur-[80px] -z-10" 
            />
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-coral/40 rounded-full blur-[80px] -z-10" 
            />

            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute top-20 -left-12 p-5 bg-white dark:bg-brand-charcoal rounded-2xl shadow-2xl z-20 border border-gray-100 dark:border-white/5 animate-float"
            >
               <Zap className="w-8 h-8 text-brand-orange mb-2" />
               <div className="text-xs font-bold uppercase tracking-tighter text-muted-foreground">Speed Score</div>
               <div className="text-2xl font-black">99/100</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
