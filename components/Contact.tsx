import { Mail, Phone, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
    const contactMethods = [
        {
            icon: Mail,
            label: "Email",
            value: "your.email@example.com",
            href: "mailto:your.email@example.com",
            description: "Send me an email",
            color: "text-blue-500",
            bgColor: "bg-blue-500/10 hover:bg-blue-500/20",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+1 (234) 567-8900",
            href: "tel:+12345678900",
            description: "Give me a call",
            color: "text-green-500",
            bgColor: "bg-green-500/10 hover:bg-green-500/20",
        },
        {
            icon: MessageCircle,
            label: "WhatsApp",
            value: "+1 (234) 567-8900",
            href: "https://wa.me/12345678900",
            description: "Chat on WhatsApp",
            color: "text-emerald-500",
            bgColor: "bg-emerald-500/10 hover:bg-emerald-500/20",
        },
    ];

    return (
        <section id="contact" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free
                        to reach out through any of these channels.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {contactMethods.map((method) => {
                        const Icon = method.icon;
                        return (
                            <a
                                key={method.label}
                                href={method.href}
                                target={
                                    method.label === "WhatsApp"
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    method.label === "WhatsApp"
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className="group"
                            >
                                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer border-2 hover:border-primary/50">
                                    <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                                        <div
                                            className={`${method.bgColor} p-4 rounded-full transition-all duration-300 group-hover:scale-110`}
                                        >
                                            <Icon
                                                className={`w-8 h-8 ${method.color}`}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-xl mb-2">
                                                {method.label}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-2">
                                                {method.description}
                                            </p>
                                            <p
                                                className={`font-medium ${method.color} break-all`}
                                            >
                                                {method.value}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
