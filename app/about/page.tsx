import { FiAward, FiBookOpen, FiCheckCircle, FiTarget, FiUsers } from "react-icons/fi";
import { Breadcrumb } from "../components/Breadcrumb";
import { CTASection } from "../components/CTASection";
import { FAQJsonLd } from "../components/FAQJsonLd";
import { FAQSection } from "../components/FAQSection";
import { HeroVisual } from "../components/HeroVisual";
import { SectionHeader } from "../components/SectionHeader";
import { faqs } from "../lib/faqs";
import { createMetadata } from "../lib/seo";
import { site } from "../lib/site";

export const metadata = createMetadata({
  title: "About Excellence Computer Institute",
  description:
    "Learn about Excellence Computer Institute in Malir, Karachi, a practical and beginner-friendly computer training institute for students, job seekers, freelancers and professionals.",
  path: "/about",
  keywords: ["Computer training institute Karachi", "Computer institute in Malir"],
});

const values = [
  {
    icon: FiBookOpen,
    title: "Practical Education",
    text: "Students learn by doing, with classwork and assignments built around real computer, language, and workplace needs.",
  },
  {
    icon: FiUsers,
    title: "Supportive Atmosphere",
    text: "A beginner-friendly environment helps learners ask questions, practice regularly, and grow with confidence.",
  },
  {
    icon: FiTarget,
    title: "Career-Focused Courses",
    text: "Training connects technical learning with portfolio guidance, job profile preparation, and freelancing basics.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <FAQJsonLd items={faqs.slice(0, 10)} />
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div data-aos="fade-up">
            <Breadcrumb
              light
              items={[
                { label: "Home", href: "/" },
                { label: "About" },
              ]}
            />
            <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-200">
              About Us
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
              Practical computer education for students, beginners, and future professionals.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              {site.name} provides skill-based training in Malir, Karachi for
              learners who want to improve computer literacy, English confidence,
              office productivity, web development ability, and career readiness.
            </p>
          </div>
          <HeroVisual type="about" />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-aos="fade-up">
            <SectionHeader
              eyebrow="Our Approach"
              title="Skill-based training with clear learning outcomes"
              description="Our programs are suitable for school and college students, beginners, job seekers, freelancers, office workers, business owners, and professionals who want practical, usable skills."
            />
          </div>
          <div className="grid items-stretch gap-5">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="card-hover group flex h-full flex-col rounded-[8px] border border-slate-200 bg-white p-6 shadow-xl shadow-blue-950/5"
                  data-aos="fade-up"
                >
                  <div className="flex gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-blue-700 text-white transition duration-300 group-hover:scale-110">
                      <Icon size={22} aria-hidden />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-950">{item.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Who We Help"
            title="A learning environment built for progress"
            description="From first-time learners to career changers, our focus is to make technology and communication skills easier to understand and easier to use in real life."
          />
          <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Students building academic and computer confidence",
              "Beginners starting from the basics",
              "Job seekers preparing for office and technical roles",
              "Freelancers building web and portfolio skills",
              "Professionals improving productivity and communication",
              "Business owners learning practical digital tools",
            ].map((item) => (
              <div
                key={item}
                className="card-hover group flex h-full min-h-24 gap-3 rounded-[8px] border border-blue-100 bg-white p-5 font-bold text-slate-800"
                data-aos="zoom-in"
              >
                <FiCheckCircle className="mt-1 shrink-0 text-blue-700 transition duration-300 group-hover:scale-110" aria-hidden />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="card-hover-dark group mx-auto grid max-w-7xl items-center gap-8 rounded-[8px] border border-sky-300/20 bg-gradient-to-br from-blue-700 to-slate-950 p-8 text-white shadow-2xl shadow-blue-950/20 md:grid-cols-[auto_1fr]">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-[8px] bg-white/15 transition duration-300 group-hover:scale-110">
            <FiAward size={30} aria-hidden />
          </div>
          <div>
            <h2 className="text-2xl font-black">Professional, premium, and student-focused.</h2>
            <p className="mt-3 leading-8 text-slate-200">
              Our aim is to make practical education accessible, confidence-building,
              and directly useful for future study, jobs, freelancing, and business work.
            </p>
          </div>
        </div>
      </section>

      <FAQSection items={faqs} limit={10} />

      <CTASection />
    </main>
  );
}
