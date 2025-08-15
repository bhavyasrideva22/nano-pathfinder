import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertCircle, TrendingUp, BookOpen, Target } from "lucide-react";
import { careerRoles, skillGaps } from "@/data/assessmentData";

interface WISCARScores {
  will: number;
  interest: number;
  skill: number;
  cognitiveReadiness: number;
  abilityToLearn: number;
  realWorldAlignment: number;
}

interface AssessmentResultsProps {
  scores: WISCARScores;
  onRestart: () => void;
}

export const AssessmentResults = ({ scores, onRestart }: AssessmentResultsProps) => {
  const overallScore = Math.round(
    (scores.will + scores.interest + scores.skill + scores.cognitiveReadiness + scores.abilityToLearn + scores.realWorldAlignment) / 6
  );

  const getRecommendation = (score: number) => {
    if (score >= 75) return { 
      decision: "Yes", 
      color: "success", 
      icon: CheckCircle,
      message: "Strong fit for nanotechnology engineering" 
    };
    if (score >= 55) return { 
      decision: "Maybe", 
      color: "warning", 
      icon: AlertCircle,
      message: "Moderate fit - consider strengthening key areas" 
    };
    return { 
      decision: "No", 
      color: "destructive", 
      icon: AlertCircle,
      message: "Consider alternative career paths" 
    };
  };

  const recommendation = getRecommendation(overallScore);

  const wiscarDimensions = [
    { key: 'will', label: 'Will (Persistence)', value: scores.will, description: 'Motivation to persevere through challenges' },
    { key: 'interest', label: 'Interest', value: scores.interest, description: 'Genuine fascination with the field' },
    { key: 'skill', label: 'Technical Skills', value: scores.skill, description: 'Current technical competency' },
    { key: 'cognitiveReadiness', label: 'Cognitive Readiness', value: scores.cognitiveReadiness, description: 'Analytical thinking ability' },
    { key: 'abilityToLearn', label: 'Learning Agility', value: scores.abilityToLearn, description: 'Capacity to acquire new knowledge' },
    { key: 'realWorldAlignment', label: 'Career Alignment', value: scores.realWorldAlignment, description: 'Understanding of real-world applications' }
  ];

  const nextSteps = [
    "Refresh fundamentals in quantum mechanics and materials science",
    "Practice programming with Python/MATLAB in nanoscience contexts", 
    "Explore virtual labs or simulations of nanoscale systems",
    "Connect with professionals in nanotechnology fields"
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Overall Score Header */}
      <Card className="shadow-soft-lg border-0 bg-gradient-secondary">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-soft-md">
              <recommendation.icon className={`w-6 h-6 text-${recommendation.color}`} />
              <span className="text-2xl font-bold">{overallScore}% Match</span>
            </div>
            <h2 className="text-3xl font-bold">
              Recommendation: <span className={`text-${recommendation.color}`}>{recommendation.decision}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {recommendation.message}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* WISCAR Framework Results */}
      <Card className="shadow-soft-md border-0">
        <CardHeader>
          <CardTitle className="text-2xl">WISCAR Framework Analysis</CardTitle>
          <p className="text-muted-foreground">
            Your readiness across six key dimensions for nanotechnology engineering success
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {wiscarDimensions.map((dimension) => (
            <div key={dimension.key} className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">{dimension.label}</h4>
                  <p className="text-sm text-muted-foreground">{dimension.description}</p>
                </div>
                <span className="text-lg font-bold text-primary">{dimension.value}%</span>
              </div>
              <Progress value={dimension.value} className="h-3" />
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Career Paths */}
        <Card className="shadow-soft-md border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Top Career Roles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {careerRoles.slice(0, 3).map((role, index) => (
              <div key={index} className="p-4 border border-border rounded-lg space-y-2">
                <h4 className="font-semibold">{role.title}</h4>
                <p className="text-sm text-muted-foreground">{role.description}</p>
                <div className="flex flex-wrap gap-1">
                  {role.requirements.map((req, reqIndex) => (
                    <Badge key={reqIndex} variant="outline" className="text-xs">
                      {req}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skill Development */}
        <Card className="shadow-soft-md border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Skill Development Areas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(skillGaps).map(([skill, info]) => (
              <div key={skill} className="p-4 border border-border rounded-lg space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold capitalize">{skill.replace('_', ' ')}</h4>
                  <Badge variant="secondary">{info.required}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Next Steps */}
      <Card className="shadow-soft-md border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Recommended Next Steps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold mt-0.5">
                  {index + 1}
                </div>
                <span className="flex-1">{step}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="text-center space-y-4">
        <Button 
          onClick={onRestart}
          size="lg"
          variant="outline"
          className="px-8 py-4 text-lg"
        >
          Take Assessment Again
        </Button>
        <p className="text-sm text-muted-foreground">
          Share your results or explore more career assessments
        </p>
      </div>
    </div>
  );
};