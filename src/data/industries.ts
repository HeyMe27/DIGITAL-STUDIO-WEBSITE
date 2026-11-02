import { Factory, Building2, ShoppingBag, GraduationCap, Briefcase, Rocket } from 'lucide-react'

export interface Industry {
  id: string
  icon: typeof Factory
  title: string
  description: string
  solutions: string[]
  color: string
}

export const industries: Industry[] = [
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing & Industrial',
    description: 'Digital solutions that help manufacturing companies showcase capabilities, manage product information, and generate qualified enquiries.',
    solutions: [
      'Product catalogues with technical specifications',
      'Capability and infrastructure showcases',
      'Quotation request and enquiry systems',
      'Dealer and distributor portals',
    ],
    color: 'accent-teal',
  },
  {
    id: 'hospitality',
    icon: Building2,
    title: 'Hospitality & Resorts',
    description: 'Immersive digital experiences that capture the atmosphere of your property and drive direct bookings.',
    solutions: [
      'Visual-first resort and hotel websites',
      'Room and experience showcases',
      'Booking enquiry systems',
      'Guest management applications',
    ],
    color: 'accent-blue',
  },
  {
    id: 'retail',
    icon: ShoppingBag,
    title: 'Retail & E-commerce',
    description: 'Online platforms that showcase products effectively and create seamless purchasing experiences.',
    solutions: [
      'Product showcase websites',
      'E-commerce platforms',
      'Inventory management dashboards',
      'Customer engagement tools',
    ],
    color: 'accent-teal',
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education',
    description: 'Digital platforms that help educational institutions communicate effectively and manage operations efficiently.',
    solutions: [
      'Institution websites',
      'Admission enquiry systems',
      'Student and parent portals',
      'Administrative management tools',
    ],
    color: 'accent-blue',
  },
  {
    id: 'professional-services',
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Digital presence and tools that help service providers establish credibility and manage client relationships.',
    solutions: [
      'Professional portfolio websites',
      'Service showcase platforms',
      'Client management systems',
      'Appointment and scheduling tools',
    ],
    color: 'accent-teal',
  },
  {
    id: 'startups',
    icon: Rocket,
    title: 'Startups & Growing Businesses',
    description: 'Flexible digital solutions that scale with your business and help you establish a professional presence from day one.',
    solutions: [
      'Launch-ready business websites',
      'MVP web applications',
      'Growth-focused landing pages',
      'Business automation tools',
    ],
    color: 'accent-blue',
  },
]
