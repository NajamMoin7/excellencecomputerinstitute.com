import { FiBriefcase, FiCheckCircle } from "react-icons/fi";
import { Breadcrumb } from "../components/Breadcrumb";
import { ClassSchedule } from "../components/ClassSchedule";
import { CourseCard } from "../components/CourseCard";
import { CTASection } from "../components/CTASection";
import { FAQJsonLd } from "../components/FAQJsonLd";
import { FAQSection } from "../components/FAQSection";
import { HeroVisual } from "../components/HeroVisual";
import { SectionHeader } from "../components/SectionHeader";
import { faqs } from "../lib/faqs";
import { createMetadata } from "../lib/seo";
import { careerSupport, courseCategories, site } from "../lib/site";

export const metadata = createMetadata({
  title: "Courses in Malir Karachi",
  description:
    "Explore English language, MS Office, Front End Development, Back End Development, MERN Stack Development, WordPress, Laravel and React JS courses at Excellence Computer Institute.",
  path: "/courses",
  keywords: [
    "MS Office Course in Malir",
    "Web Development Course in Karachi",
    "English Language Course in Malir",
    "WordPress Course in Karachi",
    "Front End Development Course Karachi",
    "MERN Stack Course Karachi",
    "Laravel Course Karachi",
    "React JS Course Karachi",
  ],
});

function getCourseHref(categoryTitle: string, courseTitle: string) {
  if (categoryTitle.includes("English")) {
    const englishCourseSlugs: Record<string, string> = {
      "Excellence English": "excellence-english",
      "Pre Foundation": "pre-foundation",
      Foundation: "foundation",
      "Intermediate Course": "intermediate-course",
      "Advance Intermediate Course": "advance-intermediate-course",
      Elementary: "elementary",
    };

    const slug = englishCourseSlugs[courseTitle];

    if (slug) {
      return `/courses/english-language/${slug}`;
    }

    return "/courses/english-language";
  }

  if (categoryTitle.includes("MS Office")) {
    return "/courses/ms-office";
  }

  if (courseTitle.includes("WordPress")) {
    return "/courses/web-development/wordpress-development";
  }

  if (courseTitle.includes("Front End")) {
    return "/courses/web-development/front-end-development";
  }

  if (courseTitle.includes("Back End")) {
    return "/courses/web-development/back-end-development";
  }

  if (courseTitle.includes("MERN Stack")) {
    return "/courses/web-development/mern-stack-development";
  }

  return "/courses";
}

export default function CoursesPage() {
  return (
    <main>
      <FAQJsonLd items={faqs} />
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div data-aos="fade-up">
            <Breadcrumb
              light
              items={[
                { label: "Home", href: "/" },
                { label: "Courses" },
              ]}
            />
            <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-200">
              Courses
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
              Practical courses for English, office work, and modern web development.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Choose from beginner-friendly and career-focused programs designed
              for students, job seekers, freelancers, business learners, and
              professionals in Karachi.
            </p>
          </div>
          <HeroVisual type="courses" />
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-20">
          {courseCategories.map((category) => (
            <section key={category.title} id={category.title.toLowerCase().replaceAll(" ", "-")}>
              <SectionHeader
                eyebrow="Course Category"
                title={category.title}
                description={category.description}
              />
              <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
                {category.courses.map((course) => (
                  <CourseCard
                    key={course.title}
                    {...course}
                    href={getCourseHref(category.title, course.title)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <ClassSchedule />

      <section className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-aos="fade-up">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-200">
              Career Support
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Training that supports your next step.
            </h2>
            <p className="mt-4 leading-8 text-slate-200">
              Our web development and computer courses connect learning with
              practical output, helping students prepare for portfolios,
              interviews, freelancing, and job profiles.
            </p>
          </div>
          <div className="grid items-stretch gap-4 sm:grid-cols-2">
            {careerSupport.map((item) => (
              <div
                key={item}
                className="card-hover-dark group flex h-full gap-3 rounded-[8px] border border-white/10 bg-white/10 p-5 font-bold text-slate-100 hover:bg-white/15"
                data-aos="zoom-in"
              >
                <FiBriefcase className="mt-1 shrink-0 text-sky-300 transition duration-300 group-hover:scale-110" aria-hidden />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="card-hover group mx-auto flex max-w-7xl gap-3 rounded-[8px] border border-blue-100 bg-blue-50 p-5 text-sm font-bold leading-7 text-blue-950">
          <FiCheckCircle className="mt-1 shrink-0 text-blue-700 transition duration-300 group-hover:scale-110" aria-hidden />
          {site.feeNote}
        </div>
      </section>

      <FAQSection items={faqs} />

      <CTASection />
    </main>
  );
}
