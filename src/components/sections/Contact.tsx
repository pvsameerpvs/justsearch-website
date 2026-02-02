"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Rijo Varghese",
    role: "Business Development Manager",
    phone: "+971 55 615 2440",
    email: "mehran@justsearch.ae",
    image: "M"
  },
  {
    name: "Samuel R",
    role: "Digital Sales Consultant",
    phone: "+971 55 499 8176",
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
    phone: "+971 58 589 9545",
    email: "sewmini@justsearch.ae",
    image: "S"
  },
  {
    name: "Mohd Affan",
    role: "Digital Sales Consultant",
    phone: "+971 52 648 0723",
    email: "affan@justsearch.ae",
    image: "M"
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
  return (
    <section id="contact" className="py-24 bg-brand-light-grey dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Get in <span className="text-brand-orange">Touch</span></h2>
          <p className="text-brand-text max-w-2xl mx-auto text-lg">
            Ready to grow? Contact our team of experts for a free consultation and customized strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 glass-card p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6 mb-12">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">Office</div>
                    <div className="font-bold">Dubai, United Arab Emirates</div>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">Main Line</div>
                    <div className="font-bold">+971 55 615 2440</div>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">Email</div>
                    <div className="font-bold">info@justsearch.ae</div>
                  </div>
               </div>
            </div>

            <h4 className="font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4">
               {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                 <a key={i} href="#" className="w-12 h-12 rounded-2xl border border-brand-orange/20 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold mb-8">Out Team of Experts</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-brand-charcoal border border-gray-100 dark:border-white/5 hover:border-brand-orange/30 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xl font-bold">
                      {member.image}
                    </div>
                    <div>
                      <h4 className="font-bold group-hover:text-brand-orange transition-colors">{member.name}</h4>
                      <p className="text-xs text-brand-text">{member.role}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-white/5 space-y-3">
                    <a href={`tel:${member.phone}`} className="flex items-center gap-3 text-sm hover:text-brand-orange transition-colors font-medium">
                      <Phone className="w-4 h-4 text-brand-orange" /> {member.phone}
                    </a>
                    <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-sm hover:text-brand-orange transition-colors font-medium">
                      <Mail className="w-4 h-4 text-brand-orange" /> {member.email}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
