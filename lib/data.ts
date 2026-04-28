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
    SiGithub,
    SiGitlab,
    SiPostman,
    SiLangchain,
    SiOllama,
    SiShadcnui,
    SiNestjs,
    SiPostgresql,
    SiPrisma,
    SiRedis,
    SiSupabase,
    SiAmazon,
    SiSentry,
    SiJira,
    SiSocketdotio,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export const skillsData = {
    frontend: [
        { name: "React", icon: SiReact },
        { name: "Angular", icon: SiAngular },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "shadcn/ui", icon: SiShadcnui },
    ],
    backend: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "Django", icon: SiDjango },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Python", icon: SiPython },
        { name: "NestJS", icon: SiNestjs },
        { name: "Socket.io", icon: SiSocketdotio },
    ],
    database: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "Mongoose", icon: SiMongoose },
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Prisma", icon: SiPrisma },
        { name: "Redis", icon: SiRedis },
        { name: "Supabase", icon: SiSupabase },
    ],
    tools: [
        { name: "AWS", icon: SiAmazon },
        { name: "Azure", icon: VscAzure },
        { name: "Docker", icon: SiDocker },
        { name: "GitHub", icon: SiGithub },
        { name: "GitLab", icon: SiGitlab },
        { name: "Jira", icon: SiJira },
        { name: "Postman", icon: SiPostman },
        { name: "Sentry", icon: SiSentry },
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
        slug: "echo-learn",
        title: "Echo Learn (AI Learning Platform)",
        image: "/projects/echo-learn.png",
        description:
            "An AI-driven learning platform delivering personalized education via interactive AI companions with real-time voice AI capabilities and customizable teaching experiences.",
        techStack: [
            "Next.js",
            "Vapi AI",
            "Supabase",
            "Clerk",
            "TypeScript",
            "Tailwind CSS",
            "Sentry",
        ],
        demoLink: "https://echo-learn-ai.vercel.app/",
        githubLink: "https://github.com/mohammadtanim24h/echo-learn",
        challenges:
            "Integrating real-time voice AI (Vapi) with live transcription for natural, conversational learning experiences while ensuring low latency and high accessibility. Implementing secure authentication with subscription-based tier access control.",
        improvements:
            "Add multi-language support for global accessibility, implement advanced analytics to track learning progress, integrate more AI voice options, add collaborative study rooms, and enable custom curriculum creation with AI-generated content.",
    },
    {
        id: 2,
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
        id: 3,
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
];
