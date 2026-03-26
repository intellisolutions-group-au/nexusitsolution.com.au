"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const headline = "Designed to Elevate Digital Innovation.";

export default function CreativeHero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const yTranslate = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-black"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Nexus IT Solution Background"
          fill
          priority
          className="object-cover opacity-70"
        />
        {/* Soft Glassmorphism Blur Layer */}
        <div className="absolute inset-0 z-1 backdrop-blur-[1px] bg-white/20" />
        {/* Light Gradient Overlay – white to transparent */}
        <div className="absolute inset-0 z-2 bg-linear-to-b from-white/25 via-transparent to-white/10 opacity-80" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <motion.div
          style={{ opacity, y: yTranslate }}
          className="max-w-5xl mx-auto"
        >
          {/* Eyebrow / Location Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white/20 bg-white/10 overflow-hidden backdrop-blur-sm">
                  <div className="w-full h-full bg-linear-to-br from-primary/40 to-secondary/40" />
                </div>
              ))}
            </div>
            <div className="h-px w-12 bg-white/20" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/60">
              Melbourne · Sydney · Dubai
            </span>
          </motion.div> */}

          {/* Headline with character reveal */}
          <h1 className="text-[12vw] sm:text-[10vw] lg:text-[7.5rem] font-sans font-extrabold leading-[0.9] tracking-tight text-dark mb-10">
            {headline.split(" ").map((word, i) => (
              <span key={i} className="inline-block whitespace-nowrap mr-[0.3em]">
                {word.split("").map((char, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, y: 80, rotateX: -40 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: (i * 0.1) + (j * 0.03),
                      ease: [0.2, 1, 0.3, 1]
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-dark/70 text-xl lg:text-2xl max-w-xl leading-relaxed"
            >
              Nexus IT Solution specialises in cutting-edge mobile, web & software development.
              We transform your vision into powerful digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-linear-to-r from-purple-600 to-cyan-500 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/40 flex items-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="group px-10 py-5 bg-transparent border border-dark/30 rounded-2xl text-dark font-bold text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-linear-to-r hover:from-purple-600 hover:to-cyan-500 hover:border-transparent hover:text-white"
              >
                Our Services
              </Link>
            </motion.div>
          </div>

          {/* Mini Stats Grid */}
          {/* <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
            {[
              { label: "Founded", value: "2018" },
              { label: "Projects", value: "240+" },
              { label: "Awards", value: "12" },
              { label: "Team", value: "85+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + i * 0.1 }}
              >
                <div className="font-mono text-[9px] uppercase tracking-widest text-primary mb-2">{stat.label}</div>
                <div className="text-3xl font-extrabold text-white tracking-tighter">{stat.value}</div>
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
