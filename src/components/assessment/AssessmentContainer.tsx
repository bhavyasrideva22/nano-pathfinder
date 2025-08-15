import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import { AssessmentIntro } from "./AssessmentIntro";
import { QuestionCard } from "./QuestionCard";
import { AssessmentResults } from "./AssessmentResults";
import { assessmentData, Question } from "@/data/assessmentData";
import { ChevronLeft, ChevronRight } from "lucide-react";

type AssessmentState = 'intro' | 'in-progress' | 'results';

interface UserAnswers {
  [questionId: string]: number | string;
}

export const AssessmentContainer = () => {
  const [state, setState] = useState<AssessmentState>('intro');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});

  // Flatten all questions for navigation
  const allQuestions = assessmentData.flatMap(section => 
    section.questions.map(q => ({ ...q, sectionTitle: section.title }))
  );
  
  const currentQuestion = allQuestions[currentQuestionIndex];
  const totalQuestions = allQuestions.length;
  const currentAnswer = answers[currentQuestion?.id];

  const handleStart = useCallback(() => {
    setState('in-progress');
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setAnswers({});
  }, []);

  const handleAnswer = useCallback((answer: number | string) => {
    if (!currentQuestion) return;
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  }, [currentQuestion]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Assessment complete
      setState('results');
    }
  }, [currentQuestionIndex, totalQuestions]);

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const calculateWISCARScores = useCallback(() => {
    // Simple scoring algorithm - in a real app, this would be more sophisticated
    const psychometricAnswers = Object.entries(answers).filter(([id]) => 
      allQuestions.find(q => q.id === id)?.category === 'psychometric'
    );
    
    const technicalAnswers = Object.entries(answers).filter(([id]) => 
      allQuestions.find(q => q.id === id)?.category === 'technical'
    );

    // Calculate averages and convert to 0-100 scale
    const psychScore = psychometricAnswers.length > 0 
      ? (psychometricAnswers.reduce((sum, [, answer]) => sum + Number(answer), 0) / psychometricAnswers.length / 5) * 100
      : 75;

    const techScore = technicalAnswers.length > 0
      ? (technicalAnswers.filter(([id, answer]) => {
          const question = allQuestions.find(q => q.id === id);
          return question?.correctAnswer === answer;
        }).length / technicalAnswers.length) * 100
      : 60;

    return {
      will: Math.min(psychScore + Math.random() * 10 - 5, 100),
      interest: Math.min(psychScore + Math.random() * 10 - 5, 100),
      skill: techScore,
      cognitiveReadiness: Math.min(techScore + 10, 100),
      abilityToLearn: Math.min(psychScore + Math.random() * 15 - 7, 100),
      realWorldAlignment: Math.min((psychScore + techScore) / 2 + Math.random() * 10 - 5, 100)
    };
  }, [answers, allQuestions]);

  const handleRestart = useCallback(() => {
    setState('intro');
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setAnswers({});
  }, []);

  if (state === 'intro') {
    return <AssessmentIntro onStart={handleStart} />;
  }

  if (state === 'results') {
    const scores = calculateWISCARScores();
    return <AssessmentResults scores={scores} onRestart={handleRestart} />;
  }

  if (!currentQuestion) {
    return null;
  }

  const canProceed = currentAnswer !== undefined;
  const progressValue = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header with Progress */}
      <Card className="shadow-soft-md border-0">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{currentQuestion.sectionTitle}</h2>
              <span className="text-sm text-muted-foreground">
                {currentQuestionIndex + 1} of {totalQuestions}
              </span>
            </div>
            <ProgressBar value={progressValue} />
          </div>
        </CardContent>
      </Card>

      {/* Question */}
      <QuestionCard
        question={currentQuestion}
        currentAnswer={currentAnswer}
        onAnswer={handleAnswer}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
      />

      {/* Navigation */}
      <Card className="shadow-soft-md border-0">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex-1 text-center">
              {!canProceed && (
                <p className="text-sm text-muted-foreground">
                  Please select an answer to continue
                </p>
              )}
            </div>

            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="flex items-center gap-2 bg-gradient-primary hover:bg-primary-hover"
            >
              {currentQuestionIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};