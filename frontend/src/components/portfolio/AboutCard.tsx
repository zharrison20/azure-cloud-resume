const focus = [
  "Systems Administration",
  "Cloud (Azure / EntraID)",
  "Windows Server & AD",
  "MSP / Helpdesk",
  "Migrations & Deployments",
  "Documentation",
  "Team Training",
];

export function AboutCard() {
  return (
    <section className="mx-auto mt-6 max-w-6xl px-4 sm:px-6">
      <div className="rounded-xl bg-card p-6 text-card-foreground shadow-sm ring-1 ring-border sm:p-8">
        <p className="text-base leading-relaxed">
          I'm an IT professional with{" "}
          <span className="font-semibold text-primary">10+ years</span> of hands-on
          experience administering systems for organizations ranging from small businesses
          to 150-person enterprises.
        </p>
        <p className="mt-4 text-base leading-relaxed text-foreground/85">
          My work spans Windows Server &amp; Active Directory, Microsoft 365, Azure /
          EntraID, Intune, Google Workspace, and Linux — covering everything from
          day-to-day helpdesk to multi-site migrations, CRM rollouts, and infrastructure
          documentation.
        </p>
        <p className="mt-4 text-base leading-relaxed text-foreground/85">
          Outside of IT I'm a lifelong musician with a background in audio production,
          which still informs how I approach systems: signal flow, clear documentation,
          and reliable performance under pressure.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {focus.map((f) => (
            <span
              key={f}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
