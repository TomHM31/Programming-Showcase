import Header from "./components/header";
import Hero from "./components/home/Hero";
import StatusBar from "./components/home/StatusBar";
import SkillsSection from "./components/home/SkillsSection";
import ExperienceLog from "./components/home/ExperienceLog";
import FeaturedProjects from "./components/home/FeaturedProjects";
import HomeChat from "./components/home/HomeChat";
import HomeFooter from "./components/home/HomeFooter";

export default function Home() {
  const authorName = process.env.NEXT_PUBLIC_AUTHOR_NAME ?? "Hoang Minh Khoi";
  const resumeText =
    process.env.NEXT_PUBLIC_RESUME_TEXT ?? "[paste your resume text here]";

  return (
    <div className="home-root min-h-screen bg-[#0a0a0a] pt-32 text-neutral-200 md:pt-24">
      <Header />
      <main>
        <Hero name={authorName} />
        <StatusBar />
        <SkillsSection />
        <ExperienceLog />
        <FeaturedProjects />
        <HomeChat resumeText={resumeText} />
      </main>
      <HomeFooter />
    </div>
  );
}
