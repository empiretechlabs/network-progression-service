"use client";

import { useEffect, useRef, useState } from "react";
import BrandHeader from "@/components/BrandHeader";

const WORDS = ["Unreliable", "Negligent", "Scam", "Glo"] as const;

const MOTION_PATH = `M -50 190
                   C 120 190, 150 30, 300 110
                   S 520 220, 650 100
                   S 850 30, 900 120`;

const FINAL_WORD = WORDS[WORDS.length - 1];

type ProgressionProps = {
  onComplete?: () => void;
};

export default function Progression({ onComplete }: ProgressionProps) {
  const [word, setWord] = useState<(typeof WORDS)[number]>("Unreliable");
  const [visible, setVisible] = useState(false);
  const indexRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    const transition = () => {
      setVisible(false);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        const current = WORDS[indexRef.current];
        setWord(current);
        indexRef.current = (indexRef.current + 1) % WORDS.length;
        setVisible(true);
      }, 600);
    };

    transition();
    intervalRef.current = setInterval(transition, 1750);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (!onComplete || completedRef.current) return;
    if (word !== FINAL_WORD || !visible) return;

    const doneTimer = setTimeout(() => {
      completedRef.current = true;
      if (intervalRef.current) clearInterval(intervalRef.current);
      onComplete();
    }, 1800);

    return () => clearTimeout(doneTimer);
  }, [word, visible, onComplete]);

  const isGlo = word === "Glo";

  return (
    <div className="page">
      <BrandHeader name="Glo" color="#45b649" />
    <div className="container">
      <div className="stage">
        <svg viewBox="0 0 800 240" preserveAspectRatio="none">
          <path id="motionPath" className="path" d={MOTION_PATH} />
          <circle r="7" className="dot">
            <animateMotion
              dur="7s"
              repeatCount="indefinite"
              path={MOTION_PATH}
            />
          </circle>
        </svg>

        <div
          className={`word${visible ? " show" : ""}${isGlo ? " glo" : ""}`}
        >
          {word}
        </div>
      </div>

      <div className="caption" id="caption">
        The Suffering Network...
      </div>

      <div className="progress">
        <span />
      </div>
    </div>
    </div>
  );
}