import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-wrap px-4 py-16 mt-4 gap-x-16 md:px-20 md:gap-x-36">
      <div className="mb-5">
        <Link href={""}>
          <h2 className="font-semibold mb-1.5 text-primary-orange">Home</h2>
        </Link>
        <ul>
          <li className="mb-1 text-sm">
            <Link
              href="/"
              className="transition duration-300 hover:text-primary-orange"
            >
              Process
            </Link>
          </li>
          <li className="mb-1 text-sm">
            <Link
              href="/"
              className="transition duration-300 hover:text-primary-orange"
            >
              Services
            </Link>
          </li>
        </ul>
      </div>

      <div className="mb-5">
        <Link href={""}>
          <h2 className="font-semibold mb-1.5 text-primary-orange">About</h2>
        </Link>
        <ul>
          <li className="mb-1 text-sm">
            <Link
              href="/about"
              className="transition duration-300 hover:text-primary-orange"
            >
              Services
            </Link>
          </li>
          <li className="mb-1 text-sm">
            <Link
              href="/about"
              className="transition duration-300 hover:text-primary-orange"
            >
              Skills
            </Link>
          </li>
        </ul>
      </div>

      <div className="mb-5">
        <Link href={""}>
          <h2 className="font-semibold mb-1.5 text-primary-orange">
            Portfolio
          </h2>
        </Link>
        <ul>
          <li className="mb-1 text-sm">
            <Link
              href="/portfolio"
              className="transition duration-300 hover:text-primary-orange"
            >
              Portfolio
            </Link>
          </li>
          <li className="mb-1 text-sm">
            <Link
              href="/portfolio"
              className="transition duration-300 hover:text-primary-orange"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="mb-5">
        <Link href={""}>
          <h2 className="font-semibold mb-1.5 text-primary-orange">Faq</h2>
        </Link>
        <ul>
          <li className="mb-1 text-sm">
            <Link
              href="/faq"
              className="transition duration-300 hover:text-primary-orange"
            >
              Questions
            </Link>
          </li>
          <li className="mb-1 text-sm">
            <Link
              href="/faq"
              className="transition duration-300 hover:text-primary-orange"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-full py-4 flex-between">
        <Link href="/">
          <h2 className="font-semibold">Obinox Creative</h2>
          <h6 className="text-xs">UI/UX Designer</h6>
        </Link>
        <span className="text-xs text-gray-600 font-extralight">
          Copyright@obinox.co
        </span>
      </div>
    </footer>
  );
};

export default Footer;
