import { ExternalLink, Github, Cloud, Database, Headphones, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Database,
    title: "CRM Cloud Migration",
    description:
      "Led the migration of a legacy SQL-based CRM to a cloud platform for a 150-person field services company, including tablet rollout to 120 field workers and end-to-end training.",
    tech: ["SQL Server", "Cloud CRM", "Windows", "Training"],
    live: "#",
    repo: "#",
  },
  {
    icon: Cloud,
    title: "Multi-Tenant M365 + Azure Onboarding",
    description:
      "Standardized onboarding for new managed-services clients across EntraID, Intune, and Azure CSP — repeatable PowerShell baselines, conditional access, and documented runbooks.",
    tech: ["Azure", "EntraID", "Intune", "PowerShell"],
    live: "#",
    repo: "#",
  },
  {
    icon: ShieldCheck,
    title: "Helpdesk Automation Toolkit",
    description:
      "PowerShell + Python utilities that automate common tier-1 tickets — password resets, mailbox provisioning, license assignment — cutting average ticket time and freeing the team for project work.",
    tech: ["PowerShell", "Python", "Graph API", "Automation"],
    live: "#",
    repo: "#",
  },
  {
    icon: Headphones,
    title: "Independent Music Production",
    description:
      "Ongoing creative project producing, mixing, and mastering original music. Signed to a label early in my career; now a passion side project that sharpens my attention to detail.",
    tech: ["DAW", "Signal Flow", "Mixing", "Mastering"],
    live: "#",
    repo: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="container py-16 md:py-24">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        <p className="text-muted-foreground mt-2">A few things I've shipped — at work and after hours.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <Card
            key={p.title}
            className="group p-6 shadow-card border-border/60 hover:border-primary/40 transition-all hover:-translate-y-0.5 flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg gradient-primary shadow-glow">
                <p.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                  <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.title} repository`}>
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                  <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live`}>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{p.title}</h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed flex-1">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Badge key={t} variant="secondary" className="font-mono text-xs">{t}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
