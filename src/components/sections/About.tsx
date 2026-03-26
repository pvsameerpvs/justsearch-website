"use client";

import { motion } from "framer-motion";
import { Globe2, Target, Users2, Building2, Trophy, BarChart3, Fingerprint } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const stats = [
  { label: "Successful Launch", value: "500+", icon: Trophy },
  { label: "Business Experience", value: "5+ Years", icon: Building2 },
  { label: "Growth Generated", value: "+102%", icon: BarChart3 },
  { label: "Client Satisfaction", value: "99%", icon: Users2 },
];

export function About() {
  const [aboutImage, setAboutImage] = useState("/about-team.png");

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-brand-charcoal text-white">
      {/* Premium Dark Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-brand-orange/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-brand-coral/5 blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-orange text-xs font-black uppercase tracking-[0.3em] mb-8">
              Our DNA
            </div>
            <h2 className="text-5xl md:text-8xl text-white font-black tracking-tighter leading-[0.9]">
              CRAFTING <span className="text-brand-orange">DIGITAL</span> GROWTH.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative w-screen left-1/2 -translate-x-1/2 mb-14"
          >
            <div className="relative overflow-hidden aspect-[16/9] bg-brand-charcoal/70">
              <Image
                src={aboutImage}
                alt="JustSearch Team"
                fill
                className="object-cover object-center"
                onError={() => setAboutImage("/team-a.png")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/35 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-5xl mx-auto"
          >
            <p className="text-xl text-gray-200/90 mb-10 leading-relaxed font-medium text-center">
              JustSearch is not just an agency; we are a growth engine. Based in Dubai, we decode the UAE market context and build high-performance digital ecosystems for forward-thinking brands.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
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
                  className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-orange/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h4 className="text-xl text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-200/90 text-sm font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dynamic Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group h-full p-4 sm:p-6 lg:p-10 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-brand-orange/30 hover:bg-brand-orange/5 transition-all duration-500 text-center"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 mx-auto group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-brand-orange group-hover:text-white" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-5xl leading-none font-black mb-2 sm:mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="min-h-[2rem] sm:min-h-[2.5rem] text-[10px] sm:text-[11px] lg:text-[10px] font-black uppercase tracking-[0.08em] sm:tracking-[0.14em] lg:tracking-[0.2em] leading-snug break-words text-gray-300 group-hover:text-brand-orange transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
