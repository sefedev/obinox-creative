"use client";

import { ThemeContext } from "@/context/themes";
import { ABOUT_SERVICE, WORK_FLOW } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const About = () => {
  const { isDark } = useContext(ThemeContext);
  const render_services = (services) => (
    <ul className="list-disc">
      {services.map((service, id) => (
        <li key={id} className="mb-1 text-sm">
          {service}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* BIO SECTION */}
      <section className="items-center justify-center gap-16 py-6 md:flex">
        <div className="text-justify">
          <h2 className="mb-4 text-5xl font-semibold">
            Damilola <span className="text-primary-orange">Akintola</span>
          </h2>
          <p className="mb-6 text-sm md:max-w-[24rem]">
            I develop distinctive visual experiences for brands and users via
            various communication designs. With years of experience and with a
            strong foundation in user-centered design principles, I specialize
            in crafting interfaces that are both functional and aesthetically
            engaging. My process is deeply rooted in understanding user needs,
            conducting thorough research, and iterating through design solutions
            that enhance usability and accessibility. I am proficient in tools
            like Figma, Adobe aftereffects, Photoshop, illustrator, Blender and
            more.
          </p>
          <div className="flex flex-col w-full gap-4 text-white md:flex-row md:w-fit">
            <Link
              href="/"
              className="px-12 hover:bg-[#578fd4] bg-[rgba(40,103,178,1)] duration-300 transition-all rounded-md flex-center py-4 w-full gap-1 "
            >
              <Image
                src="/assets/images/linkedin.png"
                alt="Linkedin"
                width={20}
                height={20}
              />
              LinkedIn
            </Link>
            <Link
              href="/"
              className="px-12 bg-[rgba(30,109,255,1)] hover:bg-[#6390e5] duration-300 transition-all rounded-md flex-center py-4 w-full gap-1 "
            >
              <Image
                src="/assets/images/behance.png"
                alt="Linkedin"
                width={20}
                height={20}
              />
              Behance
            </Link>
          </div>
        </div>
        <Image
          src="/assets/images/obinox-logo.png"
          width={300}
          height={300}
          className="hidden rounded-md md:block"
        />
      </section>

      {/* SERVICE SECTION */}
      <section className="py-16">
        <h2 className="mb-8 section_subhead">Services Include</h2>
        <div className="flex flex-col gap-6 md:flex-row">
          {ABOUT_SERVICE.map(({ title, services }, id) => (
            <div
              key={id}
              className={`bg-gradient-to-b ${
                id === 0 && "from-[rgba(255,51,0,1)] to-[rgba(255,154,0,1)]"
              } 
              ${id === 1 && "from-[rgba(255,154,0,1)] to-[rgba(255,116,0,1)]"}
              ${id === 2 && "from-[rgba(255,156,0,1)] to-[rgba(255,51,0,1)]"}
              py-6 px-10 rounded-tl-2xl rounded-br-2xl text-white text-left flex-1 min-h-[21rem] border-2 border-transparent hover:border-gray-300 transform hover:scale-[1.03] transition-all duration-300 dark:hover:border-gray-200 cursor-pointer`}
            >
              <h3 className="mb-4 text-xl font-semibold">{title}</h3>
              {render_services(services)}
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="w-screen py-16">
        <h1 className="mb-4 section_head">SKILL AND PROFICIENCY</h1>
        <h2 className="section_subhead">Special Workflow</h2>
        <div className="flex flex-wrap items-start justify-around flex-grow w-full gap-12 px-4 py-20 mt-6 dark:bg-[rgba(16,16,16,1)] bg-gray-100 md:flex md:px-36">
          {WORK_FLOW.map(({ title, img }, id) => (
            <div key={id} className="flex flex-col gap-4 flex-center">
              <div
                className={`relative size-[5rem] grid place-items-center border border-black dark:border-white rounded-full`}
              >
                <Image
                  src={`/assets/images/${isDark ? "" : "light/"}${img}.svg`}
                  className="absolute inset-auto transition-opacity duration-300 ease-in-out cursor-pointer hover:opacity-0"
                  alt={title}
                  width={id === 0 ? 25 : 35}
                  height={35}
                />
                <Image
                  src={`/assets/images/colored/${img}.svg`}
                  className="absolute inset-auto transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
                  alt={title}
                  width={id === 0 ? 30 : 40}
                  height={35}
                />
              </div>
              <span className="text-sm">
                {id === 4
                  ? title.split(" ").map((word, index) => (
                      <React.Fragment key={index}>
                        {word}
                        {index < title.split(" ").length - 1 && <br />}
                      </React.Fragment>
                    ))
                  : title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CHECK DESIGN SECTION */}
      <section className="pb-8">
        <p className="mb-10 text-sm">Check out some of our designs</p>
        <Link
          href="/portfolio"
          className="px-10 py-6 text-sm text-white transition duration-300 bg-gray-800 rounded-lg dark:bg-gray-700 dark:hover:text-gray-800 dark:hover:bg-white hover:bg-gray-800/40"
        >
          Click to see designs
        </Link>
      </section>
    </>
  );
};

export default About;
