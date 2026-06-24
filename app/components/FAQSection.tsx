"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FiMinus, FiPhone, FiPlus, FiSearch, FiSend } from "react-icons/fi";
import type { FAQ } from "../lib/faqs";
import { site } from "../lib/site";

type FAQSectionProps = {
  items: FAQ[];
  short?: boolean;
  limit?: number;
};

export function FAQSection({ items, short = false, limit }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const [query, setQuery] = useState("");

  const visibleItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const itemLimit = limit ?? (short ? 6 : items.length);
    const source = items.slice(0, itemLimit);

    if (!normalizedQuery) {
      return source;
    }

    return source.filter((item) =>
      `${item.question} ${item.answer}`.toLowerCase().includes(normalizedQuery),
    );
  }, [items, limit, query, short]);

  return (
    <section className="bg-white px-4 py-24 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Find quick answers about admissions, courses, schedules, and
            training programs.
          </p>
        </div>

        <label className="mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 transition focus-within:border-blue-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100" data-aos="fade-up">
          <FiSearch className="shrink-0 text-blue-700" aria-hidden />
          <span className="sr-only">Search FAQs</span>
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setOpenIndex(0);
            }}
            placeholder="Search questions..."
            className="w-full bg-transparent text-sm font-semibold text-slate-800 outline-none placeholder:text-slate-400"
          />
        </label>

        <div className="mt-8 divide-y divide-slate-200 rounded-[8px] border border-slate-200 bg-white" data-aos="fade-up">
          {visibleItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={`${item.question}-${index}`}
                className="group overflow-hidden transition duration-300 hover:bg-slate-50"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-black text-slate-950">{item.question}</span>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-blue-700 transition duration-300 group-hover:scale-110 group-hover:border-blue-300">
                    {isOpen ? <FiMinus aria-hidden /> : <FiPlus aria-hidden />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm font-semibold leading-8 text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}

          {visibleItems.length === 0 ? (
            <p className="p-6 text-center text-sm font-semibold text-slate-600">
              No FAQ matched your search. Try a course, fee, schedule, or admission keyword.
            </p>
          ) : null}
        </div>

        <div className="card-hover mt-12 rounded-[8px] border border-blue-100 bg-slate-50 p-6 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-black">Still Have Questions?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-7 text-slate-600">
            Contact our team today and we&apos;ll help you choose the right
            course for your future.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="gradient-action inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-black text-white shadow-xl shadow-blue-700/25 transition hover:-translate-y-0.5 hover:shadow-blue-500/35"
            >
              Contact Us
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-black text-blue-800 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50"
            >
              <FiPhone aria-hidden />
              Call Now
            </a>
            <a
              href={site.whatsapp}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-black text-emerald-700 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50"
            >
              <FiSend aria-hidden />
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
