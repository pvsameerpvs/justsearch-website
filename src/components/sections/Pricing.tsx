"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, Info, Sparkles } from "lucide-react";

const websitePlans = [
  {
    name: "Basic Website",
    price: "299",
    desc: "Perfect for new businesses starting their digital journey.",
    features: [
      "Free Domain",
      "Free Hosting",
      "Responsive Website",
      "Free SSL Certificate",
      "2 Professional Emails",
      "Free Firewall Security",
      "Up to 5 Pages",
      "Social Media Integration",
      "Contact Forms & CTA"
    ],
    popular: false
  },
  {
    name: "Premium Website",
    price: "699",
    range: "699 - 2,000",
    desc: "Fully customized premium design for established businesses.",
    features: [
      "Everything in Basic",
      "Fully Customized Design",
      "Virus & Malware Protection",
      "Up to 10–15 Pages",
      "SEO-Friendly Structure",
      "Ongoing Maintenance",
      "Premium Plugin Support",
      "Speed Optimization"
    ],
    popular: true
  },
  {
    name: "E-Commerce",
    price: "Custom",
    desc: "Complete online selling solution designed for growth.",
    features: [
      "Everything in Premium",
      "Payment Gateway Integration",
      "WhatsApp / Chatbot",
      "Up to 60 Product Uploads",
      "Google Analytics Setup",
      "Monthly Health Checks",
      "Inventory Management",
      "Theme Management"
    ],
    popular: false
  }
];

const seoSocialPlans = [
  {
    name: "Monthly",
    price: "1,000",
    period: "/mo",
    features: [
      "45 Mins Daily SEO Work",
      "Up to 50 Keywords",
      "Dedicated Project Manager",
      "Weekly Blog Posting",
      "3 Backlinks Per Week",
      "Social Media Management",
      "10-20 Guaranteed Enquiries",
      "Monthly Reports"
    ]
  },
  {
    name: "Quarterly",
    price: "2,500",
    period: "/3 mos",
    save: "AED 500",
    features: [
      "Everything in Monthly",
      "Extended Strategy Calls",
      "Deeper Competitor Analysis",
      "Enhanced Content Calendar",
      "Priority Support"
    ],
    popular: true
  },
  {
    name: "Yearly",
    price: "8,000",
    period: "/year",
    save: "AED 4,000",
    features: [
      "Complete Growth Suite",
      "Premium Backlink Profile",
      "Full Site Optimization",
      "Full Social Media Strategy",
      "Maximum ROI Focus",
      "Dedicated Account Manager"
    ]
  }
];

const customSoftwarePlans = [
  {
    name: "Mobile App",
    price: "4,000+",
    desc: "High-performance custom iOS & Android applications.",
    features: [
      "Native & Cross-platform",
      "UI/UX Design",
      "Firebase / Backend Integration",
      "App Store & Play Store Support",
      "Push Notifications",
      "API Development"
    ],
    popular: false
  },
  {
    name: "Custom CRM",
    price: "3,500+",
    desc: "Manage customer relationships and leads with ease.",
    features: [
      "Lead & Contact Management",
      "Sales Pipeline Tracking",
      "Automated Email Alerts",
      "Detailed Analytics & BI",
      "Custom Dashboard",
      "Role-Based Access"
    ],
    popular: true
  },
  {
    name: "ERP Solution",
    price: "6,000+",
    desc: "Robust enterprise resource planning for large organizations.",
    features: [
      "Inventory & Fulfillment",
      "HR & Payroll Management",
      "Accounting & Finance",
      "Supply Chain Integration",
      "Multi-Branch Support",
      "Data Migration & Training"
    ],
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-brand-charcoal dark:bg-black text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-orange/10 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-brand-coral/5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-black mb-6">Simple, Transparent <span className="text-brand-orange">Pricing</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the plan that fits your business goals. All plans include our premium service commitment.
          </p>
        </div>

        <Tabs defaultValue="websites" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white/5 border border-white/10 p-1 rounded-2xl h-auto flex-wrap justify-center">
              <TabsTrigger value="websites" className="rounded-xl px-8 py-3 data-[state=active]:bg-brand-orange data-[state=active]:text-white whitespace-nowrap">Websites</TabsTrigger>
              <TabsTrigger value="marketing" className="rounded-xl px-8 py-3 data-[state=active]:bg-brand-orange data-[state=active]:text-white whitespace-nowrap">SEO & Social</TabsTrigger>
              <TabsTrigger value="software" className="rounded-xl px-8 py-3 data-[state=active]:bg-brand-orange data-[state=active]:text-white whitespace-nowrap">Software & Apps</TabsTrigger>
              <TabsTrigger value="directory" className="rounded-xl px-8 py-3 data-[state=active]:bg-brand-orange data-[state=active]:text-white whitespace-nowrap">Directory</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="websites" className="focus-visible:outline-none">
            <div className="grid md:grid-cols-3 gap-8">
              {websitePlans.map((plan) => (
                <div key={plan.name} className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-brand-orange bg-white/5 shadow-2xl shadow-brand-orange/10' : 'border-white/10 bg-white/5'} transition-all hover:translate-y-[-10px]`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <Sparkles className="w-3 h-3" /> Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-black tracking-tight"><span className="text-brand-orange text-sm mr-1">AED</span>{plan.price}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-8 h-10">{plan.desc}</p>
                  <div className="space-y-4 mb-8">
                    {plan.features.map(f => (
                      <div key={f} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-brand-orange shrink-0" />
                        <span className="text-sm text-gray-300">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full py-6 rounded-2xl ${plan.popular ? 'bg-gradient-brand' : 'bg-white/10 hover:bg-white/20'}`}>Get This Plan</Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="marketing" className="focus-visible:outline-none">
            <div className="grid md:grid-cols-3 gap-8">
              {seoSocialPlans.map((plan) => (
                <div key={plan.name} className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-brand-orange bg-white/10 shadow-2xl shadow-brand-orange/10' : 'border-white/10 bg-white/5'} transition-all hover:translate-y-[-10px]`}>
                  {plan.save && (
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase">
                      Save {plan.save}
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name} Plan</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                     <span className="text-3xl font-black tracking-tight"><span className="text-brand-orange text-sm mr-1">AED</span>{plan.price}</span>
                     <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <div className="space-y-4 mb-8">
                    {plan.features.map(f => (
                      <div key={f} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-brand-orange shrink-0" />
                        <span className="text-sm text-gray-300">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full py-6 rounded-2xl ${plan.popular ? 'bg-gradient-brand' : 'bg-white/10 hover:bg-white/20'}`}>Start Now</Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="software" className="focus-visible:outline-none">
            <div className="grid md:grid-cols-3 gap-8">
              {customSoftwarePlans.map((plan) => (
                <div key={plan.name} className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-brand-orange bg-white/10 shadow-2xl shadow-brand-orange/10' : 'border-white/10 bg-white/5'} transition-all hover:translate-y-[-10px]`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <Sparkles className="w-3 h-3" /> Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                     <span className="text-3xl font-black tracking-tight"><span className="text-brand-orange text-sm mr-1">AED</span>{plan.price}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-8 h-10">{plan.desc}</p>
                  <div className="space-y-4 mb-8">
                    {plan.features.map(f => (
                      <div key={f} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-brand-orange shrink-0" />
                        <span className="text-sm text-gray-300">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full py-6 rounded-2xl ${plan.popular ? 'bg-gradient-brand' : 'bg-white/10 hover:bg-white/20'}`}>Request Quote</Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="directory" className="focus-visible:outline-none">
            <div className="max-w-4xl mx-auto glass shadow-2xl p-10 rounded-3xl border-brand-orange/50">
               <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="bg-brand-orange/20 text-brand-orange inline-block px-3 py-1 rounded-lg font-bold text-sm mb-4">LIFETIME ACCESS</div>
                    <h3 className="text-3xl font-black mb-4">Business Directory Listing</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                      Showcase your business on our UAE-focused digital directory. More Visibility. More Traffic. More Leads.
                    </p>
                    <div className="space-y-4 mb-8">
                       {[
                         "Increased Online Visibility",
                         "Targeted Local Exposure",
                         "SEO Benefits (Backlinks)",
                         "Promotional Opportunities"
                       ].map(t => (
                         <div key={t} className="flex items-center gap-3">
                           <Check className="w-5 h-5 text-brand-orange" />
                           <span className="font-semibold">{t}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                  <div className="text-center p-8 bg-white/5 rounded-3xl border border-white/10">
                    <div className="text-sm text-gray-500 uppercase font-black tracking-widest mb-2">Lifetime Plan</div>
                    <div className="text-6xl font-black text-brand-orange mb-2">AED 50</div>
                    <div className="text-sm text-gray-400 mb-8">One-time payment, lifetime listing</div>
                    <Button className="w-full bg-gradient-brand py-8 text-lg font-bold rounded-2xl">Get Listed Today</Button>
                  </div>
               </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-20 p-8 glass-card rounded-3xl border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-brand-orange/20 rounded-2xl flex items-center justify-center shrink-0">
                <Info className="w-8 h-8 text-brand-orange" />
              </div>
              <div>
                <h4 className="text-xl font-bold">Need a Custom Bundle?</h4>
                <p className="text-gray-400">We offer tailored digital marketing bundles ranging from AED 1,500 to AED 8,000.</p>
              </div>
            </div>
            <Button variant="outline" className="border-white/20 px-8 py-6 h-auto text-lg">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
}
