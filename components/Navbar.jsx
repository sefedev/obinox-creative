"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="flex p-4 mb-12 text-sm flex-between md:px-20">
      {/* LOGO AREA */}
      <Link href="/">
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
            <h2 className="text-base font-semibold">Obinox Creative</h2>
            <h6 className="text-xs">UI/UX Designer</h6>
          </span>
        </div>
      </Link>

      {/* LINKS */}
      <div className="items-center justify-between hidden gap-12 md:flex max-w-fit">
        <ul className="flex gap-8">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/faq">Faq</Link>
          </li>
        </ul>
        <button className="hidden max-w-fit md:block">
          <Image
            src="/assets/icons/dark.svg"
            alt="DarkMode"
            width={18}
            height={18}
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
        <Image src="/assets/icons/menu.svg" alt="menu" width={30} height={30} />
      </button>

      {/* MOBILE NAVIGATION */}
      <div
        className={`${
          openNav ? "block" : "hidden"
        } fixed flex inset-0 h-screen w-full z-50 bg-[rgba(255,255,255,0.2)] backdrop-blur-[10px] backdrop1  flex-col py-36 items-center`}
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
          <button className="max-w-fit" onClick={() => setOpenNav(false)}>
            <Image
              src="/assets/icons/dark.svg"
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
