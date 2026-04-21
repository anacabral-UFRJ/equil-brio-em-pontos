import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "emergency" | "ghost";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg",
  secondary:
    "bg-secondary text-white hover:bg-secondary/90 shadow-md hover:shadow-lg",
  emergency: "bg-danger text-white hover:bg-danger/90 shadow-md",
  ghost:
    "bg-transparent text-primary hover:bg-primary-50 border border-primary/10",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-200 cursor-pointer";
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
