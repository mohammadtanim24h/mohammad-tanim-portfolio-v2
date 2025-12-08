// Skills type definition
export interface Skill {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    level: string;
}

// Skills data - Simple Icons from react-icons
import {
    SiReact,
    SiAngular,
    SiNextdotjs,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiBootstrap,
    SiNodedotjs,
    SiExpress,
    SiDjango,
    SiFastapi,
    SiPython,
    SiMysql,
    SiMongodb,
    SiMongoose,
    SiDocker,
    SiGit,
    SiGithub,
    SiGitlab,
    SiPostman,
    SiAwslambda,
    SiLangchain,
    SiOllama,
} from "react-icons/si";

export const skillsData = {
    frontend: [
        { name: "React", icon: SiReact },
        { name: "Angular", icon: SiAngular },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
    ],
    backend: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "Django", icon: SiDjango },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Python", icon: SiPython },
    ],
    database: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "Mongoose", icon: SiMongoose },
        { name: "MySQL", icon: SiMysql },
    ],
    tools: [
        { name: "Docker", icon: SiDocker },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "GitLab", icon: SiGitlab },
        { name: "Postman", icon: SiPostman },
        { name: "AWS Lambda", icon: SiAwslambda },
        { name: "Azure DevOps", icon: SiGithub },
    ],
    ai: [
        { name: "LangChain", icon: SiLangchain },
        { name: "Ollama", icon: SiOllama },
    ],
};

// Project type definition
export interface Project {
    id: number;
    slug: string;
    title: string;
    image: string;
    description: string;
    techStack: string[];
    demoLink?: string;
    githubLink: string;
    challenges: string;
    improvements: string;
}

// Sample projects data
export const projectsData: Project[] = [
    {
        id: 1,
        slug: "smart-task-manager",
        title: "Smart Task Manager",
        image: "/projects/smart-task-manager.png",
        description:
            "A modern task management application with user authentication, real-time updates, and an intuitive UI to create, organize, and track tasks efficiently.",
        techStack: [
            "React",
            "shadcn/ui",
            "tailwindcss",
            "React Router",
            "MongoDB",
            "Express.js",
            "Node.js",
        ],
        demoLink: "https://smart-task-manager-24.netlify.app/",
        githubLink: "https://github.com/mohammadtanim24h/smart-task-manager",
        challenges:
            "Implementing smooth state management for real-time task updates and optimizing API calls for performance under heavy usage.",
        improvements:
            "Add role-based access control, integrate AI-based task prioritization, implement calendar sync with Google Calendar, add push notifications, and enable collaborative team boards with real-time updates.",
    },
    {
        id: 2,
        slug: "active-wheels",
        title: "Active Wheels",
        image: "/projects/active-wheels.jpg",
        description:
            "A full-featured inventory management system for the automotive industry with user authentication, real-time stock updates, and Stripe integration for seamless payment processing.",
        techStack: ["MongoDB", "Express.js", "React", "Node.js", "Stripe"],
        demoLink: "https://active-wheels.web.app/",
        githubLink:
            "https://github.com/mohammadtanim24h/active-wheels-client-side",
        challenges:
            "Handling complex inventory flows with dynamic product variations, ensuring accurate real-time updates for stock changes, and integrating Stripe payment securely.",
        improvements:
            "Add predictive inventory management using AI, implement advanced reporting and analytics dashboards, enable multi-warehouse support, introduce automated stock alerts and reorder system, and integrate advanced payment features like subscriptions and invoicing via Stripe.",
    },
    // {
    //     id: 3,
    //     slug: "perfumania",
    //     title: "Perfumania",
    //     image: "/projects/perfumania.jpg",
    //     description:
    //         "An online perfume store with user authentication, product browsing, filtering, cart management, and a smooth e-commerce experience.",
    //     techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    //     demoLink: "https://your-live-link.com/perfumania",
    //     githubLink: "https://github.com/yourusername/perfumania-client",
    //     challenges:
    //         "Structuring product categories and filters for smooth browsing, managing cart state with proper UI-backend interactions, and maintaining consistent design across pages.",
    //     improvements:
    //         "Add AI-based product recommendations, implement loyalty and rewards system, enable multi-currency and multi-language support, integrate advanced search with fuzzy matching and voice search, and create a PWA version for offline access.",
    // },
];
