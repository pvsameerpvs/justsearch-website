"use client";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Sparkles } from "lucide-react";
import { useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

type InquiryForm = {
  name: string;
  email: string;
  mobile: string;
  services: string[];
  message: string;
};

const SERVICE_OPTIONS = ["SEO/AEO", "Web Dev", "Mobile App", "CRM/ERP", "Lead Gen", "Other"];

const INITIAL_FORM_DATA: InquiryForm = {
  name: "",
  email: "",
  mobile: "",
  services: [],
  message: "",
};

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export function Contact() {
  const [formState, setFormState] = useState<SubmitState>("idle");
  const [formData, setFormData] = useState<InquiryForm>(INITIAL_FORM_DATA);
  const [formError, setFormError] = useState("");
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/justsearch_dir/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/justsearchuae/posts/?feedView=all", label: "LinkedIn" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formState === "success" || formState === "error") {
      setFormState("idle");
      setFormError("");
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service],
    }));
    if (formState === "success" || formState === "error") {
      setFormState("idle");
      setFormError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setFormState("error");
      setFormError("Email service is not configured. Please contact support.");
      return;
    }

    if (!formData.name || !formData.email || !formData.mobile || formData.services.length === 0 || !formData.message) {
      setFormState("error");
      setFormError("Please fill your name, email, mobile, at least one service, and message.");
      return;
    }

    setFormState("loading");
    setFormError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          name: formData.name,
          full_name: formData.name,
          from_email: formData.email,
          email: formData.email,
          reply_to: formData.email,
          mobile: formData.mobile,
          phone: formData.mobile,
          phone_number: formData.mobile,
          services: formData.services.join(", "),
          service: formData.services.join(", "),
          service_type: formData.services.join(", "),
          service_interested: formData.services.join(", "),
          message: formData.message,
          submitted_at: new Date().toISOString(),
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setFormState("success");
      setFormData(INITIAL_FORM_DATA);
      setTimeout(() => setFormState("idle"), 3000);
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setFormState("error");
      setFormError("Failed to send message. Please try again.");
    }
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
                { icon: Phone, label: "Call Us", value: "+971 554617275", sub: "Available 9am - 6pm GST" },
                { icon: Mail, label: "Email Us", value: "info@justsearch.com", sub: "Fast response within 24h" },
                {
                  icon: MapPin,
                  label: "Visit Us",
                  value: "Rega, Damas Tower - Al Maktoum Rd - Riggat Al Buteen - Dubai",
                  sub: "Office Address",
                },
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
              {socialLinks.map((item) => (
                <motion.a
                  key={item.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300"
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
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
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John"
                      className="h-16 rounded-2xl bg-gray-50 dark:bg-white/5 border-none focus-visible:ring-2 focus-visible:ring-brand-orange transition-all text-lg font-bold"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-black tracking-widest text-brand-orange/70">Business Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@company.com"
                      className="h-16 rounded-2xl bg-gray-50 dark:bg-white/5 border-none focus-visible:ring-2 focus-visible:ring-brand-orange transition-all text-lg font-bold"
                    />
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-brand-orange/70">Mobile Number</label>
                    <Input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      placeholder="+971 ***********"
                      className="h-16 rounded-2xl bg-gray-50 dark:bg-white/5 border-none focus-visible:ring-2 focus-visible:ring-brand-orange transition-all text-lg font-bold"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black tracking-widest text-brand-orange/70">Service Interested In</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {SERVICE_OPTIONS.map((s) => (
                      <button
                        type="button"
                        key={s}
                        aria-pressed={formData.services.includes(s)}
                        onClick={() => handleServiceToggle(s)}
                        className={`px-4 py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all transition-colors ${
                          formData.services.includes(s)
                            ? "border-brand-orange bg-brand-orange/10 text-brand-orange"
                            : "border-gray-100 dark:border-white/10 hover:border-brand-orange hover:bg-brand-orange/5"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black tracking-widest text-brand-orange/70">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your goals..."
                    className="w-full h-40 rounded-2xl bg-gray-50 dark:bg-white/5 border-none p-6 focus:ring-2 focus:ring-brand-orange outline-none transition-all text-lg font-bold resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full py-8 text-xl font-black rounded-2xl bg-gradient-brand shadow-xl shadow-brand-orange/30 disabled:opacity-50 group hover:scale-[1.02] transition-transform"
                >
                  {formState === "idle" && (
                    <span className="flex items-center">
                      Send Message{" "}
                      <Send className="ml-2 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  )}
                  {formState === "loading" && "Sending Expertly..."}
                  {formState === "success" && "Message Sent!"}
                  {formState === "error" && "Try Again"}
                </Button>
                {formState === "success" && (
                  <p className="text-sm font-bold text-green-600 dark:text-green-400 text-center">
                    Thanks. Your inquiry was sent successfully.
                  </p>
                )}
                {formState === "error" && (
                  <p className="text-sm font-bold text-red-600 dark:text-red-400 text-center">{formError}</p>
                )}
              </form>
            </div>
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
      </div>
    </section>
  );
}
