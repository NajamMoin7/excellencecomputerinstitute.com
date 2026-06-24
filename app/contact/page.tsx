import { FiMapPin, FiMessageCircle } from "react-icons/fi";
import { Breadcrumb } from "../components/Breadcrumb";
import { ContactSection } from "../components/ContactSection";
import { FAQJsonLd } from "../components/FAQJsonLd";
import { FAQSection } from "../components/FAQSection";
import { HeroVisual } from "../components/HeroVisual";
import { faqs } from "../lib/faqs";
import { createMetadata } from "../lib/seo";
import { site } from "../lib/site";

export const metadata = createMetadata({
  title: "Contact Excellence Computer Institute",
  description:
    "Contact Excellence Computer Institute in B-53 Aleemabad, Malir, Karachi for admissions, course guidance, MS Office, English language and web development course enquiries.",
  path: "/contact",
  keywords: ["Computer Institute in Malir contact", "Computer Courses in Karachi admission"],
});

export default function ContactPage() {
  const shortFaqs = faqs.slice(0, 6);

  return (
    <main>
      <FAQJsonLd items={shortFaqs} />
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div data-aos="fade-up">
            <Breadcrumb
              light
              items={[
                { label: "Home", href: "/" },
                { label: "Contact" },
              ]}
            />
            <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-200">
              Contact Us
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
              Visit our campus or send an admission enquiry.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              We are located at {site.address}. Contact our team to discuss the
              right course for English language, MS Office, web development,
              WordPress, Laravel, React JS, or practical computer training.
            </p>
          </div>
          <HeroVisual type="contact" />
        </div>
      </section>

      <ContactSection />

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div
            className="card-hover group flex min-h-80 items-center justify-center rounded-[8px] border border-blue-100 bg-white p-8 text-center shadow-xl shadow-blue-950/5"
            data-aos="fade-up"
          >
            <div>
              <FiMapPin className="mx-auto text-blue-700 transition duration-300 group-hover:scale-110" size={42} aria-hidden />
              <h2 className="mt-4 text-2xl font-black text-slate-950">
                Google Map Placeholder
              </h2>
              <p className="mx-auto mt-3 max-w-xl leading-8 text-slate-600">
                Embed the official Google Map for {site.address} here after
                confirming the exact map listing.
              </p>
            </div>
          </div>

          <div
            className="card-hover-dark group flex h-full flex-col rounded-[8px] border border-sky-300/20 bg-gradient-to-br from-blue-700 to-slate-950 p-8 text-white shadow-2xl shadow-blue-950/20"
            data-aos="fade-up"
          >
            <FiMessageCircle size={36} className="text-sky-200 transition duration-300 group-hover:scale-110" aria-hidden />
            <h2 className="mt-5 text-3xl font-black tracking-tight">
              Prefer WhatsApp?
            </h2>
            <p className="mt-4 leading-8 text-slate-200">
              Tap below to start an enquiry about course timing, course level,
              admission guidance, or campus visit details.
            </p>
            <a
              href={site.whatsapp}
              className="gradient-action mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-xl shadow-blue-950/30 transition hover:-translate-y-0.5 hover:text-white hover:shadow-blue-500/30"
            >
              <FiMessageCircle aria-hidden />
              WhatsApp CTA
            </a>
            <p className="mt-5 text-sm font-semibold leading-7 text-slate-200">
              {site.feeNote}
            </p>
          </div>
        </div>
      </section>

      <FAQSection items={faqs} short />
    </main>
  );
}
