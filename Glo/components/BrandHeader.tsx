import Image from "next/image";

type BrandHeaderProps = {
  name: string;
  color: string;
};

export default function BrandHeader({ name, color }: BrandHeaderProps) {
  return (
    <header className="brand-header">
      <Image
        className="brand-logo"
        src="/logo.svg"
        alt={`${name} logo`}
        width={120}
        height={40}
        priority
      />
      <span className="brand-name" style={{ color }}>
        {name}
      </span>
    </header>
  );
}