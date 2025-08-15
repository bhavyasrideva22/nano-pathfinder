import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, Brain, Microscope, Zap } from "lucide-react";

interface AssessmentIntroProps {
  onStart: () => void;
}

export const AssessmentIntro = ({ onStart }: AssessmentIntroProps) => {
  const traits = [
    { icon: Brain, text: "Strong analytical and quantitative aptitude" },
    { icon: Target, text: "Detail-oriented and precision-driven" },
    { icon: Zap, text: "Patient and persistent with complex experimentation" },
    { icon: Microscope, text: "Curiosity for multidisciplinary science" }
  ];

  const careers = [
    "Nanotechnology Engineer",
    "Nano-Material Scientist", 
    "Nanobiotechnology Specialist",
    "Nanoelectronics Developer",
    "Applied Physicist in Nanotechnologies"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
          <Microscope className="w-5 h-5 text-primary" />
          <span className="text-primary font-medium">Pathfinder Readiness Assessment</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Should I Become a Nanotechnology Engineer?
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover if you have the psychological, technical, and career alignment to pursue 
          Nanotechnology Engineering—a multidisciplinary field at the atomic scale.
        </p>
      </div>

      {/* Assessment Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-soft-md border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              What You'll Learn
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Nanotechnology Engineers design and manipulate materials and devices at the 
              atomic and molecular scale for applications in medicine, electronics, energy, and materials.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Assessment Duration: ~25 minutes</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Personality & Interest Assessment (8 min)</li>
                <li>• Technical Knowledge & Aptitude (12 min)</li>
                <li>• WISCAR Framework Analysis (5 min)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft-md border-0">
          <CardHeader>
            <CardTitle>Typical Career Paths</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {careers.map((career, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {career}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ideal Traits */}
      <Card className="shadow-soft-md border-0">
        <CardHeader>
          <CardTitle>Ideal Traits for Success</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {traits.map((trait, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <trait.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="flex-1">{trait.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Start Button */}
      <div className="text-center">
        <Button 
          onClick={onStart}
          size="lg"
          className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold shadow-soft-md hover:shadow-soft-lg transition-all duration-300"
        >
          Start Assessment
        </Button>
        <p className="text-sm text-muted-foreground mt-3">
          No registration required • Results provided instantly
        </p>
      </div>
    </div>
  );
};