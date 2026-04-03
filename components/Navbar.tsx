"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, MonitorSmartphone, Code, Cpu, Globe, Layout, Search, Database, Layers, Award, ArrowRight } from "lucide-react";

const serviceCategories = [
  {
    title: "CORE SOFTWARE",
    icon: Layers,
    services: [
      { name: "Software Engineering", href: "/services/software-development" },
      { name: "App Support & Maintenance", href: "/services/app-support-maintenance" },
      { name: "System Integration", href: "/services/system-integration" },
    ]
  },
  {
    title: "MOBILE SOLUTIONS",
    icon: MonitorSmartphone,
    services: [
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "Flutter Development", href: "/services/flutter-app-development" },
      { name: "Android Development", href: "/services/android-apps" },
    ]
  },
  {
    title: "WEB & SYNC",
    icon: Globe,
    services: [
      { name: "Website Development", href: "/services/website-development" },
      { name: "Blockchain Solutions", href: "/services/blockchain-development" },
      { name: "API & Backend Sync", href: "/services/api-backend-sync" },
    ]
  },
  {
    title: "NEXT-GEN",
    icon: Cpu,
    services: [
      { name: "AI & ML Engineering", href: "/services/ai-ml-development" },
      { name: "AR / VR Experiences", href: "/services/ar-vr-development" },
      { name: "Chess Game Dev", href: "/services/chess-game-development" },
    ]
  }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsServicesOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const [dropdownXOffset, setDropdownXOffset] = useState(0);

  useEffect(() => {
    if (!isServicesOpen || !dropdownRef.current) {
      setDropdownXOffset(0);
      return;
    }

    const updatePosition = () => {
      if (!dropdownRef.current) return;

      setDropdownXOffset(0);

      requestAnimationFrame(() => {
        if (!dropdownRef.current) return;
        const rect = dropdownRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const margin = 20;

        let shift = 0;
        if (rect.right > viewportWidth - margin) {
          shift = (viewportWidth - margin) - rect.right;
        } else if (rect.left < margin) {
          shift = margin - rect.left;
        }

        if (shift !== 0) {
          setDropdownXOffset(shift);
        }
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [isServicesOpen]);

  const isServicesActive = pathname.startsWith("/services");

  return (
    <>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[999] w-[calc(100%-32px)] max-w-[1160px]">
        <nav
          className={`flex items-center justify-between px-5 sm:px-6 rounded-2xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? "h-[52px] bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-gray-200/60"
              : "h-14 bg-[#f8f9fc]/85 backdrop-blur-xl border border-black/5 shadow-[0_4px_28px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)]"
          }`}
        >
          <div className="contents">
            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Image
                src="/logo/logo.png"
                alt="NEXUS IT SOLUTION"
                width={140}
                height={40}
                priority
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </Link>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
              <li>
                <Link
                  href="/"
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium transition-colors ${
                    pathname === "/" ? "text-primary bg-primary/5" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium transition-colors ${
                    pathname === "/about" ? "text-primary bg-primary/5" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium transition-colors ${
                    pathname === "/blog" ? "text-primary bg-primary/5" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  Blog
                </Link>
              </li>

              <li className="relative group">
                <Link
                  href="/services"
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[14px] font-medium transition-colors cursor-pointer ${
                    isServicesActive ? "text-primary bg-primary/5" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`opacity-60 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </Link>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      ref={dropdownRef}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-white border border-gray-100 rounded-2xl p-6 w-[800px] grid grid-cols-3 gap-8 shadow-[0_40px_100px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] z-[1000]"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {/* Left Column - Featured or Overview */}
                      <div className="col-span-1 bg-gray-50/50 rounded-xl p-5 border border-gray-100/50 flex flex-col justify-between">
                         <div>
                            <h3 className="text-[16px] font-bold text-gray-900 mb-2">Our Solutions</h3>
                            <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                              Enterprise-grade software and mobile development tailored for modern businesses.
                            </p>
                         </div>
                         <Link href="/services" className="inline-flex items-center gap-2 text-[13px] font-bold text-primary hover:text-gray-900 transition-colors group/link">
                            View All Services
                            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                         </Link>
                      </div>

                      {/* Right Columns - Categories */}
                      <div className="col-span-2 grid grid-cols-2 gap-6">
                        {serviceCategories.slice(0, 4).map((category, idx) => {
                          const IconComponent = category.icon;
                          return (
                            <div key={idx}>
                              <h5 className="font-sans text-[12px] font-bold tracking-[1px] uppercase text-gray-900 mb-4 flex items-center">
                                <span className="w-6 h-6 rounded-md bg-primary/10 text-primary flex items-center justify-center mr-2">
                                  <IconComponent size={12} />
                                </span>
                                {category.title}
                              </h5>
                              <div className="flex flex-col gap-2.5">
                                {category.services.map((svc, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    href={svc.href}
                                    className="group/item relative block text-[13.5px] font-medium text-gray-500 hover:text-primary transition-colors flex items-center gap-2"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover/item:bg-primary transition-colors" />
                                    {svc.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link
                  href="/why-choose-us"
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium transition-colors ${
                    pathname === "/why-choose-us" ? "text-primary bg-primary/5" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  Why Us
                </Link>
              </li>
            </ul>

            <Link
              href="/contact"
              className="hidden lg:inline-flex bg-gray-900 text-white px-5 py-2 rounded-xl text-[13px] font-semibold transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:bg-primary hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,58,237,0.3)]"
            >
              Contact Us
            </Link>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-[1002]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-5 h-[2px] bg-gray-900 rounded-full transition-transform duration-300 ${isOpen ? "translate-y-[8px] rotate-45" : ""}`} />
              <div className={`w-5 h-[2px] bg-gray-900 rounded-full transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <div className={`w-5 h-[2px] bg-gray-900 rounded-full transition-transform duration-300 ${isOpen ? "-translate-y-[8px] -rotate-45" : ""}`} />
            </button>
          </div>

          {/* Mobile Menu Panel */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-[-16px] bg-[#f8f9fc] z-[1001] p-8 pt-24 flex flex-col gap-6 overflow-y-auto h-[100vh]"
              >
                <Link href="/" className="text-[28px] font-extrabold text-gray-900" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/about" className="text-[28px] font-extrabold text-gray-900" onClick={() => setIsOpen(false)}>About</Link>
                <Link href="/blog" className="text-[28px] font-extrabold text-gray-900" onClick={() => setIsOpen(false)}>Blog</Link>
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-[11px] tracking-[0.2em] font-bold uppercase text-primary">Services</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceCategories.flatMap(cat => cat.services).map((svc, sIdx) => (
                      <Link
                        key={sIdx}
                        href={svc.href}
                        className="text-[14px] font-medium text-gray-600 p-3 bg-white rounded-xl border border-gray-100 shadow-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {svc.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/why-choose-us" className="text-[28px] font-extrabold text-gray-900" onClick={() => setIsOpen(false)}>Why Us</Link>
                <Link
                  href="/contact"
                  className="mt-4 px-6 py-4 bg-primary text-white rounded-xl font-bold text-center shadow-lg shadow-primary/20"
                  onClick={() => setIsOpen(false)}
                >
                  Free Consultation
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </>
  );
}
