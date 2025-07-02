"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();

  // Normalize pathname (remove trailing slash except for root "/")
  const normalizedPathname = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = link.path === normalizedPathname;
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize font-medium transition-all ${
              isActive ? "text-accent border-b-2 border-accent" : "hover:text-accent"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
