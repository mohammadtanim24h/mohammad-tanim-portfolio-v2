"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
    fadeIn,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    floatAnimation,
} from "@/lib/motion";

export function Hero() {
    const { scrollY } = useScroll();
    const { theme } = useTheme();

    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-accent-alt/5" />
                <motion.div
                    style={{ y, opacity }}
                    className="absolute -top-40 -right-40 h-80 w-80 max-w-[300px] rounded-full bg-accent/10 blur-3xl"
                />
                <motion.div
                    style={{
                        y: useTransform(scrollY, [0, 500], [0, -100]),
                        opacity,
                    }}
                    className="absolute -bottom-40 -left-40 h-80 w-80 max-w-[300px] rounded-full bg-accent-alt/10 blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerChildren}
                        className="text-center lg:text-left"
                    >
                        <motion.h1 variants={fadeInUp} className="mb-6">
                            <span className="block text-4xl md:text-6xl font-extralight tracking-tight">
                                Hi, I'm{" "}
                            </span>
                            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light gradient-text mt-2 break-words">
                                Mohammad Tanim
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 font-light"
                        >
                            Full-stack developer crafting beautiful, scalable
                            web experiences with modern technologies
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button
                                size="lg"
                                className="rounded-full shadow-medium hover-lift"
                                onClick={() =>
                                    document
                                        .getElementById("projects")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                View Projects
                                <ArrowDown className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full hover-lift"
                            >
                                Download CV
                                <Download className="ml-2 h-4 w-4" />
                            </Button>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="flex gap-6 mt-12 justify-center lg:justify-start"
                        >
                            {[
                                { label: "2+", value: "Years Experience" },
                                { label: "20+", value: "Projects Completed" },
                                { label: "5+", value: "Technologies" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    variants={fadeInUp}
                                    className="text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-light gradient-text">
                                        {stat.label}
                                    </div>
                                    <div className="text-sm text-muted-foreground font-light">
                                        {stat.value}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={floatAnimation}
                        className="relative mx-auto lg:ml-auto"
                    >
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                            {/* Glow Effect */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-accent-alt/20 blur-xl"
                            />

                            {/* Image Container */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    rotate: [0, 1, -1, 0],
                                    transition: { duration: 0.5 },
                                }}
                                className="relative rounded-3xl overflow-hidden shadow-xlarge glass-surface p-1"
                            >
                                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent/5 to-accent-alt/5">
                                    <Image
                                        src="/hero-photo.png"
                                        alt="Mohammad Tanim"
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute -top-4 -right-4 w-20 h-20"
                            >
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-sm" />
                            </motion.div>

                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute -bottom-4 -left-4 w-16 h-16"
                            >
                                <div className="w-full h-full rounded-full bg-gradient-to-tr from-accent-alt/20 to-transparent blur-sm" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 1 },
                    }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <ArrowDown className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
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
