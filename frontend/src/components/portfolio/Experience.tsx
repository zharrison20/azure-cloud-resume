import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const roles = [
  {
    company: "24x7 I.T. Solutions",
    role: "System Administrator",
    location: "Portland, OR",
    period: "Apr 2022 – Dec 2025",
    points: [
      "Manage I.T. infrastructure across 40+ companies — Windows AD, Azure CSP, EntraID, Google Workspace, RDSH/Terminal Server.",
      "Troubleshoot helpdesk tickets quickly to minimize client downtime.",
      "Onboard new clients, deploying tools that improve workflow efficiency and security.",
      "Lead system upgrades, migrations, and deployments; document infrastructure and procedures.",
      "Train new team members on company and client infrastructure and best practices.",
    ],
  },
  {
    company: "ASI Hastings Inc.",
    role: "IT Manager",
    location: "San Diego, CA",
    period: "Dec 2012 – Jan 2020",
    points: [
      "Project lead on a new internal CRM: SQL → cloud migration, 120 field-worker tablet rollout, training for 150 employees.",
      "Owned all on-site and remote IT — helpdesk, Windows Server, Active Directory, workstation lifecycle, phones and security vendors.",
      "Built Excel reporting for performance and sales tracking across departments.",
      "Supported the solar department with CAD drawings for permitting.",
    ],
  },
  {
    company: "The Museum of Contemporary Art",
    role: "Event Technician",
    location: "San Diego, CA",
    period: "Sep 2015 – Mar 2016",
    points: [
      "Ran audio/visual production for plays, concerts, lectures, weddings, and art showings.",
      "Collaborated with performance directors to execute lighting and audio cues live.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="container py-16 md:py-24">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Recent Experience</h2>
        <p className="text-muted-foreground mt-2">A snapshot of where I've shipped impact.</p>
      </div>

      <div className="relative space-y-5 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-border md:before:left-6">
        {roles.map((r) => (
          <Card key={r.company} className="relative ml-12 md:ml-16 p-6 shadow-card border-border/60 hover:border-primary/40 transition-all hover:-translate-y-0.5">
            <div className="absolute -left-12 md:-left-16 top-6 flex h-10 w-10 items-center justify-center rounded-full gradient-primary shadow-glow ring-4 ring-background">
              <Briefcase className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">
                  {r.company} <span className="text-muted-foreground font-normal">• {r.role}</span>
                </h3>
                <p className="text-sm text-muted-foreground">{r.location}</p>
              </div>
              <span className="font-mono text-xs text-primary">{r.period}</span>
            </div>
            <ul className="mt-3 space-y-1.5 text-muted-foreground text-sm md:text-base list-disc pl-5">
              {r.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};
