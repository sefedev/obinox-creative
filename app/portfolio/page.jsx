import Contact from "@/components/ContactForm";
import GradientButton from "@/components/GradientButton";
import { PORTFOLIO_COVER } from "@/utils/constant";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="text-left gap-16 text-white -mt-12 flex flex-col md:flex-row flex-center bg-gradient-to-b py-24 from-[rgba(255,156,0,1)] to-[rgba(255,51,0,1)] px-4 w-screen">
        <div>
          <h1 className="mb-4 text-5xl font-bold">
            Check out what has
            <br /> been done so far
          </h1>
          <p>See Projects i have worked on recently.</p>
        </div>

        <Image
          src="/assets/images/hand-collage.png"
          alt="hand-collage"
          className="rounded-lg"
          width={300}
          height={400}
        />
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="flex flex-col max-w-[60rem] gap-16 p-6 my-20 bg-gray-200 dark:bg-[rgba(53,53,53,1)] rounded-md md:p-16">
        {PORTFOLIO_COVER.map(({ name, image, link }, id) => (
          <div key={id} className="flex flex-col gap-4">
            <Image
              src={`/assets/images/${image}.png`}
              width={900}
              height={800}
              alt="Portfolio Cover"
              className="w-full transition-all duration-500 ease-in-out rounded-md hover:cursor-pointer hover:opacity-50"
            />

            <div className="flex flex-col gap-4 md:items-center md:flex-row md:justify-between">
              <span className="md:text-left">
                <h3 className="text-2xl font-semibold underline">{name}</h3>
              </span>
              <div className="flex flex-col gap-4 md:flex-row">
                {/* {image === "entryx-cs" ? (
                  <Link
                    href="/"
                    className="relative px-8 py-4 overflow-hidden text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-400"
                  >
                    <span className="relative z-10">Download as PDF</span>
                    <span className="absolute inset-0 transition-opacity duration-300 ease-in-out bg-green-700 opacity-0 hover:opacity-100"></span>
                  </Link>
                ) : (
                  <></>
                )} */}
                <GradientButton
                  title={
                    image === "entryx-cs" ? "View Case Study" : "View Portfolio"
                  }
                  link={link}
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CONTACT SECTION */}
      <Contact />
    </>
  );
};

export default Portfolio;
