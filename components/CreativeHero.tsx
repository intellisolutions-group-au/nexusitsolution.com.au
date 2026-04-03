"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    headline: "Designed to Elevate Digital Innovation.",
    subheadline: "Nexus IT Solution specialises in cutting-edge mobile, web & software development. We transform your vision into powerful digital products.",
    image: "/images/home/hero.webp",
    cta1: "Contact Us",
    cta1Link: "/contact",
    cta2: "Our Services",
    cta2Link: "/services",
    badge: "Premium IT Solutions"
  },
  {
    id: 2,
    headline: "Empowering Modern Cloud Infrastructure.",
    subheadline: "Scalable, secure, and robust cloud solutions tailored for enterprise growth. Future-proof your business today.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    cta1: "Explore Cloud",
    cta1Link: "/services",
    cta2: "Free Consultation",
    cta2Link: "/contact",
    badge: "Cloud Computing"
  },
  {
    id: 3,
    headline: "Next-Gen Cyber Security Solutions.",
    subheadline: "Protecting your digital assets with advanced threat detection, compliance, and zero-trust architectures.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    cta1: "Secure Your Business",
    cta1Link: "/contact",
    cta2: "Learn More",
    cta2Link: "/services",
    badge: "Enterprise Security"
  }
];

export default function CreativeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-slate-50 pt-24 pb-20">
      {/* Background slider with Light Theme Overlays */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt="Hero Background"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Elegant light theme gradients & overlays */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50/90 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container-custom relative z-10 w-full h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-start"
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {slides[currentSlide].badge}
              </motion.div>

              {/* Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-sans font-black leading-[1.1] tracking-tight text-slate-900 mb-6"
              >
                {slides[currentSlide].headline}
              </motion.h1>

              {/* Subheadline */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
              >
                {slides[currentSlide].subheadline}
              </motion.p>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <Link
                  href={slides[currentSlide].cta1Link}
                  className="group relative px-8 py-4 bg-primary rounded-xl text-white font-bold text-base transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 flex items-center gap-2"
                >
                  <span>{slides[currentSlide].cta1}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href={slides[currentSlide].cta2Link}
                  className="group px-8 py-4 bg-white border-2 border-slate-200 rounded-xl text-slate-700 font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary shadow-sm hover:shadow-md"
                >
                  {slides[currentSlide].cta2}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-10 right-4 md:right-10 flex items-center gap-6 z-20">
          {/* Pagination Dots */}
          <div className="hidden md:flex gap-3 mr-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentSlide(index);
                }}
                className={`h-2 transition-all duration-300 rounded-full ${
                  currentSlide === index ? "w-8 bg-primary" : "w-2 bg-slate-300 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="p-3 md:p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 md:p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
