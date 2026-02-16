"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  sidebarClassName?: string;
}

export const SectionContainer = ({
  id,
  title,
  children,
  className,
  sidebarClassName,
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen flex flex-col md:flex-row relative overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "md:w-32 bg-foreground text-background flex items-center justify-center py-10 md:py-0",
          sidebarClassName
        )}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-black uppercase vertical-text tracking-tighter"
        >
          {title}
        </motion.h2>
      </div>
      <div className="flex-1 p-8 md:p-20 flex flex-col justify-center">
        {children}
      </div>
    </section>
  );
};
