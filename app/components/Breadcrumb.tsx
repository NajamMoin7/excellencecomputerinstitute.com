import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { site } from "../lib/site";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  light?: boolean;
};

export function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href ?? "#", site.url).toString(),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-5">
        <ol className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.14em] sm:text-sm">
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;

            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                {isCurrent || !item.href ? (
                  <span
                    className={light ? "text-sky-100" : "text-slate-950"}
                    aria-current={isCurrent ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition hover:text-sky-300 ${
                      light ? "text-slate-300" : "text-blue-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
                {!isCurrent ? (
                  <FiChevronRight
                    className={light ? "text-slate-500" : "text-slate-400"}
                    aria-hidden
                  />
                ) : null}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
