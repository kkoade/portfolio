"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import type { CaseStudyBeat } from "@/data/content";

function withHighlights(text: string, highlights: string[] = []) {
  if (highlights.length === 0) return text;
  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "g"));
  return parts.map((part, i) =>
    highlights.includes(part) ? (
      <mark
        key={i}
        className="rounded-sm bg-accent-flag/15 px-1 font-medium text-foreground"
      >
        {part}
      </mark>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

export function CaseStudyBeats({ beats }: { beats: CaseStudyBeat[] }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setVisibleCount((prev) => Math.max(prev, index + 1));
          }
        }
      },
      { threshold: 0.4 }
    );
    for (const el of refs.current) {
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {beats.map((beat, i) => (
        <div
          key={beat.label}
          ref={(el) => {
            refs.current[i] = el;
          }}
          data-index={i}
          className="group relative pl-6 pb-6 last:pb-0"
        >
          <span
            className={`pointer-events-none absolute -inset-x-4 top-0 rounded-md opacity-0 shadow-[0_0_20px_-5px_var(--accent-flag)] transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-accent-flag/8 ${
              i === beats.length - 1 ? "bottom-0" : "bottom-2"
            }`}
          />
          <span
            className={`absolute left-0 top-1 bottom-0 w-px transition-colors duration-700 ${
              i < visibleCount ? "bg-accent-flag" : "bg-border"
            }`}
          />
          <span
            className={`absolute -left-[3px] top-1 h-[7px] w-[7px] rounded-full transition-all duration-700 group-hover:shadow-[0_0_10px_2px_var(--accent-flag)] ${
              i < visibleCount ? "bg-accent-flag" : "bg-faint"
            }`}
          />
          <p className="relative font-mono text-xs uppercase tracking-widest text-accent-flag">
            {beat.label}
          </p>
          <p className="relative text-sm text-muted-foreground mt-1 transition-colors duration-300 group-hover:text-foreground">
            {withHighlights(beat.text, beat.highlights)}
          </p>
        </div>
      ))}
    </div>
  );
}
