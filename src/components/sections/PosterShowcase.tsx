"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
            className="relative w-[150px] sm:w-[170px] md:w-[180px] aspect-[3/4] rounded-2xl border border-gray-200 dark:border-white/15 bg-white dark:bg-white/[0.04] overflow-hidden shrink-0 shadow-sm"
          >
            <Image
              src={src}
              alt={`Poster ${((i % row.length) + 1).toString()}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 150px, 180px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function PosterShowcase() {
  const rows = splitIntoRows(posters, 6);

  return (
    <section id="poster-showcase" className="py-24 bg-white dark:bg-[#0d1117] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/20 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-[10px] font-black uppercase tracking-[0.25em] mb-5">
            Creative Posters
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            CREATIVE POSTER <span className="text-brand-orange">GALLERY</span>
          </h2>
          <p className="text-brand-text/70 dark:text-gray-300 font-medium max-w-3xl mx-auto">
            Social media design work in 6 moving lines. Line 1 moves right, line 2 moves left, alternating across all rows.
          </p>
        </div>

        <div className="space-y-4">
          {rows.map((row, rowIndex) => (
            <PosterRow key={rowIndex} row={row} rowIndex={rowIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}
