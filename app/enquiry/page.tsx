import EnquiryForm from "@/components/EnquiryForm";

export default function EnquiryPage() {
  return (
    <div className="container-page py-16 sm:py-24 max-w-3xl">
      <span className="eyebrow">Get a Quote</span>
      <h1 className="text-4xl sm:text-5xl mt-3 mb-4">Send an Enquiry</h1>
      <p className="text-ink-soft mb-12">
        Tell us about your event and we&apos;ll build a personalized menu and
        quote — usually within 24 hours.
      </p>
      <EnquiryForm />
    </div>
  );
}