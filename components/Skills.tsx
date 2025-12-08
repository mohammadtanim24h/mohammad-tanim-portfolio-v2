"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, fadeInUp, staggerChildren } from "@/lib/motion";
import { skillsData } from "@/lib/data";
import { Monitor, Server, Database, Wrench, Brain } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend",
        icon: Monitor,
        skills: skillsData.frontend,
    },
    {
        title: "Backend",
        icon: Server,
        skills: skillsData.backend,
    },
    {
        title: "Database",
        icon: Database,
        skills: skillsData.database,
    },
    {
        title: "DevOps & Tools",
        icon: Wrench,
        skills: skillsData.tools,
    },
    {
        title: "AI & LLMs",
        icon: Brain,
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

                {/* Row-based layout for each category */}
                <div className="space-y-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="space-y-6"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3">
                                <category.icon className="h-8 w-8 text-accent" />
                                <h3 className="text-2xl font-medium">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills Row - Horizontal scroll on mobile, wrap on desktop */}
                            <div className="flex justify-center md:justify-start flex-wrap gap-4">
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
                                        className="shrink-0"
                                    >
                                        <Card className="group relative overflow-hidden glass-surface cursor-default w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
                                            <CardContent className="p-0 h-full flex items-center justify-center">
                                                <div className="flex flex-col items-center justify-center gap-3">
                                                    {/* Large Icon */}
                                                    <skill.icon className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-accent" />
                                                    {/* Skill Name - Only visible on hover or larger screens */}
                                                    <p className="text-sm font-medium text-center px-2">
                                                        {skill.name}
                                                    </p>
                                                </div>

                                                {/* Hover Effect */}
                                                {/* <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-accent-alt/5" /> */}
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
