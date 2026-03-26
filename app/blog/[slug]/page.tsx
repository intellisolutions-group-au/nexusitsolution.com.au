"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { blogs, BlogPost } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  User, 
  Clock, 
  Share2, 
  ChevronRight, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Link as LinkIcon,
  Tag,
  Check,
  Layers,
  List,
  Info,
  CheckCircle2,
  XCircle,
  Plus,
  Minus,
  ChevronDown
} from "lucide-react";
import ReactMarkdown from "react-markdown";

// Types for TOC
interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const post = blogs.find((b) => b.slug === slug);

  // TOC Highlight logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%", threshold: 0 }
    );

    const headings = document.querySelectorAll("h2[id], h3[id]");
    headings.forEach((h) => observer.observe(h));

    return () => observer.disconnect();
  }, [post]);

  // Extract headings for Table of Contents
  const toc = useMemo(() => {
    if (!post) return [];
    const lines = post.content.split("\n");
    const items: TOCItem[] = [];
    lines.forEach((line) => {
      if (line.trim().startsWith("## ")) {
        const text = line.replace("## ", "").trim();
        const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
        items.push({ id, text, level: 2 });
      } else if (line.trim().startsWith("### ")) {
        const text = line.replace("### ", "").trim();
        const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
        items.push({ id, text, level: 3 });
      }
    });
    return items;
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-subtle">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">Return to Blog</Link>
        </div>
      </div>
    );
  }

  // Sidebar Data
  const categories = Array.from(new Set(blogs.map((b) => b.category))).map((cat) => ({
    name: cat,
    count: blogs.filter((b) => b.category === cat).length,
  }));

  const recentPosts = blogs
    .filter((b) => b.id !== post.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const relatedPosts = blogs
    .filter((b) => b.category === post.category && b.id !== post.id)
    .slice(0, 3);

  const takeaways = [
    "Prioritize scalability in early design phases.",
    "User experience is the core differentiator in modern software.",
    "Integrated security avoids late-stage bottlenecks.",
    "Agile methodologies drive faster time-to-market."
  ];

  const commonFaqs = [
    { q: "How long does it typically take to see results?", a: "Most clients see a measurable improvement within 3-6 months of implementation." },
    { q: "Is this solution compatible with legacy systems?", a: "Yes, our architecture is designed to integrate seamlessly with existing enterprise infrastructures." },
    { q: "What kind of support do you provide post-launch?", a: "We offer 24/7 dedicated support and maintenance packages tailored to your needs." }
  ];

  const handleShare = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = post.title;
    
    const shares: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };

    if (shares[platform]) {
      window.open(shares[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleCopyLink = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <main className="min-h-screen bg-bg-subtle relative overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.05),transparent_70%)]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-8"
          >
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors group w-fit"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Back to Insights</span>
            </button>

            <div className="max-w-4xl">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                {post.category}
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black text-dark mb-10 leading-[1.1] tracking-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-8 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 border-2 border-white shadow-sm">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="text-dark font-bold leading-none mb-1">{post.author}</p>
                    <p className="text-xs text-muted">Technical Lead</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-slate-200 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-primary/60" />
                  {post.estimatedReadTime} Read
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-video lg:aspect-21/9 rounded-[3rem] overflow-hidden shadow-2xl border border-black/5"
          >
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-linear-to-t from-dark/30 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Layout Content */}
      <section className="pb-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 relative">
            
            {/* Main Content Area */}
            <div className="space-y-16">
              
              {/* Key Takeaways */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 rounded-[3rem] bg-slate-50 border border-slate-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <h3 className="text-2xl font-sans font-black text-dark mb-8 flex items-center gap-3">
                  <Info size={24} className="text-primary" />
                  Key Takeaways
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {takeaways.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 size={14} className="text-primary" />
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Table of Contents (Mobile/Inline) */}
              {toc.length > 0 && (
                <div className="lg:hidden p-8 rounded-[2.5rem] bg-white border border-black/5">
                  <h4 className="font-sans font-bold text-lg mb-6 flex items-center gap-2">
                    <List size={20} className="text-primary" />
                    On this page
                  </h4>
                  <div className="space-y-4">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm transition-all ${item.level === 3 ? 'pl-6 text-slate-400' : 'font-bold text-slate-600'}`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Main Article Content */}
              <motion.article
                className="prose prose-slate prose-lg lg:prose-xl max-w-none 
                  prose-headings:font-sans prose-headings:font-black prose-headings:text-dark prose-headings:tracking-tight
                  prose-headings:scroll-mt-32
                  prose-p:text-slate-600 prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-dark prose-strong:font-bold
                  prose-img:rounded-[2rem] prose-img:shadow-xl
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic
                  prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md"
              >
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => {
                      const id = String(children).toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
                      return <h2 id={id}>{children}</h2>;
                    },
                    h3: ({ children }) => {
                      const id = String(children).toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
                      return <h3 id={id}>{children}</h3>;
                    }
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </motion.article>

              {/* Pros & Cons Section */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100">
                  <h4 className="text-lg font-black text-emerald-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-emerald-600" />
                    The Strategy Pros
                  </h4>
                  <ul className="space-y-4">
                    {["Full IP Ownership", "Unlimited Scalability", "Bespoke UX Design"].map((pro, i) => (
                      <li key={i} className="flex gap-3 text-emerald-800 text-sm font-medium">
                        <Plus size={16} className="shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-rose-50/50 border border-rose-100">
                  <h4 className="text-lg font-black text-rose-900 mb-6 flex items-center gap-2">
                    <XCircle size={20} className="text-rose-600" />
                    Potential Challenges
                  </h4>
                  <ul className="space-y-4">
                    {["Higher Initial Investment", "In-depth Discovery Required", "Ongoing Maintenance Needs"].map((con, i) => (
                      <li key={i} className="flex gap-3 text-rose-800 text-sm font-medium">
                        <Minus size={16} className="shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="space-y-6">
                <h3 className="text-3xl font-sans font-black text-dark mb-8">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {commonFaqs.map((faq: { q: string, a: string }, i: number) => (
                    <div 
                      key={i} 
                      className="rounded-3xl border border-black/5 bg-white overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                      >
                        <span className="font-bold text-dark group-hover:text-primary transition-colors">{faq.q}</span>
                        <ChevronDown 
                          size={20} 
                          className={`text-slate-400 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180 text-primary' : ''}`} 
                        />
                      </button>
                      <AnimatePresence>
                        {expandedFaq === i && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                          >
                            <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-black/5 pt-4">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Author Bio Section */}
              <div className="p-10 rounded-[3rem] bg-white border border-black/5 shadow-premium flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
                <div className="relative w-28 h-28 rounded-full overflow-hidden shrink-0 border-4 border-slate-50 shadow-inner">
                  <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                    <User size={48} />
                  </div>
                </div>
                <div className="grow text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-2xl font-sans font-black text-dark leading-none">Written by {post.author}</h4>
                      <p className="text-primary text-sm font-bold mt-2 font-mono uppercase tracking-widest">Nexus Engineering Lead</p>
                    </div>
                  </div>
                  <p className="text-slate-500 font-medium mb-8 leading-relaxed max-w-2xl">
                    Spearheading digital transformation at Nexus. Expert in Next.js, Cloud Architecture, and Enterprise Integration. 
                    Building the future of collaborative intelligence.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedPosts.slice(0, 2).map((rel) => (
                      <Link 
                        key={rel.id} 
                        href={`/blog/${rel.slug}`}
                        className="p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 transition-all flex items-center gap-3 group"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 relative">
                          <Image src={rel.image} alt={rel.title} fill className="object-cover" />
                        </div>
                        <span className="text-[10px] font-bold text-dark group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                          {rel.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>


            </div>

            {/* Sidebar */}
            <aside className="relative">
              <div className="sticky top-32 space-y-8">
                
                {/* TOC Section */}
                {toc.length > 0 && (
                  <div className="hidden lg:block p-8 rounded-[2.5rem] bg-white border border-black/5 shadow-sm">
                    <h4 className="font-sans font-bold text-lg mb-6 flex items-center gap-2 text-dark">
                      <List size={20} className="text-primary" />
                      Table of Contents
                    </h4>
                    <div className="space-y-1">
                      {toc.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block py-1.5 text-xs transition-all border-l-2 pl-4 hover:border-primary rounded-r-lg ${
                            activeTab === item.id 
                              ? 'border-primary text-primary bg-primary/5 font-bold' 
                              : 'border-transparent text-slate-600 hover:bg-slate-50'
                          } ${item.level === 3 ? 'ml-4' : ''}`}
                        >
                          {item.text}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Suggested Reading (Sidebar) */}
                <div className="p-8 rounded-[2.5rem] bg-white border border-black/5 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-sans font-bold text-lg text-dark flex items-center gap-2">
                      <Clock size={20} className="text-primary" />
                      Suggested
                    </h4>
                    <Link href="/blog" className="text-primary text-[10px] font-bold uppercase tracking-widest hover:underline">
                      View All
                    </Link>
                  </div>
                  <div className="space-y-6">
                    {relatedPosts.slice(0, 4).map((related) => (
                      <Link
                        key={related.id}
                        href={`/blog/${related.slug}`}
                        className="group flex gap-4 items-center"
                      >
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                          <Image 
                            src={related.image} 
                            alt={related.title} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-500" 
                          />
                        </div>
                        <div className="space-y-1.5 min-w-0">
                          <p className="text-[8px] font-bold text-primary uppercase tracking-[0.2em] leading-none">
                            {related.category}
                          </p>
                          <h5 className="font-bold text-sm text-dark group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                            {related.title}
                          </h5>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Share Dropdown component */}
                <div className="p-8 rounded-[2.5rem] bg-white border border-black/5 shadow-sm">
                   <h4 className="font-sans font-bold text-lg mb-6 text-dark flex items-center gap-2">
                     <Share2 size={20} className="text-primary" />
                     Share Insight
                   </h4>
                    <div className="flex gap-3">
                      {[
                        { Icon: Twitter, name: 'twitter' },
                        { Icon: Linkedin, name: 'linkedin' },
                        { Icon: Facebook, name: 'facebook' }
                      ].map(({ Icon, name }) => (
                        <button 
                          key={name}
                          onClick={() => handleShare(name)}
                          className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm"
                        >
                          <Icon size={20} />
                        </button>
                      ))}
                      <button 
                        onClick={handleCopyLink}
                        className="grow h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm gap-2 px-4"
                      >
                        <LinkIcon size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest">Copy</span>
                      </button>
                    </div>
                </div>

                {/* Categories */}
                <div className="p-8 rounded-[2.5rem] bg-white border border-black/5 shadow-sm">
                  <h4 className="font-sans font-bold text-lg mb-6 text-dark flex items-center gap-2">
                    <Layers size={20} className="text-primary" />
                    Categories
                  </h4>
                  <div className="space-y-4">
                    {categories.map((cat) => (
                      <Link
                        key={cat.name}
                        href={`/blog?category=${encodeURIComponent(cat.name)}`}
                        className="flex items-center justify-between group"
                      >
                        <span className="text-slate-600 group-hover:text-primary transition-colors font-medium text-sm">{cat.name}</span>
                        <span className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                          {cat.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>


              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-24 bg-dark text-white rounded-t-[5rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.1),transparent_70%)]" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-sans font-black mb-10 leading-tight">
              Ready to Build Your <span className="text-premium-gradient">Digital Success?</span>
            </h2>
            <p className="text-slate-400 text-xl font-medium mb-12 max-w-2xl mx-auto">
              Partner with Nexus to transform your vision into an industry-leading technical solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="px-12 py-6 bg-white text-dark font-black rounded-full hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl group flex items-center gap-3"
              >
                Schedule a Consultation
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="text-white font-bold hover:text-primary transition-colors py-4">
                Explore Our Expertise
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

