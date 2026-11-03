export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <p className="font-mono text-xs uppercase tracking-wider text-accent">
        Managing Software Engineer
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-6xl">
        I lead engineering teams modernizing enterprise systems — and I still build software
        myself.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
        Ten-plus years building software for large financial and insurance companies. I lead
        distributed teams on legacy modernization and payments work, and I build independent
        projects and client sites end to end.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="bg-ink px-5 py-3 font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:bg-accent"
        >
          See the work
        </a>
        <a
          href="/resume.pdf"
          download="Irving Rivera Resume.pdf"
          className="border border-ink px-5 py-3 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Download resume
        </a>
      </div>
    </section>
  );
}
