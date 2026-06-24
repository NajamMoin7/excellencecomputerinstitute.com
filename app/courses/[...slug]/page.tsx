import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowRight,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiCode,
  FiUsers,
} from "react-icons/fi";
import { Breadcrumb, type BreadcrumbItem } from "../../components/Breadcrumb";
import { ClassSchedule } from "../../components/ClassSchedule";
import { CTASection } from "../../components/CTASection";
import { FAQJsonLd } from "../../components/FAQJsonLd";
import { FAQSection } from "../../components/FAQSection";
import { HeroVisual, type HeroVisualType } from "../../components/HeroVisual";
import { faqs } from "../../lib/faqs";
import { createMetadata } from "../../lib/seo";
import { coursePages, site } from "../../lib/site";

type CoursePageProps = {
  params: Promise<{ slug: string[] }>;
};

function getCourse(slug: string) {
  return coursePages.find((course) => course.slug === slug);
}

function getHeroVisualType(slug: string): HeroVisualType {
  if (slug.startsWith("english-language")) {
    return "english";
  }

  if (slug === "ms-office") {
    return "ms-office";
  }

  if (slug === "web-development/wordpress-development") {
    return "wordpress";
  }

  if (slug === "web-development/mern-stack-development") {
    return "mern-stack";
  }

  return "web-development";
}

function getBreadcrumbItems(course: { slug: string; navLabel: string }): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
  ];

  if (course.slug === "english-language") {
    return [...items, { label: "English Language" }];
  }

  if (course.slug.startsWith("english-language/")) {
    return [
      ...items,
      { label: "English Language", href: "/courses/english-language" },
      { label: course.navLabel },
    ];
  }

  if (course.slug === "web-development") {
    return [...items, { label: "Web Development" }];
  }

  if (course.slug.startsWith("web-development/")) {
    return [
      ...items,
      { label: "Web Development", href: "/courses/web-development" },
      { label: course.navLabel },
    ];
  }

  return [...items, { label: course.navLabel }];
}

export function generateStaticParams() {
  return coursePages.map((course) => ({ slug: course.slug.split("/") }));
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourse(slug.join("/"));

  if (!course) {
    return createMetadata({
      title: "Course Not Found",
      description: `Explore professional courses at ${site.name} in Malir, Karachi.`,
      path: "/courses",
    });
  }

  return createMetadata({
    title: course.seoTitle,
    description: course.seoDescription,
    path: `/courses/${course.slug}`,
    keywords: course.keywords,
  });
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourse(slug.join("/"));

  if (!course) {
    notFound();
  }

  const isEnglishCourse = course.slug.startsWith("english-language");
  const isWebDevelopmentCourse = course.slug.startsWith("web-development");
  const outcomeItems = course.studentOutcomes ?? course.benefits;

  return (
    <main>
      <FAQJsonLd items={faqs} />
      <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(37,99,235,0.42),transparent_30%),linear-gradient(135deg,rgba(2,6,23,0.96),rgba(15,23,42,1))]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div data-aos="fade-up">
            <Breadcrumb light items={getBreadcrumbItems(course)} />
            <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-200">
              {site.name} Courses
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
              {course.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              {course.overview}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="gradient-action inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-black text-white shadow-xl shadow-blue-700/30 transition hover:-translate-y-0.5 hover:shadow-blue-500/40"
              >
                Admission CTA
                <FiArrowRight aria-hidden />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-300/50 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-lg hover:shadow-sky-500/20"
              >
                Contact Button
              </a>
            </div>
          </div>
          <HeroVisual type={getHeroVisualType(course.slug)} />
        </div>
      </section>

      {course.subCourses ? (
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
                {isEnglishCourse ? "English Courses" : "Web Development Courses"}
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                {isEnglishCourse
                  ? "Choose your English learning level"
                  : "Choose your web development path"}
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                {isEnglishCourse
                  ? "Select the English course that matches your current confidence, grammar level, speaking goal, and future study or career needs."
                  : "Select the web development track that matches your career goal, project interest, and current technical level."}
              </p>
            </div>

            <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
              {course.subCourses.map((item) => (
                <article
                  key={item.href}
                  className="card-hover group flex h-full min-h-[360px] flex-col rounded-[8px] border border-blue-100 bg-slate-50 p-6 text-center shadow-xl shadow-blue-950/5 hover:bg-white"
                  data-aos="fade-up"
                >
                  {isWebDevelopmentCourse ? (
                    <FiCode className="mx-auto text-blue-700 transition duration-300 group-hover:scale-110" size={30} aria-hidden />
                  ) : (
                    <FiBookOpen className="mx-auto text-blue-700 transition duration-300 group-hover:scale-110" size={30} aria-hidden />
                  )}
                  <h2 className="mt-5 text-2xl font-black text-slate-950">{item.title}</h2>
                  <p className="mt-2 text-sm font-black text-blue-700">
                    Duration: {item.duration}
                  </p>
                  <p className="mt-4 flex-1 text-sm font-semibold leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {item.topics.map((topic) => (
                      <span
                        key={topic}
                        className="flex min-h-10 items-center justify-center rounded-full bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm shadow-blue-950/5 transition duration-300 group-hover:text-blue-700"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={item.href}
                    className="gradient-action mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-black text-white shadow-xl shadow-blue-700/20 transition hover:-translate-y-0.5 hover:shadow-blue-500/30"
                  >
                    View Course
                    <FiArrowRight aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {course.roadmap ? (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl" data-aos="fade-up">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
              Course Roadmap
            </p>
            <div className="mt-8 grid items-stretch gap-4 md:grid-cols-4">
              {course.roadmap.map((step, index) => (
                <article
                  key={step}
                  className="card-hover group flex h-full flex-col rounded-[8px] border border-blue-100 bg-slate-50 p-5 hover:bg-white"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-black text-white transition duration-300 group-hover:scale-110">
                    {index + 1}
                  </span>
                  <h2 className="mt-4 text-xl font-black text-slate-950">{step}</h2>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-3">
          <article className="card-hover group flex h-full flex-col rounded-[8px] border border-blue-100 bg-white p-6 shadow-xl shadow-blue-950/5" data-aos="fade-up">
            <FiBookOpen className="text-blue-700 transition duration-300 group-hover:scale-110" size={28} aria-hidden />
            <h2 className="mt-4 text-xl font-black text-slate-950">Course Overview</h2>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{course.overview}</p>
          </article>
          <article className="card-hover group flex h-full flex-col rounded-[8px] border border-blue-100 bg-white p-6 shadow-xl shadow-blue-950/5" data-aos="fade-up">
            <FiClock className="text-blue-700 transition duration-300 group-hover:scale-110" size={28} aria-hidden />
            <h2 className="mt-4 text-xl font-black text-slate-950">Duration</h2>
            <p className="mt-3 text-2xl font-black text-blue-700">{course.duration}</p>
            {course.technologies ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {course.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            ) : null}
            <p className="mt-3 text-sm leading-7 text-slate-600">{site.feeNote}</p>
          </article>
          <article className="card-hover group flex h-full flex-col rounded-[8px] border border-blue-100 bg-white p-6 shadow-xl shadow-blue-950/5" data-aos="fade-up">
            <FiUsers className="text-blue-700 transition duration-300 group-hover:scale-110" size={28} aria-hidden />
            <h2 className="mt-4 text-xl font-black text-slate-950">Who Can Join</h2>
            <ul className="mt-3 space-y-2 text-sm font-semibold text-slate-600">
              {course.whoCanJoin.map((item) => (
                <li key={item} className="flex gap-2">
                  <FiCheckCircle className="mt-1 shrink-0 text-blue-700" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div data-aos="fade-up">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
              What Students Will Learn
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Practical outcomes from day one
            </h2>
            <div className="mt-8 grid auto-rows-fr gap-3">
              {course.learn.map((item) => (
                <div key={item} className="card-hover group flex h-full min-h-24 items-center gap-3 rounded-[8px] border border-transparent bg-white px-4 py-1 font-semibold text-slate-700 shadow-lg shadow-blue-950/5">
                  <FiCheckCircle className="shrink-0 text-blue-700 transition duration-300 group-hover:scale-110" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-up">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
              Course Modules
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              {isEnglishCourse ? "Topics covered" : "Structured module plan"}
            </h2>
            <div className="mt-8 grid auto-rows-fr gap-3 sm:grid-cols-2">
              {course.modules.map((module) => (
                <div key={module} className="card-hover flex min-h-14 items-center justify-center rounded-[8px] border border-blue-100 bg-white px-4 py-3 text-center text-sm font-black text-slate-700 shadow-lg shadow-blue-950/5 hover:text-blue-700">
                  {module}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {course.project ? (
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div
            className="card-hover-dark group mx-auto max-w-7xl rounded-[8px] border border-sky-300/30 bg-slate-950 p-[1px] shadow-2xl shadow-blue-950/20"
            data-aos="fade-up"
          >
            <div className="rounded-[7px] bg-[radial-gradient(circle_at_12%_20%,rgba(37,99,235,0.38),transparent_32%),linear-gradient(135deg,#0f172a,#020617)] p-8 text-white sm:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-sky-100">
                    <FiCode className="transition duration-300 group-hover:scale-110" aria-hidden />
                    Project Highlight
                  </span>
                  <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                    {course.project.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">
                    {course.project.text}
                  </p>
                </div>
                {course.project.highlights ? (
                  <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:w-[420px]">
                    {course.project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="card-hover-dark rounded-[8px] border border-white/10 bg-white/10 px-4 py-3 text-sm font-black text-white hover:bg-white/15"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {course.jobProfile ? (
        <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
                Job Profile
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                {course.jobProfile.title}
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                {course.jobProfile.description}
              </p>
            </div>
            <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-4">
              {[
                ["Career Path", course.jobProfile.careerPath],
                ["Expected Skills", course.jobProfile.expectedSkills.join(", ")],
                ["Industry Role", course.jobProfile.industryRole],
                ["Portfolio Requirement", course.jobProfile.portfolioRequirement],
              ].map(([label, text]) => (
                <article
                  key={label}
                  className="card-hover group flex h-full flex-col rounded-[8px] border border-blue-100 bg-white p-6 shadow-xl shadow-blue-950/5"
                  data-aos="fade-up"
                >
                  <FiBriefcase className="text-blue-700 transition duration-300 group-hover:scale-110" size={26} aria-hidden />
                  <h3 className="mt-4 text-lg font-black text-slate-950">{label}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {course.practicalActivities ? (
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
                Practical Activities
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Practice-based English learning
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Students practice through guided class activities designed to
                improve confidence, clarity, fluency and real communication.
              </p>
            </div>
            <div className="mt-12 grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {course.practicalActivities.map((activity) => (
                <div
                  key={activity}
                  className="card-hover group flex h-full min-h-24 items-center gap-3 rounded-[8px] border border-blue-100 bg-slate-50 p-5 font-bold text-slate-800 hover:bg-white"
                  data-aos="fade-up"
                >
                  <FiCheckCircle className="shrink-0 text-blue-700 transition duration-300 group-hover:scale-110" aria-hidden />
                  {activity}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ClassSchedule />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="card-hover-dark mx-auto max-w-7xl rounded-[8px] border border-sky-300/20 bg-gradient-to-br from-blue-700 to-slate-950 p-8 text-white shadow-2xl shadow-blue-950/20" data-aos="fade-up">
          <FiBriefcase size={34} className="text-sky-200" aria-hidden />
          <h2 className="mt-4 text-3xl font-black tracking-tight">
            {isEnglishCourse ? "Student Outcomes" : "Career Benefits"}
          </h2>
          <div className="mt-6 grid auto-rows-fr gap-4 md:grid-cols-2">
            {outcomeItems.map((benefit) => (
              <div key={benefit} className="card-hover-dark flex h-full min-h-24 items-center rounded-[8px] border border-white/10 bg-white/10 p-4 font-semibold text-slate-100 hover:bg-white/15">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} />

      <CTASection />
    </main>
  );
}
