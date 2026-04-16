import { Github } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-nav text-nav-foreground">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2 font-semibold">
          <Github className="h-5 w-5" />
          <span className="tracking-tight">zharrison</span>
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
