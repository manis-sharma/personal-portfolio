<div align="center">

# Manish Sharma — Developer Portfolio

A sleek, modern developer portfolio built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. Featuring a deep navy & amber theme, canvas particle effects, smooth scroll animations, and a fully responsive layout.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0050?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000?logo=vercel&logoColor=white)](https://vercel.com)

</div>

---


## Preview

| Desktop | Mobile |
|---------|--------|
| ![Desktop Preview](https://via.placeholder.com/600x340/081b33/f59e0b?text=Desktop+Preview) | ![Mobile Preview](https://via.placeholder.com/280x500/081b33/f59e0b?text=Mobile+Preview) |

> *Replace the placeholders above with actual screenshots of your deployed site.*

---

## Features

| Feature | Description |
|---------|-------------|
| **Animated Hero** | Staggered fade-in headline, tagline, and CTA buttons with a terminal-style card on desktop |
| **Canvas Particles** | 100-particle background animation rendered on HTML5 Canvas at minimal performance cost |
| **Featured Project** | Dedicated showcase section with live demo video, metrics, and tech stack badges |
| **Project Grid** | Card-based layout highlighting key projects with tags, impact stats, and links |
| **Skills Marquee** | Infinite auto-scrolling carousel of 14 technology icons with hover-to-pause |
| **Contact Form** | Client-side validated form with loading states, success/error feedback |
| **Dark Theme** | Deep navy (`#081b33`) background with amber/gold (`#f59e0b`) accents |
| **Responsive Design** | Mobile-first layout with hamburger navigation and adaptive grid breakpoints |
| **Smooth Animations** | Framer Motion entrance transitions and scroll-triggered reveals |
| **Vercel Analytics** | Built-in page-view and web-vitals tracking via `@vercel/analytics` |

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **UI Framework** | React 19 |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS v4, CSS custom properties, tw-animate-css |
| **Animations** | Framer Motion 11, Canvas API |
| **Icons** | Lucide React |
| **Component Primitives** | Radix UI (`react-slot`), class-variance-authority |
| **Analytics** | Vercel Analytics |
| **Deployment** | Vercel |

---

## Getting Started

### Prerequisites

- **Node.js** 18 or later
- **npm**, **pnpm**, or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/manis-sharma/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser — Vite HMR reloads changes instantly.

### Production Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

### Linting

```bash
npm run lint
```

---

## Project Structure

```
portfolio/
├── public/                    # Static assets & web manifest
├── src/
│   ├── main.jsx               # App entry point
│   ├── App.jsx                # Root component — section orchestration
│   ├── globals.css            # Theme variables, animations & utilities
│   ├── components/
│   │   ├── Navbar.jsx         # Fixed header with responsive mobile menu
│   │   ├── Hero.jsx           # Landing section with animated headline
│   │   ├── ParticleBackground.jsx  # Canvas particle animation
│   │   ├── FeaturedProject.jsx     # Flagship project spotlight
│   │   ├── Projects.jsx      # Project cards grid
│   │   ├── Skills.jsx        # Infinite marquee tech carousel
│   │   ├── About.jsx         # Bio, stats & resume download
│   │   ├── Contact.jsx       # Validated contact form
│   │   ├── Footer.jsx        # Social links & copyright
│   │   └── ui/
│   │       └── button.jsx    # Reusable button (CVA + Radix Slot)
│   └── lib/
│       └── utils.js          # Tailwind merge helper (cn)
├── index.html                 # HTML shell
├── vite.config.js             # Vite + React plugin & path aliases
├── postcss.config.mjs         # PostCSS — Tailwind + Autoprefixer
├── eslint.config.mjs          # ESLint flat config
├── vercel.json                # Vercel deployment settings
└── package.json
```

---

## Featured Projects

### Secure Online Exam System *(Enterprise)*
> Full-featured examination platform supporting **500+ concurrent users**, real-time proctoring via WebRTC, and a 99.9 % uptime SLA.

**Stack:** React · Node.js · Firebase · WebRTC
**Links:** [Live Demo](https://school-exam-system-9c9b2.web.app/) · [GitHub](https://github.com/manis-sharma/Secure-Online-Exam-System)

### Social Media Manager
> Automated posting platform that saves **40+ hours/week** per user by scheduling content across multiple platforms.

**Stack:** Python · Automation · API Integration

### Personal PC Assistant
> Intelligent voice/text assistant for desktop control with **95 % command recognition accuracy**.

**Stack:** Python · AI/ML · Desktop App

---

## Color Palette

| Token | Hex | Preview |
|-------|-----|---------|
| Background | `#081b33` | ![#081b33](https://via.placeholder.com/16/081b33/081b33.png) |
| Card | `#0d1a32` | ![#0d1a32](https://via.placeholder.com/16/0d1a32/0d1a32.png) |
| Primary | `#3b82f6` | ![#3b82f6](https://via.placeholder.com/16/3b82f6/3b82f6.png) |
| Accent | `#f59e0b` | ![#f59e0b](https://via.placeholder.com/16/f59e0b/f59e0b.png) |
| Foreground | `#f0f0f8` | ![#f0f0f8](https://via.placeholder.com/16/f0f0f8/f0f0f8.png) |
| Border | `#1e3050` | ![#1e3050](https://via.placeholder.com/16/1e3050/1e3050.png) |

---

## Deployment

The site is configured for **one-click deployment on Vercel**:

1. Import the repository on [vercel.com](https://vercel.com).
2. Vercel auto-detects the Vite framework — no extra config required.
3. Each push to `main` triggers a production build.

The included [vercel.json](vercel.json) sets `vite build` as the build command and `dist` as the output directory.

---

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "feat: add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Manish Sharma](https://github.com/manis-sharma)**

[GitHub](https://github.com/manis-sharma) · [LinkedIn](https://www.linkedin.com/in/manish-sharma-np/)

</div>

Messages are stored in the `contacts` collection in Firestore.

## Environment Variables

Required Firebase variables:
- `NEXT_PUBLIC_FIREBASE_API_KEY` - Firebase API key
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` - Auth domain
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID` - Project ID
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` - Storage bucket
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` - Messaging sender ID
- `NEXT_PUBLIC_FIREBASE_APP_ID` - App ID

## Customization

### Colors & Theme
Edit CSS variables in `app/globals.css`:
```css
:root {
  --background: #0a1428;
  --foreground: #e8e8f0;
  --primary: #3b82f6;
  --accent: #f59e0b;
  /* ... more variables */
}
```

### Content
- Update hero text in `components/Hero.tsx`
- Add projects in `components/Projects.tsx`
- Modify blog posts in `app/blog/`
- Update about section in `components/About.tsx`

## Performance Optimizations

- **Code Splitting**: Lazy loading for heavy components
- **Image Optimization**: Next.js image optimization
- **Animation Performance**: GPU-accelerated Framer Motion
- **Particle Rendering**: Canvas-based particles for efficiency

## Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

The portfolio will be automatically deployed with all environment variables configured.

### Docker

Build and run with Docker:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

