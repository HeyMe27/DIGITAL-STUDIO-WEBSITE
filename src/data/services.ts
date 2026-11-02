import { Globe, Layers, Workflow, Wrench } from 'lucide-react'

export interface Service {
  id: string
  icon: typeof Globe
  title: string
  description: string
  capabilities: string[]
  gradient: string
  accentColor: string
}

export const services: Service[] = [
  {
    id: 'website-development',
    icon: Globe,
    title: 'Website Development',
    description: 'Professional, responsive, and SEO-friendly websites that communicate your business value and help convert visitors into enquiries.',
    capabilities: [
      'Corporate & Business Websites',
      'Landing Pages',
      'Manufacturing Websites',
      'Product Catalogues',
      'E-commerce Websites',
      'Portfolio Websites',
    ],
    gradient: 'from-accent-teal/10 to-accent-blue/5',
    accentColor: 'accent-teal',
  },
  {
    id: 'web-applications',
    icon: Layers,
    title: 'Custom Web Applications',
    description: 'Custom-built business applications designed around your real operational requirements and workflows.',
    capabilities: [
      'Business Dashboards',
      'Admin Panels',
      'Booking Applications',
      'Inventory Management',
      'Customer Portals',
      'Internal Management Systems',
    ],
    gradient: 'from-accent-blue/10 to-accent-teal/5',
    accentColor: 'accent-blue',
  },
  {
    id: 'business-automation',
    icon: Workflow,
    title: 'Business Automation',
    description: 'Connect your business processes, applications, and data to simplify operations and reduce manual work.',
    capabilities: [
      'API Integrations',
      'Workflow Automation',
      'Form & Enquiry Automation',
      'Data Integrations',
      'Business Reporting',
      'Process Optimization',
    ],
    gradient: 'from-secondary-dark/10 to-accent-teal/5',
    accentColor: 'accent-teal',
  },
  {
    id: 'website-support',
    icon: Wrench,
    title: 'Website Management & Support',
    description: 'Ongoing technical assistance to keep your websites and applications maintained, secure, and reliable.',
    capabilities: [
      'Website Updates',
      'Performance Optimization',
      'Technical Troubleshooting',
      'Security Maintenance',
      'Monitoring & Backups',
      'Content Updates',
    ],
    gradient: 'from-accent-teal/5 to-secondary-dark/10',
    accentColor: 'accent-blue',
  },
]
