"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, fadeInUp, staggerChildren } from "@/lib/motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const educationData = [
    {
        degree: "Bachelor of Business Administration - BBA",
        field: "Accounting",
        institution: "National University",
        period: "2022 - 2026 (Expected)",
        location: "Bangladesh",
        description: [
            "Focused on business administration with specialization in Accounting",
            "Developing strong analytical and financial management skills",
            "Applying business principles to software development and project management",
        ],
    },
];

export function Education() {
    return (
        <section id="education" className="py-24 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-6">
                        <span className="gradient-text">Education</span>
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-accent to-accent-alt mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerChildren}
                    className="max-w-4xl mx-auto"
                >
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="mb-8"
                        >
                            <Card className="glass-surface hover-lift">
                                <CardContent className="p-8">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-xl bg-linear-to-br from-accent/10 to-accent-alt/10">
                                                <GraduationCap className="h-6 w-6 text-accent" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-medium mb-2">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-lg text-muted-foreground font-light">
                                                    {edu.field}
                                                </p>
                                                <p className="text-lg text-muted-foreground font-light">
                                                    {edu.institution}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 text-sm">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4 text-accent" />
                                                <span>{edu.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <BookOpen className="h-4 w-4 text-accent" />
                                                <span>{edu.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        {edu.description.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex gap-2"
                                            >
                                                <span className="text-accent mt-1.5 shrink-0">
                                                    •
                                                </span>
                                                <p className="text-muted-foreground font-light">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
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
