import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ kicker, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {kicker ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(229,231,235,0.35)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-sm text-[var(--muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          {kicker}
        </div>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl leading-tight">{title}</h2>
      {description ? <p className="text-[var(--muted)] leading-7">{description}</p> : null}

    </div>
  );
}

