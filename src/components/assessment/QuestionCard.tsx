import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/assessmentData";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  currentAnswer?: number | string;
  onAnswer: (answer: number | string) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuestionCard = ({
  question,
  currentAnswer,
  onAnswer,
  questionNumber,
  totalQuestions
}: QuestionCardProps) => {
  const renderLikertScale = () => {
    if (!question.scale) return null;
    
    const { min, max, minLabel, maxLabel } = question.scale;
    const options = Array.from({ length: max - min + 1 }, (_, i) => min + i);
    
    return (
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {options.map((value) => (
            <Button
              key={value}
              variant={currentAnswer === value ? "default" : "outline"}
              className={cn(
                "h-12 flex flex-col gap-1 transition-all duration-200",
                currentAnswer === value && "ring-2 ring-primary ring-offset-2"
              )}
              onClick={() => onAnswer(value)}
            >
              <span className="text-lg font-semibold">{value}</span>
            </Button>
          ))}
        </div>
      </div>
    );
  };

  const renderMultipleChoice = () => {
    if (!question.options) return null;
    
    return (
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant={currentAnswer === index ? "default" : "outline"}
            className={cn(
              "w-full text-left justify-start p-4 h-auto min-h-[3rem] transition-all duration-200",
              currentAnswer === index && "ring-2 ring-primary ring-offset-2"
            )}
            onClick={() => onAnswer(index)}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                currentAnswer === index ? "border-primary-foreground bg-primary-foreground" : "border-muted-foreground"
              )}>
                {currentAnswer === index && (
                  <div className="w-2 h-2 rounded-full bg-primary" />
                )}
              </div>
              <span className="flex-1">{option}</span>
            </div>
          </Button>
        ))}
      </div>
    );
  };

  return (
    <Card className="shadow-soft-md border-0 bg-gradient-secondary">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-primary capitalize">
            {question.subcategory.replace('_', ' ')}
          </span>
        </div>
        <CardTitle className="text-xl leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {question.type === 'likert' && renderLikertScale()}
        {question.type === 'multiple-choice' && renderMultipleChoice()}
        {question.type === 'true-false' && renderMultipleChoice()}
      </CardContent>
    </Card>
  );
};