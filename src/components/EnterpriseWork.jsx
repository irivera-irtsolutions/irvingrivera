// Facts here come strictly from the resume (public at /resume.pdf) and from
// Irving directly, kept at the same level of generality the resume uses —
// no internal system names or specifics.
const points = [
  {
    label: "Team",
    body: "I lead geographically dispersed Agile teams, splitting my time evenly between hands-on architecture and engineering direction. I manage and mentor developers, including performance management, calibration, and goal setting, and I lead AI adoption across the team.",
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
    body: "Payment transactions run through Kafka consumers using the Saga pattern, with compensating steps when part of a transaction fails.",
  },
  {
    label: "Reliability",
    body: "I lead investigations of production incidents and payment failures, run the root-cause analysis, and drive the long-term fixes.",
  },
  {
    label: "Observability",
    body: "I moved our payment KPI monitoring from Splunk to Fabric and Power BI, consolidating 21 Splunk searches into KQL and DAX with rolling thresholds that track normal volume.",
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
