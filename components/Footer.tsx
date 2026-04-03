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
        { name: "Android Apps", slug: "android-apps" }
      ]
    },
    {
      title: "Web & Sync",
      links: [
        { name: "Website Development", slug: "website-development" },
        { name: "Blockchain Dev", slug: "blockchain-development" },
        { name: "API & Backend Sync", slug: "api-backend-sync" }
      ]
    },
    {
      title: "Next-Gen",
      links: [
        { name: "AI & ML Engineering", slug: "ai-ml-development" },
        { name: "AR / VR Experience", slug: "ar-vr-development" },
        { name: "Chess Game Dev", slug: "chess-game-development" }
      ]
    }
  ];

  return (
    <footer className="relative bg-white pt-32 pb-16 overflow-hidden border-t border-gray-100">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-24">

          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-6 text-center md:text-left">
            <Link href="/" className="inline-block group">
              <NextImage
                src="/logo/logo.png"
                alt="NEXUS IT SOLUTION"
                width={220}
                height={55}
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-500 text-[14px] leading-relaxed max-w-sm">
              We engineer enterprise-grade digital solutions. Empowering global innovators with robust web, mobile, and AI technologies.
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start pt-2">
               {/* Add social links or trust badges here if needed */}
               <div className="flex -space-x-2">
                 {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] text-gray-400 font-bold">
                      0{i}
                    </div>
                 ))}
               </div>
               <span className="text-[12px] font-semibold text-gray-600">Trusted by 100+ clients</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-1">
            <h4 className="font-mono text-[11px] tracking-[0.25em] uppercase text-gray-900 mb-6 text-center md:text-left font-bold flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/20 flex items-center justify-center"><span className="w-1 h-1 rounded-full bg-primary"></span></span>
              Company
            </h4>
            <ul className="space-y-4 text-center md:text-left">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Latest News", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center justify-center md:justify-start text-[14px] font-medium text-gray-500 hover:text-primary transition-colors">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Software */}
          <div className="lg:col-span-1">
            <h4 className="font-mono text-[11px] tracking-[0.25em] uppercase text-gray-900 mb-6 text-center md:text-left font-bold flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary/20 flex items-center justify-center"><span className="w-1 h-1 rounded-full bg-secondary"></span></span>
              Solutions
            </h4>
            <ul className="space-y-3 text-center md:text-left">
              {serviceCategories.flatMap((category) => category.links).map((link) => (
                <li key={link.name}>
                  <Link href={`/services/${link.slug}`} className="group flex items-center justify-center md:justify-start text-[14px] font-medium text-gray-500 hover:text-secondary transition-colors">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-secondary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100/50">
              <h4 className="font-mono text-[11px] tracking-[0.25em] uppercase text-gray-900 mb-6 text-center md:text-left font-bold flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-accent/20 flex items-center justify-center"><span className="w-1 h-1 rounded-full bg-accent"></span></span>
                Get in Touch
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 justify-center md:justify-start text-center md:text-left">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-[0.1em] text-gray-400 mb-1">HQ Address</span>
                    <p className="text-[14px] font-medium text-gray-700 leading-relaxed">
                      Unit 12/8 Hampstead Rd,<br />
                      Homebush West, NSW 2140, Australia
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 justify-center md:justify-start text-center md:text-left">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-primary shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-[0.1em] text-gray-400 mb-1">Direct Line</span>
                    <a href="tel:0459472474" className="text-[14px] font-medium text-gray-700 hover:text-primary transition-colors">
                      0459 472 474
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 justify-center md:justify-start text-center md:text-left">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-primary shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-[0.1em] text-gray-400 mb-1">Email Support</span>
                    <a href="mailto:info@nexusitsolution.com.au" className="text-[14px] font-medium text-gray-700 hover:text-primary transition-colors">
                      info@nexusitsolution.com.au
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] font-medium text-gray-500">
            © {new Date().getFullYear()} <span className="text-gray-900 font-semibold">NEXUS IT SOLUTION</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] font-medium text-gray-500">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
