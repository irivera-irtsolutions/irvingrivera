export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <p className="font-mono text-xs uppercase tracking-wider text-accent">
        Managing Software Engineer
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-6xl">
        I lead the teams modernizing insurance claims payments — and ship my own software on
        the side.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
        Ten-plus years in financial and insurance systems. At Allstate I lead distributed
        Agile teams moving legacy claims platforms onto Java and Spring Boot. Through my own
        company, IRT Solutions, I scope and deliver client software end to end.
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
