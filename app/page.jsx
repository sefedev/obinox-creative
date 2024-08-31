"use client";

import GradientButton from "@/components/GradientButton";
import ScrollEffect from "@/components/ScrollEffect";
import { Tabs } from "@/components/Tab";
import { ThemeContext } from "@/context/themes";
import { PROCESS, SERVICE, TESTIMONY } from "@/utils/constant";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useContext, useEffect, useState, useRef } from "react";

const Home = () => {
  const [first, setFirst] = useState(true);
  const { isDark } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gradients.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const gradients = [
    "bg-gradient-to-r from-green-500  to-green-800",
    "bg-gradient-to-r dark:from-white dark:to-white from-black to-black",
    "bg-gradient-to-r from-orange-500  to-orange-800",
    "bg-gradient-to-r from-purple-500  to-purple-800",
  ];

  // ANIMATE ON SCROLL
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* BACKDROP */}
      <>
        <ScrollEffect>
          <Image
            src="/assets/images/backdrop-left.svg"
            alt="backdrop-left"
            className="absolute top-0 hidden -z-50 -left-10 md:block"
            width={300}
            height={300}
          />
        </ScrollEffect>
        <ScrollEffect>
          <Image
            src="/assets/images/backdrop-right.svg"
            alt="backdrop-right"
            className="absolute top-0 hidden -z-50 -right-10 md:block"
            width={300}
            height={300}
          />
        </ScrollEffect>
      </>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center my-6 gap-y-8 dark:text-white dark:bg-black">
        <div className="relative py-4 text-6xl font-semibold md:text-8xl">
          {gradients.map((gradient, index) => (
            <h1
              key={index}
              className={`absolute inset-0 bg-clip-text text-transparent ${gradient} transition-opacity duration-1000 ease-in-out ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Limitless
              <br /> Digital Designs
            </h1>
          ))}
          <span className="relative text-transparent">
            Limitless
            <br /> Digital Designs
          </span>
        </div>

        <p className="max-w-lg">
          Design everything you need to take your business to the next level.
          Experience an exciting process, as we execute everything design
          related and many more.
        </p>
        <div className="md:max-w-lg ">
          <ul className="flex flex-wrap gap-x-8 gap-y-1 flex-center">
            <li className="flex gap-1 flex-center">
              <span>
                <Image
                  src="/assets/icons/checkmark-light.svg"
                  alt="checkmark"
                  width={15}
                  height={15}
                />
              </span>
              <p>Website/Mobile App Design</p>
            </li>
            <li className="flex gap-1 flex-center">
              <span>
                <Image
                  src="/assets/icons/checkmark-light.svg"
                  alt="checkmark"
                  width={15}
                  height={15}
                />
              </span>
              <p>Project Based Packages</p>
            </li>
            <li className="flex gap-1 flex-center">
              <span>
                <Image
                  src="/assets/icons/checkmark-light.svg"
                  alt="checkmark"
                  width={15}
                  height={15}
                />
              </span>
              <p>Branding and Advertising Materials</p>
            </li>
          </ul>
        </div>

        {/* <Link
          href="/faq#contact"
          passHref
          className="text-white border dark:border-black btn-orange-gradient "
        >
          Make your ideas come alive
        </Link> */}
        <GradientButton title="Make your ideas come alive" link="/faq" />
      </section>

      {/* TESTIMONIAL SECTION */}
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

      {/* BACKDROP FOR MOBILE ONLY */}
      <div className="relative w-full h-40 mb-24 md:hidden -inset-x-6">
        <ScrollEffect>
          <Image
            src="/assets/images/backdrop-mobile.png"
            alt="backdrop-left"
            className="absolute w-[22rem] top-0 h-[14rem] block md:hidden"
            width={250}
            height={250}
          />
        </ScrollEffect>
      </div>

      {/* PROCESS SECTION */}
      <section className="flex-col gap-6 py-4 my-6 text-center flex-center">
        <h2 className="section_head">STEP BY STEP PROCESS</h2>
        <h1 className="section_subhead">Design with ease</h1>

        {/* For desktop */}
        <div className=" flex-col gap-8 hidden min-w-[968px] text-left md:flex">
          <ScrollEffect>
            <div className="flex items-center justify-between">
              <Image
                src="/assets/images/pro_card_1.svg"
                alt="Card 1"
                width={350}
                height={150}
              />
              <span className="px-6 py-4 font-semibold text-white rounded-full bg-primary-orange">
                1
              </span>
              <div className="w-[22rem]">
                <h3 className="mb-2 text-lg font-semibold">
                  Ideas and Research
                </h3>
                <p className="max-w-xs text-sm ">
                  Ideas and solutions for the design problems, I study target
                  users' needs, behaviors, and pain points through interviews,
                  surveys, and observations.
                </p>
              </div>
            </div>
          </ScrollEffect>

          <ScrollEffect>
            <div className="flex items-center justify-between">
              <div className=" w-[22rem]">
                <h3 className="mb-2 text-lg font-semibold">
                  Structure and design
                </h3>
                <p className="max-w-xs text-sm ">
                  Create quick sketches or wireframes to visualize initial
                  concepts, I create interactive prototypes that simulate user
                  interactions and workflows.
                </p>
              </div>
              <span className="px-6 py-4 font-semibold text-white rounded-full bg-primary-orange">
                2
              </span>
              <Image
                src="/assets/images/pro_card_2.svg"
                alt="Card 1"
                width={350}
                height={150}
              />
            </div>
          </ScrollEffect>

          <ScrollEffect>
            <div className="flex items-center justify-between">
              <Image
                src="/assets/images/pro_card_3.svg"
                alt="Card 1"
                width={350}
                height={150}
              />
              <span className="px-6 py-4 font-semibold text-white rounded-full bg-primary-orange">
                3
              </span>
              <div className="w-[22rem]">
                <h3 className="mb-2 text-lg font-semibold">
                  Testing and Implementing
                </h3>
                <p className="max-w-xs text-sm ">
                  Conduct tests with real users to identify issues and gather
                  feedback and work closely with development teams to ensure the
                  design is implemented accurately.
                </p>
              </div>
            </div>
          </ScrollEffect>

          <ScrollEffect>
            <div className="flex items-center justify-between">
              <div className="w-[22rem]">
                <h3 className="mb-2 text-lg font-semibold">
                  Launch and Documentation
                </h3>
                <p className="max-w-xs text-sm">
                  Release the product to users, ensuring all elements are
                  functioning as intended and Keep detailed records of the
                  design process, decisions, and changes.
                </p>
              </div>
              <span className="px-6 py-4 font-semibold text-white rounded-full bg-primary-orange">
                4
              </span>
              <Image
                src="/assets/images/pro_card_4.svg"
                alt="Card 1"
                width={350}
                height={150}
              />
            </div>
          </ScrollEffect>
        </div>

        {/* For mobile */}
        <div className="flex flex-col gap-8 md:hidden">
          {PROCESS.map(({ number, title, desc }) => (
            <ScrollEffect>
              <span
                key={number}
                className="flex flex-col items-center justify-between gap-6"
              >
                <span className="px-6 py-4 font-semibold text-white rounded-full bg-primary-orange">
                  {number}
                </span>
                <Image
                  src={`/assets/images/pro_card_${number}.svg`}
                  alt="Card 1"
                  width={350}
                  height={150}
                />

                <div className="">
                  <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                  <p className="max-w-xs text-sm ">{desc}</p>
                </div>
              </span>
            </ScrollEffect>
          ))}
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section className="flex-col gap-6 py-4 my-6 text-center flex-center">
        <h2 className="section_head">EXPLORE MY SERVICES</h2>
        <h1 className="section_subhead">Get Started</h1>

        {/* For Mobile */}
        <div className="flex-col gap-8 flex-center md:hidden">
          {SERVICE.map(({ title, desc, color }, id) => (
            <div key={id} className="w-full text-white">
              <div className={`p-6 rounded-t-lg`} style={{ background: color }}>
                {title}
              </div>
              <div className="px-4 py-6 text-sm bg-gray-950 dark:bg-gray-900 h-[18rem] grid place-items-center">
                {desc}
              </div>
            </div>
          ))}
        </div>

        {/* For Desktop */}
        <Tabs first={first} setFirst={setFirst} />

        <>
          {first ? (
            <></>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <Image
                    src="/assets/icons/setting-dark.svg"
                    alt="Settings"
                    width={40}
                    height={40}
                  />
                  <h3 className="mb-4">
                    Get the best services and enjoy a wonderful design
                    experience
                  </h3>
                </div>
              </motion.div>
            </>
          )}
        </>
      </section>
    </>
  );
};

export default Home;
