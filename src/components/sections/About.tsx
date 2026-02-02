"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-brand-light-grey dark:bg-brand-charcoal/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-black mb-6"
          >
            About <span className="text-brand-orange">JustSearch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brand-text leading-relaxed"
          >
            JustSearch is a UAE-focused digital marketing and business listing platform designed to help local businesses grow online, generate quality leads, and build a strong digital presence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="glass-card p-10 rounded-3xl"
          >
            <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-brand-orange" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-brand-text leading-relaxed text-lg">
              To become the most trusted digital directory and lead-generation partner for retail and service businesses across the UAE.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="glass-card p-10 rounded-3xl"
          >
            <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-brand-orange" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-brand-text leading-relaxed text-lg">
              To empower UAE businesses with a powerful digital presence, measurable customer engagement, and innovative marketing solutions that drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
