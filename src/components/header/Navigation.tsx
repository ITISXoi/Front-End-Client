import { navigationIsLogin, navigationLogin } from "@/data/navigation";
import useMatchMedia from "@/hooks/useMatchMedia";
import { COOKIES, getCookies } from "@/libs/cookies";
import { isActiveNav } from "@/utils/isActiveMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(): JSX.Element {
  const path = usePathname();
  const token = getCookies(COOKIES.accessToken);
  const isMatch = useMatchMedia("(max-width: 991px)");
  const navigation = token ? navigationLogin : navigationIsLogin;
  return (
    <>
      {isMatch !== null ? (
        <nav
          id={isMatch ? "main-nav-mobi" : "main-nav"}
          className="main-nav"
          style={isMatch ? { display: "none" } : { display: "block" }}
        >
          <ul id="menu-primary-menu">
            {navigation?.map((item) => (
              <li
                key={item.id}
                className="menu-item current-menu-item menu-item-has-children"
              >
                <Link href={item.path}>
                  <div className={isActiveNav(item.path, path) ? "active" : ""}>
                    {item.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        ""
      )}
    </>
  );
}
