🗂️ Mihsan Alam — Portfolio Planning Document

1. Tech Stack
LayerTechnologyFrameworkNext.js 14 (App Router)StylingTailwind CSSAnimationsFramer MotionIconsLucide React + React IconsTheme Togglenext-themesEmail/ContactResend or EmailJSDeploymentVercelLanguageTypeScript

2. Color System
Dark Mode (Default)
NameHexUsageBackground#0A0A0FMain backgroundSurface#111118Cards, sectionsSurface 2#1A1A24Elevated cardsBorder#2A2A3ACard bordersText Primary#F0F0F5HeadingsText Secondary#9090A8Body textAccent#7B6FE8Buttons, highlightsAccent Glow#7B6FE830Glow effectsAccent 2#4FC3C3Secondary highlights
Light Mode
NameHexUsageBackground#F5F5FAMain backgroundSurface#FFFFFFCardsSurface 2#EDEDF5Elevated cardsBorder#DDDDE8Card bordersText Primary#0A0A0FHeadingsText Secondary#50506ABody textAccent#5A4FD8Buttons, highlights

3. Typography
ElementFontSizeWeightHero NameInter72px800Section TitlesInter48px700Card TitlesInter24px600Body TextInter16px400Code/TechJetBrains Mono14px400

4. Sections Plan
🔹 1. Navbar

Logo (M. or Mihsan)
Navigation links — smooth scroll
Dark/Light toggle
"Hire Me" CTA button
Mobile hamburger menu
Sticky with blur backdrop on scroll


🔹 2. Hero Section
Left side:

Available for work badge (green pulsing dot)
"Hi, I'm Mihsan Alam"
"Full Stack Engineer"
Animated typing text — cycles through:

"Building Real-World Web Apps"
"React Native Mobile Developer"
"MERN Stack Engineer"
"Turning Ideas Into Products"


Short bio (2 lines)
Two buttons — "View My Work" + "Download Resume"
Social icons — GitHub, LinkedIn, WhatsApp

Right side:

Your photo with glowing ring effect
Floating tech badge cards around photo (React, Node.js etc.)

Background:

Subtle animated grid
Floating gradient orbs
Particle effect or star field


🔹 3. About Section
Left side:

Your photo (different pose or same)
Stats cards below:

5+ Projects
2 Real Clients
1 Live Product
1+ Years Experience



Right side:

Section title "About Me"
3-4 paragraphs about you
Your approach to development
What makes you different
Currently focused on (list)


🔹 4. Skills Section

Section title "Tech Stack"
Grouped by category:

Frontend
Backend
Mobile
Database
Tools & Others


Each skill shown as animated badge with icon
Hover effect — glow + scale
Subtle scroll animation — stagger fade in


🔹 5. Projects Section

Section title "Featured Projects"
Filter buttons by tech — All, React, React Native, MERN, Next.js
Project cards in grid (2 columns desktop, 1 mobile)
Each card shows:

Project thumbnail/screenshot
Project name
Short description (2 lines)
Tech stack badges
Live link + GitHub link buttons


Click card → opens modal popup with:

Full description
All screenshots (gallery)
Full tech stack
Key features list
Live link button
GitHub link (or "Private — Client Project")



Projects to show (6 total):

J-Creation E-Commerce ⭐
Jamil Creation Inventory App
Kasem Garments App
Novus Learning Platform
Syntonic Chat App
One more (Jamil Creation landing page or future)


🔹 6. Experience Section

Section title "Experience"
Vertical timeline design
Each entry:

Company name + logo
Role title
Date range
Short description
Tech tags



Entries:

Mihsan (Self-employed) — Full Stack Engineer — June 2025–Present
Innovick — Frontend Developer Intern — Feb 2025–June 2025


🔹 7. Testimonials Section

Section title "What People Say"
Card carousel or grid
Each card:

Quote text
Person name
Their role/relation
Photo (optional)


Note: Do you have any testimonials from your uncle or Innovick? If not we can add placeholders and fill later


🔹 8. Contact Section

Section title "Let's Work Together"
Left side — contact info:

Email
WhatsApp button (direct link)
LinkedIn link
Location — Dhaka, Bangladesh
Available for work badge


Right side — contact form:

Name
Email
Subject
Message
Send button


Form sends email directly to your Gmail via EmailJS (free, no backend needed)


🔹 9. Footer

Your name + tagline
Quick nav links
Social icons
"Built by Mihsan Alam" + year
Back to top button


5. Folder Structure
mihsan-portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── projects/
│   │   │   ├── jcreation/
│   │   │   ├── jamilcreation/
│   │   │   ├── kasemgarments/
│   │   │   ├── novus/
│   │   │   └── syntonic/
│   │   └── experience/
│   │       ├── innovick.png
│   │       └── mihsan.png
│   └── resume.pdf
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Contact.tsx
│   │   │
│   │   └── ui/
│   │       ├── ProjectCard.tsx
│   │       ├── ProjectModal.tsx
│   │       ├── SkillBadge.tsx
│   │       ├── TimelineItem.tsx
│   │       ├── ThemeToggle.tsx
│   │       ├── AnimatedText.tsx
│   │       └── ParticleBackground.tsx
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   └── testimonials.ts
│   │
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   └── useTheme.ts
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   └── types/
│       └── index.ts
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json

6. Packages
jsondependencies:
- next: 14
- react: 18
- react-dom: 18
- typescript
- tailwindcss
- framer-motion
- next-themes
- react-icons
- lucide-react
- emailjs-com
- react-type-animation
- react-fast-marquee
- @tsparticles/react
- tsparticles
- react-photo-view (image gallery in modal)
- clsx
- tailwind-merge

devDependencies:
- @types/node
- @types/react
- eslint
- eslint-config-next
- postcss
- autoprefixer

7. Animation Plan
SectionAnimationHeroParticles background + floating badges + typing textAboutStats counter animation on scrollSkillsStagger fade in + hover glowProjectsCard hover 3D tilt + filter transitionExperienceTimeline draw animation on scrollTestimonialsSmooth carousel slideContactForm field focus glow effectGlobalScroll reveal on every section

8. Performance Plan

Next.js Image optimization for all images
Lazy load all sections below the fold
Framer Motion LazyMotion for smaller bundle
Dynamic imports for heavy components
All fonts loaded via next/font


✅ Pre-Build Checklist
Before we write code, you need to prepare:

 Your profile photo (good quality)
 Screenshots for all 5-6 projects
 Testimonials from uncle or Innovick (even 1-2 is fine)
 Resume PDF ready
 Your WhatsApp number for contact button
 EmailJS account (free) for contact form
 Vercel account connected to GitHub