import Link from "next/link";
import {
  FiArrowRight,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiMonitor,
  FiUsers,
} from "react-icons/fi";
import { ClassSchedule } from "./components/ClassSchedule";
import { CourseCard } from "./components/CourseCard";
import { CTASection } from "./components/CTASection";
import { FAQJsonLd } from "./components/FAQJsonLd";
import { FAQSection } from "./components/FAQSection";
import { HeroVisual } from "./components/HeroVisual";
import { SectionHeader } from "./components/SectionHeader";
import { faqs } from "./lib/faqs";
import { createMetadata } from "./lib/seo";
import { courseCategories, site } from "./lib/site";

export const metadata = createMetadata({
  title: "Computer Institute in Malir, Karachi",
  description:
    "Excellence Computer Institute offers practical computer, web development, MS Office and English language courses in Malir, Karachi with career-focused training.",
  path: "/",
});

const whyChoose = [
  {
    icon: FiMonitor,
    title: "Practical Computer Education",
    text: "Learn through hands-on assignments, guided practice, and real software workflows used in study, office, and business settings.",
  },
  {
    icon: FiUsers,
    title: "Beginner-Friendly Classes",
    text: "Supportive instruction helps new learners build confidence step by step, from basic concepts to practical project work.",
  },
  {
    icon: FiBriefcase,
    title: "Career-Focused Training",
    text: "Courses include portfolio direction, job profile preparation, interview confidence, and freelancing guidance.",
  },
];

const popularCourses = [
  { ...courseCategories[0].courses[0], href: "/courses/english-language/excellence-english" },
  { ...courseCategories[1].courses[3], href: "/courses/ms-office" },
  { ...courseCategories[2].courses[0], href: "/courses/web-development/front-end-development" },
];

export default function Home() {
  return (
    <main>
      <FAQJsonLd items={faqs} />
      <section className="hero-grid relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(37,99,235,0.42),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.26),transparent_24%),linear-gradient(135deg,rgba(2,6,23,0.95),rgba(15,23,42,0.98))]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div data-aos="fade-up">
            <p className="inline-flex rounded-full border border-sky-300/30 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-sky-100">
              {site.slogan}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Excellence Computer Institute
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Learn Practical Computer, Web Development, MS Office and English
              Language Skills for a Better Future.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/courses"
                className="gradient-action inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white shadow-2xl shadow-blue-700/30 transition hover:-translate-y-0.5 hover:shadow-blue-500/40"
              >
                Explore Courses
                <FiArrowRight aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-lg hover:shadow-sky-500/20"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <HeroVisual type="home" />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Skill-based learning for a better future"
          description="Excellence Computer Institute helps students and professionals develop useful skills through practical classes, supportive guidance, and career-focused course planning."
        />
        <div className="mx-auto mt-12 grid max-w-7xl items-stretch gap-6 md:grid-cols-3">
          {whyChoose.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="card-hover group flex h-full flex-col rounded-[8px] border border-slate-200 bg-white p-7 shadow-xl shadow-blue-950/5"
                data-aos="fade-up"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-[8px] bg-blue-700 text-white blue-glow">
                  <Icon className="transition duration-300 group-hover:scale-110" size={22} aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Popular Courses"
          title="Start with practical, in-demand skills"
          description="Choose a course that matches your current level and future goal, from English confidence to office productivity and modern web development."
        />
        <div className="mx-auto mt-12 grid max-w-7xl items-stretch gap-6 lg:grid-cols-3">
          {popularCourses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>

      <ClassSchedule />

      <section className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div data-aos="fade-up">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
              Skills-Based Learning
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Build confidence through guided practice.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Our classes are designed around practice, feedback, and visible
              progress. Students work on documents, presentations, websites,
              projects, communication activities, and job-ready exercises.
            </p>
          </div>
          <div className="grid items-stretch gap-4 sm:grid-cols-2" data-aos="fade-up">
            {[
              { icon: FiBookOpen, label: "English fluency and confidence" },
              { icon: FiMonitor, label: "Office tools and productivity" },
              { icon: FiCode, label: "Frontend, backend and WordPress" },
              { icon: FiBriefcase, label: "Portfolio and job preparation" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="card-hover group flex h-full flex-col rounded-[8px] border border-blue-100 bg-white p-5 shadow-lg shadow-blue-950/5"
                >
                  <Icon className="text-blue-700 transition duration-300 group-hover:scale-110" size={24} aria-hidden />
                  <p className="mt-4 font-bold text-slate-800">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FAQSection items={faqs} limit={10} />

      <CTASection />
    </main>
  );
}
