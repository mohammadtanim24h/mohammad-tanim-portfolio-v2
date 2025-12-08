"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, fadeInUp, staggerChildren } from "@/lib/motion";
import { skillsData } from "@/lib/data";

const skillCategories = [
    {
        title: "Frontend",
        icon: "🎨",
        skills: skillsData.frontend,
    },
    {
        title: "Backend",
        icon: "⚙️",
        skills: skillsData.backend,
    },
    {
        title: "Database",
        icon: "🗄️",
        skills: skillsData.database,
    },
    {
        title: "DevOps & Tools",
        icon: "🛠️",
        skills: skillsData.tools,
    },
    {
        title: "AI & LLMs",
        icon: "🤖",
        skills: skillsData.ai,
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-24 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-6">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-accent to-accent-alt mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerChildren}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
                >
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            variants={fadeInUp}
                            className="space-y-6"
                        >
                            <div className="text-center">
                                <div className="text-4xl mb-2">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-medium">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                            transition: {
                                                delay:
                                                    categoryIndex * 0.1 +
                                                    skillIndex * 0.05,
                                                duration: 0.4,
                                            },
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.2 },
                                        }}
                                    >
                                        <Card className="group relative overflow-hidden glass-surface hover-lift cursor-default">
                                            <CardContent className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative w-10 h-10 flex items-center justify-center">
                                                        <skill.icon className="h-6 w-6 text-accent" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-medium text-sm truncate">
                                                            {skill.name}
                                                        </h4>
                                                        <p className="text-xs text-muted-foreground">
                                                            {skill.level}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Hover Effect */}
                                                <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-accent-alt/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Skills Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-16"
                >
                    <Card className="glass-surface">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-medium mb-6 text-center">
                                Always Learning
                            </h3>
                            <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto font-light">
                                Specializing in AI-powered applications and
                                full-stack development. Always exploring new
                                technologies to deliver innovative solutions.
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {[
                                    "AI Interviewer Chatbots",
                                    "Inventory Management",
                                    "Asset Tracking Systems",
                                    "Performance Optimization",
                                    "CI/CD Pipelines",
                                    "Real-time Applications",
                                ].map((topic) => (
                                    <Badge
                                        key={topic}
                                        variant="outline"
                                        className="px-4 py-2 rounded-full"
                                    >
                                        {topic}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
