"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeIn, fadeInUp, staggerChildren } from "@/lib/motion";
import { Award, Trophy, Star } from "lucide-react";

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
        date: "2023",
        details:
            "Completed hands-on training covering CI/CD fundamentals, Docker, and deployment workflows",
        type: "certification",
        icon: Award,
    },
];

export function Awards() {
    return (
        <section id="awards" className="py-24 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-6">
                        Awards and{" "}
                        <span className="gradient-text">Certificates</span>
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-accent to-accent-alt mx-auto rounded-full" />
                </motion.div>

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
                            <Card className="glass-surface hover-lift h-full">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 rounded-xl bg-linear-to-br from-accent/10 to-accent-alt/10">
                                            <award.icon className="h-6 w-6 text-accent" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-medium mb-1">
                                                {award.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground font-light">
                                                {award.organization}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-muted-foreground font-light">
                                            {award.description}
                                        </p>
                                        <p className="text-sm text-muted-foreground font-light italic">
                                            {award.details}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <Badge
                                                variant={
                                                    award.type === "award"
                                                        ? "default"
                                                        : "secondary"
                                                }
                                                className="capitalize"
                                            >
                                                {award.type}
                                            </Badge>
                                            <span className="text-sm text-muted-foreground">
                                                {award.date}
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-16 text-center"
                >
                    <Card className="glass-surface max-w-2xl mx-auto">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-medium mb-4">
                                Continuous Learning
                            </h3>
                            <p className="text-muted-foreground font-light mb-6">
                                I believe in continuous improvement and
                                regularly participate in workshops, courses, and
                                training programs to stay updated with the
                                latest technologies and best practices in
                                software development.
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {[
                                    "Full-Stack Development",
                                    "DevOps Practices",
                                    "AI/ML Integration",
                                    "Performance Optimization",
                                ].map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="outline"
                                        className="px-4 py-2 rounded-full"
                                    >
                                        {skill}
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
