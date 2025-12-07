// Project type definition
export interface Project {
    id: number;
    slug: string;
    title: string;
    image: string;
    description: string;
    techStack: string[];
    liveLink?: string;
    repoLink: string;
    challenges: string;
    improvements: string;
}

// Sample projects data
export const projects: Project[] = [
    {
        id: 1,
        slug: "ecommerce-platform",
        title: "E-Commerce Platform",
        image: "/projects/ecommerce.jpg",
        description:
            "A full-stack e-commerce platform built with Next.js and PostgreSQL. Features include user authentication, product management, shopping cart, and secure payment processing with Stripe integration.",
        techStack: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "Stripe",
            "Tailwind CSS",
        ],
        liveLink: "https://ecommerce-demo.example.com",
        repoLink: "https://github.com/yourusername/ecommerce-platform",
        challenges:
            "Implementing real-time inventory management and handling concurrent transactions was challenging. I solved this by implementing optimistic locking with Prisma and using database transactions to ensure data consistency.",
        improvements:
            "Future improvements include adding a recommendation engine using machine learning, implementing multi-currency support, and creating a mobile app version using React Native.",
    },
    {
        id: 2,
        slug: "task-management-app",
        title: "Task Management App",
        image: "/projects/task-manager.jpg",
        description:
            "A collaborative task management application with real-time updates, team collaboration features, and advanced filtering. Built with React, Node.js, and Socket.io for real-time communication.",
        techStack: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Socket.io",
            "Redux",
            "Material-UI",
        ],
        liveLink: "https://taskmanager-demo.example.com",
        repoLink: "https://github.com/yourusername/task-manager",
        challenges:
            "The biggest challenge was implementing real-time synchronization across multiple clients without conflicts. I implemented operational transformation principles and conflict resolution strategies to handle simultaneous edits.",
        improvements:
            "Plan to add offline mode with IndexedDB, implement drag-and-drop Kanban boards, integrate with third-party tools like Slack and Google Calendar, and add AI-powered task prioritization.",
    },
    {
        id: 3,
        slug: "weather-dashboard",
        title: "Weather Dashboard",
        image: "/projects/weather-dashboard.jpg",
        description:
            "An interactive weather dashboard that displays current weather conditions, 7-day forecasts, and historical weather data. Features geolocation, favorite locations, and beautiful data visualizations.",
        techStack: [
            "Vue.js",
            "TypeScript",
            "Chart.js",
            "OpenWeather API",
            "Vuex",
            "TailwindCSS",
        ],
        liveLink: "https://weather-dashboard.example.com",
        repoLink: "https://github.com/yourusername/weather-dashboard",
        challenges:
            "Handling API rate limits and providing a smooth user experience was challenging. I implemented intelligent caching with localStorage and service workers to minimize API calls while keeping data fresh.",
        improvements:
            "Future enhancements include adding weather alerts and notifications, implementing severe weather warnings, creating weather-based recommendations (e.g., activities, clothing), and adding air quality index data.",
    },
    {
        id: 4,
        slug: "blog-cms",
        title: "Blog CMS Platform",
        image: "/projects/blog-cms.jpg",
        description:
            "A headless CMS specifically designed for bloggers and content creators. Features include rich text editing, SEO optimization, image optimization, and analytics integration.",
        techStack: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "AWS S3",
            "TipTap Editor",
        ],
        repoLink: "https://github.com/yourusername/blog-cms",
        challenges:
            "Building a performant rich text editor with collaboration features was complex. I integrated TipTap editor and implemented custom extensions for embedding media, code blocks, and custom components.",
        improvements:
            "Planning to add AI-powered content suggestions, scheduled publishing, multi-language support, advanced analytics dashboard, and integration with social media platforms for automatic cross-posting.",
    },
];
