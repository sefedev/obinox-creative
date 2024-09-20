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
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center my-6 bg-transparent gap-y-8 dark:text-white">
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

        <p className="max-w-lg font-light">
          Design everything you need to take your business to the next level.
          Experience an exciting process, as we execute everything design
          related and many more.
        </p>
        <GradientButton title="Make your ideas come alive" link="/contact" />
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

      {/* PROCESS SECTION */}
      <section className="flex-col text-white gap-6 py-16 my-6 text-center flex-center bg-gradient-to-b w-screen from-[rgba(255,51,0,1)] to-[rgba(255,154,0,1)]">
        <h2 className="section_head">STEP BY STEP PROCESS</h2>
        <h1 className="section_subhead">Design with ease</h1>

        <div className="md:min-w-[968px] text-left w-full md:px-16">
          <ScrollEffect>
            <div className="flex flex-col w-full gap-8 text-center md:text-left md:flex-row">
              {PROCESS.map(({ number, title, desc }) => (
                <div
                  className="flex flex-col items-center justify-between md:items-start"
                  key={number}
                >
                  <Image
                    src={`/assets/images/pro_card_${number}.svg`}
                    alt="process-card"
                    width={250}
                    height={100}
                  />
                  <div className="flex flex-col justify-start md:items-start">
                    <h3 className="mt-4 mb-0.5 text-lg font-semibold">
                      {title}
                    </h3>
                    <p className="flex-1 text-sm font-light min-w-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollEffect>
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

export default Home;
