"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeIn, fadeInUp, staggerChildren } from "@/lib/motion";
import { Award, Trophy, Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

const awardsData = [
    {
        title: "Black Belt Award",
        organization: "Programming Hero",
        description: "Complete Web Development Course",
        date: "2022",
        details:
            "Recognized for outstanding performance and project excellence in full-stack web development",
        type: "award",
        icon: Trophy,
    },
    {
        title: "Employee of the Month",
        organization: "ShujaBITS Infotech Solutions Private Limited",
        description: "Consistent performance and teamwork",
        date: "2023",
        details:
            "Awarded for consistent performance, teamwork, and contributions to client projects",
        type: "award",
        icon: Star,
    },
    {
        title: "DevOps Workshop",
        organization: "Ostad",
        description: "Hands-on training completion",
        date: "2025",
        details:
            "Completed hands-on training covering CI/CD fundamentals, Docker, and deployment workflows",
        type: "certification",
        icon: Award,
    },
];

export function Awards() {
    return (
        <section id="awards" className="py-8 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="Awards & Certificates" />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerChildren}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {awardsData.map((award, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="glass-surface hover-lift h-full transform-gpu">
                                <CardContent className="p-6 flex flex-col h-full">
                                    {/* Icon and Header */}
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="p-3 rounded-xl bg-linear-to-br from-accent/10 to-accent-alt/10 shrink-0">
                                            <award.icon className="h-6 w-6 text-accent" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-semibold mb-1 leading-tight">
                                                {award.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {award.organization}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Description Section */}
                                    <div className="flex-1 flex flex-col justify-between space-y-4">
                                        <div className="space-y-3">
                                            <p className="text-base text-muted-foreground leading-relaxed">
                                                {award.description}
                                            </p>
                                            <p className="text-sm text-muted-foreground/80 leading-relaxed">
                                                {award.details}
                                            </p>
                                        </div>

                                        {/* Footer with Badge and Date */}
                                        <div className="flex items-center justify-between pt-2">
                                            <Badge
                                                variant={
                                                    award.type === "award"
                                                        ? "default"
                                                        : "secondary"
                                                }
                                                className="capitalize text-xs font-medium px-2.5 py-1"
                                            >
                                                {award.type}
                                            </Badge>
                                            <time className="text-xs text-muted-foreground font-medium">
                                                {award.date}
                                            </time>
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
