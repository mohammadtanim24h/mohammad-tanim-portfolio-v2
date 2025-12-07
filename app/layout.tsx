import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Mohammad Tanim - Full Stack Developer",
    description:
        "Portfolio of Mohammad Tanim, a passionate Full Stack Developer specializing in modern web technologies including Next.js, React, TypeScript, and Node.js.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} font-sans antialiased`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
