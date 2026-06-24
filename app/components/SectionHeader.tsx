type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
      {eyebrow ? (
        <p
          className={`text-sm font-black uppercase tracking-[0.24em] ${
            light ? "text-sky-200" : "text-blue-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-8 ${
            light ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
