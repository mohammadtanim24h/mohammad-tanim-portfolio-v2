import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
            <Contact />

            {/* Footer Section */}
            <Footer />
        </main>
    );
}
