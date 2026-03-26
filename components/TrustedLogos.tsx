"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  { name: "Microsoft", abbr: "MS" },
  { name: "Google", abbr: "GG" },
  { name: "Amazon", abbr: "AWS" },
  { name: "Salesforce", abbr: "SF" },
  { name: "Oracle", abbr: "ORC" },
  { name: "IBM", abbr: "IBM" },
  { name: "Adobe", abbr: "ADO" },
  { name: "Shopify", abbr: "SHP" },
];

// Duplicate for seamless loop
const allClients = [...clients, ...clients];

export default function TrustedLogos() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-12 md:py-16 bg-white border-t border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-semibold text-slate-400 uppercase tracking-[0.25em]"
        >
          Trusted by industry leaders worldwide
        </motion.p>
      </div>

      {/* Infinite Scroll Track */}
      <div className="relative overflow-hidden w-full">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-linear-to-r from-white to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-linear-to-l from-white to-transparent pointer-events-none" />

        <div className="flex group">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] gap-8 shrink-0">
            {allClients.map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-3 px-8 py-3 rounded-xl bg-slate-50 border border-slate-100 shrink-0 w-44 h-16 hover:border-primary/20 hover:bg-primary/5 transition-colors duration-300 group/logo"
              >
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                  <span className="text-white text-[9px] font-black tracking-wide">{client.abbr}</span>
                </div>
                <span className="text-slate-700 font-bold text-sm group-hover/logo:text-primary transition-colors duration-300">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
          {/* Second set for seamless infinite loop */}
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] gap-8 shrink-0 ml-8" aria-hidden>
            {allClients.map((client, i) => (
              <div
                key={`dup-${i}`}
                className="flex items-center justify-center gap-3 px-8 py-3 rounded-xl bg-slate-50 border border-slate-100 shrink-0 w-44 h-16 hover:border-primary/20 hover:bg-primary/5 transition-colors duration-300 group/logo"
              >
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                  <span className="text-white text-[9px] font-black tracking-wide">{client.abbr}</span>
                </div>
                <span className="text-slate-700 font-bold text-sm group-hover/logo:text-primary transition-colors duration-300">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
