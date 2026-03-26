"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AboutHeroAnimation from "./AboutHeroAnimation";

interface BlogHeroProps {
  title: string;
  description: string;
}

export default function BlogHero({ title, description }: BlogHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-black/5 pt-32 pb-24 bg-bg-subtle">
      {/* Background Layer with Premium Glassy Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/nexus_innovation_workspace.png"
          alt="Service Insights Blog"
          fill
          priority
          className="object-cover opacity-60"
        />
        {/* Layer 1: Soft Glassmorphism Blur */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />

        {/* Layer 2: Light Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-white/40 via-transparent to-white/20 opacity-90" />

        {/* Layer 3: Subtle Dark Overlay for Contrast (Requested) */}
        <div className="absolute inset-0 bg-dark/5" />
      </div>

      {/* Network Animation Overlay */}
      <div className="absolute inset-0 z-1 opacity-20">
        <AboutHeroAnimation />
      </div>

      {/* Content Layer */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="h-px w-10 bg-primary/40 shadow-[0_0_8px_rgba(124,58,237,0.3)]" />
            <span className="font-mono text-[11px] tracking-[0.4em] uppercase text-primary font-bold">
              Premium Tech Insights
            </span>
            <div className="h-px w-10 bg-primary/40 shadow-[0_0_8px_rgba(124,58,237,0.3)]" />
          </motion.div>

          {/* Headline with Character Reveal Animation */}
          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-sans font-black text-dark mb-10 tracking-tighter leading-[0.85]">
            {["Insights", "That", "Power", "Digital", "Growth"].map((word, i) => (
              <span key={i} className="inline-block whitespace-nowrap mr-[0.3em] overflow-hidden">
                {word.split("").map((char, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: (i * 0.1) + (j * 0.03) + 0.3,
                      ease: [0.2, 1, 0.3, 1]
                    }}
                    className={`inline-block ${word === "Insights" || word === "Growth" ? "text-premium-gradient" : ""}`}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Discover the strategies, technologies, and innovative solutions that drive measurable success in the digital era.
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative Curved Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none h-20 pointer-events-none opacity-40">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-full fill-white"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.11,1200,41.47V0Z" opacity=".1"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z"></path>
        </svg>
      </div>
    </section>
  );
}
