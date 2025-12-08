"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import { Mail, Phone } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { SiLinkedin } from "react-icons/si";

const contactMethods = [
    {
        icon: Mail,
        label: "Email",
        value: "mohammad.tanim24h@gmail.com",
        href: "mailto:mohammad.tanim24h@gmail.com",
        description: "Send me a message anytime",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+880 1916602197",
        href: "tel:+8801916602197",
        description: "Available for calls",
    },
    {
        icon: SiLinkedin,
        label: "LinkedIn",
        value: "linkedin.com/in/mohammad-tanim",
        href: "https://linkedin.com/in/mohammad-tanim",
        description: "Connect professionally",
    },
];

export function Contact() {
    return (
        <section id="contact" className="py-8 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="Get In Touch" />

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerChildren}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                    >
                        {contactMethods.map((method) => (
                            <motion.div
                                key={method.label}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="glass-surface hover-lift h-full">
                                    <CardContent className="p-6 text-center">
                                        <div className="mx-auto w-12 h-12 rounded-full bg-linear-to-br from-accent/10 to-accent-alt/10 flex items-center justify-center mb-4">
                                            <method.icon className="h-6 w-6 text-accent" />
                                        </div>
                                        <h3 className="text-lg font-medium mb-1">
                                            {method.label}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            {method.description}
                                        </p>
                                        <Button
                                            variant="link"
                                            asChild
                                            className="p-0 h-auto font-normal"
                                        >
                                            {method.label === "LinkedIn" ? (
                                                <a
                                                    href={method.href}
                                                    target="_blank"
                                                >
                                                    {method.value}
                                                </a>
                                            ) : (
                                                <a href={method.href}>
                                                    {method.value}
                                                </a>
                                            )}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
