"use client";

import { motion } from "framer-motion";

export const HeroSection = () => {
    const navItems = [
        { name: "ABOUT", href: "#about" },
        { name: "EXP", href: "#experience" },
        { name: "WORKS", href: "#works" },
        { name: "SKILLS", href: "#skills" },
    ];

    return (
        <section className="h-screen flex flex-col md:flex-row bg-background text-foreground overflow-hidden">
            <div className="flex-1 flex flex-col justify-center p-8 md:p-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-[0.2em]">HI, I AM</h2>
                    <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tighter mb-8">
                        JUSTIN <br /> TAN
                    </h1>
                    <p className="text-xl md:text-3xl font-light max-w-2xl leading-relaxed">
                        A <span className="font-bold italic">Data Science Student</span> focusing on <span className="font-bold">Full Stack Development</span>, <span className="font-bold">Data Analytics</span>, and <span className="font-bold">Data Engineering</span>.
                    </p>
                </motion.div>
            </div>

            <div className="flex flex-row md:flex-col h-1/4 md:h-full w-full md:w-64">
                {navItems.map((item, index) => (
                    <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2, ease: "circOut" }}
                        className="flex-1 group relative flex items-center justify-center border-l border-foreground/10 overflow-hidden bg-foreground text-background hover:bg-background hover:text-foreground transition-colors duration-500"
                    >
                        <span className="text-2xl md:text-4xl font-black vertical-text uppercase tracking-widest group-hover:scale-110 transition-transform duration-500">
                            {item.name}
                        </span>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};
