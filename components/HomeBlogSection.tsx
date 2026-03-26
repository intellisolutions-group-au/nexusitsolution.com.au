"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogs } from "@/data/blogs";
import BlogCard from "./BlogCard";

export default function HomeBlogSection() {
  // Take the first 3 blogs for the preview
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-slate-50 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6 border border-slate-100"
            >
              Latest Insights & Blogs
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-black text-dark mb-6 leading-tight tracking-tight"
            >
              Explore our latest <span className="text-premium-gradient">thoughts, trends</span>, and expertise.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed"
            >
              Deep dives into the technologies and strategies that power our premium digital solutions across all services.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/blog"
              className="group flex items-center gap-3 px-8 py-4 bg-dark text-white rounded-2xl font-bold text-sm tracking-wide hover:bg-primary transition-all duration-300 shadow-xl shadow-dark/10 hover:shadow-primary/20"
            >
              View All Blogs
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {latestBlogs.map((post, idx) => (
            <BlogCard key={post.id} post={post} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
