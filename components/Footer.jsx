import Link from "next/link";
import React from "react";

const Home = [
  {
    title: "Design Hers",
    link: "",
  },
  {
    title: "Process",
    link: "",
  },
  {
    title: "Services",
    link: "",
  },
];

const About = [
  {
    title: "Offers",
    link: "",
  },
  {
    title: "Services",
    link: "",
  },
  {
    title: "Packages",
    link: "",
  },
];

const Portfolio = [
  {
    title: "Branding",
    link: "",
  },
  {
    title: "Web Design",
    link: "",
  },
  {
    title: "3D Design",
    link: "",
  },
  {
    title: "Contact",
    link: "",
  },
];

const Faq = [
  {
    title: "Question",
    link: "",
  },
  {
    title: "Contact Us",
    link: "",
  },
];

const ALL_LINKS = [Home, About, Portfolio, Faq];

const Footer = () => {
  return (
    <footer className="flex flex-wrap px-4 py-16 mt-4 gap-x-16 md:px-20 md:gap-x-36">
      {ALL_LINKS.map((links) => (
        <div key={links} className="mb-5">
          <Link href="/">
            <h2 className="font-semibold mb-1.5 text-primary-orange">Home</h2>
          </Link>
          <ul>
            {links.map(({ title, link }) => (
              <li className="mb-1 text-sm" key={title}>
                <Link href="/">{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="w-full py-4 flex-between">
        <span>
          <h2 className="font-semibold">Obinox Creative</h2>
          <h6 className="text-xs">UI/UX Designer</h6>
        </span>
        <span className="text-xs text-gray-600 font-extralight">
          Copyright@obinox.co
        </span>
      </div>
    </footer>
  );
};

export default Footer;
