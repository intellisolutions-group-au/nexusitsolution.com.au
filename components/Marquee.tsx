"use client";

import { motion } from "framer-motion";

const TECH_STRINGS = [
  "MOBILE APP DEVELOPMENT",
  "UI/UX DESIGN",
  "WEB SOLUTIONS",
  "AI & MACHINE LEARNING",
  "BLOCKCHAIN",
  "CLOUD COMPUTING",
  "IOT SOLUTIONS",
  "SOFTWARE ARCHITECTURE"
];

export default function Marquee() {
  return (
    <div className="py-20 overflow-hidden bg-bg-subtle border-y border-black/5 select-none">
      <motion.div
        animate={{
          x: [0, -1035],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-16"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-16 items-center">
            {TECH_STRINGS.map((text, j) => (
              <div key={j} className="flex items-center gap-16">
                <span className="text-[5rem] lg:text-[7rem] font-sans font-black tracking-tighter text-dark/5 stroke-dark/20 stroke-1">
                  {text}
                </span>
                <div className="w-4 h-4 rounded-full bg-primary/20" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
