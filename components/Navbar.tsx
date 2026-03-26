"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, MonitorSmartphone, Code, Cpu, Globe, Layout, Search, Database, Layers, Award } from "lucide-react";
import styles from "./Navbar.module.css";

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
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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

      // Reset first to get natural centered position
      setDropdownXOffset(0);

      // Must wait for next frame to get true rect after reset
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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Why Us", href: "/WhyChooseUs" },
    { name: "Contact", href: "/contact" },
  ];

  const isServicesActive = pathname.startsWith("/services");

  return (
    <>
      <div className={styles.navWrap}>
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
          <div className={styles.container}>
            {/* Logo */}
            <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
              <Image
                src="/logo/logo.png"
                alt="NEXUS IT SOLUTION"
                width={140}
                height={40}
                priority
                className="h-8 w-auto object-contain"
              />
            </Link>

            {/* Desktop Links */}
            <ul className={styles.navLinks}>
              <li><Link href="/" className={`${styles.linkItem} ${pathname === "/" ? styles.linkActive : ""}`}>Home</Link></li>
              <li><Link href="/about" className={`${styles.linkItem} ${pathname === "/about" ? styles.linkActive : ""}`}>About</Link></li>
              <li><Link href="/blog" className={`${styles.linkItem} ${pathname === "/blog" ? styles.linkActive : ""}`}>Blog</Link></li>

              {/* Services Dropdown */}
              <li
                className={styles.servicesDropdown}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className={`${styles.linkItem} ${isServicesActive ? styles.linkActive : ""}`}>
                  Services <span className={styles.chevron}>▾</span>
                </div>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      ref={dropdownRef}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={styles.dropdownPanel}
                      style={{
                        "--dropdown-offset": `${dropdownXOffset}px`
                      } as any}
                    >
                      {serviceCategories.map((category, idx) => {
                        const IconComponent = category.icon;
                        return (
                          <div key={idx} className={styles.dropdownColumn} id={`dropdown-col-${idx}`}>
                            <h5>
                              <IconComponent size={14} className="inline-block mr-2 mb-0.5" />
                              {category.title}
                            </h5>
                            {category.services.map((svc, sIdx) => (
                              <Link key={sIdx} href={svc.href} className={styles.dropdownItem}>
                                {svc.name}
                              </Link>
                            ))}
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li><Link href="/why-choose-us" className={`${styles.linkItem} ${pathname === "/why-choose-us" ? styles.linkActive : ""}`}>Why Us</Link></li>
            </ul>

            <Link href="/contact" className={styles.ctaBtn}>
              Contact Us
            </Link>

            {/* Mobile Toggle */}
            <div
              className={`${styles.menuToggle} ${isOpen ? styles.active : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={styles.mobileOverlay}
              >
                <Link href="/" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/about" className={styles.mobileLink} onClick={() => setIsOpen(false)}>About</Link>
                <Link href="/blog" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Blog</Link>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-primary">Services</span>
                  <div className={styles.mobileServicesList}>
                    {serviceCategories.flatMap(cat => cat.services).map((svc, sIdx) => (
                      <Link
                        key={sIdx}
                        href={svc.href}
                        className={styles.mobileServiceItem}
                        onClick={() => setIsOpen(false)}
                      >
                        {svc.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/why-choose-us" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Why Us</Link>
                <Link href="/contact" className="mt-4 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-center" onClick={() => setIsOpen(false)}>Free Consultant</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </>
  );
}
