"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "./SectionContainer";
import { ReactNode } from "react";

interface SkillCategory {
    name: string;
    skills: string[];
    icon?: string;
}

const skillCategories: SkillCategory[] = [
    { name: "Languages", skills: ["JavaScript", "Python", "Java", "SQL", "TypeScript", "Kotlin"] },
    { name: "Frameworks & Tools", skills: ["React.js", "Next.js", "Node.js", "Express.js", "Angular", "MongoDB", "Firebase", "GCP", "Azure"] },
    { name: "Data & ML", skills: ["Snowflake", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Scikit-learn", "TensorFlow", "PyTorch", "Optuna"] },
    { name: "Other", skills: ["Web Scraping", "Full-stack Dev", "Data Analysis", "UAT Testing", "Looker", "LLM Scripting"] }
];

const DigitalCurrents = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 1.5
                }}
                className="absolute h-px bg-foreground w-full top-[10%] opacity-50"
                style={{ top: `${15 + i * 15}%` }}
            />
        ))}
    </div>
);

const BentoTile = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className={`bg-background border-2 border-foreground/10 p-8 hover:border-foreground/40 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] ${className}`}
    >
        {children}
    </motion.div>
);

export const SkillsSection = () => {
    return (
        <SectionContainer id="skills" title="SKILLS" className="relative">
            <DigitalCurrents />

            <div className="relative z-10">
                <div className="mb-16">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4"
                    >
                        Technical <br /> <span className="text-accent italic">Arsenal</span>
                    </motion.h3>
                    <div className="h-2 w-32 bg-foreground" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((cat, idx) => (
                        <BentoTile key={cat.name} className={idx % 2 === 0 ? "lg:mt-8" : ""}>
                            <h4 className="text-2xl font-black mb-6 border-b-4 border-foreground inline-block uppercase italic">
                                {cat.name}
                            </h4>
                            <ul className="space-y-3">
                                {cat.skills.map(skill => (
                                    <li key={skill} className="text-lg font-bold text-foreground/60 hover:text-foreground transition-colors flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </BentoTile>
                    ))}

                    {/* Soft Skills Tile */}
                    <BentoTile className="lg:col-span-2 bg-foreground text-background">
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <h4 className="text-3xl font-black uppercase mb-4 leading-none text-accent">
                                    Soft <br /> <span className="text-background/50 italic">Dynamics</span>
                                </h4>
                                <div className="space-y-2 text-background/90 text-lg leading-relaxed font-medium">
                                    <p>• Proactive Teamwork (Always asking if others need help)</p>
                                    <p>• Eager to Learn & Explore on my own</p>
                                    <p>• "Efficiently Lazy" (High-ROI Automation focus)</p>
                                    <p>• Proactively seeking to add value & take on new challenges</p>
                                    <p>• Creativity driven by curiosity</p>
                                </div>
                            </div>
                            <div className="mt-8 flex gap-2 overflow-hidden">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [10, 30, 10] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                        className="w-1 bg-background/30 rounded-full"
                                    />
                                ))}
                            </div>
                        </div>
                    </BentoTile>

                    <BentoTile className="lg:col-span-2 flex flex-col justify-center group overflow-hidden relative">
                        <div className="relative z-10">
                            <span className="text-sm font-black uppercase tracking-[0.5em] text-accent opacity-60 group-hover:opacity-100 transition-opacity">Design Philosophy</span>
                            <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-2 mb-4">
                                Maintainable <br /> & Extendable
                            </h4>
                            <p className="text-lg text-foreground/70 font-medium leading-relaxed max-w-md">
                                I desire to write good code that isn't just functional, but built to last—easily extendable, clean, and highly maintainable for long-term scalability.
                            </p>
                        </div>
                        {/* Minimalist Graphic Element */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -right-20 -bottom-20 w-64 h-64 border-2 border-foreground/5 rounded-full pointer-events-none group-hover:border-accent/20 transition-colors"
                        />
                    </BentoTile>
                </div>
            </div>
        </SectionContainer>
    );
};
