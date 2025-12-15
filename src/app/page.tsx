import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/about/about-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ContactSection } from "@/components/contact/contact-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";
import { CVSection } from "@/components/resume/cv-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CVSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
