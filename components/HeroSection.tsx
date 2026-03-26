"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Brain, Cloud, BarChart3, Glasses } from "lucide-react";
import styles from "./HeroSection.module.css";
import Starfield from "./Starfield";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const cards = [
    { 
      id: 1, 
      title: "Security", 
      icon: <Shield size={16} />, 
      x: -220, 
      y: -120, 
      delay: 0, 
      duration: 5,
      p1: 85,
      p2: 40
    },
    { 
      id: 2, 
      title: "Data Stream", 
      icon: <BarChart3 size={16} />, 
      x: 140, 
      y: -180, 
      delay: 0.8, 
      duration: 6,
      p1: 70,
      p2: 30
    },
    { 
      id: 3, 
      title: "AI Core", 
      icon: <Brain size={16} />, 
      x: -250, 
      y: 60, 
      delay: 1.4, 
      duration: 4.5,
      p1: 90,
      p2: 50
    },
    { 
      id: 4, 
      title: "VR Technology", 
      icon: <Glasses size={16} className="text-indigo-400" />, 
      x: 160, 
      y: -20, 
      delay: 2.2, 
      duration: 5.5,
      p1: 75,
      p2: 45,
      isVR: true
    },
    { 
      id: 5, 
      title: "Cloud Node", 
      icon: <Cloud size={16} />, 
      x: 120, 
      y: 160, 
      delay: 3, 
      duration: 7,
      p1: 60,
      p2: 25
    },
  ];

  return (
    <section ref={containerRef} className={styles.heroContainer}>
      <Starfield />
      
      {/* Dynamic Glows */}
      <div className={styles.glowContainer}>
        <div className={styles.glowBlue} />
        <div className={styles.glowIndigo} />
        <div className={styles.glowViolet} />
      </div>

      <div className={styles.gridOverlay} />

      <div className={styles.contentWrapper}>
        <motion.div 
          style={{ y: textY }}
          className={styles.leftColumn}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building Smart <br />
            Digital Solutions <br />
            for the Future
          </motion.h1>

          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We deliver premium web development, software engineering, and AI-driven 
            transformation for global enterprises. Empower your business with 
            scalable cloud platforms.
          </motion.p>

          <motion.div 
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/services" className={styles.secondaryBtn}>
              View Services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: visualY }}
          className={styles.rightColumn}
        >
          <div className={styles.visualContainer}>
            {/* Orbital Rings - Refined */}
            <div className={`${styles.orbitalRing} ${styles.outerRing}`} />
            
            {[1, 2].map((ring) => (
              <motion.div
                key={ring}
                className={styles.orbitalRing}
                style={{
                  width: (350 + ring * 150),
                  height: (350 + ring * 150),
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25 + ring * 5, repeat: Infinity, ease: "linear" }}
              >
                <div className={`${styles.ringTracer} ${ring === 2 ? styles.ringTracerPurple : '' }`} 
                     style={{ top: '-3px', left: '50%' }} />
              </motion.div>
            ))}

            {/* Mobile simplified visual fallback: Planet or Glow */}
            <div className="md:hidden w-64 h-64 rounded-full bg-blue-600/10 border border-blue-50/20 blur-xl animate-pulse" />

            {/* Floating Module Cards */}
            {cards.map((card) => (
              <motion.div
                key={card.id}
                className={`${styles.moduleCard} ${card.isVR ? styles.vrTint : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -20, 0]
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                transition={{ 
                  opacity: { duration: 0.5, delay: 0.5 + card.delay },
                  scale: { duration: 0.5, delay: 0.5 + card.delay },
                  y: { 
                    duration: card.duration, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: card.delay
                  }
                }}
                style={{
                  left: `calc(50% + ${card.x}px)`,
                  top: `calc(50% + ${card.y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardTitle}>{card.title}</span>
                  <div className={styles.cardIcon}>{card.icon}</div>
                </div>

                <div className={styles.progressBarContainer}>
                  <div className={styles.progressBar}>
                    <div className={`${styles.progressPrimary} ${card.isVR ? styles.progressIndigo : ''}`} 
                         style={{ width: `${card.p1}%` }} />
                  </div>
                  <div className={styles.progressBar}>
                    <div className={`${styles.progressSecondary} ${card.isVR ? styles.progressSoftPurple : ''}`} 
                         style={{ width: `${card.p2}%` }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className={styles.trustedBy}>
        {/* Placeholder for small scale partner logos as seen in ref */}
      </div>
    </section>
  );
};

export default HeroSection;
