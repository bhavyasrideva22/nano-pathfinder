import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
}

export const ProgressBar = ({ 
  value, 
  max = 100, 
  className,
  showLabel = true 
}: ProgressBarProps) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between items-center mb-2">
        {showLabel && (
          <span className="text-sm font-medium text-muted-foreground">
            Progress
          </span>
        )}
        <span className="text-sm font-medium text-primary">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-primary rounded-full transition-all duration-500 ease-smooth"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};