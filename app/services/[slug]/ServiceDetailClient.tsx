"use client";

import { useParams, useRouter } from "next/navigation";
import { services, Service } from "@/data/services";
import { useEffect, useState, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Award,
  Leaf,
  Users
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


export default function ServiceDetailClient() {
  const { slug } = useParams();
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const data = useMemo(() => services.find((s) => s.slug === slug) as Service | undefined, [slug]);
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!data) {
      router.push("/services");
    }
  }, [data, router]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [data]);

  if (!data) return null;

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <main className="bg-bg-subtle">
      {/* SECTION 1 — HERO */}
      <section className="bg-dark pt-40 pb-24 min-h-[450px] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={data.image}
            alt=""
            fill
            className="object-cover opacity-20 filter blur-sm"
          />
          <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-b from-dark via-dark/60 to-dark"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll" ref={addToRefs}>
              <nav className="flex items-center gap-3 text-white/40 text-[10px] font-mono font-bold uppercase tracking-[0.3em] mb-8">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight size={10} />
                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                <ChevronRight size={10} />
                <span className="text-white/60">{data.tag}</span>
              </nav>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                {data.title.split(" ").map((word: string, i: number) => (
                  <span key={i} className="inline-block whitespace-nowrap mr-[0.3em]">
                    {word.split("").map((char, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, y: 40, rotateX: -30 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: (i * 0.1) + (j * 0.03),
                          ease: [0.2, 1, 0.3, 1]
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-white/60 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-medium"
              >
                {data.shortDesc}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative h-[350px] md:h-[450px] reveal-on-scroll"
              ref={addToRefs}
            >
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse-slow"></div>
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(124,58,237,0.3)] z-10"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SERVICE PROVIDER INTRO */}
      <section className="py-24 relative bg-bg-subtle overflow-hidden border-b border-black/5">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-primary">Strategic Advantage</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-dark mb-20 tracking-tight reveal-on-scroll" ref={addToRefs}>
            {data.introTitle}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Features */}
            <div className="space-y-8 reveal-on-scroll text-left" ref={addToRefs}>
              {data.introFeatures.slice(0, 2).map((feat: any, i: number) => (
                <div key={i} className="glass-card-premium p-8 group hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-500 shadow-lg shadow-primary/5 mb-6">
                    <feat.icon size={28} />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-dark text-lg mb-2 tracking-tight">{feat.label}</h4>
                    <p className="text-xs text-muted font-medium leading-relaxed">Expert solutions tailored to your specific project requirements and business goals.</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="relative h-[350px] reveal-on-scroll hidden lg:block" ref={addToRefs}>
              <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full"></div>
              <Image
                src={data.introImage}
                alt="Provider"
                fill
                className="object-contain z-10"
              />
            </div>

            {/* Right Features */}
            <div className="space-y-8 reveal-on-scroll text-left" ref={addToRefs}>
              {data.introFeatures.slice(2, 4).map((feat: any, i: number) => (
                <div key={i} className="glass-card-premium p-8 group hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-500 shadow-lg shadow-primary/5 mb-6">
                    <feat.icon size={28} />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-dark text-lg mb-2 tracking-tight">{feat.label}</h4>
                    <p className="text-xs text-muted font-medium leading-relaxed">Dedicated elite support ensures your digital products continue to excel and evolve.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TOP TIER SERVICES */}
      <section className="py-24 bg-white border-b border-black/5 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[450px] rounded-[48px] overflow-hidden shadow-2xl! border-8 border-white glass-card-premium reveal-on-scroll" ref={addToRefs}>
              <Image
                src={data.topTierImage}
                alt="Top Tier"
                fill
                className="object-cover"
              />
            </div>
            <div className="reveal-on-scroll" ref={addToRefs}>
              <h2 className="text-3xl md:text-6xl font-sans font-extrabold text-dark mb-8 tracking-tight leading-tight">
                {data.topTierHeading}
              </h2>
              <p className="text-muted text-lg md:text-xl mb-10 leading-relaxed font-medium">
                {data.topTierDesc}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {data.topTierBullets.map((bullet: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/40 border border-black/5">
                    <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-dark font-bold text-sm leading-snug">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY CHOOSE THIS SERVICE */}
      <section className="py-24 bg-bg-subtle overflow-hidden border-b border-black/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal-on-scroll" ref={addToRefs}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-4"
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-primary">Service Impact</span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-dark mb-8 tracking-tight leading-tight">
                Why choose this <span className="text-gradient">Service?</span>
              </h2>
              <p className="text-muted text-lg mb-10 leading-relaxed font-medium">
                {data.whyChooseServiceDesc}
              </p>
              <ul className="space-y-5">
                {data.whyChooseServiceBullets.map((bullet: string, i: number) => (
                  <li key={i} className="flex items-center gap-5 text-dark font-sans font-extrabold tracking-tight group">
                    <div className="w-1.5 h-7 bg-primary rounded-full group-hover:scale-y-125 transition-transform shadow-[0_0_10px_rgba(124,58,237,0.3)]"></div>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[480px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5 reveal-on-scroll"
              ref={addToRefs}
            >
              <Image
                src="/images/why-choose-us.jpg"
                alt="Why Choose Us"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY CHOOSE NEXUS IT SOLUTION */}
      <section className="py-24 bg-black">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-6"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-primary/80">Corporate Excellence</span>
          </motion.div>
          <h2 className="text-3xl md:text-6xl font-sans font-extrabold text-white mb-20 tracking-tight leading-tight reveal-on-scroll" ref={addToRefs}>
            Why Choose Nexus IT Solution <br className="hidden md:block" /> for Your Innovative Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Award, title: "Our Excellence", desc: "Skilled professionals with a proven track record of successful project deliveries.", variant: "fl-a" },
              { icon: Leaf, title: "Sustainable Growth", desc: "Building scalable solutions that grow and evolve with your business needs.", variant: "fl-b" },
              { icon: Users, title: "Client First", desc: "Dedicated account managers ensuring transparent and focused project management.", variant: "fl-c" }
            ].map((card, i) => (
              <div key={i} className="icon-3d group reveal-on-scroll" ref={addToRefs}>
                <div className={`bg-white/5 backdrop-blur-md p-12 rounded-[40px] border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-primary/30 hover:scale-105 ${card.variant}`}>
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white shadow-xl shadow-primary/5">
                    <card.icon size={44} />
                  </div>
                  <h4 className="text-xl font-sans font-extrabold text-white mb-5 tracking-tight">{card.title}</h4>
                  <p className="text-white/40 text-sm font-medium leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="py-24 bg-bg-subtle border-b border-black/5">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-primary mb-6 block">Support Hub</span>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-dark tracking-tight reveal-on-scroll" ref={addToRefs}>
              Our FAQs
            </h2>
          </div>
          <div className="space-y-6 reveal-on-scroll" ref={addToRefs}>
            {data.faqs.map((faq, i) => (
              <div key={i} className="glass-card-premium rounded-3xl overflow-hidden group transition-all duration-300">
                <button
                  className="w-full flex items-center justify-between p-8 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-sans font-extrabold text-dark text-lg tracking-tight group-hover:text-primary transition-colors">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openFaq === i ? 'bg-primary text-white rotate-180' : 'bg-black/5 text-dark'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-8 pb-8 text-muted font-medium leading-relaxed text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA BANNER */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-linear-to-r from-dark to-primary/80 rounded-[56px] p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 reveal-on-scroll shadow-3xl shadow-primary/20 relative overflow-hidden" ref={addToRefs}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="text-center lg:text-left relative z-10">
              <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-white mb-6 tracking-tight">Ready to get started?</h2>
              <p className="text-white/70 text-lg font-medium">Connect with our experts today for a personalized business solution.</p>
            </div>
            <Link
              href="/contact"
              className="px-12 py-6 bg-white text-dark font-sans font-extrabold rounded-2xl transition-all hover:scale-105 hover:bg-white/90 shadow-2xl active:scale-95 whitespace-nowrap z-10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
