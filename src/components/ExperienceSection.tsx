"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "./SectionContainer";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export const ExperienceSection = () => {
    const experiences = [
        {
            company: "Boostorder KL",
            position: "Data Analyst Intern",
            period: "Present",
            description: [
                "Handling and maintaining Looker dashboards, optimizing performance through documentation reviews.",
                "Performing data tally tests and User Acceptance Testing (UAT) to ensure data integrity.",
                <>Developed custom UAT applications that reduced testing time from <span className="text-accent font-black underline decoration-2">8 hours to just 40 minutes</span>.</>,
                <>Built automated data generation scripts using Python and LLMs, <span className="bg-foreground text-background px-2 py-0.5">replacing manual entry</span> with logical, structured, and beautifully visualized synthetic data.</>,
                "Handling support tickets and customer requests with data-driven insights."
            ],
            icon: <Briefcase className="w-6 h-6" />
        }
    ];

    const education = {
        institution: "Monash University Malaysia",
        degree: "Bachelor of Computer Science (Data Science)",
        period: "July 2023 - July 2026",
        stats: "CGPA: 3.86 / 4.0",
        icon: <GraduationCap className="w-6 h-6" />
    };

    const certifications = [
        {
            title: "🏆 1st Place – MUM FIT1043 S1 2024 Kaggle Competition",
            detail: "Multi-class music genre classification challenge on Kaggle with over 179 participants. Developed a predictive model using RandomForest and XGBoost, achieving top placement through iterative feature engineering and performance tuning.",
            link: "https://www.kaggle.com/competitions/mum-fit1043-s1-2024/overview",
            proofLink: "/musicgenre.png"
        },
        {
            title: "🏆 1st Place – Monash Codestart Malaysia (S2 2023)",
            detail: "Secured 1st place in the Codestart programming competition. Evaluated on problem-solving, programming logic, and algorithmic efficiency. Led development of a clean, modular solution under timed conditions.",
            proofLink: "/codestart.png"
        },
        {
            title: "🥉 3rd Place – Monash FIT3080 Pacman Competition",
            detail: "Reached 3rd place in the FIT3080 Pacman competition involving A* search algorithms. Competed against a cohort of over 200 participants, demonstrating complex algorithmic strategy and rapid debugging.",
            proofLink: "/pacman.pdf"
        }
    ];

    return (
        <SectionContainer id="experience" title="EXPERIENCE" sidebarClassName="bg-accent">
            <div className="max-w-5xl space-y-16">
                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative pl-8 border-l-4 border-foreground"
                >
                    <div className="absolute -left-[14px] top-0 bg-background p-1 border-2 border-foreground rounded-full">
                        {education.icon}
                    </div>
                    <div className="mb-2 flex flex-wrap justify-between items-baseline gap-4">
                        <h3 className="text-3xl font-black">{education.institution}</h3>
                        <span className="text-lg font-mono bg-foreground text-background px-3 py-1">{education.period}</span>
                    </div>
                    <p className="text-xl font-bold mb-2 uppercase tracking-tight">{education.degree}</p>
                    <p className="text-lg italic text-foreground/70">{education.stats}</p>
                </motion.div>

                {/* Professional Experience */}
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={exp.company}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.2 }}
                        className="relative pl-8 border-l-4 border-foreground"
                    >
                        <div className="absolute -left-[14px] top-0 bg-background p-1 border-2 border-foreground rounded-full">
                            {exp.icon}
                        </div>
                        <div className="mb-2 flex flex-wrap justify-between items-baseline gap-4">
                            <h3 className="text-3xl font-black">{exp.company}</h3>
                            <span className="text-lg font-mono bg-foreground text-background px-3 py-1">{exp.period}</span>
                        </div>
                        <p className="text-xl font-bold mb-6 uppercase tracking-tight">{exp.position}</p>
                        <ul className="space-y-4 text-lg text-foreground/80 list-disc ml-4">
                            {exp.description.map((item, i) => (
                                <li key={i} className="leading-relaxed">{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}

                {/* Certifications & Awards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-2xl font-black mb-8 flex items-center gap-3 mt-16 pt-16 border-t border-foreground/10">
                        <Award className="w-8 h-8" /> COMPETITIONS & AWARDS
                    </h3>
                    <div className="grid grid-cols-1 gap-6">
                        {certifications.map((cert) => (
                            <div key={cert.title} className="p-8 border border-foreground/10 hover:border-foreground transition-all bg-foreground/5 flex flex-col md:flex-row justify-between items-start gap-6 group">
                                <div className="max-w-3xl">
                                    <div className="flex items-center gap-3 mb-4">
                                        <h4 className="text-2xl font-black leading-tight group-hover:text-accent transition-colors">{cert.title}</h4>
                                        {cert.proofLink && (
                                            <a
                                                href={cert.proofLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-foreground/10 hover:bg-accent hover:text-white rounded-full transition-all"
                                                title="View Certificate Proof"
                                            >
                                                <Award className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-foreground/70 font-medium text-lg leading-relaxed">{cert.detail}</p>
                                </div>
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 text-foreground font-black uppercase text-sm tracking-widest flex items-center gap-2 border-2 border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
                                    >
                                        Leaderboard <span className="text-xl">→</span>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionContainer>
    );
};
