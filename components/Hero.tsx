import React from "react";
import Image from "next/image";

// Belum ada foto? Biarin null, tampil background abu dummy.
// Kalau sudah ada, taruh di /public lalu isi, contoh: "/hero.jpg"
const heroImage: string | null = null;

const values = [
  "Berintegritas",
  "Berprestasi",
  "Inklusif",
  "Transparan",
  "Kolaboratif",
  "Berakhlak",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col overflow-hidden bg-slate-500 text-white"
    >
      {/* Background */}
      {heroImage ? (
        <Image
          src={heroImage}
          alt="Foto bersama pengurus OSIS & MPK SMA Islam Al Azhar 4"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center bg-slate-500"
        >
          <span className="select-none text-sm font-semibold uppercase tracking-widest text-white/30">
            Foto Hero (1920 × 1080)
          </span>
        </div>
      )}

      {/* Overlay biar teks kebaca */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"
      />

      {/* Konten */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 items-center px-4 pb-32 pt-32 sm:px-6">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400 sm:text-sm">
            SATYAVARA · Masa Bakti 2026/2027
          </p>

          <h1 className="mt-5 font-extrabold uppercase leading-[0.95] tracking-tight">
            <span className="block text-6xl sm:text-8xl lg:text-9xl">
              OSIS/MPK
            </span>
            <span className="mt-3 block text-3xl text-amber-400 sm:text-5xl lg:text-6xl">
              SMA Islam Al Azhar 4
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Bersatu untuk berkarya, mendengar, dan bergerak bersama demi
            lingkungan sekolah yang berprestasi dan berakhlak.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#profile"
              className="rounded-lg bg-amber-400 px-7 py-3.5 text-center text-sm font-bold text-emerald-950 transition-colors hover:bg-amber-300"
            >
              Visi Kami
            </a>
            <a
              href="#programs"
              className="rounded-lg border border-white/70 px-7 py-3.5 text-center text-sm font-bold text-white transition-colors hover:bg-white/15"
            >
              Lihat Program
            </a>
          </div>
        </div>
      </div>

      {/* Marquee nilai */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-white/10 bg-black/20 py-4 backdrop-blur"
      >
        <div className="animate-marquee flex w-max">
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0 items-center">
              {values.map((v) => (
                <span
                  key={`${n}-${v}`}
                  className="flex items-center text-sm font-bold uppercase tracking-[0.25em] text-white/70"
                >
                  <span className="px-8">{v}</span>
                  <span className="text-amber-400">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
