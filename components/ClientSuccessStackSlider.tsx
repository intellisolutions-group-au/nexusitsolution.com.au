"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, useAnimation, useMotionValue, animate, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import styles from "./ClientSuccessStackSlider.module.css";

const testimonials = [
  {
    service: "AI & Automation",
    review: "Their AI solutions streamlined our workflow and saved us hundreds of hours. Truly futuristic and reliable.",
    client: "Priya Mehra",

  },
  {
    service: "DevOps",
    review: "Our deployment time went from 3 days to 20 minutes. The CI/CD pipeline they built is world-class.",
    client: "Mohammed Al-Rashid",

  },
  {
    service: "Cybersecurity",
    review: "After partnering with Nexus, our security incidents dropped to zero. Their SOC team is exceptional.",
    client: "Anita Verma",

  },
  {
    service: "Cloud Migration",
    review: "Nexus moved our entire infrastructure to the cloud in under 6 weeks — zero downtime, zero stress.",
    client: "Rahul Singh",

  },
  {
    service: "Web Development",
    review: "The website Nexus built for us is not only stunning but converted 2x better than our old one from day one.",
    client: "James Wilson",

  },
  {
    service: "Custom Software",
    review: "The ERP system they developed from scratch perfectly mirrors our complex manufacturing process. Unbeatable.",
    client: "Elena Petrova",

  },
  {
    service: "Digital Marketing",
    review: "Our organic traffic skyrocketed by 300% in six months thanks to Nexus's SEO and content strategy.",
    client: "David Chen",

  },
  {
    service: "Data Analytics",
    review: "The dashboards built by Nexus revealed cost-saving opportunities we had missed for years. Transformative data.",
    client: "Sarah Miller",

  },
];

// Content duplicated for infinite marquee
const items = [...testimonials, ...testimonials, ...testimonials];

const ClientSuccessStackSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const x = useMotionValue(0);
  const controlsRef = useRef<any>(null);

  // Responsive card width logic
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const cardWidth = isMobile ? Math.min(windowWidth - 40, 450) : 450;
  const gap = isMobile ? 20 : 32;
  const totalItemWidth = cardWidth + gap;
  const baseWidth = testimonials.length * totalItemWidth;

  // Start the continuous slow motion
  const startMarquee = useCallback(() => {
    const currentX = x.get();
    if (currentX <= -baseWidth) x.set(0);

    const remainingDistance = baseWidth + x.get();
    const duration = (remainingDistance / baseWidth) * (isMobile ? 30 : 40);

    controlsRef.current = animate(x, -baseWidth, {
      duration: duration > 0 ? duration : 40,
      ease: "linear",
      onComplete: () => {
        x.set(0);
        startMarquee();
      }
    });
  }, [x, baseWidth, isMobile]);

  useEffect(() => {
    if (!isHovered) {
      startMarquee();
    } else {
      if (controlsRef.current) controlsRef.current.stop();
      x.stop();
    }
    return () => {
      if (controlsRef.current) controlsRef.current.stop();
      x.stop();
    };
  }, [isHovered, startMarquee, x]);

  const handleNext = () => {
    if (controlsRef.current) controlsRef.current.stop();
    x.stop();

    const currentX = x.get();
    const nextTarget = Math.round(currentX / totalItemWidth) * totalItemWidth - totalItemWidth;

    controlsRef.current = animate(x, nextTarget, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      onComplete: () => {
        if (!isHovered) startMarquee();
      }
    });
  };

  const handlePrev = () => {
    if (controlsRef.current) controlsRef.current.stop();
    x.stop();

    const currentX = x.get();
    const prevTarget = Math.round(currentX / totalItemWidth) * totalItemWidth + totalItemWidth;

    controlsRef.current = animate(x, prevTarget, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      onComplete: () => {
        if (!isHovered) startMarquee();
      }
    });
  };

  const onDragEnd = (event: any, info: PanInfo) => {
    if (Math.abs(info.offset.x) < 20) return;

    if (info.offset.x < 0) handleNext();
    else handlePrev();
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleInfo}>
            <h2 className={styles.title}>Client Success stories</h2>
            <p className={styles.subtitle}>Trusted by industry leaders across the globe.</p>
          </div>
          <div className={styles.controls}>
            <button onClick={handlePrev} className={styles.navBtn} aria-label="Previous">
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNext} className={styles.navBtn} aria-label="Next">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          className={styles.carouselWrapper}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className={styles.track}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -baseWidth * 2, right: baseWidth }}
            onDragStart={() => x.stop()}
            onDragEnd={onDragEnd}
          >
            {items.map((t, idx) => (
              <motion.div
                key={idx}
                className={styles.card}
                whileHover={{
                  scale: 1.05,
                  y: -12,
                  boxShadow: "0 40px 80px -15px rgba(2, 6, 23, 0.15), 0 20px 40px -20px rgba(2, 6, 23, 0.2)"
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => {
                  // Potential navigation logic
                  console.log(`Navigating to project: ${t.service}`);
                }}
              >
                <div className={styles.cardContent}>
                  <div className={styles.quoteIcon}>
                    <Quote size={32} />
                  </div>
                  <div className={styles.cardTitle}>{t.service}</div>
                  <p className={styles.cardReview}>{t.review}</p>

                  <div className={styles.clientInfo}>
                    <div className={styles.avatar}>{t.client.charAt(0)}</div>
                    <div>
                      <div className={styles.clientName}>{t.client}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessStackSlider;
