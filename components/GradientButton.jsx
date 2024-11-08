import React from "react";
import "@/styles/global.css";
import Link from "next/link";

const GradientButton = ({ title, link }) => {
  return (
    // <Link
    //   href="/"
    //   className="relative font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-300 btn-link"
    // >
    //   Hover Me
    // </Link>
    <Link
      href={link}
      className="relative bg-gradient-to-r from-orange-600 to-orange-400 text-white px-8 py-4 rounded-lg overflow-hidden"
    >
      <span className="relative z-10">{title}</span>
      <span className="absolute inset-0 bg-green-700 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"></span>
    </Link>
  );
};

export default GradientButton;
