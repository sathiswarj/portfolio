import project1 from '../assets/projects/project1.png'    // ecommerce store
import hospital from '../assets/projects/hospital.png'
import restaurant from '../assets/projects/restaurant.png'
import aiChat from '../assets/projects/ai-chat.png'
import notion from '../assets/projects/notion.png'
import whatsapp from '../assets/projects/whatsapp.png'
import ecommAdmin from '../assets/projects/project2.png'    // admin dashboard
import automation from '../assets/projects/project3.png'

export const projects = [
  {
    id: 1,
    title: 'E-Commerce App — MERN Mobile',
    description:
      'A full-featured MERN stack E-Commerce mobile application where users can browse products, manage their cart, and make purchases. Includes an admin panel for managing products, orders, and users, with Cloudinary integration for optimized image handling.',
    image: project1,
    category: 'Mobile',
    tags: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    githubUrl: 'https://github.com/sathiswarj/Ecommerce-app',
    featured: true,
  },
  {
    id: 2,
    title: 'NovaClinic — Hospital Appointment',
    description:
      'A complete hospital appointment booking platform where patients can search doctors by specialization, book appointments, and manage their healthcare. Features real-time availability and an admin dashboard for clinic management.',
    image: hospital,
    category: 'Frontend',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://nova-clinic-seven.vercel.app/',
    githubUrl: 'https://github.com/sathiswarj/Hospital-appointment',
    featured: true,
  },
  {
    id: 3,
    title: 'Lumière — Restaurant Website',
    description:
      'A premium restaurant website with an elegant UI showcasing the menu, ambiance, and online reservation system. Features smooth animations, a fully responsive layout, and an immersive dining experience design.',
    image: restaurant,
    category: 'Frontend',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    liveUrl: 'https://lumiere-khaki-eight.vercel.app/',
    githubUrl: 'https://github.com/sathiswarj/restaurant-website',
    featured: true,
  },
  {
    id: 4,
    title: 'DocGS AI — RAG Document Chat',
    description:
      'A full-stack AI-powered application that lets users chat with their documents using Retrieval-Augmented Generation (RAG). Combines local LLMs via Ollama with conversational AI to provide accurate, document-based answers while keeping all data fully local and private.',
    image: aiChat,
    category: 'Full-Stack',
    tags: ['Next.js 15', 'Node.js', 'Express', 'MongoDB', 'Ollama', 'Transformers'],
    githubUrl: 'https://github.com/sathiswarj/AI-Docs-Chat',
    featured: true,
  },
  {
    id: 5,
    title: 'TaskFlow — Notion Clone',
    description:
      'A productivity workspace inspired by Notion with a rich block-based text editor, nested pages, kanban boards, and real-time collaboration. Built to handle complex task management workflows with a clean minimal design.',
    image: notion,
    category: 'Full-Stack',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    githubUrl: 'https://github.com/sathiswarj/task-application',
    featured: false,
  },
  {
    id: 6,
    title: 'WhatsApp Clone — Mobile',
    description:
      'A real-time mobile messaging app clone built with React Native, featuring one-on-one chats, group messaging, voice notes, media sharing, and read receipts — all powered by a Node.js backend with Socket.io.',
    image: whatsapp,
    category: 'Mobile',
    tags: ['React Native', 'Node.js', 'Socket.io', 'MongoDB', 'Expo'],
    githubUrl: 'https://github.com/sathiswarj/Whatsapp-clone',
    featured: false,
  },
  {
    id: 7,
    title: 'E-Commerce Platform — MERN Web',
    description:
      'A full-featured MERN stack E-Commerce web application with a customer-facing storefront, secure checkout, and a comprehensive admin panel for managing products, orders, and users. Cloudinary handles all product image storage.',
    image: ecommAdmin,
    category: 'Full-Stack',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT'],
    githubUrl: 'https://github.com/sathiswarj/E-commerce',
    featured: false,
  },
  {
    id: 8,
    title: 'Event Management System — MERN & n8n',
    description:
      'A full-stack Event Management System built with the MERN stack and n8n automation for event requests, approval workflows, status tracking, and automated email notifications.',
    image: automation,
    category: 'Full-Stack',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'n8n', 'Email Automation', 'Telegram'],
    githubUrl: 'https://github.com/sathiswarj/event-management',
    featured: true,
  },
]

export const projectCategories = ['All', 'Full-Stack', 'Frontend', 'Mobile']
