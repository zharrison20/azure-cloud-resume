import { Github, Linkedin, Mail, MapPin, Award, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import avatar from "@/assets/avatar.jpg";

const stack = ["Windows Server", "Azure", "Intune", "PowerShell", "Python", "SQL"];

export const Hero = () => {
  return (
    <section id="top" className="container pt-10 md:pt-14">
      <div className="grid gap-8 md:grid-cols-[280px_1fr] md:gap-10 items-start">
        <div className="relative mx-auto md:mx-0 w-fit">
          <img
            src={avatar}
            alt="Zachary Harrison, System Administrator"
            width={280}
            height={280}
            className="h-56 w-56 md:h-64 md:w-64 rounded-full object-cover ring-1 ring-border shadow-card"
          />
          <Badge className="absolute -bottom-1 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground border-0 gap-1 shadow-glow whitespace-nowrap">
            <Award className="h-3 w-3" /> AZ-900 • CompTIA A+
          </Badge>
        </div>

        <div className="space-y-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Zachary Harrison</h1>
            <p className="mt-1 font-mono text-base text-muted-foreground">Cloud Engineer</p>
          </div>

          <p className="text-base md:text-lg text-foreground/90 max-w-2xl leading-relaxed">
            System Administrator — Windows, Azure & Identity. Managing IT infrastructure across 40+ companies
            with a focus on reliability, security, and clean automation.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <a href="https://github.com/zharrison20" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:underline">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://linkedin.com/in/zharrison20" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:underline">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="mailto:zharrison20@gmail.com" className="inline-flex items-center gap-1.5 text-primary hover:underline">
              <Mail className="h-4 w-4" /> zharrison20@gmail.com
            </a>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-4 w-4" /> Portland, OR
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Building2 className="h-4 w-4" /> Looking
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {stack.map((s) => (
              <Badge key={s} variant="secondary" className="rounded-full font-normal">
                {s}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
