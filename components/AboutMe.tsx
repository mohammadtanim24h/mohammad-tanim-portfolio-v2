"use client";

import { motion } from "motion/react";
import { fadeInUp, cardHover } from "@/lib/motion";
import { Code, Award, Target } from "lucide-react";
import SectionHeader from "./SectionHeader";

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
                <SectionHeader title="About Me" />

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
                            I'm a results-oriented Full-Stack Developer focused
                            on creating scalable web applications for logistics,
                            AI, and enterprise fields. I have skills in React,
                            Angular, Next.js, Node.js, Django, and FastAPI. I
                            turn complex business needs into effective digital
                            solutions.
                        </motion.p>

                        {/* Key Info */}
                        <motion.div
                            variants={fadeInUp}
                            className="grid grid-cols-2 gap-4 pt-4"
                        >
                            {[
                                { label: "Location", value: "Bangladesh" },
                                { label: "Experience", value: "3.5+ Years" },
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
                                    <div className="p-3 rounded-xl bg-linear-to-br from-accent/10 to-accent-alt/10">
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
