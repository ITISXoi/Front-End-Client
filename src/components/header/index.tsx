"use client";
import useDarkModeCheck from "@/hooks/useDarkModeCheck";
import useStickyMenu from "@/hooks/useStickyMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WalletConnectButton from "../button/WalletConnectButton";
import AdminBar from "./AdminBar";
import Mode from "./Mode";
import Navigation from "./Navigation";
import Search1 from "./Search1";
import Search2 from "./Search2";
import { COOKIES, getCookies } from "@/libs/cookies";
import { useEffect, useState } from "react";

export default function Header(): JSX.Element {
  const path = usePathname();
  const token = getCookies(COOKIES.accessToken);
  const [showProfile, setShowProfile] = useState(true);
  useEffect(() => {
    if (token) {
      setShowProfile(true);
    } else {
      setShowProfile(false);
    }
  }, [token]);

  const isDark = useDarkModeCheck();
  const isSticky1 = useStickyMenu(200);
  const isSticky2 = useStickyMenu(250);

  return (
    <>
      <header
        id="header_main"
        className={
          // if the page route is /home-8 then the header navigation will be position-fixed
          path !== "/home-8"
            ? // if the page route is not /home-8
              `header_1 js-header style  ${
                path === "/text-type" ||
                path === "/text-scroll" ||
                path === "/home-5" ||
                path === "/home-6" ||
                path === "/home-7" ||
                path === "/home-8"
                  ? "header_2 style2"
                  : ""
              } ${isSticky1 ? "is-fixed" : ""} ${isSticky2 ? "is-small" : ""}`
            : // if the page route is /home-8
              `header_1 header_2 style2 style3 js-header position-fixed`
        }
      >
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-md-12">
              <div id="site-header-inner">
                <div className="wrap-box flex">
                  <div id="site-logo" className="clearfix">
                    <div id="site-logo-inner">
                      <Link href="/" rel="home" className="main-logo">
                        <h1 className="heading" style={{ color: "white" }}>
                          NFTs
                        </h1>
                      </Link>
                    </div>
                  </div>
                  <div
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu"
                    aria-controls="menu"
                    className="mobile-button "
                  >
                    <span />
                  </div>

                  {/* search bar 1 */}
                  {path == "/home-5" ||
                  path == "/home-6" ||
                  path == "/home-7" ||
                  path == "/home-8" ||
                  path === "/text-type" ||
                  path === "/text-scroll" ||
                  path === "/text-rotate" ? (
                    <Search1 />
                  ) : (
                    ""
                  )}

                  <Navigation />

                  <div className="flat-search-btn flex">
                    <Search2 />
                    <WalletConnectButton />
                    {showProfile && <AdminBar />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Mode />
      </header>
    </>
  );
}
