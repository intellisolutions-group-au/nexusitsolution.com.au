"use client";

import { motion } from "framer-motion";

const STATS = [
  { label: "PROJECTS DELIVERED", value: "240+" },
  { label: "SATISFIED CLIENTS", value: "180+" },
  { label: "EXPERIENCED DEVS", value: "85+" },
  { label: "AWARDS WON", value: "12" },
];

export default function StatsBelt() {
  return (
    <section className="bg-dark py-24 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/10 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center lg:items-start"
            >
              <span className="text-6xl lg:text-8xl font-sans font-black text-white tracking-tighter mb-4">
                {stat.value}
              </span>
              <div className="h-px w-8 bg-primary/40 mb-4" />
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
