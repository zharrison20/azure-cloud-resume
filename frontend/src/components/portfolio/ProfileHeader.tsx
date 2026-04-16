import { Github, Linkedin, Mail, MapPin, Phone, Award } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const techBadges = ["Windows Server", "Azure", "Intune", "PowerShell", "SQL", "Python"];

export function ProfileHeader() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-12">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-10">
        <div className="relative shrink-0">
          <div className="h-44 w-44 overflow-hidden rounded-full ring-4 ring-card shadow-lg sm:h-52 sm:w-52">
            <img
              src={avatar}
              alt="Zachary Harrison profile photo"
              width={208}
              height={208}
              className="h-full w-full object-cover object-[68%_22%] scale-[2.6] origin-[68%_22%]"
            />
          </div>
          <span className="absolute -bottom-2 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow">
            <Award className="h-3 w-3" />
            <span>AZ-900 &amp; A+ Certified</span>
          </span>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Zachary Harrison</h1>
          <p className="mt-1 font-mono text-muted-foreground">System Administrator · IT Manager</p>
          <p className="mt-4 max-w-2xl text-foreground/80">
            IT professional with 10+ years of experience managing infrastructure, leading
            migrations, and supporting end users across cloud and on-prem environments.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm sm:justify-start">
            <a
              href="mailto:zharrison20@gmail.com"
              className="inline-flex items-center gap-1.5 text-primary hover:underline"
            >
              <Mail className="h-4 w-4" />
              <span>zharrison20@gmail.com</span>
            </a>
            <a
              href="tel:+16197339643"
              className="inline-flex items-center gap-1.5 text-primary hover:underline"
            >
              <Phone className="h-4 w-4" />
              <span>(619) 733-9643</span>
            </a>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Portland, OR</span>
            </span>
            <a
              href="https://github.com/"
              className="inline-flex items-center gap-1.5 text-primary hover:underline"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/"
              className="inline-flex items-center gap-1.5 text-primary hover:underline"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
            {techBadges.map((t) => (
              <span
                key={t}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
