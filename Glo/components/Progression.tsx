"use client";

import { useEffect, useRef, useState } from "react";
import BrandHeader from "@/components/BrandHeader";

const WORDS = ["Unreliable", "Negligent", "Scam", "Glo"] as const;

const MOTION_PATH = `M -50 190
                   C 120 190, 150 30, 300 110
                   S 520 220, 650 100
                   S 850 30, 900 120`;

export default function Progression() {
  const [word, setWord] = useState<(typeof WORDS)[number]>("Unreliable");
  const [visible, setVisible] = useState(false);
  const indexRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    const interval = setInterval(transition, 1750);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearInterval(interval);
    };
  }, []);

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