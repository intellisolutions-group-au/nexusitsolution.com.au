import React, { useState, useEffect, useRef } from "react";
import styles from "./ClientSuccessStackCards.module.css";

const testimonials = [
  {
    service: "Mobile App Development",
    review: "Their mobile app team is exceptional. We saw a 40% increase in user engagement after launching our new app!",
    client: "Michael Chang",
    role: "Product Director",
  },
  {
    service: "Cloud Solutions",
    review: "Nexus migrated our infrastructure to the cloud seamlessly. The performance and security improvements are outstanding.",
    client: "Sarah Jenkins",
    role: "CTO",
  },
  {
    service: "Cybersecurity",
    review: "We trust Nexus with our digital security. Their proactive approach keeps our data and clients safe at all times.",
    client: "David Ross",
    role: "VP Operations",
  },
  {
    service: "AI & Automation",
    review: "Their AI solutions streamlined our workflow and saved us hundreds of hours. Truly futuristic and reliable.",
    client: "Priya Mehra",
    role: "Head of Digital",
  },
];

const stackTransforms = [
  { z: 4, scale: 1, translateY: 0, opacity: 1 },
  { z: 3, scale: 0.95, translateY: 15, opacity: 0.92 },
  { z: 2, scale: 0.9, translateY: 30, opacity: 0.85 },
  { z: 1, scale: 0.85, translateY: 45, opacity: 0.7 },
];

const ClientSuccessStackCards = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const total = testimonials.length;

  // Auto-slide logic
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

  // Responsive: disable stacking on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;

  const getCardStyle = (idx: number) => {
    if (isMobile) return {};
    const offset = (idx - activeIdx + total) % total;
    if (offset < stackTransforms.length) {
      const { scale, translateY, z, opacity } = stackTransforms[offset];
      // On hover, cards slide up and spread out with stagger
      const hoverY = isHovered ? translateY - 30 * offset : translateY;
      const hoverOpacity = isHovered ? 1 : opacity;
      return {
        transform: `scale(${scale}) translateY(${hoverY}px)`,
        zIndex: z,
        opacity: hoverOpacity,
        transitionDelay: isHovered ? `${offset * 0.08}s` : "0s",
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
          tabIndex={0}
          role="button"
          aria-label="Next testimonial"
          onClick={() => setActiveIdx((prev) => (prev + 1) % total)}
        >
          {testimonials.map((t, idx) => {
            const offset = (idx - activeIdx + total) % total;
            const isTop = offset === 0;
            return (
              <div
                key={idx}
                className={
                  styles.card +
                  (isTop && isHovered ? " " + styles.cardGlow : "")
                }
                style={getCardStyle(idx)}
              >
                <div className={styles.cardTitle}>{t.service}</div>
                <div className={styles.cardReview}>&ldquo;{t.review}&rdquo;</div>
                <div className={styles.cardClient}>{t.client}</div>
                <div className={styles.cardRole}>{t.role}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessStackCards;
