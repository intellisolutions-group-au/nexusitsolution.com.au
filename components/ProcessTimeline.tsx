"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Palette, Code, Rocket } from "lucide-react";
import ProcessVisuals from "./ProcessVisuals";

const steps = [
  {
    icon: Lightbulb,
    title: "Plan & Strategy",
    description: "We define goals, research market trends, and map out the strategic path for your digital product.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Palette,
    title: "Design & Prototype",
    description: "Crafting beautiful, intuitive interfaces that prioritize user experience and brand identity.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Code,
    title: "Agile Development",
    description: "Our engineers build scalable, clean-code solutions using modern tech stacks and agile methodologies.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "Seamless deployment followed by continuous optimization to ensure long-term success.",
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-36 bg-slate-light overflow-hidden relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
          >
            Our Workflow
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-black text-dark leading-[1.1] tracking-tight"
          >
            How We Bring Your <br />
            <span className="text-primary italic">Vision to Life</span>
          </motion.h2>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Animated Central Path (Dekstop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" aria-hidden="true">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-primary origin-top shadow-[0_0_20px_rgba(0,87,255,0.3)]"
            />
          </div>

          <div className="space-y-24 md:space-y-48">
            {steps.map((step, i) => {
              const IconComp = step.icon;
              const isEven = i % 2 === 0;

              return (
                <div key={i} className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Content Side */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className={`flex flex-col ${isEven ? "md:text-right md:items-end" : "md:order-last"}`}
                    >
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-white border border-slate-100 shadow-xl group text-primary`}>
                        <IconComp size={28} className="group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="inline-block px-3 py-1 bg-primary/5 text-primary text-[10px] font-black tracking-widest uppercase mb-4 rounded-full">Step 0{i + 1}</div>
                      <h3 className="text-2xl md:text-4xl font-black text-dark mb-4">{step.title}</h3>
                      <p className="text-slate-500 text-lg max-w-md leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                    {/* Visual Side */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, rotate: isEven ? 2 : -2 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className={`relative aspect-video rounded-[3rem] bg-white/50 backdrop-blur-xl border border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden group glass-premium ${isEven ? "md:order-last" : ""}`}
                    >
                      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                      <ProcessVisuals step={i} />

                      {/* Floating Number Accent */}
                      <div className="absolute -bottom-10 -right-10 text-[12rem] font-black text-dark/3 select-none uppercase leading-none italic">
                        {`0${i + 1}`}
                      </div>
                    </motion.div>
                  </div>

                  {/* Step Marker Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white bg-primary shadow-[0_0_20px_rgba(0,87,255,0.4)] z-20 hidden md:block"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
