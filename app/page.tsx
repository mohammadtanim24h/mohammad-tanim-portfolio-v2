import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <main className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <Hero />

            {/* About Me Section */}
            <AboutMe />

            {/* Skills Section */}
            <Skills />

            {/* Experience Section */}
            <Experience />

            {/* Projects Section */}
            <Projects />

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
