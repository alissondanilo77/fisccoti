import * as React from "react";

import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "h-12 w-full rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-4 text-sm text-[var(--foreground)] placeholder:text-[rgba(229,231,235,0.62)] outline-none transition",
        "focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--ring)]",
        "hover:border-[rgba(0,166,81,0.35)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}

      {...props}
    />
  );
}

