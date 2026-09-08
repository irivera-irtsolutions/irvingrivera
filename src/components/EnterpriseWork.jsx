// Facts here come strictly from the resume (public at /resume.pdf) and are
// kept at the same level of generality it uses — no internal specifics.
const points = [
  {
    label: "Team",
    body: "I lead geographically dispersed Agile teams, splitting my time evenly between hands-on architecture and engineering direction. I also lead AI adoption across the team.",
  },
  {
    label: "Modernization",
    body: "We're moving legacy VB.NET systems onto Java and Spring Boot.",
  },
  {
    label: "Payments",
    body: "I work on Pay.gov payment processing and reconciliation, including the validation and audit controls that prevent duplicate payments and hold up to regulatory review.",
  },
  {
    label: "Distributed systems",
    body: "Payment transactions run through Kafka consumers using the Saga pattern. I write KQL against Azure Data Explorer to monitor that pipeline, feeding Power BI reporting.",
  },
];

export default function EnterpriseWork() {
  return (
    <section id="enterprise" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h2 className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
        Enterprise work
      </h2>
      <div className="mt-8 border-t border-line pt-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <div>
            <p className="font-display text-xl font-medium text-ink md:text-2xl">
              Managing Software Engineer, Allstate
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">
              Claims Technology Services
            </p>
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-ink-soft">
            2020 &ndash; present
          </p>
        </div>

        <dl className="mt-8 grid gap-x-12 gap-y-6 md:grid-cols-2">
          {points.map((point) => (
            <div key={point.label}>
              <dt className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                {point.label}
              </dt>
              <dd className="mt-2 leading-relaxed text-ink">{point.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
