import { caseStudies } from "../content";
import CaseStudyCard from "./CaseStudyCard";

export default function FeaturedWork() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h2 className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
        Featured work
      </h2>
      <p className="mt-3 max-w-xl text-ink-soft">
        Three projects, shipped and live. What the problem was, what I built, and where you
        can see it.
      </p>
      <div>
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.id} study={study} reversed={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
