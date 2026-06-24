import { FiLock } from "react-icons/fi";
import { Breadcrumb } from "../components/Breadcrumb";
import { CTASection } from "../components/CTASection";
import { FAQJsonLd } from "../components/FAQJsonLd";
import { FAQSection } from "../components/FAQSection";
import { faqs } from "../lib/faqs";
import { createMetadata } from "../lib/seo";
import { site } from "../lib/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for Excellence Computer Institute, including how student enquiries, contact form details, course interest data and communication information are collected and protected.",
  path: "/privacy-policy",
  keywords: ["Computer Institute in Malir Karachi", "Excellence Computer Institute Courses"],
});

const sections = [
  {
    title: "Information We Collect",
    text: "We may collect basic information such as name, phone number, email address, course interest, message details, and admission enquiry information when students or parents contact Excellence Computer Institute.",
  },
  {
    title: "How We Use Student and Contact Information",
    text: "Information is used to respond to enquiries, guide students toward suitable courses, share class timing availability, support admission communication, and improve our student services.",
  },
  {
    title: "Course Enquiry Data",
    text: "Course enquiry data helps our team understand interest in English Language, MS Office, Web Development, WordPress, and other practical training programs.",
  },
  {
    title: "Contact Form Data",
    text: "Details submitted through the contact form are used only for communication related to courses, admissions, campus visits, class schedules, and student support.",
  },
  {
    title: "Data Protection",
    text: "We aim to keep student and enquiry information secure, limit unnecessary sharing, and use collected details only for legitimate institute communication and service purposes.",
  },
  {
    title: "Third-Party Services",
    text: "Our website may use third-party tools such as hosting, analytics, maps, WhatsApp links, or communication services. These services may process limited technical or interaction data according to their own policies.",
  },
  {
    title: "Updates to This Policy",
    text: "We may update this Privacy Policy when our website, services, or communication practices change. Updated content will be posted on this page.",
  },
  {
    title: "Contact Details",
    text: `For privacy-related questions, contact ${site.name} at ${site.address}, call ${site.phone}, or email ${site.email}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <FAQJsonLd items={faqs.slice(0, 8)} />
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl" data-aos="fade-up">
          <Breadcrumb
            light
            items={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy" },
            ]}
          />
          <FiLock className="text-sky-300" size={36} aria-hidden />
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            This policy explains how {site.name} handles student enquiries,
            contact information, course interest data, and website communication.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl items-stretch gap-5">
          {sections.map((section) => (
            <article key={section.title} className="card-hover flex h-full flex-col rounded-[8px] border border-blue-100 bg-white p-6 shadow-lg shadow-blue-950/5" data-aos="fade-up">
              <h2 className="text-xl font-black text-slate-950">{section.title}</h2>
              <p className="mt-3 flex-1 leading-8 text-slate-600">{section.text}</p>
            </article>
          ))}
        </div>
      </section>

      <FAQSection items={faqs} limit={8} />

      <CTASection />
    </main>
  );
}
