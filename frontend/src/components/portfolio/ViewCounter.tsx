import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

/**
 * ViewCounter
 *
 * Frontend slot for a site view counter backed by an Azure Function + Cosmos DB.
 *
 * Backend contract (implement in your Azure Function App):
 *   Endpoint: GET  {VIEW_COUNTER_URL}            -> { count: number }   (increments + returns new count)
 *   (optional) GET {VIEW_COUNTER_URL}?peek=1     -> { count: number }   (read without increment)
 *
 * Cosmos DB suggestion:
 *   Container: "siteStats", Partition key: "/id"
 *   Document:  { id: "site", count: <number> }
 *   Use the Patch API with { op: "incr", path: "/count", value: 1 } for atomic increments.
 *
 * Configure the endpoint via the Vite env var VITE_VIEW_COUNTER_URL.
 * Defaults to "/api/views" which works out of the box with Azure Static Web Apps
 * linked Azure Functions (no CORS config needed).
 */
const ENDPOINT = "https://counter-bfgvbeanc7fvdrhk.westus2-01.azurewebsites.net/api/counter";

export const ViewCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchCount = async () => {
      try {
        const res = await fetch(ENDPOINT, { method: "GET" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as { count?: number };
        if (!cancelled && typeof data.count === "number") {
          setCount(data.count);
        } else if (!cancelled) {
          setError(true);
        }
      } catch {
        if (!cancelled) setError(true);
      }
    };

    fetchCount();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-current/20 bg-current/10 px-2.5 py-1 font-mono text-xs"
      aria-label="Site view count"
      title="Total site views"
    >
      <Eye className="h-3.5 w-3.5" />
      {error ? "—" : count === null ? "…" : count.toLocaleString()} views
    </span>
  );
};
