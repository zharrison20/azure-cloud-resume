import { Github, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-foreground text-background">
      <div className="container flex h-14 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <Github className="h-5 w-5" />
          <span>Zachary Harrison</span>
        </a>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="rounded-full text-background hover:bg-background/10 hover:text-background"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
    </header>
  );
};
