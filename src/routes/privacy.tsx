import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionIntro, makeHead } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => makeHead("Privacy Policy", "How The Howard's Council website handles enquiries and personal information.", "/privacy"),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <SectionIntro eyebrow="Privacy" title="Privacy Policy" />
      <section className="mx-auto max-w-3xl space-y-4 px-5 pb-20 leading-relaxed text-muted-foreground">
        <p>This website does not store the details you enter in enquiry forms. Submitting a form opens WhatsApp with your message prefilled, and you choose whether to send it.</p>
        <p>Information you share with us by WhatsApp or phone is used only to respond to your enquiry.</p>
        <p>[Add full privacy policy reviewed by the institute.]</p>
      </section>
    </SiteLayout>
  );
}
