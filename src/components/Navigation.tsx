"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const routes = [
  {
    name: "Home",
    href: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    name: "Search",
    href: "/search",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    ),
  },
  {
    name: "Library",
    href: "/library",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
        />
      </svg>
    ),
  },
];

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="w-screen">
      <ul className="flex w-full items-center justify-evenly bg-black/60 py-2 backdrop-blur-sm">
        {routes.map(
          (
            route: { name: string; href: string; icon: React.ReactNode },
            _: number,
          ) => {
            const isActive = route.href === pathname;
            return (
              <li key={route.name}>
                <Link href={route.href}>
                  <div
                    className={`flex items-center gap-2 border-b-2 border-purple-600 border-opacity-0 pb-1 ${isActive ? "border-opacity-100" : undefined}`}
                  >
                    {route.icon}
                  </div>
                </Link>
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
};

export default Navigation;
