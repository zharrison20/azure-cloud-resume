import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { ProfileHeader } from "@/components/portfolio/ProfileHeader";
import { SectionTabs, type TabId } from "@/components/portfolio/SectionTabs";
import { AboutCard } from "@/components/portfolio/AboutCard";
import { ActivityHeatmap } from "@/components/portfolio/ActivityHeatmap";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { CertificationsPanel } from "@/components/portfolio/CertificationsPanel";
import { ProjectsPanel } from "@/components/portfolio/ProjectsPanel";
import { BlogPanel } from "@/components/portfolio/BlogPanel";
import { CVPanel } from "@/components/portfolio/CVPanel";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zachary Harrison — System Administrator & IT Manager" },
      {
        name: "description",
        content:
          "Portfolio of Zachary Harrison — System Administrator and IT Manager based in Portland, OR. Azure, Windows Server, Active Directory, and MSP experience.",
      },
      { property: "og:title", content: "Zachary Harrison — System Administrator & IT Manager" },
      {
        property: "og:description",
        content:
          "10+ years of IT experience: Azure, EntraID, Windows Server, AD, migrations, and team leadership.",
      },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <ProfileHeader />
        <SectionTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "overview" && (
          <>
            <AboutCard />
            <ActivityHeatmap />
            <SkillsSection />
          </>
        )}
        {activeTab === "certifications" && <CertificationsPanel />}
        {activeTab === "projects" && <ProjectsPanel />}
        {activeTab === "blog" && <BlogPanel />}
        {activeTab === "cv" && <CVPanel />}
      </main>
      <Footer />
    </div>
  );
}
