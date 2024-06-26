"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.webp";
import Link from "next/link";
import IconLinkedin from "./icons/IconLinkedin";
import IconTwitter from "./icons/IconTwitter";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Moments", href: "/moments" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [activeTitle, setActiveTitle] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleActiveTitle = () => {
    setActiveTitle(!activeTitle);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <header className="flex justify-between p-4 lg:py-8 lg:px-10">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          priority
          style={{ width: "150px", height: "auto" }}
        />
      </Link>
      <div className="flex items-center justify-end gap-6 lg:gap-0 lg:items-start">
        <nav className="hidden sm:hidden lg:grid">
          <ul className="lg:grid lg:grid-cols-2">
            {links.map((menu) => (
              <li
                key={menu.label}
                className="border-t-gray-200 border-t-[1px] w-36 pt-2 pb-2 mr-7 "
              >
                <Link
                  href={menu.href}
                  className="text-sm font-semibold text-gray-600 hover:text-gray-400 py-2 block"
                  aria-label={menu.label}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Menu>
          <MenuButton
            className={
              "text-sm font-semibold text-gray-600 hover:text-gray-400 py-2 block lg:hidden"
            }
            onClick={handleActiveTitle}
          >
            {activeTitle ? "Menu" : "Back"}
          </MenuButton>
          <MenuItems
            anchor="bottom"
            className="flex flex-col gap-10 w-full h-svh text-center bg-body mt-5 z-50"
          >
            {links.map((menu) => (
              <MenuItem key={menu.label}>
                <Link
                  href={menu.href}
                  className="text-2xl"
                  onClick={handleActiveTitle}
                >
                  {menu.label}
                </Link>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
        {activeTitle && (
          <div className="lg:border-t-gray-200 lg:border-t-[1px] lg:w-36 lg:pt-2">
            <Link
              href="/"
              onClick={openModal}
              className="text-sm font-semibold text-gray-600 hover:text-gray-400 py-2 block"
            >
              Contact
            </Link>
          </div>
        )}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <TransitionChild
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <DialogTitle
                      as="h2"
                      className="text-xl font-medium leading-6 text-gray-900"
                    >
                      Don’t hestitate to contact us
                    </DialogTitle>
                    <div className="mt-5">
                      <div className="text-sm">Send us an email</div>
                      <p className="text-sm text-gray-500">
                        support@alphatrue.com
                      </p>
                    </div>
                    <div className="mt-5">
                      <div className="text-sm">Find us</div>
                      <p className="text-sm text-gray-500">
                        Diamond Plaza, District 1, Ho Chi Minh City, Vietnam
                      </p>
                    </div>
                    <div className="mt-5">
                      <div className="text-sm">Follow us</div>
                      <p className="flex items-center text-sm text-gray-500">
                        <Link
                          href="https://twitter.com/AlphaTrueAPT"
                          target="_blank"
                        >
                          <IconTwitter
                            className="hover:fill-gray-400"
                            width={30}
                            height={30}
                            color="#333"
                          />
                        </Link>
                        <Link
                          href="https://www.linkedin.com/company/alphatrue"
                          target="_blank"
                        >
                          <IconLinkedin
                            className="hover:fill-gray-400"
                            width={30}
                            height={30}
                            color="#333"
                          />
                        </Link>
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </header>
  );
}
