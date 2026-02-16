"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "./SectionContainer";

export const AboutMeSection = () => {
    return (
        <SectionContainer id="about" title="ABOUT">
            <div className="max-w-4xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-black leading-tight mb-12 tracking-tighter"
                >
                    I am a relentless learner who thrives at the intersection of <span className="text-accent underline decoration-4">Full Stack Development</span>, <span className="italic">Data Analysis</span>, and <span className="text-accent">Data Engineering</span>.
                </motion.p>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold uppercase tracking-widest border-l-4 border-accent pl-4">Lifelong Curiosity</h3>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            My journey in technology is driven by a profound curiosity that extends far beyond the lecture hall or the office. I am constantly exploring the latest breakthroughs in AI and cloud architecture, often spending my free time building side projects that challenge my understanding of scalable systems.
                        </p>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            For me, code is more than just a tool for building applications—it's a medium for solving complex puzzles and automating the mundane. I take pride in writing maintainable, clean code that stands the test of time, always seeking the most elegant solution to every problem.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold uppercase tracking-widest border-l-4 border-accent pl-4">Professional Focus</h3>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Currently based at Monash University, I specialize in architecting intelligent full-stack applications that leverage robust data pipelines. I am particularly interested in how AI can be integrated into everyday workflows to drive efficiency and actionable insights.
                        </p>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            I am a strong advocate for automation; in fact, I often joke that I am 'efficiently lazy'. If a task can be automated, I will find a way to do it, allowing me to focus my energy on high-level strategic engineering and creative problem-solving.
                        </p>
                    </motion.div>
                </div>
            </div>
        </SectionContainer>
    );
};
