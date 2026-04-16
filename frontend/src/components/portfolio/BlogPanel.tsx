import { Newspaper, Music } from "lucide-react";

export function BlogPanel() {
  return (
    <section className="mx-auto mt-6 max-w-6xl px-4 pb-16 sm:px-6">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
        <Newspaper className="h-5 w-5 text-primary" />
        Beyond Work
      </h2>
      <div className="rounded-xl bg-card p-6 ring-1 ring-border sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Music className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-card-foreground">Music &amp; Audio Production</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              I've been passionate about music since I was a kid — playing in multiple
              bands growing up and even getting signed to a label for a couple of years.
              That eventually led to a B.S. in Audio Production, which I now keep alive
              as a side project. Producing keeps me sharp on signal flow, attention to
              detail, and shipping work that sounds (and runs) great.
            </p>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Posts coming soon — this is where I'll share notes on IT, automation, and audio.
      </p>
    </section>
  );
}
