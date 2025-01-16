"use client";

import GradientButton from "@/components/GradientButton";
import ScrollEffect from "@/components/ScrollEffect";
import { Tabs } from "@/components/Tab";
import { ThemeContext } from "@/context/themes";
import { PROCESS, SERVICE, TESTIMONIAL, TESTIMONY } from "@/utils/constant";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useContext, useEffect, useState, useRef } from "react";
import ImageCarousel from "@/components/ImageCarousel";
import StarRating from "@/components/Rating";
import Limitless from "@/components/Limitless";

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
  // const elementRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("is-visible");
  //         } else {
  //           entry.target.classList.remove("is-visible");
  //         }
  //       });
  //     },
  //     { threshold: 0.1 } // Trigger when 10% of the element is visible
  //   );

  //   if (elementRef.current) {
  //     observer.observe(elementRef.current);
  //   }

  //   return () => {
  //     if (elementRef.current) {
  //       observer.unobserve(elementRef.current);
  //     }
  //   };
  // }, []);

  const gallery = [];

  for (let i = 0; i < 30; i++) {
    gallery.push(
      <Image
        key={i}
        src={`/assets/images/home-design/${i + 1}.jpg`}
        alt={`design-${i + 1}`}
        width={400}
        height={400}
        className="size-[20x]"
      />
    );
  }
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center my-6 bg-transparent gap-y-8 dark:text-white">
        <div className="relative py-4 text-6xl font-semibold md:text-8xl">
          <span className="relative">
            <Limitless />
          </span>
        </div>

        <p className="max-w-lg font-light">
          Design everything you need to take your business to the next level.
          Experience an exciting process, as we execute everything design
          related and many more.
        </p>
        <GradientButton title="Get Started" link="/booking" />
      </section>

      <section className="grid w-[113%] grid-cols-1 gap-10 p-8 my-16 bg-neutral-300  dark:bg-neutral-900 sm:grid-cols-2 md:grid-cols-3">
        {gallery}
      </section>
      <section className="pb-8">
        <Link
          target="_blank"
          href="https://www.behance.net/damilolakintol/"
          className="px-10 py-6 text-sm text-white transition duration-300 bg-gray-800 rounded-lg dark:bg-gray-700 dark:hover:text-gray-800 dark:hover:bg-white hover:bg-gray-800/40"
        >
          Click to see more designs
        </Link>
      </section>
    </>
  );
};

export default Home;
