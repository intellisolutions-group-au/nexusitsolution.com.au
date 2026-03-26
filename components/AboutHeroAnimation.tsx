"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutHeroAnimation() {
  const [isClient, setIsClient] = useState(false);
  const [nodes, setNodes] = useState<any[]>([]);
  const [connections, setConnections] = useState<any[]>([]);
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setIsClient(true);
    
    // Generate nodes for the network
    const generatedNodes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      size: Math.random() * 3 + 2,
      duration: 4 + Math.random() * 2,
    }));

    // Create connections between nodes
    const generatedConnections: { start: number; end: number; duration: number; delay: number }[] = [];
    for (let i = 0; i < generatedNodes.length; i++) {
      for (let j = i + 1; j < generatedNodes.length; j++) {
        if (Math.random() > 0.94 && generatedConnections.length < 40) {
          generatedConnections.push({ 
            start: i, 
            end: j,
            duration: 6 + Math.random() * 4,
            delay: Math.random() * 5,
          });
        }
      }
    }

    // Generate particles
    const generatedParticles = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      r: Math.random() * 2 + 0.5,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      animateY: [`${Math.random() * 10}%`, `-${Math.random() * 10}%`],
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 10
    }));

    setNodes(generatedNodes);
    setConnections(generatedConnections);
    setParticles(generatedParticles);
  }, []);

  if (!isClient) return null;

  const COLORS = {
    node: "#4A9EE8",
    nodeGlow: "#6BB8FF",
    line: "#A0C8F0",
    particle: "#FFFFFF"
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <filter id="node-glow-restore" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <linearGradient id="signal-gradient-restore" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={COLORS.nodeGlow} stopOpacity="0" />
            <stop offset="50%" stopColor={COLORS.nodeGlow} stopOpacity="0.6" />
            <stop offset="100%" stopColor={COLORS.nodeGlow} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Network Lines */}
        {connections.map((conn, i) => {
          const start = nodes[conn.start];
          const end = nodes[conn.end];
          if (!start || !end) return null;
          return (
            <g key={`line-restore-${i}`}>
              <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke={COLORS.line}
                strokeWidth="1"
                opacity="0.1"
              />
              <motion.line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="url(#signal-gradient-restore)"
                strokeWidth="1.5"
                animate={{
                  pathLength: [0, 1, 1, 0],
                  pathOffset: [0, 0, 1, 1],
                  opacity: [0, 0.8, 0.8, 0],
                }}
                transition={{
                  duration: conn.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: conn.delay,
                }}
              />
            </g>
          );
        })}

        {/* Pulsing Nodes */}
        {nodes.map((node) => (
          <g key={`node-restore-${node.id}`} filter="url(#node-glow-restore)">
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill={COLORS.node}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: node.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay,
              }}
            />
          </g>
        ))}

        {/* Floating Particles */}
        {particles.map((p) => (
          <motion.circle
            key={`particle-restore-${p.id}`}
            r={p.r}
            fill={COLORS.particle}
            initial={{ 
              x: p.x, 
              y: p.y,
              opacity: 0
            }}
            animate={{
              y: p.animateY,
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay
            }}
          />
        ))}
      </svg>
      
      {/* Soft Light Sweep */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
          backgroundSize: "200% 100%"
        }}
        animate={{
          backgroundPosition: ["200% 0", "-200% 0"]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 5
        }}
      />
    </div>
  );
}
