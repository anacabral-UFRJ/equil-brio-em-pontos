import Link from "next/link";
import { type ReactNode } from "react";

interface CardProps {
  href?: string;
  icon?: ReactNode;
  title: string;
  description: string;
  badge?: string;
  className?: string;
}

export default function Card({
  href,
  icon,
  title,
  description,
  badge,
  className = "",
}: CardProps) {
  const inner = (
    <>
      {icon && (
        <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-xl shrink-0">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
          {badge && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent">
              {badge}
            </span>
          )}
        </div>
        <p className="text-xs text-text-muted leading-relaxed">{description}</p>
      </div>
      {href && (
        <svg
          className="w-4 h-4 text-text-muted shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </>
  );

  const base = `bg-white rounded-2xl p-4 border border-primary/4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${className}`;

  if (href) {
    return (
      <Link href={href} className={`flex items-center gap-4 ${base}`}>
        {inner}
      </Link>
    );
  }

  return <div className={`flex items-center gap-4 ${base}`}>{inner}</div>;
}
