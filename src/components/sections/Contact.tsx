"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter, Sparkles } from "lucide-react";
import { useState } from "react";

const team = [
  {
    name: "Rijo Varghese",
    role: "Business Development Manager",
    phone: "+971 55 615 2440",
    email: "mehran@justsearch.ae",
    image: "R"
  },
  {
    name: "Samuel D",
    role: "Digital Sales Consultant",
    phone: "+971 52 534 8311",
    email: "samuel@justsearch.ae",
    image: "S"
  },
  {
    name: "Mehran A",
    role: "Digital Sales Consultant",
    phone: "+971 55 615 2440",
    email: "mehran@justsearch.ae",
    image: "M"
  },
  {
    name: "Sewmini D",
    role: "Digital Sales Consultant",
    phone: "+971 54 220 5493",
    email: "sewmini@justsearch.ae",
    image: "S"
  },
  {
    name: "Maya",
    role: "Digital Sales Consultant",
    phone: "+971 58 538 8122",
    email: "maya@justsearch.ae",
    image: "M"
  }
];

export function Contact() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setTimeout(() => setFormState("success"), 1500);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-white dark:bg-black/20">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-100 dark:bg-grid-slate-700/20 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-black uppercase tracking-[0.3em] mb-6"
            >
              Get In Touch
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-8xl font-black mb-8 tracking-tighter"
            >
              LET&apos;S <span className="text-brand-orange">TALK.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-brand-text/70 dark:text-gray-400 mb-12 max-w-xl leading-relaxed font-medium"
            >
              Ready to dominate the UAE market? Our experts are here to architect your digital transformation.
            </motion.p>

            <div className="space-y-12 mb-16">
              {[
                { icon: Phone, label: "Call Us", value: "+971 55 615 2440", sub: "Available 9am - 6pm GST" },
                { icon: Mail, label: "Email Us", value: "hello@justsearch.ae", sub: "Fast response within 24h" },
                { icon: MapPin, label: "Visit Us", value: "Business Bay, Dubai, UAE", sub: "Creative Hub" }
              ].map((item, i) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-lg flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-500">
                    <item.icon className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-brand-orange mb-1">{item.label}</div>
                    <div className="text-2xl font-black tracking-tight">{item.value}</div>
                    <div className="text-sm text-brand-text/60 dark:text-gray-500 font-bold">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
               {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                 <motion.button
                   key={i}
                   whileHover={{ y: -5, scale: 1.1 }}
                   className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300"
                 >
                   <Icon className="w-5 h-5" />
                 </motion.button>
               ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative p-1 glass-card rounded-[3rem] shadow-2xl"
          >
            <div className="bg-white dark:bg-black/50 rounded-[2.9rem] p-12">
               <h3 className="text-3xl font-black mb-10 tracking-tight">Project Inquiry</h3>
               <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-black tracking-widest text-brand-orange/70">Full Name</label>
                      <Input placeholder="John Doe" className="h-16 rounded-2xl bg-gray-50 dark:bg-white/5 border-none focus-visible:ring-2 focus-visible:ring-brand-orange transition-all text-lg font-bold" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-black tracking-widest text-brand-orange/70">Business Email</label>
                      <Input placeholder="john@company.com" className="h-16 rounded-2xl bg-gray-50 dark:bg-white/5 border-none focus-visible:ring-2 focus-visible:ring-brand-orange transition-all text-lg font-bold" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-black tracking-widest text-brand-orange/70">Service Interested In</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                       {["SEO/AEO", "Web Dev", "Mobile App", "CRM/ERP", "Lead Gen", "Other"].map(s => (
                         <button type="button" key={s} className="px-4 py-3 rounded-xl border border-gray-100 dark:border-white/10 text-[10px] font-black uppercase tracking-widest hover:border-brand-orange hover:bg-brand-orange/5 transition-all transition-colors">{s}</button>
                       ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-black tracking-widest text-brand-orange/70">Message</label>
                    <textarea 
                      placeholder="Tell us about your goals..." 
                      className="w-full h-40 rounded-2xl bg-gray-50 dark:bg-white/5 border-none p-6 focus:ring-2 focus:ring-brand-orange outline-none transition-all text-lg font-bold resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={formState === "loading" || formState === "success"}
                    className="w-full py-8 text-xl font-black rounded-2xl bg-gradient-brand shadow-xl shadow-brand-orange/30 disabled:opacity-50 group hover:scale-[1.02] transition-transform"
                  >
                    {formState === "idle" && <span className="flex items-center">Send Message <Send className="ml-2 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>}
                    {formState === "loading" && "Sending Expertly..."}
                    {formState === "success" && "Message Received!"}
                  </Button>
               </form>
            </div>
            {/* Absolute element */}
            <div className="absolute -bottom-10 -right-10 p-8 glass-card rounded-[2rem] border-brand-orange/20 animate-float z-20">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-xl font-black">99.9%</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Response Rate</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mt-48">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-4">OUR <span className="text-brand-orange">ELITE</span> TEAM</h2>
            <p className="text-brand-text/60 dark:text-gray-400 font-bold uppercase tracking-[0.2em] text-sm">Growth Architects & Digital Strategists</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group text-center"
              >
                <div className="relative mb-6 aspect-square rounded-[2rem] overflow-hidden bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 group-hover:border-brand-orange/30 transition-all duration-500 shadow-xl group-hover:shadow-brand-orange/5">
                   <div className="absolute inset-0 flex items-center justify-center text-7xl font-black text-brand-orange/20 group-hover:text-brand-orange/40 group-hover:scale-150 transition-all duration-700">
                     {member.image}
                   </div>
                   <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-brand-orange to-brand-coral text-white">
                      <div className="text-[10px] font-black uppercase tracking-widest mb-1">Expert</div>
                      <div className="text-[8px] font-bold truncate">{member.email}</div>
                   </div>
                </div>
                <h4 className="text-lg font-black tracking-tight group-hover:text-brand-orange transition-colors duration-300">{member.name}</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-orange/70">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
