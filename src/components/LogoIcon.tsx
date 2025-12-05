import Link from "next/link";
import { GiRoastChicken } from "react-icons/gi";

interface LogoIconProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function LogoIcon({
  size = "md",
  className = "",
  href = "/",
  onClick
}: LogoIconProps) {
  // Size configurations
  const sizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10"
  };

  const currentSize = sizes[size];

  const content = (
    <GiRoastChicken
      className={`${currentSize} text-primary transition-all duration-300 hover:text-primary-dark hover:scale-110 ${className}`}
      onClick={onClick}
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}