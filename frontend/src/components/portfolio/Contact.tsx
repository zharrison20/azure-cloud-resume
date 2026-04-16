import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="container py-16 md:py-24">
      <div className="relative overflow-hidden rounded-2xl border border-border/60 p-10 md:p-14 text-center shadow-card">
        <div className="absolute inset-0 gradient-hero pointer-events-none" />
        <div className="relative space-y-5 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Let's build something great.</h2>
          <p className="text-muted-foreground text-lg">
            Open to systems administration, cloud, and IT leadership opportunities. Reach out — I usually reply within a day.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button size="lg" className="gradient-primary border-0 shadow-glow hover:opacity-90" asChild>
              <a href="mailto:zharrison20@gmail.com"><Mail className="mr-2 h-4 w-4" /> Email me</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+16197339643">(619) 733-9643</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com" target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a>
            </Button>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Zachary Harrison. Crafted with care.
      </p>
    </section>
  );
};
