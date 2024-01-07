"use client";
import BackToTop from "@/components/button/BackToTop";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MobileNavigation from "@/components/header/MobileNavigation";
import { Providers } from "@/theme/providers";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
  import("bootstrap");
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <Providers>
      <div id="wrapper">
        <div id="page" className="clearfix">
          <Header />
          <MobileNavigation />
          {children}
          {path !== "/home-8" && <Footer />}
        </div>
      </div>
      <BackToTop />
    </Providers>
  );
}
