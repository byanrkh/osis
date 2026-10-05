"use client";

import React, { useEffect, useState } from "react";

const links = [
  { label: "Home", id: "home" },
  { label: "Profile", id: "profile" },
  { label: "Programs", id: "programs" },
  { label: "Extracurriculars", id: "extracurriculars" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("beranda");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const line = window.innerHeight * 0.35;
      let current = links[0].id;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= line) current = l.id;
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = "kontak";

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="mx-auto max-w-6xl">
        <nav
          aria-label="Navigasi utama"
          className={`flex h-16 items-center justify-between rounded-2xl border px-3 backdrop-blur-lg transition-all duration-300 sm:px-4 ${
            scrolled
              ? "border-slate-200 bg-white/95 shadow-lg shadow-slate-900/5"
              : "border-white/20 bg-white/90 shadow-md shadow-slate-900/5"
          }`}
        >
          {/* Logo */}
          <a
            href="#beranda"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 text-lg font-extrabold text-white">
              S
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-extrabold tracking-wide text-slate-900">
                SATYAVARA
              </span>
              <span className="block text-[11px] font-medium text-slate-500">
                OSIS & MPK Al Azhar 4
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-emerald-50 text-emerald-800"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#aspirasi"
            className="group hidden items-center gap-2 rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-emerald-800 md:inline-flex"
          >
            Sampaikan Aspirasi
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          aria-hidden={!open}
          className={`mt-2 origin-top rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/10 transition-[opacity,transform,visibility] duration-200 md:hidden ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-emerald-50 text-emerald-800"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#aspirasi"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-xl bg-emerald-700 px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-emerald-800"
          >
            Sampaikan Aspirasi
          </a>
        </div>
      </div>
    </header>
  );
}
