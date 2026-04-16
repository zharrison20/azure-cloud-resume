import { FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Multi-Tenant MSP Operations",
    description:
      "Manage IT infrastructure across 40+ client companies with mixed Windows AD, Azure CSP, EntraID, Google Workspace, and RDSH/Terminal Server environments.",
    tech: ["Azure CSP", "EntraID", "Windows AD", "Google Workspace"],
    role: "24x7 I.T. Solutions",
  },
  {
    title: "Internal CRM Platform Rollout",
    description:
      "Project lead for ASI Hastings' CRM migration: moved data from on-prem SQL Server to cloud, deployed tablets to 120 field workers, and trained 150 employees on the new workflow.",
    tech: ["SQL Server", "Cloud Migration", "Field Deployment", "Training"],
    role: "ASI Hastings Inc.",
  },
  {
    title: "Client Onboarding Playbook",
    description:
      "Built a repeatable onboarding process for new MSP clients — provisioning tools, hardening security baselines, and documenting infrastructure for long-term maintainability.",
    tech: ["Onboarding", "Security", "Documentation", "Process Design"],
    role: "24x7 I.T. Solutions",
  },
  {
    title: "Solar CAD Permitting Support",
    description:
      "Partnered with the solar department to design and produce CAD drawings used for project permitting submissions.",
    tech: ["AutoCAD", "Cross-Team Collaboration"],
    role: "ASI Hastings Inc.",
  },
];

export function ProjectsPanel() {
  return (
    <section className="mx-auto mt-6 max-w-6xl px-4 pb-16 sm:px-6">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
        <FolderGit2 className="h-5 w-5 text-primary" />
        Notable Work
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="flex flex-col rounded-xl bg-card p-5 ring-1 ring-border"
          >
            <h3 className="text-sm font-semibold text-card-foreground">{p.title}</h3>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-muted-foreground">
              {p.role}
            </p>
            <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
