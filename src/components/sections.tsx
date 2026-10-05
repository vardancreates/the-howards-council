import { Link } from "@tanstack/react-router";
import { Action, Eyebrow, SectionTitle, outlineLink } from "@/components/site";
import { phone, roadmap, testComparison, whatsapp } from "@/lib/site-data";

export function TestComparison() {
  const rows = [
    ["Format", "format"],
    ["Skills assessed", "skills"],
    ["Speaking", "speaking"],
    ["Often suits", "suits"],
    ["Common reason to choose it", "reason"],
  ] as const;
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionTitle eyebrow="Which test is right for me?" title="Four tests, four different experiences.">
        No test is easier for everyone. The right choice depends on what your university, employer or authority accepts, and how you prefer to be tested.
      </SectionTitle>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {testComparison.map((t, n) => (
          <article key={t.name} className={`flex flex-col border-t-4 bg-card p-6 shadow-sm ${n % 2 ? "border-secondary" : "border-primary"}`}>
            <h3 className="font-display text-3xl font-extrabold">{t.name}</h3>
            <dl className="mt-5 flex-1 space-y-4 text-sm">
              {rows.map(([label, key]) => (
                <div key={key}><dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</dt><dd className="mt-1 font-medium">{t[key]}</dd></div>
              ))}
            </dl>
            <Link to="/courses/$slug" params={{ slug: t.slug }} className="mt-6 font-bold text-coral-deep">{t.name} course →</Link>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground">General overview only. Always check the official test website and your institution's requirements.</p>
      <div className="mt-8 flex flex-col items-start gap-4 bg-muted p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-xl font-bold">Not sure which test fits you? Talk to us.</p>
        <Action href={whatsapp("Hi! I'm not sure which English test is right for me. Can you help?")}>Talk to us</Action>
      </div>
    </section>
  );
}

export function Roadmap() {
  return (
    <section className="bg-ink px-5 py-20 text-ink-foreground">
      <div className="mx-auto max-w-7xl lg:px-8">
        <Eyebrow>How learning works</Eyebrow>
        <h2 className="max-w-3xl font-display text-3xl font-extrabold md:text-5xl">A clear path from first class to test day.</h2>
        <ol className="mt-12 grid gap-px bg-ink-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
          {roadmap.map(([t, d], i) => (
            <li key={t} className="bg-ink p-7">
              <span className="font-display text-4xl font-extrabold text-secondary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-2xl font-bold">{t}</h3>
              <p className="mt-2 text-ink-foreground/70">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y border-y">
      {items.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
            {f.q}<span className="text-xl text-coral-deep transition-transform group-open:rotate-45" aria-hidden>+</span>
          </summary>
          <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function ContactCta({ title = "Ready to start?", text = "Book a free demo class or ask us anything about courses and batches." }: { title?: string; text?: string }) {
  return (
    <section className="bg-primary px-5 py-16 text-center text-primary-foreground">
      <h2 className="font-display text-4xl font-extrabold md:text-5xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl">{text}</p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <a href={whatsapp("Hi! I'd like to book a free demo class.")} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-ink px-7 font-bold text-ink-foreground">Book on WhatsApp</a>
        <a href={`tel:${phone}`} className="inline-flex h-12 items-center justify-center rounded-sm border-2 border-primary-foreground px-7 font-bold">Call us</a>
      </div>
    </section>
  );
}

export { outlineLink };
