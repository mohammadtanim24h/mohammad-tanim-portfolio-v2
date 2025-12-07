import Link from "next/link";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-16 md:py-24 lg:py-32 bg-background"
        >
            <div className="container px-4 md:px-6">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground text-base md:text-lg">
                        A showcase of my recent work and personal projects
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col"
                        >
                            {/* Project Image */}
                            <CardHeader className="p-0">
                                <div className="relative w-full h-48 md:h-56 overflow-hidden bg-muted">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </CardHeader>

                            {/* Project Content */}
                            <CardContent className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm md:text-base mb-4 line-clamp-3 flex-1">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack
                                        .slice(0, 3)
                                        .map((tech, index) => (
                                            <Badge
                                                key={index}
                                                variant="secondary"
                                                className="text-xs"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    {project.techStack.length > 3 && (
                                        <Badge
                                            variant="outline"
                                            className="text-xs"
                                        >
                                            +{project.techStack.length - 3} more
                                        </Badge>
                                    )}
                                </div>
                            </CardContent>

                            {/* Project Footer */}
                            <CardFooter className="p-6 pt-0">
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="w-full"
                                >
                                    <Button
                                        className="w-full group/btn"
                                        variant="default"
                                    >
                                        View Details
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
