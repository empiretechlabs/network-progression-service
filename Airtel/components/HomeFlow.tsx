"use client";

import Progression from "@/components/Progression";
import ShortLanding from "@/components/ShortLanding";
import SplashReveal from "@/components/SplashReveal";
import { brand } from "@/lib/brand";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomeFlow() {
  const searchParams = useSearchParams();
  const replay = searchParams.get("start") === "progression";
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    if (replay) {
      setShowLanding(false);
    }
  }, [replay]);

  if (showLanding) {
    return <ShortLanding />;
  }

  return (
    <SplashReveal name={brand.name} color={brand.color}>
      <Progression onComplete={() => setShowLanding(true)} />
    </SplashReveal>
  );
}