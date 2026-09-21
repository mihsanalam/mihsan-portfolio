import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "jamil-creations-erp",
    title: "Jamil Creations Garments — Business ERP",
    description:
      "Full-stack, role-based ERP for a real garments business — Kanban production tracking, barcode-enabled inventory, POS with invoicing & dues, analytics, and a complete audit trail.",
    longDescription:
      "A complete internal management system built for a real garments business, replacing spreadsheets with three role-based consoles: Owner (dashboard, analytics, reports, audit log, user management), Production Collector (fabric intake, batch tracking, finished goods, warehouse search), and Operator (work orders, Kanban phase board, POS). Highlights include transaction-safe sequential numbering for batches and invoices, camera barcode scanning with QR batch labels, full batch traceability from fabric intake to sale, printable invoices and money receipts, dues aging with client statements, and an offline queue so phase updates survive internet drops on the shop floor. Security includes RBAC middleware, bcrypt credentials auth with JWT sessions (NextAuth v5), login rate-limiting with account lockout, session invalidation on password change, and a full audit trail with before/after payloads. Engineering: 48 REST route handlers over raw MySQL (mysql2), SWR live polling, Recharts analytics, bilingual English/Bangla UI, Cloudinary image hosting, Vitest unit tests, MySQL backup tooling, and a GitHub Actions CI pipeline running typecheck, lint, and tests on every PR.",
    images: [
      "/projects/jamil_creation_software/dashboard.webp",
      "/projects/jamil_creation_software/phase_board.png",
      "/projects/jamil_creation_software/batch_list.png",
      "/projects/jamil_creation_software/sale_due.webp",
      "/projects/jamil_creation_software/reports.webp",
      "/projects/jamil_creation_software/return.png",
      "/projects/jamil_creation_software/english.png",
      "/projects/jamil_creation_software/bangla.png",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "MySQL",
      "Tailwind CSS",
      "NextAuth.js (Auth.js)",
    ],
    github: "https://github.com/mihsanalam/Jamil-creation-software",
    liveUrl: null,
    category: ["Production", "Web", "Full-Stack"],
    featured: true,
    imageAlt: "Jamil Creations Garments ERP owner dashboard with KPI cards and production pipeline",
    layout: "desktop",
  },
  {
    id: "jcreation",
    title: "J-Creation E-Commerce",
    description:
      "A premium, high-performance e-commerce platform featuring a gold/slate design, secure checkouts, and multi-layered security protections.",
    longDescription:
      "J-Creation is a premium, high-performance, and visually stunning e-commerce web application featuring a cohesive gold, cream, and slate design. Built with React (Vite) and Node.js (Express), it incorporates Redux Toolkit global state, Cloudinary product uploads, secure digital checkout workflows, and Winston file log rotations. It utilizes database indexing for sub-second response times, and is hardened with security mitigations including JWT in HTTP-Only cookies, CSRF protection, NoSQL injection sanitizers, and Helmet headers.",
    images: [
      "/projects/jcreation/home.png",
      "/projects/jcreation/products.png",
      "/projects/jcreation/sherwani.png",
      "/projects/jcreation/dashboard_products_adding.png",
      "/projects/jcreation/footer.png"
    ],
    stack: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Framer Motion"],
    github: null,
    liveUrl: "https://jcreationbd.com",
    category: ["Production", "Web", "MERN", "React"],
    featured: true,
    imageAlt: "J-Creation e-commerce platform homepage screenshot",
    layout: "desktop",
  },
  {
    id: "optimus",
    title: "Optimus AI Workspace",
    description:
      "A premium personal AI assistant and freelance CRM hub that automates background workflows and unifies Gmail, Google Calendar, and WhatsApp.",
    longDescription:
      "Optimus is a hybrid, collaborative AI-powered workflow assistant and CRM designed to unify digital tools. Built with Next.js 14 and styled with a custom dark/teal theme, it integrates live Gmail and Google Calendar OAuth APIs, a real-time WhatsApp gateway using Baileys WebSockets, and a custom voice assistant utilizing the Web Speech API and Gemini. The system includes an automated background daily briefing engine, invoice generators, financial ledgers, lead builders, and content creators, with data persisted via InsForge BaaS (PostgreSQL) and protected by Row Level Security.",
    images: [
      "/projects/optimus/dashboard.png",
      "/projects/optimus/landing.png",
      "/projects/optimus/agent.png",
      "/projects/optimus/intregations.png",
      "/projects/optimus/news.png",
      "/projects/optimus/briefing.png"
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini AI", "InsForge", "WebSockets", "Web Speech API"],
    github: "https://github.com/mihsanalam/Optimus",
    liveUrl: "https://optimus-theta.vercel.app/",
    category: ["Production", "Web", "React"],
    featured: true,
    imageAlt: "Optimus AI workspace dashboard UI screenshot",
    layout: "desktop",
  },
  {
    id: "syntonic",
    title: "Syntonic Chat App",
    description:
      "A premium, real-time mobile messaging application with group channels, media sharing, and offline authentication resilience.",
    longDescription:
      "Syntonic is a high-performance, real-time mobile chat application built with React Native (Expo SDK 54) and Node.js (Express). It leverages Socket.io for direct and group WebSocket messaging, MongoDB (Mongoose ODM) for secure message schemas, and Cloudinary for media asset optimization. Features secure JWT credentials hashing, full contact lists query, and AsyncStorage authentication state preservation.",
    images: [
      "/projects/syntonic/Screenshot_20251009_205806.png",
      "/projects/syntonic/Screenshot_20251009_205945.png",
      "/projects/syntonic/Screenshot_20251009_205953.png",
      "/projects/syntonic/Screenshot_20251009_210023.png",
      "/projects/syntonic/Screenshot_20251009_210033.png",
      "/projects/syntonic/Screenshot_20251009_210040.png"
    ],
    stack: ["React Native", "Expo", "Socket.io", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/mihsanalam/Syntonic",
    liveUrl: null,
    category: ["Production", "Mobile", "MERN", "React Native"],
    featured: true,
    imageAlt: "Syntonic real-time chat app interface screenshot",
    layout: "mobile",
  },
  {
    id: "kasemgarments",
    title: "Kasem Garments App",
    description:
      "A comprehensive mobile inventory tracking and sales application built for garments businesses to manage stock, returns, and billing.",
    longDescription:
      "Kasem Garments is a comprehensive inventory management mobile application designed for garment manufacturing and wholesale operations. Built with React Native and Expo Router, the app integrates with Firebase for Authentication, Firestore database storage, and Cloud Storage buckets. It features a transaction invoicing layout, product returns logging with automatic stock adjustments, real-time alerts, and distinct role-based views for administrators and staff members.",
    images: [
      "/projects/kasemgarments/dashboard.png",
      "/projects/kasemgarments/add_product.png",
      "/projects/kasemgarments/invoice_sell.png",
      "/projects/kasemgarments/menu.png",
      "/projects/kasemgarments/notification.png",
      "/projects/kasemgarments/todays_sale.png"
    ],
    stack: ["React Native", "Expo", "Firebase", "Firestore", "React Context API", "EAS Build"],
    github: "https://github.com/mihsanalam/Kasem-Garments",
    liveUrl: null,
    category: ["Production", "Mobile", "React Native"],
    featured: true,
    imageAlt: "Kasem Garments mobile app inventory dashboard screenshot",
    layout: "mobile",
  },
  {
    id: "innovick",
    title: "Innovick — Marketing Agency Website",
    description:
      "A conversion-focused multi-page marketing agency website with a clean editorial design, service showcase, and WhatsApp lead capture.",
    longDescription:
      "Innovick is a production website built for a marketing agency, designed to turn visitors into booked strategy calls. It features a minimal, editorial design system with a violet accent palette, serif italic display typography, and smooth scroll-driven animations. The site covers six service verticals (including Social Media Management and Web Development) presented as stacked, numbered showcase cards, plus Success stories, About, and Contact pages. Lead generation is handled through prominent strategy-call CTAs, an always-available WhatsApp floating widget, and social links. Fully responsive across desktop, tablet, and mobile, and deployed on Vercel.",
    images: [
      "/projects/innovick/home.png",
      "/projects/innovick/service.png",
      "/projects/innovick/service_2.png",
      "/projects/innovick/why_choose_us.png",
      "/projects/innovick/team.png",
      "/projects/innovick/about.png",
      "/projects/innovick/contact.png",
    ],
    stack: ["React", "Tailwind CSS", "GSAP", "Lenis"],
    github: "https://github.com/mihsanalam/innovick",
    liveUrl: "https://innovick.vercel.app/",
    category: ["Production", "Web", "React"],
    featured: true,
    imageAlt: "Innovick marketing agency website homepage screenshot",
    layout: "desktop",
  },
];
