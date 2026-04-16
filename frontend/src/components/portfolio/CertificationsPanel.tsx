import { Award } from "lucide-react";

const certifications = [
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "Active",
    badge: "AZ-900",
  },
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    date: "Active",
    badge: "A+",
  },
];

export function CertificationsPanel() {
  return (
    <section className="mx-auto mt-6 max-w-6xl px-4 pb-16 sm:px-6">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
        <Award className="h-5 w-5 text-primary" />
        Certifications
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => (
          <div
            key={c.name}
            className="flex items-start gap-4 rounded-xl bg-card p-5 ring-1 ring-border"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
              {c.badge}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold text-card-foreground">{c.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {c.issuer} · {c.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
