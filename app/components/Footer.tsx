import Image from "next/image";
import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiYoutube,
} from "react-icons/fi";
import { courseNavLinks, navLinks, site } from "../lib/site";

export function Footer() {
  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];
  const socialLinks = [
    { label: "Facebook", href: "#", icon: FiFacebook },
    { label: "Instagram", href: "#", icon: FiInstagram },
    { label: "LinkedIn", href: "#", icon: FiLinkedin },
    { label: "YouTube", href: "#", icon: FiYoutube },
  ];
  const footerCourseLinks = courseNavLinks.flatMap((course) => [
    { label: course.label, href: course.href },
    ...("children" in course ? course.children ?? [] : []),
  ]);

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(37,99,235,0.22),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.7),rgba(2,6,23,1))]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.05fr_0.9fr_1.25fr_1.2fr] lg:px-8">
        <div>
          <Image
            src="/logo.png"
            alt="Excellence Computer Institute Logo"
            width={180}
            height={74}
            className="h-auto w-[120px] object-contain sm:w-[140px] lg:w-[165px]"
          />
          <p className="mt-4 text-sm font-semibold text-sky-100">{site.slogan}</p>
          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-200 transition duration-300 hover:-translate-y-1 hover:scale-110 hover:border-sky-300 hover:bg-sky-300/10 hover:text-white"
                >
                  <Icon size={18} aria-hidden />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-sky-200">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:pl-1 hover:text-white" href={link.href}>
                  {link.label === "Contact Us" ? "Contact" : link.label}
                </Link>
              </li>
            ))}
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:pl-1 hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-sky-200">
            Courses
          </h2>
          <ul className="mt-5 grid gap-x-6 gap-y-2.5 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-2">
            {footerCourseLinks.map((course) => (
              <li key={course.href}>
                <Link className="transition hover:pl-1 hover:text-white" href={course.href}>
                  {course.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-sky-200">
            Contact Information
          </h2>
          <ul className="mt-5 space-y-3.5 text-sm text-slate-300">
            <li className="flex gap-3">
              <FiMapPin className="mt-1 shrink-0 text-sky-300" aria-hidden />
              {site.address}
            </li>
            <li className="flex gap-3">
              <FiPhone className="mt-1 shrink-0 text-sky-300" aria-hidden />
              <a className="hover:text-white" href={site.phoneHref}>
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <FiMail className="mt-1 shrink-0 text-sky-300" aria-hidden />
              <a className="break-all hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        {"\u00a9"} 2026 {site.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
