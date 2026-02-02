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
  Workflow
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    desc: "From basic to premium e-commerce solutions tailored for the UAE market.",
    items: ["Static & Dynamic", "E-Commerce", "CMS Integrated"],
    icon: Globe,
    color: "from-blue-500/10 to-blue-600/10",
    iconColor: "text-blue-500"
  },
  {
    title: "SEO & AEO",
    desc: "Dominate search results with next-gen Search & AI Engine Optimization. We ensure your business ranks on Google and appears in AI-driven results like ChatGPT, Perplexity, and Meta AI.",
    items: ["AI Search Visibility", "Keyword Strategy", "Technical SEO & Schema", "Voice Search Ready"],
    icon: Search,
    color: "from-orange-500/10 to-orange-600/10",
    iconColor: "text-brand-orange"
  },
  {
    title: "Social Media Marketing",
    desc: "Engage, influence, and convert across Instagram, Facebook, TikTok, and more.",
    items: ["Content Creation", "Reels & Videos", "Growth Reports"],
    icon: Share2,
    color: "from-purple-500/10 to-purple-600/10",
    iconColor: "text-purple-500"
  },
  {
    title: "Lead Generation",
    desc: "Targeted Meta and Google Ads campaigns designed for performance and ROI.",
    items: ["Meta Ads", "Google Ads", "A/B Testing"],
    icon: Zap,
    color: "from-yellow-500/10 to-yellow-600/10",
    iconColor: "text-yellow-500"
  },
  {
    title: "Mobile App Development",
    desc: "High-performance iOS & Android applications tailored for your business needs.",
    items: ["Native & Cross-platform", "UI/UX Design", "App Store Optimization"],
    icon: Smartphone,
    color: "from-indigo-500/10 to-indigo-600/10",
    iconColor: "text-indigo-500"
  },
  {
    title: "Workflow Automation",
    desc: "Connect your apps and automate repetitive tasks to save hundreds of hours.",
    items: ["App Integration", "Custom Logic", "24/7 Processing"],
    icon: Workflow,
    color: "from-cyan-500/10 to-cyan-600/10",
    iconColor: "text-cyan-500"
  },
  {
    title: "Custom Software (CRM/ERP)",
    desc: "Tailored software solutions to streamline your business operations and growth.",
    items: ["Custom CRM Systems", "ERP Solutions", "Workflow Automation"],
    icon: Cpu,
    color: "from-emerald-500/10 to-emerald-600/10",
    iconColor: "text-emerald-500"
  },
  {
    title: "Business Directory",
    desc: "Lifetime listing on our UAE-focused platform for maximum local visibility.",
    items: ["Local Exposure", "SEO Backlinks", "Traffic Growth"],
    icon: Layout,
    color: "from-green-500/10 to-green-600/10",
    iconColor: "text-green-500"
  },
  {
    title: "Business Software",
    desc: "Digital tools to streamline your operations and improve customer experience.",
    items: ["Restaurant QR Menu", "Invoice & Billing", "Ongoing Support"],
    icon: FileText,
    color: "from-pink-500/10 to-pink-600/10",
    iconColor: "text-pink-500"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold uppercase tracking-wider mb-4"
          >
            Our Offerings
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black">
            Products & <span className="text-brand-orange">Services</span>
          </h2>
          <p className="mt-6 text-brand-text max-w-2xl mx-auto text-lg">
            We understand the challenges UAE businesses face. Our end-to-end digital solutions are designed for performance and ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/5 transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 rounded-2xl ${service.color.replace('/10', '/20')} flex items-center justify-center mb-6 border border-white dark:border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors">{service.title}</h3>
              <p className="text-brand-text mb-6 leading-relaxed">
                {service.desc}
              </p>
              
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-semibold text-brand-charcoal/70 dark:text-gray-400">
                    <ShieldCheck className="w-4 h-4 text-brand-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
