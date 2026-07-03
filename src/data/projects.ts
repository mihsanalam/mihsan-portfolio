import { Project } from "@/types";

export const projects: Project[] = [
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
    features: [
      "Advanced AI Agent powered by Gemini 2.5/2.0 models with dynamic tool/function calling",
      "Real-time Gmail OAuth integration with automatic email summary and draft creation",
      "Google Calendar sync featuring CRUD operations for event management and scheduling",
      "Persistent WhatsApp connection via Baileys WebSocket pairing code stored securely in PostgreSQL",
      "Custom voice control overlay using Web Speech API and Gemini-translated JSON UI intents",
      "Complete Freelance CRM suite including client registers, billable timers, and PDF/CSV invoices",
      "Daily briefing system automatically generating priorities, schedules, and alerts from live inbox data",
      "AI News Aggregator and Creator Studio for one-click LinkedIn and Twitter content generation",
    ],
    category: ["Production", "Web", "React"],
    featured: true,
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
    features: [
      "Redux Toolkit global slices for cart, user addresses, reviews, and orders",
      "Secure digital payment checkouts alongside Cash on Delivery options",
      "Multi-layered attack security utilizing CSRF token validations & helmet headers",
      "JWT auth session cookies stored in HTTP-Only signed arrays",
      "Sanitizers blocking NoSQL injection and Cross-Site Scripting (XSS)",
      "Database-level indexes on collections to optimize query search times",
      "Debounced storefront search combined with dynamic Framer Motion animations",
    ],
    category: ["Production", "Web", "MERN", "React"],
    featured: true,
    layout: "desktop",
  },
  {
    id: "jamilcreation",
    title: "Jamil Creation Inventory App",
    description:
      "A cross-platform mobile inventory management app for a real garment business with offline-first sync and push notifications.",
    longDescription:
      "Jamil Creation is a premium, offline-first mobile inventory and sales audit application designed for garment manufacturing businesses. Built with Expo (React Native), SQLite (via WatermelonDB), and PostgreSQL (via Supabase), the app is fully optimized for speed, reliability, security, and real-time team collaboration. It includes secure multi-tenant business data isolation, a custom native barcode scanner (Scan & Sell), scoped database triggers for push notifications, and TOTP Two-Factor Authentication.",
    images: [
      "/projects/jamilcreation/dashboard.png",
      "/projects/jamilcreation/inventory.png",
      "/projects/jamilcreation/transactions.png",
      "/projects/jamilcreation/report.png",
      "/projects/jamilcreation/settings.png",
      "/projects/jamilcreation/login.png",
      "/projects/jamilcreation/signup.png"
    ],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "WatermelonDB", "SQLite", "Zustand", "Jest"],
    github: "https://github.com/mihsanalam/JamilCreation",
    liveUrl: null,
    features: [
      "Offline-first sync using WatermelonDB SQLite database",
      "Strict multi-tenant business data isolation via Supabase RLS",
      "Native Barcode Scanner (Scan & Sell) built with Expo CameraView",
      "Scoped real-time push notifications via Supabase database triggers",
      "Two-Factor Authentication (2FA / MFA) with native TOTP & QR code display",
      "Live analytics dashboards and charts using victory-native",
      "Fully covered with Jest unit tests and integrated GitHub Actions CI/CD",
    ],
    category: ["Production", "Mobile", "React Native"],
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
    features: [
      "Product management with direct image upload support",
      "Sales transaction recording with automatic stock decrements",
      "Return handling logs with automated database quantity corrections",
      "Invoice generation manager with printable sales layouts",
      "Dashboard analytics with daily metrics charts and totals",
      "Firebase backend configuration for authentication and storage",
      "Role-based permission separation (Administrators vs Staff Members)",
    ],
    category: ["Production", "Mobile", "React Native"],
    layout: "mobile",
  },
  {
    id: "novus",
    title: "Novus Learning Platform",
    description:
      "A modern mobile learning application for browsing courses, tracking chapters, and secure subscription access.",
    longDescription:
      "Novus is a feature-rich mobile learning platform built using React Native (Expo SDK 55) and NativeWind. The app interfaces with Sanity CMS for dynamic course retrieval and metadata synchronization, using Clerk for authentication (incorporating email verification modals). It avoids native checkout redirects by embedding pricing checkouts inside standard WebViews for high stability.",
    images: [
      "/projects/novus/home.png",
      "/projects/novus/course.png",
      "/projects/novus/login.png",
      "/projects/novus/signup.png",
      "/projects/novus/welcome.png"
    ],
    stack: ["React Native", "Expo", "Gluestack UI", "Clerk Auth", "Sanity CMS", "NativeWind"],
    github: "https://github.com/mihsanalam/Novus",
    liveUrl: null,
    features: [
      "Premium subscription tier plan system to unlock paid educational content",
      "Dynamic course & chapter browsing with search debouncing",
      "Chapter duration tracking and progress management logs",
      "Clerk secure user authentication with verification modal overlays",
      "Robust Stripe WebView checkout routing for native billing systems",
      "Sanity CMS schema for remote lessons and files synchronization",
      "Smooth layout interfaces built with Gluestack UI and NativeWind",
    ],
    category: ["Production", "Mobile", "React Native"],
    layout: "mobile",
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
    features: [
      "Zero-delay instant messaging powered by WebSockets via Socket.io",
      "Direct user chats and group conversation channels",
      "Secure JWT user authentication and Bcrypt password hashing",
      "Cloudinary integration for user avatar and media uploads",
      "Persistent user sessions and auth states using local AsyncStorage",
      "Event-driven socket message history query and contact lookup API",
    ],
    category: ["Production", "Mobile", "MERN", "React Native"],
    layout: "mobile",
  },
  {
    id: "enhanceimage",
    title: "AI Image Enhancer",
    description:
      "A modern React application that uses AI models to upscale and enhance image quality in seconds.",
    longDescription:
      "AI Image Enhancer is a lightweight client-side application powered by React and Vite. It utilizes a third-party AI image processing API to improve image clarity, detail, and resolution. Users can drag and drop images, track real-time enhancement status, and download their upscaled photos with one click.",
    images: ["/projects/short_project/Image_enhancer.png"],
    stack: ["React", "Vite", "Tailwind CSS", "Axios", "REST API"],
    github: "https://github.com/mihsanalam/EnhanceImage",
    liveUrl: "https://mihsan-enhance-image.vercel.app/",
    features: [
      "AI-powered clarity & resolution enhancement",
      "Drag-and-drop file upload with validation",
      "Real-time polling state for background API processing",
      "One-click direct downloading of enhanced files",
      "Sleek and fully responsive user interface",
    ],
    category: ["Learning", "Web", "React"],
    layout: "desktop",
  },
  {
    id: "jamilcreationweb",
    title: "Jamil Creation Web Hub",
    description:
      "A responsive business landing page and client invoice creator built to accompany the inventory management system.",
    longDescription:
      "Jamil Creation Web Hub serves as the central storefront and utility app for the garment manufacturing business. It includes an interactive landing page showcasing company services, direct links to download the Android APK file for the inventory management app, and an built-in billing manager to generate sales invoices on-the-fly.",
    images: [
      "/projects/jamil_creation_invoice/home.png",
      "/projects/jamil_creation_invoice/dashboard.png",
      "/projects/jamil_creation_invoice/create_invoice.png",
      "/projects/jamil_creation_invoice/download.png"
    ],
    stack: ["React", "Vite", "Tailwind CSS", "React Router"],
    github: "https://github.com/mihsanalam/Jamil-Creation",
    liveUrl: "https://jamil-creation.vercel.app/",
    features: [
      "Dynamic invoice generator and billing tool",
      "Official landing page for business marketing",
      "APK downloader links for mobile app distribution",
      "Declarative front-end routing with React Router",
      "Fully responsive utilities optimized with Tailwind CSS",
    ],
    category: ["Learning", "Web", "React"],
    layout: "desktop",
  },
  {
    id: "ordex",
    title: "Ordex — Product Add, Sale & Stock Manager",
    description:
      "A web-based inventory management app built with React for tracking products, sales logs, stock, and returns.",
    longDescription:
      "Ordex is a comprehensive web-based inventory and sales management application built with React. Developed to streamline stock tracking, it features full product inventory CRUD operations, daily sales logging, return workflows, and stock tracking. It includes secure login/signup portals and custom data download functionalities.",
    images: [
      "/projects/ordex/login.png",
      "/projects/ordex/signup.png",
      "/projects/ordex/dashboard.png",
      "/projects/ordex/add_product.png",
      "/projects/ordex/product_list.png",
      "/projects/ordex/stock.png",
      "/projects/ordex/add_sale.png",
      "/projects/ordex/sale_list.png",
      "/projects/ordex/return_sale.png",
      "/projects/ordex/return_sale_list.png"
    ],
    stack: ["React", "CSS", "Mock API", "JavaScript", "React Hooks"],
    github: "https://github.com/mihsanalam/Product-Sale-Stock_mannage_project",
    liveUrl: "https://sale-stock-manager.netlify.app/",
    features: [
      "Product catalog CRUD management with real-time stock levels",
      "Sales transaction logging and automated stock decrements",
      "Product returns management with inventory restock corrections",
      "Download button to export and save inventory/sales data reports",
      "Secure authentication portals for user login and signup",
      "Clean, responsive dashboard layout built with React & Mock API",
    ],
    category: ["Learning", "Web", "React"],
    layout: "desktop",
  },
  {
    id: "digidrive",
    title: "DigiDrive — Marketing Landing Page",
    description:
      "A premium, responsive landing page for a digital marketing agency featuring modern 3D layouts and fluid transitions.",
    longDescription:
      "DigiDrive is a modern, responsive agency landing page built using React. Developed with clean design principles, it features high-quality 3D claymorphism illustrations, responsive flex grids, and smooth scroll behaviors. The project serves as a conversion-focused showcase for service listings, client benefits, and contact channels.",
    images: ["/projects/digidrive/home.png"],
    stack: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    github: null,
    liveUrl: "https://digitalmarketinglanding.netlify.app/",
    features: [
      "Clean modern user interface with 3D claymorphism graphic elements",
      "Interactive digital marketing services catalog listings",
      "Conversion-focused call to action (CTA) links",
      "Smooth scroll transitions and responsive grid breakpoints",
      "Optimized production bundle for high speed and lighthouse score levels",
    ],
    category: ["Learning", "Web", "React"],
    layout: "desktop",
  },
];
