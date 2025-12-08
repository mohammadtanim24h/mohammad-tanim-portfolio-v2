"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import { projectsData } from "@/lib/data";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

export function Projects() {
    return (
        <section id="projects" className="py-8 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title="Featured Projects" />

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
                            <Card className="glass-surface overflow-hidden hover-lift h-full flex flex-col transform-gpu py-0">
                                {/* Project Image */}
                                <div className="relative overflow-hidden group/image">
                                    <div className="aspect-video relative bg-linear-to-br from-accent/5 to-accent-alt/5">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                                            style={{
                                                objectPosition: "top center",
                                            }}
                                        />
                                    </div>

                                    {/* Overlay Links */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center gap-4"
                                    >
                                        {project.demoLink && (
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                                asChild
                                                className="rounded-full translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 shadow-lg"
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
                                            className="rounded-full translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 delay-75 shadow-lg"
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
                                    {/* Project Title and Description */}
                                    <div className="flex-1">
                                        <Link
                                            href={`/projects/${project.slug}`}
                                        >
                                            <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-200">
                                                {project.title}
                                            </h3>
                                        </Link>
                                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.techStack
                                            .slice(0, 4)
                                            .map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="secondary"
                                                    className="text-xs font-medium px-2.5 py-1"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        {project.techStack.length > 4 && (
                                            <Badge
                                                variant="outline"
                                                className="text-xs font-medium px-2.5 py-1"
                                            >
                                                +{project.techStack.length - 4}
                                            </Badge>
                                        )}
                                    </div>

                                    {/* View Details Button */}
                                    <div className="mt-auto">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="w-full group/btn justify-between hover:bg-accent/10 hover:text-accent transition-all duration-200"
                                            asChild
                                        >
                                            <Link
                                                href={`/projects/${project.slug}`}
                                            >
                                                View Details
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
