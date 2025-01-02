import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between px-4 py-16 mt-4 gap-y-8 md:px-20">
      <div className="flex flex-wrap w-full lg:w-fit gap-x-16 md:gap-x-32 lg:gap-x-48">
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
                href="/contact"
                className="transition duration-300 hover:text-primary-orange"
              >
                Questions
              </Link>
            </li>
            <li className="mb-1 text-sm">
              <Link
                href="/contact"
                className="transition duration-300 hover:text-primary-orange"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex w-full gap-8 mb-5 md:w-fit">
        <a
          href="https://www.instagram.com/obinoxcreative/profilecard/?igsh=MTM5YWJ6bDlwMDIwaw=="
          target="_blank"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 28 28"
            className="dark:fill-white fill-black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.9994 9.34C11.4195 9.34 9.33958 11.44 9.33958 14C9.33958 16.56 11.4395 18.66 13.9994 18.66C16.5593 18.66 18.6592 16.56 18.6592 14C18.6592 11.44 16.5593 9.34 13.9994 9.34ZM27.9988 14C27.9988 12.06 27.9987 10.16 27.8988 8.22C27.7988 5.98 27.2788 3.98 25.6389 2.36C23.9989 0.72 22.019 0.2 19.7791 0.0999999C17.8392 -9.68575e-08 15.9393 0 13.9994 0C12.0595 0 10.1595 -9.68575e-08 8.21963 0.0999999C5.97973 0.2 3.97982 0.72 2.35989 2.36C0.719968 4 0.199991 5.98 0.0999954 8.22C-9.68532e-08 10.16 0 12.06 0 14C0 15.94 -9.68532e-08 17.84 0.0999954 19.78C0.199991 22.02 0.719968 24.02 2.35989 25.64C3.99982 27.28 5.97973 27.8 8.21963 27.9C10.1595 28 12.0595 28 13.9994 28C15.9393 28 17.8392 28 19.7791 27.9C22.019 27.8 24.0189 27.28 25.6389 25.64C27.2788 24 27.7988 22.02 27.8988 19.78C28.0187 17.86 27.9988 15.94 27.9988 14ZM13.9994 21.18C10.0196 21.18 6.81969 17.98 6.81969 14C6.81969 10.02 10.0196 6.82 13.9994 6.82C17.9792 6.82 21.1791 10.02 21.1791 14C21.1791 17.98 17.9792 21.18 13.9994 21.18ZM21.479 8.2C20.5591 8.2 19.7991 7.46 19.7991 6.52C19.7991 5.58 20.5391 4.84 21.479 4.84C22.419 4.84 23.159 5.58 23.159 6.52C23.164 6.73907 23.124 6.95685 23.0415 7.15983C22.9589 7.36281 22.8355 7.54667 22.679 7.7C22.5257 7.85655 22.3418 7.97993 22.1388 8.0625C21.9359 8.14507 21.7181 8.18506 21.499 8.18L21.479 8.2Z" />
          </svg>
        </a>

        {/* <a href="#" target="_blank">
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            className="dark:fill-white fill-black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 0C20.9636 0 27 6.26 27 14C27 21.74 20.9636 28 13.5 28C6.03643 28 0 21.74 0 14C0 6.26 6.03643 0 13.5 0ZM11.0314 21.38C17.01 21.38 20.2886 16.24 20.2886 11.78V11.34C20.925 10.86 21.4843 10.26 21.9086 9.58C21.33 9.84 20.6936 10.02 20.0379 10.12C20.7129 9.7 21.2336 9.04 21.465 8.26C20.8286 8.64 20.1343 8.92 19.4014 9.08C18.8036 8.42 17.955 8.02 17.0293 8.02C15.2357 8.02 13.77 9.54 13.77 11.4C13.77 11.66 13.7893 11.92 13.8664 12.16C11.1664 12.02 8.75571 10.68 7.155 8.64C6.885 9.14 6.71143 9.72 6.71143 10.34C6.71143 11.5 7.29 12.54 8.15786 13.14C7.61786 13.14 7.11643 12.98 6.69214 12.72V12.76C6.69214 14.4 7.81071 15.76 9.29571 16.08C9.02571 16.16 8.73643 16.2 8.44714 16.2C8.235 16.2 8.04214 16.18 7.83 16.14C8.235 17.48 9.45 18.46 10.8579 18.48C9.73929 19.38 8.33143 19.92 6.80786 19.92C6.53786 19.92 6.28714 19.92 6.03643 19.88C7.46357 20.84 9.18 21.4 11.0121 21.4" />
          </svg>
        </a> */}

        <a
          href="https://youtube.com/@blaqboyob?si=4bgOoS9Q05RgGxCl"
          target="_blank"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 40 28"
            className="dark:fill-white fill-black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M39.592 6.03358C39.4029 4.60582 38.8547 3.24858 37.9982 2.08754C36.9367 1.02397 35.4971 0.418468 33.9905 0.401838C28.4012 5.68845e-07 20 0 20 0C20 0 11.6029 5.68845e-07 6.00545 0.401838C4.49954 0.418993 3.0608 1.02446 1.9998 2.08754C1.13753 3.24637 0.588135 4.6056 0.404 6.03559C0.153776 8.17402 0.018916 10.3243 0 12.477V15.4908C0.018916 17.6436 0.153776 19.7938 0.404 21.9323C0.59388 23.3628 1.13928 24.725 1.98768 25.8944C3.20776 26.9713 4.77528 27.5761 6.40541 27.5982C9.60307 27.9016 20.002 28 20.002 28C20.002 28 28.4072 28 33.9966 27.5982C35.5042 27.5815 36.9446 26.9752 38.0063 25.9104C38.8586 24.7468 39.4051 23.3896 39.596 21.9624C39.8462 19.824 39.9811 17.6737 40 15.521V12.475C39.976 10.3223 39.8398 8.17227 39.592 6.03358ZM15.9741 19.2018V7.91016L26.8821 13.5741L15.9741 19.2018Z"
            />
          </svg>
        </a>
      </div>

      <div className="w-full pt-4 flex-between">
        <Link href="/">
          <h2 className="text-xl font-semibold">Obinox Creative</h2>
          <h6 className="text-xs">UI/UX Designer</h6>
        </Link>
        <span className="text-xs text-gray-600 dark:text-gray-400 font-extralight ">
          &copy; {new Date().getFullYear()}{" "}
          <a href="#" className="w-full hover:underline md:w-fit">
            Obinox.co
          </a>
          , All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
