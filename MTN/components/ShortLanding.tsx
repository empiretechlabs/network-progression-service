import BrandHeader from "@/components/BrandHeader";
import { brand } from "@/lib/brand";
import Link from "next/link";

export default function ShortLanding() {
  const accent: string =
    "accent" in brand && typeof brand.accent === "string"
      ? brand.accent
      : brand.color;

  return (
    <div className="landing">
      <BrandHeader name={brand.name} color={brand.color} />

      <section className="landing-hero" style={{ background: brand.softBg }}>
        <p className="landing-kicker" style={{ color: brand.color }}>
          {brand.name} Nigeria
        </p>
        <h1 className="landing-title" style={{ color: accent }}>
          {brand.heroTitle}
        </h1>
        <p className="landing-lead">{brand.heroText}</p>
        <Link
          href="/#services"
          className="landing-cta"
          style={{
            background: brand.color,
            color: brand.onColor,
          }}
        >
          Continue
        </Link>
      </section>

      <section className="landing-actions" id="services">
        {brand.actions.map((action) => (
          <article
            key={action.title}
            className="landing-card"
            style={{ borderColor: brand.trackBg }}
          >
            <h3 style={{ color: brand.color }}>{action.title}</h3>
            <p>{action.desc}</p>
          </article>
        ))}
      </section>

      <aside
        className="landing-promo"
        style={{
          background: brand.color,
          color: brand.onColor,
        }}
      >
        {brand.promo}
      </aside>

      <footer className="landing-foot">
        <Link href="/?start=progression" className="landing-foot-link">
          Network status
        </Link>
        <span>·</span>
        <Link href="#" className="landing-foot-link">
          Privacy
        </Link>
        <span>·</span>
        <Link href="#" className="landing-foot-link">
          Terms
        </Link>
      </footer>
    </div>
  );
}