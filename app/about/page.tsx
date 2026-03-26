"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import AntiGravity from "@/components/AntiGravity";
import AboutHeroAnimation from "@/components/AboutHeroAnimation";
import Image from "next/image";
import SuccessStorySection from "@/components/SuccessStorySection";
import VisionSection from "@/components/VisionSection";
import ProcessStep from "@/components/ProcessStep";
import AwardsSection from "@/components/AwardsSection";

const aboutTitle = "About Nexus IT";

export default function AboutPage() {
  const processRef = useRef<HTMLElement>(null);

  // Track scroll progress within the process section
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the scroll progress for the moving dot
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-bg-subtle">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-black/5 pt-32 pb-24">
        {/* Layer 1: Background Image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/hero-about.png"
            alt="Technology Network"
            fill
            className="object-cover opacity-60"
          />
          {/* Soft Glassmorphism Overlay */}
          <div className="absolute inset-0 backdrop-blur-[1px] bg-white/20" />
          <div className="absolute inset-0 bg-linear-to-b from-white/25 via-transparent to-white/10 opacity-80" />
        </div>

        {/* Layer 2: Animation Overlay */}
        <div className="absolute inset-0 z-1 opacity-40">
          <AboutHeroAnimation />
        </div>

        {/* Layer 3: Redesigned Content */}
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-primary/30" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary">
              Who We Are
            </span>
            <div className="h-px w-8 bg-primary/30" />
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-sans font-extrabold text-dark mb-10 tracking-tight leading-[0.9]">
            {aboutTitle.split(" ").map((word, i) => (
              <span key={i} className="inline-block whitespace-nowrap mr-[0.3em]">
                {word.split("").map((char, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, y: 50, rotateX: -30 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: (i * 0.1) + (j * 0.03),
                      ease: [0.2, 1, 0.3, 1]
                    }}
                    className={`inline-block ${word === "Nexus" || word === "IT" ? "text-premium-gradient" : ""}`}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-slate-800 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            We area premier web and mobile app development company dedicated to delivering cutting-edge mobility solutions. We transform visionary ideas into powerful digital realities.
          </motion.p>
        </div>
      </section>

      <SuccessStorySection />

      <AntiGravity trigger="scroll">
        <VisionSection />
      </AntiGravity>

      <section ref={processRef} className="w-full py-24 relative bg-white overflow-hidden" id="process">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-24">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-[9px] uppercase tracking-[0.4em] text-primary mb-6 block"
            >
              Systematic Approach
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-sans font-extrabold text-dark mb-6 tracking-tight">
              Our <span className="text-premium-gradient">Process</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              A streamlined, transparent approach to bringing your vision to life with technical precision and creative excellence.
            </p>
          </div>

          <div className="flex flex-col gap-24 relative">
            {/* Background Line */}
            <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 md:-translate-x-1/2 w-px bg-black/5 hidden md:block"></div>

            {/* Filled Line */}
            <motion.div
              className="absolute top-0 bottom-0 left-[20px] md:left-1/2 md:-translate-x-1/2 w-px bg-primary/40 hidden md:block origin-top shadow-[0_0_10px_rgba(124,58,237,0.3)]"
              style={{ scaleY: smoothProgress }}
            ></motion.div>

            {/* Glowing Dot */}
            <motion.div
              className="absolute top-0 left-[20px] md:left-1/2 w-2.5 h-2.5 rounded-full bg-white border border-primary shadow-lg hidden md:block z-20"
              style={{
                x: "-50%",
                y: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                marginTop: "-5px"
              }}
            ></motion.div>

            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "We start by deeply understanding your business goals, target audience, and functional requirements to lay a solid foundation.",
                imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
                progressValue: 0.12
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Our design team crafts intuitive, pixel-perfect UI/UX interfaces that align with your brand identity and provide an exceptional user journey.",
                imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
                isReversed: true,
                progressValue: 0.37
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Utilizing the latest technologies, we build scalable solutions strictly adhering to coding standards, followed by rigorous quality assurance.",
                imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=400&fit=crop",
                progressValue: 0.62
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "We ensure a smooth launch and provide continuous maintenance and support to keep your digital asset optimized.",
                imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop",
                isReversed: true,
                progressValue: 0.87
              }
            ].map((stepData, idx) => (
              <AntiGravity key={idx} trigger="scroll">
                <ProcessStep
                  {...stepData}
                  scrollYProgress={scrollYProgress}
                />
              </AntiGravity>
            ))}
          </div>
        </div>
      </section>

      {/* <div className="py-24 bg-bg-subtle">
        <ClientSuccessStackSlider />
      </div> */}

      <AwardsSection />
    </main>
  );
}
