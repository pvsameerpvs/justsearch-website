"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Search, 
  Share2, 
  FileText, 
  Layout, 
  Zap,
  ShieldCheck,
  Smartphone,
  Cpu,
  Workflow,
  ArrowUpRight
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Website Development",
    desc: "From basic to premium e-commerce solutions tailored for the UAE market.",
    items: ["Static & Dynamic", "E-Commerce", "CMS Integrated"],
    icon: Globe,
    color: "from-blue-500/10 to-blue-600/10",
    shadowColor: "shadow-blue-500/10",
    iconColor: "text-blue-500"
  },
  {
    title: "SEO & AEO",
    desc: "Dominate search results with next-gen Search & AI Engine Optimization. We ensure your business ranks on Google and appears in AI-driven results like ChatGPT, Perplexity, and Meta AI.",
    items: ["AI Search Visibility", "Keyword Strategy", "Technical SEO & Schema", "Voice Search Ready"],
    icon: Search,
    color: "from-orange-500/10 to-orange-600/10",
    shadowColor: "shadow-brand-orange/10",
    iconColor: "text-brand-orange"
  },
  {
    title: "Social Media Marketing",
    desc: "Engage, influence, and convert across Instagram, Facebook, TikTok, and more.",
    items: ["Content Creation", "Reels & Videos", "Growth Reports"],
    icon: Share2,
    color: "from-purple-500/10 to-purple-600/10",
    shadowColor: "shadow-purple-500/10",
    iconColor: "text-purple-500"
  },
  {
    title: "Lead Generation",
    desc: "Targeted Meta and Google Ads campaigns designed for performance and ROI.",
    items: ["Meta Ads", "Google Ads", "A/B Testing"],
    icon: Zap,
    color: "from-yellow-500/10 to-yellow-600/10",
    shadowColor: "shadow-yellow-500/10",
    iconColor: "text-yellow-500"
  },
  {
    title: "Mobile App Development",
    desc: "High-performance iOS & Android applications tailored for your business needs.",
    items: ["Native & Cross-platform", "UI/UX Design", "App Store Optimization"],
    icon: Smartphone,
    color: "from-indigo-500/10 to-indigo-600/10",
    shadowColor: "shadow-indigo-500/10",
    iconColor: "text-indigo-500"
  },
  {
    title: "Workflow Automation",
    desc: "Connect your apps and automate repetitive tasks to save hundreds of hours.",
    items: ["App Integration", "Custom Logic", "24/7 Processing"],
    icon: Workflow,
    color: "from-cyan-500/10 to-cyan-600/10",
    shadowColor: "shadow-cyan-500/10",
    iconColor: "text-cyan-500"
  },
  {
    title: "Custom Software (CRM/ERP)",
    desc: "Tailored software solutions to streamline your business operations and growth.",
    items: ["Custom CRM Systems", "ERP Solutions", "Workflow Automation"],
    icon: Cpu,
    color: "from-emerald-500/10 to-emerald-600/10",
    shadowColor: "shadow-emerald-500/10",
    iconColor: "text-emerald-500"
  },
  {
    title: "Business Directory",
    desc: "Lifetime listing on our UAE-focused platform for maximum local visibility.",
    items: ["Local Exposure", "SEO Backlinks", "Traffic Growth"],
    icon: Layout,
    color: "from-green-500/10 to-green-600/10",
    shadowColor: "shadow-green-500/10",
    iconColor: "text-green-500"
  },
  {
    title: "Business Software",
    desc: "Digital tools to streamline your operations and improve customer experience.",
    items: ["Restaurant QR Menu", "Invoice & Billing", "Ongoing Support"],
    icon: FileText,
    color: "from-pink-500/10 to-pink-600/10",
    shadowColor: "shadow-pink-500/10",
    iconColor: "text-pink-500"
  }
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 relative bg-white dark:bg-black/20">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/20 dark:[mask-image:linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.5))] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            Our Ecosystem
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            Digital Products & <span className="text-brand-orange">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-brand-text/70 dark:text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed"
          >
            Empowering UAE businesses with a powerful digital arsenal. Our solutions are crafted for impact, designed for scale, and optimized for maximum ROI.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-brand-orange/20 transition-all duration-700 hover:shadow-[0_20px_80px_-20px_rgba(242,106,75,0.15)] flex flex-col h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${service.color.replace('/10', '/30')} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 border border-white dark:border-white/10 shadow-lg ${service.shadowColor}`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                
                <h3 className="text-3xl font-black mb-6 group-hover:text-brand-orange transition-colors tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className="text-brand-text/80 dark:text-gray-400 mb-8 leading-relaxed font-medium">
                  {service.desc}
                </p>
                
                <ul className="space-y-4 mb-auto">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-brand-charcoal/60 dark:text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-3 h-3 text-brand-orange" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-gray-100 dark:border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 flex items-center justify-between text-brand-orange font-bold text-sm uppercase tracking-widest">
                   Learn More <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none rounded-tr-[2.5rem]">
                 <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-orange/5 group-hover:bg-brand-orange/10 rounded-full transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
