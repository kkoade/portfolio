"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { BuildStory } from "@/components/BuildStory";
import { CaseStudyBeats } from "@/components/CaseStudyBeats";
import { RoleRotator } from "@/components/RoleRotator";
import {
  bioPrefix,
  bioRoles,
  bioSentenceEnd,
  bioSentenceDriveStart,
  bioSentenceDriveHighlight,
  bioSentenceDriveEnd,
  bioSentencePassion,
  bioSteps,
  bioSuffix,
  education,
  skills,
  type EntryCategory,
  type TimelineEntry,
} from "@/data/content";

type FilterKey = "Me" | EntryCategory;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "Me", label: "Me" },
  { key: "Work", label: "My Work" },
  { key: "Project", label: "My Projects" },
];

function FilterToggle({
  label,
  count,
  active,
  onToggle,
}: {
  label: string;
  count?: number;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={active}
      className={`flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${
        active
          ? "border-accent-flag bg-accent-flag text-background font-semibold"
          : "border-border text-muted-foreground font-medium hover:border-accent-flag/50 hover:text-foreground"
      }`}
    >
      <span>[{active ? "×" : " "}]</span>
      {label}
      {count !== undefined && <span className="opacity-70">({count})</span>}
    </button>
  );
}

export function TimelineFilter({ entries }: { entries: TimelineEntry[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("Me");

  const counts = useMemo(
    () => ({
      Work: entries.filter((e) => e.category === "Work").length,
      Project: entries.filter((e) => e.category === "Project").length,
    }),
    [entries]
  );

  const visible = entries.filter((e) => e.category === activeFilter);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const target = entries.find((e) => e.id === hash);
    if (!target) return;
    setActiveFilter(target.category);
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [entries]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 border-b border-border pb-6">
        {FILTERS.map(({ key, label }) => (
          <FilterToggle
            key={key}
            label={label}
            count={key === "Me" ? undefined : counts[key as EntryCategory]}
            active={activeFilter === key}
            onToggle={() => setActiveFilter(key)}
          />
        ))}
      </div>

      {activeFilter === "Me" && (
        <div className="space-y-10 border-b border-border pb-8">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-accent-flag">
              New York, NY
            </p>
            <p className="max-w-xl text-muted-foreground">
              {bioPrefix}
              <RoleRotator words={bioRoles} />
              {bioSentenceEnd}
              <br />
              <br />
              {bioSentenceDriveStart}
              <span className="text-foreground underline decoration-accent-flag">{bioSentenceDriveHighlight}</span>
              {bioSentenceDriveEnd}
              <br />
              <br />
              {bioSentencePassion}
              <RoleRotator words={bioSteps} />
              {bioSuffix}
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Education
            </p>
            {education.map((entry) => {
              const [credentialMain, credentialNote] = entry.credential.split(" — ");
              return (
                <div key={entry.school} className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="font-display text-xl">{entry.school}</p>
                    <p className="text-sm text-muted-foreground">
                      {credentialMain}
                      {credentialNote && (
                        <>
                          <br />
                          {credentialNote}
                        </>
                      )}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                    {entry.dates}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Skills
            </p>
            <div className="space-y-4">
              {skills.map((group) => (
                <div key={group.label} className="space-y-2">
                  <span className="text-sm text-muted-foreground">{group.label}</span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="space-y-8">
        {visible.map((entry, i) => (
          <article
            key={entry.id}
            id={entry.id}
            className={`space-y-2 ${
              i < visible.length - 1 ? "border-b border-border pb-8" : ""
            }`}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl">{entry.company}</h3>
              <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                {entry.dates}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{entry.role}</p>
            {entry.bullets.length > 0 && (
              <ul className="list-disc list-inside text-sm space-y-1 pt-2">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}

            {entry.featured && (
              <div className="mt-6 space-y-4 rounded-lg border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-[0_0_48px_-18px_var(--tech-purple)]">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent-flag">
                    Featured
                  </span>
                  <a
                    href={entry.featured.demoUrl}
                    className="font-mono text-xs font-bold text-tech-purple transition-[text-shadow] duration-300 hover:underline hover:[text-shadow:0_0_12px_var(--tech-purple)]"
                  >
                    {entry.featured.demoLabel} →
                  </a>
                </div>
                <p className="text-muted-foreground">{entry.featured.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {entry.featured.screenshots.map((shot) => (
                    <div
                      key={shot.label}
                      className="relative aspect-square w-full overflow-hidden rounded-lg border border-faint bg-card"
                    >
                      <Image
                        src={shot.src}
                        alt={shot.label}
                        fill
                        className="object-cover object-top"
                        sizes="(min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {entry.caseStudy && (
              <div className="mt-6 rounded-lg border border-border bg-card overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_48px_-18px_var(--accent-flag)]">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {entry.company} · {entry.caseStudy.subtitle}
                  </p>
                  <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span className="text-accent-flag">▓▓▓</span>
                    Specifics redacted for public sharing
                  </p>
                </div>

                <div className="px-6 pt-6">
                  <p className="font-display text-3xl sm:text-4xl">{entry.caseStudy.stat}</p>
                </div>

                <div className="px-6 py-6 pb-6">
                  <CaseStudyBeats beats={entry.caseStudy.beats} />
                </div>
              </div>
            )}

            {entry.buildStory && <BuildStory story={entry.buildStory} />}
          </article>
        ))}
      </div>
    </div>
  );
}
