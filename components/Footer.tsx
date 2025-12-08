"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const contactMethods = [
    {
        icon: SiLinkedin,
        href: "https://linkedin.com/in/mohammad-tanim",
        label: "LinkedIn",
    },
    {
        icon: SiGithub,
        href: "https://github.com/mohammadtanim24h",
        label: "GitHub",
    },
    {
        icon: SiX,
        href: "https://x.com/MohammadTanim10",
        label: "X",
    },
];

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-border/50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
                    {/* Brand */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="shrink-0"
                    >
                        <Link href="/" className="group inline-block">
                            <span className="text-4xl font-thin tracking-[0.15em] text-foreground group-hover:text-accent transition-colors duration-300">
                                TANIM
                            </span>
                            <span className="block h-0.5 w-0 group-hover:w-full bg-linear-to-r from-accent to-accent-alt transition-all duration-500 mt-1"></span>
                        </Link>
                    </motion.div>

                    {/* Contact Info - Horizontal Layout */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="flex-1 lg:flex-none lg:w-auto flex items-center justify-start lg:justify-end mt-0 lg:mt-0"
                    >
                        <div className="flex flex-wrap gap-4">
                            {contactMethods.map((method) => (
                                <a
                                    key={method.label}
                                    href={method.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent/5 transition-all duration-200"
                                >
                                    <div className="p-1.5 rounded-md bg-linear-to-br from-accent/10 to-accent-alt/10 group-hover:from-accent/20 group-hover:to-accent-alt/20 transition-all duration-200">
                                        <method.icon className="h-4 w-4 text-accent" />
                                    </div>
                                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                        {method.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-3"
                >
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Mohammad Tanim. All rights
                        reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={scrollToTop}
                            className="rounded-full hover:bg-accent/10 hover:text-accent transition-all duration-200 text-xs h-8 px-3 cursor-pointer"
                        >
                            <ArrowUp className="h-3 w-3 mr-1.5" />
                            Back to Top
                        </Button>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
