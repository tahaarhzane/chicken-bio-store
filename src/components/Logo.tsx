import Link from "next/link";
import { GiRoastChicken } from "react-icons/gi";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
  href?: string;
  containerClassName?: string;
}

export default function Logo({
  size = "md",
  showText = true,
  className = "",
  href = "/",
  containerClassName = ""
}: LogoProps) {
  // Size configurations
  const sizes = {
    sm: {
      container: "w-8 h-8",
      icon: "w-5 h-5",
      text: "text-lg",
      gap: "space-x-1"
    },
    md: {
      container: "w-10 h-10",
      icon: "w-6 h-6",
      text: "text-xl",
      gap: "space-x-2"
    },
    lg: {
      container: "w-12 h-12",
      icon: "w-7 h-7",
      text: "text-2xl",
      gap: "space-x-3"
    }
  };

  const currentSize = sizes[size];

  return (
    <Link
      href={href}
      className={`flex items-center ${currentSize.gap} group ${containerClassName}`}
    >
      <div className={`bg-primary rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden ${currentSize.container} ${
        "hover:scale-110 hover:shadow-lg"
      } ${className}`}>
        <GiRoastChicken
          className={`${currentSize.icon} text-white transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-100`}
        />
      </div>
      {showText && (
        <span className={`font-bold transition-all duration-500 group-hover:text-primary ${currentSize.text}`}>
          BioChicken
        </span>
      )}
    </Link>
  );
}