"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const clientLogos = Array.from({ length: 25 }, (_, i) => `/logo-${i + 1}.png`);

function LogoTile({ src, index }: { src: string; index: number }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-40 h-24 rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 shadow-sm flex items-center justify-center px-2 shrink-0">
      {hasError ? (
        <span className="text-[10px] font-black uppercase tracking-widest text-brand-text/50 dark:text-gray-400">
          Client {index + 1}
        </span>
      ) : (
        <div className="relative w-full h-20">
          <Image
            src={src}
            alt={`Client ${index + 1}`}
            fill
            className="object-contain object-center"
            sizes="160px"
            onError={() => setHasError(true)}
          />
        </div>
      )}
    </div>
  );
}

function MarqueeRow({ moveRight = false }: { moveRight?: boolean }) {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        animate={{ x: moveRight ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-6 py-2"
      >
        {logos.map((logo, i) => (
          <LogoTile key={`${logo}-${i}`} src={logo} index={i % 25} />
        ))}
      </motion.div>
    </div>
  );
}

export function TrustedClients() {
  return (
    <section id="trusted-clients" className="py-24 bg-white dark:bg-[#0d1117] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/20 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="uniform-header-kicker mb-5">
            Trusted Clients
          </div>
          <h2 className="uniform-header-title uniform-header-title-light mb-4">
            CLIENTS WHO <span className="text-brand-orange">TRUST US</span>
          </h2>
          <p className="uniform-header-description text-brand-text/70 dark:text-gray-300 max-w-3xl mx-auto">
            25+ client brands across healthcare, services, retail, travel, and local businesses.
          </p>
        </div>

        <div className="space-y-6">
          <MarqueeRow moveRight />
          <MarqueeRow />
        </div>
      </div>
    </section>
  );
}
