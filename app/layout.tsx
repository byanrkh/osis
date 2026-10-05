import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/libs/Fonts";

export const metadata: Metadata = {
  title: "SATYAVARA | OSIS & MPK SMA Islam Al Azhar 4",
  description:
    "Portal resmi OSIS & MPK SMA Islam Al Azhar 4 (SATYAVARA): program kerja, aspirasi siswa, dan informasi kegiatan sekolah.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${manrope.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
