"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const socialLinks = [
    {
        icon: Github,
        href: "https://github.com/mohammadtanim",
        label: "GitHub",
    },
    {
        icon: Linkedin,
        href: "https://linkedin.com/in/mohammadtanim",
        label: "LinkedIn",
    },
    {
        icon: Twitter,
        href: "https://twitter.com/mohammadtanim",
        label: "Twitter",
    },
];

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <Link
                            href="/"
                            className="text-2xl font-light mb-4 block"
                        >
                            MT
                        </Link>
                        <p className="text-sm text-muted-foreground font-light max-w-xs">
                            Crafting digital experiences with passion and
                            precision.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h3 className="font-medium mb-4">Quick Links</h3>
                        <nav className="space-y-2">
                            {[
                                { href: "#about", label: "About" },
                                { href: "#projects", label: "Projects" },
                                { href: "#contact", label: "Contact" },
                            ].map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Social */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h3 className="font-medium mb-4">Connect</h3>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <Button
                                    key={social.label}
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full hover-lift"
                                    asChild
                                >
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="h-4 w-4" />
                                    </a>
                                </Button>
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
                    className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4"
                >
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Mohammad Tanim. All rights
                        reserved.
                    </p>

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={scrollToTop}
                        className="rounded-full hover-lift"
                    >
                        <ArrowUp className="h-4 w-4 mr-2" />
                        Back to Top
                    </Button>
                </motion.div>
            </div>
        </footer>
    );
}
