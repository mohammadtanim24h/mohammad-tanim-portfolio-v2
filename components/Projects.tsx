"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, fadeInUp, staggerChildren } from "@/lib/motion";
import { projectsData } from "@/lib/data";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Projects() {
    return (
        <section id="projects" className="py-24 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-6">
                        Featured <span className="gradient-text">Projects</span>
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
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={fadeInUp}
                            className="group"
                        >
                            <Card className="glass-surface overflow-hidden hover-lift h-full flex flex-col">
                                {/* Project Image */}
                                <div className="relative overflow-hidden">
                                    <div className="aspect-video relative bg-linear-to-br from-accent/5 to-accent-alt/5">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Overlay Links */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
                                    >
                                        {project.demoLink && (
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                                asChild
                                                className="rounded-full"
                                            >
                                                <Link
                                                    href={project.demoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                        )}
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            asChild
                                            className="rounded-full"
                                        >
                                            <Link
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </motion.div>
                                </div>

                                <CardContent className="p-6 flex-1 flex flex-col">
                                    <div className="flex-1">
                                        <Link
                                            href={`/projects/${project.slug}`}
                                        >
                                            <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                                                {project.title}
                                            </h3>
                                        </Link>
                                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack
                                            .slice(0, 3)
                                            .map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="secondary"
                                                    className="text-xs font-normal"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        {project.techStack.length > 3 && (
                                            <Badge
                                                variant="outline"
                                                className="text-xs font-normal"
                                            >
                                                +{project.techStack.length - 3}
                                            </Badge>
                                        )}
                                    </div>

                                    {/* View Details Button */}
                                    <Button
                                        variant="ghost"
                                        className="w-full group/btn justify-between"
                                        asChild
                                    >
                                        <Link
                                            href={`/projects/${project.slug}`}
                                        >
                                            View Details
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Projects CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mt-16"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full group"
                        asChild
                    >
                        <Link href="/projects">
                            View All Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
