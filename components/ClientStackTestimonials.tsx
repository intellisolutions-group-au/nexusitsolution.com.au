import React, { useState, useEffect, useRef } from "react";
import styles from "./ClientStackTestimonials.module.css";
import { FaMobileAlt, FaCloud, FaLock, FaRobot, FaChartBar } from "react-icons/fa";

const testimonials = [
  {
    service: "Mobile App Development",
    review:
      "Their mobile app team is exceptional. We saw a 40% increase in user engagement after launching our new app!",
    client: "Michael Chang",
    role: "Product Director, HealthSync",
    icon: <FaMobileAlt className={styles.cardIcon} />,
    avatar: "M",
  },
  {
    service: "Cloud Solutions",
    review:
      "Nexus migrated our infrastructure to the cloud seamlessly. The performance and security improvements are outstanding.",
    client: "Sarah Jenkins",
    role: "CTO, FinTech Global",
    icon: <FaCloud className={styles.cardIcon} />,
    avatar: "S",
  },
  {
    service: "Cybersecurity",
    review:
      "We trust Nexus with our digital security. Their proactive approach keeps our data and clients safe at all times.",
    client: "David Ross",
    role: "VP Operations, Stellar Logistics",
    icon: <FaLock className={styles.cardIcon} />,
    avatar: "D",
  },
  {
    service: "AI & Automation",
    review:
      "Their AI solutions streamlined our workflow and saved us hundreds of hours. Truly futuristic and reliable.",
    client: "Priya Mehra",
    role: "Head of Digital, InnovateX",
    icon: <FaRobot className={styles.cardIcon} />,
    avatar: "P",
  },
  {
    service: "Data Analytics",
    review:
      "The analytics dashboards from Nexus give us real-time insights. Our decision-making is now data-driven and fast!",
    client: "Lucas Brown",
    role: "CEO, MarketPulse",
    icon: <FaChartBar className={styles.cardIcon} />,
    avatar: "L",
  },
];

const CARD_STACK = [
  { scale: 1, translateY: 0, z: 5, opacity: 1 },
  { scale: 0.95, translateY: 28, z: 4, opacity: 0.92 },
  { scale: 0.9, translateY: 56, z: 3, opacity: 0.85 },
  { scale: 0.85, translateY: 84, z: 2, opacity: 0.7 },
  { scale: 0.8, translateY: 112, z: 1, opacity: 0.55 },
];

function getStackProps(idx: number, activeIdx: number, total: number) {
  const offset = (idx - activeIdx + total) % total;
  if (offset < CARD_STACK.length) {
    return CARD_STACK[offset];
  }
  // Hide cards not in stack
  return { scale: 0.8, translateY: 112, z: 0, opacity: 0 };
}

const ClientStackTestimonials = () => {
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

  const handleClick = () => setActiveIdx((prev) => (prev + 1) % total);

  return (
    <section className={styles.section}>
      <div className={styles.gridOverlay} />
      <div className={styles.radialGlow} />
      <div className={styles.eyebrow}>Client Stories</div>
      <h2 className={styles.title}>Client <span style={{ color: "var(--accent-primary)" }}>Success</span></h2>
      <div className={styles.subtitle}>
        Don't just take our word for it—hear from the partners we've worked with.
      </div>
      <div
        className={styles.stackContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        tabIndex={0}
        role="button"
        aria-label="Next testimonial"
      >
        {testimonials.map((t, idx) => {
          const { scale, translateY, z, opacity } = getStackProps(idx, activeIdx, total);
          const isActive = idx === activeIdx;
          return (
            <div
              key={idx}
              className={
                styles.card +
                (isActive ? ` ${styles.cardActive}` : "")
              }
              style={{
                transform: `scale(${scale}) translateY(${translateY}px)`,
                zIndex: z,
                opacity,
                pointerEvents: isActive ? "auto" : "none",
                boxShadow: isActive
                  ? "0 0 0 3px var(--accent-primary), 0 8px 32px 0 rgba(99,102,241,0.18), 0 1.5px 8px 0 rgba(6,182,212,0.12)"
                  : undefined,
                transition: isActive
                  ? "box-shadow 0.4s var(--transition), border 0.4s var(--transition), transform 0.7s var(--transition), opacity 0.5s var(--transition)"
                  : undefined,
              }}
            >
              {t.icon}
              <div className={styles.cardService}>{t.service}</div>
              <div className={styles.cardReview}>&ldquo;{t.review}&rdquo;</div>
              <div className={styles.cardClient}>
                <div className={styles.cardAvatar}>{t.avatar}</div>
                <div>
                  <div className={styles.cardName}>{t.client}</div>
                  <div className={styles.cardRole}>{t.role}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClientStackTestimonials;
