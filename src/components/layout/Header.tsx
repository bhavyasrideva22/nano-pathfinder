import { Microscope } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Microscope className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Pathfinder Assessment</h1>
            <p className="text-sm text-muted-foreground">Nanotechnology Engineering Readiness</p>
          </div>
        </div>
      </div>
    </header>
  );
};