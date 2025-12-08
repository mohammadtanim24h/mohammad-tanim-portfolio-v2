import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Awards } from "@/components/Awards";

export default function Home() {
    return (
        <>
            <Hero />
            <AboutMe />
            <Skills />
            <Experience />
            <Projects />
            <Awards />
            <Contact />
        </>
    );
}
