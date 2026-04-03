"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import CompanyIntro from "@/components/CompanyIntro";
import Image from "next/image";
import "./ContactButton.css";

const contactTitle = "Get in Touch";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: "Our Headquarters",
      details: "Unit 12/8 Hampstead Rd, Homebush West, NSW 2140, Australia",
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: "Call Us",
      details: "0459 472 474",
    },
    {
      icon: <Mail size={24} className="text-primary" />,
      title: "Email Us",
      details: "info@nexusitsolution.com.au",
    },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-bg-subtle">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-contact.png"
            alt="Team working on digital solutions"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* Soft Glassmorphism Overlay */}
          <div className="absolute inset-0 backdrop-blur-[1px] bg-white/20" />
          <div className="absolute inset-0 bg-linear-to-b from-white/25 via-transparent to-white/10 opacity-80" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="inline-block px-5 py-2 text-[10px] font-sans font-bold tracking-[0.3em] text-primary uppercase bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-full"
            >
              Contact Us
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-sans font-extrabold text-dark leading-tight tracking-tight">
                {contactTitle.split(" ").map((word, i) => (
                  <span key={i} className="inline-block whitespace-nowrap mr-[0.3em]">
                    {word.split("").map((char, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, y: 50, rotateX: -30 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: (i * 0.1) + (j * 0.03),
                          ease: [0.2, 1, 0.3, 1]
                        }}
                        className={`inline-block ${word === "Touch" ? "text-gradient-cyan" : "text-dark"}`}
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
                className="text-xl md:text-2xl text-dark/70 leading-relaxed max-w-2xl mx-auto font-medium"
              >
                Have a visionary project in mind? Let&apos;s discuss how we can bring it to life with our cutting-edge technology solutions.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 py-20" id="contact-form">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 space-y-8"
          >
            {contactInfo.map((info, idx) => (
              <div key={idx} className="glass-card-premium p-8 group transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-dark font-sans font-extrabold text-xl mb-3 tracking-tight">{info.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-sans text-[10px] font-bold tracking-widest uppercase">{info.details}</p>
                </div>
              </div>
            ))}

            <div className="glass-card-premium p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/2 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/5 transition-colors"></div>
              <h3 className="text-dark font-sans font-extrabold text-xl mb-4 tracking-tight">Global Presence</h3>
              <p className="text-dark/70 mb-4 font-medium relative z-10 leading-relaxed">
                We operate on a global scale with offices spread across Australia, India, and Dubai to ensure round-the-clock support for our clients worldwide.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 glass-card-premium p-8 md:p-12 shadow-2xl! bg-white/40! self-start"
          >
            <h2 className="text-3xl font-sans font-extrabold text-dark mb-10 tracking-tight">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-[10px] font-sans font-bold text-slate-700 uppercase tracking-widest px-1">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full bg-white/50 border ${errors.name ? 'border-red-500' : 'border-black/5'} rounded-2xl px-5 py-4 text-dark placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-all shadow-xs`}
                    />
                    {errors.name && <AlertCircle size={16} className="absolute right-4 top-4.5 text-red-500" />}
                  </div>
                  {errors.name && <p className="text-[10px] text-red-500 font-sans font-bold uppercase tracking-wider">{errors.name}</p>}
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-[10px] font-sans font-bold text-slate-700 uppercase tracking-widest px-1">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={`w-full bg-white/50 border ${errors.email ? 'border-red-500' : 'border-black/5'} rounded-2xl px-5 py-4 text-dark placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-all shadow-xs`}
                    />
                    {errors.email && <AlertCircle size={16} className="absolute right-4 top-4.5 text-red-500" />}
                  </div>
                  {errors.email && <p className="text-[10px] text-red-500 font-sans font-bold uppercase tracking-wider">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="subject" className="text-[10px] font-sans font-bold text-slate-700 uppercase tracking-widest px-1">Subject</label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className={`w-full bg-white/50 border ${errors.subject ? 'border-red-500' : 'border-black/5'} rounded-2xl px-5 py-4 text-dark placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-all shadow-xs`}
                  />
                  {errors.subject && <AlertCircle size={16} className="absolute right-4 top-4.5 text-red-500" />}
                </div>
                {errors.subject && <p className="text-[10px] text-red-500 font-sans font-bold uppercase tracking-wider">{errors.subject}</p>}
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-[10px] font-sans font-bold text-slate-700 uppercase tracking-widest px-1">Message</label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className={`w-full bg-white/50 border ${errors.message ? 'border-red-500' : 'border-black/5'} rounded-2xl px-5 py-4 text-dark placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-all shadow-xs resize-none`}
                  ></textarea>
                  {errors.message && <AlertCircle size={16} className="absolute right-4 top-5 text-red-500" />}
                </div>
                {errors.message && <p className="text-[10px] text-red-500 font-sans font-bold uppercase tracking-wider">{errors.message}</p>}
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6 pt-6">
                <motion.button
                  disabled={isSubmitting || isSuccess}
                  type="submit"
                  className={`relative group h-16 min-w-[220px] rounded-2xl font-sans font-bold text-white text-lg tracking-tight overflow-hidden bg-primary transition-all duration-500 shadow-xl shadow-primary/20 ${isSuccess ? 'bg-green-600! shadow-green-600/20!' : ''}`}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span key="sending" className="flex items-center justify-center gap-3">
                        <Loader2 className="animate-spin" size={20} />
                        <span className="uppercase text-[10px] font-sans font-bold tracking-widest">Processing...</span>
                      </motion.span>
                    ) : isSuccess ? (
                      <motion.span key="success" className="flex items-center justify-center gap-3">
                        <CheckCircle size={20} />
                        <span className="uppercase text-[10px] font-sans font-bold tracking-widest">Sent Successfully</span>
                      </motion.span>
                    ) : (
                      <motion.span key="default" className="flex items-center justify-center gap-3">
                        <span className="uppercase text-[10px] font-sans font-bold tracking-[0.2em]">Initiate Contact</span>
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center gap-2 text-green-600 font-bold text-sm"
                    >
                      <CheckCircle size={18} />
                      Thank you! We&apos;ll be in touch soon.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <section className="container mx-auto px-6 max-w-7xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[500px] rounded-[48px] overflow-hidden shadow-2xl! border-12 border-white glass-card-premium"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.235541604771!2d151.0664879!3d-33.8578504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb35223e7135%3A0xe54e63776e06915b!2sUnit%2012%2F8%20Hampstead%20Rd%2C%20Homebush%20West%20NSW%202140%2C%20Australia!5e0!3m2!1sen!2sus!4v1710682483129!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nexus Australia Headquarters"
          ></iframe>
        </motion.div>
      </section>

    </main>
  );
}
