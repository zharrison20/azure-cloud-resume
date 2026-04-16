import { Activity } from "lucide-react";
import { useMemo } from "react";

const MONTHS = ["Jan", "Mar", "May", "Jul", "Sep", "Nov"];

function generateData(): number[] {
  // 53 weeks * 7 days, deterministic pseudo-random
  const out: number[] = [];
  let seed = 42;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let i = 0; i < 53 * 7; i++) {
    const r = rand();
    if (r < 0.45) out.push(0);
    else if (r < 0.7) out.push(1);
    else if (r < 0.85) out.push(2);
    else if (r < 0.95) out.push(3);
    else out.push(4);
  }
  return out;
}

const heatClasses = ["bg-heat-0", "bg-heat-1", "bg-heat-2", "bg-heat-3", "bg-heat-4"];

export function ActivityHeatmap() {
  const data = useMemo(generateData, []);

  return (
    <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
        <Activity className="h-5 w-5 text-primary" />
        Activity
      </h2>
      <div className="rounded-xl bg-card p-4 ring-1 ring-border sm:p-6">
        <div className="overflow-x-auto">
          <div className="min-w-[680px]">
            <div className="mb-2 grid grid-cols-6 px-1 text-xs text-muted-foreground">
              {MONTHS.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
              {data.map((v, i) => (
                <div
                  key={i}
                  className={`h-[11px] w-[11px] rounded-[2px] ${heatClasses[v]}`}
                  title={`Level ${v}`}
                />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-end gap-2 text-xs text-muted-foreground">
              <span>Less</span>
              {heatClasses.map((c, i) => (
                <span key={i} className={`h-[11px] w-[11px] rounded-[2px] ${c}`} />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
