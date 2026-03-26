"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

interface ScrollRevealImageProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollRevealImage: React.FC<ScrollRevealImageProps> = ({
  children,
  className = "",
}) => {
  const [hasRevealed, setHasRevealed] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Animation Variants
  const revealVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.96,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        onViewportEnter={() => setHasRevealed(true)}
        variants={revealVariants}
        className="w-full h-full"
      >
        {/* Only float after reveal is complete and if motion is NOT reduced and NOT mobile (handled via CSS/Media Query logic or simple check) */}
        <motion.div
          animate={hasRevealed && !shouldReduceMotion ? "animate" : undefined}
          variants={floatVariants}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
          className="w-full h-full cursor-pointer will-change-transform rounded-[inherit]"
        >
          {children}
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 768px) {
          /* Reduce translateY on mobile */
          [data-framer-appear-id] {
            --reveal-y: 40px !important;
          }
          /* We can't easily override the initial variant value here, 
             so we rely on the fact that the component handles mobile differently if we added logic.
             However, the requirement says "Reduce translateY to 40px on mobile".
          */
        }
      `}</style>

      {/* Refined mobile handling for initial state */}
      <style jsx>{`
        @media (max-width: 768px) {
          div :global(> div) {
             transform: translateY(40px) scale(0.96) !important;
             opacity: 0 !important;
             filter: blur(6px) !important;
          }
          div :global(> div[style*="opacity: 1"]) {
             transform: translateY(0) scale(1) !important;
             opacity: 1 !important;
             filter: blur(0) !important;
          }
           /* Disable floating animation on mobile */
          div :global(.will-change-transform) {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollRevealImage;
