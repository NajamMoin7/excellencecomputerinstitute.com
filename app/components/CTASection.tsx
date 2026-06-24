import Link from "next/link";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { site } from "../lib/site";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.34),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.88),rgba(2,6,23,1))]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div data-aos="fade-up">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-200">
            Admission Enquiry
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Start learning practical skills that can support your study, job,
            business, or freelancing goals.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">
            Visit our campus in Malir or contact us to choose the right course
            level for your current skills and future plans.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col" data-aos="fade-up">
          <Link
            href="/courses"
            className="gradient-action inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-xl shadow-blue-950/30 transition hover:-translate-y-0.5 hover:text-white hover:shadow-blue-500/30"
          >
            Explore Courses
            <FiArrowRight aria-hidden />
          </Link>
          <a
            href={`tel:${site.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-300/50 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-lg hover:shadow-sky-500/20"
          >
            <FiPhone className="transition hover:scale-110" aria-hidden />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
