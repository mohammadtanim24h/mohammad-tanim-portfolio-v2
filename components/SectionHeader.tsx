"use client";

import { motion } from "motion/react";
import { fadeIn } from "@/lib/motion";
import { AuroraText } from "./AuroraText";

export default function SectionHeader({ title }: { title: string }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
        >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
                <AuroraText
                    speed={1}
                    colors={["#38BDF8", "#3B82F6", "#EC4899"]}
                >
                    {title}
                </AuroraText>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-accent to-accent-alt mx-auto rounded-full" />
        </motion.div>
    );
}
