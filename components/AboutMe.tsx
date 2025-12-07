export default function AboutMe() {
    return (
        <section id="about" className="py-16 md:py-24 lg:py-32 bg-muted/30">
            <div className="container px-4 md:px-6">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>

                {/* Content Grid */}
                <div className="space-y-12 md:space-y-16">
                    {/* My Journey */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                            My Journey
                        </h3>
                        <div className="text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                My journey into web development began with a
                                curiosity about how things work on the internet.
                                What started as tinkering with HTML and CSS
                                quickly evolved into a deep passion for building
                                full-stack applications that make a real
                                difference.
                            </p>
                            <p>
                                Over the years, I've had the privilege of
                                working on diverse projects—from e-commerce
                                platforms to complex enterprise solutions. Each
                                project taught me something new, whether it was
                                mastering a cutting-edge framework, optimizing
                                performance, or collaborating with talented
                                teams to deliver exceptional results.
                            </p>
                            <p>
                                Today, I specialize in modern web technologies
                                like Next.js, React, TypeScript, and Node.js.
                                I'm committed to writing clean, maintainable
                                code and creating seamless user experiences that
                                users love.
                            </p>
                        </div>
                    </div>

                    {/* What I Enjoy */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                            What I Enjoy
                        </h3>
                        <div className="text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                I thrive on solving complex problems and turning
                                ideas into reality. There's something incredibly
                                satisfying about taking a concept from
                                whiteboard sketches to a fully functional,
                                polished application.
                            </p>
                            <p>
                                I'm particularly passionate about performance
                                optimization and creating intuitive user
                                interfaces. I believe that great software should
                                not only work flawlessly but also feel
                                effortless to use. Whether it's shaving
                                milliseconds off load times or crafting
                                pixel-perfect designs, I pay attention to the
                                details that matter.
                            </p>
                            <p>
                                Continuous learning is at the core of what I do.
                                The tech landscape is always evolving, and I
                                love staying up-to-date with the latest trends,
                                experimenting with new tools, and sharing
                                knowledge with the developer community.
                            </p>
                        </div>
                    </div>

                    {/* Hobbies & Personality */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                            Hobbies & Personality
                        </h3>
                        <div className="text-muted-foreground leading-relaxed space-y-4">
                            <p>
                                When I'm not coding, you'll find me exploring
                                new coffee shops, diving into a good sci-fi
                                novel, or experimenting with photography. I'm a
                                firm believer in work-life balance—taking time
                                to recharge fuels creativity and productivity.
                            </p>
                            <p>
                                I'm naturally curious and love learning about
                                topics beyond tech, from psychology to design
                                principles. I find that these diverse interests
                                often inform my approach to development, helping
                                me build products that are not only technically
                                sound but also human-centered.
                            </p>
                            <p>
                                At my core, I'm a problem solver and a team
                                player. I value open communication,
                                collaboration, and always strive to bring a
                                positive, solution-oriented mindset to every
                                project I work on.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
