"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ── Card definitions ───────────────────────────── */
const cards = [
  {
    title: "Progress",
    desc: "We fuel our growth through your success, fostering long-term business relationships.",
    icon: "📈",
    stacked: { x: 0, y: 0, rot: 0, z: 10 },
    spread: { x: -105, y: -105, rot: -3 },
    hover: { x: -105, y: -118, rot: -3 },
  },
  {
    title: "User Experience",
    desc: "Solutions designed with user-centric approaches ensuring satisfaction from startups to enterprises.",
    icon: "👤",
    stacked: { x: 5, y: 5, rot: 2.5, z: 9 },
    spread: { x: 105, y: -105, rot: 3 },
    hover: { x: 105, y: -118, rot: 3 },
  },
  {
    title: "Innovation",
    desc: "Staying ahead with futuristic technologies to keep your business competitive.",
    icon: "💡",
    stacked: { x: -4, y: 8, rot: -3, z: 8 },
    spread: { x: -105, y: 105, rot: 3 },
    hover: { x: -105, y: 92, rot: 3 },
  },
  {
    title: "Integrity",
    desc: "Upholding strong ethics in every client relationship.",
    icon: "📖",
    stacked: { x: 8, y: 11, rot: 5, z: 7 },
    spread: { x: 105, y: 105, rot: -3 },
    hover: { x: 105, y: 92, rot: -3 },
  },
];

/* ── Helper: build CSS transform string ─────────── */
function tf(x: number, y: number, rot: number, scale = 1) {
  return `translate(${x}px, ${y}px) rotate(${rot}deg) scale(${scale})`;
}

export default function ValueStack() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── Standard Grid Layout ─ */
  return (
    <div className="w-full px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {cards.map((card, i) => {
          const isHov = hovered === i;
          
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                ease: "easeOut"
              }}
              className="vs-card group"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                width: "100%",
                minHeight: isMobile ? "240px" : "320px",
                zIndex: isHov ? 10 : 1,
                cursor: "pointer",
                borderRadius: 24,
                border: "1px solid #F1F5F9",
                background: "#FFFFFF",
                boxShadow: isHov
                  ? "0 20px 40px -12px rgba(0, 0, 0, 0.12), 0 0 20px rgba(37, 99, 235, 0.05)"
                  : "0 10px 30px -5px rgba(0, 0, 0, 0.03)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: isMobile ? "40px 24px" : "60px 40px",
                transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
                transform: isHov ? "translateY(-8px) scale(1.02)" : "none",
              }}
            >
              <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-110 select-none">
                {card.icon}
              </div>
              <h3 style={{ fontSize: isMobile ? 18 : 22, fontWeight: 800, color: "#0F172A", marginBottom: 12 }}>
                {card.title}
              </h3>
              <p style={{
                fontSize: isMobile ? 14 : 14,
                color: "#64748B",
                lineHeight: 1.6,
                fontWeight: 500,
                opacity: 0.9,
                maxWidth: "280px",
              }}>
                {card.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
