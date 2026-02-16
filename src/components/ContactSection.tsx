"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "./SectionContainer";
import { Github, Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
    return (
        <SectionContainer id="contact" title="CONTACT">
            <div className="max-w-4xl text-center md:text-left">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-black mb-12 tracking-tighter"
                >
                    LET'S <br /> CONNECT.
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-16">
                    <motion.a
                        href="mailto:justintan.code@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        className="px-8 py-4 bg-foreground text-background text-2xl font-black rounded-none transition-transform"
                    >
                        SAY HELLO
                    </motion.a>

                    <div className="flex gap-8 text-foreground/50">
                        <a href="https://github.com/coderJT" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                            <Github size={48} />
                        </a>
                        <a href="https://www.linkedin.com/in/jtan812/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                            <Linkedin size={48} />
                        </a>
                        <a href="mailto:justintan.code@gmail.com" className="hover:text-foreground transition-colors">
                            <Mail size={48} />
                        </a>
                    </div>
                </div>

                <p className="text-lg text-foreground/40 font-mono italic">
                    &copy; {new Date().getFullYear()} JUSTIN TAN. BUILT WITH NEXT.JS & FRAMER MOTION.
                </p>
            </div>
        </SectionContainer>
    );
};
