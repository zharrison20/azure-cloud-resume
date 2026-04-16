import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="container py-16 md:py-24">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
      </div>
      <Card className="p-6 shadow-card border-border/60 flex items-center gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl gradient-primary shadow-glow">
          <GraduationCap className="h-7 w-7 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">The Art Institute of CA — San Diego</h3>
          <p className="text-muted-foreground">BS, Audio Production · June 2015</p>
        </div>
      </Card>
    </section>
  );
};
