"use client";

import webAPT1BG from "@/public/images/webAPT1BG 1.png";
import Image from "next/image";
import Header from "../Header";
import IconLogoWhite from "../icons/IconLogoWhite";
import SectionStatistical from "./SectionStatistical";
import { useEffect, useState } from "react";

export default function SectionBanner() {
  const [isSticky, setIsSticky] = useState(false);

  // fixed navigator when scroll
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
    <section>
      <div className="w-full h-[450px] lg:h-dvh relative">
        <Image
          className="w-full h-full object-cover"
          src={webAPT1BG}
          alt="banner"
        />
        <div
          className={`w-full flex justify-center z-50 ${
            isSticky ? "fixed top-2" : "absolute top-10"
          }`}
        >
          <Header />
        </div>
        <div className="w-full sm:w-1/2 px-4 absolute top-1/3 left-2/4 -translate-x-2/4">
          <div className="w-full animate-fade-down">
            <IconLogoWhite width="100%" height="100%" />
          </div>
          <div className="text-center mt-12 animate-fade-up">
            <h6 className="text-base sm:text-xl lg:text-2xl 2xl:text-4xl font-medium text-black-100">
              The true solution for the alpha projects in the
              <br className="block sm:hidden" />
              decentralized world
            </h6>
          </div>
        </div>
      </div>
      <SectionStatistical />
    </section>
  );
}
