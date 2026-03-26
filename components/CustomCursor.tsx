"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outline Cursor - cur-f in reference */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        className="fixed top-0 left-0 w-[34px] h-[34px] rounded-full border border-primary/40 pointer-events-none z-9999 flex items-center justify-center -ml-[17px] -mt-[17px]"
        animate={{
          width: isPointer ? 52 : 34,
          height: isPointer ? 52 : 34,
          borderColor: isPointer ? "rgba(8, 145, 178, 0.35)" : "rgba(124, 58, 237, 0.4)",
        }}
      />
      {/* Dot Cursor - cur in reference */}
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
        className="fixed top-0 left-0 w-[9px] h-[9px] bg-primary rounded-full pointer-events-none z-9999 -ml-[4.5px] -mt-[4.5px]"
        animate={{
          width: isPointer ? 22 : 9,
          height: isPointer ? 22 : 9,
          backgroundColor: isPointer ? "#0891b2" : "#7c3aed",
        }}
      />
    </>
  );
}
