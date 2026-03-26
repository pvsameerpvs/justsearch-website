"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Instagram, Monitor } from "lucide-react";

const websiteProjects = [
  { title: "Apollo Advance Medical Center", image: "/hero-1.png", demoUrl: "https://apolloadvancemedicalcenter.com/" },
  { title: "Green Pest Control", image: "/hero-2.png", demoUrl: "https://greenpestcontrol.ae/" },
  { title: "Nural Nahar Perfumes", image: "/hero-3.png", demoUrl: "https://nuralnaharperfumes.com/" },
  { title: "Queens Laundry", image: "/hero-4.png", demoUrl: "https://queens-laundry.com/" },
  { title: "Streamline Business Center", image: "/hero-5.png", demoUrl: "https://streamlinebusinesscenter.com/" },
  { title: "Tours By Abdullah", image: "/hero-6.png", demoUrl: "https://toursbyabdullah.com/" },
];

const reelProjects = [
  { link: "https://www.instagram.com/reel/DWN6rnhjMWo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", cover: "/reels/reel-01.jpg" },
  { link: "https://www.instagram.com/reel/DVwE7OlDBD4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", cover: "/reels/reel-02.jpg" },
  { link: "https://www.instagram.com/reel/DWS34tfoeVi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", cover: "/reels/reel-03.jpg" },
  { link: "https://www.instagram.com/reel/DTxdYEujDT8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", cover: "/reels/reel-04.jpg" },
  { link: "https://www.instagram.com/reel/DV8YyTSDT2V/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", cover: "/reels/reel-05.jpg" },
  { link: "https://www.instagram.com/reel/DWRjeE-jL9m/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", cover: "/reels/reel-06.jpg" },
  { link: "https://www.instagram.com/reel/DWRh4gPDYEo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", cover: "/reels/reel-07.jpg" },
  { link: "https://www.instagram.com/reel/DWRhkm5Df9v/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", cover: "/reels/reel-08.jpg" },
];

const posters = Array.from({ length: 44 }, (_, i) => `/poster-${i + 1}.jpeg`);

function splitIntoRows(items: string[], rowCount: number) {
  const rows: string[][] = [];
  let start = 0;
  const baseSize = Math.floor(items.length / rowCount);
  const remainder = items.length % rowCount;

  for (let i = 0; i < rowCount; i += 1) {
    const size = baseSize + (i < remainder ? 1 : 0);
    rows.push(items.slice(start, start + size));
    start += size;
  }

  return rows;
}

function PosterRow({ row, rowIndex }: { row: string[]; rowIndex: number }) {
  const moveRight = rowIndex % 2 === 0;
  const rowItems = [...row, ...row];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        animate={{ x: moveRight ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 34 + rowIndex * 4, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-4"
      >
        {rowItems.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative w-[140px] sm:w-[160px] md:w-[170px] aspect-[3/4] rounded-2xl border border-gray-200 dark:border-white/15 bg-white dark:bg-white/[0.04] overflow-hidden shrink-0 shadow-sm"
          >
            <Image
              src={src}
              alt={`Poster ${((i % row.length) + 1).toString()}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 140px, 170px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Works() {
  const posterRows = splitIntoRows(posters, 6);

  return (
    <section id="works" className="py-32 bg-white dark:bg-[#0d1117] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/20 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-black uppercase tracking-[0.25em] mb-6"
          >
            <Monitor className="w-4 h-4" />
            Creative Vault
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6"
          >
            WORK THAT MAKES
            <br />
            <span className="text-brand-orange">BRANDS UNMISSABLE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-text/70 dark:text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium"
          >
            From high-converting websites to scroll-stopping reels and striking poster campaigns, this is how we turn ideas into measurable digital momentum.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {["Web Experiences", "Social Reels", "Poster Campaigns"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/15 bg-white dark:bg-white/[0.04] text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] text-brand-text dark:text-gray-100"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="mb-24">
          <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-10">Website Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteProjects.map((project, index) => (
              <motion.a
                key={project.image}
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="group rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-3 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[16/9] rounded-[1.5rem] overflow-hidden bg-brand-charcoal">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between pt-4 px-1">
                  <span className="font-black text-sm tracking-wide">{project.title}</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-brand-orange">
                    Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-10">Instagram Reels</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reelProjects.map((reel, index) => (
              <motion.a
                key={reel.link}
                href={reel.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-[1.5rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-3 hover:border-brand-orange/40 transition-all duration-300"
              >
                <div className="relative aspect-[9/16] rounded-[1.1rem] overflow-hidden mb-4 bg-brand-charcoal">
                  <Image
                    src={reel.cover}
                    alt={`Instagram Reel ${index + 1}`}
                    fill
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 border border-white/30 flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange mb-2 px-1">
                  Reel {String(index + 1).padStart(2, "0")}
                </div>
                <div className="text-sm font-bold text-brand-charcoal dark:text-gray-200 group-hover:text-brand-orange transition-colors px-1 pb-1">
                  Watch on Instagram
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-10">Poster Designs</h3>
          <div className="space-y-4">
            {posterRows.map((row, rowIndex) => (
              <PosterRow key={rowIndex} row={row} rowIndex={rowIndex} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
