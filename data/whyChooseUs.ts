import { Zap, Globe, ShieldCheck, Clock, Lightbulb, Users, Target, Layers, CheckCircle } from "lucide-react";

export const whyUsMainPoints = [
  {
    icon: Zap,
    title: "Agile Development",
    description: "We use agile methodologies to deliver faster, adapt to changes and ensure quality at every milestone.",
    color: "from-purple-400/20 to-indigo-400/20",
    iconColor: "text-purple-600",
  },
  {
    icon: Globe,
    title: "Global Expertise",
    description: "Offices in India, Australia, and Dubai — we deliver world-class solutions with a truly global perspective.",
    color: "from-blue-400/20 to-cyan-400/20",
    iconColor: "text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Security",
    description: "Transparency and integrity are at the core of everything we do. We build long-term partnerships, not transactions.",
    color: "from-emerald-400/20 to-teal-400/20",
    iconColor: "text-emerald-600",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We architect efficient delivery pipelines, ensuring your project ships on time without sacrificing quality.",
    color: "from-orange-400/20 to-amber-400/20",
    iconColor: "text-orange-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "We transform your vision into feature-rich applications that stay ahead of the curve and disrupt markets.",
    color: "from-pink-400/20 to-rose-400/20",
    iconColor: "text-pink-600",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Your success is our success. We work as an extension of your team to ensure every detail exceeds expectations.",
    color: "from-blue-600/20 to-indigo-600/20",
    iconColor: "text-blue-700",
  },
];

export const stats = [
  { label: "Projects Completed", value: 240, suffix: "+" },
  { label: "Happy Clients", value: 180, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Expert Developers", value: 85, suffix: "+" },
];

export const workflowSteps = [
  { step: "01", title: "Discovery", icon: Target, desc: "Understanding goals" },
  { step: "02", title: "Strategy", icon: Layers, desc: "Planning execution" },
  { step: "03", title: "Design", icon: CheckCircle, desc: "High-fidelity UI" },
  { step: "04", title: "Build", icon: Zap, desc: "Next-gen tech" },
  { step: "05", title: "Scale", icon: Globe, desc: "Growth & Support" },
];
