import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/Footer";
import "./globals.css";
import NavbarV2 from "@/components/NavbarV2";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Mohammad Tanim - Full Stack Developer",
    description:
        "Passionate full-stack developer crafting beautiful, scalable web experiences with modern technologies.",
    openGraph: {
        title: "Mohammad Tanim - Full Stack Developer",
        description:
            "Passionate full-stack developer crafting beautiful, scalable web experiences with modern technologies.",
        type: "website",
        locale: "en_US",
        url: "https://mohammadtanim.vercel.app",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mohammad Tanim - Full Stack Developer",
        description:
            "Passionate full-stack developer crafting beautiful, scalable web experiences with modern technologies.",
    },
    keywords: [
        "Full Stack Developer",
        "Web Developer",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Portfolio",
        "Bangladesh",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="min-h-screen bg-background text-foreground">
                        <NavbarV2 />
                        <main className="mx-auto max-w-7xl mt-6">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
