# Mihsan Alam — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

Personal portfolio website showcasing my experience, skills, and projects as a Full Stack Engineer.

**Live site:** [https://www.mihsanalam.com](https://www.mihsanalam.com)

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + pure-CSS entrance animations
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Galleries**: [react-photo-view](https://www.npmjs.com/package/react-photo-view)

## Features

- **Pixel-Particle Hero**: The portrait renders to a canvas as a grid of chunky pixels that scatter away from your pointer and settle back. The pixels appear **directly on load** — the clear photo is never flashed first — and the loop suspends when it's off-screen, when the tab is hidden, or when the visitor prefers reduced motion.
- **Dark / Light Mode**: Smooth theme toggling, dark by default, via `next-themes`.
- **Responsive Layout**: Mobile, tablet and desktop, with horizontal overflow clipped so the page never slides sideways on narrow screens.
- **Projects Grid**: Portfolio cards opening an interactive detail modal with an image gallery.
- **Experience Tabs**: Company tabs that switch roles with an animated active indicator.
- **Direct Contact**: Contact buttons, social links, and location status.
- **Server-first Paint**: The above-the-fold hero animates with pure CSS, so the page renders from HTML without waiting on the JS bundle.

## Getting Started

Install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/                # App Router entry, layout, metadata, global styles
├── components/
│   ├── layout/         # Navbar, Footer, ThemeProvider
│   ├── sections/       # Hero, About, Skills, Projects, Experience, Contact
│   └── ui/             # PixelParticleImage, ProjectCard/Modal, badges, etc.
├── data/               # Content: projects.ts, skills.ts, experience.ts
├── lib/                # Utilities and helpers
└── types/              # Shared TypeScript types
```

