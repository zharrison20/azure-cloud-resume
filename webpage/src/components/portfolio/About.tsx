import { Badge } from "@/components/ui/badge";

const focus = [
  "Systems Administration",
  "Cloud & Identity",
  "Helpdesk Leadership",
  "Migrations & Deployments",
  "Documentation",
  "Security",
  "Automation",
];

export const About = () => {
  return (
    <section className="container py-10 md:py-14">
      <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-card space-y-5">
        <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
          I'm a <span className="font-semibold">System Administrator</span> with over a decade of IT experience
          supporting businesses of every size. At 24x7 I.T. Solutions I manage infrastructure across 40+ companies —
          Windows AD, Azure CSP, EntraID, Google Workspace, and RDSH/Terminal Server environments.
        </p>
        <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
          My day-to-day spans helpdesk troubleshooting, client onboarding, system upgrades, migrations, and
          deployments. I document everything I touch and train new team members so the whole team levels up.
        </p>
        <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
          Outside of IT, I'm a lifelong musician and producer — I've played in bands, been signed to a label, and
          earned a BS in Audio Production. That creative side keeps me curious and detail-driven in everything I build.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {focus.map((f) => (
            <Badge key={f} variant="secondary" className="rounded-full font-normal">
              {f}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
