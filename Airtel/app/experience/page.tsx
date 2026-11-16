import Progression from "@/components/Progression";
import SplashReveal from "@/components/SplashReveal";
import { brand } from "@/lib/brand";

export default function ExperiencePage() {
  return (
    <SplashReveal name={brand.name} color={brand.color}>
      <Progression />
    </SplashReveal>
  );
}