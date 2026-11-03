// Site Configuration
// Update these values with your actual business details

export const siteConfig = {
  // Brand
  brandName: 'CodeCraft',
  tagline: 'Digital Experiences That Move Businesses Forward',
  shortDescription: 'We design and develop websites, custom web applications, and intelligent business solutions.',
  
  // Contact Information
  contact: {
    email: 'codecraft.helo@gmail.com',
    phone: '+91 96068 09964',
    whatsapp: '919606809964', // WhatsApp number (no spaces/dashes, with country code)
    address: {
      city: 'Bengaluru',
      state: 'Karnataka',
      country: 'India',
    },
  },
  
  // Domain - Update when you have your actual domain
  domain: 'https://codecraftsolutions.in',
  
  // Navigation
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    // { name: 'Our Work', href: '/#work' }, // Hidden for now
    { name: 'Industries', href: '/#industries' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ],
  
  // CTA
  primaryCTA: {
    text: 'Start a Project',
    href: '/#contact',
  },
}

export const heroContent = {
  headline: 'Digital Experiences That Move Businesses Forward',
  subheadline: 'We design and develop websites, custom web applications, and intelligent business solutions that help companies connect with customers, simplify operations, and grow.',
  primaryCTA: {
    text: 'Explore Our Services',
    href: '/#services',
  },
  secondaryCTA: {
    text: "Let's Talk",
    href: '/#contact',
  },
}

export const introContent = {
  headline: 'Technology Should Solve Real Business Problems',
  description: 'We combine design, engineering, and business understanding to develop digital solutions that make everyday operations easier and help businesses grow.',
  principles: [
    {
      title: 'Purposeful Design',
      description: 'Every element serves a function. We create interfaces that look exceptional and guide users naturally toward their goals.',
    },
    {
      title: 'Reliable Engineering',
      description: 'Built on solid foundations. Our solutions are scalable, maintainable, and designed to perform consistently.',
    },
    {
      title: 'Long-Term Partnership',
      description: 'Beyond launch day. We stay engaged to support, refine, and evolve your digital presence as your business grows.',
    },
  ],
}

export const ctaContent = {
  headline: "Have an Idea? Let's Build Something Meaningful.",
  description: 'Whether you need a business website, a custom web application, or a better way to manage your operations, let\'s discuss what\'s possible.',
  buttonText: 'Start a Conversation',
}

export const aboutContent = {
  headline: 'Built Around Thoughtful Engineering',
  description: `We believe great software starts with understanding the people and businesses behind it.

Our approach combines practical problem-solving, thoughtful design, and reliable engineering to turn ideas into digital solutions that make everyday business easier.`,
  values: [
    'Direct communication with no unnecessary layers',
    'Business-focused development that solves real problems',
    'Attention to detail in every interaction',
    'Modern technologies chosen for the right reasons',
    'Scalable solutions that grow with your business',
    'Ongoing support and partnership',
  ],
}

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your business, objectives, challenges, and requirements through focused conversations.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Define the scope, structure, technical approach, and timeline for your project.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Create user-friendly interfaces and experiences that align with your brand and business goals.',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Build, integrate, test, and refine the solution with regular progress updates.',
  },
  {
    number: '05',
    title: 'Launch & Support',
    description: 'Deploy your solution and provide ongoing technical support to ensure continued success.',
  },
]
