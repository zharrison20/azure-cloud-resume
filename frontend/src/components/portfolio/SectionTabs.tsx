import { BookOpen, Award, FolderGit2, FileText, Newspaper } from "lucide-react";

export type TabId = "overview" | "certifications" | "projects" | "blog" | "cv";

const tabs: { id: TabId; label: string; icon: typeof BookOpen; count: number | null }[] = [
  { id: "overview", label: "Overview", icon: BookOpen, count: null },
  { id: "certifications", label: "Certifications", icon: Award, count: 2 },
  { id: "projects", label: "Notable Work", icon: FolderGit2, count: 4 },
  { id: "blog", label: "Beyond Work", icon: Newspaper, count: null },
  { id: "cv", label: "CV", icon: FileText, count: null },
];

interface SectionTabsProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function SectionTabs({ activeTab, onTabChange }: SectionTabsProps) {
  return (
    <div className="mx-auto mt-10 max-w-6xl border-b border-border px-4 sm:px-6">
      <nav className="flex gap-1 overflow-x-auto">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = t.id === activeTab;
          return (
            <button
              key={t.id}
              onClick={() => onTabChange(t.id)}
              className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-3 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {t.label}
              {t.count !== null && (
                <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
                  {t.count}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
