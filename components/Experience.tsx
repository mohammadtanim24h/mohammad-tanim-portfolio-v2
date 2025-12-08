import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "./SectionHeader";

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string[];
    technologies: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: "Software Developer",
        company: "ShujaBITS Infotech Solutions Private Limited",
        period: "June 2022 - Present",
        location: "Bangladesh",
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
];

export function Experience() {
    return (
        <section id="experience" className="py-8 md:py-16 bg-background">
            <div className="container px-4 md:px-6">
                <SectionHeader title="Work Experience" />

                {/* Timeline Container */}
                <div>
                    <div className="relative">
                        {/* Vertical Line - Hidden on mobile */}
                        <div className="hidden md:block absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

                        {/* Experience Items */}
                        <div className="space-y-8 md:space-y-12">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative">
                                    {/* Timeline Dot - Hidden on mobile */}
                                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                                    {/* Card - Alternating sides on desktop, stacked on mobile */}
                                    <div
                                        className={`md:w-[calc(50%-2rem)] ${
                                            index % 2 === 0
                                                ? "md:ml-auto md:pl-8"
                                                : "md:mr-auto md:pr-8"
                                        }`}
                                    >
                                        <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
                                            <CardHeader>
                                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                                    <CardTitle className="text-xl md:text-2xl">
                                                        {exp.title}
                                                    </CardTitle>
                                                    <Badge
                                                        variant="secondary"
                                                        className="w-fit text-xs md:text-sm"
                                                    >
                                                        {exp.period}
                                                    </Badge>
                                                </div>
                                                <div className="space-y-1 text-sm md:text-base text-muted-foreground">
                                                    <p className="font-semibold text-foreground">
                                                        {exp.company}
                                                    </p>
                                                    <p className="text-xs md:text-sm">
                                                        {exp.location}
                                                    </p>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                {/* Description */}
                                                <ul className="space-y-2 mb-4 text-sm md:text-base text-muted-foreground">
                                                    {exp.description.map(
                                                        (item, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="flex gap-2"
                                                            >
                                                                <span className="text-primary mt-1.5 shrink-0">
                                                                    •
                                                                </span>
                                                                <span>
                                                                    {item}
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>

                                                {/* Technologies */}
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map(
                                                        (tech, idx) => (
                                                            <Badge
                                                                key={idx}
                                                                variant="outline"
                                                                className="text-xs"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        )
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
