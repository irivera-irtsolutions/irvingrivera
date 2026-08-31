export default function ScreenshotPlaceholder({ label }) {
  return (
    <div className="flex aspect-[16/10] w-full items-center justify-center border border-dashed border-line bg-paper-dim px-6 text-center">
      <p className="font-mono text-xs text-ink-soft">{label}</p>
    </div>
  );
}
