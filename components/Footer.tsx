"use client";

import Link from "next/link";
import NextImage from "next/image";
import { ArrowRight, Globe, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const serviceCategories = [
    {
      title: "Core Software",
      links: [
        { name: "Software Engineering", slug: "software-development" },
        { name: "App Support & Maintenance", slug: "app-support-maintenance" },
        { name: "System Integration", slug: "system-integration" }
      ]
    },
    {
      title: "Mobile Solutions",
      links: [
        { name: "Mobile App Development", slug: "mobile-app-development" },
        { name: "Flutter Development", slug: "flutter-app-development" },
        { name: "Android Development", slug: "android-apps" }
      ]
    },
    {
      title: "Web & Sync",
      links: [
        { name: "Website Development", slug: "website-development" },
        { name: "Blockchain Solutions", slug: "blockchain-development" },
        { name: "API & Backend Sync", slug: "api-backend-sync" }
      ]
    },
    {
      title: "Next-Gen",
      links: [
        { name: "AI & ML Engineering", slug: "ai-ml-development" },
        { name: "AR / VR Experiences", slug: "ar-vr-development" },
        { name: "Chess Game Dev", slug: "chess-game-development" }
      ]
    }
  ];

  return (
    <footer className="relative bg-[#1e2028] pt-32 pb-16 overflow-hidden border-t border-white/5">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-24">

          {/* Brand & Mission */}
          <div className="lg:col-span-1 space-y-6 text-center md:text-left">
            <Link href="/" className="inline-block">
              <NextImage
                src="/logo/footer-logo.png"
                alt="NEXUS IT SOLUTION"
                width={200}
                height={200}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/40 text-[13px] leading-relaxed">
              Leading digital agency building next-generation mobile and web products for global innovators.
            </p>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-1">
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-10 text-center md:text-left">Legal Links</h4>
            <ul className="space-y-4 text-center md:text-left">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Services", href: "/services" },
                { name: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] font-medium text-white/50 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Software */}
          <div className="lg:col-span-1">
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-10 text-center md:text-left">Core Software</h4>
            <ul className="space-y-4 text-center md:text-left">
              {[
                { name: "Software Engineering", href: "/services/software-development" },
                { name: "App Support & Maintenance", href: "/services/app-support-maintenance" },
                { name: "System Integration", href: "/services/system-integration" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] font-medium text-white/50 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Solutions */}
          <div className="lg:col-span-1">
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-10 text-center md:text-left">Mobile Solutions</h4>
            <ul className="space-y-4 text-center md:text-left">
              {[
                { name: "Mobile App Development", href: "/services/mobile-app-development" },
                { name: "Flutter Development", href: "/services/flutter-app-development" },
                { name: "Android Apps", href: "/services/android-apps" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] font-medium text-white/50 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Web & Sync / Next-Gen */}
          <div className="lg:col-span-1">
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-10 text-center md:text-left">Web & Sync</h4>
            <ul className="space-y-4 text-center md:text-left mb-10">
              {[
                { name: "Website Development", href: "/services/website-development" },
                { name: "Blockchain Dev", href: "/services/blockchain-development" },
                { name: "API & Backend Sync", href: "/services/api-backend-sync" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] font-medium text-white/50 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-10 text-center md:text-left">Next-Gen</h4>
            <ul className="space-y-4 text-center md:text-left">
              {[
                { name: "AI & ML Engineering", href: "/services/ai-ml-development" },
                { name: "AR / VR Experience", href: "/services/ar-vr-development" },
                { name: "Chess Game Dev", href: "/services/chess-game-development" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[14px] font-medium text-white/50 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-1">
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-10 text-center md:text-left">Contact Us</h4>
            <ul className="space-y-8">
              <li className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/30 mb-2">Address</span>
                <p className="text-[13px] font-bold text-white/80 leading-relaxed max-w-[180px]">
                  Unit 12/8 Hampstead Rd, <br />
                  Homebush West, NSW 2140
                </p>
              </li>
              <li className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/30 mb-2">Phone</span>
                <a href="tel:0459472474" className="text-[13px] font-bold text-white/80 hover:text-primary transition-colors">
                  0459 472 474
                </a>
              </li>
              <li className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/30 mb-2">Email</span>
                <a href="mailto:info@nexusitsolution.com.au" className="text-[13px] font-bold text-white/80 hover:text-primary transition-colors">
                  info@nexusitsolution.com.au
                </a>
              </li>
            </ul>

          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-mono tracking-widest text-white/30 uppercase">
          <span>© 2024 NEXUS IT SOLUTION. ALL RIGHTS RESERVED.</span>
          <span>LICENSED & REGULATED</span>
        </div>
      </div>
    </footer>
  );
}
