"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type TeamMember = {
  name: string;
  role?: string;
  photo: string;
};

const teamGroups: { title: string; members: TeamMember[] }[] = [
  {
    title: "Leadership",
    members: [{ name: "Rijo Vargese", role: "Co Founder", photo: "/team/rijo.png" }],
  },
  {
    title: "Admin HR",
    members: [{ name: "Pooja", photo: "/team/pooja.jpeg" }],
  },
  {
    title: "Business Development",
    members: [
      { name: "Samuel", photo: "/team/Samuel.png" },
      { name: "Vineet", photo: "/team/Vineet.png" },
      { name: "Sewmini", photo: "/team/Sewmini.png" },
      { name: "Affan", photo: "/team/affan.png" },
      
    ],
  },
  {
    title: "Developer Team",
    members: [
      { name: "Shon", photo: "/team/shon.jpg" },
      { name: "Sameer", photo: "/team/sameer.jpeg" },
      { name: "Nida", photo: "/team/nida.jpg" },
      { name: "Alphonsa", photo: "/team/alphonsa.jpg" },
    ],
  },
  {
    title: "Creators Team",
    members: [
      { name: "Noufal", photo: "/team/noufal.jpeg" },
      { name: "Tahera", photo: "/team/tahera.jpeg" },
      { name: "Harish", photo: "/team/hareesh.jpeg" },
      { name: "Yazeen", photo: "/team/yazeen.jpg" },
      { name: "Sakib", photo: "/team/sakib.jpg" },
    ],
  },
   {
    title: "Office Cat",
    members: [
      { name: "Bob", photo: "/team/bob.jpeg" },
     
    ],
  },
];

function TeamPassportCard({ member }: { member: TeamMember }) {
  const [imageError, setImageError] = useState(false);
  const initials = member.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      className="rounded-[1.9rem] border border-white/15 bg-white/[0.08] p-5 shadow-xl"
    >
      <div className="relative aspect-[4/5] rounded-[1.4rem] overflow-hidden border border-white/10 bg-white/10">
        {imageError ? (
          <div className="h-full w-full flex items-center justify-center text-6xl font-black text-brand-orange/45">{initials}</div>
        ) : (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover object-top"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="pt-5 text-center">
        <h4 className="text-xl md:text-2xl font-black tracking-tight text-white">{member.name}</h4>
        {member.role ? (
          <p className="mt-2 text-xs font-black uppercase tracking-[0.2em] text-brand-orange">{member.role}</p>
        ) : null}
      </div>
    </motion.div>
  );
}

export function Team() {
  return (
    <section id="team" className="py-32 bg-brand-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1320] via-brand-charcoal to-[#0f1320]" />
      <div className="absolute top-0 right-0 w-[60%] h-[50%] bg-brand-orange/15 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-brand-coral/15 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-4">
            <span className="text-white">Meet </span>
            <span className="text-brand-orange">Our Team</span>
          </h2>
          <p className="text-slate-200 text-base md:text-lg font-medium max-w-3xl mx-auto">
            Our talented professionals are dedicated to bringing your digital vision to life with creativity, expertise, and passion.
          </p>
        </div>
       

        <div className="space-y-12">
          {teamGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-6 text-white">{group.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {group.members.map((member) => (
                  <TeamPassportCard key={`${group.title}-${member.name}`} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
