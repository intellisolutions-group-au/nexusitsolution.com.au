"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import styles from "./ClientSuccessPremiumStack.module.css";

const testimonials = [
  {
    tag: "AI & Automation",
    quote: "Their AI solutions streamlined our workflow and saved us hundreds of hours. Truly futuristic and reliable.",
    name: "Priya Mehra",
    role: "Head of Digital",
    avatarColor: "#6366F1",
    initial: "P",
    rot: 0
  },
  {
    tag: "DevOps",
    quote: "Our deployment time went from 3 days to 20 minutes. The CI/CD pipeline they built is world-class.",
    name: "Mohammed Al-Rashid",
    role: "Lead Developer",
    avatarColor: "#F59E0B",
    initial: "M",
    rot: 1.2
  },
  {
    tag: "Cybersecurity",
    quote: "After partnering with Nexus, our security incidents dropped to zero. Their SOC team is exceptional.",
    name: "Anita Verma",
    role: "VP Engineering",
    avatarColor: "#10B981",
    initial: "A",
    rot: -1.5
  },
  {
    tag: "Cloud Migration",
    quote: "Nexus moved our entire infrastructure to the cloud in under 6 weeks — zero downtime, zero stress.",
    name: "Rahul Singh",
    role: "CTO",
    avatarColor: "#0EA5E9",
    initial: "R",
    rot: 2
  },
  {
    tag: "Web Development",
    quote: "The website Nexus built for us is not only stunning but converted 2x better than our old one from day one.",
    name: "James Wilson",
    role: "Creative Director",
    avatarColor: "#EC4899",
    initial: "J",
    rot: -2.1
  },
  {
    tag: "Custom Software",
    quote: "The ERP system they developed from scratch perfectly mirrors our complex manufacturing process. Unbeatable.",
    name: "Elena Petrova",
    role: "COO",
    avatarColor: "#8B5CF6",
    initial: "E",
    rot: 1.8
  },
  {
    tag: "Digital Marketing",
    quote: "Our organic traffic skyrocketed by 300% in six months thanks to Nexus's SEO and content strategy.",
    name: "David Chen",
    role: "Marketing Head",
    avatarColor: "#06B6D4",
    initial: "D",
    rot: -1.2
  },
  {
    tag: "Data Analytics",
    quote: "The dashboards built by Nexus revealed cost-saving opportunities we had missed for years. Transformative data.",
    name: "Sarah Miller",
    role: "Lead Analyst",
    avatarColor: "#F43F5E",
    initial: "S",
    rot: 2.5
  }
];

const ClientSuccessPremiumStack = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isStackHovered, setIsStackHovered] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mobileIdx, setMobileIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const total = testimonials.length;

  const nextMobile = () => setMobileIdx((prev) => (prev + 1) % total);
  const prevMobile = () => setMobileIdx((prev) => (prev - 1 + total) % total);

  if (isMobile) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.title}>Client Success</div>
          <div className={styles.mobileSlider}>
            <div className={styles.card} style={{ position: "relative", transform: "none", opacity: 1, margin: 0, top: 0, left: 0 }}>
               <div className={styles.cardTag}>{testimonials[mobileIdx].tag}</div>
               <div className={styles.cardQuote}>&ldquo;{testimonials[mobileIdx].quote}&rdquo;</div>
               <div className={styles.cardAuthor}>
                 <div 
                   className={styles.cardAvatar} 
                   style={{ backgroundColor: testimonials[mobileIdx].avatarColor }}
                 >
                   {testimonials[mobileIdx].initial}
                 </div>
                 <div>
                   <div className={styles.cardName}>{testimonials[mobileIdx].name}</div>
                   <div className={styles.cardRole}>{testimonials[mobileIdx].role}</div>
                 </div>
               </div>
            </div>
            <div className={styles.mobileNav}>
              <button onClick={prevMobile} className={styles.navBtn} aria-label="Previous">
                <ChevronLeft size={20} />
              </button>
              <div className={styles.navDots}>
                {testimonials.map((_, i) => (
                  <div key={i} className={`${styles.navDot} ${i === mobileIdx ? styles.navDotActive : ""}`} />
                ))}
              </div>
              <button onClick={nextMobile} className={styles.navBtn} aria-label="Next">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  // Vertical Fan Step for spread (derived from 4-card coordinates step ~153px)
  const spreadStep = 153.5;
  const centerIdx = (total - 1) / 2;

  // Peek steps for stacked state
  const peekStep = 36;
  const fanStep = 46;

  // Offset to center the stack vertically in the wrapper
  // 4 cards peeking 36px = 108px total offset. 8 cards = 252px offset.
  // We want the middle of the peeking stack to be at top: 50%.
  const stackHeight = (total - 1) * peekStep;
  const stackCenterOffset = - (stackHeight / 2);

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Resetting stack...");
    setIsExpanded(false);
    setHoveredIdx(null);
    setIsStackHovered(false);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>Client Success</div>
        
        <div className={styles.desktopViewport}>
          <div className={`${styles.hintText} ${isExpanded ? styles.hidden : ""}`}>
            Click the stack to read all stories
          </div>

          <div 
            className={styles.stackWrapper}
            onClick={() => {
              if (!isExpanded) {
                console.log("Expanding stack...");
                setIsExpanded(true);
              }
            }}
            onMouseEnter={() => !isExpanded && setIsStackHovered(true)}
            onMouseLeave={() => !isExpanded && setIsStackHovered(false)}
            style={{ height: isExpanded ? 1400 : 600 }} // Larger height for spread state
          >
            {testimonials.map((t, idx) => {
              const itemHovered = hoveredIdx === idx && isExpanded;
              
              let ty, rot, sc = 1;

              if (!isExpanded) {
                // Stacked state: peeking centered vertically
                // Start from stackCenterOffset and add step
                const currentStep = isStackHovered ? fanStep : peekStep;
                const currentCenterOffset = - ((total - 1) * currentStep / 2);
                ty = currentCenterOffset + (idx * currentStep);
                rot = t.rot;
              } else if (itemHovered) {
                // Spread state hover: lifts 12px + scale 1.02
                ty = (idx - centerIdx) * spreadStep - 12;
                rot = (idx % 2 === 0 ? -1 : 1);
                sc = 1.02;
              } else {
                // Spread state: based on 153.5px step
                ty = (idx - centerIdx) * spreadStep;
                rot = (idx % 2 === 0 ? -1 : 1);
              }

              return (
                <div
                  key={idx}
                  className={`${styles.card} ${isExpanded ? styles.expandedCard : ""}`}
                  onMouseEnter={() => isExpanded && setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    zIndex: itemHovered ? 50 : (isExpanded ? 20 + idx : 10 + total - idx),
                    transform: `translate(-50%, -50%) translateY(${ty}px) rotate(${rot}deg) scale(${sc})`,
                    top: "50%",
                    left: "50%",
                    position: "absolute"
                  }}
                >
                  <div className={styles.cardTag}>{t.tag}</div>
                  <div className={styles.cardQuote}>&ldquo;{t.quote}&rdquo;</div>
                  <div className={styles.cardAuthor}>
                    <div 
                      className={styles.cardAvatar} 
                      style={{ backgroundColor: t.avatarColor }}
                    >
                      {t.initial}
                    </div>
                    <div>
                      <div className={styles.cardName}>{t.name}</div>
                      <div className={styles.cardRole}>{t.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.bottomControls}>
            {!isExpanded && (
              <div className={styles.pillLabel}>{total} stories</div>
            )}
            
            <button 
              className={`${styles.resetBtn} ${isExpanded ? styles.visible : ""}`}
              onClick={handleReset}
            >
              <RotateCcw size={14} /> Stack back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessPremiumStack;
