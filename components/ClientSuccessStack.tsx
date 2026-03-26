import React, { useState, useEffect, useRef } from "react";
import styles from "./ClientSuccessStack.module.css";

const testimonials = [
  {
    service: "Mobile App Development",
    review:
      "Their mobile app team is exceptional. We saw a 40% increase in user engagement after launching our new app!",
    client: "Michael Chang",
    role: "Product Director, HealthSync",
  },
  {
    service: "Cloud Solutions",
    review:
      "Nexus migrated our infrastructure to the cloud seamlessly. The performance and security improvements are outstanding.",
    client: "Sarah Jenkins",
    role: "CTO, FinTech Global",
  },
  {
    service: "Cybersecurity",
    review:
      "We trust Nexus with our digital security. Their proactive approach keeps our data and clients safe at all times.",
    client: "David Ross",
    role: "VP Operations, Stellar Logistics",
  },
  {
    service: "AI & Automation",
    review:
      "Their AI solutions streamlined our workflow and saved us hundreds of hours. Truly futuristic and reliable.",
    client: "Priya Mehra",
    role: "Head of Digital, InnovateX",
  },
  {
    service: "Data Analytics",
    review:
      "The analytics dashboards from Nexus give us real-time insights. Our decision-making is now data-driven and fast!",
    client: "Lucas Brown",
    role: "CEO, MarketPulse",
  },
];

const stackTransforms = [
  { z: 5, scale: 1, translateY: 0, opacity: 1 },
  { z: 4, scale: 0.95, translateY: 20, opacity: 0.92 },
  { z: 3, scale: 0.9, translateY: 40, opacity: 0.85 },
  { z: 2, scale: 0.85, translateY: 60, opacity: 0.7 },
  { z: 1, scale: 0.8, translateY: 80, opacity: 0.55 },
];

const ClientSuccessStack = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const total = testimonials.length;

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveIdx((prev) => (prev + 1) % total);
      }, 4000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, total]);

  const getCardStyle = (idx: number) => {
    if (window.innerWidth <= 600) return {}; // mobile: no stacking
    const offset = (idx - activeIdx + total) % total;
    if (offset < stackTransforms.length) {
      const { scale, translateY, z, opacity } = stackTransforms[offset];
      return {
        transform: `scale(${scale}) translateY(${isHovered && offset === 0 ? -30 : translateY}px)` ,
        zIndex: z,
        opacity,
      };
    }
    return { opacity: 0, zIndex: 0 };
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>Client Success</div>
        <div
          className={styles.stackWrapper}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={styles.card}
              style={getCardStyle(idx)}
            >
              <div className={styles.cardTitle}>{t.service}</div>
              <div className={styles.cardReview}>&ldquo;{t.review}&rdquo;</div>
              <div className={styles.cardClient}>{t.client}</div>
              <div className={styles.cardRole}>{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessStack;
