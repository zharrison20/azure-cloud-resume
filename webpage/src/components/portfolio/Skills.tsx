import { Server, Cloud, Terminal, Music } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const groups = [
  {
    icon: Server,
    title: "Systems & Infrastructure",
    items: ["Windows Server", "Active Directory", "RDSH/Terminal Server", "Office 365", "Linux", "Networking"],
  },
  {
    icon: Cloud,
    title: "Cloud & Identity",
    items: ["Azure (AZ-900)", "Azure CSP", "EntraID", "Intune", "Google Workspace"],
  },
  {
    icon: Terminal,
    title: "Scripting & Tools",
    items: ["PowerShell", "Python", "SQL", "Git", "AutoCAD"],
  },
  {
    icon: Music,
    title: "Creative & Other",
    items: ["Audio/Visual Production", "Signal Flow", "Content Creation", "Problem Solving"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="container py-16 md:py-24">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
        <p className="text-muted-foreground mt-2">Tools and technologies I work with daily.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {groups.map((g) => (
          <Card key={g.title} className="p-6 shadow-card border-border/60 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <Badge key={i} variant="secondary" className="font-mono text-xs">{i}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
