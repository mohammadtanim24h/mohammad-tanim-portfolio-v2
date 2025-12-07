import { Card, CardContent } from "@/components/ui/card";
import {
    Code2,
    Database,
    Wrench,
    FileCode,
    Server,
    Palette,
    Box,
    Cloud,
    GitBranch,
    Layout,
    Braces,
    Terminal,
} from "lucide-react";

// TypeScript Interfaces for Skills Data
interface Skill {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
    category: string;
    skills: Skill[];
}

// Skills Data - Easy to Edit!
const skillsData: SkillCategory[] = [
    {
        category: "Frontend",
        skills: [
            { name: "React", icon: Code2 },
            { name: "Next.js", icon: Layout },
            { name: "TypeScript", icon: FileCode },
            { name: "Tailwind CSS", icon: Palette },
            { name: "Vue.js", icon: Code2 },
            { name: "JavaScript", icon: Braces },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", icon: Server },
            { name: "Express.js", icon: Terminal },
            { name: "PostgreSQL", icon: Database },
            { name: "MongoDB", icon: Database },
            { name: "Redis", icon: Box },
            { name: "REST APIs", icon: Server },
        ],
    },
    {
        category: "Tools",
        skills: [
            { name: "Git", icon: GitBranch },
            { name: "Docker", icon: Box },
            { name: "AWS", icon: Cloud },
            { name: "VS Code", icon: Code2 },
            { name: "Postman", icon: Wrench },
            { name: "Figma", icon: Palette },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-16 md:py-24 lg:py-32 bg-muted/30">
            <div className="container px-4 md:px-6">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        Skills & Technologies
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground text-base md:text-lg">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>

                {/* Skills Categories */}
                <div className="space-y-12 md:space-y-16">
                    {skillsData.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            {/* Category Title */}
                            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
                                {category.category}
                            </h3>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                                {category.skills.map((skill, skillIndex) => {
                                    const IconComponent = skill.icon;
                                    return (
                                        <Card
                                            key={skillIndex}
                                            className="group hover:shadow-lg hover:scale-105 transition-all duration-300 hover:border-primary/50"
                                        >
                                            <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
                                                {/* Icon */}
                                                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                                    <IconComponent className="h-8 w-8 text-primary" />
                                                </div>

                                                {/* Skill Name */}
                                                <p className="text-sm md:text-base font-medium text-center group-hover:text-primary transition-colors duration-300">
                                                    {skill.name}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
