export function MediaPlaceholder({
  label,
  aspect = "aspect-video",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div
      className={`${aspect} w-full rounded-lg border border-dashed border-faint bg-card flex items-center justify-center`}
    >
      <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
