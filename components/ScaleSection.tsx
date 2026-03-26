"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./ScaleSection.module.css";

const barHeights = [60, 90, 120, 150, 180, 220];
const barDurations = ["3.0s", "3.4s", "2.8s", "3.6s", "3.2s", "2.6s"];
const bullets = [
  "99.9% Uptime for Enterprise Solutions",
  "Scalable Cloud Infrastructure",
  "Adaptive Codebases for Future-Proofing",
];

const ScaleSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !hasEntered) {
      // Transition from entrance to idle after staggering completes
      // Last bar delay (120 * 5) + duration (700) = 1300ms
      const timer = setTimeout(() => {
        setHasEntered(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasEntered]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!chartRef.current || !window.matchMedia("(hover: hover)").matches) return;

    const rect = chartRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Map to -6 to 6 deg
    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate 10 random particles on the client side only
    const generated = Array.from({ length: 10 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * 40}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 2}s`,
    }));
    setParticles(generated);
  }, []);

  return (
    <section
      className={styles.section}
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.container}>
        {/* Left: 3D Chart */}
        <div className={styles.chartWrapper}>
          <div
            className={styles.chartContainer}
            ref={chartRef}
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform 0.1s linear'
            }}
          >
            {/* Particles */}
            {particles.map((p, i) => (
              <div
                key={i}
                className={`${styles.particle} ${isVisible ? styles.drifting : ""}`}
                style={{
                  left: p.left,
                  bottom: p.bottom,
                  "--duration": p.duration,
                  animationDelay: p.delay
                } as any}
              />
            ))}

            {/* Bars */}
            {barHeights.map((height, i) => (
              <div
                key={i}
                className={`${styles.bar} ${hasEntered ? styles.barFloating : ""}`}
                style={{
                  height: `${height}px`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? (hasEntered ? undefined : "translateY(0)")
                    : "translateY(40px)",
                  transition: `opacity 700ms ease-out ${i * 120}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 120}ms`,
                  "--duration": barDurations[i]
                } as any}
              >
                <div className={styles.barGlow} />
              </div>
            ))}

            {/* SVG Arrow */}
            <svg className={styles.arrowContainer} viewBox="0 0 600 400" preserveAspectRatio="none">
              <polyline
                points="50,330 150,300 250,270 350,240 450,210 550,170"
                className={styles.arrowPath}
                style={{
                  strokeDasharray: 1000,
                  strokeDashoffset: isVisible ? 0 : 1000,
                  transition: `stroke-dashoffset 1000ms ease-in-out 1300ms`
                }}
              />
            </svg>
          </div>
        </div>

        {/* Right: Impact Copy */}
        <div className={styles.rightSide}>
          <div className={styles.eyebrow}>DRIVEN BY DATA</div>
          <h2 className={styles.heading}>Scaled by Innovation</h2>
          <p className={styles.subtext}>
            We don't just build apps — we engineer growth. Our architecture ensures that as your user base climbs, your performance never dips.
          </p>
          <div className={styles.bullets}>
            {bullets.map((bullet, i) => (
              <div
                key={i}
                className={`${styles.bullet} ${hasEntered ? styles.bulletIdle : ""}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(30px)",
                  transition: `opacity 700ms ease-out ${1300 + i * 200}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${1300 + i * 200}ms`
                }}
              >
                <span className={styles.checkmark}>✓</span>
                {bullet}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleSection;
