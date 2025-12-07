"use client";

import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn, cardHover } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Code, Award, Target } from "lucide-react";

const highlights = [
    {
        icon: Code,
        title: "Clean Code",
        description:
            "Writing maintainable, scalable, and efficient code with best practices",
    },
    {
        icon: Award,
        title: "Problem Solver",
        description: "Turning complex challenges into elegant solutions",
    },
    {
        icon: Target,
        title: "Goal Oriented",
        description:
            "Focused on delivering high-quality products that meet business needs",
    },
];

export function AboutMe() {
    return (
        <section id="about" className="py-24 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-6">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-alt mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerChildren}
                        className="space-y-6"
                    >
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed"
                        >
                            I'm a passionate full-stack developer with a keen
                            eye for design and a love for creating seamless user
                            experiences. With expertise in modern web
                            technologies, I transform ideas into powerful
                            digital solutions.
                        </motion.p>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed"
                        >
                            My journey in web development has been driven by
                            curiosity and a constant desire to learn. I enjoy
                            tackling complex problems and staying up-to-date
                            with the latest industry trends and best practices.
                        </motion.p>

                        {/* Key Info */}
                        <motion.div
                            variants={fadeInUp}
                            className="grid grid-cols-2 gap-4 pt-4"
                        >
                            {[
                                { label: "Location", value: "Bangladesh" },
                                { label: "Experience", value: "2+ Years" },
                                { label: "Status", value: "Available" },
                                { label: "Remote", value: "Open" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="glass-surface rounded-xl p-4"
                                >
                                    <div className="text-sm text-muted-foreground">
                                        {item.label}
                                    </div>
                                    <div className="font-medium">
                                        {item.value}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Highlights */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerChildren}
                        className="space-y-4"
                    >
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={highlight.title}
                                variants={cardHover}
                                whileHover="hover"
                                initial="rest"
                                className="glass-surface rounded-2xl p-6 hover-lift cursor-default"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-accent/10 to-accent-alt/10">
                                        <highlight.icon className="h-6 w-6 text-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-medium mb-2">
                                            {highlight.title}
                                        </h3>
                                        <p className="text-muted-foreground font-light">
                                            {highlight.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Technologies Preview */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl font-extralight mb-6">
                        Technologies I Work With
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {[
                            "React",
                            "Next.js",
                            "TypeScript",
                            "Node.js",
                            "Python",
                            "Tailwind CSS",
                            "PostgreSQL",
                            "MongoDB",
                            "Docker",
                            "AWS",
                        ].map((tech) => (
                            <Badge
                                key={tech}
                                variant="secondary"
                                className="px-4 py-2 rounded-full text-sm font-medium"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};
