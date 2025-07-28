"use client";

import { usePathname } from "next/navigation";
import Header from "./_Components/Header/Header";
import Footer from "./_Components/Footer/Footer";
import Navbar from "./_Components/Navbar/Navbar";

export default function HeaderFooterLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Header />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}
