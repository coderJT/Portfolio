import { HeroSection } from "@/components/HeroSection";
import { AboutMeSection } from "@/components/AboutMeSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <HeroSection />
            <AboutMeSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
        </main>
    );
}
