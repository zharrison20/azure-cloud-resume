import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { TabbedSections } from "@/components/portfolio/TabbedSections";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pb-10">
          <Hero />
          <div className="mt-8">
            <TabbedSections />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
