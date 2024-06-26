"use client";

import React from "react";
import Link from "next/link";
import IconLogoWhite from "./icons/IconLogoWhite";
import IconArrow from "./icons/IconArrow";

const listItemFooter = [
  { name: "TWITTER", slug: "https://twitter.com/AlphaTrueAPT" },
  { name: "LINKEDIN", slug: "https://www.linkedin.com/company/alphatrue" },
  { name: "TEAM", slug: "/team" },
  { name: "ABOUT US", slug: "/about" },
  { name: "MOMENTS", slug: "/moments" },
  { name: "Copyright © 2021 AlphaTrue", slug: "/#" },
];

export default function Footer() {
  const isBrowser = () => typeof window !== "undefined";

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full h-fit bg-secondBody pt-10 px-6 pb-6 sticky bottom-0 z-0">
      <div className="flex flex-col items-center gap-6">
        <div className="p-2 rounded-full bg-primary">
          <Link href="/#top" onClick={scrollToTop} aria-label="Back to top">
            <IconArrow width="20px" height="20px" fill="white" />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-20">
          {listItemFooter.map((item) => (
            <Link
              key={item.name}
              href={item.slug}
              className="text-gray-400 font-medium text-sm hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <IconLogoWhite width={1280} height={214} />
      </div>
    </footer>
  );
}
