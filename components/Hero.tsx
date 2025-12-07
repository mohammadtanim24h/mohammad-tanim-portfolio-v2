import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-background"
        >
            <div className="container px-4 md:px-6 py-2 md:py-6">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Text Content - Left Side */}
                    <div className="flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
                        {/* Greeting */}
                        <div className="space-y-2">
                            <p className="text-lg md:text-xl text-muted-foreground font-medium">
                                Hi, I'm Mohammad Tanim
                            </p>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                Full Stack Web Developer
                            </h1>
                        </div>

                        {/* Brief Intro */}
                        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
                            Passionate about creating elegant, scalable
                            solutions that solve real-world problems.
                            Specializing in modern web technologies and
                            delivering exceptional user experiences.
                        </p>

                        {/* Resume Button */}
                        <div className="flex justify-center lg:justify-start">
                            <Button
                                asChild
                                size="lg"
                                className="text-base font-semibold px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Link href="/resume.pdf">Download Resume</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Image - Right Side */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <div className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-square">
                            {/* Decorative Background */}
                            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"></div>

                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary/10 shadow-2xl">
                                <Image
                                    src="/hero-photo.png"
                                    alt="Mohammad Tanim - Full Stack Web Developer"
                                    fill
                                    priority={true}
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                                />
                            </div>

                            {/* Decorative Accent */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
