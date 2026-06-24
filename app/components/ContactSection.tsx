import { FiMail, FiMapPin, FiMessageCircle, FiPhone } from "react-icons/fi";
import { site } from "../lib/site";

export function ContactSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-aos="fade-up">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
            Contact Us
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Speak with our admission team.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Share your course interest, visit our campus, or enquire by phone.
            Our team can guide you toward the right English, MS Office, or web
            development program.
          </p>
          <div className="mt-8 grid items-stretch gap-4">
            {[
              { icon: FiMapPin, label: "Address", value: site.address },
              { icon: FiPhone, label: "Phone", value: site.phone, href: site.phoneHref },
              { icon: FiMail, label: "Email", value: site.email, href: `mailto:${site.email}` },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon className="mt-1 shrink-0 text-blue-700 transition duration-300 group-hover:scale-110" aria-hidden />
                  <span>
                    <span className="block text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-all font-bold text-slate-950">
                      {item.value}
                    </span>
                  </span>
                </>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="card-hover group flex h-full min-h-24 gap-4 rounded-[8px] border border-slate-200 bg-slate-50 p-5 hover:bg-blue-50"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="card-hover group flex h-full min-h-24 gap-4 rounded-[8px] border border-slate-200 bg-slate-50 p-5 hover:bg-blue-50"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <form
          className="card-hover flex h-full flex-col rounded-[8px] border border-blue-100 bg-slate-50 p-5 shadow-2xl shadow-blue-950/10 sm:p-8"
          data-aos="fade-up"
        >
          <div className="grid items-stretch gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-slate-800">
              Name
              <input
                name="name"
                className="rounded-[8px] border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-800">
              Phone
              <input
                name="phone"
                className="rounded-[8px] border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                placeholder="0339-0023579"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-800">
              Email
              <input
                name="email"
                type="email"
                className="rounded-[8px] border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                placeholder="you@example.com"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-800">
              Course Interest
              <select
                name="course"
                className="rounded-[8px] border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                defaultValue=""
              >
                <option value="" disabled>
                  Select course
                </option>
                <option>English Language</option>
                <option>MS Office</option>
                <option>Web Development</option>
                <option>WordPress Development</option>
              </select>
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-bold text-slate-800">
            Message
            <textarea
              name="message"
              rows={5}
              className="rounded-[8px] border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="Tell us about your learning goal"
            />
          </label>
          <div className="mt-auto pt-6">
            <button
              type="submit"
              className="gradient-action inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-black text-white shadow-xl shadow-blue-700/25 transition hover:-translate-y-0.5 hover:shadow-blue-500/35"
            >
              <FiMessageCircle aria-hidden />
              Submit Enquiry
            </button>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">
              {site.feeNote}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
