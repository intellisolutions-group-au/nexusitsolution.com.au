"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { BlogPost } from "@/data/blogs";

interface BlogFeaturedProps {
  post: BlogPost;
}

export default function BlogFeatured({ post }: BlogFeaturedProps) {
  return (
    <section className="py-16 md:py-24 bg-white/50 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative overflow-hidden rounded-[3rem] bg-white border border-black/5 shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-700"
        >
          <div className="grid lg:grid-cols-2 items-center">
            {/* Image Section */}
            <div className="relative h-[350px] lg:h-[600px] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Premium Gradient Overlay on Image */}
              <div className="absolute inset-0 bg-linear-to-t from-dark/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              
              <div className="absolute top-8 left-8">
                <span className="px-5 py-2 rounded-full bg-primary text-white text-[10px] font-bold tracking-[0.2em] uppercase shadow-xl">
                  Featured Article
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-10 md:p-16 lg:p-20">
              <div className="flex flex-wrap items-center gap-6 mb-10 text-[12px] font-mono uppercase tracking-widest text-muted">
                <span className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-50 text-dark font-bold">
                  {post.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-primary" />
                  {post.date}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span className="flex items-center gap-2 font-bold text-primary">
                  <Clock size={14} />
                  {post.estimatedReadTime} Read
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-sans font-black text-dark mb-8 leading-[1.1] tracking-tight group-hover:text-primary transition-colors duration-500">
                {post.title}
              </h2>

              <p className="text-slate-600 text-lg md:text-xl mb-12 leading-relaxed line-clamp-3 font-medium">
                {post.description}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-3 text-dark font-black text-xl group/link relative"
              >
                <span className="relative z-10">Read Full Insight</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500" />
                <ArrowRight size={22} className="group-hover/link:translate-x-2 transition-transform duration-500 text-primary" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
