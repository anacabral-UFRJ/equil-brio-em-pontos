"use client";

import Link from "next/link";

export default function EmergencyButton() {
  return (
    <Link
      href="/emergencia"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-danger text-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
      aria-label="Emergência"
    >
      <span className="relative flex h-3 w-3">
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"
          style={{ animationDuration: "1.5s" }}
        />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
      </span>
      <span className="text-sm font-medium hidden sm:inline">Emergência</span>
    </Link>
  );
}
