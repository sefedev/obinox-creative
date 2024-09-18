"use client";

import { ThemeContext } from "@/context/themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { isDark, toggleDarkMode } = useContext(ThemeContext);
  const [openNav, setOpenNav] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  // GRADIENT COLOR CHANGE
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000); // Change color every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const colors = [
    "border-green-500",
    "dark:border-white border-black",
    "border-orange-500",
    "border-purple-500",
  ];

  const nav_link = [
    { title: "About", link: "/about" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Contact", link: "/contact" },
  ];

  const pathname = usePathname();

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <nav className="sticky top-0 left-0 z-50 flex w-full p-4 mb-12 text-sm glassmorphism dark:bg-black dark:text-white flex-between md:px-20">
      {/* LOGO AREA */}
      <Link href="/">
        <div className="flex gap-2 max-w-fit flex-center">
          <span
            className={`size-[4rem] p-0.5 grid place-items-center rounded-full border-2 transition-colors duration-500 ${colors[colorIndex]}`}
          >
            <Image
              src="/assets/images/obinox-logo.png"
              alt="Obinox Creative"
              width={70}
              height={70}
              className="rounded-full"
            />
          </span>
          <span>
            <h2 className="text-lg font-semibold">Obinox Creative</h2>
            <h6 className="text-sm">UI/UX Designer</h6>
          </span>
        </div>
      </Link>

      {/* LINKS */}
      <div className="items-center justify-between hidden gap-12 md:flex max-w-fit">
        <ul className="flex gap-8">
          {nav_link.map(({ title, link }, id) => {
            return (
              <li
                key={id}
                className="transition duration-300 hover:text-primary-orange"
              >
                <Link
                  href={link}
                  // className={`${
                  //   isActive ? "text-primary-orange" : "text-blue-500"
                  // } transition-none duration-500 hover:text-primary-orange`}
                  className={`${
                    pathname === link && "text-primary-orange font-semibold"
                  }`}
                >
                  {title}
                </Link>
              </li>
            );
          })}
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
            width={12}
            height={12}
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
      <AnimatePresence>
        {openNav && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className={`${
              openNav ? "block" : "hidden"
            } fixed flex inset-0 h-screen w-full  z-50 bg-gradient-to-r from-[rgba(255,161,0,0.6)] to-[rgba(153,97,0,0.6)] backdrop-blur-[50px] backdrop1 flex-col py-36 items-center`}
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
                onClick={() => {
                  toggleDarkMode();
                  setOpenNav(false);
                }}
              >
                <Image
                  src={`/assets/icons/${isDark ? "light" : "dark"}.svg`}
                  alt="darkMode"
                  width={16}
                  height={16}
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
                <Link href="/contact" onClick={() => setOpenNav(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
