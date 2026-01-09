"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
}

let notifications = [
  {
    name: "Model Evaluation Completed",
    description: "Random Forest achieved 94.2% accuracy on malicious URL detection",
  },
  {
    name: "Real-time Threat Detected",
    description: "Live test flagged a phishing URL (Precision: 96%)",
  },
  {
    name: "Dataset Augmented",
    description: "5,000 labeled URLs added for training (Benign & Malicious)",
  },
  {
    name: "Model Comparison Results",
    description: "XGBoost outperformed SVM and RF on F1-score",
  },
];


notifications = Array.from({ length: 1.5 }, () => notifications).flat();

const Notification = ({ name, description }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] overflow-hidden rounded-2xl p-2 md:p-4",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-col overflow-hidden">
        <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
          <span className="text-[12px] sm:text-lg">{name}</span>
        </figcaption>
        <p className="text-[10px] md:text-sm font-normal dark:text-white/60">
          {description}
        </p>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-0 md:p-2",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
