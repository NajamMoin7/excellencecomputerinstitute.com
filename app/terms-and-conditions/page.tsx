import { FiFileText } from "react-icons/fi";
import { Breadcrumb } from "../components/Breadcrumb";
import { CTASection } from "../components/CTASection";
import { FAQJsonLd } from "../components/FAQJsonLd";
import { FAQSection } from "../components/FAQSection";
import { faqs } from "../lib/faqs";
import { createMetadata } from "../lib/seo";
import { classSchedule, site } from "../lib/site";

export const metadata = createMetadata({
  title: "Terms and Conditions",
  description:
    "Read the Terms and Conditions for Excellence Computer Institute, including admission enquiries, course fee details, class timing availability, attendance, discipline and completion policy.",
  path: "/terms-and-conditions",
  keywords: ["Computer Institute in Malir Karachi", "Excellence Computer Institute Courses"],
});

const terms = [
  {
    title: "Admission Enquiry Terms",
    text: "Submitting an enquiry does not guarantee admission. Our team may contact students or parents to discuss course suitability, class timing, batch availability, and admission requirements.",
  },
  {
    title: "Course Fee Note",
    text: site.feeNote,
  },
  {
    title: "Class Timing Availability",
    text: `${classSchedule.conduct} Batch options include Monday, Wednesday, Friday or Tuesday, Thursday, Saturday. Timing slots are subject to availability.`,
  },
  {
    title: "Attendance and Discipline",
    text: "Students are expected to attend classes regularly, follow institute discipline, respect instructors and classmates, and complete assignments or practice work on time.",
  },
  {
    title: "Course Duration",
    text: "Course duration may vary by course level, batch plan, public holidays, student progress, or institute schedule updates.",
  },
  {
    title: "Certificate and Completion Policy",
    text: "Certificate or completion recognition may depend on attendance, assignment completion, class performance, final project work, and applicable institute requirements.",
  },
  {
    title: "Website Usage",
    text: "Website content is provided for course information and admission guidance. Users should not misuse forms, copy content without permission, or submit false information.",
  },
  {
    title: "Changes to Courses or Schedule",
    text: "Excellence Computer Institute may update courses, modules, durations, fees, instructors, batch days, or class schedules when required.",
  },
  {
    title: "Contact Details",
    text: `For questions about these terms, contact ${site.name} at ${site.address}, call ${site.phone}, or email ${site.email}.`,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main>
      <FAQJsonLd items={faqs.slice(0, 8)} />
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl" data-aos="fade-up">
          <Breadcrumb
            light
            items={[
              { label: "Home", href: "/" },
              { label: "Terms and Conditions" },
            ]}
          />
          <FiFileText className="text-sky-300" size={36} aria-hidden />
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Terms and Conditions
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            These terms explain admission enquiry expectations, course timing
            availability, discipline, course duration, completion policy, and
            website usage for {site.name}.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl items-stretch gap-5">
          {terms.map((term) => (
            <article key={term.title} className="card-hover flex h-full flex-col rounded-[8px] border border-blue-100 bg-white p-6 shadow-lg shadow-blue-950/5" data-aos="fade-up">
              <h2 className="text-xl font-black text-slate-950">{term.title}</h2>
              <p className="mt-3 flex-1 leading-8 text-slate-600">{term.text}</p>
            </article>
          ))}
        </div>
      </section>

      <FAQSection items={faqs} limit={8} />

      <CTASection />
    </main>
  );
}
