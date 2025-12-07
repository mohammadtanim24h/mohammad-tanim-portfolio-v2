import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com/yourusername",
            label: "GitHub",
        },
        {
            icon: Linkedin,
            href: "https://linkedin.com/in/yourusername",
            label: "LinkedIn",
        },
        {
            icon: Twitter,
            href: "https://twitter.com/yourusername",
            label: "Twitter",
        },
        {
            icon: Mail,
            href: "mailto:your.email@example.com",
            label: "Email",
        },
    ];

    return (
        <footer className="border-t bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Mohammad Tanim. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Optional: Back to top */}
                <div className="mt-6 text-center">
                    <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                        Back to top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
}
