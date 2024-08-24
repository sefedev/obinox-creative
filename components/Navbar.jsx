"use client";

import { ThemeContext } from "@/context/themes";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";

const Navbar = () => {
  const { isDark, toggleDarkMode } = useContext(ThemeContext);
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="flex p-4 mb-12 text-sm dark:bg-black dark:text-white flex-between md:px-20">
      {/* LOGO AREA */}
      <Link href="/">
        <div className="flex gap-2 max-w-fit flex-center">
          <span className="size-[2.5rem] p-0.5 grid place-items-center rounded-full border-2 dark:border-white border-black">
            <Image
              src="/assets/images/obinox-logo.png"
              alt="Obinox Creative"
              width={50}
              height={50}
              className="rounded-full"
            />
          </span>
          <span>
            <h2 className="text-base font-semibold">Obinox Creative</h2>
            <h6 className="text-xs">UI/UX Designer</h6>
          </span>
        </div>
      </Link>

      {/* LINKS */}
      <div className="items-center justify-between hidden gap-12 md:flex max-w-fit">
        <ul className="flex gap-8">
          <li>
            <Link
              href="/about"
              className="transition-none duration-500 hover:text-primary-orange"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="transition-none duration-500 hover:text-primary-orange"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="transition-none duration-500 hover:text-primary-orange"
            >
              Faq
            </Link>
          </li>
        </ul>
        <button
          className={`hidden max-w-fit p-1 rounded-md bg-black md:block ${
            isDark && "bg-primary-orange"
          }`}
          onClick={toggleDarkMode}
        >
          <Image
            src={`/assets/icons/${isDark ? "light" : "dark"}.svg`}
            alt="DarkMode"
            width={16}
            height={16}
          />
        </button>
      </div>

      {/* HAMBURGER MENU */}
      <button
        className="md:hidden"
        type="button"
        onClick={() => {
          setOpenNav(true);
          console.log(openNav);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 16 16"
          className={`${isDark ? "fill-white" : "fill-black"} bi bi-list`}
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>

      {/* MOBILE NAVIGATION */}
      <div
        className={`${
          openNav ? "block" : "hidden"
        } fixed flex inset-0 h-screen w-full  z-50 bg-gradient-to-r from-[rgba(255,161,0,0.6)] to-[rgba(153,97,0,0.6)] backdrop-blur-[10px] backdrop1 flex-col py-36 items-center`}
      >
        <div className="flex-between w-[70%] mb-8">
          <button className="max-w-fit" onClick={() => setOpenNav(false)}>
            <Image
              src="/assets/icons/close.svg"
              alt="close"
              width={24}
              height={24}
            />
          </button>
          <button
            className={`max-w-fit p-1 rounded-md bg-black md:block ${
              isDark && "bg-primary-orange"
            }`}
            onClick={toggleDarkMode}
          >
            <Image
              src={`/assets/icons/${isDark ? "light" : "dark"}.svg`}
              alt="darkMode"
              width={24}
              height={24}
            />
          </button>
        </div>

        <Link href="/" onClick={() => setOpenNav(false)}>
          <div className="flex gap-2 max-w-fit flex-center">
            <span className="size-[2.5rem] p-0.5 grid place-items-center rounded-full border-2 border-black">
              <Image
                src="/assets/images/obinox-logo.png"
                alt="Obinox Creative"
                width={50}
                height={50}
                className="rounded-full"
              />
            </span>
            <span>
              <h2 className="text-lg font-semibold">Obinox Creative</h2>
              <h6 className="text-sm">UI/UX Designer</h6>
            </span>
          </div>
        </Link>

        <ul className="flex flex-col gap-2 mt-4 text-xl">
          <li>
            <Link href="/about" onClick={() => setOpenNav(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/portfolio" onClick={() => setOpenNav(false)}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/faq" onClick={() => setOpenNav(false)}>
              Faq
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
