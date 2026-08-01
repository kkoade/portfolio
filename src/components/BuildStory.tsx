import type { BuildStory as BuildStoryData } from "@/data/content";

export function BuildStory({ story }: { story: BuildStoryData }) {
  return (
    <div className="mt-6 space-y-6">
      <div className="space-y-1.5">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          What it solves
        </p>
        <p className="max-w-2xl text-foreground">{story.problem}</p>
      </div>

      <div className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-flag">
          How I solved it
        </p>
        <div className="space-y-4">
          {story.bigPicture.map((item) => (
            <div key={item.title} className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-none rounded-[2px] bg-accent-flag" />
              <div>
                <p className="font-display text-lg italic leading-snug">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <details className="group overflow-hidden rounded-lg border border-tech-purple-border bg-tech-purple-soft/50 open:bg-tech-purple-soft transition-colors duration-300">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 select-none">
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-tech-purple">
            <span aria-hidden="true">{"//"}</span>
            Nitty gritty
            <span className="text-tech-purple/60">({story.nittyGritty.length} decisions)</span>
          </span>
          <span className="font-mono text-[10px] text-tech-purple/70 transition-transform duration-200 group-open:rotate-90">
            ▸
          </span>
        </summary>
        <div className="space-y-4 border-t border-tech-purple-border px-4 py-4 font-mono">
          {story.nittyGritty.map((item) => (
            <div key={item.title}>
              <p className="text-xs text-tech-purple">
                <span aria-hidden="true" className="text-tech-purple/50">
                  ${" "}
                </span>
                {item.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}
