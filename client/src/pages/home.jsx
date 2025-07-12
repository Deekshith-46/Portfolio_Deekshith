import { CustomCursor } from "@/components/custom-cursor";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { FloatingShapes } from "@/components/floating-shapes";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      
      <main className="pt-20">
        <div className="relative">
          <FloatingShapes />
          <HeroSection />
        </div>
        
        <div className="section-divider" />
        <AboutSection />
        
        <div className="section-divider" />
        <SkillsSection />
        
        <div className="section-divider" />
        <EducationSection />
        
        <div className="section-divider" />
        <ProjectsSection />
        
        <div className="section-divider" />
        <ExperienceSection />
        
        <div className="section-divider" />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
