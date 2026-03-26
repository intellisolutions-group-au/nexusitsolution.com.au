"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingQuestionMark = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative flex items-center justify-center w-80 h-80">
      {/* Blurred background glow */}
      <motion.div
        className="absolute w-64 h-64 bg-blue-400/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main ripple rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute border border-blue-500/10 rounded-full"
          initial={{ width: 100, height: 100, opacity: 0 }}
          animate={{
            width: [100, 400],
            height: [100, 400],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Futuristic orbital particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-blue-500/30 rounded-full"
          animate={{
            rotate: 360,
            x: [100 + i * 10, 110 + i * 10, 100 + i * 10],
          }}
          transition={{
            rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
            x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            originX: "0px",
            originY: "0px",
            left: "50%",
            top: "50%",
          }}
        />
      ))}

      {/* Inner blurred circle */}
      <div className="absolute w-56 h-56 bg-blue-50/50 backdrop-blur-3xl rounded-full border border-blue-100/50 shadow-inner z-0" />

      {/* The floating Question Mark container */}
      <motion.div
        className="relative z-10 cursor-pointer group"
        animate={{
          y: [0, -15, 0],
          rotateZ: [-1, 1, -1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1 }}
      >
        {/* Glow effect that grows on hover */}
        <div className="absolute inset-0 bg-blue-400/20 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* The Card/Element holding the ? */}
        <div className="relative px-8 py-6 bg-white shadow-2xl rounded-[2.5rem] border border-blue-50 flex items-center justify-center transform group-hover:shadow-blue-500/20 transition-all">
          <span className="text-6xl font-bold text-blue-600 italic select-none drop-shadow-sm">
            ?
          </span>

          {/* Micro-dot tracers */}
          <motion.div 
            className="absolute top-2 right-4 w-2 h-2 bg-blue-500 rounded-full"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingQuestionMark;
