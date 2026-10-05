import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
