export const profile = {
  name: 'Peter Gil T. Ma-Año',
  roles: ['Full-Stack Developer', 'Software Developer', 'Web & Mobile Developer'],
  location: 'Las Piñas City, Philippines',
  phone: '0961 317 6898',
  email: 'manopetergil@gmail.com',
  github: 'https://github.com/ma-ano',
  linkedin: 'https://linkedin.com/in/peter-gil-maaño-28364a2b4',
  portfolioUrl: 'https://ma-ano.github.io/Ma-ano_Portfolio',
} as const

export interface Project {
  name: string
  type: string
  overview: string
  role: string
  built: string[]
  features: string[]
  technicalAreas: string[]
  integrations?: string[]
  liveUrl?: string
  technologies: string[]
}

export const projects: Project[] = [
  {
    name: 'Pinay Victorious Beauty Australia',
    type: 'E-Commerce Platform — Production Client Project',
    overview:
      'A production e-commerce website and administrator dashboard for an Australian beauty business, handling the full customer journey from browsing to checkout.',
    role: 'Full-Stack Developer — requirements gathering through deployment',
    built: [
      'Complete storefront with product catalog, categories, search, product details, variants, and stock availability',
      'Cart, checkout, customer accounts, and end-to-end order workflows',
      'Administrator dashboard covering products, orders, users, promotions, settings, and business statistics',
    ],
    features: [
      'Product catalog & categories',
      'Search & product details',
      'Product variants & stock availability',
      'Cart & checkout',
      'Customer accounts',
      'Order workflows',
      'Admin dashboard',
      'Product management',
      'Order management',
      'User management',
      'Promotions',
      'Settings & business statistics',
    ],
    technicalAreas: [
      'Responsive customer interface (desktop, tablet, mobile)',
      'Responsive admin interface',
      'Database design',
      'Authentication & user management',
      'Client collaboration — gathering requirements, troubleshooting, iterating on feedback',
    ],
    integrations: ['Debit/credit card payments', 'PayPal', 'Afterpay'],
    liveUrl: 'https://pinayvictoriousbeauty.com.au/',
    technologies: ['Laravel 11', 'PHP 8+', 'React', 'MySQL', 'Tailwind CSS', 'REST APIs'],
  },
  {
    name: 'Everbright International Academy Inc.',
    type: 'School Management System — Production Client Project',
    overview:
      'A school management system for managing teachers, students, batches, subjects, grades, and academic records — supporting day-to-day academic and financial operations.',
    role: 'Full-Stack Developer — database design through delivery',
    built: [
      'Multi-role authentication with role-based access control across administrative workflows',
      'Grade tracking with PDF export for academic records',
      'Database structures and application logic supporting academic and financial operations',
    ],
    features: [
      'School management',
      'Teachers, students & batches',
      'Subjects & grades',
      'Academic records',
      'Multi-role authentication',
      'Role-based access control (RBAC)',
      'Grade tracking',
      'PDF export',
      'Administrative workflows',
      'Financial operations',
    ],
    technicalAreas: [
      'Database design',
      'Application logic for academic operations',
      'Security & access control',
    ],
    liveUrl: 'https://everbrightinternationalacademyinc.online/',
    technologies: ['Laravel 11', 'PHP 8+', 'MySQL', 'Bootstrap 5', 'RBAC', 'PDF Export'],
  },
  {
    name: 'Luxury Fashion E-Commerce UI',
    type: 'Personal Frontend Project',
    overview:
      'A modern luxury fashion e-commerce frontend exploring curated product presentation and refined visual design.',
    role: 'Designer & Frontend Developer',
    built: [
      'Modern luxury aesthetic with responsive layouts',
      'Reusable component architecture',
      'Curated product presentation with smooth animations',
    ],
    features: [
      'Modern luxury aesthetic',
      'Responsive design',
      'Reusable components',
      'Product presentation',
      'Frontend architecture',
      'Smooth animations',
    ],
    technicalAreas: ['Component architecture', 'Responsive layouts', 'Motion design'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion.dev', 'Vite'],
  },
]

export interface SkillCategory {
  label: string
  skills: readonly string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue 3', 'Tailwind CSS', 'Bootstrap 5', 'Ionic', 'Vite', 'Motion.dev'],
  },
  {
    label: 'Backend',
    skills: ['Laravel 11', 'PHP 8+', 'Python', 'REST APIs', 'Authentication', 'Authorization', 'RBAC'],
  },
  {
    label: 'Data',
    skills: ['MySQL', 'MongoDB', 'Firebase / Firestore', 'Database Design', 'Database Optimization'],
  },
  {
    label: 'Mobile',
    skills: ['Flutter', 'Ionic'],
  },
  {
    label: 'Integrations',
    skills: ['PayPal', 'Afterpay', 'Debit/Credit Card Payments', 'REST APIs', 'Third-Party Services'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'NPM', 'AI-Assisted Development Tools'],
  },
]

export const coreStrengths = [
  'Problem Solving',
  'Debugging & Root-Cause Analysis',
  'Critical Thinking',
  'System Design',
  'Requirements Gathering',
  'Client Communication',
  'Independent Work',
  'Project Planning',
  'Technical Communication',
  'Adaptability',
] as const

export const education = {
  degree: 'Bachelor of Science in Information Technology',
  school: 'Cavite State University – Imus Campus',
  graduated: 'September 29, 2025',
} as const
