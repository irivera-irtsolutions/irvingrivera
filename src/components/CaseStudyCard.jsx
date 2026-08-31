import ScreenshotPlaceholder from "./ScreenshotPlaceholder";

export default function CaseStudyCard({ study, reversed }) {
  return (
    <article className="grid items-center gap-8 border-t border-line py-12 md:grid-cols-2 md:gap-12 md:py-16">
      <div className={reversed ? "md:order-2" : undefined}>
        <ScreenshotPlaceholder label={study.screenshotNote} />
      </div>
      <div className={reversed ? "md:order-1" : undefined}>
        <p className="font-mono text-xs uppercase tracking-wider text-accent">{study.tag}</p>
        <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
          {study.name}
        </h3>
        <p className="mt-4 leading-relaxed text-ink-soft">{study.summary}</p>
        <a
          href={study.url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          {study.urlLabel} →
        </a>
      </div>
    </article>
  );
}
