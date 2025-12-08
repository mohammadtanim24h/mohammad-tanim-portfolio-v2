"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useTheme } from "next-themes";
import { ArrowDown, Download, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
    fadeIn,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    floatAnimation,
} from "@/lib/motion";
import ProfileCard from "./ProfileCard";

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
                <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-background to-accent-alt/5" />
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
                            <span className="block text-4xl md:text-6xl font-semibold tracking-tight">
                                Hi, I'm{" "}
                            </span>
                            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold gradient-text mt-2 wrap-break-word">
                                Mohammad Tanim
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 font-semibold"
                        >
                            Full-Stack Developer | AI Integration | Tech
                            Enthusiast
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
                                onClick={() =>
                                    window.open("/resume.pdf", "_blank")
                                }
                            >
                                Download CV
                                <Download className="ml-2 h-4 w-4" />
                            </Button>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="mt-8"
                        >
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>
                                    Based in Bangladesh, Available for Remote
                                    Work Worldwide
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="flex items-center justify-center"
                    >
                        <ProfileCard
                            name=""
                            title=""
                            avatarUrl="/hero-photo.png"
                            showUserInfo={false}
                            enableTilt={true}
                            behindGlowEnabled={false}
                            enableMobileTilt={true}
                        />
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
