export interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  label: string // "Concept Project" | "Demo Project" | "Experimental Build"
  description: string
  challenge: string
  solution: string
  features: string[]
  technologies: string[]
  designApproach: string
  image: string // Placeholder path
  color: string
  gradient: string
}

export const projects: Project[] = [
  {
    id: 'precision-manufacturing',
    title: 'Precision Manufacturing Co.',
    subtitle: 'Industrial Manufacturing Website',
    category: 'Website Development',
    label: 'Concept Project',
    description: 'A comprehensive manufacturing website concept designed to showcase industrial capabilities, product ranges, and establish credibility with B2B customers.',
    challenge: 'Manufacturing companies often struggle to present their technical capabilities in an accessible way online. Their existing websites frequently feel outdated, making it difficult to compete for contracts with larger corporations.',
    solution: 'A modern, professional website that balances technical credibility with visual appeal. Clear product categorization, manufacturing capability showcases, and streamlined enquiry processes help convert website visitors into qualified leads.',
    features: [
      'Company introduction and history',
      'Product categories with specifications',
      'Manufacturing capabilities showcase',
      'Product gallery with zoom functionality',
      'Request for quotation system',
      'Contact and location information',
      'Mobile-responsive design',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    designApproach: 'Clean industrial aesthetic with strong typography, strategic use of white space, and high-quality product photography. The design emphasizes trust and precision while remaining approachable.',
    image: '/projects/manufacturing-preview.jpg',
    color: '#18273D',
    gradient: 'from-[#18273D] to-[#101B2D]',
  },
  {
    id: 'serenity-resort',
    title: 'Serenity Hills Resort',
    subtitle: 'Hospitality & Resort Website',
    category: 'Website Development',
    label: 'Concept Project',
    description: 'An immersive resort website concept that captures the tranquility and luxury of the hospitality experience through thoughtful design and engaging visuals.',
    challenge: 'Resorts need to convey atmosphere and experience through their digital presence. Generic booking sites don\'t capture the unique character of a property, leading to missed direct booking opportunities.',
    solution: 'A visually immersive website that puts photography and atmosphere first. Large visuals, smooth transitions, and intuitive navigation create an emotional connection before visitors even arrive.',
    features: [
      'Full-screen hero imagery',
      'Room category showcases',
      'Amenities and experiences section',
      'Image gallery with lightbox',
      'Location and directions',
      'Booking enquiry form',
      'Special offers section',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Headless CMS'],
    designApproach: 'Editorial design with generous white space, elegant serif accents, and cinematic imagery. The layout guides visitors through the resort experience naturally, building desire at every scroll.',
    image: '/projects/resort-preview.jpg',
    color: '#14B8A6',
    gradient: 'from-[#14B8A6] to-[#0D9488]',
  },
  {
    id: 'operations-dashboard',
    title: 'Operations Hub',
    subtitle: 'Business Management Dashboard',
    category: 'Web Application',
    label: 'Experimental Build',
    description: 'A comprehensive business management application concept demonstrating how custom dashboards can streamline operations and provide actionable insights.',
    challenge: 'Growing businesses often rely on spreadsheets and disconnected tools to manage operations. This leads to data silos, manual reporting, and difficulty tracking performance across the organization.',
    solution: 'A centralized dashboard application that consolidates key business metrics, customer information, and operational data into a single, intuitive interface with real-time updates and automated reporting.',
    features: [
      'Executive summary dashboard',
      'Customer management module',
      'Order and inventory tracking',
      'Revenue and performance charts',
      'Team activity monitoring',
      'Automated report generation',
      'Role-based access control',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'PostgreSQL', 'Node.js'],
    designApproach: 'Clean SaaS interface with clear visual hierarchy, consistent component patterns, and purposeful use of color for status indication. Designed for daily use with minimal cognitive load.',
    image: '/projects/dashboard-preview.jpg',
    color: '#4777F5',
    gradient: 'from-[#4777F5] to-[#3B5DD9]',
  },
]
