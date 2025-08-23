// app/page.tsx
"use client";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./experiences/page";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import { useLang } from "./lang-context";

export default function Page() {
  const { lang } = useLang();

  console.log("Ngôn ngữ hiện tại ở Page:", lang); // kiểm tra giá trị

  return (
    <div>
      <HomeSection lang={lang} />
      <AboutSection lang={lang} />
      <ExperienceSection lang={lang} />
      <ProjectsSection lang={lang} />
      <SkillsSection lang={lang} />
      <ContactSection lang={lang} />
    </div>
  );
}
