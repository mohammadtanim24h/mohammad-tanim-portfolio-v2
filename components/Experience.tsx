import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string[];
    technologies: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: "Senior Full Stack Developer",
        company: "Tech Innovations Inc.",
        period: "Jan 2023 - Present",
        location: "Remote",
        description: [
            "Led development of a microservices-based e-commerce platform serving 100K+ daily users",
            "Architected and implemented scalable REST APIs using Node.js and PostgreSQL",
            "Improved application performance by 40% through code optimization and caching strategies",
            "Mentored junior developers and conducted code reviews to maintain high code quality",
        ],
        technologies: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "AWS",
            "Docker",
        ],
    },
    {
        title: "Full Stack Developer",
        company: "Digital Solutions Ltd.",
        period: "Mar 2021 - Dec 2022",
        location: "Hybrid",
        description: [
            "Developed and maintained multiple client-facing web applications using React and Express",
            "Implemented real-time features using WebSockets for collaborative tools",
            "Collaborated with UX/UI designers to create intuitive and responsive interfaces",
            "Reduced API response times by 30% through database query optimization",
        ],
        technologies: [
            "React",
            "Express.js",
            "MongoDB",
            "Redis",
            "Tailwind CSS",
        ],
    },
    {
        title: "Frontend Developer",
        company: "StartUp Ventures",
        period: "Jun 2019 - Feb 2021",
        location: "On-site",
        description: [
            "Built responsive web applications from Figma designs using React and Vue.js",
            "Implemented state management solutions with Redux and Vuex",
            "Worked closely with backend teams to integrate RESTful APIs",
            "Participated in agile ceremonies and contributed to sprint planning",
        ],
        technologies: ["React", "Vue.js", "JavaScript", "SASS", "Git"],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-16 md:py-24 lg:py-32 bg-background"
        >
            <div className="container px-4 md:px-6">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        Professional Experience
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>

                {/* Timeline Container */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Vertical Line - Hidden on mobile */}
                        <div className="hidden md:block absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

                        {/* Experience Items */}
                        <div className="space-y-8 md:space-y-12">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative">
                                    {/* Timeline Dot - Hidden on mobile */}
                                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                                    {/* Card - Alternating sides on desktop, stacked on mobile */}
                                    <div
                                        className={`md:w-[calc(50%-2rem)] ${
                                            index % 2 === 0
                                                ? "md:ml-auto md:pl-8"
                                                : "md:mr-auto md:pr-8"
                                        }`}
                                    >
                                        <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
                                            <CardHeader>
                                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                                    <CardTitle className="text-xl md:text-2xl">
                                                        {exp.title}
                                                    </CardTitle>
                                                    <Badge
                                                        variant="secondary"
                                                        className="w-fit text-xs md:text-sm"
                                                    >
                                                        {exp.period}
                                                    </Badge>
                                                </div>
                                                <div className="space-y-1 text-sm md:text-base text-muted-foreground">
                                                    <p className="font-semibold text-foreground">
                                                        {exp.company}
                                                    </p>
                                                    <p className="text-xs md:text-sm">
                                                        {exp.location}
                                                    </p>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                {/* Description */}
                                                <ul className="space-y-2 mb-4 text-sm md:text-base text-muted-foreground">
                                                    {exp.description.map(
                                                        (item, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="flex gap-2"
                                                            >
                                                                <span className="text-primary mt-1.5 shrink-0">
                                                                    •
                                                                </span>
                                                                <span>
                                                                    {item}
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>

                                                {/* Technologies */}
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map(
                                                        (tech, idx) => (
                                                            <Badge
                                                                key={idx}
                                                                variant="outline"
                                                                className="text-xs"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        )
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
