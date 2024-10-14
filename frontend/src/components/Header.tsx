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

type HeaderProps = {
  bgColor: "bg-backgroundHeader" | "bg-backgroundGrayHeader";
  textColor: "text-black-100" | "text-black-50";
  bgColorScroll?: "bg-backgroundHeader" | "bg-backgroundGrayHeader";
  fill: "black" | "white";
};

const Header = ({
  bgColor = "bg-backgroundHeader",
  bgColorScroll = "bg-backgroundHeader",
  textColor = "text-black-100",
  fill = "white",
}: HeaderProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <div
      className={`w-full flex justify-center z-50 ${isSticky && "fixed top-2"}`}
    >
      <header className="w-full flex gap-2 items-center justify-between px-6 md:justify-normal md:w-fit md:px-0">
        <div
          className={`p-3 size-12 backdrop-blur-lg rounded-full ${
            isMenuOpen && "hidden"
          } ${isSticky ? bgColor : bgColorScroll}`}
        >
          <Link href="/">
            <IconHome color={fill} />
          </Link>
        </div>

        <div
          className={`w-full top-10 backdrop-blur-lg hidden items-center justify-between md:flex ${
            isSticky ? bgColor : bgColorScroll
          } px-8 py-3 rounded-2xl`}
        >
          <nav>
            <ul className="flex gap-20">
              {listMenu.map(({ title, link }) => (
                <li
                  key={title}
                  className={`${textColor} text-base 2xl:text-2xl font-bold`}
                >
                  <Link href={link}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className={`size-11 h-fit top-10 block items-center justify-between md:hidden ${
            isMenuOpen && "hidden"
          } ${
            isSticky ? bgColor : bgColorScroll
          } p-3 rounded-xl cursor-pointer`}
          onClick={() => setIsMenuOpen(true)}
        >
          <IconMenu color={fill} />
        </div>

        {isMenuOpen && (
          <div className="w-full fixed inset-0 z-50 flex justify-start bg-black-50 animate-fade-down duration-300 ease-in-out">
            <div className="w-full h-1/2 bg-backgroundHeaderMobile p-6 rounded-lg transition-transform transform duration-300 ease-in-out">
              <div className="flex items-center justify-between border-b-[0.5px] border-black-70 pb-4">
                <div
                  className={`p-3 size-12 rounded-full ${
                    isSticky
                      ? "bg-backgroundHeaderMobile"
                      : "bg-backgroundHeaderMobile"
                  }`}
                >
                  <Link href="/">
                    <IconHome />
                  </Link>
                </div>
                <div className="text-black-100">Navigation</div>
                <div>
                  <button
                    className="absolute top-6 right-4 text-white text-4xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    &times;
                  </button>
                </div>
              </div>
              <nav className="mt-6">
                <ul className="flex flex-col gap-4">
                  {listMenu.map(({ title, link }) => (
                    <li key={title} className="text-black-100 text-2xl">
                      <Link href={link} onClick={() => setIsMenuOpen(false)}>
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
