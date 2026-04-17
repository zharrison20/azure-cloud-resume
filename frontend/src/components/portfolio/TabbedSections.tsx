import { useState, ReactNode } from "react";
import { BookOpen, Award, FolderGit2, FileText, Mail } from "lucide-react";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Contact } from "./Contact";
import { title } from "process";

type TabId = "overview" | "certifications" | "projects" | "cv" | "contact";

const tabs: { id: TabId; label: string; icon: typeof BookOpen; count?: number }[] = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "cv", label: "CV", icon: FileText },
  { id: "projects", label: "Projects", icon: FolderGit2, count: 4 },
  { id: "certifications", label: "Certifications", icon: Award, count: 2 },
  { id: "contact", label: "Contact", icon: Mail },
];

const Certifications = () => (
  <section className="container py-10 md:py-14">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">Certifications</h2>
    <div className="grid gap-4 md:grid-cols-2">
      {[
        { title: "In Progress: Microsoft Certified: Azure Administrator Associate", code: "AZ-104", issuer: "Microsoft" },
        { title: "Microsoft Certified: Azure Fundamentals", code: "AZ-900", issuer: "Microsoft" },
        { title: "CompTIA A+", code: "220-1101 / 220-1102", issuer: "CompTIA" },
      ].map((c) => (
        <div key={c.code} className="rounded-xl border border-border bg-card p-5 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary shadow-glow">
              <Award className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
              <p className="mt-1 font-mono text-xs text-primary">{c.code}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const CV = () => (
  <section className="container py-10 md:py-14">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">CV</h2>
    <p className="text-muted-foreground mb-6">
      A combined view of experience, skills, and education.
    </p>
    <Experience />
    <Skills />
    <Education />
  </section>
);

export const TabbedSections = () => {
  const [active, setActive] = useState<TabId>("overview");

  const content: Record<TabId, ReactNode> = {
    overview: (
      <>
        <About />
        <Skills />
      </>
    ),
    certifications: <Certifications />,
    projects: <Projects />,
    
    cv: <CV />,
    contact: <Contact />,
  };

  return (
    <>
      <div className="sticky top-14 z-40 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="container">
          <nav className="flex gap-1 overflow-x-auto -mb-px scrollbar-none">
            {tabs.map((t) => {
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`group flex items-center gap-2 whitespace-nowrap px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <t.icon className="h-4 w-4" />
                  {t.label}
                  {t.count !== undefined && (
                    <span className={`rounded-full px-2 py-0.5 text-xs font-mono ${
                      isActive ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
                    }`}>
                      {t.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
      <div key={active} className="animate-fade-in">
        {content[active]}
      </div>
    </>
  );
};
