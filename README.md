# Manish Dada - Developer Portfolio

A modern, animated portfolio website built with Next.js 16, React, TailwindCSS, and Framer Motion. Features a beautiful dark blue/gold theme with smooth animations, skills carousel, project showcase, blog section, and contact form integration with Firestore.

## Features

- **Animated Hero Section**: Eye-catching landing section with smooth animations
- **Particle Background**: Animated particle effects using Canvas API
- **Skills Carousel**: Interactive carousel showcasing technical skills
- **Project Showcase**: Grid layout displaying portfolio projects
- **Blog Section**: MDX-powered blog for technical articles
- **Contact Form**: Firebase Firestore integration for contact submissions
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- **Dark Theme**: Professional dark blue and gold color scheme
- **Smooth Animations**: Framer Motion animations throughout

## Tech Stack

- **Frontend**: React 19, Next.js 16
- **Styling**: TailwindCSS v4, CSS Variables
- **Animations**: Framer Motion
- **Database**: Firebase Firestore
- **Blog**: MDX with Next.js
- **Deployment**: Vercel / Docker

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- Firebase project with Firestore enabled

### Installation

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Firebase configuration to `.env.local`:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Development

Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/          # Contact form API endpoint
│   ├── blog/                 # MDX blog posts
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles and theme
├── components/
│   ├── ParticleBackground.tsx # Animated particles
│   ├── Navbar.tsx             # Navigation bar
│   ├── Hero.tsx               # Hero section
│   ├── About.tsx              # About section
│   ├── Skills.tsx             # Skills carousel
│   ├── Projects.tsx           # Projects grid
│   ├── Blog.tsx               # Blog section
│   ├── Contact.tsx            # Contact form
│   ├── Footer.tsx             # Footer
│   └── ui/                    # shadcn/ui components
├── lib/
│   └── firebase.ts            # Firebase configuration
└── public/                    # Static assets
```

## Blog Posts

Blog posts are stored in `app/blog/` as MDX files. Each post has:
- Metadata (title, description, date)
- Content in Markdown/MDX format
- Automatic routing via Next.js

Add new blog posts by creating:
```
app/blog/post-title/page.mdx
```

## Contact Form

The contact form submits to Firebase Firestore with:
- Email address
- Message content
- Timestamp
- IP address

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

## License

This project is open source and available under the MIT License.

## Author

Manish Dada - Python & Full-Stack Developer

## Support

For questions or issues, please create an issue on the repository.