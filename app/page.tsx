import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";

export default function Home() {
    return (
        <main className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <Hero />

            {/* About Me Section */}
            <AboutMe />

            {/* Skills Section */}
            <section
                id="skills"
                className="flex min-h-screen items-center justify-center bg-background"
            >
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Skills
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Your skills section content goes here...
                    </p>
                </div>
            </section>

            {/* Experience Section */}
            <Experience />

            {/* Projects Section */}
            <section
                id="projects"
                className="flex min-h-screen items-center justify-center bg-background"
            >
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Projects
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Your projects section content goes here...
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="flex min-h-screen items-center justify-center bg-muted/30"
            >
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Contact
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Your contact section content goes here...
                    </p>
                </div>
            </section>
        </main>
    );
}
