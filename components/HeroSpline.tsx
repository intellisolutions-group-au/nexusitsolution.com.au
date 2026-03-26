"use client";

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import InteractiveBoxes from "./InteractiveBoxes";

interface FloatingBoxProps {
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  depth: number;
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  initialRotateZ?: number;
  delay?: number;
}

function FloatingBox({ springX, springY, depth, size, top, left, right, bottom, initialRotateZ = 0, delay = 0 }: FloatingBoxProps) {
  // Parallax translation
  const x = useTransform(springX, [-1, 1], [-depth * 40, depth * 40]);
  const y = useTransform(springY, [-1, 1], [-depth * 40, depth * 40]);
  
  // 3D tilt effect on hover
  const rotateX = useTransform(springY, [-1, 1], [15 * depth, -15 * depth]);
  const rotateY = useTransform(springX, [-1, 1], [-15 * depth, 15 * depth]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
      className="absolute flex items-center justify-center pointer-events-none"
      style={{
        top, left, right, bottom,
        x, y, 
        rotateX, rotateY,
        rotateZ: initialRotateZ,
        width: size,
        height: size,
        perspective: 1000,
        transformStyle: "preserve-3d",
        zIndex: depth > 1 ? 5 : 1
      }}
    >
      <div 
        className="relative w-full h-full border border-blue-100 bg-white/70 backdrop-blur-md transition-colors duration-500 shadow-[20px_20px_50px_rgba(37,99,235,0.05),inset_0_0_0_1px_rgba(255,255,255,0.5)]"
        style={{ 
          borderRadius: size * 0.15 
        }}
      >
        <div className="absolute inset-0 bg-blue-100 rounded-[inherit] blur-2xl opacity-40"></div>
      </div>
    </motion.div>
  );
}

export default function HeroSpline() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  const scrollToExplore = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const floatingBoxes = [
    { size: 140, depth: 0.6, top: "15%", left: "8%", rotation: 15, delay: 0 },
    { size: 220, depth: 1.2, top: "20%", right: "12%", rotation: -10, delay: 0.1 },
    { size: 90, depth: 0.3, bottom: "25%", left: "18%", rotation: 45, delay: 0.2 },
    { size: 180, depth: 1.8, bottom: "10%", right: "20%", rotation: 25, delay: 0.3 },
    { size: 110, depth: 0.8, top: "45%", left: "4%", rotation: -20, delay: 0.4 },
    { size: 150, depth: 1.4, top: "12%", right: "38%", rotation: 5, delay: 0.5 },
    { size: 80, depth: 0.5, bottom: "40%", right: "5%", rotation: -35, delay: 0.6 },
  ];

  return (
    <section 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-white"
      onMouseMove={handleMouseMove}
    >
      {/* Background with Interactive Boxes and Spline */}
      <div className="absolute inset-0 z-0">
        <InteractiveBoxes />
        <iframe 
          src="https://my.spline.design/iW5x8B1V30eC8w3M/" 
          frameBorder="0" 
          width="100%" 
          height="100%" 
          className="w-full h-full pointer-events-none opacity-40"
        ></iframe>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/50 to-white pointer-events-none"></div>
      </div>

      {/* Floating 3D Boxes Container (Existing but kept for depth) */}
      <div className="absolute inset-0 z-10 pointer-events-none perspective-distant">
        {floatingBoxes.map((box, i) => (
          <FloatingBox 
            key={i}
            springX={springX}
            springY={springY}
            depth={box.depth}
            size={box.size}
            top={box.top}
            left={box.left}
            right={box.right}
            bottom={box.bottom}
            initialRotateZ={box.rotation}
            delay={box.delay}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-20 pointer-events-none">
        <div className="flex flex-col items-center pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 backdrop-blur-md"
          >
            <span className="text-sm font-semibold text-primary">Next-Gen IT Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-display font-bold text-slate-900 max-w-4xl tracking-tight leading-tight mb-6"
          >
            Transform Your Vision Into <br />
            <span className="text-gradient">Digital Reality</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 font-sans leading-relaxed"
          >
            We build cutting-edge web, mobile, and enterprise solutions designed to elevate your business in the modern digital landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center"
          >
            <Link
              href="/about"
              className="px-8 py-4 rounded-full bg-linear-to-r from-primary via-secondary to-primary text-white font-bold text-base shadow-xl shadow-blue-500/20 hover:from-secondary hover:to-primary transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full sm:w-auto text-center"
              style={{ minWidth: 170 }}
            >
              Learn More
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full border border-blue-100 text-slate-700 font-semibold text-base bg-white hover:bg-blue-50 transition-all hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full sm:w-auto text-center"
              style={{ minWidth: 210 }}
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer text-slate-400 hover:text-primary transition-colors"
        onClick={scrollToExplore}
      >
        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
