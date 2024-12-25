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
      <section className="flex flex-col w-screen gap-16 px-4 py-24 -mt-12 text-left text-white md:flex-row flex-center">
        <div>
          <h1 className="mb-4 text-5xl font-bold text-black dark:text-white">
            Check out some of
            <br /> my <span className="text-primary-orange">designs</span>
          </h1>
          <p className="mb-8 text-black dark:text-white">
            Need Design services?
          </p>
          <Link
            className="px-8 py-4 my-4 rounded-md btn-orange-gradient"
            href="/booking"
          >
            Book Now
          </Link>
        </div>

        <Image
          src="/assets/images/portfolio-obj.png"
          alt="portfolio object"
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
    </>
  );
};

export default Portfolio;
