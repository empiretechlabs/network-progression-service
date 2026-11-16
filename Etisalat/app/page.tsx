import HomeFlow from "@/components/HomeFlow";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeFlow />
    </Suspense>
  );
}