"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./AntiGravity.module.css";

interface AntiGravityProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  float?: boolean;
  trigger?: "scroll" | "load" | "hover";
  className?: string;
  style?: React.CSSProperties;
}

const AntiGravity: React.FC<AntiGravityProps> = ({
  children,
  delay = 0,
  duration = 700,
  float = true,
  trigger = "scroll",
  className = "",
  style: initialStyle = {},
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLanded, setHasLanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger === "load") {
      setIsVisible(true);
    } else if (trigger === "scroll") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }
    // Hover doesn't need an observer for visibility, 
    // but the spec says "Every animated element starts below... with opacity: 0"
    // So hover elements should probably be visible immediately or on scroll?
    // "All triggers fire once only except hover"
    // I'll treat hover as visible immediately for simplicity, but it still follows the lift.
    if (trigger === "hover") {
      setIsVisible(true);
    }
  }, [trigger]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setHasLanded(true);
      }, duration + delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, delay]);

  const combinedClasses = [
    styles.container,
    !isVisible ? styles.initial : "",
    isVisible ? styles.lifting : "",
    hasLanded && float ? styles.floating : "",
    trigger === "hover" ? styles.hoverFloat : "",
    className
  ].join(" ").trim();

  const style = {
    ...initialStyle,
    "--delay": `${delay}ms`,
    "--duration": `${duration}ms`,
  } as React.CSSProperties;

  return (
    <div ref={containerRef} className={combinedClasses} style={style}>
      {children}
    </div>
  );
};

export default AntiGravity;
