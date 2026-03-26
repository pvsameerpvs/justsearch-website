"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, BadgeCheck, BriefcaseBusiness, FileText } from "lucide-react";

const highlights = [
  "Services and growth frameworks",
  "Case studies and delivery process",
  "Commercial model and execution plan",
];

export function PortfolioDownload() {
  return (
    <section id="portfolio" className="py-28 bg-brand-charcoal dark:bg-[#0d1117] text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-orange/20 blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-brand-coral/15 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="uniform-header-kicker-dark mb-6">
              <BriefcaseBusiness className="w-4 h-4" />
              Company Portfolio
            </div>
            <h2 className="uniform-header-title uniform-header-title-dark mb-6">
              DOWNLOAD  OUR
              <br />
              <span className="text-brand-orange">PORTFOLIO</span>
            </h2>
            <p className="uniform-header-description text-gray-200/90 max-w-2xl mb-8">
              Get the official JustSearch company portfolio with our services, delivery approach, case studies, and execution model.
            </p>

            <a
              href="/Just%20Search%20Portfolio.pdf"
              download="Just-Search-Portfolio.pdf"
              className="inline-flex items-center gap-3 bg-gradient-brand text-white px-8 py-4 rounded-2xl font-black uppercase tracking-wider text-xs shadow-xl shadow-brand-orange/30 hover:scale-[1.02] transition-transform"
            >
              Download PDF
              <ArrowDownToLine className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-xl p-8 md:p-10"
          >
            <div className="flex items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/25 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <div className="text-white font-black">Just Search Portfolio</div>
                  <div className="text-gray-300 text-xs font-bold uppercase tracking-wider">PDF • 2.0 MB</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0">
                    <BadgeCheck className="w-3.5 h-3.5 text-brand-orange" />
                  </div>
                  <span className="text-gray-200/90 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
