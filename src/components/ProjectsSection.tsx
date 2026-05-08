"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionContainer } from "./SectionContainer";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";

type Project = {
    title: string;
    date: string;
    description: string;
    impact: string;
    tech: string[];
    sourceLink: string;
    liveLink: string | null;
    screenshots: {
        src: string;
        alt: string;
    }[];
};

const projects: Project[] = [
    {
        title: "ProstAPP",
        date: "Final Year Project",
        description: "Built a personal FYP prostate cancer risk-assessment web app using a custom machine learning model trained with real-world Malaysian hospital data, alongside patient dashboards, assessment workflows, medical history, education resources, appointment booking, and multilingual support.",
        impact: "Integrated React, Express, Supabase, Python XAI services, and Groq-powered LLM explainability features to support model predictions with LIME/SHAP explanations.",
        tech: ["React", "Vite", "Express", "Supabase", "Python", "Groq", "LIME", "SHAP"],
        sourceLink: "https://github.com/coderJT/prostapp_web",
        liveLink: "https://prostapp-web.vercel.app",
        screenshots: [
            {
                src: "/project-screenshots/prostapp-01.png",
                alt: "ProstAPP landing page screenshot from GitHub"
            },
            {
                src: "/project-screenshots/prostapp-02.png",
                alt: "ProstAPP prediction result screenshot from GitHub"
            },
            {
                src: "/project-screenshots/prostapp-03.png",
                alt: "ProstAPP report page screenshot from GitHub"
            }
        ]
    },
    {
        title: "Trendwork",
        date: "Recent",
        description: "Advanced Job insight scraper providing market trends and analytics. Implemented complex data engineering pipelines to process and visualize employment data.",
        impact: "Leveraged serverless architecture in Google Cloud Platform for scalable data processing and insights demonstration.",
        tech: ["Python", "PatchRight", "BigQuery", "Cloud Run Functions", "Cloud Scheduler", "OpenTelemetry"],
        sourceLink: "https://github.com/coderJT/Trendwork",
        liveLink: null,
        screenshots: [
            {
                src: "/project-screenshots/trendwork-01.png",
                alt: "Trendwork job trends dashboard screenshot from GitHub"
            },
            {
                src: "/project-screenshots/trendwork-02.png",
                alt: "Trendwork job map view screenshot from GitHub"
            }
        ]
    },
    {
        title: "SkyRescue AI",
        date: "Recent",
        description: "Built an autonomous multi-drone search-and-rescue simulator with a shared Python simulation core, MCP tools, and a browser-based 3D operator UI.",
        impact: "Coordinated drone assignments, hazard-aware routing, thermal scans, battery feasibility, and MCP/LLM mission reasoning in one rescue command console.",
        tech: ["Python", "FastAPI", "MCP", "Three.js", "WebSockets", "LLM"],
        sourceLink: "https://github.com/coderJT/SkyRescueAI",
        liveLink: null,
        screenshots: [
            {
                src: "/project-screenshots/skyrescue-01.png",
                alt: "SkyRescue AI drone-focused mission view screenshot from GitHub"
            },
            {
                src: "/project-screenshots/skyrescue-02.png",
                alt: "SkyRescue AI coordinated swarm deployment screenshot from GitHub"
            },
            {
                src: "/project-screenshots/skyrescue-03.png",
                alt: "SkyRescue AI tactical map and drone thoughts screenshot from GitHub"
            }
        ]
    },
    {
        title: "Monash University FAQ Chatbot",
        date: "July 2025 - August 2025",
        description: "Developed an AI-powered chatbot using Retrieval-Augmented Generation (RAG) to provide students with instant answers from the Monash website. Built a custom web scraper to collect and structure FAQ content for efficient retrieval.",
        impact: "Reduced student search time from 30-40 minutes to under 5 minutes.",
        tech: ["RAG", "Playwright", "Streamlit", "Gemini", "Python"],
        sourceLink: "https://github.com/coderJT/FAQMonash",
        liveLink: "https://monash-faq-chatbot.streamlit.app",
        screenshots: [
            {
                src: "/project-screenshots/faqmonash-01.png",
                alt: "Monash FAQ chatbot screenshot from GitHub"
            }
        ]
    },
    {
        title: "NutriTrack Health Monitoring",
        date: "March 2025 - May 2025",
        description: "Assembled an AI-powered Android app for health monitoring and personalized nutrition coaching. Automated dietary recommendations and motivational messages using Gemini API.",
        impact: "Created a secure and user-friendly health application with full user and admin controls.",
        tech: ["Kotlin", "Jetpack Compose", "Room Database", "Gemini API", "MVVM"],
        sourceLink: "https://github.com/coderJT",
        liveLink: null, // Restricted access
        screenshots: []
    },
    {
        title: "Blog.Co",
        date: "Recent",
        description: "Minimalistically blogging application focused on performance and clean writing experience. Built with Next.js and Supabase for a seamless full-stack experience.",
        impact: "Produced a high performance and a clean user interface for writers to demonstrate their creativity.",
        tech: ["TypeScript", "Next.js", "Supabase", "Tailwind", "shadcn/ui"],
        sourceLink: "https://github.com/coderJT/Blog.co",
        liveLink: "https://blogging-wine-tau.vercel.app",
        screenshots: [
            {
                src: "/project-screenshots/blogco-01.png",
                alt: "Blog.co homepage screenshot from GitHub"
            },
            {
                src: "/project-screenshots/blogco-02.png",
                alt: "Blog.co writing interface screenshot from GitHub"
            }
        ]
    },
    {
        title: "Booklyn E-commerce",
        date: "Recent",
        description: "High-performance modern e-commerce platform for bookstores with Stripe integration and state-of-the-art state management.",
        impact: "Produced a comprehensive E-commerce platform from full payment workflow to admin order management.",
        tech: ["Next.js", "TypeScript", "Prisma", "Zustand", "Stripe"],
        sourceLink: "https://github.com/coderJT/Booklyn",
        liveLink: "https://ecommerce-81o96oe4j-coderjts-projects.vercel.app",
        screenshots: [
            {
                src: "/project-screenshots/booklyn-01.png",
                alt: "Booklyn product page screenshot from GitHub"
            },
            {
                src: "/project-screenshots/booklyn-02.png",
                alt: "Booklyn search page screenshot from GitHub"
            },
            {
                src: "/project-screenshots/booklyn-03.png",
                alt: "Booklyn admin dashboard screenshot from GitHub"
            }
        ]
    },
    {
        title: "News Scraper & Analyzer",
        date: "January 2024 - February 2024",
        description: "Produced a web application to automatically collect and analyze news from The Star. Features tools to summarize content and perform sentiment analysis.",
        impact: "Enabled efficient processing and insight generation from large volumes of news articles.",
        tech: ["Selenium", "MERN stack", "Flask", "HuggingFace"],
        sourceLink: "https://github.com/coderJT/News-Scraper",
        liveLink: "https://news-scraper-git-master-coderjts-projects.vercel.app",
        screenshots: [
            {
                src: "/project-screenshots/news-01.png",
                alt: "News Scraper analyzer screenshot from GitHub"
            }
        ]
    }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const [activeScreenshot, setActiveScreenshot] = useState(0);
    const hasScreenshots = project.screenshots.length > 0;
    const currentScreenshot = project.screenshots[activeScreenshot];

    const goToPreviousScreenshot = () => {
        setActiveScreenshot((current) =>
            current === 0 ? project.screenshots.length - 1 : current - 1
        );
    };

    const goToNextScreenshot = () => {
        setActiveScreenshot((current) =>
            current === project.screenshots.length - 1 ? 0 : current + 1
        );
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group grid gap-0 overflow-hidden border border-foreground/15 bg-background shadow-[12px_12px_0_var(--foreground)] transition-all hover:-translate-y-1 hover:border-foreground/50 hover:shadow-[16px_16px_0_var(--foreground)] md:grid-cols-[0.85fr,1.15fr]"
        >
            <div className="relative order-1 min-h-[340px] overflow-hidden border-b border-foreground/15 bg-foreground text-background md:min-h-[420px] md:border-b-0 md:border-r">
                <div className="absolute right-3 top-3 z-20 flex items-center border border-background/20 bg-foreground/80 px-3 py-2 backdrop-blur">
                    <span className="font-mono text-xs text-background/70">
                        {hasScreenshots ? `${activeScreenshot + 1}/${project.screenshots.length}` : "0/0"}
                    </span>
                </div>

                {hasScreenshots ? (
                    <Image
                        key={currentScreenshot.src}
                        src={currentScreenshot.src}
                        alt={currentScreenshot.alt}
                        fill
                        sizes="(min-width: 1024px) 42vw, 100vw"
                        className="bg-foreground object-contain p-4"
                    />
                ) : (
                    <div className="flex h-full min-h-[340px] flex-col justify-end bg-[linear-gradient(135deg,var(--foreground)_0%,var(--foreground)_58%,var(--background)_58%,var(--background)_100%)] p-8 md:min-h-[420px]">
                        <p className="max-w-sm text-4xl font-black uppercase leading-none text-background">
                            Private build archive
                        </p>
                    </div>
                )}

                {project.screenshots.length > 1 && (
                    <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                        <button
                            type="button"
                            aria-label={`Show previous ${project.title} screenshot`}
                            onClick={goToPreviousScreenshot}
                            className="grid size-11 place-items-center border border-background bg-foreground text-background transition-colors hover:bg-background hover:text-foreground"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            type="button"
                            aria-label={`Show next ${project.title} screenshot`}
                            onClick={goToNextScreenshot}
                            className="grid size-11 place-items-center border border-background bg-foreground text-background transition-colors hover:bg-background hover:text-foreground"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                )}

                {project.screenshots.length > 1 && (
                    <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                        {project.screenshots.map((screenshot, screenshotIndex) => (
                            <button
                                key={screenshot.src}
                                type="button"
                                aria-label={`Show ${project.title} screenshot ${screenshotIndex + 1}`}
                                onClick={() => setActiveScreenshot(screenshotIndex)}
                                className={`h-2.5 transition-all ${activeScreenshot === screenshotIndex ? "w-10 bg-background" : "w-2.5 bg-background/50 hover:bg-background"}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="relative order-2 flex flex-col justify-between p-6 md:p-8">
                <span className="absolute right-6 top-6 font-mono text-6xl font-black leading-none text-foreground/[0.06] md:text-8xl">
                    {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                    <span className="mb-4 block font-mono text-sm italic opacity-50">{project.date}</span>
                    <h3 className="mb-6 text-4xl font-black leading-tight transition-colors group-hover:text-accent md:text-5xl">
                        {project.title}
                    </h3>
                    <p className="mb-6 text-lg font-medium leading-relaxed text-foreground/80">
                        {project.description}
                    </p>
                    <div className="mb-8 border-l-8 border-accent bg-foreground p-4 text-background">
                        <p className="mb-1 text-sm font-black uppercase tracking-widest italic">Key Result</p>
                        <p className="text-lg font-bold">{project.impact}</p>
                    </div>
                </div>

                <div className="relative">
                    <div className="mb-6 flex flex-wrap gap-2">
                        {project.tech.map(t => (
                            <span key={t} className="border border-foreground/20 bg-foreground/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-foreground">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 border-2 border-foreground px-4 py-2 font-black transition-colors hover:bg-foreground hover:text-background">
                            <Github size={20} /> VIEW SOURCE
                        </a>
                        {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 border-2 border-accent bg-accent px-4 py-2 font-black text-background transition-colors hover:border-foreground hover:bg-foreground">
                                <ExternalLink size={20} /> VIEW PROJECT
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export const ProjectsSection = () => {
    return (
        <SectionContainer id="works" title="WORKS" className="bg-background">
            <div className="mb-12 max-w-4xl">
                <p className="font-mono text-sm uppercase tracking-[0.35em] text-foreground/50">Selected builds</p>
                <h2 className="mt-3 text-5xl font-black leading-none md:text-7xl">Project casefiles with live screens.</h2>
            </div>
            <div className="grid grid-cols-1 gap-16">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </SectionContainer>
    );
};
