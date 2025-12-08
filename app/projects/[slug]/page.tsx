import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";

// Generate static params for all projects at build time
export async function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }));
}

// Generate metadata for each project page
export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    const project = projectsData.find((p) => p.slug === params.slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | Mohammad Tanim Portfolio`,
        description: project.description,
    };
}

export default async function ProjectPage({
    params,
}: {
    params: { slug: string };
}) {
    // Find the project by slug
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    // If project not found, show 404
    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            <div className="container px-4 md:px-6 py-3 md:py-6 max-w-7xl mx-auto">
                {/* Back Button */}
                {/* <Link href="/#projects">
                    <Button variant="ghost" className="mb-6 group">
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Button>
                </Link> */}

                {/* Project Header */}
                <div className="mb-8 md:mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        {project.title}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                        {project.description}
                    </p>
                </div>

                {/* Project Image */}
                <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-8 md:mb-12 shadow-2xl">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                </div>

                {/* Tech Stack & Links Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    {/* Tech Stack Card */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="text-2xl">
                                Tech Stack
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <Badge
                                        key={index}
                                        variant="secondary"
                                        className="text-sm px-4 py-2"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Links Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Links</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {project.demoLink && (
                                <Link
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        variant="outline"
                                        className="w-full group mb-2"
                                        size="lg"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                                        Demo
                                    </Button>
                                </Link>
                            )}
                            <Link
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="outline"
                                    className="w-full group"
                                    size="lg"
                                >
                                    <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                                    GitHub Repo
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>

                {/* Deep Dive Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Challenges Faced */}
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
                                <span className="text-3xl">🚀</span>
                                Challenges Faced
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                {project.challenges}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Future Improvements */}
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
                                <span className="text-3xl">💡</span>
                                Future Improvements
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                {project.improvements}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Back to Projects Link */}
                <div className="mt-12 text-center">
                    <Link href="/#projects">
                        <Button
                            variant="outline"
                            size="lg"
                            className="group cursor-pointer"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Projects
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
