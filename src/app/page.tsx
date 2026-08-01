import { TimelineFilter } from "@/components/TimelineFilter";
import { NameRotator } from "@/components/NameRotator";
import { nameFonts, timeline } from "@/data/content";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24 space-y-24">
      {/* Hero */}
      <section className="space-y-6">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-flag" />
          Product Manager
        </p>
        <h1 className="text-5xl sm:text-6xl leading-[1.05]">
          <NameRotator name="Khalif Adegeye" fonts={nameFonts} />
        </h1>
        <p className="max-w-xl text-muted-foreground">
          4+ years shipping AI-native products across fintech, developer
          tools, and 0-to-1 ventures. Currently at Capital One. Building{" "}
          <a
            href="#visionary"
            className="text-purple-600 dark:text-purple-400 transition-[text-shadow] duration-300 hover:underline hover:[text-shadow:0_0_12px_theme(colors.purple.500)]"
          >
            Project Visionary
          </a>{" "}
          on nights and weekends.
        </p>
        <div className="flex gap-4 font-mono text-sm">
          <a
            href="mailto:kkoade9@gmail.com"
            className="text-accent transition-[text-shadow] duration-300 hover:underline hover:[text-shadow:0_0_12px_var(--accent)]"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/khalif-adegeye/"
            className="text-accent transition-[text-shadow] duration-300 hover:underline hover:[text-shadow:0_0_12px_var(--accent)]"
          >
            LinkedIn
          </a>
          <a
            href="https://docs.google.com/document/d/1g4s1MSPi29t6EfUA7Wtk3aKsmpk_wZif49VsR5T-Us0/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-[text-shadow] duration-300 hover:underline hover:[text-shadow:0_0_12px_var(--accent)]"
          >
            Resume
          </a>
        </div>
      </section>

      {/* Timeline */}
      <section className="space-y-8">
        <TimelineFilter entries={timeline} />
      </section>

      {/* Footer */}
      <footer className="border-t border-border pt-8 flex items-center justify-between font-mono text-xs text-muted-foreground">
        <span>Khalif Adegeye · 2026</span>
        <div className="flex gap-4">
          <a href="mailto:kkoade9@gmail.com" className="hover:text-accent">
            kkoade9@gmail.com
          </a>
          <a
            href="https://docs.google.com/document/d/1g4s1MSPi29t6EfUA7Wtk3aKsmpk_wZif49VsR5T-Us0/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            Resume
          </a>
        </div>
      </footer>
    </main>
  );
}
