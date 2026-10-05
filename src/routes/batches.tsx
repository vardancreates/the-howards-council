import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionIntro, Action, makeHead } from "@/components/site";
import { batches, whatsapp } from "@/lib/site-data";

export const Route = createFileRoute("/batches")({
  head: () => makeHead("Batches", "Current batch details for language and test preparation courses at The Howard's Council, Meerut.", "/batches"),
  component: BatchesPage,
});

function BatchesPage() {
  const cols = ["Course", "Batch type", "Days", "Timing", "Duration", "Mode", "Availability"];
  return (
    <SiteLayout>
      <SectionIntro eyebrow="Batches" title="Find a batch that fits your day." description="Batch details are being updated. Contact us for current timings and availability." />
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="overflow-x-auto border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-ink text-ink-foreground"><tr>{cols.map((c) => <th key={c} className="p-4 font-bold">{c}</th>)}</tr></thead>
            <tbody>
              {batches.map((b) => (
                <tr key={b.slug} className="border-t">
                  <td className="p-4 font-bold">{b.course}</td>
                  {[b.type, b.days, b.timing, b.duration, b.mode, b.availability].map((v, i) => <td key={i} className="p-4 text-muted-foreground">{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8"><Action href={whatsapp("Hi! What are the current batch timings?")}>Ask about batches</Action></div>
      </section>
    </SiteLayout>
  );
}
