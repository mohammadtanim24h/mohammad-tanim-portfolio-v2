"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, fadeInUp, staggerChildren } from "@/lib/motion";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const contactMethods = [
    {
        icon: Mail,
        label: "Email",
        value: "mohammadtanim@example.com",
        href: "mailto:mohammadtanim@example.com",
        description: "Send me a message anytime",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+880 1234-567890",
        href: "tel:+8801234567890",
        description: "Available for calls",
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "+880 1234-567890",
        href: "https://wa.me/8801234567890",
        description: "Quick chat support",
    },
];

export function Contact() {
    return (
        <section id="contact" className="py-24 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-6">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-alt mx-auto rounded-full" />
                </motion.div>

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
                                        <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-accent/10 to-accent-alt/10 flex items-center justify-center mb-4">
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
                                            <a href={method.href}>
                                                {method.value}
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Contact Form / Message */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <Card className="glass-surface">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-medium mb-4 text-center">
                                    Let's Work Together
                                </h3>
                                <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto font-light">
                                    I'm always interested in hearing about new
                                    projects and opportunities. Whether you have
                                    a question or just want to say hi, feel free
                                    to reach out!
                                </p>

                                <div className="text-center">
                                    <Button
                                        size="lg"
                                        className="rounded-full px-8"
                                        asChild
                                    >
                                        <a href="mailto:mohammadtanim@example.com">
                                            <Mail className="mr-2 h-4 w-4" />
                                            Send Me an Email
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Location Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mt-12 text-center"
                    >
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>
                                Based in Bangladesh, Available for Remote Work
                                Worldwide
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
