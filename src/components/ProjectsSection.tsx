"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "./SectionContainer";
import { Github } from "lucide-react";

const projects = [
    {
        title: "Monash University FAQ Chatbot",
        date: "July 2025 - August 2025",
        description: "Developed an AI-powered chatbot using Retrieval-Augmented Generation (RAG) to provide students with instant answers from the Monash website. Built a custom web scraper to collect and structure FAQ content for efficient retrieval.",
        impact: "Reduced student search time from 30-40 minutes to under 5 minutes.",
        tech: ["RAG", "Playwright", "Streamlit", "Gemini", "Python"],
        sourceLink: "https://github.com/coderJT/FAQMonash",
        liveLink: "https://monash-faq-chatbot.streamlit.app"
    },
    {
        title: "NutriTrack Health Monitoring",
        date: "March 2025 - May 2025",
        description: "Assembled an AI-powered Android app for health monitoring and personalized nutrition coaching. Automated dietary recommendations and motivational messages using Gemini API.",
        impact: "Created a secure and user-friendly health application with full user and admin controls.",
        tech: ["Kotlin", "Jetpack Compose", "Room Database", "Gemini API", "MVVM"],
        sourceLink: "https://github.com/coderJT",
        liveLink: null // Restricted access
    },
    {
        title: "Trendwork",
        date: "Recent",
        description: "Advanced Job insight scraper providing market trends and analytics. Implemented complex data engineering pipelines to process and visualize employment data.",
        impact: "Leveraged serverless architecture in Google Cloud Platform for scalable data processing and insights demonstration.",
        tech: ["Python", "PatchRight", "BigQuery", "Cloud Run Functions", "Cloud Scheduler", "OpenTelemetry"],
        sourceLink: "https://github.com/coderJT/Trendwork",
        liveLink: "https://jobstreet-dashboard-576780345034.asia-southeast1.run.app"
    },
    {
        title: "Blog.co",
        date: "Recent",
        description: "Minimalistically blogging application focused on performance and clean writing experience. Built with Next.js and Supabase for a seamless full-stack experience.",
        impact: "Produced a high performance and a clean user interface for writers to demonstrate their creativity.",
        tech: ["TypeScript", "Next.js", "Supabase", "Tailwind", "shadcn/ui"],
        sourceLink: "https://github.com/coderJT/Blog.co",
        liveLink: "https://blogging-wine-tau.vercel.app"
    },
    {
        title: "News Scraper & Analyzer",
        date: "January 2024 - February 2024",
        description: "Produced a web application to automatically collect and analyze news from The Star. Features tools to summarize content and perform sentiment analysis.",
        impact: "Enabled efficient processing and insight generation from large volumes of news articles.",
        tech: ["Selenium", "MERN stack", "Flask", "HuggingFace"],
        sourceLink: "https://github.com/coderJT/News-Scraper",
        liveLink: "https://news-scraper-git-master-coderjts-projects.vercel.app"
    },
    {
        title: "Booklyn E-commerce",
        date: "Recent",
        description: "High-performance modern e-commerce platform for bookstores with Stripe integration and state-of-the-art state management.",
        impact: "Produced a comprehensive E-commerce platform from full payment workflow to admin order management.",
        tech: ["Next.js", "TypeScript", "Prisma", "Zustand", "Stripe"],
        sourceLink: "https://github.com/coderJT/Booklyn",
        liveLink: "https://ecommerce-81o96oe4j-coderjts-projects.vercel.app"
    }
];

export const ProjectsSection = () => {
    return (
        <SectionContainer id="works" title="WORKS" sidebarClassName="bg-accent">
            <div className="grid grid-cols-1 gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group grid lg:grid-cols-[1fr,2fr] gap-12 p-8 border border-foreground/10 hover:border-foreground/40 transition-all bg-foreground/5"
                    >
                        <div>
                            <span className="text-sm font-mono opacity-50 block mb-4 italic">{project.date}</span>
                            <h3 className="text-4xl font-black mb-6 group-hover:text-accent transition-colors leading-tight">{project.title}</h3>
                            <div className="flex flex-col gap-3">
                                <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-black border-2 border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors w-fit">
                                    <Github size={20} /> VIEW SOURCE
                                </a>
                                {project.liveLink && (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-black border-2 border-accent bg-accent text-background px-4 py-2 hover:bg-foreground hover:border-foreground transition-colors w-fit">
                                        VIEW PROJECT
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="text-xl mb-6 leading-relaxed text-foreground/80 font-medium">
                                    {project.description}
                                </p>
                                <div className="bg-foreground text-background p-4 mb-8 border-l-8 border-accent">
                                    <p className="text-sm font-black uppercase tracking-widest mb-1 italic">Key Result</p>
                                    <p className="text-lg font-bold">{project.impact}</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="px-3 py-1 bg-foreground/10 text-foreground text-xs font-black uppercase tracking-widest border border-foreground/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionContainer>
    );
};
