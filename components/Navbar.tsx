"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/entender", label: "Entender" },
  { href: "/conhecer", label: "Conhecer" },
  { href: "/praticar", label: "Praticar" },
  { href: "/integrar", label: "Integrar" },
  { href: "/chat", label: "Chat" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-primary/6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="text-lg font-semibold text-primary tracking-tight">
              Equilíbrio em Pontos
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "bg-primary text-white shadow-md"
                    : "text-text-secondary hover:bg-primary-50 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/emergencia"
              className="ml-2 px-4 py-2 rounded-xl text-sm font-medium bg-danger/10 text-danger hover:bg-danger/20 transition-all flex items-center gap-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-danger" />
              </span>
              Emergência
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl text-text-secondary hover:bg-primary-50 transition-colors"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-1 animate-[fade-in-up_0.2s_ease]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "bg-primary text-white"
                    : "text-text-secondary hover:bg-primary-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/emergencia"
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium bg-danger/10 text-danger"
            >
              🚨 Emergência
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
