import {
  FiBarChart2,
  FiBookOpen,
  FiCode,
  FiEdit3,
  FiGlobe,
  FiGrid,
  FiMapPin,
  FiMessageCircle,
  FiMonitor,
  FiPhone,
  FiSettings,
  FiTrendingUp,
} from "react-icons/fi";

export type HeroVisualType =
  | "home"
  | "about"
  | "courses"
  | "english"
  | "ms-office"
  | "web-development"
  | "mern-stack"
  | "wordpress"
  | "contact";

type HeroVisualProps = {
  type: HeroVisualType;
};

const visualContent = {
  home: {
    title: "Skill Dashboard",
    subtitle: "Computer, English and web training",
    mainIcon: FiMonitor,
    cards: ["HTML", "CSS", "JavaScript", "MS Excel", "English", "WordPress"],
    side: [
      { label: "React", icon: FiCode },
      { label: "Laravel", icon: FiSettings },
    ],
  },
  about: {
    title: "Learning Path",
    subtitle: "Beginner friendly skill growth",
    mainIcon: FiTrendingUp,
    cards: ["Basics", "Practice", "Projects", "Career"],
    side: [
      { label: "Guidance", icon: FiBookOpen },
      { label: "Progress", icon: FiBarChart2 },
    ],
  },
  courses: {
    title: "Course Hub",
    subtitle: "Choose your next practical skill",
    mainIcon: FiGrid,
    cards: ["English", "MS Office", "Frontend", "Backend", "WordPress", "AI Tools"],
    side: [
      { label: "Schedule", icon: FiBookOpen },
      { label: "Projects", icon: FiCode },
    ],
  },
  english: {
    title: "Communication Lab",
    subtitle: "Speak, write and present confidently",
    mainIcon: FiMessageCircle,
    cards: ["Grammar", "Vocabulary", "Fluency", "Interview"],
    side: [
      { label: "Speaking", icon: FiMessageCircle },
      { label: "Writing", icon: FiEdit3 },
    ],
  },
  "ms-office": {
    title: "Office Workspace",
    subtitle: "Word, Excel, PowerPoint and AI tools",
    mainIcon: FiBarChart2,
    cards: ["Word", "Excel", "PowerPoint", "AI Docs"],
    side: [
      { label: "Reports", icon: FiEdit3 },
      { label: "Charts", icon: FiBarChart2 },
    ],
  },
  "web-development": {
    title: "Code Studio",
    subtitle: "Frontend, backend and full stack projects",
    mainIcon: FiCode,
    cards: ["HTML", "CSS", "React", "PHP", "Laravel", "Node JS"],
    side: [
      { label: "APIs", icon: FiGlobe },
      { label: "Portfolio", icon: FiMonitor },
    ],
  },
  "mern-stack": {
    title: "MERN Stack Lab",
    subtitle: "MongoDB, Express, React and Node apps",
    mainIcon: FiCode,
    cards: ["MongoDB", "Express JS", "React JS", "Node JS", "REST APIs", "Auth"],
    side: [
      { label: "Database", icon: FiGrid },
      { label: "APIs", icon: FiGlobe },
    ],
  },
  wordpress: {
    title: "Website Builder",
    subtitle: "CMS, Elementor and business websites",
    mainIcon: FiGlobe,
    cards: ["WordPress", "Elementor", "Themes", "Plugins"],
    side: [
      { label: "Design", icon: FiMonitor },
      { label: "CMS", icon: FiSettings },
    ],
  },
  contact: {
    title: "Admission Desk",
    subtitle: "Campus visit, call or WhatsApp enquiry",
    mainIcon: FiMapPin,
    cards: ["Malir", "Phone", "WhatsApp", "Course Advice"],
    side: [
      { label: "Call Now", icon: FiPhone },
      { label: "Enquiry", icon: FiMessageCircle },
    ],
  },
} satisfies Record<HeroVisualType, {
  title: string;
  subtitle: string;
  mainIcon: typeof FiMonitor;
  cards: string[];
  side: Array<{ label: string; icon: typeof FiMonitor }>;
}>;

export function HeroVisual({ type }: HeroVisualProps) {
  const content = visualContent[type];
  const MainIcon = content.mainIcon;

  return (
    <div
      className="card-hover-dark relative mx-auto w-full max-w-lg overflow-hidden rounded-[8px] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-blue-950/30 backdrop-blur-xl sm:p-5"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.22),transparent_28%),linear-gradient(145deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))]" />
      <div className="relative rounded-[8px] border border-white/10 bg-slate-950/80 p-4">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-auto text-xs font-bold uppercase tracking-[0.2em] text-sky-200">
            Live Training
          </span>
        </div>

        <div className="grid gap-4 pt-5 md:grid-cols-[1fr_0.78fr]">
          <div className="rounded-[8px] bg-gradient-to-br from-blue-700 to-sky-500 p-5 text-white">
            <MainIcon size={34} aria-hidden />
            <h2 className="mt-5 text-2xl font-black tracking-tight">{content.title}</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-sky-50">
              {content.subtitle}
            </p>
          </div>

          <div className="grid auto-rows-fr gap-3">
            {content.side.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`float-soft card-hover-dark rounded-[8px] border border-white/10 bg-white/10 p-4 text-sm font-black text-white hover:bg-white/15 ${
                    index === 1 ? "[animation-delay:800ms]" : ""
                  }`}
                >
                  <Icon className="mb-2 text-sky-300" aria-hidden />
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3">
          {content.cards.map((card, index) => (
            <div
              key={card}
              className={`card-hover flex min-h-12 items-center justify-center rounded-[8px] border border-white/10 bg-white p-3 text-center text-xs font-black text-slate-950 shadow-lg shadow-blue-950/10 hover:text-blue-700 ${
                index % 2 ? "sm:translate-y-2" : ""
              }`}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
