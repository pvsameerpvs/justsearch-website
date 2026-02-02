"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, Info, Sparkles, Zap, Shield, Crown, Star } from "lucide-react";
import { motion } from "framer-motion";

const websitePlans = [
  {
    name: "Basic Website",
    price: "299",
    desc: "Perfect for new businesses starting their digital journey.",
    features: [
      "Free Domain & Hosting",
      "Responsive Website",
      "Free SSL Certificate",
      "2 Professional Emails",
      "Up to 5 Pages",
      "Social Integration"
    ],
    popular: false,
    icon: Sparkles
  },
  {
    name: "Premium Website",
    price: "699",
    range: "699 - 2,000",
    desc: "Fully customized premium design for established businesses.",
    features: [
      "Everything in Basic",
      "Fully Customized Design",
      "Up to 15 Pages",
      "SEO-Friendly Structure",
      "Ongoing Maintenance",
      "Speed Optimization"
    ],
    popular: true,
    icon: Crown
  },
  {
    name: "E-Commerce",
    price: "Custom",
    desc: "Complete online selling solution designed for growth.",
    features: [
      "Everything in Premium",
      "Payment Gateway",
      "Up to 60 Products",
      "Inventory Management",
      "Google Analytics",
      "Monthly Health Checks"
    ],
    popular: false,
    icon: Zap
  }
];

const seoSocialPlans = [
  {
    name: "Growth Booster",
    price: "1,500",
    period: "/mo",
    features: [
      "SEO & AEO Fundamentals",
      "AI Search Optimization",
      "5-10 Quality Backlinks",
      "Google My Business",
      "Monthly Growth Report",
      "Voice Search Ready"
    ],
    icon: Star
  },
  {
    name: "Market Leader",
    price: "3,500",
    period: "/mo",
    save: "AED 1,000",
    features: [
      "Everything in Growth",
      "Advanced AEO Strategies",
      "Daily SEO Monitoring",
      "Premium Link Profile",
      "Social Commerce Setup",
      "Priority Support"
    ],
    popular: true,
    icon: Crown
  },
  {
    name: "Enterprise Sultan",
    price: "8,500",
    period: "/mo",
    save: "AED 5,000",
    features: [
      "Full AI Engine Dominance",
      "Multi-Brand Management",
      "Dedicated Director",
      "Omnichannel Strategy",
      "Full Social Media Mgmt",
      "Performance Guarantee"
    ],
    icon: Shield
  }
];

const customSoftwarePlans = [
  {
    name: "Mobile App",
    price: "4,000+",
    desc: "Custom iOS & Android applications.",
    features: [
      "Native & Cross-platform",
      "UI/UX Premium Design",
      "Firebase Integration",
      "Store Deployment",
      "Push Notifications",
      "API Development"
    ],
    icon: Smartphone
  },
  {
    name: "Custom CRM",
    price: "3,500+",
    desc: "Manage customer relationships.",
    features: [
      "Lead Management",
      "Sales Pipeline",
      "Automated Alerts",
      "Custom Dashboard",
      "Analytics & BI",
      "Role-Based Access"
    ],
    popular: true,
    icon: Shield
  },
  {
    name: "ERP Solution",
    price: "6,000+",
    desc: "Robust enterprise planning.",
    features: [
      "HR & Payroll",
      "Accounting & Finance",
      "Supply Chain",
      "Multi-Branch Support",
      "Data Migration",
      "Internal Support"
    ],
    icon: Zap
  },
  {
    name: "Workflow Automation",
    price: "1,500+",
    desc: "Streamline with intelligent AI.",
    features: [
      "Multi-App Integration",
      "Custom Logic Design",
      "24/7 Processing",
      "Error Monitoring",
      "Scalable Architecture",
      "ongoing Maintenance"
    ],
    icon: Workflow
  }
];

import { Smartphone, Workflow } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-brand-charcoal dark:bg-black text-white relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute top-0 left-0 w-full h-full">
         <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-orange/10 blur-[150px] animate-pulse" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-coral/10 blur-[150px] animate-pulse delay-1000" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-orange text-xs font-black uppercase tracking-[0.3em] mb-6"
          >
            Investment
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-5xl md:text-8xl font-black tracking-tighter mb-8"
          >
            PLANS & <span className="text-brand-orange">PRICING</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed"
          >
            Transparent pricing for non-linear growth. Choose a roadmap that aligns with your business velocity.
          </motion.p>
        </div>

        <Tabs defaultValue="websites" className="w-full">
          <div className="flex justify-center mb-20">
            <TabsList className="bg-white/5 border border-white/10 p-1.5 rounded-2x h-auto flex-wrap justify-center overflow-hidden backdrop-blur-3xl">
              <TabsTrigger value="websites" className="rounded-xl px-10 py-4 data-[state=active]:bg-gradient-brand data-[state=active]:text-white whitespace-nowrap font-bold text-sm transition-all duration-500">Websites</TabsTrigger>
              <TabsTrigger value="marketing" className="rounded-xl px-10 py-4 data-[state=active]:bg-gradient-brand data-[state=active]:text-white whitespace-nowrap font-bold text-sm transition-all duration-500">Growth Marketing</TabsTrigger>
              <TabsTrigger value="software" className="rounded-xl px-10 py-4 data-[state=active]:bg-gradient-brand data-[state=active]:text-white whitespace-nowrap font-bold text-sm transition-all duration-500">Software & Apps</TabsTrigger>
              <TabsTrigger value="directory" className="rounded-xl px-10 py-4 data-[state=active]:bg-gradient-brand data-[state=active]:text-white whitespace-nowrap font-bold text-sm transition-all duration-500">Directory</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="websites" className="focus-visible:outline-none">
            <div className="grid md:grid-cols-3 gap-10">
              {websitePlans.map((plan, idx) => (
                <PricingCard key={plan.name} plan={plan} idx={idx} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="marketing" className="focus-visible:outline-none">
            <div className="grid md:grid-cols-3 gap-10">
              {seoSocialPlans.map((plan, idx) => (
                <PricingCard key={plan.name} plan={plan} idx={idx} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="software" className="focus-visible:outline-none">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {customSoftwarePlans.map((plan, idx) => (
                <PricingCard key={plan.name} plan={plan} idx={idx} compact />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="directory" className="focus-visible:outline-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto glass-card p-12 rounded-[3rem] border-brand-orange/30 overflow-hidden relative"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[100px] -z-10" />
               <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                    <div className="bg-brand-orange text-white inline-block px-4 py-1.5 rounded-full font-black text-[10px] tracking-[0.2em] mb-6">LIFETIME DEAL</div>
                    <h3 className="text-4xl font-black mb-6 tracking-tight">Business Directory Listing</h3>
                    <p className="text-gray-400 mb-10 text-lg leading-relaxed font-medium">
                      Join the most active local directory in the UAE. Boost your local SEO and get discovered by thousands.
                    </p>
                    <div className="space-y-5 mb-8">
                       {[
                         "SEO Backlinks & Visibility",
                         "Targeted UAE Reach",
                         "Lead Generation Focus",
                         "Enhanced Brand Trust"
                       ].map(t => (
                         <div key={t} className="flex items-center gap-4">
                           <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center">
                             <Check className="w-3 h-3 text-brand-orange" />
                           </div>
                           <span className="font-bold text-gray-200">{t}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                  <div className="text-center p-12 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-xl group hover:border-brand-orange/50 transition-colors duration-700">
                    <div className="text-[10px] text-brand-orange uppercase font-black tracking-[0.3em] mb-4">Investment</div>
                    <div className="text-8xl font-black text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-700">50</div>
                    <div className="text-brand-orange font-black mb-8 uppercase tracking-widest text-sm">AED / LIFETIME</div>
                    <Button className="w-full bg-gradient-brand py-8 text-lg font-black rounded-2xl shadow-xl shadow-brand-orange/20 hover:scale-[1.02] transition-transform">Get Listed</Button>
                  </div>
               </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-12 glass-card rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto relative overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 font-sans" />
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-brand-orange/20 rounded-[1.5rem] flex items-center justify-center shrink-0 border border-brand-orange/20 animate-pulse">
                <Info className="w-10 h-10 text-brand-orange" />
              </div>
              <div>
                <h4 className="text-3xl font-black mb-2 tracking-tight">Custom Enterprise Bundles</h4>
                <p className="text-gray-400 text-lg font-medium">Looking for a tailored strategy? We offer bespoke bundles for high-growth firms.</p>
              </div>
            </div>
            <Button variant="outline" className="border-white/20 px-10 py-8 h-auto text-xl font-bold rounded-2xl hover:bg-brand-orange hover:border-brand-orange transition-all duration-300">Talk To Expert</Button>
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({ plan, idx, compact = false }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1, duration: 0.7 }}
      className={`relative p-10 rounded-[2.5rem] border ${plan.popular ? 'border-brand-orange/50 bg-white/10 shadow-[0_20px_60px_-15px_rgba(242,106,75,0.2)]' : 'border-white/10 bg-white/5'} transition-all duration-700 hover:scale-[1.02] flex flex-col group`}
    >
      {plan.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 shadow-xl shadow-brand-orange/30">
          <Sparkles className="w-3 h-3" /> Recommended
        </div>
      )}
      
      {plan.save && (
        <div className="absolute top-10 right-10 bg-green-500/20 text-green-500 border border-green-500/30 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
          Save {plan.save}
        </div>
      )}

      <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500`}>
        <plan.icon className="w-7 h-7 text-brand-orange" />
      </div>

      <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-brand-orange transition-colors">{plan.name}</h3>
      
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-5xl font-black tracking-tighter"><span className="text-brand-orange text-lg mr-1 tracking-normal font-bold">AED</span>{plan.price}</span>
        {plan.period && <span className="text-gray-500 font-bold ml-1">{plan.period}</span>}
      </div>

      {!compact && <p className="text-gray-400 mb-10 h-12 leading-relaxed font-medium">{plan.desc}</p>}
      
      <div className="space-y-4 mb-12 flex-grow">
        {plan.features.map((f: string) => (
          <div key={f} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-brand-orange" />
            </div>
            <span className="text-sm font-bold text-gray-400 group-hover:text-gray-200 transition-colors">{f}</span>
          </div>
        ))}
      </div>

      <Button className={`w-full py-8 text-lg font-black rounded-2xl ${plan.popular ? 'bg-gradient-brand shadow-xl shadow-brand-orange/20' : 'bg-white/10 hover:bg-white/20'} transition-all duration-300`}>
        Get Started
      </Button>
    </motion.div>
  );
}
