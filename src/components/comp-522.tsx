import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper"
import { useState, useEffect } from "react"
import confetti from 'canvas-confetti'
import { CircleCheck, Info } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: "Analyze",
    description: "Define problem & constraints",
  },
  {
    step: 2,
    title: "Design",
    description: "Create solution strategy",
  },
  {
    step: 3,
    title: "Code",
    description: "Implement & optimize",
  },
  {
    step: 4,
    title: "Deploy",
    description: "Test & deliver solution",
  },
]

export default function Timeline({ onConfetti }: { onConfetti?: () => void }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [hasTriggeredConfetti, setHasTriggeredConfetti] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [islandExpanded, setIslandExpanded] = useState(false)
  const [showProblemStatement, setShowProblemStatement] = useState(false)

  const problemStatement = "Optimizing data processing pipeline for analytics"
  
  const isAllCompleted = completedSteps.length === steps.length

  // Expand island on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIslandExpanded(true)
      // Show problem statement after island fully expands (700ms duration + small buffer)
      setTimeout(() => {
        setShowProblemStatement(true)
      }, 750) // Wait for island expansion to complete (700ms) + 50ms buffer
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  const triggerConfetti = () => {
    if (onConfetti) {
      onConfetti()
    } else {
      // Fallback to global confetti if no callback provided
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3']
      })
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev <= steps.length) {
          setCompletedSteps(prevCompleted => {
            if (prev <= steps.length && !prevCompleted.includes(prev)) {
              return [...prevCompleted, prev]
            }
            return prevCompleted
          })
          return prev + 1
        }
        return prev
      })
    }, 2000) // Complete each step every 2 seconds

    return () => clearInterval(timer)
  }, [])

  // Trigger confetti when all steps are completed
  useEffect(() => {
    if (completedSteps.length === steps.length && !hasTriggeredConfetti) {
      setTimeout(() => {
        triggerConfetti()
        setHasTriggeredConfetti(true)
        // Show success message after confetti
        setTimeout(() => {
          setShowSuccessMessage(true)
        }, 800)
      }, 500) // Small delay to let the final step animation complete
    }
  }, [completedSteps, hasTriggeredConfetti])

  return (
    <div className="space-y-8 text-center">
      {/* Dynamic Island */}
      <div className={`mx-auto mb-16 rounded-full header-style !border-none backdrop-blur-sm px-2 md:px-3 py-2 md:py-3 h-10 md:h-12 flex items-center justify-center transition-all duration-700 ease-out ${
        islandExpanded ? 'w-[340px] md:w-[440px] opacity-100' : 'w-16 opacity-0'
      }`}>
        <div className={`flex items-center justify-center space-x-2 md:space-x-3 transition-opacity duration-500 ${
          showProblemStatement ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
            isAllCompleted ? 'bg-green-400' : 'bg-blue-400 animate-pulse'
          }`} /> */}
          <Info className="text-yellow-400 size-4 flex-shrink-0" />
          <p className="text-white text-[12px] md:text-sm font-light leading-tight whitespace-nowrap overflow-hidden">
            {problemStatement}
          </p>
        </div>
      </div>

      <Stepper value={currentStep}>
        {steps.map(({ step, title, description }) => (
          <StepperItem
            key={step}
            step={step}
            completed={completedSteps.includes(step)}
            loading={currentStep === step && !completedSteps.includes(step)}
            className="relative flex-1 flex-col! transition-all duration-500"
          >
            <StepperTrigger className="flex-col gap-3 rounded transition-all duration-300">
              <StepperIndicator />
              <div className="space-y-1 px-3">
                <StepperTitle className="text-[12px] md:text-sm font-semibold tracking-wide text-white">
                  {title}
                </StepperTitle>
                <StepperDescription className="max-sm:hidden text-xs text-[#fff9] font-normal">
                  {description}
                </StepperDescription>
              </div>
            </StepperTrigger>
            {step < steps.length && (
              <StepperSeparator className="absolute inset-x-0 top-3 left-[calc(50%+0.75rem+0.125rem)] -order-1 m-0 -translate-y-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none transition-all duration-500" />
            )}
          </StepperItem>
        ))}
      </Stepper>
      
      {/* Success Message with Custom Entrance Animation */}
      <div className={`relative h-8 overflow-hidden w-[260px] mx-auto flex items-center justify-center success-message ${
        showSuccessMessage 
          ? 'success-entrance' 
          : 'opacity-0'
      }`}>
        <style jsx>{`
          @keyframes successEntrance {
            0% {
              opacity: 0;
              transform: translate(10px, 10px) scale(.9);
            }
            100% {
              opacity: 1;
              transform: translate(0) scale(1);
            }
          }
          .success-entrance {
            animation: successEntrance 0.7s ease-out forwards;
          }
        `}</style>
        <p
          className="absolute flex items-center justify-center gap-2 w-full"
          role="region"
          aria-live="polite"
        >
          <CircleCheck className="size-5 text-green-600"/> Solution deployed successfully! 🎉
        </p>
      </div>
    </div>
  )
}
