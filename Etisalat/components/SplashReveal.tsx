"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

type SplashRevealProps = {
  children: ReactNode;
  name: string;
  color: string;
};

const LOADING_MS = 2200;
const REVEAL_MS = 900;

export default function SplashReveal({
  children,
  name,
  color,
}: SplashRevealProps) {
  const [phase, setPhase] = useState<"loading" | "revealing" | "done">(
    "loading",
  );

  useEffect(() => {
    const revealTimer = setTimeout(() => setPhase("revealing"), LOADING_MS);
    const doneTimer = setTimeout(
      () => setPhase("done"),
      LOADING_MS + REVEAL_MS,
    );

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  const brandStyle = { "--brand": color } as CSSProperties;
  const revealing = phase === "revealing";

  return (
    <>
      <div
        className={`main-shell${phase === "done" ? " main-shell--visible" : ""}`}
      >
        {children}
      </div>

      {phase !== "done" && (
        <div
          className={`splash${revealing ? " splash--reveal" : ""}`}
          style={brandStyle}
          aria-busy={!revealing}
          aria-label={`Loading ${name}`}
        >
          <div className="splash-brand">
            <div className="splash-logo-slice">
              <div
                className={`splash-half splash-half--top${revealing ? " is-open" : ""}`}
              >
                <Image
                  src="/logo.svg"
                  alt=""
                  width={140}
                  height={48}
                  className="splash-logo-img"
                  priority
                />
              </div>
              <div
                className={`splash-cut${revealing ? " splash-cut--flash" : ""}`}
              />
              <div
                className={`splash-half splash-half--bottom${revealing ? " is-open" : ""}`}
              >
                <Image
                  src="/logo.svg"
                  alt=""
                  width={140}
                  height={48}
                  className="splash-logo-img"
                  priority
                />
              </div>
            </div>
            <span className="splash-name" style={{ color }}>
              {name}
            </span>
          </div>

          {!revealing && (
            <div className="splash-loader">
              <div className="splash-loader-track">
                <div className="splash-loader-fill" />
              </div>
              <p className="splash-loader-text">Loading</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}