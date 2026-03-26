"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/data/blogs";

interface BlogDetailHeroProps {
  post: BlogPost;
}

export default function BlogDetailHero({ post }: BlogDetailHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-bg-subtle">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none opacity-20">
        <Image
          src={post.image}
          alt=""
          fill
          className="object-cover blur-3xl scale-125"
        />
      </div>

      <div className="container-custom relative z-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-12 hover:gap-3 transition-all"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8"
          >
            {post.category}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-sans font-extrabold text-dark mb-10 leading-none tracking-tight"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap items-center gap-8 text-[12px] font-mono uppercase tracking-widest text-muted"
          >
            <div className="flex items-center gap-2">
              <User size={14} className="text-primary" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-primary" />
              {post.estimatedReadTime} Read
            </div>
          </motion.div>
        </div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 relative aspect-2/1 rounded-[3.5rem] overflow-hidden shadow-2xl shadow-black/10"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
