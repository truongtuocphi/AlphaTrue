"use client";

import Link from "next/link";
import IconHome from "./icons/IconHomeAPT";
import IconMenu from "./icons/IconMenu";
import { useEffect, useState } from "react";

const listMenu = [
  { title: "Moment", link: "/moments" },
  { title: "Invest", link: "/invest" },
  { title: "Team", link: "/team" },
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="flex gap-2 items-center">
      <div
        className={`p-3 size-12 rounded-full ${
          isSticky ? "bg-backgroundHeader" : "bg-backgroundHeader"
        }`}
      >
        <Link href="/">
          <IconHome />
        </Link>
      </div>
      <div
        className={`w-full top-10 flex items-center justify-between ${
          isSticky ? "bg-backgroundHeader" : "bg-backgroundHeader"
        } px-8 py-3 rounded-2xl`}
      >
        <nav>
          <ul className="flex gap-20">
            {listMenu.map(({ title, link }) => {
              return (
                <li
                  key={title}
                  className="text-black-100 text-base 2xl:text-2xl font-medium"
                >
                  <Link href={link}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
