"use client";

import { Tabs } from "@/components/Tab";
import { PROCESS, SERVICE, TESTIMONY } from "@/utils/constant";
import Image from "next/image";
import React, { useState } from "react";

const Home = () => {
  const [first, setFirst] = useState(true);
  return (
    <>
      {/* BACKDROP */}
      <>
        <Image
          src="/assets/images/backdrop-left.svg"
          alt="backdrop-left"
          className="absolute top-0 hidden -z-50 -left-10 md:block"
          width={300}
          height={300}
        />
        <Image
          src="/assets/images/backdrop-right.svg"
          alt="backdrop-right"
          className="absolute top-0 hidden -z-50 -right-10 md:block"
          width={300}
          height={300}
        />
      </>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center my-6 gap-y-8">
        {/* <h1 className="text-[42px] leading-10 font-semibold md:text-7xl mb-4">
          Limitless
          <br /> Digital Designs
        </h1> */}

        <Image
          src="/assets/images/hero-main.png"
          alt="limitless digital deisgns"
          width={400}
          height={400}
          className="md:w-[36rem] hover:cursor-pointer"
        />
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

        <button className="text-white btn-orange-gradient">
          Make your ideas come alive
        </button>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="flex-col gap-6 py-4 my-6 flex-center">
        <h2 className="tracking-[0.2rem] font-light">WE HAVE WORKED WITH</h2>
        <div className="flex flex-wrap gap-x-8">
          {TESTIMONY.map(({ name, width }) => (
            <Image
              src={`/assets/images/${name}.png`}
              alt={name}
              key={name}
              width={width}
              height={40}
            />
          ))}
        </div>
      </section>

      {/* BACKDROP FOR MOBILE ONLY */}
      <div className="relative w-full h-40 mb-24 md:hidden -inset-x-6">
        <Image
          src="/assets/images/backdrop-mobile.png"
          alt="backdrop-left"
          className="absolute w-[22rem] top-0 h-[14rem] block md:hidden"
          width={250}
          height={250}
        />
      </div>

      {/* PROCESS SECTION */}
      <section className="flex-col gap-6 py-4 my-6 text-center flex-center">
        <h2 className="section_head">STEP BY STEP PROCESS</h2>
        <h1 className="section_subhead">Design with ease</h1>

        {/* For desktop */}
        <div className=" flex-col gap-4 hidden min-w-[876px] text-left md:flex">
          <span className="flex items-center justify-between">
            <Image
              src="/assets/images/pro_card_1.svg"
              alt="Card 1"
              width={350}
              height={150}
            />
            <span className="px-6 py-4 font-semibold text-white rounded-full bg-primary-orange">
              1
            </span>
            <div className="">
              <h3 className="mb-2 text-lg font-semibold">Ideas and Research</h3>
              <p className="max-w-xs text-sm ">
                Ideas and solutions for the design problems, I study target
                users' needs, behaviors, and pain points through interviews,
                surveys, and observations.
              </p>
            </div>
          </span>

          <span className="flex items-center justify-between">
            <div className="">
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
          </span>

          <span className="flex items-center justify-between">
            <Image
              src="/assets/images/pro_card_3.svg"
              alt="Card 1"
              width={350}
              height={150}
            />
            <span className="px-6 py-4 font-semibold text-white rounded-full bg-primary-orange">
              3
            </span>
            <div className="">
              <h3 className="mb-2 text-lg font-semibold">
                Testing and Implementing
              </h3>
              <p className="max-w-xs text-sm ">
                Conduct tests with real users to identify issues and gather
                feedback and work closely with development teams to ensure the
                design is implemented accurately.
              </p>
            </div>
          </span>

          <span className="flex items-center justify-between">
            <div className="">
              <h3 className="mb-2 text-lg font-semibold">
                Launch and Documentation
              </h3>
              <p className="max-w-xs text-sm">
                Release the product to users, ensuring all elements are
                functioning as intended and Keep detailed records of the design
                process, decisions, and changes.
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
          </span>
        </div>

        {/* For mobile */}
        <div className="flex flex-col gap-8 md:hidden">
          {PROCESS.map(({ number, title, desc }) => (
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
              <div className="px-4 py-6 text-sm bg-gray-950 h-[18rem] grid place-items-center">
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
              <Image
                src="/assets/icons/setting-dark.svg"
                alt="Settings"
                width={40}
                height={40}
              />
              <h3 className="mb-4">
                Get the best services and enjoy a wonderful design experience
              </h3>
            </>
          )}
        </>
      </section>
    </>
  );
};

export default Home;
