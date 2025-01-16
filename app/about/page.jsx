"use client";

import { ThemeContext } from "@/context/themes";
import {
  ABOUT_SERVICE,
  TESTIMONIAL,
  TESTIMONY,
  WORK_FLOW,
} from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import StarRating from "@/components/Rating";

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
            <a
              href="https://www.linkedin.com/in/damilola-akintola-383b67120/"
              className="px-12 hover:bg-[#578fd4] bg-[rgba(40,103,178,1)] duration-300 transition-all rounded-md flex-center py-4 w-full gap-1 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/linkedin.png"
                alt="Linkedin"
                width={20}
                height={20}
              />
              LinkedIn
            </a>
            <a
              href="https://www.behance.net/damilolakintol/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 bg-[rgba(30,109,255,1)] hover:bg-[#6390e5] duration-300 transition-all rounded-md flex-center py-4 w-full gap-1 "
            >
              <Image
                src="/assets/images/behance.png"
                alt="Linkedin"
                width={20}
                height={20}
              />
              Behance
            </a>
          </div>
        </div>
        <Image
          src="/assets/images/obinox-logo.png"
          width={300}
          height={300}
          className="hidden rounded-md md:block"
        />
      </section>

      {/* WORKED WITH SECTION */}
      <section className="flex-col gap-6 py-4 my-16 flex-center">
        <h2 className="tracking-[0.2rem] font-light">WE HAVE WORKED WITH</h2>
        <div className="relative flex flex-wrap my-6 md:overflow-hidden gap-x-10">
          {/* FADED EDGES */}
          <div
            className={`absolute inset-x-0 top-0 h-full pointer-events-none ${
              isDark && "hidden"
            }`}
          >
            <div className="absolute left-0 z-50 w-20 h-full bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute right-0 z-50 w-20 h-full bg-gradient-to-l from-white to-transparent"></div>
          </div>
          <div className="md:w-[48rem] gap-6 overflow-hidden">
            <motion.div
              className="flex w-[80%]"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
            >
              {[...TESTIMONY, ...TESTIMONY].map(({ name, width }, id) => (
                <div key={id} className="flex-shrink-0 mx-4">
                  <Image
                    src={`/assets/images/${
                      isDark ? "dark" : "light"
                    }/${name}.png`}
                    alt={name}
                    width={120}
                    height={10}
                    unoptimized={true}
                    className={`h-[2.5rem]`}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
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
      <section className="pb-8 mb-2">
        <Link
          target="_blank"
          href="https://www.behance.net/damilolakintol/"
          className="px-10 py-6 text-sm text-white transition duration-300 bg-gray-800 rounded-lg dark:bg-gray-700 dark:hover:text-gray-800 dark:hover:bg-white hover:bg-gray-800/40"
        >
          Click to see designs
        </Link>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="flex-col gap-6 py-4 my-10 text-center flex-center">
        <h2 className="text-3xl text-primary-orange">What Clients Say!</h2>
        <h3 className="text-sm tracking-wide">
          See what clients thinks about my services
        </h3>
        <div className="flex flex-col gap-4 my-4 md:flex-row card-container">
          {TESTIMONIAL.map(
            ({ number, name, title, desc, rating, media }, id) => (
              <div
                key={id}
                className="flex flex-col gap-2 testimony-card p-6 text-white dark:text-black dark:bg-white bg-black border-[3px] rounded-md border-primary-orange w-full md:w-[24rem] min-h-[12rem]"
              >
                <div className="flex items-center gap-4 title">
                  <div className="rounded-full ">
                    <Image
                      src={`/assets/images/testimonial-${number}.png`}
                      className="rounded-full"
                      alt="profile"
                      width={50}
                      height={50}
                    />
                  </div>
                  <span className="flex-1 text-left">
                    <h2 className="font-semibold">{name}</h2>
                    <p className="text-sm">{title}</p>
                  </span>
                </div>
                <div className="flex-1 py-2 text-sm font-light text-left description">
                  {desc}
                </div>
                <div className="flex items-center justify-between rating">
                  <StarRating rating={rating} />
                  <div>
                    {number === "3" ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 28 28"
                        className="dark:fill-black fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.9994 9.34C11.4195 9.34 9.33958 11.44 9.33958 14C9.33958 16.56 11.4395 18.66 13.9994 18.66C16.5593 18.66 18.6592 16.56 18.6592 14C18.6592 11.44 16.5593 9.34 13.9994 9.34ZM27.9988 14C27.9988 12.06 27.9987 10.16 27.8988 8.22C27.7988 5.98 27.2788 3.98 25.6389 2.36C23.9989 0.72 22.019 0.2 19.7791 0.0999999C17.8392 -9.68575e-08 15.9393 0 13.9994 0C12.0595 0 10.1595 -9.68575e-08 8.21963 0.0999999C5.97973 0.2 3.97982 0.72 2.35989 2.36C0.719968 4 0.199991 5.98 0.0999954 8.22C-9.68532e-08 10.16 0 12.06 0 14C0 15.94 -9.68532e-08 17.84 0.0999954 19.78C0.199991 22.02 0.719968 24.02 2.35989 25.64C3.99982 27.28 5.97973 27.8 8.21963 27.9C10.1595 28 12.0595 28 13.9994 28C15.9393 28 17.8392 28 19.7791 27.9C22.019 27.8 24.0189 27.28 25.6389 25.64C27.2788 24 27.7988 22.02 27.8988 19.78C28.0187 17.86 27.9988 15.94 27.9988 14ZM13.9994 21.18C10.0196 21.18 6.81969 17.98 6.81969 14C6.81969 10.02 10.0196 6.82 13.9994 6.82C17.9792 6.82 21.1791 10.02 21.1791 14C21.1791 17.98 17.9792 21.18 13.9994 21.18ZM21.479 8.2C20.5591 8.2 19.7991 7.46 19.7991 6.52C19.7991 5.58 20.5391 4.84 21.479 4.84C22.419 4.84 23.159 5.58 23.159 6.52C23.164 6.73907 23.124 6.95685 23.0415 7.15983C22.9589 7.36281 22.8355 7.54667 22.679 7.7C22.5257 7.85655 22.3418 7.97993 22.1388 8.0625C21.9359 8.14507 21.7181 8.18506 21.499 8.18L21.479 8.2Z" />
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 17 17"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.75 0.5H4.25C2.17893 0.5 0.5 2.17893 0.5 4.25V12.75C0.5 14.8211 2.17893 16.5 4.25 16.5H12.75C14.8211 16.5 16.5 14.8211 16.5 12.75V4.25C16.5 2.17893 14.8211 0.5 12.75 0.5Z"
                          className="dark:fill-white fill-black"
                        />
                        <path
                          d="M12.75 0.5H4.25C2.17893 0.5 0.5 2.17893 0.5 4.25V12.75C0.5 14.8211 2.17893 16.5 4.25 16.5H12.75C14.8211 16.5 16.5 14.8211 16.5 12.75V4.25C16.5 2.17893 14.8211 0.5 12.75 0.5Z"
                          // fill="#0A66C2"
                          className="dark:fill-black fill-white"
                        />
                        <path
                          d="M12.0447 14.1053H13.8741C13.9404 14.1053 14.0039 14.079 14.0508 14.0321C14.0977 13.9852 14.124 13.9217 14.1241 13.8554L14.125 9.99025C14.125 7.97006 13.6897 6.41725 11.3289 6.41725C10.4314 6.38388 9.58512 6.8465 9.12844 7.619C9.1262 7.62275 9.12281 7.62567 9.11876 7.62731C9.11471 7.62895 9.11024 7.62922 9.10603 7.62808C9.10181 7.62694 9.09808 7.62445 9.09542 7.62099C9.09275 7.61754 9.09129 7.6133 9.09125 7.60894V6.85375C9.09125 6.78745 9.06491 6.72386 9.01803 6.67697C8.97114 6.63009 8.90755 6.60375 8.84125 6.60375H7.10519C7.03888 6.60375 6.9753 6.63009 6.92841 6.67697C6.88153 6.72386 6.85519 6.78745 6.85519 6.85375V13.855C6.85519 13.9213 6.88153 13.9849 6.92841 14.0318C6.9753 14.0787 7.03888 14.105 7.10519 14.105H8.93444C9.00074 14.105 9.06433 14.0787 9.11121 14.0318C9.1581 13.9849 9.18444 13.9213 9.18444 13.855V10.3942C9.18444 9.41563 9.37006 8.46794 10.5833 8.46794C11.7792 8.46794 11.7947 9.58769 11.7947 10.4576V13.8553C11.7947 13.9216 11.821 13.9852 11.8679 14.0321C11.9148 14.079 11.9784 14.1053 12.0447 14.1053ZM2.875 4.22675C2.875 4.96825 3.48544 5.57837 4.227 5.57837C4.96837 5.57831 5.57844 4.96781 5.57844 4.22644C5.57831 3.48506 4.96819 2.875 4.22675 2.875C3.48512 2.875 2.875 3.48525 2.875 4.22675ZM3.30994 14.1053H5.14162C5.20793 14.1053 5.27152 14.079 5.3184 14.0321C5.36529 13.9852 5.39162 13.9216 5.39162 13.8553V6.85375C5.39162 6.78745 5.36529 6.72386 5.3184 6.67697C5.27152 6.63009 5.20793 6.60375 5.14162 6.60375H3.30994C3.24363 6.60375 3.18004 6.63009 3.13316 6.67697C3.08628 6.72386 3.05994 6.78745 3.05994 6.85375V13.8553C3.05994 13.9216 3.08628 13.9852 3.13316 14.0321C3.18004 14.079 3.24363 14.1053 3.30994 14.1053Z"
                          className="dark:fill-white fill-black"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default About;
