export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-center font-mono text-xs text-ink-soft md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} Irving Rivera</p>
        <a href="#top" className="underline decoration-line decoration-2 underline-offset-4 hover:text-accent hover:decoration-accent">
          Back to top
        </a>
      </div>
    </footer>
  );
}
