import { faqJsonLd, type FAQ } from "../lib/faqs";

type FAQJsonLdProps = {
  items: FAQ[];
};

export function FAQJsonLd({ items }: FAQJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqJsonLd(items)).replace(/</g, "\\u003c"),
      }}
    />
  );
}
