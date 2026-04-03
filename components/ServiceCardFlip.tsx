"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface ServiceCardFlipProps {
  title: string;
  icon?: any;
  shortDesc: string;
  slug: string;
  image: string;
  tag?: string;
  delay?: number;
}

function IconComponent({ icon: Icon }: { icon: any }) {
  return <Icon size={24} />;
}

export default function ServiceCardFlip({ 
  title, 
  icon, 
  shortDesc, 
  slug, 
  image,
  tag = "SERVICE",
  delay = 0 
}: ServiceCardFlipProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="relative w-full h-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/services/${slug}`} className="block h-full">
        <div className={`h-full flex flex-col overflow-hidden transition-all duration-500 glass-card-premium ${isHovered ? '-translate-y-2' : ''}`}>
          {/* Top Illustration/Image */}
          <div className="relative w-full h-48 overflow-hidden">
            <Image 
              src={image} 
              alt={title}
              fill
              className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
          </div>

          <div className="flex flex-col p-6 grow">
            {/* Service Tag */}
            <span className="text-[10px] font-bold text-primary tracking-[0.2em] mb-3 uppercase">
              {tag}
            </span>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors flex items-center gap-3">
              {icon && <div className="text-primary"><IconComponent icon={icon} /></div>}
              {title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6 grow">
              {shortDesc}
            </p>

            {/* Tap to Explore Button */}
            <div className="mt-auto">
              <motion.div
                layout
                className={`inline-flex items-center gap-4 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer w-full justify-center relative overflow-hidden ${isHovered ? 'bg-primary text-white border-primary shadow-xl shadow-primary/30' : 'text-primary bg-primary/5 border-primary/10'}`}
                style={{ flexDirection: isHovered ? "row-reverse" : "row" }}
                transition={{
                  layout: { duration: 0.4, ease: "easeInOut" }
                }}
              >
                {isHovered && <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary opacity-100 transition-opacity duration-500" />}
                <motion.span layout className="relative z-10 whitespace-nowrap">
                  Tap to explore
                </motion.span>
                <motion.div layout className="relative z-10 flex items-center">
                  <ArrowRight size={14} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
