"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe2, Target, Users2, Building2, Trophy, BarChart3, Fingerprint } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Successful Launch", value: "500+", icon: Trophy },
  { label: "Local Expertise", value: "10 Years", icon: Building2 },
  { label: "Growth Generated", value: "+300%", icon: BarChart3 },
  { label: "Client Satisfaction", value: "99%", icon: Users2 },
];

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-brand-charcoal text-white">
      {/* Premium Dark Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-brand-orange/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-brand-coral/5 blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-orange text-xs font-black uppercase tracking-[0.3em] mb-8"
            >
              Our DNA
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9]">
              ARCHITECTING <br />
              <span className="text-brand-orange">DIGITAL</span> DOMINANCE.
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium max-w-xl">
              JustSearch is not just an agency; we are a growth engine. Based in Dubai, we decode the UAE market context and build high-performance digital ecosystems for forward-thinking brands.
            </p>
            
            <div className="space-y-6 mb-12">
               {[
                 { icon: Globe2, title: "UAE Market Specialists", desc: "Native understanding of local consumer behavior and search patterns." },
                 { icon: Fingerprint, title: "Data-First Strategy", desc: "Every move we make is backed by deep analytics and behavioral data." },
                 { icon: Target, title: "ROI Centric Approach", desc: "We focus on outcomes, not just outputs. Your growth is our metric." }
               ].map((item, i) => (
                 <motion.div 
                   key={item.title}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="flex items-start gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-orange/30 transition-colors group"
                 >
                    <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                       <item.icon className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                       <p className="text-gray-400 text-sm font-medium">{item.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 p-2 bg-gradient-to-br from-white/10 to-transparent rounded-[3rem] border border-white/10">
               <div className="relative rounded-[2.9rem] overflow-hidden aspect-square">
                  <Image 
                    src="/about-dubai.png"
                    alt="Dubai Tech Scene"
                    fill
                    className="object-cover brightness-75 hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-10 left-10 p-6 glass-card rounded-2xl border-white/20">
                     <div className="text-4xl font-black text-brand-orange mb-1">10+</div>
                     <div className="text-[10px] font-black uppercase tracking-widest text-white/70">Years of Experience</div>
                  </div>
               </div>
            </div>
            
            {/* Massive decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-orange/10 blur-[120px] -z-10" />
          </motion.div>
        </div>

        {/* Dynamic Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-brand-orange/30 hover:bg-brand-orange/5 transition-all duration-500 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 mx-auto group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                <stat.icon className="w-8 h-8 text-brand-orange group-hover:text-white" />
              </div>
              <div className="text-5xl font-black mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-brand-orange transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
