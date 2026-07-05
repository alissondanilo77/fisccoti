import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = "primary",
  type,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type ?? "button"}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-xl text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-[var(--background)] disabled:opacity-50 disabled:pointer-events-none",
        "transform-gpu",
        "hover:-translate-y-[1px]",
        "bg-clip-padding",
        variant === "primary" &&
          "text-white border border-transparent bg-gradient-to-b from-[#00A651] to-[#009146] shadow-[0_18px_60px_-30px_rgba(0,166,81,0.7)] hover:from-[#009146] hover:to-[#007F3E]",
        variant === "secondary" &&
          "bg-[rgba(0,0,0,0.6)] text-[#FFFFFF] border border-[var(--border)] hover:bg-[rgba(10,10,10,0.7)] hover:border-[rgba(0,166,81,0.35)]",
        variant === "ghost" &&
          "bg-transparent text-[#FFFFFF] border border-[var(--border)] hover:bg-[rgba(229,231,235,0.07)]",
        className
      )}

      {...props}
    />
  );
}

