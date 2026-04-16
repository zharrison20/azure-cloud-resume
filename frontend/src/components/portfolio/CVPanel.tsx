import { FileText, Download, Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    role: "System Administrator",
    company: "24x7 I.T. Solutions",
    location: "Portland, OR",
    period: "Apr 2022 – Dec 2025",
    bullets: [
      "Manage I.T. infrastructure across 40+ companies, including Windows AD, Azure CSP, EntraID, Google Workspace, and RDSH/Terminal Server",
      "Troubleshoot issues through the client helpdesk, providing fast support to minimize downtime",
      "Onboard new clients, implementing tools and applications to improve workflow efficiency and security",
      "Document infrastructure, processes, and procedures regularly to maintain accurate records",
      "Contribute to projects including system upgrades, migrations, and deployments",
      "Train new team members on company and client infrastructure and best practices",
    ],
  },
  {
    role: "IT Manager",
    company: "ASI Hastings Inc.",
    location: "San Diego, CA",
    period: "Dec 2012 – Jan 2020",
    bullets: [
      "Project lead for the integration of a new internal CRM platform: migrated data from SQL Server to cloud-based software, deployed tablets to 120 field workers, and trained 150 employees on the new system",
      "Managed all on-site and remote IT needs including helpdesk, Windows Server, Active Directory, workstation installation/upkeep, and phone & security vendor relationships",
      "Created Excel spreadsheets for other departments to track performance and sales",
      "Assisted the solar department with the design and building of CAD drawings for project permitting",
    ],
  },
  {
    role: "Event Technician",
    company: "The Museum of Contemporary Art",
    location: "San Diego, CA",
    period: "Sep 2015 – Mar 2016",
    bullets: [
      "Ran all audio/visual needs for events at the museum auditorium — plays, concerts, lectures, weddings, and art showings",
      "Worked closely with performing talent and directors to follow lighting and audio cues",
    ],
  },
];

const education = [
  {
    degree: "B.S. Audio Production",
    school: "The Art Institute of CA – San Diego",
    year: "Jun 2015",
    location: "San Diego, CA",
  },
];

export function CVPanel() {
  return (
    <section className="mx-auto mt-6 max-w-6xl px-4 pb-16 sm:px-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <FileText className="h-5 w-5 text-primary" />
          Curriculum Vitae
        </h2>
        <button className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          <Download className="h-3.5 w-3.5" />
          Download PDF
        </button>
      </div>

      <div className="space-y-6">
        <div className="rounded-xl bg-card p-6 ring-1 ring-border">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-card-foreground">
            <Briefcase className="h-4 w-4 text-primary" />
            Experience
          </h3>
          <div className="mt-4 space-y-6">
            {experience.map((e) => (
              <div key={e.role + e.company} className="relative border-l-2 border-border pl-5">
                <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-primary" />
                <h4 className="text-sm font-medium text-card-foreground">{e.role}</h4>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {e.company} · {e.location} · {e.period}
                </p>
                <ul className="mt-2 space-y-1">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="text-xs leading-relaxed text-foreground/80">
                      • {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-card p-6 ring-1 ring-border">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-card-foreground">
            <GraduationCap className="h-4 w-4 text-primary" />
            Education
          </h3>
          <div className="mt-4 space-y-3">
            {education.map((e) => (
              <div key={e.degree} className="relative border-l-2 border-border pl-5">
                <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-primary" />
                <h4 className="text-sm font-medium text-card-foreground">{e.degree}</h4>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {e.school} · {e.location} · {e.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
