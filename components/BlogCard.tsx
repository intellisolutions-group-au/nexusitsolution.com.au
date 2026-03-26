"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock, ChevronRight } from "lucide-react";
import { BlogPost } from "@/data/blogs";

interface BlogCardProps {
  post: BlogPost;
  index: number;
  isLarge?: boolean;
}

export default function BlogCard({ post, index, isLarge }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group flex flex-col h-full glass-card-premium bg-white/70 backdrop-blur-md overflow-hidden shadow-sm transition-all duration-700 hover:border-primary/20 ${
        isLarge 
          ? "rounded-[3rem] md:flex-row shadow-2xl shadow-primary/5 hover:shadow-primary/20 hover:-translate-y-2" 
          : "rounded-3xl hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5"
      }`}
    >
      {/* Thumbnail */}
      <div className={`relative overflow-hidden ${isLarge ? "w-full md:w-[45%] h-[300px] md:h-full" : "h-[260px]"}`}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-dark/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Category Badge Overlay */}
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.15em] uppercase shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-8 md:p-10 flex flex-col grow ${isLarge ? "md:w-[55%] justify-center" : ""}`}>
        <div className="flex items-center gap-4 mb-6 text-[11px] font-mono uppercase tracking-widest text-muted">
          <div className="flex items-center gap-2">
            <User size={14} className="text-primary/60" />
            Nexus Team
          </div>
          <span className="w-1 h-1 rounded-full bg-slate-200" />
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-primary/60" />
            {post.estimatedReadTime}
          </div>
        </div>

        <h3 className={`font-sans font-black text-dark mb-5 leading-tight group-hover:text-primary transition-colors duration-300 ${isLarge ? "text-3xl md:text-5xl" : "text-2xl"}`}>
          {post.title}
        </h3>

        <p className={`text-slate-500 leading-relaxed mb-10 line-clamp-3 font-medium ${isLarge ? "text-lg md:text-xl" : "text-[15px]"}`}>
          {post.description}
        </p>

        <div className="mt-auto">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-3 text-dark font-black text-sm tracking-widest uppercase group/link relative"
          >
            <span>Read Insight</span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500" />
            <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform duration-500 text-primary" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
