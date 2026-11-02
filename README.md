# Codeflow Studio - Digital Solutions Website

A premium digital studio website showcasing web development, custom applications, and business automation services. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Premium Design**: Modern, sophisticated visual design with elegant typography and spacious layouts
- **Fully Responsive**: Optimized for all devices from mobile to large desktop screens
- **Smooth Animations**: Scroll-triggered animations and micro-interactions using Framer Motion
- **Accessibility**: WCAG compliant with keyboard navigation, focus states, and reduced motion support
- **SEO Optimized**: Meta tags, Open Graph, sitemap, robots.txt, and semantic HTML
- **Type Safe**: Full TypeScript implementation with strict mode
- **Configurable**: Centralized configuration for easy customization

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navbar/          # Navigation with mobile menu
│   ├── Hero/            # Hero section with animations
│   ├── Introduction/    # Studio overview section
│   ├── Services/        # Service offerings
│   ├── Portfolio/       # Project showcase
│   ├── Industries/      # Industry sectors served
│   ├── Process/         # Work process timeline
│   ├── About/           # About the studio
│   ├── CTA/             # Call to action section
│   ├── Contact/         # Contact form
│   └── Footer/          # Site footer
├── pages/
│   ├── Home/            # Homepage
│   └── ProjectDetail/   # Individual project pages
├── data/
│   ├── siteConfig.ts    # Site configuration & content
│   ├── services.ts      # Service offerings data
│   ├── projects.ts      # Portfolio projects data
│   └── industries.ts    # Industry sectors data
├── hooks/
│   ├── useScrollAnimation.ts  # Scroll-based animations
│   └── index.ts
├── styles/
│   └── index.css        # Tailwind CSS & custom styles
├── App.tsx              # Main app component with routing
└── main.tsx             # Entry point
```

## 🛠 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚙️ Configuration

### Site Configuration

Update `src/data/siteConfig.ts` to customize:

- **Brand Name**: Company name displayed throughout the site
- **Contact Information**: Email, phone, WhatsApp, address
- **Social Links**: LinkedIn, Twitter, Instagram, GitHub
- **Navigation**: Menu items and links
- **Content**: Headlines, descriptions, and copy

```typescript
export const siteConfig = {
  brandName: 'Your Company Name',
  contact: {
    email: 'hello@yourcompany.com',
    phone: '+91 00000 00000',
    whatsapp: '+910000000000',
    // ...
  },
  // ...
}
```

### Contact Form Integration

The contact form is ready for backend integration. Set up your preferred service:

1. Create a `.env` file based on `.env.example`
2. Add your form endpoint URL

```env
VITE_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

**Recommended services:**
- [Formspree](https://formspree.io)
- [Netlify Forms](https://docs.netlify.com/forms/setup/)
- Custom API endpoint

The form currently shows a success message and provides email/WhatsApp fallback options.

### Color Scheme

The color palette is defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    bg: '#F7F9FC',      // Light background
    dark: '#101B2D',    // Dark text/elements
  },
  secondary: {
    dark: '#18273D',    // Secondary dark
  },
  accent: {
    teal: '#14B8A6',    // Primary accent
    blue: '#4777F5',    // Secondary accent
  },
  text: {
    body: '#526176',    // Body text color
  },
}
```

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- **Mobile**: 360px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

## 🎨 Portfolio Projects

Three concept projects demonstrate capabilities:

1. **Precision Manufacturing Co.** - Industrial manufacturing website
2. **Serenity Hills Resort** - Hospitality & resort website
3. **Operations Hub** - Business management dashboard

Each project includes:
- Visual mockup preview
- Challenge & solution description
- Key features list
- Technology stack
- Design approach

**Note**: These are clearly labeled as concept/demo projects.

## 🔍 SEO

The site includes:

- Meta title and description
- Open Graph tags for social sharing
- Sitemap.xml
- Robots.txt
- Semantic HTML structure
- Canonical URLs (configure domain in siteConfig)

Update `public/sitemap.xml` and `public/robots.txt` with your actual domain before deployment.

## ♿ Accessibility

- Semantic HTML elements
- Proper heading hierarchy
- Keyboard navigation support
- Focus visible states
- ARIA labels where needed
- Color contrast compliance
- `prefers-reduced-motion` support

## 📦 Deployment

Build the production bundle:

```bash
npm run build
```

The `dist/` folder contains the static files ready for deployment.

**Recommended hosting:**
- Vercel
- Netlify
- AWS Amplify
- Cloudflare Pages

## 🔧 Customization Checklist

Before going live:

- [ ] Update `brandName` in siteConfig.ts
- [ ] Add real contact information (email, phone, WhatsApp)
- [ ] Update social media links
- [ ] Configure form submission endpoint
- [ ] Update domain in sitemap.xml and robots.txt
- [ ] Add Open Graph image (`public/og-image.jpg`)
- [ ] Review and customize all content copy
- [ ] Add actual project images to `public/projects/`

## 📄 License

This project is private. All rights reserved.

---

Built with ❤️ by Codeflow Studio
