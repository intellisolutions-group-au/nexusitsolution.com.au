"use client";

import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Zap, Layout, ShieldCheck, ChevronRight } from "lucide-react";

export default function SuccessStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const featureButtons = [
    { label: "Agile Approach", icon: <Zap size={42} strokeWidth={1.5} /> },
    { label: "Custom Solutions", icon: <Layout size={42} strokeWidth={1.5} /> },
    { label: "Trusted Security", icon: <ShieldCheck size={42} strokeWidth={1.5} /> },
  ];

  // Stable animation variants
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 20 : 40,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center bg-white py-24 border-y border-black/5 overflow-hidden font-sans">

      {/* Minimalist Background Visuals */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-blue-100/10 rounded-full blur-[100px] mix-blend-multiply opacity-20" />
        <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-cyan-50/10 rounded-full blur-[120px] mix-blend-multiply opacity-20" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-slate-100 to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-6 max-w-[1300px] relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full"
        >
          <motion.span
            variants={itemVariants}
            className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase mb-8 shadow-sm border border-primary/20"
          >
            Our Success Story
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-10 tracking-tight leading-[1.1]"
          >
            Your Trusted <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Technology Partner</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed mb-14 max-w-3xl mx-auto opacity-80"
          >
            We transform visionary ideas into resilient digital realities. Our commitment to technical excellence and strategic innovation defines every partnership we build.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6"
          >
            {featureButtons.map((btn, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group flex flex-col items-center p-10 bg-white/80 backdrop-blur-md border border-slate-200 rounded-[3rem] shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 min-w-[260px] cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-32 h-32 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-primary/50"
                >
                  {btn.icon}
                </motion.div>
                <span className="text-slate-900 font-extrabold text-2xl tracking-tight transition-colors duration-300 group-hover:text-primary">
                  {btn.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-16 group px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg flex items-center gap-3 shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all duration-300"
          >
            Learn More About Our Journey
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
}
