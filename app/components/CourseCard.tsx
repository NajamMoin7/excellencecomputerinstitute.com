import Link from "next/link";
import { FiArrowRight, FiClock } from "react-icons/fi";

type CourseCardProps = {
  title: string;
  duration: string;
  focus?: string;
  modules?: string[];
  href?: string;
};

export function CourseCard({ title, duration, focus, modules, href }: CourseCardProps) {
  const card = (
    <article
      className="card-hover group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-blue-100 bg-white p-6 shadow-xl shadow-blue-950/5"
      data-aos="zoom-in"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-700 via-sky-400 to-cyan-300" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:ring-2 group-hover:ring-inset group-hover:ring-blue-300/40" />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h3 className="min-h-14 text-xl font-black tracking-tight text-slate-950">
          {title}
        </h3>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
          <FiClock className="transition group-hover:scale-110" aria-hidden />
          {duration}
        </span>
      </div>

      <div className="mt-5 flex flex-1 rounded-[8px] bg-slate-50/70 p-4 transition duration-300 group-hover:bg-blue-50/70">
        {focus ? (
          <p className="flex min-h-32 items-center text-sm font-semibold leading-7 text-slate-600">
            {focus}
          </p>
        ) : null}

        {modules ? (
          <ul className="grid w-full auto-rows-fr gap-2 text-sm text-slate-600 sm:grid-cols-2">
            {modules.map((module) => (
              <li key={module} className="flex min-h-11 items-center rounded-full bg-white px-3 py-2 font-semibold shadow-sm shadow-blue-950/5 transition duration-300 group-hover:text-blue-800">
                {module}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-black text-blue-700 transition duration-300 group-hover:text-blue-800">
        {href ? "View course details" : "Admission enquiry"}
        <FiArrowRight className="transition group-hover:translate-x-1" aria-hidden />
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}
