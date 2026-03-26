import {
  Terminal,
  Globe,
  Link,
  Wrench,
  Cpu,
  Eye,
  Smartphone,
  Brain,
  Layers,
  Server,
  Code,
  Search,
  Database,
  MonitorSmartphone,
  Layout,
  Award,
  Leaf,
  Users
} from "lucide-react";
import { FaChessKnight, FaApple, FaAndroid } from "react-icons/fa";
import React from "react";

export interface Service {
  id: string;
  slug: string;
  title: string;
  tag: string;
  shortDesc: string;
  longDesc: string;
  icon: any;
  image: string;
  features: string[];
  technologies: string[];
  isFeatured?: boolean;

  // Section 2 - Intro
  introTitle: string;
  introFeatures: { icon: any, label: string }[];
  introImage: string;

  // Section 3 - Top Tier
  topTierHeading: string;
  topTierDesc: string;
  topTierBullets: string[];
  topTierImage: string;

  // Section 4 - Why Choose Service
  whyChooseServiceDesc: string;
  whyChooseServiceBullets: string[];

  // Section 6 - FAQ
  faqs: { question: string, answer: string }[];
}

export const services: Service[] = [
  {
    id: "software-dev",
    slug: "software-development",
    title: "Software Engineering",
    tag: "SERVICE",
    shortDesc: "Custom enterprise software built for scale and performance.",
    longDesc: "Our Software Development services provide comprehensive solutions for businesses looking to scale their operations. We build robust, secure, and scalable software that integrates seamlessly with your existing systems.",
    icon: Terminal,
    image: "/images/services/software-engineering-hero.png",
    features: ["Custom Software Architecture", "Enterprise ERP", "Business Intelligence", "Legacy Modernization"],
    technologies: ["Java", "Python", ".NET", "Node.js"],
    isFeatured: true,
    introTitle: "Professional Software Engineering Provider",
    introFeatures: [
      { icon: Code, label: "Scalable Code" },
      { icon: Cpu, label: "System Arch" },
      { icon: Search, label: "Quality Assurance" },
      { icon: Globe, label: "Cloud Integration" }
    ],
    introImage: "/images/services/software-engineering-intro.png",
    topTierHeading: "Top Tier Software Development Services",
    topTierDesc: "We architect and build enterprise-grade software solutions that solve complex business challenges.",
    topTierBullets: ["Custom ERP/CRM Systems", "Microservices Architecture", "API Development", "SaaS Solutions"],
    topTierImage: "/images/services/software-engineering-toptier.png",
    whyChooseServiceDesc: "Our agile approach and focus on quality ensure your application is built for the future.",
    whyChooseServiceBullets: ["Modern Tech Stack", "Agile Delivery", "Robust Security", "24/7 Support"],
    faqs: [
      { question: "What technologies do you use?", answer: "We use modern stacks including React, Node.js, Python, and cloud services like AWS and Azure." },
      { question: "How long does a project take?", answer: "Timeline depends on scope, but we typicaly deliver MVPs within 3-4 months." },
      { question: "Do you provide maintenance?", answer: "Yes, we offer ongoing maintenance and support packages." },
      { question: "Can you scale my existing app?", answer: "Certainly, we specialize in scaling legacy systems and modernizing architecture." }
    ]
  },
  {
    id: "website-dev",
    slug: "website-development",
    title: "Website Development",
    tag: "SERVICE",
    shortDesc: "Modern web solutions to boost your digital presence.",
    longDesc: "We specialize in building modern, fast, and SEO-friendly websites using the latest technologies. From landing pages to complex web applications, we ensure a premium digital presence for your brand.",
    icon: Globe,
    image: "/images/services/web-dev.jpg",
    features: ["Responsive Web Design", "SEO Optimization", "E-commerce Integration", "CMS Development"],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    isFeatured: true,
    introTitle: "High-Performance Web Solutions",
    introFeatures: [
      { icon: MonitorSmartphone, label: "Modern Frontend" },
      { icon: Code, label: "Clean Codebase" },
      { icon: Database, label: "Backend Dev" },
      { icon: Globe, label: "Cloud Hosting" }
    ],
    introImage: "/images/services/website-dev.jpg",
    topTierHeading: "Top Tier Web Development Services",
    topTierDesc: "We deliver cutting-edge web solutions that help businesses scale and succeed in the digital era.",
    topTierBullets: ["Custom Web Applications", "Interactive Dashboards", "E-commerce Platforms", "CMS Solutions"],
    topTierImage: "/images/services/web_development_card.png",
    whyChooseServiceDesc: "We combine aesthetic design with technical excellence to create websites that convert.",
    whyChooseServiceBullets: ["User Centric", "SEO Native", "Fast Loading", "Scalable Setup"],
    faqs: [
      { question: "Will my website be mobile-friendly?", answer: "Yes, all our websites are fully responsive and optimized for all screen sizes." },
      { question: "How long does web development take?", answer: "A typical website project takes 4-8 weeks from design to launch." },
      { question: "Can you help with SEO?", answer: "Yes, we implement technical SEO best practices into every website we build." },
      { question: "What CMS do you recommend?", answer: "We often recommend Sanity, Contentful, or custom solutions depending on needs." }
    ]
  },
  {
    id: "blockchain-dev",
    slug: "blockchain-development",
    title: "Blockchain Solutions",
    tag: "SERVICE",
    shortDesc: "Secure blockchain solutions for a decentralized future.",
    longDesc: "From smart contracts to decentralized finance (DeFi) platforms, our blockchain solutions are built with security and scalability as priorities.",
    icon: Link,
    image: "/images/services/blockchain_development_card.png",
    features: ["Smart Contracts", "dApp Development", "Crypto Wallets", "NFT Marketplaces"],
    technologies: ["Solidity", "Etherjs", "Web3.js", "Polygon"],
    isFeatured: false,
    introTitle: "Decentralized Future Readiness",
    introFeatures: [
      { icon: Cpu, label: "Smart Contracts" },
      { icon: Code, label: "dApp Expertise" },
      { icon: Database, label: "Secure Ledger" },
      { icon: Globe, label: "Cross-chain" }
    ],
    introImage: "/images/services/blockchain.png",
    topTierHeading: "Top Tier Blockchain Services",
    topTierDesc: "We build secure, high-performance decentralized applications that empower your business.",
    topTierBullets: ["Smart Contract Audits", "Custom Tokenomics", "DeFi Platforms", "Private Blockchains"],
    topTierImage: "/images/services/blockchain_bot.png",
    whyChooseServiceDesc: "Our deep expertise in blockchain technology ensures your solution is secure and future-proof.",
    whyChooseServiceBullets: ["Expert Security", "Innovative Core", "Cost Efficiency", "Rapid Deployment"],
    faqs: [
      { question: "What blockchain platforms do you use?", answer: "We specialize in Ethereum, Polygon, Solana, and Hyperledger." },
      { question: "How long does a dApp take to build?", answer: "Basic dApps can be launched in 8-12 weeks, while complex DeFi platforms may take longer." }
    ]
  },
  {
    id: "app-support",
    slug: "app-support-maintenance",
    title: "App Support",
    tag: "SERVICE",
    shortDesc: "Expert maintenance to keep your apps running perfectly.",
    longDesc: "We offer comprehensive support and maintenance plans that cover everything from minor bug fixes to major version updates and security monitoring.",
    icon: Wrench,
    image: "/images/services/app-support-hero.png",
    features: ["Bug Fixes & Updates", "Performance Monitoring", "Security Audits", "User Feedback Integration"],
    technologies: ["Docker", "Kubernetes", "New Relic", "Sentry"],
    isFeatured: false,
    introTitle: "Reliable Support for Peace of Mind",
    introFeatures: [
      { icon: Award, label: "Expert Support" },
      { icon: Code, label: "Version Control" },
      { icon: Database, label: "Version Control" },
      { icon: MonitorSmartphone, label: "Testing" }
    ],
    introImage: "/images/services/app-support-intro.png",
    topTierHeading: "Top Tier Support Services",
    topTierDesc: "We ensure your applications are always up-to-date and performing at their peak.",
    topTierBullets: ["24/7 Monitoring", "Regular Backups", "Security Patches", "Performance Optimization"],
    topTierImage: "/images/services/app-support-toptier.png",
    whyChooseServiceDesc: "Our dedicated support team provides peace of mind and ensures long-term application success.",
    whyChooseServiceBullets: ["Constant Uptime", "Proactive Updates", "Expert Guidance", "Cost Effective"],
    faqs: [
      { question: "What is included in maintenance?", answer: "Our plans include security patches, minor bug fixes, performance monitoring, and server maintenance." },
      { question: "Do you offer 24/7 support?", answer: "Yes, we have 24/7 monitoring and response teams for critical applications." }
    ]
  },
  {
    id: "flutter-dev",
    slug: "flutter-app-development",
    title: "Flutter Development",
    tag: "SERVICE",
    shortDesc: "Premium cross-platform apps built with Flutter.",
    longDesc: "We leverage Flutter to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase, reducing time-to-market.",
    icon: Cpu,
    image: "/images/services/flutter_development_card.png",
    features: ["Cross-platform Dev", "Fast Performance", "Rich UI Components", "Single Codebase"],
    technologies: ["Dart", "Flutter", "Firebase", "Rest APIs"],
    isFeatured: false,
    introTitle: "Cross-Platform Excellence",
    introFeatures: [
      { icon: Code, label: "Single Codebase" },
      { icon: MonitorSmartphone, label: "Native UI" },
      { icon: Cpu, label: "Performance" },
      { icon: Database, label: "Sync Logic" }
    ],
    introImage: "/images/services/app_maintanance.jpg",
    topTierHeading: "Top Tier Flutter Services",
    topTierDesc: "We create stunning apps that speak your brand's language across all platforms.",
    topTierBullets: ["Custom UI Kit", "Firebase Integration", "App Store Publishing", "Performance Audit"],
    topTierImage: "/images/services/app_support.jpg",
    whyChooseServiceDesc: "Flutter allows us to build premium apps with half the development time without compromising quality.",
    whyChooseServiceBullets: ["Speedy Launch", "Cost Efficient", "Stunning Design", "Unified Support"],
    faqs: [
      { question: "Is Flutter good for large apps?", answer: "Absolutely, Flutter is used by top companies for complex, high-traffic applications." },
      { question: "Can you migrate my app to Flutter?", answer: "Yes, we specialize in migrating native apps to Flutter while preserving core features." }
    ]
  },
  {
    id: "ar-vr-dev",
    slug: "ar-vr-development",
    title: "AR/VR Development",
    tag: "SERVICE",
    shortDesc: "Immersive AR/VR experiences for training and marketing.",
    longDesc: "We create cutting-edge AR/VR applications that transform how users interact with the world, perfect for training, marketing, and entertainment.",
    icon: Eye,
    image: "/images/services/ar_vr_development_card.png",
    features: ["AR Mobile Apps", "VR Simulations", "3D Modeling", "Interactive Design"],
    technologies: ["Unity", "Unreal Engine", "C#", "Blender"],
    isFeatured: false,
    introTitle: "Immersive Digital Frontiers",
    introFeatures: [
      { icon: Globe, label: "Virtual Worlds" },
      { icon: Code, label: "3D Animation" },
      { icon: Cpu, label: "Engine Opt" },
      { icon: MonitorSmartphone, label: "AR Ready" }
    ],
    introImage: "/images/hero/vr-character.png",
    topTierHeading: "Top Tier AR/VR Services",
    topTierDesc: "We bring your wildest ideas to life in a realistic 3D space.",
    topTierBullets: ["Custom VR Training", "Interactive AR Ads", "Architectural VR", "3D Asset Creation"],
    topTierImage: "/images/services/ar_vr_dev.jpg",
    whyChooseServiceDesc: "Our AR/VR solutions help you stand out and provide unforgettable user experiences.",
    whyChooseServiceBullets: ["Cutting Edge", "High Engagement", "Future Proof", "Innovation Leader"],
    faqs: [
      { question: "What hardware do I need?", answer: "We support Meta Quest, HTC Vive, Apple Vision Pro, and mobile AR (iOS/Android)." },
      { question: "Can AR help my business marketing?", answer: "Yes, AR lets customers 'try' products in their own space before buying." }
    ]
  },
  {
    id: "chess-game-dev",
    slug: "chess-game-development",
    title: "Chess Development",
    tag: "SERVICE",
    shortDesc: "Pro chess platforms with advanced AI and multiplayer.",
    longDesc: "We build premium chess applications featuring Stockfish engine integration, anti-cheat systems, and smooth real-time multiplayer gameplay.",
    icon: FaChessKnight,
    image: "/images/services/chess_game_development_card.png",
    features: ["Stockfish AI", "Anti-Cheat Systems", "Real-time Multiplayer", "Tournaments"],
    technologies: ["Node.js", "WebSockets", "React", "Rust"],
    isFeatured: false,
    introTitle: "Strategic Gaming Engineering",
    introFeatures: [
      { icon: Award, label: "Pro Systems" },
      { icon: Code, label: "Game Logic" },
      { icon: Cpu, label: "AI Engines" },
      { icon: Database, label: "Player Stats" }
    ],
    introImage: "/images/services/chess-mid.png",
    topTierHeading: "Top Tier Chess Platforms",
    topTierDesc: "We create the next generation of online chess arenas for pros and beginners alike.",
    topTierBullets: ["Custom Board Skins", "Advanced Analytics", "Live Streaming Kit", "Global Elo System"],
    topTierImage: "/images/services/chess-bot.jpg",
    whyChooseServiceDesc: "Our experience in building high-concurrency game backends ensures a lag-free experience.",
    whyChooseServiceBullets: ["No Lag", "Pro Scale", "Top Anti-Cheat", "Engaging UI"],
    faqs: [
      { question: "Can you implement custom variants?", answer: "Yes, we can build Chess960, Bullet, Blitz, and custom rule chess games." },
      { question: "Is the AI adjustable?", answer: "Yes, we integrate engines with variable difficulty settings suitable for all levels." }
    ]
  },
  {
    id: "mobile-app-dev",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tag: "SERVICE",
    shortDesc: "Elite native iOS and Android apps with seamless UX.",
    longDesc: "Our mobile development team crafts high-quality native and cross-platform applications that stand out in the app stores and provide real value to users.",
    icon: Smartphone,
    image: "/images/services/mobile-app-hero.png",
    features: ["Native Android Apps", "React Native Solutions", "App Store Optimization", "User-Centric Design"],
    technologies: ["Swift", "Kotlin", "React Native", "Flutter"],
    isFeatured: true,
    introTitle: "Premium Mobile Experiences",
    introFeatures: [
      { icon: MonitorSmartphone, label: "App Design" },
      { icon: Code, label: "API Sync" },
      { icon: Database, label: "Cloud Sync" },
      { icon: Globe, label: "Global Reach" }
    ],
    introImage: "/images/services/mobile-app-intro.png",
    topTierHeading: "Top Tier Mobile Development",
    topTierDesc: "We deliver apps that are not just functional, but delightful to use and simple to manage.",
    topTierBullets: ["Enterprise Mobile Apps", "Social Media Platforms", "Delivery & Logistics", "Health & Fintech"],
    topTierImage: "/images/services/mobile_app_development_card_v2.png",
    whyChooseServiceDesc: "We focus on the perfect balance between beautiful UI and peak performance.",
    whyChooseServiceBullets: ["Fast Apps", "Modern Designs", "Top Security", "Scale with You"],
    faqs: [
      { question: "Do you publish to the stores?", answer: "Yes, we handle the entire App Store and Google Play Store submission process." },
      { question: "Native or React Native?", answer: "Depends on your needs, we provide guidance to choose the best tech for your budget and goals." }
    ]
  },
  {
    id: "ai-ml-dev",
    slug: "ai-ml-development",
    title: "AI/ML Development",
    tag: "SERVICE",
    shortDesc: "Smart automation powered by advanced machine learning.",
    longDesc: "Leverage the power of AI to transform your data into actionable insights and automate complex business processes with our custom machine learning models.",
    icon: Brain,
    image: "/images/services/ai_ml_development_card.png",
    features: ["Predictive Analytics", "NLP", "Computer Vision", "Deep Learning"],
    technologies: ["TensorFlow", "PyTorch", "Python", "OpenCV"],
    isFeatured: true,
    introTitle: "Professional AI/ML Development Provider",
    introFeatures: [
      { icon: Cpu, label: "AI & ML Models" },
      { icon: Code, label: "Algorithm Dev" },
      { icon: Database, label: "Data Science" },
      { icon: Search, label: "Predictive Tech" }
    ],
    introImage: "/images/services/AI_engineering.jpg",
    topTierHeading: "Top Tier AI/ML Services",
    topTierDesc: "We help you stay ahead of the curve by implementing the latest machine learning innovations.",
    topTierBullets: ["Custom AI Solutions", "Neural Networks", "Smart Automation", "Data Modeling"],
    topTierImage: "/images/services/Ai_ML.jpg",
    whyChooseServiceDesc: "Our innovative approach ensures your business is prepared for the next wave of smart digital transformation.",
    whyChooseServiceBullets: ["Innovative Edge", "Future Ready", "Data Driven Insights", "Smart Automation"],
    faqs: [
      { question: "How can AI benefit my business?", answer: "AI can help automate routine tasks, provide predictive insights, and personalize user experiences." },
      { question: "What tech stack do you use for AI?", answer: "We primarily use Python-based frameworks like TensorFlow and PyTorch." },
      { question: "Can AI help with customer data?", answer: "Yes, ML models can analyze patterns in customer behavior to predict trends." },
      { question: "Do you offer model maintenance?", answer: "Yes, we continuously monitor and retrain models to ensure accuracy over time." }
    ]
  },
  {
    id: "system-integration",
    slug: "system-integration",
    title: "System Integration",
    tag: "SERVICE",
    shortDesc: "Connecting your software systems for better workflows.",
    longDesc: "We specialize in connecting various software applications and systems to work as a unified whole, reducing manual data entry and improving overall efficiency.",
    icon: Layers,
    image: "/images/services/system-integration-hero.png",
    features: ["API Integration", "Legacy System Connection", "Cloud-to-Cloud Sync", "Enterprise Service Bus"],
    technologies: ["Node.js", "Python", "REST/GraphQL", "AWS"],
    isFeatured: false,
    introTitle: "Seamless Enterprise Connectivity",
    introFeatures: [
      { icon: Layers, label: "Workflow Automation" },
      { icon: Database, label: "Data Synchronization" },
      { icon: Search, label: "Performance Audit" },
      { icon: Globe, label: "Third-party Integration" }
    ],
    introImage: "/images/services/system-integration-intro.png",
    topTierHeading: "Top Tier Integration Solutions",
    topTierDesc: "We build robust bridges between your software tools to create a cohesive digital ecosystem.",
    topTierBullets: ["Custom API Connectors", "Middleware Development", "Real-time Syncing", "Data Integrity Mapping"],
    topTierImage: "/images/services/system-integration-toptier.png",
    whyChooseServiceDesc: "Our integration experts ensure your business runs like a well-oiled machine with shared data access.",
    whyChooseServiceBullets: ["Reduced Errors", "Unified Data View", "Enhanced Productivity", "Future Scalability"],
    faqs: [
      { question: "What systems can you integrate?", answer: "We can integrate CRM, ERP, E-commerce, Marketing tools, and custom legacy software." },
      { question: "How safe is the data during sync?", answer: "We implement end-to-end encryption and strict access controls for all data flows." }
    ]
  },
  {
    id: "android-apps",
    slug: "android-apps",
    title: "Android Apps",
    tag: "SERVICE",
    shortDesc: "High-performance native Android apps built with precision.",
    longDesc: "We create native mobile experiences that leverage the full power of Android hardware, providing the smoothest performance and best UX.",
    icon: FaAndroid,
    image: "/images/services/app_dev.jpg",
    features: ["Kotlin (Android)", "Platform-Specific UI", "Native Hardware Access"],
    technologies: ["Kotlin", "Android Studio"],
    isFeatured: false,
    introTitle: "Native Android Performance",
    introFeatures: [
      { icon: MonitorSmartphone, label: "Custom UI Design" },
      { icon: Code, label: "Clean Architecture" },
      { icon: Database, label: "Offline Storage" },
      { icon: Globe, label: "Push Notification" }
    ],
    introImage: "/images/services/app_support_card.png",
    topTierHeading: "Top Tier Android App Services",
    topTierDesc: "We deliver high-end Android apps that stand out for their performance and polished design.",
    topTierBullets: ["Custom UI/UX", "Complex Animations", "Hardware Integration", "Performance Tuning"],
    topTierImage: "/images/services/app_support_card.png",
    whyChooseServiceDesc: "Our native approach ensures your users get the best possible experience on their specific device.",
    whyChooseServiceBullets: ["Native Speed", "Better Accessibility", "Seamless UX", "Deep HW Access"],
    faqs: [
      { question: "Why choose native over cross-platform?", answer: "Native apps offer the best performance and quickest access to the latest OS features." },
      { question: "Do you support all Android versions?", answer: "We support the latest and most widely used Android versions to ensure maximum reach." }
    ]
  },
  {
    id: "api-sync",
    slug: "api-backend-sync",
    title: "Backend Sync",
    tag: "SERVICE",
    shortDesc: "Fast and secure API synchronization services.",
    longDesc: "We build the backbone of your digital products, ensuring that your frontend and backend stay perfectly in sync with ultra-fast API endpoints.",
    icon: Server,
    image: "/images/services/cloud_hosting_card.png",
    features: ["RESTful API Design", "GraphQL Implementation", "Real-time WebSockets", "Backend Optimization"],
    technologies: ["Node.js", "Go", "PostgreSQL", "Redis"],
    isFeatured: false,
    introTitle: "Powerful Backend Infrastructure",
    introFeatures: [
      { icon: Database, label: "Scalable DB" },
      { icon: Search, label: "API Monitoring" },
      { icon: Code, label: "Serverless Logic" },
      { icon: Globe, label: "Global Sync" }
    ],
    introImage: "/images/services/data_analytics_card_v2.png",
    topTierHeading: "Top Tier Sync Solutions",
    topTierDesc: "We ensure your app's data is delivered instantly and accurately to every user.",
    topTierBullets: ["Ultra-low Latency", "High Concurency", "Secure Auth Systems", "Real-time Updates"],
    topTierImage: "/images/services/api_backend.jpg",
    whyChooseServiceDesc: "Our backend systems are designed for high-traffic environments where every millisecond counts.",
    whyChooseServiceBullets: ["Rock Solid Stability", "Infinite Scaling", "Top Security", "Optimal API Performance"],
    faqs: [
      { question: "Do you use GraphQL or REST?", answer: "We use whichever best fits the project, often combining both for complex needs." },
      { question: "How do you scale the backend?", answer: "We use microservices and container orchestration to scale resources as your traffic grows." }
    ]
  }
];
