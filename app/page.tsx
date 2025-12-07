export default function Home() {
    return (
        <main>
            {/* Home Section */}
            <section
                id="home"
                className="flex min-h-screen items-center justify-center bg-background"
            >
                <div className="container px-4 text-center md:px-6">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        Mohammad Tanim
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
                        Full Stack Developer
                    </p>
                    <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
                        Building modern web applications with Next.js, React,
                        TypeScript, and Node.js
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="flex min-h-screen items-center justify-center bg-muted/30"
            >
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        About Me
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Your about section content goes here...
                    </p>
                </div>
            </section>

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
            <section
                id="experience"
                className="flex min-h-screen items-center justify-center bg-muted/30"
            >
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Experience
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Your experience section content goes here...
                    </p>
                </div>
            </section>

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
