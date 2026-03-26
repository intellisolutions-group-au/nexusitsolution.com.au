"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface BoxProps {
  x: number;
  y: number;
  mouseX: any;
  mouseY: any;
}

const Box = ({ x, y, mouseX, mouseY }: BoxProps) => {
  // Parallax and tilt effects
  const boxX = useTransform(mouseX, [-0.5, 0.5], [x - 20, x + 20]);
  const boxY = useTransform(mouseY, [-0.5, 0.5], [y - 20, y + 20]);
  
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [20, -20]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);

  return (
    <motion.div
      style={{
        left: `${x}%`,
        top: `${y}%`,
        x: boxX,
        y: boxY,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="absolute w-12 h-12 md:w-16 md:h-16 pointer-events-none"
    >
      <div className="w-full h-full rounded-lg border border-blue-50 bg-white/70 backdrop-blur-sm shadow-[0_0_20px_rgba(37,99,235,0.05)] flex items-center justify-center">
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-blue-50 rounded-lg blur-xl opacity-30"></div>
      </div>
    </motion.div>
  );
};

export default function InteractiveBoxes() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Define a set of boxes with varied positions
  const boxes = [
    { x: 10, y: 15 }, { x: 25, y: 70 }, { x: 75, y: 20 },
    { x: 85, y: 80 }, { x: 45, y: 10 }, { x: 60, y: 60 },
    { x: 5, y: 50 }, { x: 90, y: 40 }, { x: 40, y: 85 }
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none perspective-1000 overflow-hidden">
      {boxes.map((box, i) => (
        <Box key={i} x={box.x} y={box.y} mouseX={springX} mouseY={springY} />
      ))}
    </div>
  );
}
