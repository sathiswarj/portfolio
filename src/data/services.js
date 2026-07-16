import {
  Globe,
  Layers,
  Building2,
  ShoppingCart,
  User,
  Wrench,
} from 'lucide-react'

export const services = [
  {
    id: 1,
    icon: Globe,
    title: 'Website Development',
    description:
      'Full-stack web applications built with modern technologies like React, Next.js, and Node.js. Scalable, secure, and performant.',
    color: '#3b82f6',
    features: ['React / Next.js', 'REST & GraphQL APIs', 'Database Design', 'Cloud Deployment'],
  },
  {
    id: 2,
    icon: Layers,
    title: 'Landing Pages',
    description:
      'High-converting landing pages with stunning design, A/B testing capabilities, and optimized for maximum lead generation.',
    color: '#8b5cf6',
    features: ['Conversion Optimized', 'A/B Testing', 'SEO Ready', 'Fast Load Time'],
  },
  {
    id: 3,
    icon: Building2,
    title: 'Business Websites',
    description:
      'Professional business websites that establish credibility, showcase services, and drive customer engagement.',
    color: '#06b6d4',
    features: ['CMS Integration', 'Contact Forms', 'Google Analytics', 'Multi-page'],
  },
  {
    id: 4,
    icon: ShoppingCart,
    title: 'E-Commerce Websites',
    description:
      'Powerful online stores with payment gateway integration, inventory management, and seamless checkout flows.',
    color: '#10b981',
    features: ['Stripe / PayPal', 'Product Management', 'Order Tracking', 'Admin Dashboard'],
  },
  {
    id: 5,
    icon: User,
    title: 'Portfolio Websites',
    description:
      'Stunning personal portfolio websites that showcase your work and help you stand out to potential clients or employers.',
    color: '#f59e0b',
    features: ['Unique Design', 'Project Showcase', 'Blog / CMS', 'Contact Integration'],
  },
  {
    id: 6,
    icon: Wrench,
    title: 'Website Maintenance',
    description:
      'Ongoing support, bug fixes, performance optimizations, security updates, and feature additions for existing websites.',
    color: '#ef4444',
    features: ['24/7 Support', 'Performance Audits', 'Security Updates', 'Feature Additions'],
  },
]
