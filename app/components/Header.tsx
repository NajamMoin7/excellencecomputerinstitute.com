"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiMenu, FiPhone, FiX } from "react-icons/fi";
import { courseNavLinks, navLinks, site } from "../lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setCoursesOpen(false);
        setActiveSubmenu(null);
        setMobileCoursesOpen(false);
        setMobileSubmenu(null);
        setOpen(false);
        return;
      }

      if (coursesRef.current && !coursesRef.current.contains(event.target as Node)) {
        setCoursesOpen(false);
        setActiveSubmenu(null);
      }
    }

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 shadow-lg shadow-blue-950/20 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => {
            setOpen(false);
            setCoursesOpen(false);
            setActiveSubmenu(null);
            setMobileCoursesOpen(false);
            setMobileSubmenu(null);
          }}
          aria-label="Excellence Computer Institute home"
        >
          <Image
            src="/logo.png"
            alt="Excellence Computer Institute Logo"
            width={180}
            height={74}
            priority
            className="h-auto w-[120px] object-contain sm:w-[140px] lg:w-[165px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || (link.href === "/courses" && pathname.startsWith("/courses"));

            if (link.href === "/courses") {
              return (
                <div
                  key={link.href}
                  ref={coursesRef}
                  className="relative"
                  onMouseEnter={() => setCoursesOpen(true)}
                  onMouseLeave={() => {
                    setCoursesOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setCoursesOpen((value) => !value)}
                    className={`nav-underline inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
                      active
                        ? "is-active bg-blue-600/20 text-white"
                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                    }`}
                    aria-expanded={coursesOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <FiChevronDown
                      className={`transition duration-200 ${coursesOpen ? "rotate-180" : ""}`}
                      size={16}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={`absolute left-0 top-full z-[80] w-64 origin-top pt-3 transition duration-200 ${
                      coursesOpen
                        ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                        : "pointer-events-none translate-y-2 scale-[0.98] opacity-0"
                    }`}
                  >
                    <div
                      className="rounded-[8px] border border-white/10 bg-slate-950/95 p-2 shadow-2xl shadow-blue-950/40 backdrop-blur-xl"
                      role="menu"
                      aria-label="Courses submenu"
                    >
                      <Link
                        href="/courses"
                        role="menuitem"
                        onClick={() => setCoursesOpen(false)}
                        className={`block rounded-[8px] px-4 py-3 text-sm font-bold transition hover:bg-blue-600/20 hover:pl-5 hover:text-white ${
                          pathname === "/courses"
                            ? "bg-blue-600/30 text-white"
                            : "text-slate-200"
                        }`}
                      >
                        All Courses
                      </Link>
                      {courseNavLinks.map((course) =>
                        "children" in course ? (
                          <div
                            key={course.href}
                            className="relative"
                            onMouseEnter={() => setActiveSubmenu(course.href)}
                          >
                            <button
                              type="button"
                              role="menuitem"
                              onClick={() =>
                                setActiveSubmenu((value) =>
                                  value === course.href ? null : course.href,
                                )
                              }
                              className={`flex w-full items-center justify-between rounded-[8px] px-4 py-3 text-left text-sm font-bold transition hover:bg-blue-600/20 hover:pl-5 hover:text-white ${
                                pathname === course.href || pathname.startsWith(`${course.href}/`)
                                  ? "bg-blue-600/30 text-white"
                                  : "text-slate-200"
                              }`}
                              aria-expanded={activeSubmenu === course.href}
                              aria-haspopup="true"
                            >
                              {course.label}
                              <FiChevronDown
                                className={`-rotate-90 transition duration-200 ${
                                  activeSubmenu === course.href ? "text-sky-200" : ""
                                }`}
                                size={16}
                                aria-hidden
                              />
                            </button>
                            <div
                              className={`absolute left-full top-0 z-[90] w-72 pl-3 transition duration-200 ${
                                activeSubmenu === course.href
                                  ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                                  : "pointer-events-none translate-y-2 scale-[0.98] opacity-0"
                              }`}
                            >
                              <div
                                className="rounded-[8px] border border-white/10 bg-slate-950/95 p-2 shadow-2xl shadow-blue-950/40 backdrop-blur-xl"
                                role="menu"
                                aria-label={`${course.label} submenu`}
                              >
                                <Link
                                  href={course.href}
                                  role="menuitem"
                                  onClick={() => {
                                    setCoursesOpen(false);
                                    setActiveSubmenu(null);
                                  }}
                                  className={`block rounded-[8px] px-4 py-3 text-sm font-bold transition hover:bg-blue-600/20 hover:pl-5 hover:text-white ${
                                    pathname === course.href
                                      ? "bg-blue-600/30 text-white"
                                      : "text-slate-200"
                                  }`}
                                >
                                  {course.label} Overview
                                </Link>
                                {(course.children ?? []).map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    role="menuitem"
                                    onClick={() => {
                                      setCoursesOpen(false);
                                      setActiveSubmenu(null);
                                    }}
                                    className={`block rounded-[8px] px-4 py-3 text-sm font-bold transition hover:bg-blue-600/20 hover:pl-5 hover:text-white ${
                                      pathname === child.href
                                        ? "bg-blue-600/30 text-white"
                                        : "text-slate-200"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={course.href}
                            href={course.href}
                            role="menuitem"
                            onClick={() => setCoursesOpen(false)}
                            className={`block rounded-[8px] px-4 py-3 text-sm font-bold transition hover:bg-blue-600/20 hover:pl-5 hover:text-white ${
                              pathname === course.href
                                ? "bg-blue-600/30 text-white"
                                : "text-slate-200"
                            }`}
                          >
                            {course.label}
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setCoursesOpen(false)}
                className={`nav-underline rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "is-active bg-blue-600/20 text-white"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="gradient-action inline-flex items-center gap-2 rounded-full border border-sky-300/40 px-4 py-2 text-sm font-bold text-white shadow-blue-600/0 transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lg hover:shadow-blue-600/25"
          >
            <FiPhone className="transition hover:scale-110" aria-hidden />
            Enquire Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setOpen((value) => !value);
            setMobileCoursesOpen(false);
            setMobileSubmenu(null);
          }}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-4 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.href === "/courses" ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setMobileCoursesOpen((value) => !value)}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                        pathname.startsWith("/courses")
                          ? "bg-blue-600 text-white"
                          : "bg-white/5 text-slate-100 hover:bg-white/10"
                      }`}
                      aria-expanded={mobileCoursesOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <FiChevronDown
                        className={`transition duration-200 ${
                          mobileCoursesOpen ? "rotate-180" : ""
                        }`}
                        size={16}
                        aria-hidden
                      />
                    </button>
                    <div
                      className={`ml-3 grid gap-2 border-l border-white/10 pl-3 transition-all duration-200 ${
                        mobileCoursesOpen
                          ? "mt-2 max-h-[75vh] overflow-y-auto opacity-100"
                          : "mt-0 max-h-0 overflow-hidden opacity-0"
                      }`}
                      role="menu"
                      aria-label="Mobile courses submenu"
                    >
                      <Link
                        href="/courses"
                        role="menuitem"
                        onClick={() => {
                          setOpen(false);
                          setMobileCoursesOpen(false);
                        }}
                        className={`rounded-xl px-4 py-2 text-sm font-semibold transition hover:bg-white/10 hover:text-white ${
                          pathname === "/courses"
                            ? "bg-blue-600/40 text-white"
                            : "text-slate-300"
                        }`}
                      >
                        All Courses
                      </Link>
                    {courseNavLinks.map((course) =>
                      "children" in course ? (
                        <div key={course.href}>
                          <button
                            type="button"
                            onClick={() =>
                              setMobileSubmenu((value) =>
                                value === course.href ? null : course.href,
                              )
                            }
                            className={`flex w-full items-center justify-between rounded-xl px-4 py-2 text-left text-sm font-semibold transition hover:bg-white/10 hover:text-white ${
                              pathname === course.href || pathname.startsWith(`${course.href}/`)
                                ? "bg-blue-600/40 text-white"
                                : "text-slate-300"
                            }`}
                            aria-expanded={mobileSubmenu === course.href}
                            aria-haspopup="true"
                          >
                            {course.label}
                            <FiChevronDown
                              className={`transition duration-200 ${
                                mobileSubmenu === course.href ? "rotate-180" : ""
                              }`}
                              size={16}
                              aria-hidden
                            />
                          </button>
                          <div
                            className={`ml-3 grid gap-2 border-l border-white/10 pl-3 transition-all duration-200 ${
                              mobileSubmenu === course.href
                                ? "mt-2 max-h-[32rem] overflow-y-auto opacity-100"
                                : "mt-0 max-h-0 overflow-hidden opacity-0"
                            }`}
                            role="menu"
                            aria-label={`Mobile ${course.label} submenu`}
                          >
                            <Link
                              href={course.href}
                              role="menuitem"
                              onClick={() => {
                                setOpen(false);
                                setMobileCoursesOpen(false);
                                setMobileSubmenu(null);
                              }}
                              className={`rounded-xl px-4 py-2 text-sm font-semibold transition hover:bg-white/10 hover:text-white ${
                                pathname === course.href
                                  ? "bg-blue-600/40 text-white"
                                  : "text-slate-300"
                              }`}
                            >
                              {course.label} Overview
                            </Link>
                            {(course.children ?? []).map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                role="menuitem"
                                onClick={() => {
                                  setOpen(false);
                                  setMobileCoursesOpen(false);
                                  setMobileSubmenu(null);
                                }}
                                className={`rounded-xl px-4 py-2 text-sm font-semibold transition hover:bg-white/10 hover:text-white ${
                                  pathname === child.href
                                    ? "bg-blue-600/40 text-white"
                                    : "text-slate-300"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={course.href}
                          href={course.href}
                          role="menuitem"
                          onClick={() => {
                            setOpen(false);
                            setMobileCoursesOpen(false);
                            setMobileSubmenu(null);
                          }}
                          className={`rounded-xl px-4 py-2 text-sm font-semibold transition hover:bg-white/10 hover:text-white ${
                            pathname === course.href
                              ? "bg-blue-600/40 text-white"
                              : "text-slate-300"
                          }`}
                        >
                          {course.label}
                        </Link>
                      ),
                    )}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-sm font-bold transition ${
                      pathname === link.href
                        ? "bg-blue-600 text-white"
                        : "bg-white/5 text-slate-100 hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
