"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setVisible(false);
            onComplete();
          }, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-bg-primary flex items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo animation */}
        <div className="relative animate-pulse-glow rounded-2xl">
          <Image
            src="/logo.png"
            alt="Zytheq"
            width={80}
            height={80}
            className="w-16 h-16 sm:w-20 sm:h-20"
            priority
          />
        </div>

        {/* Progress bar */}
        <div className="w-48 h-[2px] bg-bg-tertiary rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Text morph */}
        <p className="text-xs text-text-muted tracking-[0.3em] uppercase">
          {progress < 30 ? "Initializing" : progress < 60 ? "Loading assets" : progress < 90 ? "Almost there" : "Ready"}
        </p>
      </div>
    </div>
  );
}
