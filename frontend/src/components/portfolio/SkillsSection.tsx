import { Code2 } from "lucide-react";

const groups = [
  {
    title: "Cloud & Identity",
    items: ["Azure", "EntraID", "Azure CSP", "Intune", "Office 365", "Google Workspace"],
  },
  {
    title: "Systems & Infrastructure",
    items: ["Windows Server", "Active Directory", "RDSH / Terminal Server", "Linux", "Networking"],
  },
  {
    title: "Scripting & Data",
    items: ["PowerShell", "Python", "SQL", "Git"],
  },
  {
    title: "Other",
    items: [
      "AZ-900 Certified",
      "CompTIA A+ Certified",
      "AutoCAD",
      "Signal Flow",
      "Audio/Visual Content",
      "Problem Solving",
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="mx-auto mt-10 max-w-6xl px-4 pb-16 sm:px-6">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
        <Code2 className="h-5 w-5 text-primary" />
        Technical Skills
      </h2>
      <div className="rounded-xl bg-card p-6 ring-1 ring-border sm:p-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-medium text-muted-foreground">{g.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
