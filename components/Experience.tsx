"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import SectionHeader from "./SectionHeader";
import { Briefcase, MapPin } from "lucide-react";

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    location: string;
    employmentType: string;
    description: string[];
    technologies: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: "Software Developer",
        company: "ShujaBITS Infotech Solutions Private Limited",
        period: "June 2022 - Present",
        location: "Remote",
        employmentType: "Full-time",
        description: [
            "Designed, developed, and deployed full-stack web applications using React, Angular, Node.js, Express, Django, and FastAPI, serving clients in logistics, AI, and enterprise sectors",
            "Built an Inventory Management System for logistics companies to manage inventory, automate stock tracking, and streamline warehouse operations, reducing manual data entry by 60%",
            "Developed an AI Interviewer Chatbot using React, LangChain, and Ollama, integrating LLMs to simulate real-time interview experiences",
            "Engineered an Asset Management Application for managing organizational as well as personal assets with real-time tracking, data visualization, and efficient asset categorization",
            "Enhanced API performance and database efficiency through indexing, schema optimization, and query tuning, leading to up to 80% faster response times",
            "Implemented Docker-based CI/CD pipelines, reducing deployment time and build errors by over 40%",
        ],
        technologies: [
            "React",
            "Angular",
            "Node.js",
            "Express",
            "Django",
            "FastAPI",
            "MongoDB",
            "Mongoose",
            "MySQL",
            "Docker",
            "Tailwind CSS",
            "Bootstrap",
            "LangChain",
            "Ollama",
        ],
    },
    {
        title: "Full Stack Engineer",
        company: "Next Leaders 23",
        period: "July 2025 - Present",
        location: "Remote",
        employmentType: "Part-time",
        description: [
            "Engineered scalable web applications, improving performance, reliability, and overall user experience.",
            "Designed, built and polished responsive interfaces with smooth interactions and modern UI/UX standards.",
            "Developed commercial-quality digital products for marketplace distribution, focusing on clean structure and reusability.",
            "Currently building a restaurant SaaS with features like menu management, ordering system, and admin dashboards.",
            "Enhanced application efficiency through optimized data handling, routing, and state logic.",
            "Contributed to architectural decisions and delivered end-to-end features within an agile workflow.",
        ],
        technologies: [
            "React",
            "TypeScript",
            "Shadcn",
            "Tailwind",
            "Motion",
            "React Router",
            "TanStack Query",
            "React Hook Form",
            "Zod",
            "Zustand",
            "Axios",
            "Express",
            "MongoDB",
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-8 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="Work Experience" />

                {/* Card-based layout */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerChildren}
                    className="space-y-6"
                >
                    {experiences.map((exp, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Card className="glass-surface hover-lift border-l-4 border-l-accent">
                                <CardHeader>
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 p-2 rounded-lg bg-accent/10">
                                                <Briefcase className="h-5 w-5 text-accent" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl md:text-2xl mb-1">
                                                    {exp.title}
                                                </CardTitle>
                                                <p className="font-semibold text-base md:text-lg">
                                                    {exp.company}
                                                </p>
                                            </div>
                                        </div>
                                        <Badge
                                            variant="secondary"
                                            className="w-fit text-xs md:text-sm bg-accent/20 text-accent-foreground hover:bg-accent/30"
                                        >
                                            {exp.period}
                                        </Badge>
                                    </div>
                                    <p className="text-xs md:text-sm text-muted-foreground flex gap-1 items-center">
                                        <MapPin className="h-4 w-4 text-accent mr-1" />{" "}
                                        {exp.location}
                                        <span className="mx-1">•</span>
                                        {exp.employmentType}
                                    </p>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {/* Description */}
                                    <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                                        {exp.description.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="flex gap-3 leading-relaxed"
                                            >
                                                <span className="text-accent mt-1.5 shrink-0 font-bold">
                                                    •
                                                </span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="text-sm font-medium mb-3 text-foreground">
                                            Technologies Used
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map(
                                                (tech, idx) => (
                                                    <Badge
                                                        key={idx}
                                                        variant="secondary"
                                                        className="text-xs font-normal px-3 py-1 bg-[#282828] hover:bg-[#404040]/80 transition-colors"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
